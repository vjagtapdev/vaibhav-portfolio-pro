import { motion } from 'framer-motion'
import { Container } from '../components/Container'
import { SectionHeader } from '../components/SectionHeader'
import { timeline, site } from '../data/portfolio'
import { FaCode } from 'react-icons/fa6'
import { SiLeetcode } from 'react-icons/si'
import { Reveal } from '../components/Reveal'

function TimelineItem({ item, idx }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, delay: Math.min(idx * 0.06, 0.18) }}
      className="relative pl-10"
    >
      <div className="absolute left-[6px] top-0 h-full w-px bg-gradient-to-b from-white/20 via-white/10 to-transparent" />
      <div className="absolute left-0 top-2 grid h-4 w-4 place-items-center rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-300">
        <span className="h-2 w-2 rounded-full bg-zinc-950" />
      </div>

      <div className="glass-strong glass-hover rounded-3xl p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-base font-semibold text-zinc-50">{item.title}</p>
            <p className="mt-1 text-xs font-medium text-zinc-400/90">{item.period}</p>
          </div>
          <span className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/5 text-zinc-100">
            <FaCode />
          </span>
        </div>

        <ul className="mt-4 grid gap-2">
          {item.points.map((p) => (
            <li key={p} className="flex gap-3 text-sm text-muted">
              <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-300" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

export function Experience() {
  return (
    <section id="experience" className="section">
      <Container>
        <SectionHeader
          eyebrow="Experience & Achievements"
          title="Experience timeline"
          subtitle="A snapshot of my learning, projects, and problem-solving progress."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-6">
            {timeline.slice(0, 2).map((item, idx) => (
              <TimelineItem key={item.title} item={item} idx={idx} />
            ))}
          </div>
          <div className="space-y-6">
            {timeline.slice(2).map((item, idx) => (
              <TimelineItem key={item.title} item={item} idx={idx + 2} />
            ))}
          </div>
        </div>

        <Reveal delay={0.1} className="glass-strong mt-8 rounded-3xl p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-base font-semibold text-zinc-50">Coding profiles</p>
              <p className="mt-2 text-sm text-muted">
                Regular practice to improve patterns, speed, and accuracy.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={site.socials.leetcode}
                target="_blank"
                rel="noreferrer"
                className="ring-focus glass glass-hover inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm text-zinc-100"
              >
                <SiLeetcode className="text-lg" />
                LeetCode
              </a>
              <a
                href="https://www.hackerrank.com/"
                target="_blank"
                rel="noreferrer"
                className="ring-focus glass glass-hover inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm text-zinc-100"
              >
                <FaCode className="text-lg" />
                HackerRank
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

