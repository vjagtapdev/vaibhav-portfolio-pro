import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import { FaGithub } from 'react-icons/fa6'
import { Container } from '../components/Container'
import { SectionHeader } from '../components/SectionHeader'
import { projects } from '../data/portfolio'
import { Button } from '../components/Button'
import {
  useScrollReveal,
  headerVariants,
  staggerContainer,
  fadeUpItem,
  buttonMotion,
} from '../utils/animations'

function TechPill({ children }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-zinc-200">
      {children}
    </span>
  )
}

function ProjectCard({ p, isInView }) {
  return (
    <motion.article
      variants={fadeUpItem}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      whileHover={{
        y: -6,
        scale: 1.01,
        transition: { duration: 0.2 },
      }}
      className="group glass-strong rounded-3xl overflow-hidden cursor-default"
    >
      <div className="overflow-hidden">
        <motion.img
          src={p.image}
          alt={p.title}
          className="w-full h-56 object-cover"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.4 }}
        />
      </div>

      <div className="p-6">
        <h3 className="text-lg font-semibold text-zinc-50">{p.title}</h3>
        <p className="mt-2 text-sm text-muted">{p.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {p.tech.map((t) => (
            <TechPill key={t}>{t}</TechPill>
          ))}
        </div>

        <div className="mt-5 flex gap-3">
          <motion.div {...buttonMotion}>
            <Button as="a" href={p.links.live} target="_blank">
              Live <FiArrowUpRight />
            </Button>
          </motion.div>

          <motion.div {...buttonMotion}>
            <Button as="a" href={p.links.github} target="_blank" variant="secondary">
              GitHub <FaGithub />
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.article>
  )
}

export function Projects() {
  const { ref, isInView } = useScrollReveal()

  return (
    <section id="projects" className="section" ref={ref}>
      <Container>

        {/* Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <SectionHeader
            eyebrow="Projects"
            title="Selected projects"
            subtitle="A curated set of projects showcasing clean UI and real-world development."
          />
        </motion.div>

        {/* Grid */}
        <motion.div
          className="mt-8 grid gap-5 md:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {projects.map((p) => (
            <ProjectCard key={p.title} p={p} isInView={isInView} />
          ))}
        </motion.div>

      </Container>
    </section>
  )
}