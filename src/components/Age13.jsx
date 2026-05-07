import { useRef } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const CARDS = [
  {
    icon: '⚡', title: 'Technical',
    body: 'Technique is still highly trainable. Bad habits can be corrected before they become permanent. The foundations of touch, passing, and movement are laid at this stage — for life.',
  },
  {
    icon: '🧠', title: 'Tactical',
    body: 'Game understanding can be deeply structured: positioning, scanning, decision-making under pressure, and tempo. The tactical brain is wired in early adolescence — and we wire it right.',
  },
  {
    icon: '💪', title: 'Physical',
    body: 'Physical literacy remains adaptable at 13. Coordinated strength, speed, mobility, and agility can be systematically developed before the body locks into its adult form.',
  },
  {
    icon: '🗓️', title: 'Long-term',
    body: 'Beginning at 13 creates a multi-year runway before senior-level transition pressures begin. Players arrive at 18–20 not as raw talents, but as trained, tested athletes.',
  },
]

export default function Age13() {
  const ref = useRef(null)
  useScrollReveal(ref)

  return (
    <section className="section" id="age13" ref={ref}>
      <div className="container">
        <div className="section-head js-reveal">
          <span className="label">Development Window</span>
          <h2 className="section-title">Why Start at Age 13?</h2>
          <p className="section-sub">
            Age 13 is the optimal entry point for building elite footballers. Technical habits haven't hardened,
            the body is still plastic, and a decade of development lies ahead.
          </p>
        </div>

        <div className="dev-cards">
          {CARDS.map(c => (
            <div key={c.title} className="dev-card js-reveal">
              <div className="dev-card-icon">{c.icon}</div>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </div>
          ))}
        </div>

        <p className="italic-callout js-reveal">"This is the right age to build international players."</p>
      </div>
    </section>
  )
}
