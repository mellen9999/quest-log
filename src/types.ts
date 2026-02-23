import type { Terminal } from "@xterm/headless"

export interface Subtask {
  id: string
  name: string
  done: boolean
}

export interface Task {
  id: string
  name: string
  done: boolean
  subtasks: Subtask[]
}

export interface Project {
  id: string
  name: string
  done: boolean
  path?: string
  type?: "code" | "hardware" | "other"
  tasks: Task[]
}

export interface QuestData {
  projects: Project[]
}

export type PanelName = "projects" | "tasks" | "subtasks" | "terminal"
export type LeftPanel = "projects" | "tasks" | "subtasks"

export interface PtyHandle {
  write(data: string): void
  resize(cols: number, rows: number): void
  kill(): void
}

export interface SessionInfo {
  projectId: string
  transcriptPath: string
  startedAt: number
  pty: PtyHandle
  term: Terminal
  exitCode: number | null
}

export interface AppState {
  data: QuestData
  panel: PanelName
  leftPanel: LeftPanel
  projectIdx: number
  taskIdx: number
  subtaskIdx: number
  sessions: Map<string, SessionInfo>
  inputMode: false | "line" | "raw"
  searchMode: boolean
  searchQuery: string
  termContent: string
  termDirty: boolean
}
