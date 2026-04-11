import { motion } from 'framer-motion'
import { Container } from '../components/Container'
import { SectionHeader } from '../components/SectionHeader'
import { Reveal } from '../components/Reveal'
import { Button } from '../components/Button'
import { site } from '../data/portfolio'

function StatCard({ label, value, hint }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className="glass-strong glass-hover rounded-3xl p-6"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-300/80">
        {label}
      </p>
      <p className="mt-3 text-3xl font-semibold text-zinc-50">{value}</p>
      {hint ? <p className="mt-2 text-sm text-muted">{hint}</p> : null}
    </motion.div>
  )
}

export function Highlights() {
  const u = site.githubUsername
  const statsUrl = `https://github-readme-stats.vercel.app/api?username=${encodeURIComponent(
    u
  )}&show_icons=true&hide_title=true&hide_rank=false&theme=transparent&hide_border=true`
  const topLangsUrl = `https://github-readme-stats.vercel.app/api/top-langs/?username=${encodeURIComponent(
    u
  )}&layout=compact&theme=transparent&hide_border=true`

  return (
    <section id="highlights" className="section">
      <Container>
        <SectionHeader
          eyebrow="Proof of Work"
          title="Highlights that build trust"
          subtitle="A quick snapshot of consistency, shipping, and practice. Replace these numbers and links with your real metrics anytime."
        />

        <div className="grid gap-6 lg:grid-cols-5 lg:items-start">
          <div className="grid gap-4 lg:col-span-2">
            <Reveal>
              <StatCard label="Projects shipped" value="4+" hint="Responsive UI + real app flows" />
            </Reveal>
            <Reveal delay={0.05}>
              <StatCard
                label="Problem solving"
                value="100+"
                hint="LeetCode / HackerRank practice"
              />
            </Reveal>
            <Reveal delay={0.1}>
              <StatCard label="Focus" value="Quality" hint="Accessibility + performance basics" />
            </Reveal>
          </div>

          <div className="grid gap-4 lg:col-span-3">
            <Reveal className="glass-strong overflow-hidden rounded-3xl p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-sm font-semibold text-zinc-50">GitHub snapshot</p>
                <div className="flex flex-wrap items-center gap-2">
                  <a
                    className="badge glass-hover"
                    href={`https://github.com/${u}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    @{u}
                  </a>
                  <Button
                    as="a"
                    href={site.resumeUrl}
                    target="_blank"
                    rel="noreferrer"
                    variant="secondary"
                  >
                    Download Resume
                  </Button>
                </div>
              </div>

              <p className="mt-3 text-sm text-muted">
                These cards are generated from your GitHub username. Update{' '}
                <span className="font-semibold text-zinc-100/90">`site.githubUsername`</span> in{' '}
                <span className="font-semibold text-zinc-100/90">`src/data/portfolio.js`</span>.
              </p>

              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <img
                    src={statsUrl}
                    alt="GitHub stats card"
                    loading="lazy"
                    className="h-32 w-full object-contain"
                  />
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <img
                    src={topLangsUrl}
                    alt="Top languages card"
                    loading="lazy"
                    className="h-32 w-full object-contain"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  )
}

