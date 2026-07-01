import { motion } from 'framer-motion'
import profileImage from '../assets/profile2.jpeg'

export default function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-xs uppercase tracking-wider text-ink/45">About</p>
          <h2 className="mt-2 text-3xl font-bold text-ink sm:text-4xl tracking-tight">
            Building the web, one shipped feature at a time.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-10 grid gap-8 md:grid-cols-5"
        >
          <div className="md:col-span-2">
            <div className="relative aspect-square overflow-hidden rounded-none border border-ink/12 bg-transparent">
              <img
                src={profileImage}
                alt="Benjamin Olaoluwa"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="space-y-4 text-base leading-relaxed text-ink/70 md:col-span-3">
            <p>
              I'm a junior full-stack developer based in Ibadan, Nigeria. I currently own the Ajani
              platform end-to-end — frontend, backend, database, and deploy pipeline — translating
              product direction into shipped features on a weekly cadence.
            </p>
            <p>
              Before that, I was a Front-End Engineer / MIS Specialist at Oyo State Government's
              SOCU, building dashboards for the National Social Safety Nets Project that tracked
              vulnerable households across rural communities.
            </p>
            <p>
              I'm comfortable across the stack — React 18/19, Tailwind v4, Framer Motion, React
              Query, Express 5, MongoDB, Supabase Postgres with Row Level Security — and I care
              about clean architecture, accessible UX, performance, and shipping real features fast.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
