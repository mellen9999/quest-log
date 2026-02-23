import { execFileSync } from "child_process"
import { mkdirSync, existsSync, readdirSync, writeFileSync } from "fs"
import { join } from "path"
import { homedir } from "os"
import type { SessionInfo } from "./types"

const SESSION_DIR = join(homedir(), ".local", "share", "quest-log", "sessions")

export function ensureSessionDir() {
  if (!existsSync(SESSION_DIR)) mkdirSync(SESSION_DIR, { recursive: true })
}

function transcriptPath(projectId: string): string {
  const ts = new Date().toISOString().replace(/[:.]/g, "-")
  return join(SESSION_DIR, `${projectId}-${ts}.log`)
}

export function launchSession(
  projectName: string,
  projectId: string,
  cwd: string,
  taskDesc: string,
): SessionInfo | null {
  ensureSessionDir()
  const windowName = `⚔ ${projectName}`
  const tPath = transcriptPath(projectId)

  try {
    execFileSync("tmux", [
      "new-window",
      "-n", windowName,
      "-c", cwd,
      "claude", `Work on: ${taskDesc}`,
    ])

    // Touch transcript file so fs.watch can start immediately
    writeFileSync(tPath, "")

    // Start pipe-pane for transcript capture
    try {
      execFileSync("tmux", ["pipe-pane", "-o", "-t", windowName, `cat >> ${tPath}`])
    } catch {}

    return {
      windowName,
      projectId,
      transcriptPath: tPath,
      startedAt: Date.now(),
    }
  } catch {
    return null
  }
}

export function getActiveWindows(): Set<string> {
  try {
    const output = execFileSync("tmux", [
      "list-windows", "-a", "-F", "#{window_name}",
    ], { encoding: "utf-8" })
    return new Set(
      output.split("\n").filter(l => l.startsWith("⚔")).map(l => l.trim()),
    )
  } catch {
    return new Set()
  }
}

export function capturePane(windowName: string): string {
  try {
    return execFileSync("tmux", [
      "capture-pane", "-p", "-e", "-t", windowName,
    ], { encoding: "utf-8" })
  } catch {
    return ""
  }
}

export function killSessionWindow(windowName: string): void {
  try {
    execFileSync("tmux", ["kill-window", "-t", windowName])
  } catch {}
}

export function sendKeys(windowName: string, text: string): void {
  try {
    execFileSync("tmux", ["send-keys", "-t", windowName, text, "Enter"])
  } catch {}
}

export function formatDuration(startedAt: number): string {
  const elapsed = Math.floor((Date.now() - startedAt) / 1000)
  const m = Math.floor(elapsed / 60)
  const s = elapsed % 60
  return `${m}m ${s.toString().padStart(2, "0")}s`
}

export function latestTranscript(projectId: string): string | null {
  try {
    ensureSessionDir()
    const files = readdirSync(SESSION_DIR)
    const matching = files
      .filter(f => f.startsWith(projectId) && f.endsWith(".log"))
      .sort()
    return matching.length > 0
      ? join(SESSION_DIR, matching[matching.length - 1]!)
      : null
  } catch {
    return null
  }
}

export { SESSION_DIR }
