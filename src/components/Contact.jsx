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
    <section id="contact" className="border-t border-ink/12 px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="font-mono text-xs uppercase tracking-wider text-ink/45">Contact</p>
          <h2 className="mt-2 text-3xl font-bold text-ink sm:text-4xl tracking-tight">
            Let's build something together...
          </h2>
          <p className="mt-4 text-base text-ink/70">
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
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-none border border-ink/12 text-ink">
                  <Icon size={16} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-ink/45">
                    {label}
                  </p>
                  <p className="truncate text-sm font-medium text-ink">
                    {value}
                  </p>
                </div>
                {href && <ExternalLink size={12} className="shrink-0 text-ink/45" />}
              </>
            )
            return href ? (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
                className="flex items-center gap-4 rounded-none border border-ink/12 bg-transparent p-4 transition-colors hover:bg-ink/[0.02]"
              >
                {inner}
              </a>
            ) : (
              <div
                key={label}
                className="flex items-center gap-4 rounded-none border border-ink/12 bg-transparent p-4"
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
