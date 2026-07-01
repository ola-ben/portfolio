import { motion } from 'framer-motion'
import { experience } from '../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="border-t border-ink/12 px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-xs uppercase tracking-wider text-ink/45">Experience</p>
          <h2 className="mt-2 text-3xl font-bold text-ink sm:text-4xl tracking-tight">
            Where I've worked.
          </h2>
        </motion.div>

        <div className="mt-12 space-y-8">
          {experience.map((job, i) => (
            <motion.div
              key={job.role + job.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border-b border-ink/12 last:border-b-0 pb-8 last:pb-0"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-bold text-ink tracking-tight">
                  {job.role}
                </h3>
                <span className="font-mono text-xs uppercase tracking-wider text-ink/45">{job.period}</span>
              </div>
              <p className="mt-1 font-mono text-xs uppercase tracking-wider text-ink/70">
                {job.company} &mdash; {job.location}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-ink/70">
                {job.bullets.map((b, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-ink" />
                    <span className="leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
