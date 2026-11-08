import { achievements } from '../data/content'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import Icon from './Icons'

export default function Achievements() {
  return (
    <section id="achievements" className="section" aria-labelledby="ach-title">
      <div className="container">
        <SectionHeading
          id="ach-title"
          index="06"
          eyebrow="Achievements"
          title="Recognition & results"
        />
        <ul className="ach-grid">
          {achievements.map((a, i) => (
            <Reveal as="li" key={a.title} delay={(i % 3) * 0.06} className="ach-li">
              <article className={`ach ${a.kind === 'Competition' ? 'is-comp' : ''}`}>
                <div className="ach-top">
                  {a.rank ? (
                    <span className="rank" aria-label={`Result: ${a.rank}`}>{a.rank}</span>
                  ) : (
                    <span className="pillar-icon">
                      <Icon name="iso" />
                    </span>
                  )}
                  <span className="mono ach-kind">{a.kind}</span>
                </div>
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
