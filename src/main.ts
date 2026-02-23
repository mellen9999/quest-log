import { createScreen, createHeader, createStatusBar, createPanel } from "./ui"
import { setupPanels } from "./panels"
import * as store from "./store"
import { scanRepos } from "./scan"
import { seedData } from "./seed"
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
  for (const repo of repos) {
    if (!tracked.has(repo.path)) {
      store.addProject(data, repo.name, { path: repo.path })
    }
  }
}

const screen = createScreen()
const header = createHeader(screen)
createStatusBar(screen)

const projectsPanel = createPanel({
  parent: screen,
  label: "⚔ Projects",
  top: 1,
  left: 0,
  width: "30%",
  height: "100%-2",
})

const tasksPanel = createPanel({
  parent: screen,
  label: "Tasks",
  top: 1,
  left: "30%",
  width: "70%",
  height: "60%-1",
})

const subtasksPanel = createPanel({
  parent: screen,
  label: "Subtasks",
  top: "60%",
  left: "30%",
  width: "70%",
  height: "40%-1",
})

const state: AppState = {
  data,
  panel: "projects",
  projectIdx: 0,
  taskIdx: 0,
  subtaskIdx: 0,
}

setupPanels(screen, { projects: projectsPanel, tasks: tasksPanel, subtasks: subtasksPanel }, header, state, repos)

screen.key(["C-c"], () => {
  store.save(state.data)
  process.exit(0)
})
