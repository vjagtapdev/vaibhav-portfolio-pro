import { useEffect, useState } from 'react'
import { clamp01 } from '../utils/scroll'

export function useScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const update = () => {
      const doc = document.documentElement
      const scrollTop = doc.scrollTop || document.body.scrollTop || 0
      const max = Math.max(1, doc.scrollHeight - doc.clientHeight)
      setProgress(clamp01(scrollTop / max))
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return progress
}

