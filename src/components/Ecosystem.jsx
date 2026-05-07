import { useRef } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const ITEMS = [
  { n: '1', title: 'Accommodation as a team',      body: 'All 20 players live together in one shared facility — creating shared identity, shared standards, and a culture of collective accountability.' },
  { n: '2', title: '20 players living and growing together', body: 'The on-pitch chemistry of elite teams starts off it. Living together builds the trust and understanding that coaching alone cannot create.' },
  { n: '3', title: 'Full-time caretaker and warden', body: '24/7 pastoral care, supervision, and support ensures every player is safe, healthy, and growing as a person — not just as an athlete.' },
  { n: '4', title: 'Structured daily routine',      body: 'Wake-up, training, school, meals, recovery, study — every hour is purposeful. Elite performance emerges from elite daily habits.' },
  { n: '5', title: 'Discipline and leadership culture', body: 'Standards are set, kept, and raised together. The culture of the house becomes the culture of the team — demanding, supportive, and built to win.' },
]

export default function Ecosystem() {
  const ref = useRef(null)
  useScrollReveal(ref)

  return (
    <section className="section" id="ecosystem" ref={ref}>
      <div className="eco-glow" />
      <div className="container">
        <div className="section-head js-reveal">
          <span className="label">Daily Environment</span>
          <h2 className="section-title">The Residential Ecosystem</h2>
        </div>

        <div className="eco-layout">
          <div className="js-reveal">
            {ITEMS.map(item => (
              <div key={item.n} className="eco-item">
                <div className="eco-badge">{item.n}</div>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="js-reveal">
            <div className="eco-quote-card">
              <div className="eq-mark">"</div>
              <p className="eq-text">We are not just building footballers. We are building a brotherhood.</p>
              <p className="eq-attr">— Mission 2036 Program Philosophy</p>
              <div className="eco-stats">
                {[['20','Players'],['365','Days / Year'],['24/7','Care & Warden'],['100%','Scholarship']].map(([n,l]) => (
                  <div key={l} className="eco-stat">
                    <div className="n">{n}</div>
                    <div className="l">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
