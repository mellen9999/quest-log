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

export function fg(color: string, text: string): string {
  return `{${color}-fg}${text}{/${color}-fg}`
}

// Icon + name in one color — neo-blessed can't handle multi-color lines
export function statusLine(done: boolean, partial: boolean, name: string): string {
  if (done) return fg(C.green, `✓ ${name}`)
  if (partial) return fg(C.yellow, `◆ ${name}`)
  return fg(C.text, `○ ${name}`)
}

export function statusIcon(done: boolean, partial?: boolean): string {
  if (done) return "✓"
  if (partial) return "◆"
  return "○"
}

export function progressBar(done: number, total: number, width = 8): string {
  if (total === 0) return fg(C.dim, `${"░".repeat(width)} 0/0`)
  const filled = Math.round((done / total) * width)
  const empty = width - filled
  return fg(C.green, "█".repeat(filled)) + fg(C.dim, `${"░".repeat(empty)} ${done}/${total}`)
}
