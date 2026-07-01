import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Lock, Terminal } from 'lucide-react'
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
  const [expanded, setExpanded] = useState(null)

  return (
    <section id="projects" className="border-t border-ink/12 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-xs uppercase tracking-wider text-ink/45">Projects</p>
          <h2 className="mt-2 text-3xl font-bold text-ink sm:text-4xl tracking-tight">
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
              className="group flex h-full flex-col rounded-none border border-ink/12 bg-transparent transition-colors duration-300 hover:bg-ink/[0.02]"
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
                <h3 className="text-lg font-bold text-ink tracking-tight">{p.name}</h3>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-ink/45">{p.tagline}</p>
                <p className="mt-4 text-sm leading-relaxed text-ink/70">
                  {p.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {p.stack.map(s => (
                    <span
                      key={s}
                      className="font-mono text-[10px] uppercase tracking-wider text-ink/45 border border-ink/12 rounded-none px-2 py-0.5"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {p.planned && (
                  <div className="mt-4 flex items-start gap-2 rounded-none border border-dashed border-ink/15 bg-ink/[0.02] px-3 py-2">
                    <span className="mt-px shrink-0 rounded-none border border-ink/12 bg-transparent px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-ink/70">
                      Next
                    </span>
                    <p className="text-xs leading-relaxed text-ink/70 font-mono">
                      {p.planned}
                    </p>
                  </div>
                )}

                <div className="mt-8 flex items-center gap-4 border-t border-ink/12 pt-4">
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-ink/70 hover:text-ink transition-colors"
                    >
                      <ExternalLink size={12} />
                      Live site
                    </a>
                  )}
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-ink/70 hover:text-ink transition-colors"
                    >
                      <GithubIcon size={12} />
                      Source
                    </a>
                  )}
                  {p.spec && (
                    <button
                      onClick={() => setExpanded(expanded === p.name ? null : p.name)}
                      className="ml-auto inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-ink/70 hover:text-ink transition-colors cursor-pointer"
                    >
                      <Terminal size={12} />
                      {expanded === p.name ? 'Hide Spec' : 'Tech Spec'}
                    </button>
                  )}
                </div>

                <AnimatePresence initial={false}>
                  {expanded === p.name && p.spec && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden border-t border-ink/12 mt-4 pt-4"
                    >
                      <div className="border border-ink/12 bg-ink/[0.01] p-3 rounded-none font-mono text-[10px] leading-relaxed text-ink/80 select-none">
                        <div className="text-[9px] text-ink/45 border-b border-ink/12 pb-1.5 mb-2 font-bold uppercase tracking-wider">
                          ┌── System Flow ───────
                        </div>
                        <pre className="whitespace-pre overflow-x-auto leading-normal pb-2 font-mono scrollbar-none">
                          {p.spec.flow}
                        </pre>
                        
                        <div className="text-[9px] text-ink/45 border-y border-ink/12 py-1.5 my-2 font-bold uppercase tracking-wider">
                          ├── Data Model / Schema ──
                        </div>
                        <pre className="whitespace-pre overflow-x-auto leading-normal pb-2 font-mono scrollbar-none">
                          {p.spec.schema}
                        </pre>
                        
                        <div className="text-[9px] text-ink/45 border-y border-ink/12 py-1.5 my-2 font-bold uppercase tracking-wider">
                          └── Engineering Challenge ──
                        </div>
                        <p className="leading-normal pt-1 font-mono">
                          {p.spec.challenge}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
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
    <div className="relative border-b border-ink/12">
      <div className="flex items-center gap-2 border-b border-ink/12 bg-ink/[0.03] px-4 py-2.5">
        <span className="flex gap-1.5" aria-hidden>
          <span className="h-2 w-2 rounded-none border border-ink/35 bg-transparent" />
          <span className="h-2 w-2 rounded-none border border-ink/35 bg-transparent" />
          <span className="h-2 w-2 rounded-none border border-ink/35 bg-transparent" />
        </span>
        {project.live && (
          <span className="ml-2 inline-flex min-w-0 flex-1 items-center gap-1.5 truncate rounded-none bg-paper border border-ink/12 px-2 py-0.5 font-mono text-[10px] text-ink/55">
            <Lock size={9} className="shrink-0 text-ink/55" />
            <span className="truncate">{getHost(project.live)}</span>
          </span>
        )}
      </div>

      <div className="relative aspect-video overflow-hidden bg-paper">
        <img
          src={project.image}
          alt={`${project.name} screenshot`}
          loading="lazy"
          className="h-full w-full object-contain transition duration-500 group-hover:scale-[1.02]"
        />

        {project.live && (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-ink/0 opacity-0 transition duration-300 group-hover:bg-ink/[0.03] group-hover:opacity-100">
            <span className="inline-flex items-center gap-2 bg-ink text-paper border border-transparent px-4 py-2 rounded-none font-mono text-xs uppercase tracking-wider shadow-none">
              <ExternalLink size={12} />
              View live
            </span>
          </div>
        )}
      </div>
    </div>
  )
}
