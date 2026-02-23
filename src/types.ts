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

export type PanelName = "projects" | "tasks" | "subtasks"

export interface SessionInfo {
  windowName: string
  projectId: string
  transcriptPath: string
  startedAt: number
}

export interface AppState {
  data: QuestData
  panel: PanelName
  projectIdx: number
  taskIdx: number
  subtaskIdx: number
  sessions: Map<string, SessionInfo>
  rightPaneMode: "tasks" | "log"
  inputMode: boolean
  searchMode: boolean
  searchQuery: string
}
