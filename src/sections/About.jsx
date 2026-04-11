import { motion } from 'framer-motion'
import { SectionHeader } from '../components/SectionHeader'
import { Container } from '../components/Container'
import {
  useScrollReveal,
  headerVariants,
  staggerContainer,
  fadeUpItem,
  cardHover,
} from '../utils/animations'

const traitItems = [
  { k: 'UI/UX', v: 'Clean spacing, readable typography, consistent components' },
  { k: 'Engineering', v: 'Reusable architecture, predictable state, API-first thinking' },
  { k: 'Quality', v: 'Accessibility, responsiveness, and performance basics' },
  { k: 'Growth', v: 'Learning mindset + consistent DSA practice' },
]

const sideCards = [
  {
    title: 'Problem-solving',
    desc: 'I think in patterns, edge cases, and trade-offs — then ship a clean solution.',
  },
  {
    title: 'Modern frontend',
    desc: 'React + Tailwind with a component-driven approach and smooth motion.',
  },
  {
    title: 'Backend basics',
    desc: 'Node + Express + MongoDB, REST APIs, and deployment-ready builds.',
  },
]

export function About() {
  const { ref, isInView } = useScrollReveal()

  return (
    <section id="about" className="section" ref={ref}>
      <Container>

        {/* Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <SectionHeader
            eyebrow="About"
            title="Professional summary"
            subtitle="Fresher full-stack developer who ships clean UI and reliable features. Focused on fundamentals, consistency, and a polished user experience."
          />
        </motion.div>

        {/* Layout */}
        <div className="mt-10 grid gap-6 lg:grid-cols-5">

          {/* Left */}
          <motion.div
            variants={fadeUpItem}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            transition={{ delay: 0.1 }}
            className="glass-strong rounded-3xl p-6 sm:p-7 lg:col-span-3"
          >
            <p className="text-sm font-semibold text-zinc-50">How I work</p>

            <p className="mt-3 text-sm leading-relaxed text-muted">
              I clarify requirements, design the UI hierarchy, then build in small milestones.
              I care about{' '}
              <span className="font-semibold text-zinc-100">spacing</span>,{' '}
              <span className="font-semibold text-zinc-100">typography</span>, and{' '}
              <span className="font-semibold text-zinc-100">accessibility</span>.
            </p>

            {/* Traits */}
            <motion.div
              className="mt-6 grid gap-3 sm:grid-cols-2"
              variants={staggerContainer}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
            >
              {traitItems.map((item) => (
                <motion.div
                  key={item.k}
                  variants={fadeUpItem}
                  whileHover="hover"
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                  className="glass rounded-2xl p-4 cursor-default"
                >
                  <p className="badge badge-accent">{item.k}</p>
                  <p className="mt-2 text-sm text-muted">{item.v}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right */}
          <motion.div
            className="flex flex-col gap-4 lg:col-span-2"
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {sideCards.map((card) => (
              <motion.div
                key={card.title}
                variants={fadeUpItem}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                className="glass rounded-3xl p-6"
              >
                <p className="text-sm font-semibold text-zinc-50">
                  {card.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </Container>
    </section>
  )
}