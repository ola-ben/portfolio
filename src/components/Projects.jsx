import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { projects } from '../data/projects'
import GithubIcon from './GithubIcon'

export default function Projects() {
  return (
    <section id="projects" className="bg-slate-50 px-6 py-24 dark:bg-slate-900/50">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-medium uppercase tracking-widest text-indigo-500">Projects</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl dark:text-slate-50">
            Things I've shipped to production.
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="aspect-video overflow-hidden bg-linear-to-br from-indigo-100 to-pink-100 dark:from-indigo-900/30 dark:to-pink-900/30">
                <img
                  src={p.image}
                  alt={`${p.name} screenshot`}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50">{p.name}</h3>
                <p className="mt-1 text-sm font-medium text-indigo-500">{p.tagline}</p>
                <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {p.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.stack.map(s => (
                    <span
                      key={s}
                      className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-4 border-t border-slate-100 pt-4 dark:border-slate-800">
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-900 transition hover:text-indigo-500 dark:text-slate-100"
                    >
                      <ExternalLink size={14} />
                      Live site
                    </a>
                  )}
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-900 transition hover:text-indigo-500 dark:text-slate-100"
                    >
                      <GithubIcon size={14} />
                      Source
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
