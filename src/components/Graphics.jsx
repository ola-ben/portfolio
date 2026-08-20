import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Eye, X, Palette, Compass } from 'lucide-react'
import { useIsDesktop } from '../hooks/useIsDesktop'
import { graphics } from '../data/graphics'

export default function Graphics() {
  const [filter, setFilter] = useState('All')
  const [selectedItem, setSelectedItem] = useState(null)
  const isDesktop = useIsDesktop()

  const filteredItems = filter === 'All'
    ? graphics
    : graphics.filter(item => item.category === filter)

  return (
    <section id="design" className="border-t border-ink/12 px-6 py-24 bg-transparent">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={isDesktop ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
          whileInView={isDesktop ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-100px' }}
          transition={{ duration: isDesktop ? 0.5 : 0 }}
        >
          <p className="font-mono text-xs uppercase tracking-wider text-ink/45">Creative & Design</p>
          <h2 className="mt-2 text-3xl font-bold text-ink sm:text-4xl tracking-tight">
            Brand identities & visual layouts.
          </h2>
        </motion.div>

        {/* Filter Pills */}
        <div className="mt-10 flex flex-wrap gap-2">
          {['All', 'Brand Identity', 'Social Media'].map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`font-mono text-xs uppercase tracking-wider px-3.5 py-1.5 border rounded-none transition-colors duration-200 cursor-pointer ${filter === cat
                  ? 'border-ink bg-ink text-paper font-medium'
                  : 'border-ink/12 bg-transparent text-ink/70 hover:border-ink/45 hover:text-ink'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, i) => (
              <motion.article
                key={item.title}
                layout
                initial={isDesktop ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
                whileInView={isDesktop ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                viewport={{ once: false, margin: '-50px' }}
                transition={{ duration: isDesktop ? 0.4 : 0, delay: isDesktop ? i * 0.1 : 0 }}
                className="group flex h-full flex-col rounded-none border border-ink/12 bg-transparent transition-colors duration-300 hover:bg-ink/[0.02]"
              >
                {/* Image Container with Hover Overlay */}
                <div
                  onClick={() => setSelectedItem(item)}
                  className="relative aspect-video overflow-hidden border-b border-ink/12 bg-paper cursor-pointer"
                >
                  <div className="flex items-center gap-2 border-b border-ink/12 bg-ink/[0.03] px-4 py-2.5">
                    <span className="flex gap-1.5" aria-hidden>
                      <span className="h-2 w-2 rounded-none border border-ink/35 bg-transparent" />
                      <span className="h-2 w-2 rounded-none border border-ink/35 bg-transparent" />
                      <span className="h-2 w-2 rounded-none border border-ink/35 bg-transparent" />
                    </span>
                    <span className="ml-2 inline-flex items-center gap-1.5 rounded-none bg-paper border border-ink/12 px-2 py-0.5 font-mono text-[9px] text-ink/55 uppercase tracking-wider">
                      <Palette size={9} className="text-ink/55" />
                      {item.category}
                    </span>
                  </div>

                  <div className="relative w-full h-[calc(100%-38px)] overflow-hidden">
                    <img
                      src={item.image}
                      alt={`${item.title} preview`}
                      loading="lazy"
                      className={`h-full w-full transition duration-500 group-hover:scale-[1.02] ${item.title.toLowerCase().includes('logo') ? 'object-contain p-6' : 'object-cover'
                        }`}
                    />

                    {/* Hover Zoom / View Spec Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-ink/0 opacity-0 transition duration-300 group-hover:bg-ink/[0.04] group-hover:opacity-100">
                      <span className="inline-flex items-center gap-2 bg-ink text-paper border border-transparent px-4 py-2 rounded-none font-mono text-xs uppercase tracking-wider shadow-none">
                        <Eye size={12} />
                        View Work
                      </span>
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-bold text-ink tracking-tight">{item.title}</h3>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-ink/45">{item.tagline}</p>
                  <p className="mt-4 text-sm leading-relaxed text-ink/70">
                    {item.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {item.tools.map(tool => (
                      <span
                        key={tool}
                        className="font-mono text-[10px] uppercase tracking-wider text-ink/45 border border-ink/12 rounded-none px-2 py-0.5"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 border-t border-ink/12 pt-4">
                    <button
                      onClick={() => setSelectedItem(item)}
                      className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-ink/70 hover:text-ink transition-colors cursor-pointer"
                    >
                      <Eye size={12} />
                      Detail Case Study
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* Lightbox / Modal */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-paper/95 p-0 md:p-8 backdrop-blur-md"
              onClick={() => setSelectedItem(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full h-full md:h-auto max-w-none md:max-w-5xl rounded-none border-0 md:border border-ink/12 bg-paper shadow-none md:shadow-2xl flex flex-col md:flex-row overflow-y-auto md:overflow-hidden max-h-full md:max-h-[80vh]"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedItem(null)}
                  className="fixed md:absolute right-4 top-4 z-50 md:z-10 flex h-8 w-8 items-center justify-center border border-ink/15 text-ink bg-paper hover:bg-ink/[0.04] transition-colors cursor-pointer"
                  aria-label="Close details"
                >
                  <X size={16} />
                </button>

                {/* Left Side: Large Image */}
                <div className="w-full md:w-3/5 bg-ink/[0.01] border-b md:border-b-0 md:border-r border-ink/12 flex items-center justify-center p-6 min-h-[300px] md:min-h-0 md:overflow-y-auto">
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    className="max-w-full max-h-[40vh] md:max-h-[70vh] object-contain border border-ink/12"
                  />
                </div>

                {/* Right Side: Case Study Metadata */}
                <div className="w-full md:w-2/5 p-6 md:p-8 md:overflow-y-auto flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-ink/45 border border-ink/12 rounded-none px-2 py-0.5">
                      {selectedItem.category}
                    </span>
                    <h2 className="mt-3 text-2xl font-bold text-ink tracking-tight">
                      {selectedItem.title}
                    </h2>
                    <p className="mt-1 font-mono text-xs uppercase tracking-wider text-ink/45">
                      {selectedItem.tagline}
                    </p>

                    <div className="mt-6 border-t border-ink/12 pt-6">
                      <h4 className="font-mono text-xs uppercase tracking-wider text-ink/45">Overview</h4>
                      <p className="mt-2 text-sm leading-relaxed text-ink/75">
                        {selectedItem.description}
                      </p>
                    </div>

                    {/* Challenges and Solutions */}
                    {selectedItem.details && (
                      <div className="mt-6 border-t border-ink/12 pt-6 space-y-4">
                        <div>
                          <div className="flex items-center gap-1.5 text-ink/45 font-bold uppercase font-mono text-[10px]">
                            <Compass size={11} />
                            Creative Challenge
                          </div>
                          <p className="mt-1 text-xs font-mono leading-relaxed text-ink/70">
                            {selectedItem.details.challenge}
                          </p>
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5 text-ink/45 font-bold uppercase font-mono text-[10px]">
                            <Palette size={11} />
                            Design Solution
                          </div>
                          <p className="mt-1 text-xs font-mono leading-relaxed text-ink/70">
                            {selectedItem.details.solution}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="mt-8 border-t border-ink/12 pt-6">
                    <h4 className="font-mono text-xs uppercase tracking-wider text-ink/45 mb-2.5">Tools & Disciplines</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedItem.tools.map(tool => (
                        <span
                          key={tool}
                          className="font-mono text-[10px] uppercase tracking-wider text-ink border border-ink/15 bg-ink/[0.02] rounded-none px-2.5 py-1"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
