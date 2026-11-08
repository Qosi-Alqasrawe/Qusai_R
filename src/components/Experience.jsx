import { useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring } from 'framer-motion'
import { experience } from '../data/content'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import Icon from './Icons'

function Item({ job, index, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen)
  const reduce = useReducedMotion()
  const panelId = `job-panel-${index}`
  return (
    <Reveal as="li" className="tl-item">
      <span className="tl-dot" aria-hidden="true" />
      <article className={`tl-card ${open ? 'is-open' : ''}`}>
        <button className="tl-head" aria-expanded={open} aria-controls={panelId} onClick={() => setOpen((o) => !o)}>
          <span className="tl-meta mono">
            {job.dates} · {job.place}
          </span>
          <span className="tl-title">{job.role}</span>
          <span className="tl-company">{job.company}</span>
          <span className="tl-summary">{job.summary}</span>
          <Icon name="chevron" className="tl-chevron" />
        </button>
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              id={panelId}
              className="tl-panel"
              initial={reduce ? false : { height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="tl-panel-inner">
                <h3 className="mini-title">Responsibilities & impact</h3>
                <ul className="tl-points">
                  {job.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <h3 className="mini-title">Tools & methods</h3>
                <ul className="chips" aria-label="Tools and methods">
                  {job.tools.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </article>
    </Reveal>
  )
}

export default function Experience() {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 70%', 'end 60%'] })
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 })

  return (
    <section id="experience" className="section" aria-labelledby="exp-title">
      <div className="container">
        <SectionHeading
          id="exp-title"
          index="02"
          eyebrow="Experience"
          title="Career timeline"
          intro="From production lines to ERP rollouts and new factory projects. Select a role to see responsibilities and tools."
        />
        <div className="timeline" ref={ref}>
          <span className="tl-line" aria-hidden="true">
            <motion.span className="tl-line-fill" style={{ scaleY: reduce ? 1 : scaleY }} />
          </span>
          <ol className="tl-list">
            {experience.map((job, i) => (
              <Item key={job.company} job={job} index={i} defaultOpen />
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
