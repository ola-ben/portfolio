import { motion } from 'framer-motion'
import { education } from '../data/education'

export default function Education() {
  return (
    <section id="education" className="border-t border-ink/12 px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-xs uppercase tracking-wider text-ink/45">Education</p>
          <h2 className="mt-2 text-3xl font-bold text-ink sm:text-4xl tracking-tight">
            How I learned the craft.
          </h2>
        </motion.div>

        <div className="mt-12 space-y-6">
          {education.map((item, i) => (
            <motion.div
              key={item.degree + item.school}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="border-b border-ink/12 last:border-b-0 pb-6 last:pb-0"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-base font-bold text-ink tracking-tight">
                  {item.degree}
                </h3>
                <span className="font-mono text-xs uppercase tracking-wider text-ink/45">{item.period}</span>
              </div>
              <p className="mt-1 font-mono text-xs uppercase tracking-wider text-ink/70">
                {item.school}{item.location && ` — ${item.location}`}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
