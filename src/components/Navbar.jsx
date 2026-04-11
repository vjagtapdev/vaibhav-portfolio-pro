import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import { navLinks, site } from '../data/portfolio'
import { useActiveSection } from '../hooks/useActiveSection'
import { scrollToId } from '../utils/scroll'
import { Button } from './Button'
import { Container } from './Container'

export function Navbar() {
  const ids = navLinks.map((l) => l.id)
  const active = useActiveSection(ids)
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const onNav = (id) => {
    setOpen(false)
    scrollToId(id)
  }

  return (
    <>
      <div className="fixed left-0 top-0 z-[70] w-full">
        <div
          className={`border-b transition ${
            scrolled
              ? 'border-white/10 bg-zinc-950/70 backdrop-blur-2xl'
              : 'border-transparent bg-transparent'
          }`}
        >
          <Container className="flex h-16 items-center justify-between">
            <button
              type="button"
              onClick={() => onNav('home')}
              className="ring-focus group inline-flex items-center gap-2 rounded-2xl px-2 py-1"
              aria-label="Go to home"
            >
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-fuchsia-400/90 via-violet-400/75 to-cyan-300/75 text-zinc-950 shadow-soft">
                V
              </span>
              <div className="hidden sm:block">
                <p className="text-sm font-semibold tracking-tight text-zinc-100">
                  {site.name}
                </p>
                {/* <p className="text-xs text-zinc-400/90">Portfolio</p> */}
              </div>
            </button>

            <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
              {navLinks.map((l) => {
                const isActive = active === l.id
                return (
                  <button
                    key={l.id}
                    type="button"
                    onClick={() => onNav(l.id)}
                    className={`ring-focus relative rounded-xl px-3 py-2 text-sm font-medium transition ${
                      isActive
                        ? 'text-zinc-50'
                        : 'text-zinc-300/90 hover:bg-white/5 hover:text-zinc-100'
                    }`}
                  >
                    {l.label}
                    {isActive ? (
                      <motion.span
                        layoutId="navActive"
                        className="absolute inset-x-2 -bottom-[2px] h-[2px] rounded-full bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-300"
                      />
                    ) : null}
                  </button>
                )
              })}
            </nav>

            <div className="flex items-center gap-2">
              <Button
                as="a"
                href="#contact"
                variant="secondary"
                className="hidden md:inline-flex"
                onClick={(e) => {
                  e.preventDefault()
                  onNav('contact')
                }}
              >
                Contact
              </Button>

              <button
                type="button"
                className="ring-focus inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-100 transition hover:bg-white/10 md:hidden"
                onClick={() => setOpen((v) => !v)}
                aria-label={open ? 'Close menu' : 'Open menu'}
                aria-expanded={open}
              >
                {open ? <FiX /> : <FiMenu />}
              </button>
            </div>
          </Container>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[65] bg-black/55 backdrop-blur-sm md:hidden"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {open ? (
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 260, damping: 28 }}
            className="fixed right-0 top-0 z-[75] h-full w-[86%] max-w-sm border-l border-white/10 bg-zinc-950/85 p-6 backdrop-blur-2xl md:hidden"
            aria-label="Mobile menu"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-zinc-100">Menu</p>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="ring-focus inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-100 transition hover:bg-white/10"
                aria-label="Close menu"
              >
                <FiX />
              </button>
            </div>

            <div className="mt-6 grid gap-2">
              {navLinks.map((l, idx) => (
                <motion.button
                  key={l.id}
                  type="button"
                  onClick={() => onNav(l.id)}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: 0.03 * idx }}
                  className={`ring-focus flex items-center justify-between rounded-2xl border px-4 py-3 text-left transition ${
                    active === l.id
                      ? 'border-fuchsia-400/30 bg-fuchsia-400/10 text-zinc-50'
                      : 'border-white/10 bg-white/5 text-zinc-200 hover:bg-white/10'
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span
                      className={`h-2 w-2 rounded-full ${
                        active === l.id
                          ? 'bg-gradient-to-r from-fuchsia-400 to-cyan-300'
                          : 'bg-white/15'
                      }`}
                    />
                    <span className="text-sm font-medium">{l.label}</span>
                  </span>
                  <span className="text-xs text-zinc-400">↵</span>
                </motion.button>
              ))}
            </div>

            <div className="mt-6">
              <Button
                as="a"
                href="#projects"
                className="w-full"
                onClick={(e) => {
                  e.preventDefault()
                  onNav('projects')
                }}
              >
                View Projects
              </Button>
              <Button
                as="a"
                href="#contact"
                variant="secondary"
                className="mt-3 w-full"
                onClick={(e) => {
                  e.preventDefault()
                  onNav('contact')
                }}
              >
                Contact
              </Button>
            </div>
          </motion.aside>
        ) : null}
      </AnimatePresence>
    </>
  )
}

