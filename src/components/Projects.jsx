import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { projects } from '../data/content'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import Icon from './Icons'
import Visual, { CardGlyph } from './Visuals'

const HASH = '#case/'

function Card({ p, i, onOpen }) {
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
  }
  return (
    <Reveal as="li" delay={(i % 3) * 0.07} className="card-li">
      <article className="pcard" onMouseMove={onMove}>
        <CardGlyph kind={p.visual} />
        <div className="pcard-body">
          <div className="pcard-top">
            <span className="tag">{p.category}</span>
            <span className={`status ${p.status === 'Ongoing' ? 'is-live' : ''}`}>{p.status}</span>
          </div>
          <h3>
            <a
              href={`${HASH}${p.slug}`}
              onClick={(e) => {
                e.preventDefault()
                onOpen(p.slug)
              }}
              className="pcard-link"
            >
              {p.title}
            </a>
          </h3>
          <p className="pcard-context mono">{p.context}</p>
          <p className="pcard-summary">{p.summary}</p>
          <ul className="chips" aria-label="Tools">
            {p.tools.slice(0, 4).map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <span className="pcard-more" aria-hidden="true">
            Read case study <Icon name="arrow" size={16} />
          </span>
        </div>
      </article>
    </Reveal>
  )
}

function Block({ title, children }) {
  return (
    <section className="cs-block">
      <h3>{title}</h3>
      {children}
    </section>
  )
}

function CaseStudy({ slug, onClose, onNav }) {
  const reduce = useReducedMotion()
  const idx = projects.findIndex((p) => p.slug === slug)
  const p = projects[idx]
  const ref = useRef(null)
  const closeRef = useRef(null)

  useEffect(() => {
    const prev = document.activeElement
    const scrollbar = window.innerWidth - document.documentElement.clientWidth
    document.body.style.overflow = 'hidden'
    if (scrollbar > 0) document.body.style.paddingRight = `${scrollbar}px`
    closeRef.current?.focus()
    return () => {
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
      prev && prev.focus && prev.focus()
    }
  }, [])

  useEffect(() => {
    ref.current?.scrollTo({ top: 0 })
  }, [slug])

  const onKey = useCallback(
    (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'Tab') {
        const f = ref.current?.querySelectorAll('a[href], button:not([disabled])')
        if (!f || !f.length) return
        const first = f[0]
        const last = f[f.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    },
    [onClose],
  )

  if (!p) return null
  const prev = projects[(idx - 1 + projects.length) % projects.length]
  const next = projects[(idx + 1) % projects.length]

  return (
    <motion.div
      className="cs-overlay"
      initial={reduce ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onKeyDown={onKey}
    >
      <div className="cs-backdrop" onClick={onClose} />
      <motion.div
        className="cs-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cs-title"
        ref={ref}
        initial={reduce ? false : { y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={reduce ? { opacity: 0 } : { y: 30, opacity: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <button className="cs-close" onClick={onClose} ref={closeRef} aria-label="Close case study">
          <Icon name="close" />
        </button>

        <header className="cs-head">
          <div className="pcard-top">
            <span className="tag">{p.category}</span>
            <span className={`status ${p.status === 'Ongoing' ? 'is-live' : ''}`}>{p.status}</span>
          </div>
          <h2 id="cs-title">{p.title}</h2>
          <p className="mono cs-context">{p.context}</p>
        </header>

        <Visual kind={p.visual} />

        <div className="cs-grid">
          <Block title="Overview">
            <p>{p.overview}</p>
          </Block>
          <Block title="Business challenge">
            <p>{p.challenge}</p>
          </Block>
          <Block title="My role">
            <p>{p.role}</p>
          </Block>
          <Block title="Tools & technologies">
            <ul className="chips">
              {p.tools.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </Block>
          <div className="cs-wide">
            <Block title="Solution & methodology">
              <ul className="check-list">
                {p.solution.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </Block>
          </div>
          {(p.results.length > 0 || p.note) && (
            <div className="cs-wide">
              <Block title={p.results.length ? 'Outcomes' : 'Status'}>
                {p.results.length > 0 && (
                  <ul className="check-list">
                    {p.results.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                )}
                {p.note && <p className="cs-note">{p.note}</p>}
              </Block>
            </div>
          )}
          {p.links.length > 0 && (
            <div className="cs-wide">
              <Block title="References">
                <ul className="cs-links">
                  {p.links.map((l) => (
                    <li key={l.url}>
                      <a className="btn btn-ghost btn-small" href={l.url} target="_blank" rel="noopener noreferrer">
                        {l.label} <Icon name="external" size={15} />
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </Block>
            </div>
          )}
        </div>

        <nav className="cs-pager" aria-label="Other case studies">
          <button onClick={() => onNav(prev.slug)}>
            <span className="mono">Previous</span>
            {prev.title}
          </button>
          <button onClick={() => onNav(next.slug)}>
            <span className="mono">Next</span>
            {next.title}
          </button>
        </nav>
      </motion.div>
    </motion.div>
  )
}

export default function Projects() {
  const [slug, setSlug] = useState(null)

  const sync = useCallback(() => {
    const h = window.location.hash
    if (h.startsWith(HASH)) {
      const s = h.slice(HASH.length)
      setSlug(projects.some((p) => p.slug === s) ? s : null)
    } else setSlug(null)
  }, [])

  useEffect(() => {
    sync()
    window.addEventListener('hashchange', sync)
    return () => window.removeEventListener('hashchange', sync)
  }, [sync])

  const open = (s) => {
    window.location.hash = `${HASH}${s}`
  }
  const close = useCallback(() => {
    // return to the section instead of leaving a stale case hash
    window.history.pushState(null, '', '#projects')
    setSlug(null)
  }, [])

  return (
    <section id="projects" className="section" aria-labelledby="proj-title">
      <div className="container">
        <SectionHeading
          id="proj-title"
          index="03"
          eyebrow="Projects & Case Studies"
          title="Selected case studies"
          intro="Real projects from industry and my own tools. Each one opens as a case study with the challenge, my role, the approach and the outcome."
        />
        <ul className="pgrid">
          {projects.map((p, i) => (
            <Card key={p.slug} p={p} i={i} onOpen={open} />
          ))}
        </ul>
      </div>
      <AnimatePresence>{slug && <CaseStudy key="cs" slug={slug} onClose={close} onNav={open} />}</AnimatePresence>
    </section>
  )
}
