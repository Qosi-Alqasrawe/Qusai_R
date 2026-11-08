// Custom diagrams for each case study. They illustrate real workflows and logic described in
// the case study text. They are diagrams, not screenshots, and are labelled as such.
import { motion, useReducedMotion } from 'framer-motion'

function Flow({ steps, label }) {
  const reduce = useReducedMotion()
  return (
    <ol className="flow" aria-label={label}>
      {steps.map((s, i) => (
        <motion.li
          key={s.title}
          className="flow-step"
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 * i, duration: 0.5 }}
        >
          <span className="flow-num mono">{String(i + 1).padStart(2, '0')}</span>
          <span className="flow-title">{s.title}</span>
          {s.tag && <span className={`flow-tag tag-${s.tagKind || 'cyan'}`}>{s.tag}</span>}
        </motion.li>
      ))}
    </ol>
  )
}

function Sap() {
  return (
    <>
      <Flow
        label="SAP production setup flow"
        steps={[
          { title: 'Master data structuring', tag: 'MM', tagKind: 'cyan' },
          { title: 'Standard material coding', tag: 'MM', tagKind: 'cyan' },
          { title: 'BOMs with consumption & waste logic', tag: 'PP', tagKind: 'orange' },
          { title: 'Production orders', tag: 'PP', tagKind: 'orange' },
          { title: 'Material issuance & inventory', tag: 'MM', tagKind: 'cyan' },
          { title: 'Custom reports & validation', tag: 'PP / MM', tagKind: 'blue' },
        ]}
      />
      <p className="legend">
        <span className="lg">
          <span className="tag-cyan">MM</span> Materials Management
        </span>
        <span className="lg">
          <span className="tag-orange">PP</span> Production Planning
        </span>
      </p>
    </>
  )
}

function Iso() {
  return (
    <Flow
      label="Production process standardization flow"
      steps={[
        { title: 'Production activities' },
        { title: '7 documented procedures', tag: 'ISO 9001', tagKind: 'orange' },
        { title: 'System-based workflows', tag: 'SAP ERP' },
        { title: 'Process control & traceability' },
      ]}
    />
  )
}

function Planner() {
  const bands = [
    { c: '#ef4444', t: '< 7 days' },
    { c: '#fb923c', t: '< 21 days' },
    { c: '#facc15', t: '< 60 days' },
    { c: '#34d399', t: '60+ days' },
  ]
  return (
    <>
      <Flow
        label="Planning pipeline"
        steps={[
          { title: 'Stock + items Excel files', tag: 'Input' },
          { title: 'Demand class & stock coverage' },
          { title: 'Product & customer alerts' },
          { title: 'Recommended plan by machine' },
          { title: 'Planner confirms final quantity' },
          { title: 'Plan file + Excel / PDF reports', tag: 'Output', tagKind: 'orange' },
        ]}
      />
      <div className="bands" role="img" aria-label="Default coverage alert thresholds: under 7 days, under 21, under 60, and 60 or more">
        {bands.map((b) => (
          <span key={b.t} style={{ '--c': b.c }}>
            {b.t}
          </span>
        ))}
      </div>
      <p className="legend">Default coverage alert thresholds (configurable)</p>
    </>
  )
}

function Inventory() {
  return (
    <>
      <svg className="gauge" viewBox="0 0 640 170" role="img" aria-label="Inventory decision logic: available stock at or below the reorder point means Order; between the reorder point and the review buffer means Review; above means Hold">
        <defs>
          <linearGradient id="zOrder" x1="0" x2="1"><stop offset="0" stopColor="#fb923c" stopOpacity=".95" /><stop offset="1" stopColor="#fb923c" stopOpacity=".55" /></linearGradient>
        </defs>
        <rect x="20" y="52" width="190" height="46" rx="8" fill="url(#zOrder)" />
        <rect x="210" y="52" width="150" height="46" rx="8" fill="#22d3ee" fillOpacity=".55" />
        <rect x="360" y="52" width="260" height="46" rx="8" fill="#3b82f6" fillOpacity=".3" />
        <g className="g-label" textAnchor="middle">
          <text x="115" y="80">ORDER</text>
          <text x="285" y="80">REVIEW</text>
          <text x="490" y="80">HOLD</text>
        </g>
        <g stroke="#e6edf7" strokeOpacity=".7" strokeDasharray="3 4">
          <line x1="210" y1="38" x2="210" y2="112" />
          <line x1="360" y1="38" x2="360" y2="112" />
        </g>
        <g className="g-note" textAnchor="middle">
          <text x="210" y="28">Reorder point</text>
          <text x="360" y="28">+ review buffer</text>
          <text x="320" y="148">Available stock  →</text>
        </g>
      </svg>
      <ul className="chips chips-center" aria-label="Calculated per SKU">
        {['Safety stock', 'Days of supply', 'Reorder point', 'Order-up-to level', 'Suggested order qty'].map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
    </>
  )
}

function Odoo() {
  const mods = ['Sales', 'Purchase', 'Inventory', 'Manufacturing', 'Accounting']
  const cx = 320
  const cy = 120
  return (
    <>
      <svg className="hub" viewBox="0 0 640 240" role="img" aria-label="Odoo ERP modules: Sales, Purchase, Inventory, Manufacturing and Accounting">
        {mods.map((m, i) => {
          const a = (-90 + i * 72) * (Math.PI / 180)
          const x = cx + Math.cos(a) * 190
          const y = cy + Math.sin(a) * 88
          return (
            <g key={m}>
              <line x1={cx} y1={cy} x2={x} y2={y} className="hub-line" />
              <rect x={x - 62} y={y - 17} width="124" height="34" rx="17" className="hub-node" />
              <text x={x} y={y + 5} textAnchor="middle" className="g-label">{m}</text>
            </g>
          )
        })}
        <circle cx={cx} cy={cy} r="38" className="hub-core" />
        <text x={cx} y={cy + 5} textAnchor="middle" className="g-label">Odoo ERP</text>
      </svg>
      <ul className="chips chips-center" aria-label="Master data prepared">
        {['Raw materials', 'Finished products', 'Suppliers', 'Customers'].map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
    </>
  )
}

const map = { sap: Sap, iso: Iso, planner: Planner, inventory: Inventory, odoo: Odoo }

export default function Visual({ kind }) {
  const C = map[kind]
  if (!C) return null
  return (
    <figure className="visual">
      <C />
    </figure>
  )
}

// Compact glyph for project cards
export function CardGlyph({ kind }) {
  return (
    <div className={`card-glyph glyph-${kind}`} aria-hidden="true">
      <span />
      <span />
      <span />
      <span />
    </div>
  )
}
