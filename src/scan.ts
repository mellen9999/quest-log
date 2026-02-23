import { readdirSync, statSync, existsSync } from "fs"
import { join } from "path"
import { execFileSync } from "child_process"
import { homedir } from "os"

export interface RepoInfo {
  name: string
  path: string
  dirty: boolean
  branch: string
  lastCommit: Date
}

export function scanRepos(): RepoInfo[] {
  const home = homedir()
  const repos: RepoInfo[] = []

  for (const entry of readdirSync(home)) {
    const full = join(home, entry)
    try {
      if (!statSync(full).isDirectory()) continue
      if (!existsSync(join(full, ".git"))) continue

      const branch = execFileSync("git", ["rev-parse", "--abbrev-ref", "HEAD"], {
        cwd: full, encoding: "utf-8", timeout: 3000,
      }).trim()

      const dirty = execFileSync("git", ["status", "--porcelain"], {
        cwd: full, encoding: "utf-8", timeout: 3000,
      }).trim().length > 0

      let lastCommit = new Date()
      try {
        const ts = execFileSync("git", ["log", "-1", "--format=%ct"], {
          cwd: full, encoding: "utf-8", timeout: 3000,
        }).trim()
        lastCommit = new Date(parseInt(ts) * 1000)
      } catch {}

      repos.push({ name: entry, path: full, dirty, branch, lastCommit })
    } catch {
      // not a valid git repo or git error, skip
    }
  }

  return repos
}

export function getRepoStatus(path: string): { dirty: boolean; branch: string } | null {
  try {
    const branch = execFileSync("git", ["rev-parse", "--abbrev-ref", "HEAD"], {
      cwd: path, encoding: "utf-8", timeout: 3000,
    }).trim()
    const dirty = execFileSync("git", ["status", "--porcelain"], {
      cwd: path, encoding: "utf-8", timeout: 3000,
    }).trim().length > 0
    return { dirty, branch }
  } catch {
    return null
  }
}
