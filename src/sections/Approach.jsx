import { motion } from 'framer-motion'
import { Container } from '../components/Container'
import { SectionHeader } from '../components/SectionHeader'
import { Reveal } from '../components/Reveal'
import { Button } from '../components/Button'
import { scrollToId } from '../utils/scroll'

const steps = [
  {
    title: 'Understand the real problem',
    desc: 'Clarify goals, constraints, and success criteria — then design the simplest path to value.',
  },
  {
    title: 'Design for clarity',
    desc: 'Clean spacing, strong hierarchy, predictable patterns — so users feel confident.',
  },
  {
    title: 'Build in reusable blocks',
    desc: 'Component-driven structure + small modules that scale with features.',
  },
  {
    title: 'Ship, measure, iterate',
    desc: 'Deliver in milestones, validate early, then polish performance + edge cases.',
  },
]

export function Approach() {
  return (
    <section id="approach" className="section">
      <Container>
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-white/6 via-white/3 to-transparent p-6 shadow-glow sm:p-8">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-90"
          >
            <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-fuchsia-500/18 blur-3xl" />
            <div className="absolute -right-24 top-10 h-80 w-80 rounded-full bg-cyan-400/12 blur-3xl" />
            <div className="absolute bottom-[-140px] left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-400/10 blur-3xl" />
          </div>

          <div className="relative">
            <SectionHeader
              eyebrow="My Approach"
              title="Why hire me"
              subtitle="I build clear product experiences — not just screens. This workflow keeps quality high and delivery predictable."
            />

            <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
              <Reveal className="glass-strong rounded-3xl p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-300/80">
                  A quick story
                </p>
                <p className="mt-3 text-lg font-semibold leading-snug text-zinc-50">
                  I used to “code first”.
                  <span className="block text-zinc-200/90">
                    Now I solve first — then build.
                  </span>
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  My best results come from doing three things well:{' '}
                  <span className="font-semibold text-zinc-100/90">understanding the flow</span>,{' '}
                  <span className="font-semibold text-zinc-100/90">designing the hierarchy</span>,
                  and <span className="font-semibold text-zinc-100/90">iterating fast</span>.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    { k: 'Mindset', v: 'Problem → Plan → Build' },
                    { k: 'Communication', v: 'Clear updates & scope' },
                    { k: 'Quality bar', v: 'Accessible + responsive' },
                    { k: 'Delivery', v: 'Milestones & polish' },
                  ].map((i) => (
                    <div key={i.k} className="glass glass-hover rounded-2xl p-4">
                      <p className="badge badge-accent">{i.k}</p>
                      <p className="mt-2 text-sm text-muted">{i.v}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Button
                    as="a"
                    href="#projects"
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToId('projects')
                    }}
                  >
                    See proof in projects
                  </Button>
                  <Button
                    as="a"
                    href="#contact"
                    variant="secondary"
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToId('contact')
                    }}
                  >
                    Contact me
                  </Button>
                </div>
              </Reveal>

              <div className="space-y-4">
                {steps.map((s, idx) => (
                  <Reveal key={s.title} delay={0.05 + idx * 0.05}>
                    <motion.div
                      whileHover={{ y: -6 }}
                      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                      className="glass-strong glass-hover rounded-3xl p-6"
                    >
                      <div className="flex items-start gap-4">
                        <div className="grid h-10 w-10 flex-none place-items-center rounded-2xl border border-white/10 bg-white/5">
                          <span className="bg-gradient-to-r from-fuchsia-300 via-violet-300 to-cyan-200 bg-clip-text text-sm font-bold text-transparent">
                            {String(idx + 1).padStart(2, '0')}
                          </span>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-zinc-50">{s.title}</p>
                          <p className="mt-2 text-sm leading-relaxed text-muted">{s.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

