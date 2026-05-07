import { useRef } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const GAPS = [
  {
    n: '01', title: 'No long-term player development',
    body: 'Talent appears in bursts, but the system rarely sustains a player from adolescence to elite competition. There\'s no pathway — just glimpses of potential that fade without structure.',
    tag: 'Structural',
  },
  {
    n: '02', title: 'No controlled high-performance environment',
    body: 'School, travel, sleep, nutrition, and training quality are rarely aligned around player development. A young footballer\'s day is shaped by everything except football performance.',
    tag: 'Environmental',
  },
  {
    n: '03', title: 'Limited sports science support',
    body: 'Growth, recovery, conditioning, injury prevention, and psychology are often fragmented or absent. Elite clubs elsewhere treat these as core investments — here, they\'re afterthoughts.',
    tag: 'Scientific',
  },
  {
    n: '04', title: 'Inconsistent elite exposure',
    body: 'Without regular high-level competition, video review, and scouting pathways, a player\'s ceiling and confidence stall. Greatness demands pressure — and pressure demands a pathway.',
    tag: 'Competitive',
  },
]

export default function TheGap() {
  const ref = useRef(null)
  useScrollReveal(ref)

  return (
    <section className="section" id="the-gap" ref={ref}>
      <div className="container">
        <div className="section-head js-reveal">
          <span className="label">The Gap</span>
          <h2 className="section-title">Why India Is Falling Behind</h2>
          <p className="section-sub">
            Four structural failures that prevent Indian football from reaching its potential
            — and the reason Mission 2036 exists.
          </p>
        </div>

        <div className="gap-grid">
          {GAPS.map(g => (
            <div key={g.n} className="gap-card js-reveal">
              <div className="gap-n">{g.n}</div>
              <h3>{g.title}</h3>
              <p>{g.body}</p>
              <span className="gap-card-tag">{g.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
