import { useRef } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const CARDS = [
  { icon: '🌱', title: 'CSR Impact',                  body: 'Youth development with measurable long-term outcomes. Real impact on real children from underprivileged backgrounds — not optics, but transformation.' },
  { icon: '🇮🇳', title: 'Nation-Building Association', body: 'Your brand aligns with a bold, future-facing football vision for India. You become part of a story that the country will remember.' },
  { icon: '🏅', title: 'Sports Legacy',               body: 'Early association with players and a model that can outlast any single campaign. Legacy brands are built in the early days — not after the success is obvious.' },
  { icon: '🔭', title: 'Future Player Pipeline',      body: "You join the story before the talent reaches wider visibility. When these players play for India, your brand was there from the beginning." },
  { icon: '📡', title: 'Media Storytelling',          body: 'A compelling narrative with people, place, purpose, and aspiration at its core — the kind of story that wins awards and earns coverage organically.' },
  { icon: '✊', title: 'Patriotic Capital',           body: "The Indian market rewards brands that invest in India's sporting future. Being seen as a builder — not just a sponsor — creates deep, lasting consumer affinity.", highlight: true },
]

export default function PartnerValue() {
  const ref = useRef(null)
  useScrollReveal(ref)

  return (
    <section className="section" id="partner-value" ref={ref}>
      <div className="container">
        <div className="section-head js-reveal">
          <span className="label">Partner Value</span>
          <h2 className="section-title">Why Sponsor This Program?</h2>
          <p className="section-sub">
            Five compelling and distinct reasons to align your brand with Mission 2036
            — before it becomes a story everyone wants to be part of.
          </p>
        </div>

        <div className="pv-grid">
          {CARDS.map(c => (
            <div
              key={c.title}
              className="pv-card js-reveal"
              style={c.highlight ? { background: 'rgba(232,59,37,.04)', borderTop: '2px solid var(--red)' } : undefined}
            >
              <div className="pv-icon">{c.icon}</div>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </div>
          ))}
        </div>

        <div className="pv-callout js-reveal">
          "You are not sponsoring 20 players.<br />
          <span>You are investing in India's football future.</span>"
        </div>
      </div>
    </section>
  )
}
