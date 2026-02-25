// neo-blessed's terminfo compiler chokes on foot/tmux caps — xterm-256color is universally safe
if (!process.env.TERM?.startsWith("xterm")) process.env.TERM = "xterm-256color"

import { createScreen, createHeader, createStatusBar, createPanel, createTerminalPanel } from "./ui"
import { setupPanels, cleanupSessions } from "./panels"
import * as store from "./store"
import { scanRepos } from "./scan"
import { seedData } from "./seed"
import { loadUIState, saveUIState } from "./uistate"
import type { AppState } from "./types"

// Scan repos + seed on first run
const repos = scanRepos()
let data = store.load()

if (data.projects.length === 0) {
  data = seedData(repos)
  store.save(data)
} else {
  // Rescan: add new repos not yet tracked
  const tracked = new Set(data.projects.map(p => p.path).filter(Boolean))
  let added = false
  for (const repo of repos) {
    if (!tracked.has(repo.path)) {
      store.addProject(data, repo.name, { path: repo.path, save: false })
      added = true
    }
  }
  if (added) store.save(data)
}

const screen = createScreen()
const header = createHeader(screen)
const statusBar = createStatusBar(screen)

// Left panels — 3 stacked, 30% width
const projectsPanel = createPanel({
  parent: screen,
  label: "⚔ Projects",
  top: 1,
  left: 0,
  width: "30%",
  height: "34%-1",
})

const tasksPanel = createPanel({
  parent: screen,
  label: "Tasks",
  top: "34%",
  left: 0,
  width: "30%",
  height: "33%",
})

const subtasksPanel = createPanel({
  parent: screen,
  label: "Subtasks",
  top: "67%",
  left: 0,
  width: "30%",
  height: "33%-1",
})

// Right panel — terminal, full height
const terminalPanel = createTerminalPanel(screen)

const uiState = loadUIState()

const state: AppState = {
  data,
  panel: uiState.panel === "terminal" ? "projects" : uiState.panel,
  leftPanel: uiState.leftPanel,
  projectIdx: Math.min(uiState.projectIdx, Math.max(0, data.projects.length - 1)),
  taskIdx: uiState.taskIdx,
  subtaskIdx: uiState.subtaskIdx,
  sessions: new Map(),
  inputMode: false,
  searchMode: false,
  searchQuery: "",
  termContent: "",
  termDirty: false,
  showArchived: uiState.showArchived,
}

setupPanels(screen, {
  projects: projectsPanel,
  tasks: tasksPanel,
  subtasks: subtasksPanel,
  terminal: terminalPanel,
}, header, statusBar, state, repos)

screen.key(["C-c"], () => {
  cleanupSessions(state)
  store.save(state.data)
  saveUIState({
    projectIdx: state.projectIdx,
    taskIdx: state.taskIdx,
    subtaskIdx: state.subtaskIdx,
    leftPanel: state.leftPanel,
    panel: state.panel,
    showArchived: state.showArchived,
  })
  process.exit(0)
})
