import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { nav, profile } from '../data/content'
import Icon from './Icons'

export default function Nav() {
  const [active, setActive] = useState('')
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const els = nav.map((n) => document.getElementById(n.id)).filter(Boolean)
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="nav-inner">
        <a className="brand" href="#top" aria-label="Qusai Awwad, back to top">
          <span className="brand-mark" aria-hidden="true">QA</span>
          <span className="brand-name">Qusai Awwad</span>
        </a>

        <nav className="nav-links" aria-label="Primary">
          {nav.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className={active === n.id ? 'is-active' : ''}
              aria-current={active === n.id ? 'true' : undefined}
            >
              {n.label}
              {active === n.id && (
                <motion.span layoutId="nav-indicator" className="nav-indicator" aria-hidden="true" />
              )}
            </a>
          ))}
        </nav>

        <a className="btn btn-small btn-ghost nav-cv" href={profile.cv} download>
          <Icon name="download" size={16} /> CV
        </a>

        <button
          className="menu-btn"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
        >
          <Icon name={open ? 'close' : 'menu'} />
        </button>
      </div>

      <div id="mobile-menu" className={`mobile-menu ${open ? 'is-open' : ''}`} hidden={!open}>
        {nav.map((n) => (
          <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)}>
            {n.label}
          </a>
        ))}
        <a href={profile.cv} download onClick={() => setOpen(false)}>
          Download CV
        </a>
      </div>
    </header>
  )
}
