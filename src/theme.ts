// Catppuccin Mocha
export const C = {
  bg:      "#1e1e2e",
  surface: "#313244",
  overlay: "#45475a",
  text:    "#cdd6f4",
  subtext: "#a6adc8",
  dim:     "#585b70",
  green:   "#a6e3a1",
  yellow:  "#f9e2af",
  mauve:   "#cba6f7",
  red:     "#f38ba8",
  blue:    "#89b4fa",
  peach:   "#fab387",
} as const

export function statusIcon(done: boolean, partial?: boolean): string {
  if (done) return `{${C.green}-fg}✓{/}`
  if (partial) return `{${C.yellow}-fg}◆{/}`
  return `{${C.dim}-fg}○{/}`
}

export function progressBar(done: number, total: number, width = 8): string {
  if (total === 0) return `{${C.dim}-fg}${"░".repeat(width)} 0/0{/}`
  const filled = Math.round((done / total) * width)
  const empty = width - filled
  const bar = `{${C.green}-fg}${"█".repeat(filled)}{/}{${C.dim}-fg}${"░".repeat(empty)}{/}`
  return `${bar} {${C.subtext}-fg}${done}/${total}{/}`
}
