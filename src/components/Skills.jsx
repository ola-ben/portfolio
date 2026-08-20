import { motion } from 'framer-motion'
import { useIsDesktop } from '../hooks/useIsDesktop'
import { skills } from '../data/skills'

export default function Skills() {
  const isDesktop = useIsDesktop()

  return (
    <section id="skills" className="border-t border-ink/12 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={isDesktop ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
          whileInView={isDesktop ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-100px' }}
          transition={{ duration: isDesktop ? 0.5 : 0 }}
        >
          <p className="font-mono text-xs uppercase tracking-wider text-ink/45">Skills</p>
          <h2 className="mt-2 text-3xl font-bold text-ink sm:text-4xl tracking-tight">
            The tools I work with.
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={isDesktop ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
              whileInView={isDesktop ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              viewport={{ once: false, margin: '-50px' }}
              transition={{ duration: isDesktop ? 0.5 : 0, delay: isDesktop ? i * 0.08 : 0 }}
              className="rounded-none border border-ink/12 bg-transparent p-6"
            >
              <h3 className="text-base font-bold text-ink tracking-tight">
                {group.category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map(item => (
                  <span
                    key={item}
                    className="font-mono text-xs uppercase tracking-wider text-ink/70 border border-ink/12 rounded-none px-2.5 py-1 bg-transparent hover:bg-ink/[0.04] transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
