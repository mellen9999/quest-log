import { Terminal } from "@xterm/headless"
import { SerializeAddon } from "@xterm/addon-serialize"
import { mkdirSync, existsSync, readdirSync, appendFileSync } from "fs"
import { join } from "path"
import { homedir } from "os"
import { log, logError } from "./log"
import type { SessionInfo, PtyHandle } from "./types"

const SESSION_DIR = join(homedir(), ".local", "share", "quest-log", "sessions")

function ensureSessionDir() {
  if (!existsSync(SESSION_DIR)) mkdirSync(SESSION_DIR, { recursive: true })
}

function transcriptPath(projectId: string): string {
  const ts = new Date().toISOString().replace(/[:.]/g, "-")
  return join(SESSION_DIR, `${projectId}-${ts}.log`)
}

export function launchSession(
  name: string,
  id: string,
  cwd: string,
  taskDesc: string,
  cols: number,
  rows: number,
  onData: (content: string) => void,
  onExit: (code: number | null) => void,
): SessionInfo | null {
  ensureSessionDir()
  const tPath = transcriptPath(id)
  log(`launchSession: name=${name} id=${id} cwd=${cwd} cols=${cols} rows=${rows}`)
  log(`launchSession: cmd=claude "Work on: ${taskDesc}"`)

  const term = new Terminal({ cols, rows, allowProposedApi: true })
  const serializeAddon = new SerializeAddon()
  term.loadAddon(serializeAddon)

  const decoder = new TextDecoder()
  let debounceTimer: ReturnType<typeof setTimeout> | null = null

  let ptyRef: any = null

  try {
    const proc = Bun.spawn({
      cmd: ["claude", `Work on: ${taskDesc}`],
      cwd,
      terminal: {
        cols,
        rows,
        data(ptyObj: any, chunk: Uint8Array) {
          if (!ptyRef) {
            ptyRef = ptyObj
            log(`pty data callback: captured ptyRef, type=${typeof ptyObj}, write=${typeof ptyObj?.write}`)
          }
          const text = decoder.decode(chunk, { stream: true })
          try { appendFileSync(tPath, text) } catch (e) { logError("transcript write", e) }
          // xterm write is async — snapshot in the callback after processing
          term.write(text, () => {
            if (debounceTimer) clearTimeout(debounceTimer)
            debounceTimer = setTimeout(() => {
              onData(snapshot(sess))
            }, 50)
          })
        },
        exit(ptyObj: any, code: number) {
          log(`pty exit: code=${code} projectId=${id}`)
          sess.exitCode = code
          if (debounceTimer) clearTimeout(debounceTimer)
          // Final snapshot after xterm finishes processing
          term.write("", () => {
            onData(snapshot(sess))
            onExit(code)
          })
        },
      },
    })

    // Grab PTY terminal from proc
    ptyRef = (proc as any).terminal
    log(`launchSession: proc.terminal type=${typeof ptyRef}, write=${typeof ptyRef?.write}, resize=${typeof ptyRef?.resize}`)
    log(`launchSession: pid=${proc.pid}`)

    const handle: PtyHandle = {
      write(data: string) {
        log(`pty.write: len=${data.length} ptyRef=${!!ptyRef} data=${JSON.stringify(data).slice(0, 80)}`)
        if (!ptyRef) {
          log("pty.write: ERROR ptyRef is null!")
          return
        }
        try {
          ptyRef.write(data)
        } catch (e) {
          logError("pty.write", e)
        }
      },
      resize(c: number, r: number) {
        try {
          ptyRef?.resize(c, r)
        } catch (e) {
          logError("pty.resize", e)
        }
      },
      kill() {
        log(`pty.kill: pid=${proc.pid}`)
        try {
          proc.kill()
        } catch (e) {
          logError("pty.kill", e)
        }
      },
    }

    const sess: SessionInfo = {
      projectId: id,
      transcriptPath: tPath,
      startedAt: Date.now(),
      pty: handle,
      term,
      serializeAddon,
      exitCode: null,
    }

    log(`launchSession: success, returning session`)
    return sess
  } catch (e) {
    logError("launchSession", e)
    return null
  }
}

export function launchGitSession(
  projectId: string,
  cwd: string,
  cmd: string[],
  cols: number,
  rows: number,
  onData: (content: string) => void,
  onExit: () => void,
): SessionInfo | null {
  const term = new Terminal({ cols, rows, allowProposedApi: true })
  const serializeAddon = new SerializeAddon()
  term.loadAddon(serializeAddon)
  const decoder = new TextDecoder()
  let debounceTimer: ReturnType<typeof setTimeout> | null = null
  let ptyRef: any = null

  try {
    const proc = Bun.spawn({
      cmd,
      cwd,
      terminal: {
        cols,
        rows,
        data(ptyObj: any, chunk: Uint8Array) {
          if (!ptyRef) ptyRef = ptyObj
          const text = decoder.decode(chunk, { stream: true })
          term.write(text, () => {
            if (debounceTimer) clearTimeout(debounceTimer)
            debounceTimer = setTimeout(() => onData(snapshot(sess)), 50)
          })
        },
        exit(_ptyObj: any, code: number) {
          sess.exitCode = code
          if (debounceTimer) clearTimeout(debounceTimer)
          term.write("", () => {
            onData(snapshot(sess))
            onExit()
          })
        },
      },
    })

    ptyRef = (proc as any).terminal

    const handle: PtyHandle = {
      write(data: string) {
        try { ptyRef?.write(data) } catch (e) { logError("git-pty.write", e) }
      },
      resize(c: number, r: number) {
        try { ptyRef?.resize(c, r) } catch (e) { logError("git-pty.resize", e) }
      },
      kill() {
        try { proc.kill() } catch (e) { logError("git-pty.kill", e) }
      },
    }

    const sess: SessionInfo = {
      projectId,
      transcriptPath: "",
      startedAt: Date.now(),
      pty: handle,
      term,
      serializeAddon,
      exitCode: null,
    }

    return sess
  } catch (e) {
    logError("launchGitSession", e)
    return null
  }
}

export function writeToSession(sess: SessionInfo, data: string): void {
  sess.pty.write(data)
}

export function resizeSession(sess: SessionInfo, cols: number, rows: number): void {
  log(`resizeSession: cols=${cols} rows=${rows}`)
  sess.pty.resize(cols, rows)
  try {
    sess.term.resize(cols, rows)
  } catch (e) {
    logError("xterm.resize", e)
  }
}

export function killSession(sess: SessionInfo): void {
  sess.pty.kill()
}

export function snapshot(sess: SessionInfo): string {
  try {
    const html = sess.serializeAddon.serialize({ excludeModes: true })
    // Strip \r for blessed compat, trim trailing blank lines
    const lines = html.replace(/\r/g, "").split("\n")
    while (lines.length > 0 && lines[lines.length - 1]?.trim() === "") {
      lines.pop()
    }
    return lines.join("\n")
  } catch {
    // Fallback to plain text
    const buf = sess.term.buffer.active
    const lines: string[] = []
    const end = buf.baseY + sess.term.rows
    for (let y = 0; y < end; y++) {
      const line = buf.getLine(y)
      if (!line) continue
      lines.push(line.translateToString(true))
    }
    while (lines.length > 0 && lines[lines.length - 1]?.trim() === "") {
      lines.pop()
    }
    return lines.join("\n")
  }
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
  } catch (e) {
    logError("latestTranscript", e)
    return null
  }
}

// Strip ANSI escape sequences for displaying raw transcripts
export function stripAnsi(s: string): string {
  return s
    .replace(/\x1b\[[0-9;?]*[A-Za-z@`]/g, "")   // CSI sequences
    .replace(/\x1b\][^\x07]*(?:\x07|\x1b\\)/g, "") // OSC sequences
    .replace(/\x1b[()][AB012]/g, "")               // charset
    .replace(/\x1b[a-zA-Z]/g, "")                  // 2-char ESC
    .replace(/[\x00-\x08\x0b\x0c\x0e-\x1f]/g, "") // control chars (keep \n \r \t)
}

// Replay a raw transcript through xterm and serialize with colors
export function replayTranscript(raw: string, cols = 120, rows = 500): string {
  try {
    const term = new Terminal({ cols, rows, allowProposedApi: true })
    const sa = new SerializeAddon()
    term.loadAddon(sa)
    term.write(raw)
    // Synchronous — xterm processes writes immediately for headless
    const result = sa.serialize({ excludeModes: true }).replace(/\r/g, "")
    const lines = result.split("\n")
    while (lines.length > 0 && lines[lines.length - 1]?.trim() === "") lines.pop()
    term.dispose()
    return lines.join("\n")
  } catch (e) {
    logError("replayTranscript", e)
    return stripAnsi(raw)
  }
}

export { SESSION_DIR }
