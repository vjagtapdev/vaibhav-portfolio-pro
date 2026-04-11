import { motion, useReducedMotion } from 'framer-motion'

export function Reveal({
  as: Comp = motion.div,
  delay = 0,
  y = 14,
  duration = 0.55,
  className = '',
  children,
}) {
  const reduce = useReducedMotion()

  return (
    <Comp
      initial={reduce ? { opacity: 1 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: reduce ? 0 : duration, delay }}
      className={className}
    >
      {children}
    </Comp>
  )
}

