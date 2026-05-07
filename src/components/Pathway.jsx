import { useRef, useEffect } from 'react'
import anime from 'animejs'
import { useScrollReveal } from '../hooks/useScrollReveal'

const STEPS = [
  { node: 'YFC', name: 'Yazhi Academy',                       final: false },
  { node: '↑',   name: 'AIFF Youth Leagues',                  final: false },
  { node: '↑',   name: 'State Competitions',                  final: false },
  { node: '↑',   name: 'National Tournaments',                final: false },
  { node: '★',   name: 'State Teams · Camps · Pro Clubs',     final: true  },
]

export default function Pathway() {
  const ref = useRef(null)
  const rowRef = useRef(null)
  useScrollReveal(ref)

  useEffect(() => {
    const el = rowRef.current
    if (!el) return
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return
        const steps = el.querySelectorAll('.path-step')
        anime({
          targets: steps,
          opacity:    [0, 1],
          translateY: [20, 0],
          delay:      anime.stagger(120),
          duration:   600,
          easing:     'cubicBezier(0.16,1,0.3,1)',
        })
        observer.unobserve(el)
      })
    }, { threshold: 0.2 })
    el.querySelectorAll('.path-step').forEach(s => { s.style.opacity = '0' })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="section" id="pathway" ref={ref}>
      <div className="container">
        <div className="section-head js-reveal">
          <span className="label">Exposure</span>
          <h2 className="section-title">The Competitive Pathway</h2>
          <p className="section-sub">
            A clear, structured progression from the academy to professional visibility.
            Every stage is designed to raise the stakes and test the player against better competition.
          </p>
        </div>

        <div className="pathway-wrap">
          <div className="pathway-row js-reveal" ref={rowRef}>
            {STEPS.map((s, i) => (
              <div key={i} className={`path-step${s.final ? ' final' : ''}`}>
                <div className="path-node">{s.node}</div>
                <div className={`path-name${s.final ? ' accent' : ''}`}>{s.name}</div>
              </div>
            ))}
          </div>

          <div className="pathway-insight js-reveal">
            "A clear pathway creates real exposure — and real exposure changes what players believe is possible."
          </div>
        </div>
      </div>
    </section>
  )
}
