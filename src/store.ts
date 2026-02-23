import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs"
import { join, dirname } from "path"
import { randomUUID } from "crypto"
import type { QuestData, Project, Task, Subtask } from "./types"

const DATA_PATH = join(dirname(import.meta.dir), "data", "quests.json")

function defaultData(): QuestData {
  return { projects: [] }
}

export function load(): QuestData {
  try {
    if (!existsSync(DATA_PATH)) return defaultData()
    const raw = readFileSync(DATA_PATH, "utf-8")
    return JSON.parse(raw) as QuestData
  } catch {
    return defaultData()
  }
}

export function save(data: QuestData): void {
  const dir = dirname(DATA_PATH)
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true })
  writeFileSync(DATA_PATH, JSON.stringify(data, null, 2))
}

export function addProject(data: QuestData, name: string, opts?: { path?: string; type?: "code" | "hardware" | "other" }): Project {
  const p: Project = { id: randomUUID(), name, done: false, path: opts?.path, type: opts?.type, tasks: [] }
  data.projects.push(p)
  save(data)
  return p
}

export function addTask(project: Project, name: string): Task {
  const t: Task = { id: randomUUID(), name, done: false, subtasks: [] }
  project.tasks.push(t)
  return t
}

export function addSubtask(task: Task, name: string): Subtask {
  const s: Subtask = { id: randomUUID(), name, done: false }
  task.subtasks.push(s)
  return s
}

export function removeProject(data: QuestData, idx: number): void {
  data.projects.splice(idx, 1)
}

export function removeTask(project: Project, idx: number): void {
  project.tasks.splice(idx, 1)
}

export function removeSubtask(task: Task, idx: number): void {
  task.subtasks.splice(idx, 1)
}

export function toggleDone(item: { done: boolean }): void {
  item.done = !item.done
}

export function projectStats(p: Project): { done: number; total: number } {
  let done = 0
  let total = 0
  for (const t of p.tasks) {
    if (t.subtasks.length > 0) {
      for (const s of t.subtasks) {
        total++
        if (s.done) done++
      }
    } else {
      total++
      if (t.done) done++
    }
  }
  return { done, total }
}

export function isPartiallyDone(p: Project): boolean {
  const { done, total } = projectStats(p)
  return done > 0 && done < total
}

export function globalStats(data: QuestData): { projects: number; tasks: number; pct: number } {
  let tasks = 0
  let done = 0
  for (const p of data.projects) {
    const s = projectStats(p)
    tasks += s.total
    done += s.done
  }
  return {
    projects: data.projects.length,
    tasks,
    pct: tasks === 0 ? 0 : Math.round((done / tasks) * 100),
  }
}
