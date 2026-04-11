import { motion } from 'framer-motion'

export function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-10 sm:mb-12">
      <div className="flex items-center gap-3">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45 }}
          className="text-xs font-semibold uppercase tracking-[0.16em] text-fuchsia-300/90"
        >
          {eyebrow}
        </motion.p>
        <div className="h-px flex-1 bg-gradient-to-r from-white/15 to-transparent" />
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, delay: 0.02 }}
        className="mt-3 text-2xl font-semibold leading-tight text-zinc-50 sm:text-3xl lg:text-4xl"
      >
        {title}
      </motion.h2>

      {subtitle ? (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.04 }}
          className="mt-3 max-w-3xl text-sm leading-relaxed text-muted sm:text-base"
        >
          {subtitle}
        </motion.p>
      ) : null}
    </div>
  )
}

