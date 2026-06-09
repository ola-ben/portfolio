import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const pathToId = {
  '/': 'top',
  '/about': 'about',
  '/projects': 'projects',
  '/skills': 'skills',
  '/experience': 'experience',
  '/education': 'education',
  '/contact': 'contact',
}

export default function ScrollToSection() {
  const { pathname } = useLocation()

  useEffect(() => {
    const id = pathToId[pathname]
    if (!id) return

    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    // wait one frame so layout is committed before measuring
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }, [pathname])

  return null
}
