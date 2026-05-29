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
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-indigo-300/30 blur-3xl dark:bg-indigo-600/20" />
        <div className="absolute top-1/2 -right-32 h-96 w-96 rounded-full bg-pink-300/30 blur-3xl dark:bg-pink-600/20" />
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.12 }}
        className="relative mx-auto max-w-4xl"
      >
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/60 px-3 py-1 text-sm text-slate-600 backdrop-blur dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-300"
        >
          <Sparkles size={14} className="text-indigo-500" />
          Open to junior / mid full-stack roles
        </motion.div>

        <motion.h1
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl md:text-7xl dark:text-slate-50"
        >
          Hello, I'm{' '}
          <span
            aria-label={NAME}
            className="bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
          >
            {NAME.split('').map((char, i) => (
              <motion.span
                key={i}
                aria-hidden
                initial={reduceMotion ? false : { opacity: 0, y: 40, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
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
          className="mt-4 text-xl text-slate-600 sm:text-2xl dark:text-slate-400"
        >
          Junior Full-Stack Developer who ships production web apps end-to-end.
        </motion.p>

        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-slate-500 dark:text-slate-400"
        >
          Currently leading{' '}
          <a
            href="https://ajani.ai"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-indigo-500 hover:underline"
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
            className="group inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
          >
            View Projects
            <ArrowRight size={16} className="transition group-hover:translate-x-1" />
          </Link>
          <a
            href="/Benjamin-Olaoluwa-CV.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-900"
          >
            <Download size={16} />
            Download CV
          </a>
        </motion.div>

        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="mt-10 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400"
        >
          <MapPin size={14} />
          Ibadan, Oyo State, Nigeria
        </motion.div>
      </motion.div>
    </section>
  )
}
