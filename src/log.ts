import { appendFileSync, mkdirSync, existsSync } from "fs"
import { join } from "path"
import { homedir } from "os"

const LOG_DIR = join(homedir(), ".local", "share", "quest-log")
const LOG_PATH = join(LOG_DIR, "debug.log")

function ts(): string {
  return new Date().toISOString().replace("T", " ").slice(0, 19)
}

export function log(msg: string): void {
  try {
    if (!existsSync(LOG_DIR)) mkdirSync(LOG_DIR, { recursive: true })
    appendFileSync(LOG_PATH, `[${ts()}] ${msg}\n`)
  } catch {}
}

export function logError(context: string, err: unknown): void {
  const msg = err instanceof Error ? `${err.message}\n${err.stack}` : String(err)
  log(`ERROR [${context}] ${msg}`)
}

export { LOG_PATH }
