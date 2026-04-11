import { useRef } from 'react'
import { useInView } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1]

export function useScrollReveal() {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: true,
    amount: 0.2,
  })

  return { ref, isInView }
}

export const buttonMotion = {
    whileHover: { scale: 1.03 },
    whileTap: { scale: 0.97 },
    transition: { duration: 0.15, ease: 'easeOut' },
  }

export const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease },
  },
}

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export const fadeUpItem = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease },
  },
}

export const cardHover = {
  hover: {
    y: -6,
    scale: 1.02,
    transition: { duration: 0.2, ease: 'easeOut' },
  },
}