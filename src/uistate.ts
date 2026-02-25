import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs"
import { join, dirname } from "path"
import { homedir } from "os"
import { logError } from "./log"
import type { LeftPanel, PanelName } from "./types"

const STATE_PATH = join(homedir(), ".local", "share", "quest-log", "ui-state.json")

export interface UIState {
  projectIdx: number
  taskIdx: number
  subtaskIdx: number
  leftPanel: LeftPanel
  panel: PanelName
  showArchived: boolean
}

const defaults: UIState = {
  projectIdx: 0,
  taskIdx: 0,
  subtaskIdx: 0,
  leftPanel: "projects",
  panel: "projects",
  showArchived: false,
}

export function loadUIState(): UIState {
  try {
    if (!existsSync(STATE_PATH)) return { ...defaults }
    const raw = readFileSync(STATE_PATH, "utf-8")
    const parsed = JSON.parse(raw)
    return { ...defaults, ...parsed }
  } catch {
    return { ...defaults }
  }
}

export function saveUIState(s: UIState): void {
  try {
    const dir = dirname(STATE_PATH)
    if (!existsSync(dir)) mkdirSync(dir, { recursive: true })
    writeFileSync(STATE_PATH, JSON.stringify(s, null, 2))
  } catch (e) {
    logError("saveUIState", e)
  }
}
