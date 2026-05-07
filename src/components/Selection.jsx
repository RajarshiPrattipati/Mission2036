import { useRef, useEffect } from 'react'
import anime from 'animejs'
import { useScrollReveal } from '../hooks/useScrollReveal'

const STEPS = [
  { n: '1', title: 'Scout',         sub: 'Tamil Nadu-wide identification drives' },
  { n: '2', title: 'Select',        sub: 'Structured trials & assessment' },
  { n: '3', title: 'Parent Consent',sub: 'Family briefing & commitment' },
  { n: '4', title: 'Enrol',         sub: 'Residential induction & onboarding' },
  { n: '5', title: 'AIFF Registration', sub: 'Official club registration', final: true },
]

export default function Selection() {
  const ref = useRef(null)
  const pipeRef = useRef(null)
  useScrollReveal(ref)

  useEffect(() => {
    const el = pipeRef.current
    if (!el) return
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return
        const steps = el.querySelectorAll('.pipe-step')
        anime({
          targets: steps,
          opacity:    [0, 1],
          translateX: [-20, 0],
          delay:      anime.stagger(100),
          duration:   600,
          easing:     'cubicBezier(0.16,1,0.3,1)',
        })
        observer.unobserve(el)
      })
    }, { threshold: 0.2 })
    el.querySelectorAll('.pipe-step').forEach(s => { s.style.opacity = '0' })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="section" id="selection" ref={ref}>
      <div className="container">
        <div className="section-head js-reveal">
          <span className="label">Selection</span>
          <h2 className="section-title">Talent Identification</h2>
          <p className="section-sub">
            We don't find players by luck. Scouting across Tamil Nadu targets football fundamentals,
            game intelligence, and mindset — then a rigorous pipeline filters for those who belong.
          </p>
        </div>

        <div className="pipeline-wrap js-reveal">
          <div className="pipeline-steps" ref={pipeRef}>
            {STEPS.map(s => (
              <div key={s.n} className={`pipe-step${s.final ? ' final-step' : ''}`}>
                <div className="pipe-dot">{s.n}</div>
                <h4>{s.title}</h4>
                <p>{s.sub}</p>
              </div>
            ))}
          </div>

          <div className="pipe-info-row" style={{ marginTop: '1.5rem' }}>
            <div className="pipe-info">
              <h4>What We Look For</h4>
              <p>Football fundamentals, game intelligence, coachability, and the right mindset. Physical attributes matter — but mentality determines who reaches the top.</p>
            </div>
            <div className="pipe-quote">
              "We do not recruit casually. We select with intent."
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
