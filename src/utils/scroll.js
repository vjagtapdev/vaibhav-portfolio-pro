export function scrollToId(id) {
  const el = document.getElementById(id)
  if (!el) return
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function clamp01(n) {
  if (Number.isNaN(n)) return 0
  return Math.min(1, Math.max(0, n))
}

