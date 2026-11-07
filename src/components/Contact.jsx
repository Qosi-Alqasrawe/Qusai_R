import { useState } from 'react'
import { profile } from '../data/content'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import Icon from './Icons'

const encode = (data) =>
  Object.keys(data)
    .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(data[k])}`)
    .join('&')

export default function Contact() {
  const [state, setState] = useState('idle') // idle | sending | sent | error

  const submit = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())
    setState('sending')
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...data }),
      })
      if (!res.ok) throw new Error(String(res.status))
      form.reset()
      setState('sent')
    } catch {
      setState('error')
    }
  }

  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="container">
        <SectionHeading
          id="contact-title"
          index="07"
          eyebrow="Contact"
          title="Let’s build something that runs well"
          intro="Open to roles and projects in production planning, supply chain, ERP implementation and industrial project planning."
        />
        <div className="contact-grid">
          <Reveal className="contact-info">
            <ul className="contact-list">
              <li>
                <Icon name="mail" />
                <span>
                  <span className="mono label">Email</span>
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                </span>
              </li>
              <li>
                <Icon name="linkedin" />
                <span>
                  <span className="mono label">LinkedIn</span>
                  <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                    linkedin.com/in/qusai-awwad<span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </span>
              </li>
              <li>
                <Icon name="github" />
                <span>
                  <span className="mono label">GitHub</span>
                  <a href={profile.github} target="_blank" rel="noopener noreferrer">
                    github.com/Qosi-Alqasrawe<span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </span>
              </li>
              <li>
                <Icon name="pin" />
                <span>
                  <span className="mono label">Location</span>
                  {profile.location}
                </span>
              </li>
            </ul>
            <a className="btn btn-primary" href={profile.cv} download>
              <Icon name="download" size={18} /> Download CV
            </a>
          </Reveal>

          <Reveal delay={0.1}>
            <form className="form" name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={submit}>
              <input type="hidden" name="form-name" value="contact" />
              <p className="hp" aria-hidden="true">
                <label>
                  Don’t fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" />
                </label>
              </p>
              <div className="field">
                <label htmlFor="c-name">Name</label>
                <input id="c-name" name="name" type="text" autoComplete="name" required />
              </div>
              <div className="field">
                <label htmlFor="c-email">Email</label>
                <input id="c-email" name="email" type="email" autoComplete="email" required />
              </div>
              <div className="field">
                <label htmlFor="c-subject">Subject</label>
                <input id="c-subject" name="subject" type="text" />
              </div>
              <div className="field">
                <label htmlFor="c-message">Message</label>
                <textarea id="c-message" name="message" rows="5" required />
              </div>
              <button className="btn btn-primary" type="submit" disabled={state === 'sending'}>
                {state === 'sending' ? 'Sending…' : 'Send message'} <Icon name="arrow" size={18} />
              </button>
              <p className={`form-status ${state}`} role="status" aria-live="polite">
                {state === 'sent' && 'Thank you. Your message was sent and I will get back to you soon.'}
                {state === 'error' && `Something went wrong. Please email me directly at ${profile.email}.`}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
