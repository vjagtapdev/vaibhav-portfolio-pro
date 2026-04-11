import { useEffect, useRef } from 'react'

function prefersReducedMotion() {
  return window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false
}

function hasFinePointer() {
  return window.matchMedia?.('(pointer: fine)')?.matches ?? false
}

export function CursorAura() {
  const rafRef = useRef(0)
  const lastRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    if (prefersReducedMotion()) return
    if (!hasFinePointer()) return

    const root = document.documentElement

    const onMove = (e) => {
      lastRef.current.x = e.clientX
      lastRef.current.y = e.clientY

      if (rafRef.current) return
      rafRef.current = window.requestAnimationFrame(() => {
        rafRef.current = 0
        const { innerWidth: w, innerHeight: h } = window
        const x = Math.round((lastRef.current.x / Math.max(1, w)) * 100)
        const y = Math.round((lastRef.current.y / Math.max(1, h)) * 100)
        root.style.setProperty('--x', `${x}%`)
        root.style.setProperty('--y', `${y}%`)
      })
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      window.removeEventListener('pointermove', onMove)
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current)
      rafRef.current = 0
    }
  }, [])

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 opacity-70"
      style={{
        backgroundImage:
          'radial-gradient(700px circle at var(--x, 50%) var(--y, 20%), rgba(217,70,239,0.14), transparent 55%), radial-gradient(700px circle at calc(var(--x, 50%) + 18%) calc(var(--y, 20%) + 18%), rgba(34,211,238,0.09), transparent 60%)',
      }}
    />
  )
}

