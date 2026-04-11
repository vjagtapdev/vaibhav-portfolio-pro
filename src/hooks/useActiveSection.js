import { useEffect, useState } from 'react'

export function useActiveSection(sectionIds) {
  const [active, setActive] = useState(sectionIds?.[0] ?? 'home')
  const idsKey = Array.isArray(sectionIds) ? sectionIds.join('|') : ''

  useEffect(() => {
    if (!Array.isArray(sectionIds) || sectionIds.length === 0) return

    const els = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (els.length === 0) return

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0]
        if (visible?.target?.id) setActive(visible.target.id)
      },
      {
        root: null,
        threshold: [0.15, 0.25, 0.35, 0.5, 0.65],
        rootMargin: '-20% 0px -55% 0px',
      }
    )

    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [idsKey, sectionIds])

  return active
}

