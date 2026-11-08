import { useCallback, useState } from 'react'
import { AnimatePresence, useReducedMotion } from 'framer-motion'
import Loader from './components/Loader'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Credentials from './components/Credentials'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'

function seen() {
  try {
    return sessionStorage.getItem('qa-loaded') === '1'
  } catch {
    return false
  }
}

export default function App() {
  const reduce = useReducedMotion()
  // Skip the loader for reduced-motion users, repeat visits in a session, and deep links.
  const [loading, setLoading] = useState(() => !seen() && !window.location.hash)
  const skip = reduce
  const done = useCallback(() => {
    try {
      sessionStorage.setItem('qa-loaded', '1')
    } catch {
      /* storage can be unavailable; ignore */
    }
    setLoading(false)
  }, [])

  const showLoader = loading && !skip

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <AnimatePresence>{showLoader && <Loader key="loader" onDone={done} />}</AnimatePresence>
      <Nav />
      <main id="main">
        <Hero ready={!showLoader} />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Credentials />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
