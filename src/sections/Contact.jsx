import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Container } from '../components/Container'
import { SectionHeader } from '../components/SectionHeader'
import { Button } from '../components/Button'
import { site } from '../data/portfolio'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'
import { Reveal } from '../components/Reveal'

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value || '').trim())
}

export function Contact() {
  const [values, setValues] = useState({ name: '', email: '', message: '' })
  const [touched, setTouched] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | sent

  const errors = useMemo(() => {
    const e = {}
    if (!values.name.trim()) e.name = 'Please enter your name.'
    if (!values.email.trim()) e.email = 'Please enter your email.'
    else if (!isEmail(values.email)) e.email = 'Please enter a valid email.'
    if (!values.message.trim()) e.message = 'Please write a short message.'
    else if (values.message.trim().length < 10) e.message = 'Message should be at least 10 characters.'
    return e
  }, [values])

  const canSubmit = Object.keys(errors).length === 0 && status !== 'sending'

  const onSubmit = async (e) => {
    e.preventDefault()
    setTouched({ name: true, email: true, message: true })
    if (!canSubmit) return

    setStatus('sending')
    await new Promise((r) => setTimeout(r, 650))
    setStatus('sent')

    setValues({ name: '', email: '', message: '' })
    setTouched({})
    setTimeout(() => setStatus('idle'), 2500)
  }

  const fieldClass =
    'ring-focus w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-500/90 transition focus:border-fuchsia-400/40'

  const errorClass = 'mt-2 text-xs text-rose-300'

  return (
    <section id="contact" className="section">
      <Container>
        <SectionHeader
          eyebrow="Contact"
          title="Let’s connect"
          subtitle="Have an opportunity or a project in mind? Send a message — I’ll respond as soon as possible."
        />

        <div className="grid gap-4 lg:grid-cols-5">
          <Reveal
            as={motion.form}
            onSubmit={onSubmit}
            className="glass-strong rounded-3xl p-6 lg:col-span-3"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-xs font-semibold text-zinc-300/90">Name</label>
                <input
                  value={values.name}
                  onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
                  onBlur={() => setTouched((t) => ({ ...t, name: true }))}
                  className={fieldClass}
                  placeholder="Your name"
                  autoComplete="name"
                />
                {touched.name && errors.name ? <p className={errorClass}>{errors.name}</p> : null}
              </div>

              <div>
                <label className="text-xs font-semibold text-zinc-300/90">Email</label>
                <input
                  value={values.email}
                  onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
                  onBlur={() => setTouched((t) => ({ ...t, email: true }))}
                  className={fieldClass}
                  placeholder="you@example.com"
                  autoComplete="email"
                />
                {touched.email && errors.email ? (
                  <p className={errorClass}>{errors.email}</p>
                ) : null}
              </div>
            </div>

            <div className="mt-4">
              <label className="text-xs font-semibold text-zinc-300/90">Message</label>
              <textarea
                value={values.message}
                onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
                onBlur={() => setTouched((t) => ({ ...t, message: true }))}
                className={`${fieldClass} min-h-[140px] resize-y`}
                placeholder="Tell me about your project…"
              />
              {touched.message && errors.message ? (
                <p className={errorClass}>{errors.message}</p>
              ) : null}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button type="submit" disabled={!canSubmit} className="disabled:opacity-60">
                {status === 'sending' ? 'Sending…' : status === 'sent' ? 'Sent!' : 'Send Message'}
              </Button>
              <Button
                as="a"
                href={`mailto:${site.email}`}
                variant="secondary"
                className="text-zinc-100"
              >
                Email me
              </Button>
              <p className="text-xs text-zinc-400/90">{site.email}</p>
            </div>
          </Reveal>

          <Reveal delay={0.06} className="glass-strong rounded-3xl p-6 lg:col-span-2">
            <p className="text-sm font-semibold text-zinc-50">Social links</p>
            <p className="mt-2 text-sm text-muted">
              Prefer DMs? Connect with me here.
            </p>

            <div className="mt-5 grid gap-3">
              <a
                className="ring-focus glass glass-hover flex items-center justify-between rounded-2xl px-4 py-3 text-sm text-zinc-100"
                href={site.socials.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <span className="flex items-center gap-2">
                  <FaLinkedinIn /> LinkedIn
                </span>
                <span className="text-xs text-zinc-400">↗</span>
              </a>
              <a
                className="ring-focus glass glass-hover flex items-center justify-between rounded-2xl px-4 py-3 text-sm text-zinc-100"
                href={site.socials.github}
                target="_blank"
                rel="noreferrer"
              >
                <span className="flex items-center gap-2">
                  <FaGithub /> GitHub
                </span>
                <span className="text-xs text-zinc-400">↗</span>
              </a>
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-gradient-to-br from-fuchsia-500/10 via-violet-500/5 to-cyan-400/10 p-5">
              <p className="text-sm font-semibold text-zinc-50">Quick note</p>
              <p className="mt-2 text-sm text-muted">
                I’m currently focused on React + Node.js projects and improving DSA patterns.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

