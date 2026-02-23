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

// Wrap text in fg color, closing with specific tag (not bare {/})
export function fg(color: string, text: string): string {
  return `{${color}-fg}${text}{/${color}-fg}`
}

export function statusIcon(done: boolean, partial?: boolean): string {
  if (done) return fg(C.green, "✓")
  if (partial) return fg(C.yellow, "◆")
  return fg(C.dim, "○")
}

export function progressBar(done: number, total: number, width = 8): string {
  if (total === 0) return fg(C.dim, `${"░".repeat(width)} 0/0`)
  const filled = Math.round((done / total) * width)
  const empty = width - filled
  const bar = fg(C.green, "█".repeat(filled)) + fg(C.dim, "░".repeat(empty))
  return `${bar} ${fg(C.subtext, `${done}/${total}`)}`
}
