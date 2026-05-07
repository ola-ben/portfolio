import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import { experience } from '../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="bg-slate-50 px-6 py-24 dark:bg-slate-900/50">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-medium uppercase tracking-widest text-indigo-500">Experience</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl dark:text-slate-50">
            Where I've worked.
          </h2>
        </motion.div>

        <div className="mt-12 space-y-6">
          {experience.map((job, i) => (
            <motion.div
              key={job.role + job.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-500/10 text-indigo-500">
                  <Briefcase size={18} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50">
                      {job.role}
                    </h3>
                    <span className="text-sm text-slate-500 dark:text-slate-400">{job.period}</span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-indigo-500">{job.company}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{job.location}</p>
                  <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                    {job.bullets.map((b, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-indigo-500" />
                        <span className="leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
