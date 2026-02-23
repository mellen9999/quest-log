import { readFileSync, existsSync } from "fs"
import { join } from "path"
import { homedir } from "os"
import { randomUUID } from "crypto"
import type { QuestData, Project, Task } from "./types"
import type { RepoInfo } from "./scan"

interface SeedTask {
  name: string
  done?: boolean
  subtasks?: (string | { name: string; done?: boolean })[]
}

interface SeedProject {
  name: string
  repo?: string
  type?: "code" | "hardware" | "other"
  done?: boolean
  tasks?: SeedTask[]
}

interface SeedConfig {
  projects?: SeedProject[]
}

const CONFIG_PATH = join(homedir(), ".config", "quest-log", "seed.json")

function buildTask(t: SeedTask): Task {
  return {
    id: randomUUID(),
    name: t.name,
    done: t.done ?? false,
    subtasks: (t.subtasks ?? []).map(s => {
      const sub = typeof s === "string" ? { name: s, done: false } : { name: s.name, done: s.done ?? false }
      return { id: randomUUID(), ...sub }
    }),
  }
}

function buildProject(sp: SeedProject, repoMap: Map<string, RepoInfo>): Project {
  const repo = sp.repo ? repoMap.get(sp.repo) : undefined
  return {
    id: randomUUID(),
    name: sp.name,
    done: sp.done ?? false,
    path: repo?.path,
    type: sp.type ?? (repo ? "code" : "other"),
    tasks: (sp.tasks ?? []).map(buildTask),
  }
}

export function seedData(repos: RepoInfo[]): QuestData {
  const repoMap = new Map(repos.map(r => [r.name, r]))
  const projects: Project[] = []

  // Load user seed config if it exists
  let config: SeedConfig = {}
  if (existsSync(CONFIG_PATH)) {
    try {
      config = JSON.parse(readFileSync(CONFIG_PATH, "utf-8"))
    } catch {}
  }

  // Build projects from seed config
  const seededRepos = new Set<string>()
  for (const sp of config.projects ?? []) {
    projects.push(buildProject(sp, repoMap))
    if (sp.repo) seededRepos.add(sp.repo)
  }

  // Add remaining discovered repos not in seed config
  for (const repo of repos) {
    if (seededRepos.has(repo.name)) continue
    projects.push({
      id: randomUUID(),
      name: repo.name,
      done: false,
      path: repo.path,
      type: "code",
      tasks: [],
    })
  }

  return { projects }
}
