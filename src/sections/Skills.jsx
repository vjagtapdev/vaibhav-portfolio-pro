import { motion } from 'framer-motion'
import { Container } from '../components/Container'
import { SectionHeader } from '../components/SectionHeader'
import { skills } from '../data/portfolio'
import { Icon } from '../components/Icon'
import {
  useScrollReveal,
  headerVariants,
  staggerContainer,
  fadeUpItem,
} from '../utils/animations'

function SkillCard({ label, icon }) {
  return (
    <motion.div
      variants={fadeUpItem}
      initial="hidden"
      animate="visible"
      whileHover={{
        y: -4,
        scale: 1.01,
        transition: { duration: 0.18 },
      }}
      className="glass-strong rounded-2xl px-4 py-3 flex items-center gap-3"
    >
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 border border-white/10 text-zinc-100">
        <Icon name={icon} />
      </span>

      <div>
        <p className="text-sm font-semibold text-zinc-50">{label}</p>
        <p className="text-xs text-zinc-400">Hands-on</p>
      </div>
    </motion.div>
  )
}

function SkillGroup({ title, items }) {
  return (
    <motion.div variants={fadeUpItem} className="glass-strong rounded-3xl p-6">
      <p className="mb-4 text-sm font-semibold text-zinc-50">{title}</p>

      <motion.div
        className="grid gap-3 sm:grid-cols-2"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {items.map((s) => (
          <SkillCard key={s.label} label={s.label} icon={s.icon} />
        ))}
      </motion.div>
    </motion.div>
  )
}

export function Skills() {
  const { ref, isInView } = useScrollReveal()

  return (
    <section id="skills" className="section" ref={ref}>
      <Container>

        {/* Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <SectionHeader
            eyebrow="Skills"
            title="Technologies & tools"
            subtitle="Technologies I use to build modern web applications."
          />
        </motion.div>

        {/* Grid */}
        <motion.div
          className="mt-8 grid gap-6 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <SkillGroup title="Frontend" items={skills.frontend} />
          <SkillGroup title="Backend" items={skills.backend} />
          <SkillGroup title="Tools" items={skills.tools} />
        </motion.div>

      </Container>
    </section>
  )
}