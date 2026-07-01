import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToSection from './components/ScrollToSection'
import ScrollProgress from './components/ScrollProgress'
import DevModeInspector from './components/DevModeInspector'

export default function App() {
  return (
    <div className="min-h-screen bg-paper text-ink transition-colors font-sans">
      <ScrollProgress />
      <ScrollToSection />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
      <DevModeInspector />
    </div>
  )
}
