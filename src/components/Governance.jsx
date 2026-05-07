import { useRef } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const CARDS = [
  { ico: '📊', title: 'Annual Performance Reports',   body: 'Clear yearly progress reviews covering player development metrics, competitive results, and program milestones — shared with all stakeholders transparently.' },
  { ico: '💼', title: 'Financial Reporting',          body: 'Transparent use of sponsorship and operational spend — fully auditable, line-by-line reporting so sponsors know exactly how their investment is being deployed.' },
  { ico: '📈', title: 'Player & Academic Tracking',   body: 'Development is measured on the field and off it. Football performance data and academic progress are both tracked, reviewed, and shared quarterly.' },
  { ico: '🤝', title: 'Sponsor Review Meetings',      body: "Regular governance touchpoints for updates, alignment, and strategic input. Sponsors aren't passive — they're partners in building India's football future." },
]

export default function Governance() {
  const ref = useRef(null)
  useScrollReveal(ref)

  return (
    <section className="section" id="governance" ref={ref}>
      <div className="container">
        <div className="section-head js-reveal">
          <span className="label">Governance</span>
          <h2 className="section-title">Accountability & Transparency</h2>
          <p className="section-sub">
            Sponsors are partners, not just funders. Every rupee is tracked, every milestone is reported,
            and every partner has a seat at the governance table.
          </p>
        </div>

        <div className="gov-grid">
          {CARDS.map(c => (
            <div key={c.title} className="gov-card js-reveal">
              <div className="gov-ico">{c.ico}</div>
              <div>
                <h4>{c.title}</h4>
                <p>{c.body}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="italic-callout js-reveal" style={{ textAlign: 'center' }}>
          "Professional governance. Measurable outcomes."
        </p>
      </div>
    </section>
  )
}
