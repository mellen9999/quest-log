import blessed from "neo-blessed"
import { watch, readFileSync, existsSync } from "fs"
import { execFileSync } from "child_process"
import { C, fg, selLine, statusLine, progressBar } from "./theme"
import { setFocused } from "./ui"
import { showInputModal, showConfirmModal, showHelpOverlay, showSessionsOverlay } from "./modal"
import * as store from "./store"
import * as pty from "./pty"
import { log, logError } from "./log"
import { saveUIState } from "./uistate"

export function cleanupSessions(state: AppState): void {
  for (const [, sess] of state.sessions) {
    pty.killSession(sess)
  }
  state.sessions.clear()
}
import { scanRepos, getRepoStatus } from "./scan"
import type { RepoInfo } from "./scan"
import type { AppState, PanelName, LeftPanel, SessionInfo } from "./types"

const LEFT_PANELS: LeftPanel[] = ["projects", "tasks", "subtasks"]

// Escape braces so blessed tags: true doesn't interpret them as tags
function escapeBraces(s: string): string {
  return s.replace(/\{/g, "{open}").replace(/\}/g, "{close}")
}

// ANSI escape helpers for the terminal panel
function rgb(hex: string): string {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `\x1b[38;2;${r};${g};${b}m`
}
const RST = "\x1b[0m"
function ansi(color: string, text: string): string {
  return `${rgb(color)}${text}${RST}`
}

interface PanelSet {
  projects: blessed.Widgets.BoxElement
  tasks: blessed.Widgets.BoxElement
  subtasks: blessed.Widgets.BoxElement
  terminal: blessed.Widgets.BoxElement
}

// Cache git status per project path
const gitCache = new Map<string, { dirty: boolean; branch: string }>()

function refreshGitCache(projects: { path?: string }[]) {
  gitCache.clear()
  for (const p of projects) {
    if (!p.path) continue
    const status = getRepoStatus(p.path)
    if (status) gitCache.set(p.path, status)
  }
}

export function setupPanels(
  screen: blessed.Widgets.Screen,
  panels: PanelSet,
  header: blessed.Widgets.BoxElement,
  statusBar: blessed.Widgets.BoxElement,
  state: AppState,
  initialRepos?: RepoInfo[],
) {
  // Build initial git cache
  refreshGitCache(state.data.projects)
  let modalOpen = false
  let gPending = false
  let lastLaunch = 0

  // Search state
  let filteredIndices: number[] = []

  // Input buffer (manual handling, no blessed textbox)
  let inputBuffer = ""

  // ── Helpers ──────────────────────────────────────────────

  function sortProjects() {
    const selected = state.data.projects[state.projectIdx]
    state.data.projects.sort((a, b) => {
      // Running sessions first
      const aRunning = state.sessions.has(a.id) ? 0 : 1
      const bRunning = state.sessions.has(b.id) ? 0 : 1
      if (aRunning !== bRunning) return aRunning - bRunning
      // Undone before done
      const aDone = a.done ? 1 : 0
      const bDone = b.done ? 1 : 0
      if (aDone !== bDone) return aDone - bDone
      // Within undone: most recently active first
      if (!a.done && !b.done) {
        const aAct = a.lastActivity ?? 0
        const bAct = b.lastActivity ?? 0
        if (aAct !== bAct) return bAct - aAct
      }
      return 0
    })
    // Follow selection after sort
    if (selected) {
      const newIdx = state.data.projects.indexOf(selected)
      if (newIdx !== -1) state.projectIdx = newIdx
    }
  }

  function clampIndices() {
    const pLen = state.data.projects.length
    state.projectIdx = pLen === 0 ? 0 : Math.min(state.projectIdx, pLen - 1)

    // If landed on a hidden project, find nearest visible one
    if (pLen > 0 && !state.showArchived) {
      const p = state.data.projects[state.projectIdx]
      if (p?.done && !state.sessions.has(p.id)) {
        // Search forward then backward for a visible project
        let found = -1
        for (let i = state.projectIdx + 1; i < pLen; i++) {
          const pi = state.data.projects[i]!
          if (!pi.done || state.sessions.has(pi.id)) { found = i; break }
        }
        if (found === -1) {
          for (let i = state.projectIdx - 1; i >= 0; i--) {
            const pi = state.data.projects[i]!
            if (!pi.done || state.sessions.has(pi.id)) { found = i; break }
          }
        }
        if (found !== -1) state.projectIdx = found
      }
    }

    const proj = state.data.projects[state.projectIdx]
    const tLen = proj ? proj.tasks.length : 0
    state.taskIdx = tLen === 0 ? 0 : Math.min(state.taskIdx, tLen - 1)

    const task = proj?.tasks[state.taskIdx]
    const sLen = task ? task.subtasks.length : 0
    state.subtaskIdx = sLen === 0 ? 0 : Math.min(state.subtaskIdx, sLen - 1)
  }

  function currentIdx(): number {
    if (state.leftPanel === "projects") return state.projectIdx
    if (state.leftPanel === "tasks") return state.taskIdx
    return state.subtaskIdx
  }

  function setCurrentIdx(val: number) {
    if (state.leftPanel === "projects") state.projectIdx = val
    else if (state.leftPanel === "tasks") state.taskIdx = val
    else state.subtaskIdx = val
  }

  function listLength(): number {
    if (state.leftPanel === "projects") return state.data.projects.length
    const proj = state.data.projects[state.projectIdx]
    if (state.leftPanel === "tasks") return proj ? proj.tasks.length : 0
    const task = proj?.tasks[state.taskIdx]
    return task ? task.subtasks.length : 0
  }

  function currentProject() {
    return state.data.projects[state.projectIdx]
  }

  function currentSession(): SessionInfo | undefined {
    const proj = currentProject()
    return proj ? state.sessions.get(proj.id) : undefined
  }

  function isOnTerminal(): boolean {
    return state.panel === "terminal"
  }

  function isOnLeft(): boolean {
    return state.panel !== "terminal"
  }

  // Terminal panel dimensions (inside border)
  function termDims(): { cols: number; rows: number } {
    const w = (panels.terminal.width as number) || 80
    const h = (panels.terminal.height as number) || 24
    return { cols: Math.max(10, w - 2), rows: Math.max(4, h - 2) }
  }

  // ── Search helpers ──────────────────────────────────────

  function getSearchItems(): { name: string }[] {
    if (state.leftPanel === "projects") return state.data.projects
    const proj = currentProject()
    if (state.leftPanel === "tasks") return proj ? proj.tasks : []
    const task = proj?.tasks[state.taskIdx]
    return task ? task.subtasks : []
  }

  function fuzzyScore(str: string, query: string): number {
    const s = str.toLowerCase()
    const q = query.toLowerCase()
    let si = 0, qi = 0, score = 0, consecutive = 0
    while (si < s.length && qi < q.length) {
      if (s[si] === q[qi]) {
        score += 1 + consecutive
        // Bonus for word boundary match
        if (si === 0 || s[si - 1] === " " || s[si - 1] === "-" || s[si - 1] === "_") score += 5
        consecutive++
        qi++
      } else {
        consecutive = 0
      }
      si++
    }
    return qi === q.length ? score : 0
  }

  function computeFilteredIndices(): number[] {
    if (!state.searchQuery) return []
    const items = getSearchItems()
    const q = state.searchQuery
    const scored: { idx: number; score: number }[] = []
    for (let i = 0; i < items.length; i++) {
      const s = fuzzyScore(items[i]!.name, q)
      if (s > 0) scored.push({ idx: i, score: s })
    }
    scored.sort((a, b) => b.score - a.score)
    return scored.map(s => s.idx)
  }

  function moveFiltered(dir: 1 | -1): void {
    if (!state.searchQuery) { move(dir); return }
    filteredIndices = computeFilteredIndices()
    if (filteredIndices.length === 0) return

    const idx = currentIdx()
    const pos = filteredIndices.indexOf(idx)

    if (pos === -1) {
      setCurrentIdx(filteredIndices[dir === 1 ? 0 : filteredIndices.length - 1]!)
    } else {
      const next = pos + dir
      if (next >= 0 && next < filteredIndices.length) {
        setCurrentIdx(filteredIndices[next]!)
      }
    }

    if (state.leftPanel === "projects") {
      state.taskIdx = 0
      state.subtaskIdx = 0
    } else if (state.leftPanel === "tasks") {
      state.subtaskIdx = 0
    }
    renderAll()
  }

  // ── Render functions ───────────────────────────────────

  function renderHeader() {
    const s = store.globalStats(state.data)
    const sess = currentSession()
    const durStr = sess ? ` ${fg(C.dim, "│")} ${fg(C.peach, pty.formatDuration(sess.startedAt))}` : ""
    const archStr = state.showArchived ? ` ${fg(C.dim, "│")} ${fg(C.yellow, "[ALL]")}` : ""
    header.setContent(
      ` ${fg(C.mauve, "⚔ Quest Log")}` +
      `${fg(C.dim, " ──")} ` +
      `${fg(C.text, String(s.projects))} ${fg(C.subtext, "projects")}` +
      `${fg(C.dim, " │")} ` +
      `${fg(C.text, String(s.tasks))} ${fg(C.subtext, "tasks")}` +
      `${fg(C.dim, " │")} ` +
      `${fg(C.text, `${s.pct}%`)} ${fg(C.subtext, "done")}` +
      durStr +
      archStr,
    )
  }

  function renderProjects() {
    const panel = panels.projects
    const projects = state.data.projects

    if (projects.length === 0) {
      panel.setContent(
        `\n{center}${fg(C.dim, "No quests yet")}{/center}` +
        `\n\n{center}${fg(C.subtext, "Press ")}${fg(C.blue, "a")}${fg(C.subtext, " to add one")}{/center}`,
      )
      return
    }

    const lines: string[] = []
    const searchQ = state.searchQuery.toLowerCase()
    let displayLine = -1

    for (let i = 0; i < projects.length; i++) {
      const p = projects[i]!

      // Archive filter: hide done projects unless showArchived
      if (p.done && !state.showArchived && !state.sessions.has(p.id)) continue

      if (searchQ && state.leftPanel === "projects" && fuzzyScore(p.name, state.searchQuery) === 0) continue

      const sel = state.leftPanel === "projects" && i === state.projectIdx
      if (sel) displayLine = lines.length

      const stats = store.projectStats(p)
      const partial = store.isPartiallyDone(p)
      const git = p.path ? gitCache.get(p.path) : null
      const dirty = git?.dirty ? " *" : ""
      const running = state.sessions.has(p.id)
      const pw = (panels.projects.width as number) || 30
      const panelWidth = pw - 2
      const nameMax = Math.max(5, panelWidth - 4 - dirty.length)
      const displayName = p.name.length > nameMax
        ? p.name.slice(0, nameMax - 1) + "…"
        : p.name

      if (sel) {
        lines.push(selLine(` ▸ ${displayName}${dirty} `))
      } else if (running) {
        lines.push(` ${fg(C.peach, `▶ ${displayName}${dirty}`)}`)
      } else {
        lines.push(` ${statusLine(p.done, partial, displayName + dirty)}`)
      }

      const bar = `   ${progressBar(stats.done, stats.total)}`
      if (git) {
        const barVisLen = 3 + 8 + 1 + `${stats.done}/${stats.total}`.length
        const maxBranch = Math.max(3, panelWidth - barVisLen - 2)
        const branch = git.branch.length > maxBranch
          ? git.branch.slice(0, maxBranch - 1) + "…"
          : git.branch
        lines.push(`${bar}  ${fg(C.dim, branch)}`)
      } else {
        lines.push(bar)
      }
    }
    panel.setContent(lines.join("\n"))

    if (displayLine >= 0) ensureVisible(panel, displayLine)
  }

  function renderTasks() {
    const panel = panels.tasks
    const proj = currentProject()
    const tasks = proj ? proj.tasks : []

    if (!proj) {
      panel.setContent(`\n{center}${fg(C.dim, "Select a project")}{/center}`)
      return
    }

    if (tasks.length === 0) {
      panel.setContent(
        `\n{center}${fg(C.dim, "No tasks yet")}{/center}` +
        `\n\n{center}${fg(C.subtext, "Press ")}${fg(C.blue, "a")}${fg(C.subtext, " to add one")}{/center}`,
      )
      return
    }

    const lines: string[] = []
    const searchQ = state.searchQuery.toLowerCase()
    let displayIdx = -1

    for (let i = 0; i < tasks.length; i++) {
      const t = tasks[i]!
      if (searchQ && state.leftPanel === "tasks" && fuzzyScore(t.name, state.searchQuery) === 0) continue

      const sel = state.leftPanel === "tasks" && i === state.taskIdx
      if (sel) displayIdx = lines.length

      if (sel) {
        lines.push(selLine(` ▸ ${t.name} `))
      } else {
        lines.push(` ${statusLine(t.done, false, t.name)}`)
      }
    }
    panel.setContent(lines.join("\n"))
    if (displayIdx >= 0) ensureVisible(panel, displayIdx)
  }

  function renderSubtasks() {
    const panel = panels.subtasks
    const proj = currentProject()
    const task = proj?.tasks[state.taskIdx]
    const subtasks = task ? task.subtasks : []

    if (!task) {
      panel.setContent(`\n{center}${fg(C.dim, "Select a task")}{/center}`)
      return
    }

    if (subtasks.length === 0) {
      panel.setContent(
        `\n{center}${fg(C.dim, "No subtasks")}{/center}` +
        `\n\n{center}${fg(C.subtext, "Press ")}${fg(C.blue, "a")}${fg(C.subtext, " to add one")}{/center}`,
      )
      return
    }

    const lines: string[] = []
    const searchQ = state.searchQuery.toLowerCase()
    let displayIdx = -1

    for (let i = 0; i < subtasks.length; i++) {
      const s = subtasks[i]!
      if (searchQ && state.leftPanel === "subtasks" && fuzzyScore(s.name, state.searchQuery) === 0) continue

      const sel = state.leftPanel === "subtasks" && i === state.subtaskIdx
      if (sel) displayIdx = lines.length

      if (sel) {
        lines.push(selLine(` ▸ ${s.name} `))
      } else {
        lines.push(` ${statusLine(s.done, false, s.name)}`)
      }
    }
    panel.setContent(lines.join("\n"))
    if (displayIdx >= 0) ensureVisible(panel, displayIdx)
  }

  function updateTerminalPanel() {
    const proj = currentProject()
    const sess = proj ? state.sessions.get(proj.id) : undefined

    if (sess && sess.exitCode === null) {
      // Active session — live output
      const name = proj?.name ?? "Session"
      const dur = pty.formatDuration(sess.startedAt)
      panels.terminal.setLabel(` ${ansi(C.peach, `⚔ ${name}`)} ${ansi(C.dim, "──")} ${ansi(C.text, dur)} ${ansi(C.green, "running")} `)
      panels.terminal.setContent(escapeBraces(state.termContent))
      const lines = state.termContent.split("\n").length
      panels.terminal.scrollTo(lines)
    } else if (sess && sess.exitCode !== null) {
      // Exited session — frozen output
      const name = proj?.name ?? "Session"
      panels.terminal.setLabel(` ${ansi(C.dim, `⚔ ${name}`)} ${ansi(C.dim, "──")} ${ansi(C.red, `exited (${sess.exitCode})`)} `)
      panels.terminal.setContent(escapeBraces(state.termContent))
      const lines = state.termContent.split("\n").length
      panels.terminal.scrollTo(lines)
    } else if (proj) {
      // No session — check for transcript
      const tPath = pty.latestTranscript(proj.id)
      if (tPath && existsSync(tPath)) {
        try {
          const raw = readFileSync(tPath, "utf-8")
          // Replay through xterm to get rendered output with ANSI colors
          const content = pty.replayTranscript(raw)
          panels.terminal.setLabel(` ${ansi(C.dim, "Last session output")} `)
          panels.terminal.setContent(escapeBraces(content))
          const lines = content.split("\n").length
          panels.terminal.scrollTo(lines)
        } catch {
          panels.terminal.setLabel(` ${ansi(C.dim, "Terminal")} `)
          panels.terminal.setContent("\n  No active session. Press enter to launch claude")
        }
      } else {
        panels.terminal.setLabel(` ${ansi(C.dim, "Terminal")} `)
        panels.terminal.setContent("\n  No active session. Press enter to launch claude")
      }
    } else {
      panels.terminal.setLabel(` ${ansi(C.dim, "Terminal")} `)
      panels.terminal.setContent("\n  No active session. Press enter to launch claude")
    }
  }

  function ensureVisible(panel: blessed.Widgets.BoxElement, lineIdx: number) {
    // Use lpos for resolved pixel height, fallback to numeric height
    const lpos = (panel as any).lpos
    const h = lpos ? (lpos.yl - lpos.yi) : (typeof panel.height === "number" ? panel.height : 10)
    const overhead = (panel as any).iheight ?? 2
    const innerHeight = h - overhead
    if (innerHeight <= 0) return
    // Always scroll so selected item is visible
    panel.scrollTo(Math.max(0, lineIdx - Math.floor(innerHeight / 2)))
  }

  function renderStatusBar() {
    if (state.searchMode) {
      statusBar.setContent(fg(C.blue, ` / ${state.searchQuery}█`))
    } else if (state.inputMode === "line") {
      statusBar.setContent(fg(C.peach, ` > ${inputBuffer}█`))
    } else if (state.inputMode === "raw") {
      statusBar.setContent(fg(C.red, " PASSTHROUGH — Ctrl+] to exit"))
    } else if (isOnTerminal()) {
      const sess = currentSession()
      if (sess && sess.exitCode === null) {
        statusBar.setContent(fg(C.subtext, " h=back | i=input | I=raw | x=kill | j/k=scroll | G=bottom | ?=help"))
      } else {
        statusBar.setContent(fg(C.subtext, " h=back | c=commit | D=diff | P=push | L=transcript | ?=help"))
      }
    } else {
      statusBar.setContent(fg(C.subtext, " Tab=cycle | l=term | j/k=move | 1-9=jump | /=search | e=desc | A=archive | s=sessions | ?=help"))
    }
  }

  function renderAll() {
    sortProjects()
    clampIndices()
    renderHeader()
    renderStatusBar()

    // All 4 panels always visible — focus indicated by border color
    const onTerm = isOnTerminal()

    // Left panels
    for (const name of LEFT_PANELS) {
      const isFocused = !onTerm && state.leftPanel === name
      setFocused(panels[name], isFocused)
    }

    // Terminal panel — peach when focused, dim otherwise
    const termColor = onTerm ? C.peach : C.dim
    panels.terminal.style.border = { fg: termColor }
    ;(panels.terminal.style as any).label = { fg: termColor }

    // Update labels with focus colors
    const pColor = (!onTerm && state.leftPanel === "projects") ? C.mauve : C.dim
    const tColor = (!onTerm && state.leftPanel === "tasks") ? C.mauve : C.dim
    const sColor = (!onTerm && state.leftPanel === "subtasks") ? C.mauve : C.dim
    panels.projects.setLabel(` ${fg(pColor, "⚔ Projects")} `)
    panels.tasks.setLabel(` ${fg(tColor, "Tasks")} `)
    panels.subtasks.setLabel(` ${fg(sColor, "Subtasks")} `)

    renderProjects()
    renderTasks()
    renderSubtasks()
    updateTerminalPanel()

    screen.render()
  }

  // ── Navigation ─────────────────────────────────────────

  function switchPanel(dir: -1 | 1) {
    if (dir === 1 && isOnLeft()) {
      // l → focus terminal, auto-enter raw if session running
      state.panel = "terminal"
      const sess = currentSession()
      if (sess && sess.exitCode === null) {
        state.inputMode = "raw"
      }
    } else if (dir === -1 && isOnTerminal()) {
      // h → focus left (restore leftPanel)
      state.panel = state.leftPanel
      state.inputMode = false
    }
    renderAll()
  }

  function cycleLeftPanel() {
    const idx = LEFT_PANELS.indexOf(state.leftPanel)
    const next = (idx + 1) % LEFT_PANELS.length
    state.leftPanel = LEFT_PANELS[next]!
    state.panel = state.leftPanel
    renderAll()
  }

  function isProjectHidden(idx: number): boolean {
    if (state.showArchived) return false
    const p = state.data.projects[idx]
    return !!p?.done && !state.sessions.has(p.id)
  }

  function move(dir: -1 | 1): void {
    if (state.searchQuery) { moveFiltered(dir); return }

    const len = listLength()
    if (len === 0) return
    let next = currentIdx() + dir

    // Skip archived projects when navigating
    if (state.leftPanel === "projects") {
      while (next >= 0 && next < len && isProjectHidden(next)) next += dir
    }

    if (next < 0 || next >= len) return
    setCurrentIdx(next)
    if (state.leftPanel === "projects") {
      state.taskIdx = 0
      state.subtaskIdx = 0
      updateTermContentForProject()
      persistUI()
    } else if (state.leftPanel === "tasks") {
      state.subtaskIdx = 0
    }
    renderAll()
  }

  function updateTermContentForProject() {
    const proj = currentProject()
    if (!proj) return
    const sess = state.sessions.get(proj.id)
    if (sess) {
      state.termContent = pty.snapshot(sess)
      state.termDirty = true
    } else {
      state.termContent = ""
      state.termDirty = true
    }
  }

  function scrollTerminal(dir: 1 | -1) {
    const amount = dir === 1 ? 3 : -3
    panels.terminal.scroll(amount)
    screen.render()
  }

  // ── Toggle / Add / Delete / Rename ─────────────────────

  function toggleCurrent() {
    const proj = currentProject()
    if (state.leftPanel === "projects" && proj) {
      store.toggleDone(proj)
    } else if (state.leftPanel === "tasks") {
      const task = proj?.tasks[state.taskIdx]
      if (task) store.toggleDone(task)
    } else if (state.leftPanel === "subtasks") {
      const sub = proj?.tasks[state.taskIdx]?.subtasks[state.subtaskIdx]
      if (sub) store.toggleDone(sub)
    }
    store.save(state.data)
    renderAll()
  }

  function addItem() {
    if (modalOpen) return
    modalOpen = true

    const titles: Record<LeftPanel, string> = {
      projects: "Add Project",
      tasks: "Add Task",
      subtasks: "Add Subtask",
    }

    showInputModal({
      screen,
      title: titles[state.leftPanel],
      onSubmit: (name) => {
        modalOpen = false
        const proj = currentProject()
        if (state.leftPanel === "projects") {
          store.addProject(state.data, name)
          state.projectIdx = state.data.projects.length - 1
          state.taskIdx = 0
          state.subtaskIdx = 0
        } else if (state.leftPanel === "tasks" && proj) {
          store.addTask(proj, name)
          state.taskIdx = proj.tasks.length - 1
          state.subtaskIdx = 0
        } else if (state.leftPanel === "subtasks") {
          const task = proj?.tasks[state.taskIdx]
          if (task) {
            store.addSubtask(task, name)
            state.subtaskIdx = task.subtasks.length - 1
          }
        }
        store.save(state.data)
        renderAll()
      },
      onCancel: () => {
        modalOpen = false
        renderAll()
      },
    })
  }

  function deleteItem() {
    if (modalOpen) return
    const len = listLength()
    if (len === 0) return
    modalOpen = true

    let itemName = ""
    if (state.leftPanel === "projects") itemName = state.data.projects[state.projectIdx]?.name ?? ""
    else if (state.leftPanel === "tasks") {
      itemName = state.data.projects[state.projectIdx]?.tasks[state.taskIdx]?.name ?? ""
    } else {
      itemName = state.data.projects[state.projectIdx]?.tasks[state.taskIdx]?.subtasks[state.subtaskIdx]?.name ?? ""
    }

    showConfirmModal({
      screen,
      message: `${fg(C.text, "Delete ")}${fg(C.red, itemName)}${fg(C.text, "?")}`,
      onConfirm: () => {
        modalOpen = false
        const proj = currentProject()
        if (state.leftPanel === "projects") {
          // Kill running session before removing
          const delProj = state.data.projects[state.projectIdx]
          if (delProj) {
            const sess = state.sessions.get(delProj.id)
            if (sess) {
              pty.killSession(sess)
              state.sessions.delete(delProj.id)
            }
          }
          store.removeProject(state.data, state.projectIdx)
        } else if (state.leftPanel === "tasks" && proj) {
          store.removeTask(proj, state.taskIdx)
          state.subtaskIdx = 0
        } else if (state.leftPanel === "subtasks") {
          const task = proj?.tasks[state.taskIdx]
          if (task) store.removeSubtask(task, state.subtaskIdx)
        }
        store.save(state.data)
        renderAll()
      },
      onCancel: () => {
        modalOpen = false
        renderAll()
      },
    })
  }

  function renameItem() {
    if (modalOpen) return
    const len = listLength()
    if (len === 0) return
    modalOpen = true

    let currentName = ""
    if (state.leftPanel === "projects") currentName = state.data.projects[state.projectIdx]?.name ?? ""
    else if (state.leftPanel === "tasks") {
      currentName = state.data.projects[state.projectIdx]?.tasks[state.taskIdx]?.name ?? ""
    } else {
      currentName = state.data.projects[state.projectIdx]?.tasks[state.taskIdx]?.subtasks[state.subtaskIdx]?.name ?? ""
    }

    showInputModal({
      screen,
      title: "Rename",
      value: currentName,
      onSubmit: (name) => {
        modalOpen = false
        const proj = currentProject()
        if (state.leftPanel === "projects" && proj) proj.name = name
        else if (state.leftPanel === "tasks") {
          const task = proj?.tasks[state.taskIdx]
          if (task) task.name = name
        } else if (state.leftPanel === "subtasks") {
          const sub = proj?.tasks[state.taskIdx]?.subtasks[state.subtaskIdx]
          if (sub) sub.name = name
        }
        store.save(state.data)
        renderAll()
      },
      onCancel: () => {
        modalOpen = false
        renderAll()
      },
    })
  }

  // ── Session Launch ─────────────────────────────────────

  function launchTask() {
    const now = Date.now()
    if (now - lastLaunch < 1000) { log("launchTask: debounced"); return }
    lastLaunch = now

    const proj = currentProject()
    log(`launchTask: proj=${proj?.name} panel=${state.panel} leftPanel=${state.leftPanel}`)
    if (!proj) return

    // If project already has a running session, just switch to terminal view
    if (state.sessions.has(proj.id)) {
      const sess = state.sessions.get(proj.id)!
      state.termContent = pty.snapshot(sess)
      state.panel = "terminal"
      if (sess.exitCode === null) state.inputMode = "raw"
      renderAll()
      return
    }

    let taskDesc = ""
    const task = proj.tasks[state.taskIdx]
    const subtask = task?.subtasks[state.subtaskIdx]

    if (state.leftPanel === "subtasks" && subtask && task) {
      taskDesc = `${task.name}: ${subtask.name}`
      if (task.description) taskDesc += `\n\nContext: ${task.description}`
    } else if (state.leftPanel === "tasks" && task) {
      taskDesc = task.name
      if (task.subtasks.length > 0) {
        const subs = task.subtasks.filter(s => !s.done).map(s => s.name)
        if (subs.length > 0) taskDesc += ` (subtasks: ${subs.join(", ")})`
      }
      if (task.description) taskDesc += `\n\nContext: ${task.description}`
    } else if (state.leftPanel === "projects") {
      const pending = proj.tasks.filter(t => !t.done).map(t => t.name)
      taskDesc = pending.length > 0
        ? `Work on ${proj.name}. Pending tasks: ${pending.join(", ")}`
        : `Work on ${proj.name}`
    }

    const cwd = proj.path || process.env.HOME || "~"
    store.save(state.data)

    const { cols, rows } = termDims()
    const sess = pty.launchSession(
      proj.name,
      proj.id,
      cwd,
      taskDesc,
      cols,
      rows,
      (content) => {
        // Only update if this is still the viewed project
        if (currentProject()?.id === proj.id) {
          state.termContent = content
          state.termDirty = true
        }
      },
      (code) => {
        // Session exited
        const p = state.data.projects.find(p => p.id === proj.id)

        // Desktop notification
        try {
          execFileSync("notify-send", ["Quest Log", `${p?.name ?? "Session"} finished`])
        } catch (e) { logError("notify-send", e) }

        // Auto-done prompt if viewing this project
        if (p && proj.id === currentProject()?.id) {
          state.termDirty = true
          renderAll()

          if (!modalOpen) {
            modalOpen = true
            showConfirmModal({
              screen,
              message: `${fg(C.text, "Mark ")}${fg(C.peach, p.name)}${fg(C.text, " done?")}`,
              onConfirm: () => {
                modalOpen = false
                const task = p.tasks[state.taskIdx]
                if (task && !task.done) {
                  store.toggleDone(task)
                  store.save(state.data)
                }
                renderAll()
              },
              onCancel: () => {
                modalOpen = false
                renderAll()
              },
            })
          }
        }
      },
    )

    if (sess) {
      log(`launchTask: session created, switching to terminal`)
      state.sessions.set(proj.id, sess)
      proj.lastActivity = Date.now()
      store.save(state.data)
      state.termContent = ""
      state.panel = "terminal"
      state.inputMode = "raw"
      renderAll()
    } else {
      log(`launchTask: session failed to create`)
    }
  }

  // ── Session Input ─────────────────────────────────────

  function enterLineInput() {
    const sess = currentSession()
    log(`enterLineInput: sess=${!!sess} exitCode=${sess?.exitCode} panel=${state.panel}`)
    if (!sess || sess.exitCode !== null) return
    state.inputMode = "line"
    inputBuffer = ""
    renderStatusBar()
    screen.render()
  }

  function enterRawInput() {
    const sess = currentSession()
    log(`enterRawInput: sess=${!!sess} exitCode=${sess?.exitCode} panel=${state.panel}`)
    if (!sess || sess.exitCode !== null) return
    state.inputMode = "raw"
    renderStatusBar()
    screen.render()
  }

  function exitInputMode() {
    state.inputMode = false
    inputBuffer = ""
    renderAll()
  }

  function submitLineInput() {
    const text = inputBuffer.trim()
    state.inputMode = false
    inputBuffer = ""
    const sess = currentSession()
    log(`submitLineInput: text=${JSON.stringify(text)} sess=${!!sess} exitCode=${sess?.exitCode}`)
    if (sess && text) {
      pty.writeToSession(sess, text + "\n")
    }
    renderAll()
  }

  // ── Session Kill ───────────────────────────────────────

  function confirmKillSession() {
    const sess = currentSession()
    if (!sess || modalOpen) return
    modalOpen = true

    const proj = currentProject()
    showConfirmModal({
      screen,
      message: `${fg(C.text, "Kill session ")}${fg(C.peach, proj?.name ?? "")}${fg(C.text, "?")}`,
      onConfirm: () => {
        modalOpen = false
        pty.killSession(sess)
        state.sessions.delete(sess.projectId)
        state.termContent = ""
        state.panel = state.leftPanel
        renderAll()
      },
      onCancel: () => {
        modalOpen = false
        renderAll()
      },
    })
  }

  // ── Transcript Viewer ──────────────────────────────────

  function showTranscript() {
    const proj = currentProject()
    if (!proj) return
    if (state.sessions.has(proj.id)) return

    const tPath = pty.latestTranscript(proj.id)
    if (!tPath || !existsSync(tPath)) return

    state.panel = "terminal"
    state.termContent = ""
    renderAll()
  }

  // ── Post-Task Actions ──────────────────────────────────

  function postTaskAction(action: "commit" | "diff" | "push") {
    const proj = currentProject()
    if (!proj?.path) return
    if (state.sessions.has(proj.id)) return

    const cwd = proj.path

    if (action === "commit") {
      // Spawn tracked PTY session for interactive git commit
      const { cols, rows } = termDims()
      const sess = pty.launchGitSession(
        proj.id,
        cwd,
        ["bash", "-c", "git add -A && git commit"],
        cols,
        rows,
        (content) => {
          if (currentProject()?.id === proj.id) {
            state.termContent = content
            state.termDirty = true
          }
        },
        () => {
          state.sessions.delete(proj.id)
          refreshGitCache(state.data.projects)
          state.termDirty = true
          renderAll()
        },
      )
      if (sess) {
        state.sessions.set(proj.id, sess)
        state.termContent = ""
        state.panel = "terminal"
        renderAll()
      }
      return
    }

    if (action === "diff") {
      try {
        const output = execFileSync("git", ["-C", cwd, "diff", "--stat"], { encoding: "utf-8" })
        state.termContent = output || "  No changes"
        panels.terminal.setLabel(` ${ansi(C.blue, "git diff --stat")} `)
        state.termDirty = true
        renderAll()
      } catch (e) { logError("git diff", e) }
      return
    }

    if (action === "push") {
      try {
        const result = Bun.spawnSync({
          cmd: ["git", "-C", cwd, "push"],
          stdout: "pipe",
          stderr: "pipe",
        })
        const stdout = result.stdout.toString()
        const stderr = result.stderr.toString()
        const output = (stdout + stderr).trim()
        if (result.exitCode === 0) {
          state.termContent = output || "  Pushed successfully"
          panels.terminal.setLabel(` ${ansi(C.green, "git push")} `)
        } else {
          state.termContent = output || "  Push failed"
          panels.terminal.setLabel(` ${ansi(C.red, "git push failed")} `)
        }
        state.termDirty = true
        renderAll()
      } catch (e: any) {
        state.termContent = e?.message || "  Push failed"
        panels.terminal.setLabel(` ${ansi(C.red, "git push failed")} `)
        state.termDirty = true
        renderAll()
      }
      return
    }
  }

  // ── Reorder ────────────────────────────────────────────

  function reorder(dir: -1 | 1) {
    const idx = currentIdx()
    const newIdx = idx + dir

    if (state.leftPanel === "projects") {
      const arr = state.data.projects
      if (newIdx < 0 || newIdx >= arr.length) return
      store.swapItems(arr, idx, newIdx)
      state.projectIdx = newIdx
    } else if (state.leftPanel === "tasks") {
      const proj = currentProject()
      if (!proj) return
      if (newIdx < 0 || newIdx >= proj.tasks.length) return
      store.swapItems(proj.tasks, idx, newIdx)
      state.taskIdx = newIdx
    } else {
      const task = currentProject()?.tasks[state.taskIdx]
      if (!task) return
      if (newIdx < 0 || newIdx >= task.subtasks.length) return
      store.swapItems(task.subtasks, idx, newIdx)
      state.subtaskIdx = newIdx
    }

    store.save(state.data)
    renderAll()
  }

  // ── Yank ───────────────────────────────────────────────

  function yankName() {
    let name = ""
    if (state.leftPanel === "projects") name = currentProject()?.name ?? ""
    else if (state.leftPanel === "tasks") name = currentProject()?.tasks[state.taskIdx]?.name ?? ""
    else name = currentProject()?.tasks[state.taskIdx]?.subtasks[state.subtaskIdx]?.name ?? ""

    if (!name) return
    try {
      execFileSync("wl-copy", [], { input: name })
    } catch (e) { logError("wl-copy", e) }

    statusBar.setContent(fg(C.green, " yanked!"))
    screen.render()
    setTimeout(() => {
      renderStatusBar()
      screen.render()
    }, 1500)
  }

  // ── Search ─────────────────────────────────────────────

  function persistUI() {
    saveUIState({
      projectIdx: state.projectIdx,
      taskIdx: state.taskIdx,
      subtaskIdx: state.subtaskIdx,
      leftPanel: state.leftPanel,
      panel: state.panel,
      showArchived: state.showArchived,
    })
  }

  function editDescription() {
    if (modalOpen) return
    if (state.leftPanel !== "tasks") return
    const proj = currentProject()
    const task = proj?.tasks[state.taskIdx]
    if (!task) return
    modalOpen = true

    showInputModal({
      screen,
      title: "Description",
      value: task.description ?? "",
      onSubmit: (val) => {
        modalOpen = false
        task.description = val
        store.save(state.data)
        renderAll()
      },
      onCancel: () => {
        modalOpen = false
        renderAll()
      },
    })
  }

  function toggleArchived() {
    state.showArchived = !state.showArchived
    clampIndices()
    persistUI()
    renderAll()
  }

  function showSessions() {
    if (modalOpen) return
    if (state.sessions.size === 0) return
    modalOpen = true
    showSessionsOverlay({
      screen,
      sessions: state.sessions,
      projects: state.data.projects,
      onSelect: (projectId) => {
        modalOpen = false
        const idx = state.data.projects.findIndex(p => p.id === projectId)
        if (idx !== -1) {
          state.projectIdx = idx
          state.taskIdx = 0
          state.subtaskIdx = 0
          const sess = state.sessions.get(projectId)
          if (sess) {
            state.termContent = pty.snapshot(sess)
            state.panel = "terminal"
          }
        }
        renderAll()
      },
      onClose: () => {
        modalOpen = false
        renderAll()
      },
    })
  }

  function enterSearch() {
    state.searchMode = true
    state.searchQuery = ""
    renderStatusBar()
    screen.render()
  }

  function exitSearch() {
    state.searchMode = false
    state.searchQuery = ""
    filteredIndices = []
    renderAll()
  }

  // ── Rescan ─────────────────────────────────────────────

  function rescan() {
    const repos = scanRepos()
    const tracked = new Set(state.data.projects.map(p => p.path).filter(Boolean))
    for (const repo of repos) {
      if (!tracked.has(repo.path)) {
        store.addProject(state.data, repo.name, { path: repo.path, save: false })
      }
    }
    refreshGitCache(state.data.projects)
    store.save(state.data)
    renderAll()
  }

  // ── Help ───────────────────────────────────────────────

  function showHelp() {
    if (modalOpen) return
    modalOpen = true
    showHelpOverlay({
      screen,
      onClose: () => {
        modalOpen = false
        renderAll()
      },
    })
  }

  // ── Keypress Handler ───────────────────────────────────

  screen.on("keypress", (_ch: string, key: blessed.Widgets.Events.IKeyEventArg) => {
    if (modalOpen) return

    // Raw input mode: forward everything to PTY, Ctrl+] to exit
    if (state.inputMode === "raw") {
      if (key.ctrl && key.name === "]") {
        exitInputMode()
        return
      }
      const sess = currentSession()
      const seq = key.sequence || key.ch || ""
      log(`raw input: key=${key.name} ch=${JSON.stringify(key.ch)} seq=${JSON.stringify(seq)} sess=${!!sess} exitCode=${sess?.exitCode}`)
      if (sess && sess.exitCode === null) {
        if (seq) pty.writeToSession(sess, seq)
      }
      return
    }

    // Line input mode: build input string character by character
    if (state.inputMode === "line") {
      if (key.name === "escape") {
        exitInputMode()
        return
      }
      if (key.name === "backspace") {
        inputBuffer = inputBuffer.slice(0, -1)
        renderStatusBar()
        screen.render()
        return
      }
      if (key.name === "return" || key.name === "enter") {
        submitLineInput()
        return
      }
      if (key.ch && key.ch.length === 1) {
        inputBuffer += key.ch
        renderStatusBar()
        screen.render()
        return
      }
      return
    }

    // Search mode: build query character by character
    if (state.searchMode) {
      if (key.name === "escape") {
        exitSearch()
        return
      }
      if (key.name === "backspace") {
        state.searchQuery = state.searchQuery.slice(0, -1)
        filteredIndices = computeFilteredIndices()
        renderAll()
        renderStatusBar()
        screen.render()
        return
      }
      if (key.name === "return" || key.name === "enter") {
        state.searchMode = false
        renderStatusBar()
        screen.render()
        return
      }
      if (key.ch && key.ch.length === 1) {
        state.searchQuery += key.ch
        filteredIndices = computeFilteredIndices()
        renderAll()
        renderStatusBar()
        screen.render()
        return
      }
      return
    }

    // gg combo
    if (key.ch === "g") {
      if (gPending) {
        gPending = false
        if (isOnTerminal()) {
          panels.terminal.scrollTo(0)
          screen.render()
        } else {
          setCurrentIdx(0)
          if (state.leftPanel === "projects") {
            state.taskIdx = 0
            state.subtaskIdx = 0
            updateTermContentForProject()
          } else if (state.leftPanel === "tasks") {
            state.subtaskIdx = 0
          }
          renderAll()
        }
        return
      }
      gPending = true
      setTimeout(() => { gPending = false }, 500)
      return
    }
    gPending = false

    // Terminal-focused keys
    if (isOnTerminal()) {
      switch (key.ch || key.name) {
        case "i":
          enterLineInput()
          return
        case "I":
          enterRawInput()
          return
        case "x":
          confirmKillSession()
          return
        case "j":
        case "down":
          scrollTerminal(1)
          return
        case "k":
        case "up":
          scrollTerminal(-1)
          return
        case "h":
        case "left":
          switchPanel(-1)
          return
        case "G":
          panels.terminal.setScrollPerc(100)
          screen.render()
          return
        case "c":
          postTaskAction("commit")
          return
        case "D":
          postTaskAction("diff")
          return
        case "P":
          postTaskAction("push")
          return
        case "L":
          showTranscript()
          return
        case "?":
          showHelp()
          return
        case "q":
          cleanupSessions(state)
          store.save(state.data)
          persistUI()
          process.exit(0)
      }
      return
    }

    // Number key navigation (1-9)
    if (key.ch && key.ch >= "1" && key.ch <= "9" && isOnLeft()) {
      const target = parseInt(key.ch, 10) - 1
      const len = listLength()
      if (target < len) {
        setCurrentIdx(target)
        if (state.leftPanel === "projects") {
          state.taskIdx = 0
          state.subtaskIdx = 0
          updateTermContentForProject()
        } else if (state.leftPanel === "tasks") {
          state.subtaskIdx = 0
        }
        renderAll()
      }
      return
    }

    // Left panel keys
    switch (key.ch || key.name) {
      case "h":
      case "left":
        // no-op on left
        break
      case "l":
      case "right":
        switchPanel(1)
        break
      case "j":
      case "down":
        move(1)
        break
      case "k":
      case "up":
        move(-1)
        break
      case "G":
        setCurrentIdx(Math.max(0, listLength() - 1))
        if (state.leftPanel === "projects") updateTermContentForProject()
        renderAll()
        break
      case "return":
      case "enter":
        launchTask()
        break
      case "space":
        toggleCurrent()
        break
      case "a":
        addItem()
        break
      case "d":
        deleteItem()
        break
      case "r":
        renameItem()
        break
      case "S":
        rescan()
        break
      case "J":
        reorder(1)
        break
      case "K":
        reorder(-1)
        break
      case "y":
        yankName()
        break
      case "/":
        enterSearch()
        break
      case "tab":
        cycleLeftPanel()
        break
      case "A":
        toggleArchived()
        break
      case "e":
        editDescription()
        break
      case "s":
        showSessions()
        break
      case "L":
        showTranscript()
        break
      case "?":
        showHelp()
        break
      case "q":
        store.save(state.data)
        persistUI()
        process.exit(0)
    }
  })

  // ── Resize Handler ─────────────────────────────────────

  screen.on("resize", () => {
    const { cols, rows } = termDims()
    for (const [, sess] of state.sessions) {
      pty.resizeSession(sess, cols, rows)
    }
    renderAll()
  })

  // ── Terminal Dirty Check (50ms) ────────────────────────

  setInterval(() => {
    if (state.termDirty) {
      state.termDirty = false
      updateTerminalPanel()
      screen.render()
    }
  }, 50)

  // ── Duration Display (1s) ─────────────────────────────

  setInterval(() => {
    if (state.sessions.size > 0) {
      renderHeader()
      updateTerminalPanel()
      screen.render()
    }
  }, 1000)

  // ── File Watcher (quests.json) ─────────────────────────

  watch(store.DATA_PATH, { persistent: false }, () => {
    if (Date.now() - store.lastSaveTs < 500) return
    const fresh = store.load()
    state.data = fresh
    refreshGitCache(state.data.projects)
    renderAll()
  })

  // ── Initial Render ─────────────────────────────────────

  renderAll()
}
