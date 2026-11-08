import { skills, personalSkills } from '../data/content'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import Icon from './Icons'

export default function Skills() {
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
  }
  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeading
          id="skills-title"
          index="04"
          eyebrow="Skills & Expertise"
          title="What I work with"
          intro="Grouped by the kind of problem they solve, not by self-assessed percentages."
        />
        <ul className="skill-grid">
          {skills.map((s, i) => (
            <Reveal as="li" key={s.title} delay={(i % 3) * 0.06} className="skill-li">
              <article className="skill" onMouseMove={onMove}>
                <span className="skill-icon">
                  <Icon name={s.icon} />
                </span>
                <h3>{s.title}</h3>
                <ul className="skill-items">
                  {s.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </ul>
        <Reveal className="personal">
          <h3 className="mini-title">Working style</h3>
          <ul className="chips">
            {personalSkills.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
