import blessed from "neo-blessed"
import { watch, readFileSync, existsSync } from "fs"
import { execFileSync } from "child_process"
import { C, fg, selLine, statusLine, progressBar } from "./theme"
import { setFocused } from "./ui"
import { showInputModal, showConfirmModal, showHelpOverlay } from "./modal"
import * as store from "./store"
import * as session from "./session"
import { scanRepos, getRepoStatus } from "./scan"
import type { RepoInfo } from "./scan"
import type { AppState, PanelName, SessionInfo } from "./types"

const PANELS: PanelName[] = ["projects", "tasks", "subtasks"]

interface PanelSet {
  projects: blessed.Widgets.BoxElement
  tasks: blessed.Widgets.BoxElement
  subtasks: blessed.Widgets.BoxElement
  log: blessed.Widgets.BoxElement
  input: blessed.Widgets.TextboxElement
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
  let lastLogContent = ""
  let lastCapture = 0
  let activeWatcher: ReturnType<typeof watch> | null = null
  let prevActiveWindows: Set<string> = new Set()

  // Search state
  let filteredIndices: number[] = []

  // ── Helpers ──────────────────────────────────────────────

  function clampIndices() {
    const pLen = state.data.projects.length
    state.projectIdx = pLen === 0 ? 0 : Math.min(state.projectIdx, pLen - 1)

    const proj = state.data.projects[state.projectIdx]
    const tLen = proj ? proj.tasks.length : 0
    state.taskIdx = tLen === 0 ? 0 : Math.min(state.taskIdx, tLen - 1)

    const task = proj?.tasks[state.taskIdx]
    const sLen = task ? task.subtasks.length : 0
    state.subtaskIdx = sLen === 0 ? 0 : Math.min(state.subtaskIdx, sLen - 1)
  }

  function currentIdx(): number {
    if (state.panel === "projects") return state.projectIdx
    if (state.panel === "tasks") return state.taskIdx
    return state.subtaskIdx
  }

  function setCurrentIdx(val: number) {
    if (state.panel === "projects") state.projectIdx = val
    else if (state.panel === "tasks") state.taskIdx = val
    else state.subtaskIdx = val
  }

  function listLength(): number {
    if (state.panel === "projects") return state.data.projects.length
    const proj = state.data.projects[state.projectIdx]
    if (state.panel === "tasks") return proj ? proj.tasks.length : 0
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

  function inLogView(): boolean {
    return state.rightPaneMode === "log" && state.panel !== "projects"
  }

  // ── Search helpers ──────────────────────────────────────

  function getSearchItems(): { name: string }[] {
    if (state.panel === "projects") return state.data.projects
    const proj = currentProject()
    if (state.panel === "tasks") return proj ? proj.tasks : []
    const task = proj?.tasks[state.taskIdx]
    return task ? task.subtasks : []
  }

  function computeFilteredIndices(): number[] {
    if (!state.searchQuery) return []
    const items = getSearchItems()
    const q = state.searchQuery.toLowerCase()
    return items.reduce((acc: number[], item, i) => {
      if (item.name.toLowerCase().includes(q)) acc.push(i)
      return acc
    }, [])
  }

  function moveFiltered(dir: 1 | -1): void {
    if (!state.searchQuery) { move(dir); return }
    filteredIndices = computeFilteredIndices()
    if (filteredIndices.length === 0) return

    const idx = currentIdx()
    const pos = filteredIndices.indexOf(idx)

    if (pos === -1) {
      // Current not in filter — jump to nearest
      setCurrentIdx(filteredIndices[dir === 1 ? 0 : filteredIndices.length - 1]!)
    } else {
      const next = pos + dir
      if (next >= 0 && next < filteredIndices.length) {
        setCurrentIdx(filteredIndices[next]!)
      }
    }

    if (state.panel === "projects") {
      state.taskIdx = 0
      state.subtaskIdx = 0
    } else if (state.panel === "tasks") {
      state.subtaskIdx = 0
    }
    renderAll()
  }

  // ── Session watcher ────────────────────────────────────

  function startWatching(sess: SessionInfo) {
    stopWatching()
    if (!existsSync(sess.transcriptPath)) return

    activeWatcher = watch(sess.transcriptPath, { persistent: false }, () => {
      const now = Date.now()
      if (now - lastCapture < 66) return // Debounce ~15fps
      lastCapture = now
      updateLogContent(sess)
    })
  }

  function stopWatching() {
    if (activeWatcher) {
      activeWatcher.close()
      activeWatcher = null
    }
  }

  function updateLogContent(sess: SessionInfo) {
    const content = session.capturePane(sess.windowName)
    if (content === lastLogContent) return
    lastLogContent = content
    panels.log.setContent(content)
    // Auto-scroll to bottom
    const lines = content.split("\n").length
    panels.log.scrollTo(lines)
    screen.render()
  }

  // ── Render functions ───────────────────────────────────

  function renderHeader() {
    const s = store.globalStats(state.data)
    const sess = currentSession()
    const durStr = sess ? ` ${fg(C.dim, "│")} ${fg(C.peach, session.formatDuration(sess.startedAt))}` : ""
    header.setContent(
      ` ${fg(C.mauve, "⚔ Quest Log")}` +
      `${fg(C.dim, " ──")} ` +
      `${fg(C.text, String(s.projects))} ${fg(C.subtext, "projects")}` +
      `${fg(C.dim, " │")} ` +
      `${fg(C.text, String(s.tasks))} ${fg(C.subtext, "tasks")}` +
      `${fg(C.dim, " │")} ` +
      `${fg(C.text, `${s.pct}%`)} ${fg(C.subtext, "done")}` +
      durStr,
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

    // Smart sort: running sessions bubble to top (display only)
    const indices = projects.map((_, i) => i)
    indices.sort((a, b) => {
      const aRunning = state.sessions.has(projects[a]!.id) ? 0 : 1
      const bRunning = state.sessions.has(projects[b]!.id) ? 0 : 1
      if (aRunning !== bRunning) return aRunning - bRunning
      const aDone = projects[a]!.done ? 1 : 0
      const bDone = projects[b]!.done ? 1 : 0
      return aDone - bDone
    })

    // Map real index to display position for selection tracking
    const realToDisplay = new Map<number, number>()
    indices.forEach((realIdx, displayIdx) => realToDisplay.set(realIdx, displayIdx))

    const lines: string[] = []
    const searchQ = state.searchQuery.toLowerCase()

    for (const i of indices) {
      const p = projects[i]!

      // Search filter
      if (searchQ && state.panel === "projects" && !p.name.toLowerCase().includes(searchQ)) continue

      const sel = state.panel === "projects" && i === state.projectIdx
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

      // Progress bar + branch
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

    // Scroll to keep selection visible
    const scrollTarget = (realToDisplay.get(state.projectIdx) ?? state.projectIdx) * 2
    ensureVisible(panel, scrollTarget)
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

    for (let i = 0; i < tasks.length; i++) {
      const t = tasks[i]!
      if (searchQ && state.panel === "tasks" && !t.name.toLowerCase().includes(searchQ)) continue

      const sel = state.panel === "tasks" && i === state.taskIdx

      if (sel) {
        lines.push(selLine(` ▸ ${t.name} `))
      } else {
        lines.push(` ${statusLine(t.done, false, t.name)}`)
      }
    }
    panel.setContent(lines.join("\n"))
    ensureVisible(panel, state.taskIdx)
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

    for (let i = 0; i < subtasks.length; i++) {
      const s = subtasks[i]!
      if (searchQ && state.panel === "subtasks" && !s.name.toLowerCase().includes(searchQ)) continue

      const sel = state.panel === "subtasks" && i === state.subtaskIdx

      if (sel) {
        lines.push(selLine(` ▸ ${s.name} `))
      } else {
        lines.push(` ${statusLine(s.done, false, s.name)}`)
      }
    }
    panel.setContent(lines.join("\n"))
    ensureVisible(panel, state.subtaskIdx)
  }

  function renderLog() {
    const sess = currentSession()
    if (!sess) {
      // Check for transcript from previous session
      const proj = currentProject()
      if (proj) {
        const tPath = session.latestTranscript(proj.id)
        if (tPath && existsSync(tPath)) {
          try {
            const content = readFileSync(tPath, "utf-8")
            panels.log.setLabel(` ${fg(C.dim, "Last session output")} `)
            panels.log.setContent(content)
            const lines = content.split("\n").length
            panels.log.scrollTo(lines)
          } catch {
            panels.log.setContent("")
          }
        } else {
          panels.log.setContent(`\n  ${fg(C.dim, "No session output")}`)
        }
      }
      return
    }

    // Update label with duration
    const proj = currentProject()
    const name = proj?.name ?? "Session"
    const dur = session.formatDuration(sess.startedAt)
    panels.log.setLabel(` ${fg(C.peach, `⚔ ${name}`)} ${fg(C.dim, "──")} ${fg(C.text, dur)} `)

    // Capture latest output
    updateLogContent(sess)
  }

  function ensureVisible(panel: blessed.Widgets.BoxElement, lineIdx: number) {
    const innerHeight = (panel as any).iheight ?? ((panel.rows ?? panel.height as number) - 2)
    const scrollPos = panel.getScroll?.() ?? 0
    if (lineIdx < scrollPos) {
      panel.scrollTo(lineIdx)
    } else if (lineIdx >= scrollPos + innerHeight) {
      panel.scrollTo(lineIdx - innerHeight + 1)
    }
  }

  function renderStatusBar() {
    if (state.searchMode) {
      statusBar.setContent(fg(C.blue, ` / ${state.searchQuery}█`))
    } else if (state.inputMode) {
      statusBar.setContent(fg(C.peach, " -- INSERT --"))
    } else if (state.rightPaneMode === "log") {
      const sess = currentSession()
      if (sess) {
        statusBar.setContent(fg(C.subtext, " Tab=tasks | i=input | x=kill | j/k=scroll | h=back | ?=help"))
      } else {
        statusBar.setContent(fg(C.subtext, " Tab=tasks | c=commit | D=diff | P=push | L=transcript | ?=help"))
      }
    } else {
      statusBar.setContent(fg(C.subtext, " h/l=panel | j/k=move | enter=launch | space=toggle | /=search | ?=help | q=quit"))
    }
  }

  function renderAll() {
    clampIndices()
    renderHeader()
    renderStatusBar()

    if (state.rightPaneMode === "log") {
      // Log mode: hide tasks/subtasks, show log
      panels.tasks.hide()
      panels.subtasks.hide()
      panels.log.show()

      setFocused(panels.projects, state.panel === "projects")
      // Log panel gets peach border when focused
      const logFocused = state.panel !== "projects"
      panels.log.style.border = { fg: logFocused ? C.peach : C.dim }
      ;(panels.log.style as any).label = { fg: logFocused ? C.peach : C.dim }

      const pColor = state.panel === "projects" ? C.mauve : C.dim
      panels.projects.setLabel(` ${fg(pColor, "⚔ Projects")} `)

      renderProjects()
      renderLog()
    } else {
      // Tasks mode: normal layout
      panels.log.hide()
      panels.tasks.show()
      panels.subtasks.show()

      for (const name of PANELS) {
        setFocused(panels[name], name === state.panel)
      }

      const pColor = state.panel === "projects" ? C.mauve : C.dim
      const tColor = state.panel === "tasks" ? C.mauve : C.dim
      const sColor = state.panel === "subtasks" ? C.mauve : C.dim
      panels.projects.setLabel(` ${fg(pColor, "⚔ Projects")} `)
      panels.tasks.setLabel(` ${fg(tColor, "Tasks")} `)
      panels.subtasks.setLabel(` ${fg(sColor, "Subtasks")} `)

      renderProjects()
      renderTasks()
      renderSubtasks()
    }

    screen.render()
  }

  // ── Navigation ─────────────────────────────────────────

  function switchPanel(dir: -1 | 1) {
    if (state.rightPaneMode === "log") {
      // In log mode: projects <-> log (via tasks panel slot)
      if (dir === 1 && state.panel === "projects") {
        state.panel = "tasks" // represents log panel
      } else if (dir === -1 && state.panel !== "projects") {
        state.panel = "projects"
      }
      renderAll()
      return
    }

    const idx = PANELS.indexOf(state.panel)
    const next = idx + dir
    if (next >= 0 && next < PANELS.length) {
      state.panel = PANELS[next]!
      renderAll()
    }
  }

  function move(dir: -1 | 1): void {
    if (state.searchQuery) { moveFiltered(dir); return }

    const len = listLength()
    if (len === 0) return
    const idx = currentIdx()
    const next = Math.max(0, Math.min(len - 1, idx + dir))
    setCurrentIdx(next)
    if (state.panel === "projects") {
      state.taskIdx = 0
      state.subtaskIdx = 0
      // Auto-switch to log mode if new project has active session
      autoSwitchPaneMode()
    } else if (state.panel === "tasks") {
      state.subtaskIdx = 0
    }
    renderAll()
  }

  function autoSwitchPaneMode() {
    const proj = currentProject()
    if (!proj) return
    if (state.sessions.has(proj.id)) {
      if (state.rightPaneMode !== "log") {
        state.rightPaneMode = "log"
        startWatching(state.sessions.get(proj.id)!)
        lastLogContent = ""
      }
    } else {
      if (state.rightPaneMode === "log") {
        state.rightPaneMode = "tasks"
        stopWatching()
      }
    }
  }

  function scrollLog(dir: 1 | -1) {
    const amount = dir === 1 ? 3 : -3
    panels.log.scroll(amount)
    screen.render()
  }

  // ── Toggle / Add / Delete / Rename ─────────────────────

  function toggleCurrent() {
    const proj = currentProject()
    if (state.panel === "projects" && proj) {
      store.toggleDone(proj)
    } else if (state.panel === "tasks") {
      const task = proj?.tasks[state.taskIdx]
      if (task) store.toggleDone(task)
    } else if (state.panel === "subtasks") {
      const sub = proj?.tasks[state.taskIdx]?.subtasks[state.subtaskIdx]
      if (sub) store.toggleDone(sub)
    }
    store.save(state.data)
    renderAll()
  }

  function addItem() {
    if (modalOpen) return
    modalOpen = true

    const titles: Record<PanelName, string> = {
      projects: "Add Project",
      tasks: "Add Task",
      subtasks: "Add Subtask",
    }

    showInputModal({
      screen,
      title: titles[state.panel],
      onSubmit: (name) => {
        modalOpen = false
        const proj = currentProject()
        if (state.panel === "projects") {
          store.addProject(state.data, name)
          state.projectIdx = state.data.projects.length - 1
          state.taskIdx = 0
          state.subtaskIdx = 0
        } else if (state.panel === "tasks" && proj) {
          store.addTask(proj, name)
          state.taskIdx = proj.tasks.length - 1
          state.subtaskIdx = 0
        } else if (state.panel === "subtasks") {
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
    if (state.panel === "projects") itemName = state.data.projects[state.projectIdx]?.name ?? ""
    else if (state.panel === "tasks") {
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
        if (state.panel === "projects") {
          store.removeProject(state.data, state.projectIdx)
        } else if (state.panel === "tasks" && proj) {
          store.removeTask(proj, state.taskIdx)
          state.subtaskIdx = 0
        } else if (state.panel === "subtasks") {
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
    if (state.panel === "projects") currentName = state.data.projects[state.projectIdx]?.name ?? ""
    else if (state.panel === "tasks") {
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
        if (state.panel === "projects" && proj) proj.name = name
        else if (state.panel === "tasks") {
          const task = proj?.tasks[state.taskIdx]
          if (task) task.name = name
        } else if (state.panel === "subtasks") {
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
    if (now - lastLaunch < 1000) return
    lastLaunch = now

    const proj = currentProject()
    if (!proj) return

    // If project already has a running session, just switch to log view
    if (state.sessions.has(proj.id)) {
      state.rightPaneMode = "log"
      state.panel = "tasks" // represents log in log mode
      startWatching(state.sessions.get(proj.id)!)
      lastLogContent = ""
      renderAll()
      return
    }

    let taskDesc = ""
    const task = proj.tasks[state.taskIdx]
    const subtask = task?.subtasks[state.subtaskIdx]

    if (state.panel === "subtasks" && subtask && task) {
      taskDesc = `${task.name}: ${subtask.name}`
    } else if (state.panel === "tasks" && task) {
      taskDesc = task.name
      if (task.subtasks.length > 0) {
        const subs = task.subtasks.filter(s => !s.done).map(s => s.name)
        if (subs.length > 0) taskDesc += ` (subtasks: ${subs.join(", ")})`
      }
    } else if (state.panel === "projects") {
      const pending = proj.tasks.filter(t => !t.done).map(t => t.name)
      taskDesc = pending.length > 0
        ? `Work on ${proj.name}. Pending tasks: ${pending.join(", ")}`
        : `Work on ${proj.name}`
    }

    const cwd = proj.path || process.env.HOME || "~"
    store.save(state.data)

    const sess = session.launchSession(proj.name, proj.id, cwd, taskDesc)
    if (sess) {
      state.sessions.set(proj.id, sess)
      state.rightPaneMode = "log"
      state.panel = "tasks" // represents log in log mode
      lastLogContent = ""
      startWatching(sess)
      renderAll()
    }
  }

  // ── Session Input ──────────────────────────────────────

  function enterInputMode() {
    const sess = currentSession()
    if (!sess) return
    state.inputMode = true
    panels.input.show()
    panels.input.setValue("")
    renderStatusBar()
    screen.render()
    panels.input.focus()
    panels.input.readInput()
  }

  panels.input.on("submit", (val: string) => {
    state.inputMode = false
    panels.input.hide()
    const sess = currentSession()
    if (sess && val.trim()) {
      session.sendKeys(sess.windowName, val.trim())
    }
    renderAll()
  })

  panels.input.on("cancel", () => {
    state.inputMode = false
    panels.input.hide()
    renderAll()
  })

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
        session.killSessionWindow(sess.windowName)
        state.sessions.delete(sess.projectId)
        stopWatching()
        state.rightPaneMode = "tasks"
        state.panel = "projects"
        lastLogContent = ""
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
    // If there's an active session, we're already showing live output
    if (state.sessions.has(proj.id)) return

    const tPath = session.latestTranscript(proj.id)
    if (!tPath || !existsSync(tPath)) return

    state.rightPaneMode = "log"
    state.panel = "tasks"
    lastLogContent = ""
    renderAll()
  }

  // ── Post-Task Actions ──────────────────────────────────

  function postTaskAction(action: "commit" | "diff" | "push") {
    const proj = currentProject()
    if (!proj?.path) return
    // Only when no active session and in log mode
    if (state.sessions.has(proj.id)) return
    if (state.rightPaneMode !== "log") return

    const cwd = proj.path

    if (action === "commit") {
      try {
        execFileSync("tmux", [
          "new-window",
          "-n", `commit: ${proj.name}`,
          "-c", cwd,
          "bash", "-c", "git add -A && git commit",
        ])
      } catch {}
      return
    }

    if (action === "diff") {
      try {
        const output = execFileSync("git", ["-C", cwd, "diff", "--stat"], { encoding: "utf-8" })
        panels.log.setContent(output || "  No changes")
        panels.log.setLabel(` ${fg(C.blue, "git diff --stat")} `)
        screen.render()
      } catch {}
      return
    }

    if (action === "push") {
      try {
        const output = execFileSync("git", ["-C", cwd, "push"], {
          encoding: "utf-8",
          stdio: ["pipe", "pipe", "pipe"],
        })
        panels.log.setContent(output || "  Pushed successfully")
        panels.log.setLabel(` ${fg(C.green, "git push")} `)
        screen.render()
      } catch (e: any) {
        panels.log.setContent(e?.stderr?.toString() || "  Push failed")
        panels.log.setLabel(` ${fg(C.red, "git push failed")} `)
        screen.render()
      }
      return
    }
  }

  // ── Reorder ────────────────────────────────────────────

  function reorder(dir: -1 | 1) {
    const idx = currentIdx()
    const newIdx = idx + dir

    if (state.panel === "projects") {
      const arr = state.data.projects
      if (newIdx < 0 || newIdx >= arr.length) return
      store.swapItems(arr, idx, newIdx)
      state.projectIdx = newIdx
    } else if (state.panel === "tasks") {
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
    if (state.panel === "projects") name = currentProject()?.name ?? ""
    else if (state.panel === "tasks") name = currentProject()?.tasks[state.taskIdx]?.name ?? ""
    else name = currentProject()?.tasks[state.taskIdx]?.subtasks[state.subtaskIdx]?.name ?? ""

    if (!name) return
    try {
      execFileSync("wl-copy", [], { input: name })
    } catch {}

    // Flash "yanked" in status bar
    statusBar.setContent(fg(C.green, " yanked!"))
    screen.render()
    setTimeout(() => {
      renderStatusBar()
      screen.render()
    }, 1500)
  }

  // ── Search ─────────────────────────────────────────────

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
        store.addProject(state.data, repo.name, { path: repo.path })
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

  // ── Session Lifecycle Polling ──────────────────────────

  function checkSessionLifecycle() {
    if (state.sessions.size === 0) return
    const activeWindows = session.getActiveWindows()

    for (const [projId, sess] of state.sessions) {
      if (!activeWindows.has(sess.windowName)) {
        // Session ended
        state.sessions.delete(projId)
        const proj = state.data.projects.find(p => p.id === projId)

        // Desktop notification
        try {
          execFileSync("notify-send", ["Quest Log", `${proj?.name ?? "Session"} finished`])
        } catch {}

        // Auto-done prompt if viewing this project
        if (proj && projId === currentProject()?.id) {
          stopWatching()

          if (!modalOpen) {
            modalOpen = true
            showConfirmModal({
              screen,
              message: `${fg(C.text, "Mark ")}${fg(C.peach, proj.name)}${fg(C.text, " done?")}`,
              onConfirm: () => {
                modalOpen = false
                // Mark the current task done (not the whole project)
                const task = proj.tasks[state.taskIdx]
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
      }
    }

    prevActiveWindows = activeWindows
  }

  // Also capture pane for currently viewed session
  function pollCapture() {
    const sess = currentSession()
    if (!sess || state.rightPaneMode !== "log") return
    updateLogContent(sess)
  }

  // ── Keypress Handler ───────────────────────────────────

  screen.on("keypress", (_ch: string, key: blessed.Widgets.Events.IKeyEventArg) => {
    if (modalOpen) return
    if (state.inputMode) return // textbox handles its own keys

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
        // Keep filter active, just exit search input mode
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
        setCurrentIdx(0)
        if (state.panel === "projects") {
          state.taskIdx = 0
          state.subtaskIdx = 0
          autoSwitchPaneMode()
        } else if (state.panel === "tasks") {
          state.subtaskIdx = 0
        }
        renderAll()
        return
      }
      gPending = true
      setTimeout(() => { gPending = false }, 500)
      return
    }
    gPending = false

    // Log-view specific keys (right pane in log mode, not on projects panel)
    if (inLogView()) {
      switch (key.ch || key.name) {
        case "i":
          enterInputMode()
          return
        case "x":
          confirmKillSession()
          return
        case "j":
        case "down":
          scrollLog(1)
          return
        case "k":
        case "up":
          scrollLog(-1)
          return
        case "h":
        case "left":
          switchPanel(-1)
          return
        case "G":
          panels.log.setScrollPerc(100)
          screen.render()
          return
        // Post-task actions (only when no active session)
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
        case "tab":
          state.rightPaneMode = "tasks"
          state.panel = "tasks"
          stopWatching()
          renderAll()
          return
        case "?":
          showHelp()
          return
        case "q":
          store.save(state.data)
          process.exit(0)
      }
      return
    }

    // Normal mode keys
    switch (key.ch || key.name) {
      case "h":
      case "left":
        switchPanel(-1)
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
        if (state.panel === "projects") autoSwitchPaneMode()
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
        if (currentSession()) {
          state.rightPaneMode = "log"
          state.panel = "tasks"
          startWatching(currentSession()!)
          lastLogContent = ""
          renderAll()
        }
        break
      case "L":
        showTranscript()
        break
      case "?":
        showHelp()
        break
      case "q":
        store.save(state.data)
        process.exit(0)
    }
  })

  // ── File Watcher (quests.json) ─────────────────────────

  watch(store.DATA_PATH, { persistent: false }, () => {
    if (Date.now() - store.lastSaveTs < 500) return
    const fresh = store.load()
    state.data = fresh
    refreshGitCache(state.data.projects)
    renderAll()
  })

  // ── Polling Intervals ──────────────────────────────────

  // Session lifecycle check every 2s
  setInterval(() => {
    checkSessionLifecycle()
    // Update duration display + running indicators
    if (state.sessions.size > 0) renderAll()
  }, 2000)

  // Capture-pane fallback poll every 500ms (supplements inotify watcher)
  setInterval(() => {
    pollCapture()
  }, 500)

  // ── Initial Render ─────────────────────────────────────

  renderAll()
}
