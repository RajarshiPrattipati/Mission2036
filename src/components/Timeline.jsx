import { useRef, useEffect } from 'react'
import anime from 'animejs'
import { useScrollReveal } from '../hooks/useScrollReveal'

const PHASES = [
  {
    phase: 'Phase 01', years: 'Year 1–3', title: 'Foundation & Development',
    body: 'Building habits, systems, and culture from the ground up. Players arrive as prospects and leave as trained athletes — with technical, tactical, physical, and psychological foundations in place. The hardest and most critical phase.',
  },
  {
    phase: 'Phase 02', years: 'Year 4–6', title: 'National Exposure',
    body: 'Players now compete at national youth level — AIFF tournaments, inter-state competitions, and showcase events. Gaining visibility, testing development under pressure, and earning the attention of professional clubs and national selectors.',
  },
  {
    phase: 'Phase 03', years: 'Year 7–8', title: 'Professional Club Pathways',
    body: 'First program graduates entering professional club academies — ISL clubs, I-League clubs, and affiliated youth structures. The pipeline delivers its first tangible results for players and for the program\'s legacy.',
  },
  {
    phase: 'Phase 04', years: 'Year 9–10', title: 'Senior National Team Contention',
    body: 'Mission 2036 alumni in contention for the Indian senior national team — and the program standing as proof that a sustained, structured system can compete with the world.',
  },
]

export default function Timeline() {
  const ref = useRef(null)
  useScrollReveal(ref)

  useEffect(() => {
    const phases = document.querySelectorAll('.tl-phase')
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return
        anime({
          targets: entry.target,
          opacity:    [0, 1],
          translateX: [-30, 0],
          duration:   700,
          easing:     'cubicBezier(0.16,1,0.3,1)',
        })
        observer.unobserve(entry.target)
      })
    }, { threshold: 0.2 })
    phases.forEach(el => { el.style.opacity = '0'; observer.observe(el) })
    return () => observer.disconnect()
  }, [])

  return (
    <section className="section" id="timeline" ref={ref}>
      <div className="container">
        <div className="section-head js-reveal">
          <span className="label">10–12 Year Horizon</span>
          <h2 className="section-title">Long-Term Vision</h2>
          <p className="section-sub">
            Excellence is not built in a season. Mission 2036 is a decade-long commitment
            — four phases, one destination: the senior Indian national team.
          </p>
        </div>

        <div className="tl-layout">
          <div className="tl-spine-wrap">
            <div className="tl-spine" />
            <div className="tl-phases">
              {PHASES.map(p => (
                <div key={p.phase} className="tl-phase">
                  <div className="tl-meta">
                    <span className="tl-phase-n">{p.phase}</span>
                    <span className="tl-years">{p.years}</span>
                  </div>
                  <div className="tl-title">{p.title}</div>
                  <p className="tl-body">{p.body}</p>
                </div>
              ))}
            </div>
            <div className="tl-callout js-reveal">"A structured pipeline to the top."</div>
          </div>

          <div className="tl-orb-wrap js-reveal">
            <div className="tl-ring">
              <div className="tl-ring-inner">
                <div className="big">10+</div>
                <div className="small">Year Vision</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
