import { Container } from './Container'
import { site } from '../data/portfolio'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'
import { scrollToId } from '../utils/scroll'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-white/10 bg-zinc-950/40 py-12">
      <Container>
        <div className="glass-strong rounded-3xl p-6 sm:p-7">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-zinc-100">{site.name}</p>
              <p className="mt-2 max-w-xl text-sm text-muted">
                Built with React + Vite + Tailwind — designed for clean typography, modern motion,
                and mobile-first responsiveness.
              </p>
              <p className="mt-3 text-xs text-zinc-400/90">
                © {year}. All rights reserved.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <a
                className="ring-focus glass glass-hover inline-flex h-10 w-10 items-center justify-center rounded-xl text-zinc-100"
                href={site.socials.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                className="ring-focus glass glass-hover inline-flex h-10 w-10 items-center justify-center rounded-xl text-zinc-100"
                href={site.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <button
                type="button"
                onClick={() => scrollToId('home')}
                className="ring-focus glass glass-hover inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium text-zinc-100"
              >
                Back to top
              </button>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}

