import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'
import { site } from '../data/portfolio'
import { Button } from '../components/Button'
import { Container } from '../components/Container'
import { scrollToId } from '../utils/scroll'

function Highlight({ children }) {
  return (
    <span className="bg-gradient-to-r from-fuchsia-300 to-violet-300 bg-clip-text text-transparent">
      {children}
    </span>
  )
}

function FloatingCard({ title, value, delay = 0, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      className={`glass-strong glass-hover w-full max-w-xs rounded-2xl p-4 ${className}`}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-300/80">
        {title}
      </p>
      <p className="mt-2 text-sm font-semibold text-zinc-50">{value}</p>
    </motion.div>
  )
}

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 sm:pt-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-mesh-radial opacity-95"
      />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[-140px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-br from-fuchsia-500/20 via-violet-500/10 to-cyan-400/20 blur-3xl"
        animate={{ y: [0, 14, 0], scale: [1, 1.03, 1] }}
        transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
      />

      <Container className="relative">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:gap-12">
          
          {/* LEFT SIDE */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Open to opportunities • Fresher
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-5 text-4xl font-semibold text-zinc-50 sm:text-5xl lg:text-6xl"
            >
              I build <Highlight>modern web apps</Highlight> that perform.
              <span className="mt-4 block text-xl text-zinc-300 sm:text-2xl">
                {site.name} • {site.role}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-5 max-w-xl text-muted sm:text-lg"
            >
              {site.intro}
            </motion.p>

            {/* CTA + SOCIAL */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-7 flex flex-wrap items-center gap-4"
            >
              {/* Primary CTA */}
              <Button
                as="a"
                href="#projects"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToId('projects')
                }}
                className="px-6 py-3 font-semibold hover:scale-105 transition"
              >
                View Projects <FiArrowUpRight />
              </Button>

              {/* Secondary */}
              <Button
                as="a"
                href="#contact"
                variant="secondary"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToId('contact')
                }}
              >
                Contact
              </Button>

              {/* Social Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={site.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
                >
                  <FaGithub /> GitHub
                </a>

                <a
                  href={site.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-500/10 border border-blue-400/30 text-blue-300 hover:bg-blue-500/20 transition"
                >
                  <FaLinkedinIn /> LinkedIn
                </a>
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative opacity-90">
            <div className="grid gap-3">
              <FloatingCard
                title="Primary strength"
                value="Clean UI systems + responsive layouts"
              />
              <FloatingCard
                title="Engineering"
                value="Reusable components & scalable logic"
                className="lg:ml-10"
              />
              <FloatingCard
                title="Motion"
                value="Smooth animations with Framer Motion"
                className="lg:ml-4"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}