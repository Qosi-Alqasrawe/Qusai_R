import { education, certifications } from '../data/content'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import Icon from './Icons'

export default function Credentials() {
  return (
    <section id="credentials" className="section" aria-labelledby="cred-title">
      <div className="container">
        <SectionHeading
          id="cred-title"
          index="05"
          eyebrow="Education & Certifications"
          title="Credentials"
        />
        <div className="cred-grid">
          <Reveal as="article" className="cred-card">
            <span className="pillar-icon">
              <Icon name="cap" />
            </span>
            <p className="mono cred-date">{education.dates}</p>
            <h3>{education.degree}</h3>
            <p className="cred-org">
              {education.school}, {education.place}
            </p>
            <p className="cred-note">{education.grade}</p>
          </Reveal>
          {certifications.map((c, i) => (
            <Reveal as="article" key={c.name} delay={0.07 * (i + 1)} className="cred-card">
              <span className="pillar-icon accent-orange">
                <Icon name="award" />
              </span>
              <p className="mono cred-date">{c.date}</p>
              <h3>{c.name}</h3>
              <p className="cred-org">{c.issuer}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
