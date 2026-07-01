import { socials } from '../data/socials'

export default function Footer() {
  const visible = socials.filter(s => s.href)

  return (
    <footer className="border-t border-ink/12 px-6 py-10 bg-transparent">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <p className="font-mono text-xs uppercase tracking-wider text-ink/45">
          © {new Date().getFullYear()} Oladimeji Benjamin Olaoluwa
        </p>

        <ul className="flex items-center gap-2">
          {visible.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
                aria-label={label}
                title={label}
                className="inline-flex h-9 w-9 items-center justify-center rounded-none border border-ink/12 text-ink/70 bg-transparent transition hover:bg-ink/[0.04] hover:text-ink"
              >
                <Icon size={16} />
              </a>
            </li>
          ))}
        </ul>

        <p className="font-mono text-xs uppercase tracking-wider text-ink/45">
          Built with React, Tailwind & Framer Motion.
        </p>
      </div>
    </footer>
  )
}
