import { useRef, useEffect } from 'react'
import anime from 'animejs'
import { useScrollReveal } from '../hooks/useScrollReveal'

const QUALITIES = [
  { name: 'Discipline',          accent: false },
  { name: 'Responsibility',      accent: false },
  { name: 'Emotional Resilience',accent: false },
  { name: 'National Pride',      accent: true  },
  { name: 'Team-first Mindset',  accent: false },
]

export default function Beyond() {
  const ref = useRef(null)
  const qualRef = useRef(null)
  useScrollReveal(ref)

  useEffect(() => {
    const el = qualRef.current
    if (!el) return
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return
        anime({
          targets: el.querySelectorAll('.quality'),
          opacity:    [0, 1],
          translateX: [30, 0],
          delay:      anime.stagger(90, { start: 200 }),
          duration:   600,
          easing:     'cubicBezier(0.16,1,0.3,1)',
        })
        observer.unobserve(el)
      })
    }, { threshold: 0.2 })
    el.querySelectorAll('.quality').forEach(q => { q.style.opacity = '0' })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="beyond" ref={ref}>
      <div className="beyond-glow" />
      <div className="container">
        <div className="beyond-layout">
          <div className="js-reveal">
            <span className="label">Leadership Development</span>
            <div className="beyond-statement">This program is designed to build young men of character.</div>
            <p className="beyond-p1">
              Discipline, resilience, responsibility, and national pride are not byproducts of the program
              — they are core deliverables. Character is trained daily, not added later.
            </p>
            <p className="beyond-p2">
              Leadership is built into the environment, the schedule, the standards, and the team culture.
              Every player leaves not just with football ability — but with the character to carry it.
            </p>
            <p className="beyond-foot">
              "Leadership is built into the environment, the schedule, the standards, and the team culture."
            </p>
          </div>

          <div className="qualities js-reveal" ref={qualRef}>
            {QUALITIES.map(q => (
              <div key={q.name} className={`quality${q.accent ? ' accent' : ''}`}>
                <div className="q-dot" />
                <div className="q-name">{q.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
