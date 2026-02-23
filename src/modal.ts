import blessed from "neo-blessed"
import { C } from "./theme"

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

  const hint = blessed.box({
    parent: modal,
    top: 3,
    left: 2,
    width: 36,
    height: 1,
    tags: true,
    content: `{${C.subtext}-fg}[Enter] save    [Esc] cancel{/}`,
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
  // readInput enables the textbox editing mode
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
    label: ` {${C.red}-fg}Confirm{/} `,
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
    content: `{${C.red}-fg}[y]{/} delete    {${C.subtext}-fg}[n/Esc]{/} cancel`,
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
    `{${C.mauve}-fg}Keybindings{/}`,
    "",
    `{${C.blue}-fg}h / l{/}     Switch panel`,
    `{${C.blue}-fg}j / k{/}     Move down / up`,
    `{${C.blue}-fg}enter{/}     Launch task`,
    `{${C.blue}-fg}space{/}     Toggle done`,
    `{${C.blue}-fg}a{/}         Add item`,
    `{${C.blue}-fg}d{/}         Delete item`,
    `{${C.blue}-fg}r{/}         Rename item`,
    `{${C.blue}-fg}g g{/}       Jump to top`,
    `{${C.blue}-fg}G{/}         Jump to bottom`,
    `{${C.blue}-fg}S{/}         Rescan repos`,
    `{${C.blue}-fg}?{/}         Toggle help`,
    `{${C.blue}-fg}q{/}         Quit`,
  ]

  const modal = blessed.box({
    parent: screen,
    top: "center",
    left: "center",
    width: 36,
    height: lines.length + 4,
    tags: true,
    label: ` {${C.mauve}-fg}Help{/} `,
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
