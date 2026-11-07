import { motion } from 'framer-motion'
import { useEffect } from 'react'

export default function Loader({ onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, 1300)
    return () => clearTimeout(t)
  }, [onDone])

  return (
    <motion.div
      className="loader"
      role="status"
      aria-label="Loading portfolio"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
    >
      <div className="loader-inner">
        <svg viewBox="0 0 64 64" width="64" height="64" aria-hidden="true">
          <motion.path
            d="M32 8 54 20v24L32 56 10 44V20Z"
            fill="none"
            stroke="#22d3ee"
            strokeWidth="2.5"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
          />
          <motion.circle
            cx="32"
            cy="32"
            r="4.5"
            fill="#fb923c"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8, duration: 0.3 }}
          />
        </svg>
        <p className="loader-name">Qusai Awwad</p>
        <div className="loader-bar" aria-hidden="true">
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.1, ease: 'easeInOut' }}
          />
        </div>
      </div>
    </motion.div>
  )
}
