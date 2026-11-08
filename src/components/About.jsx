import { about } from '../data/content'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import Icon from './Icons'
import portrait from '../assets/qusai.webp'

export default function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container">
        <SectionHeading
          id="about-title"
          index="01"
          eyebrow="About"
          title="Where the production department meets the data"
        />
        <div className="about-grid">
          <Reveal className="about-photo-wrap">
            <figure className="photo">
              <img
                src={portrait}
                alt="Portrait of Qusai Awwad, Industrial Engineer"
                width="800"
                height="800"
                loading="lazy"
              />
              <span className="corner tl" aria-hidden="true" />
              <span className="corner br" aria-hidden="true" />
              <figcaption className="mono">Zarqa · Jordan</figcaption>
            </figure>
          </Reveal>

          <div className="about-copy">
            <Reveal as="p" className="about-lead">
              {about.lead}
            </Reveal>
            <Reveal as="p" delay={0.08} className="about-body">
              {about.body}
            </Reveal>
            <ul className="pillars">
              {about.pillars.map((p, i) => (
                <Reveal as="li" key={p.title} delay={0.06 * i} className="pillar">
                  <span className="pillar-icon">
                    <Icon name={p.icon} />
                  </span>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </Reveal>
              ))}
            </ul>
            <Reveal as="p" className="mono about-lang">
              {about.languages}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
