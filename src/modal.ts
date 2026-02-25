import blessed from "neo-blessed"
import { C, fg } from "./theme"
import type { SessionInfo, Project } from "./types"
import { formatDuration } from "./pty"

interface InputModalOpts {
  screen: blessed.Widgets.Screen
  title: string
  value?: string
  onSubmit: (val: string) => void
  onCancel: () => void
}

export function showInputModal({ screen, title, value = "", onSubmit, onCancel }: InputModalOpts) {
  const modal = blessed.box({
    parent: screen,
    top: "center",
    left: "center",
    width: 42,
    height: 7,
    tags: true,
    label: ` ${title} `,
    border: { type: "line" },
    style: {
      bg: C.overlay,
      fg: C.text,
      border: { fg: C.mauve },
      label: { fg: C.mauve },
    },
  })

  const input = blessed.textbox({
    parent: modal,
    top: 1,
    left: 2,
    width: 36,
    height: 1,
    inputOnFocus: true,
    style: {
      bg: C.surface,
      fg: C.text,
    },
  })

  blessed.box({
    parent: modal,
    top: 3,
    left: 2,
    width: 36,
    height: 1,
    tags: true,
    content: fg(C.subtext, "[Enter] save    [Esc] cancel"),
    style: { bg: C.overlay, fg: C.subtext },
  })

  function cleanup() {
    modal.destroy()
    screen.render()
  }

  input.on("submit", (val: string) => {
    cleanup()
    if (val.trim()) onSubmit(val.trim())
    else onCancel()
  })

  input.on("cancel", () => {
    cleanup()
    onCancel()
  })

  input.setValue(value)
  screen.render()
  input.focus()
  input.readInput()
}

interface ConfirmModalOpts {
  screen: blessed.Widgets.Screen
  message: string
  onConfirm: () => void
  onCancel: () => void
}

export function showConfirmModal({ screen, message, onConfirm, onCancel }: ConfirmModalOpts) {
  const modal = blessed.box({
    parent: screen,
    top: "center",
    left: "center",
    width: 42,
    height: 7,
    tags: true,
    label: ` ${fg(C.red, "Confirm")} `,
    border: { type: "line" },
    style: {
      bg: C.overlay,
      fg: C.text,
      border: { fg: C.red },
      label: { fg: C.red },
    },
  })

  blessed.box({
    parent: modal,
    top: 1,
    left: 2,
    width: 36,
    height: 1,
    tags: true,
    content: message,
    style: { bg: C.overlay, fg: C.text },
  })

  blessed.box({
    parent: modal,
    top: 3,
    left: 2,
    width: 36,
    height: 1,
    tags: true,
    content: `${fg(C.red, "[y]")} delete    ${fg(C.subtext, "[n/Esc]")} cancel`,
    style: { bg: C.overlay, fg: C.subtext },
  })

  function cleanup() {
    modal.destroy()
    screen.render()
  }

  const handler = (_ch: string, key: blessed.Widgets.Events.IKeyEventArg) => {
    if (key.name === "y") {
      screen.removeListener("keypress", handler)
      cleanup()
      onConfirm()
    } else if (key.name === "n" || key.name === "escape") {
      screen.removeListener("keypress", handler)
      cleanup()
      onCancel()
    }
  }

  screen.on("keypress", handler)
  screen.render()
}

interface HelpOverlayOpts {
  screen: blessed.Widgets.Screen
  onClose: () => void
}

export function showHelpOverlay({ screen, onClose }: HelpOverlayOpts) {
  const lines = [
    fg(C.mauve, "Navigation"),
    "",
    `${fg(C.blue, "h / l")}     Left ↔ terminal`,
    `${fg(C.blue, "Tab")}       Cycle left panels`,
    `${fg(C.blue, "j / k")}     Move / scroll`,
    `${fg(C.blue, "1-9")}       Jump to item N`,
    `${fg(C.blue, "g g")}       Jump to top`,
    `${fg(C.blue, "G")}         Jump to bottom`,
    `${fg(C.blue, "/")}         Fuzzy search / filter`,
    "",
    fg(C.mauve, "Actions"),
    "",
    `${fg(C.blue, "enter")}     Launch session`,
    `${fg(C.blue, "space")}     Toggle done`,
    `${fg(C.blue, "a")}         Add item`,
    `${fg(C.blue, "d")}         Delete item`,
    `${fg(C.blue, "r")}         Rename item`,
    `${fg(C.blue, "e")}         Edit task description`,
    `${fg(C.blue, "J / K")}     Reorder item`,
    `${fg(C.blue, "y")}         Yank name`,
    `${fg(C.blue, "A")}         Toggle archived`,
    `${fg(C.blue, "s")}         Sessions overlay`,
    `${fg(C.blue, "S")}         Rescan repos`,
    "",
    fg(C.mauve, "Terminal"),
    "",
    `${fg(C.blue, "i")}         Line input mode`,
    `${fg(C.blue, "I")}         Raw passthrough mode`,
    `${fg(C.blue, "x")}         Kill session`,
    `${fg(C.blue, "L")}         View last transcript`,
    `${fg(C.blue, "c")}         Git commit`,
    `${fg(C.blue, "D")}         Git diff --stat`,
    `${fg(C.blue, "P")}         Git push`,
    "",
    `${fg(C.blue, "?")}         Toggle help`,
    `${fg(C.blue, "q")}         Quit`,
  ]

  const modal = blessed.box({
    parent: screen,
    top: "center",
    left: "center",
    width: 40,
    height: lines.length + 4,
    tags: true,
    label: ` ${fg(C.mauve, "Help")} `,
    border: { type: "line" },
    content: "\n" + lines.join("\n"),
    style: {
      bg: C.overlay,
      fg: C.text,
      border: { fg: C.mauve },
      label: { fg: C.mauve },
    },
  })

  const handler = (_ch: string, key: blessed.Widgets.Events.IKeyEventArg) => {
    if (key.name === "escape" || key.name === "q" || key.ch === "?") {
      screen.removeListener("keypress", handler)
      modal.destroy()
      screen.render()
      onClose()
    }
  }

  screen.on("keypress", handler)
  screen.render()
}

interface SessionsOverlayOpts {
  screen: blessed.Widgets.Screen
  sessions: Map<string, SessionInfo>
  projects: Project[]
  onSelect: (projectId: string) => void
  onClose: () => void
}

export function showSessionsOverlay({ screen, sessions, projects, onSelect, onClose }: SessionsOverlayOpts) {
  const entries: { projectId: string; name: string; dur: string; status: string }[] = []
  for (const [pid, sess] of sessions) {
    const proj = projects.find(p => p.id === pid)
    const name = proj?.name ?? "Unknown"
    const dur = formatDuration(sess.startedAt)
    const status = sess.exitCode === null ? "running" : `exited (${sess.exitCode})`
    entries.push({ projectId: pid, name, dur, status })
  }

  const lines = entries.map((e, i) =>
    `  ${fg(C.blue, String(i + 1))}  ${fg(C.text, e.name)}  ${fg(C.dim, e.dur)}  ${fg(e.status === "running" ? C.green : C.red, e.status)}`,
  )

  const modal = blessed.box({
    parent: screen,
    top: "center",
    left: "center",
    width: 50,
    height: lines.length + 4,
    tags: true,
    label: ` ${fg(C.peach, "Sessions")} `,
    border: { type: "line" },
    content: "\n" + lines.join("\n"),
    style: {
      bg: C.overlay,
      fg: C.text,
      border: { fg: C.peach },
      label: { fg: C.peach },
    },
  })

  const handler = (_ch: string, key: blessed.Widgets.Events.IKeyEventArg) => {
    if (key.name === "escape" || key.ch === "s") {
      screen.removeListener("keypress", handler)
      modal.destroy()
      screen.render()
      onClose()
      return
    }
    if (key.ch && key.ch >= "1" && key.ch <= "9") {
      const idx = parseInt(key.ch, 10) - 1
      if (idx < entries.length) {
        screen.removeListener("keypress", handler)
        modal.destroy()
        screen.render()
        onSelect(entries[idx]!.projectId)
      }
    }
  }

  screen.on("keypress", handler)
  screen.render()
}
