import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Navbar } from './components/Navbar'
import { ScrollProgress } from './components/ScrollProgress'
import { Loader } from './components/Loader'
import { CursorAura } from './components/CursorAura'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Approach } from './sections/Approach'
import { Highlights } from './sections/Highlights'
import { Skills } from './sections/Skills'
import { Projects } from './sections/Projects'
import { Experience } from './sections/Experience'
import { Contact } from './sections/Contact'
import { Footer } from './components/Footer'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    document.documentElement.classList.add('dark')
    const t = setTimeout(() => setLoading(false), 800)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="min-h-screen">
      <a
        href="#home"
        className="ring-focus sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[90] focus:rounded-xl focus:bg-zinc-950 focus:px-4 focus:py-2 focus:text-sm focus:text-zinc-100"
      >
        Skip to content
      </a>

      <ScrollProgress />
      <Navbar />
      <CursorAura />

      <main className="relative z-10">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[900px] w-[1200px] -translate-x-1/2 bg-[radial-gradient(circle_at_center,rgba(217,70,239,0.14),transparent_55%)]" />
          <div className="absolute left-0 top-[40%] h-[800px] w-[900px] bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.08),transparent_55%)]" />
        </div>

        <Hero />
        <About />
        <Approach />
        <Highlights />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />

      <AnimatePresence>{loading ? <Loader /> : null}</AnimatePresence>
    </div>
  )
}
