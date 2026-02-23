import blessed from "neo-blessed"
import { execFileSync } from "child_process"
import { C, statusIcon, progressBar } from "./theme"
import { setFocused } from "./ui"
import { showInputModal, showConfirmModal, showHelpOverlay } from "./modal"
import * as store from "./store"
import { scanRepos, getRepoStatus } from "./scan"
import type { RepoInfo } from "./scan"
import type { AppState, PanelName } from "./types"

const PANELS: PanelName[] = ["projects", "tasks", "subtasks"]

interface PanelSet {
  projects: blessed.Widgets.BoxElement
  tasks: blessed.Widgets.BoxElement
  subtasks: blessed.Widgets.BoxElement
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
  state: AppState,
  initialRepos?: RepoInfo[]
) {
  // Build initial git cache
  refreshGitCache(state.data.projects)
  let modalOpen = false
  let gPending = false

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

  function renderHeader() {
    const s = store.globalStats(state.data)
    header.setContent(
      ` {${C.mauve}-fg}⚔ Quest Log{/}` +
      `{${C.dim}-fg} ──{/} ` +
      `{${C.text}-fg}${s.projects}{/} {${C.subtext}-fg}projects{/}` +
      `{${C.dim}-fg} │{/} ` +
      `{${C.text}-fg}${s.tasks}{/} {${C.subtext}-fg}tasks{/}` +
      `{${C.dim}-fg} │{/} ` +
      `{${C.text}-fg}${s.pct}%{/} {${C.subtext}-fg}done{/}`
    )
  }

  function renderProjects() {
    const panel = panels.projects
    const projects = state.data.projects

    if (projects.length === 0) {
      panel.setContent(
        `\n{center}{${C.dim}-fg}No quests yet{/}{/center}` +
        `\n\n{center}{${C.subtext}-fg}Press {${C.blue}-fg}a{/} to add one{/}{/center}`
      )
      return
    }

    const lines: string[] = []
    for (let i = 0; i < projects.length; i++) {
      const p = projects[i]
      const sel = state.panel === "projects" && i === state.projectIdx
      const stats = store.projectStats(p)
      const partial = store.isPartiallyDone(p)
      const icon = statusIcon(p.done, partial)

      const nameFg = p.done ? C.dim : C.text
      const bgAttr = sel ? `{${C.blue}-bg}{${C.bg}-fg}` : ""
      const bgEnd = sel ? "{/}" : ""

      // Git dirty indicator
      const git = p.path ? gitCache.get(p.path) : null
      const dirtyMark = git?.dirty ? ` {${C.yellow}-fg}*{/}` : ""

      lines.push(`${bgAttr} ${icon} {${nameFg}-fg}${p.name}{/}${dirtyMark} ${bgEnd}`)

      // Progress bar + branch
      const branchStr = git ? `  {${C.dim}-fg}${git.branch}{/}` : ""
      lines.push(`   ${progressBar(stats.done, stats.total)}${branchStr}`)
    }
    panel.setContent(lines.join("\n"))

    // Scroll to keep selection visible
    const scrollTarget = state.projectIdx * 2
    ensureVisible(panel, scrollTarget)
  }

  function renderTasks() {
    const panel = panels.tasks
    const proj = state.data.projects[state.projectIdx]
    const tasks = proj ? proj.tasks : []

    if (!proj) {
      panel.setContent(`\n{center}{${C.dim}-fg}Select a project{/}{/center}`)
      return
    }

    if (tasks.length === 0) {
      panel.setContent(
        `\n{center}{${C.dim}-fg}No tasks yet{/}{/center}` +
        `\n\n{center}{${C.subtext}-fg}Press {${C.blue}-fg}a{/} to add one{/}{/center}`
      )
      return
    }

    const lines: string[] = []
    for (let i = 0; i < tasks.length; i++) {
      const t = tasks[i]
      const sel = state.panel === "tasks" && i === state.taskIdx
      const icon = statusIcon(t.done)
      const nameFg = t.done ? C.dim : C.text
      const bgAttr = sel ? `{${C.blue}-bg}{${C.bg}-fg}` : ""
      const bgEnd = sel ? "{/}" : ""

      lines.push(`${bgAttr} ${icon} {${nameFg}-fg}${t.name}{/} ${bgEnd}`)
    }
    panel.setContent(lines.join("\n"))
    ensureVisible(panel, state.taskIdx)
  }

  function renderSubtasks() {
    const panel = panels.subtasks
    const proj = state.data.projects[state.projectIdx]
    const task = proj?.tasks[state.taskIdx]
    const subtasks = task ? task.subtasks : []

    if (!task) {
      panel.setContent(`\n{center}{${C.dim}-fg}Select a task{/}{/center}`)
      return
    }

    if (subtasks.length === 0) {
      panel.setContent(
        `\n{center}{${C.dim}-fg}No subtasks{/}{/center}` +
        `\n\n{center}{${C.subtext}-fg}Press {${C.blue}-fg}a{/} to add one{/}{/center}`
      )
      return
    }

    const lines: string[] = []
    for (let i = 0; i < subtasks.length; i++) {
      const s = subtasks[i]
      const sel = state.panel === "subtasks" && i === state.subtaskIdx
      const icon = statusIcon(s.done)
      const nameFg = s.done ? C.dim : C.text
      const bgAttr = sel ? `{${C.blue}-bg}{${C.bg}-fg}` : ""
      const bgEnd = sel ? "{/}" : ""

      lines.push(`${bgAttr} ${icon} {${nameFg}-fg}${s.name}{/} ${bgEnd}`)
    }
    panel.setContent(lines.join("\n"))
    ensureVisible(panel, state.subtaskIdx)
  }

  function ensureVisible(panel: blessed.Widgets.BoxElement, lineIdx: number) {
    const innerHeight = (panel.height as number) - 2 // subtract borders
    const scrollPos = panel.getScroll?.() ?? 0
    if (lineIdx < scrollPos) {
      panel.scrollTo(lineIdx)
    } else if (lineIdx >= scrollPos + innerHeight) {
      panel.scrollTo(lineIdx - innerHeight + 1)
    }
  }

  function renderAll() {
    clampIndices()
    renderHeader()

    for (const name of PANELS) {
      setFocused(panels[name], name === state.panel)
    }

    // Update labels
    panels.projects.setLabel(` {${state.panel === "projects" ? C.mauve : C.dim}-fg}⚔ Projects{/} `)
    panels.tasks.setLabel(` {${state.panel === "tasks" ? C.mauve : C.dim}-fg}Tasks{/} `)
    panels.subtasks.setLabel(` {${state.panel === "subtasks" ? C.mauve : C.dim}-fg}Subtasks{/} `)

    renderProjects()
    renderTasks()
    renderSubtasks()
    screen.render()
  }

  function switchPanel(dir: -1 | 1) {
    const idx = PANELS.indexOf(state.panel)
    const next = idx + dir
    if (next >= 0 && next < PANELS.length) {
      state.panel = PANELS[next]
      renderAll()
    }
  }

  function move(dir: -1 | 1) {
    const len = listLength()
    if (len === 0) return
    const idx = currentIdx()
    const next = Math.max(0, Math.min(len - 1, idx + dir))
    setCurrentIdx(next)
    // When moving in projects or tasks, reset child indices
    if (state.panel === "projects") {
      state.taskIdx = 0
      state.subtaskIdx = 0
    } else if (state.panel === "tasks") {
      state.subtaskIdx = 0
    }
    renderAll()
  }

  function toggleCurrent() {
    const proj = state.data.projects[state.projectIdx]
    if (state.panel === "projects" && proj) {
      store.toggleDone(proj)
    } else if (state.panel === "tasks" && proj?.tasks[state.taskIdx]) {
      store.toggleDone(proj.tasks[state.taskIdx])
    } else if (state.panel === "subtasks") {
      const task = proj?.tasks[state.taskIdx]
      if (task?.subtasks[state.subtaskIdx]) {
        store.toggleDone(task.subtasks[state.subtaskIdx])
      }
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
        const proj = state.data.projects[state.projectIdx]
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
      message: `{${C.text}-fg}Delete {${C.red}-fg}${itemName}{/}?`,
      onConfirm: () => {
        modalOpen = false
        const proj = state.data.projects[state.projectIdx]
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
        const proj = state.data.projects[state.projectIdx]
        if (state.panel === "projects" && proj) proj.name = name
        else if (state.panel === "tasks" && proj?.tasks[state.taskIdx]) {
          proj.tasks[state.taskIdx].name = name
        } else if (state.panel === "subtasks") {
          const task = proj?.tasks[state.taskIdx]
          if (task?.subtasks[state.subtaskIdx]) task.subtasks[state.subtaskIdx].name = name
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

  function launchTask() {
    const proj = state.data.projects[state.projectIdx]
    if (!proj) return

    // Build the task description from current selection
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
    const prompt = taskDesc
      .replace(/'/g, "'\\''") // escape single quotes for shell

    // Save before leaving
    store.save(state.data)

    // Launch in new tmux window
    try {
      execFileSync("tmux", [
        "new-window",
        "-n", `⚔ ${proj.name}`,
        "-c", cwd,
        `claude --prompt 'Work on: ${prompt}'`,
      ])
    } catch {
      // If not in tmux, fall back to message
      screen.render()
    }
  }

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

  // Keybindings
  screen.on("keypress", (_ch: string, key: blessed.Widgets.Events.IKeyEventArg) => {
    if (modalOpen) return

    // gg support
    if (key.ch === "g") {
      if (gPending) {
        gPending = false
        setCurrentIdx(0)
        if (state.panel === "projects") {
          state.taskIdx = 0
          state.subtaskIdx = 0
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
      case "S": {
        rescan()
        break
      }
      case "?":
        showHelp()
        break
      case "q":
        store.save(state.data)
        process.exit(0)
    }
  })

  // Initial render
  renderAll()
}
