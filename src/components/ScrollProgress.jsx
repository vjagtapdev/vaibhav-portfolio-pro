import { motion, useSpring } from 'framer-motion'
import { useScrollProgress } from '../hooks/useScrollProgress'

export function ScrollProgress() {
  const progress = useScrollProgress()
  const scaleX = useSpring(progress, { stiffness: 250, damping: 30, mass: 0.35 })

  return (
    <div className="pointer-events-none fixed left-0 top-0 z-[60] h-1 w-full bg-white/5">
      <motion.div
        style={{ scaleX, transformOrigin: '0% 50%' }}
        className="h-full w-full bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-300"
      />
    </div>
  )
}

