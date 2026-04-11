import { motion } from 'framer-motion'

export function Loader({ label = 'Loading…' }) {
  return (
    <motion.div
      className="fixed inset-0 z-[80] grid place-items-center bg-zinc-950"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.98, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.35 }}
        className="glass w-[92%] max-w-md rounded-3xl p-8"
      >
        <div className="flex items-center gap-4">
          <motion.div
            aria-hidden="true"
            className="h-12 w-12 rounded-2xl bg-gradient-to-br from-fuchsia-400/90 via-violet-400/80 to-cyan-300/80"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1.2, ease: 'linear' }}
          />
          <div className="flex-1">
            <p className="text-sm font-medium text-zinc-200">{label}</p>
            <p className="mt-1 text-xs text-zinc-400/90">
              Preparing a smooth, responsive experience…
            </p>
          </div>
        </div>
        <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/5">
          <motion.div
            className="h-full w-1/2 rounded-full bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-300"
            animate={{ x: ['-40%', '140%'] }}
            transition={{ repeat: Infinity, duration: 0.95, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </motion.div>
  )
}

