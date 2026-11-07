import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { profile, heroFacts } from '../data/content'
import Icon from './Icons'

const nodes = [
  { x: 120, y: 90, r: 5 },
  { x: 340, y: 60, r: 4 },
  { x: 560, y: 130, r: 6 },
  { x: 220, y: 260, r: 4 },
  { x: 450, y: 300, r: 5 },
  { x: 690, y: 240, r: 4 },
  { x: 800, y: 80, r: 4 },
]
const links = [
  [0, 1], [1, 2], [0, 3], [3, 4], [2, 4], [2, 5], [5, 6], [4, 5],
]

function NetworkBg() {
  return (
    <svg className="net" viewBox="0 0 900 380" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="lnk" x1="0" x2="1">
          <stop offset="0" stopColor="#22d3ee" stopOpacity=".05" />
          <stop offset=".5" stopColor="#22d3ee" stopOpacity=".55" />
          <stop offset="1" stopColor="#3b82f6" stopOpacity=".05" />
        </linearGradient>
      </defs>
      {links.map(([a, b], i) => (
        <line
          key={i}
          className="net-link"
          style={{ animationDelay: `${i * 0.45}s` }}
          x1={nodes[a].x}
          y1={nodes[a].y}
          x2={nodes[b].x}
          y2={nodes[b].y}
          stroke="url(#lnk)"
          strokeWidth="1.2"
        />
      ))}
      {nodes.map((n, i) => (
        <g key={i}>
          <circle cx={n.x} cy={n.y} r={n.r + 8} className="net-halo" style={{ animationDelay: `${i * 0.3}s` }} />
          <circle cx={n.x} cy={n.y} r={n.r} fill={i === 5 ? '#fb923c' : '#22d3ee'} />
        </g>
      ))}
    </svg>
  )
}

const container = { hidden: {}, show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } } }
const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero({ ready }) {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, 120])
  const fgY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, -40])

  const first = profile.name.split(' ')
  const parts = profile.title.split('|').map((s) => s.trim())

  return (
    <section className="hero" id="top" ref={ref} aria-labelledby="hero-title">
      <motion.div className="hero-bg" style={{ y: bgY }} aria-hidden="true">
        <div className="blueprint" />
        <div className="glow glow-a" />
        <div className="glow glow-b" />
        <NetworkBg />
      </motion.div>

      <motion.div
        className="hero-inner container"
        style={{ y: fgY }}
        variants={container}
        initial={reduce ? false : 'hidden'}
        animate={ready ? 'show' : 'hidden'}
      >
        <motion.p className="hero-kicker mono" variants={item}>
          <span className="dot" aria-hidden="true" /> Industrial Engineer · CSCA
        </motion.p>

        <h1 id="hero-title" className="hero-title" aria-label={profile.name}>
          {first.map((w, i) => (
            <span className="word-mask" key={i} aria-hidden="true">
              <motion.span className="word" variants={{ hidden: { y: '110%' }, show: { y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } } }}>
                {i === first.length - 1 ? <span className="grad">{w}</span> : w}
                &nbsp;
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.ul className="hero-roles" variants={item} aria-label="Professional focus">
          {parts.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </motion.ul>

        <motion.p className="hero-intro" variants={item}>
          {profile.intro}
        </motion.p>

        <motion.div className="hero-cta" variants={item}>
          <a className="btn btn-primary" href="#projects">
            Explore My Work <Icon name="arrow" size={18} />
          </a>
          <a className="btn btn-ghost" href={profile.cv} download>
            <Icon name="download" size={18} /> Download CV
          </a>
          <span className="hero-social">
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile (opens in a new tab)">
              <Icon name="linkedin" />
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile (opens in a new tab)">
              <Icon name="github" />
            </a>
          </span>
        </motion.div>

        <motion.dl className="hero-facts" variants={item}>
          {heroFacts.map((f) => (
            <div key={f.label}>
              <dt>{f.label}</dt>
              <dd>{f.value}</dd>
            </div>
          ))}
        </motion.dl>
      </motion.div>
    </section>
  )
}
