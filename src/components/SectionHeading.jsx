import { motion, useReducedMotion } from 'framer-motion'

// The h2 itself is observed (not the clipped words), otherwise the IntersectionObserver
// never sees a word that is translated outside its overflow mask.
const wordVariants = {
  hidden: { y: '110%' },
  show: { y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function SectionHeading({ id, index, eyebrow, title, intro }) {
  const reduce = useReducedMotion()
  const words = title.split(' ')
  return (
    <header className="section-head">
      <p className="eyebrow">
        <span className="eyebrow-index">{index}</span>
        {eyebrow}
      </p>
      <motion.h2
        id={id}
        aria-label={title}
        initial={reduce ? false : 'hidden'}
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
        transition={{ staggerChildren: 0.06 }}
      >
        {words.map((w, i) => (
          <span className="word-mask" key={i} aria-hidden="true">
            <motion.span className="word" variants={wordVariants}>
              {w}&nbsp;
            </motion.span>
          </span>
        ))}
      </motion.h2>
      <motion.span
        className="head-rule"
        aria-hidden="true"
        initial={reduce ? false : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      />
      {intro && <p className="section-intro">{intro}</p>}
    </header>
  )
}
