import { useRef } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const CARDS = [
  {
    num: '01', title: 'Coaching Model',
    body: 'A structured long-term curriculum delivered by AFC-licensed coaches. Every session is planned, filmed, and reviewed. Position-specific development, tactical education, and video analysis are standard — not extras.',
    tags: ['AFC Licensed','Video Analysis','Tactical Education','Long-term Curriculum'],
  },
  {
    num: '02', title: 'Education Model',
    body: 'Enrollment in State Board / CBSE school with academic tracking, performance monitoring, and school representation in competition. Academic progress is measured with the same rigour as football development.',
    tags: ['CBSE / State Board','Academic Tracking','School Competitions'],
  },
  {
    num: '03', title: 'Balanced Leaders',
    body: 'Football and education are not competing priorities here. Together they create reputation, sponsor visibility, and grounded character. We are building young men who can represent India — on and off the pitch.',
    tags: ['Character Building','Life Skills','Dual Excellence'],
  },
]

export default function Coaching() {
  const ref = useRef(null)
  useScrollReveal(ref)

  return (
    <section className="section" id="coaching" ref={ref}>
      <div className="container">
        <div className="section-head js-reveal">
          <span className="label">Integrated Development</span>
          <h2 className="section-title">World-Class Coaching + Education</h2>
          <p className="section-sub">
            Football and education are not competing priorities. Together they create reputation, visibility,
            grounded character — and players who can navigate the world beyond the pitch.
          </p>
        </div>

        <div className="coaching-grid">
          {CARDS.map(c => (
            <div key={c.num} className="coach-card js-reveal">
              <div className="coach-num">{c.num}</div>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
              <div className="coach-tags">
                {c.tags.map(t => <span key={t} className="coach-tag">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
