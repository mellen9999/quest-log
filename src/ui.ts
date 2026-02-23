import blessed from "neo-blessed"
import { C, fg } from "./theme"

export function createScreen() {
  const screen = blessed.screen({
    smartCSR: true,
    title: "Quest Log",
    fullUnicode: true,
    tags: true,
    style: { bg: C.bg },
  })
  return screen
}

export function createHeader(screen: blessed.Widgets.Screen) {
  return blessed.box({
    parent: screen,
    top: 0,
    left: 0,
    width: "100%",
    height: 1,
    tags: true,
    style: { bg: C.surface, fg: C.text },
  })
}

export function createStatusBar(screen: blessed.Widgets.Screen) {
  return blessed.box({
    parent: screen,
    bottom: 0,
    left: 0,
    width: "100%",
    height: 1,
    tags: true,
    content: fg(C.subtext, " h/l panel | j/k move | enter launch | space toggle | a add | d del | S scan | ? help | q quit"),
    style: { bg: C.surface, fg: C.dim },
  })
}

interface PanelOpts {
  parent: blessed.Widgets.Screen
  label: string
  top: number | string
  left: number | string
  width: number | string
  height: number | string
}

export function createPanel(opts: PanelOpts) {
  return blessed.box({
    parent: opts.parent,
    top: opts.top,
    left: opts.left,
    width: opts.width,
    height: opts.height,
    tags: true,
    scrollable: true,
    alwaysScroll: true,
    mouse: false,
    label: ` ${opts.label} `,
    border: { type: "line" },
    style: {
      bg: C.surface,
      fg: C.text,
      border: { fg: C.dim },
      label: { fg: C.dim },
      scrollbar: { bg: C.overlay },
    },
    scrollbar: { ch: "▐", style: { bg: C.overlay } } as any,
  })
}

export function setFocused(panel: blessed.Widgets.BoxElement, focused: boolean) {
  const color = focused ? C.mauve : C.dim
  panel.style.border = { fg: color }
  ;(panel.style as any).label = { fg: color }
}
