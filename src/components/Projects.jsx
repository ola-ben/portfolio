import { motion } from 'framer-motion'
import { ExternalLink, Lock } from 'lucide-react'
import { projects } from '../data/projects'
import GithubIcon from './GithubIcon'

function getHost(url) {
  try {
    return new URL(url).host.replace(/^www\./, '')
  } catch {
    return url
  }
}

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

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-shadow duration-300 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
            >
              {p.live ? (
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${p.name} live site`}
                  className="relative block"
                >
                  <ProjectImage project={p} />
                </a>
              ) : (
                <ProjectImage project={p} />
              )}

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

function ProjectImage({ project }) {
  return (
    <div className="relative">
      <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-100 px-4 py-2.5 dark:border-slate-800 dark:bg-slate-800/60">
        <span className="flex gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400/90" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/90" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/90" />
        </span>
        {project.live && (
          <span className="ml-2 inline-flex min-w-0 flex-1 items-center gap-1.5 truncate rounded-md bg-white px-2.5 py-1 font-mono text-[11px] text-slate-500 ring-1 ring-slate-200 dark:bg-slate-900 dark:text-slate-400 dark:ring-slate-700">
            <Lock size={10} className="shrink-0 text-emerald-500" />
            <span className="truncate">{getHost(project.live)}</span>
          </span>
        )}
      </div>

      <div className="relative aspect-video overflow-hidden bg-slate-50 dark:bg-slate-950">
        <img
          src={project.image}
          alt={`${project.name} screenshot`}
          loading="lazy"
          className="h-full w-full object-contain transition duration-500 group-hover:scale-[1.03]"
        />

        {project.live && (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-slate-950/0 opacity-0 transition duration-300 group-hover:bg-slate-950/40 group-hover:opacity-100">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-900 shadow-lg">
              <ExternalLink size={14} />
              View live
            </span>
          </div>
        )}
      </div>
    </div>
  )
}
