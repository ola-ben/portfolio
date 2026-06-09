import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react'
import GithubIcon from './GithubIcon'

const items = [
  {
    Icon: Mail,
    label: 'Email',
    value: 'benjaminsolaben@gmail.com',
    href: 'mailto:benjaminsolaben@gmail.com',
  },
  {
    Icon: Phone,
    label: 'Phone',
    value: '+234 706 302 6374',
    href: 'tel:+2347063026374',
  },
  {
    Icon: GithubIcon,
    label: 'GitHub',
    value: 'github.com/ola-ben',
    href: 'https://github.com/ola-ben',
  },
  {
    Icon: MapPin,
    label: 'Location',
    value: 'Ibadan, Oyo State, Nigeria',
    href: null,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-indigo-500">Contact</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl dark:text-slate-50">
            Let's build something together...
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-400">
            I'm open to junior / mid full-stack and front-end opportunities — remote or
            Ibadan-based. Drop me a line.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-12 grid gap-4 sm:grid-cols-2"
        >
          {items.map(({ Icon, label, value, href }) => {
            const inner = (
              <>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-500/10 text-indigo-500">
                  <Icon size={18} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {label}
                  </p>
                  <p className="truncate text-sm font-medium text-slate-900 dark:text-slate-100">
                    {value}
                  </p>
                </div>
                {href && <ExternalLink size={14} className="shrink-0 text-slate-400" />}
              </>
            )
            return href ? (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
                className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 transition hover:border-indigo-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-indigo-700"
              >
                {inner}
              </a>
            ) : (
              <div
                key={label}
                className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
              >
                {inner}
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
