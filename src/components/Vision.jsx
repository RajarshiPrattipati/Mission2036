import { useRef } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const PILLARS = [
  {
    ico: '🎯', title: 'Structured talent pipeline',
    body: 'A repeatable, intentional pathway from selection to elite exposure. Every step is designed to build on the one before it — no gaps, no shortcuts, no wasted years.',
  },
  {
    ico: '🏆', title: 'Leaders, not just athletes',
    body: 'Character, discipline, and accountability are woven into the daily routine — not added as an afterthought. The program builds men who compete with conviction.',
  },
  {
    ico: '🌍', title: 'A model that can scale',
    body: 'A proof of concept that Indian football can be organized, funded, and sustained at the highest level. When this works here, it becomes a blueprint for the nation.',
  },
]

export default function Vision() {
  const ref = useRef(null)
  useScrollReveal(ref)

  return (
    <section className="section" id="vision" ref={ref}>
      <div className="container">
        <div className="js-reveal"><span className="label">Vision</span></div>
        <div className="vision-quote gradient-text js-reveal">
          A program built to create international-level players, not short-term results.
        </div>
        <p className="vision-context js-reveal">
          To build a high-performance football system that produces international-quality players
          for India — through a controlled ecosystem, elite habits, and a long developmental runway.
        </p>

        <div className="vision-pillars">
          {PILLARS.map(p => (
            <div key={p.title} className="pillar js-reveal">
              <div className="pillar-ico">{p.ico}</div>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </div>
          ))}
        </div>

        <div className="vision-statement js-reveal">This is a nation-building project.</div>
      </div>
    </section>
  )
}
