import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { education } from '../data/education'

export default function Education() {
  return (
    <section id="education" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-medium uppercase tracking-widest text-indigo-500">Education</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl dark:text-slate-50">
            How I learned the craft.
          </h2>
        </motion.div>

        <div className="mt-12 space-y-4">
          {education.map((item, i) => (
            <motion.div
              key={item.degree + item.school}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="flex items-center gap-2 text-base font-bold text-slate-900 dark:text-slate-50">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-indigo-500/10 text-indigo-500">
                    <GraduationCap size={14} />
                  </span>
                  {item.degree}
                </h3>
                <span className="text-sm text-slate-500 dark:text-slate-400">{item.period}</span>
              </div>
              <p className="mt-1 text-sm font-medium text-indigo-500">{item.school}</p>
              {item.location && (
                <p className="text-xs text-slate-500 dark:text-slate-400">{item.location}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
