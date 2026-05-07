import { socials } from '../data/socials'

export default function Footer() {
  const visible = socials.filter(s => s.href)

  return (
    <footer className="border-t border-slate-200 px-6 py-10 dark:border-slate-800">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()} Oladimeji Benjamin Olaoluwa
        </p>

        <ul className="flex items-center gap-3">
          {visible.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
                aria-label={label}
                title={label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-indigo-300 hover:text-indigo-500 dark:border-slate-800 dark:text-slate-400 dark:hover:border-indigo-700"
              >
                <Icon size={18} />
              </a>
            </li>
          ))}
        </ul>

        <p className="text-sm text-slate-500 dark:text-slate-400">
          Built with React, Tailwind & Framer Motion.
        </p>
      </div>
    </footer>
  )
}
