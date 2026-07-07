import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Download, MapPin, Sparkles } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

const NAME = 'Benjamin Olaoluwa'

export default function Hero() {
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center px-6 pt-24 pb-16"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.12 }}
        className="relative mx-auto max-w-4xl w-full"
      >
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-none border border-ink/15 bg-transparent px-3 py-1 font-mono text-xs uppercase tracking-wider text-ink/70"
        >
          <Sparkles size={12} />
          Open to junior / mid full-stack roles
        </motion.div>

        <motion.h1
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold tracking-tightest text-ink sm:text-6xl md:text-7xl font-sans"
        >
          Hello, I'm{' '}
          <span
            aria-label={NAME}
            className="text-ink"
          >
            {NAME.split('').map((char, i) => (
              <motion.span
                key={i}
                aria-hidden
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 220,
                  damping: 18,
                  delay: reduceMotion ? 0 : 0.35 + i * 0.04,
                }}
                style={{ display: 'inline-block', whiteSpace: 'pre' }}
              >
                {char === ' ' ? ' ' : char}
              </motion.span>
            ))}
          </span>
          .
        </motion.h1>

        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="mt-4 text-xl text-ink/70 sm:text-2xl font-sans"
        >
          Junior Full-Stack Developer who ships production web apps end-to-end.
        </motion.p>

        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-ink/55 font-sans"
        >
          Currently leading{' '}
          <a
            href="https://ajani.ai"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-ink underline underline-offset-4 decoration-ink/35 hover:decoration-ink transition-colors"
          >
            Ajani
          </a>{' '}
          — a React + Express 5 + MongoDB booking marketplace for hotels, shortlets, and event halls in
          Oyo State. I care about clean architecture, accessible UX, performance, and shipping real
          features fast.
        </motion.p>

        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 bg-ink text-paper border border-transparent px-5 py-2.5 rounded-none font-mono text-xs uppercase tracking-wider transition-colors hover:bg-paper hover:text-ink hover:border-ink"
          >
            View Projects
            <ArrowRight size={14} className="transition group-hover:translate-x-1" />
          </Link>
          <a
            href="/Benjamin_Olaoluwa.pdf"
            download
            className="inline-flex items-center gap-2 border border-ink/15 text-ink/70 bg-transparent px-5 py-2.5 rounded-none font-mono text-xs uppercase tracking-wider transition-colors hover:bg-ink/[0.04] hover:text-ink"
          >
            <Download size={14} />
            Download CV
          </a>
        </motion.div>

        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="mt-10 flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-ink/45"
        >
          <MapPin size={12} />
          Ibadan, Oyo State, Nigeria
        </motion.div>
      </motion.div>
    </section>
  )
}
