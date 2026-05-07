export default function Footer() {
  return (
    <footer className="border-t border-slate-200 px-6 py-8 dark:border-slate-800">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 text-sm text-slate-500 sm:flex-row dark:text-slate-400">
        <p>© {new Date().getFullYear()} Oladimeji Benjamin Olaoluwa</p>
        <p>Built with React, Tailwind & Framer Motion.</p>
      </div>
    </footer>
  )
}
