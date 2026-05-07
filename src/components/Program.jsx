import { useRef, useEffect } from 'react'
import anime from 'animejs'
import { useScrollReveal } from '../hooks/useScrollReveal'

const FEATURES = [
  { icon: '🏠', title: 'Accommodation',         body: 'Fully serviced residential facilities for all 20 players year-round. A real home — structured for rest, recovery, and brotherhood.' },
  { icon: '🥗', title: 'Nutritious Food',        body: 'Certified nutrition plans tailored to each player\'s growth stage and energy demands. What they eat is as planned as what they train.' },
  { icon: '📚', title: 'Education',              body: 'Enrollment in CBSE/State Board school with academic monitoring and support. We produce men who can think, not only men who can play.' },
  { icon: '⚽', title: 'Professional Training',  body: 'Daily structured sessions under AFC-licensed coaches with video analysis, tactical review, and position-specific development.' },
  { icon: '🏥', title: 'Medical Support',        body: 'On-site medical staff, injury prevention protocols, and recovery management. Players are never left to manage their own health.' },
  { icon: '🧠', title: 'Psychological Support',  body: 'Sports psychology, mental conditioning, and resilience training throughout. The mental game is trained as seriously as the physical.' },
]

export default function Program() {
  const ref = useRef(null)
  const numRef = useRef(null)
  useScrollReveal(ref)

  useEffect(() => {
    const el = numRef.current
    if (!el) return
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return
        anime({ targets: el, innerHTML: [0, 20], duration: 1800, round: 1, easing: 'easeOutExpo' })
        observer.unobserve(el)
      })
    }, { threshold: 0.5 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="section" id="program" ref={ref}>
      <div className="container">
        <div className="js-reveal"><span className="label">Residential Academy</span></div>

        <div className="program-hero-row">
          <div className="program-num-huge js-reveal" ref={numRef} id="programNum">20</div>
          <div className="program-hero-text js-reveal">
            <h2>Elite Players.<br />One Ecosystem.</h2>
            <p>Fully residential · full scholarship · fully integrated</p>
          </div>
        </div>

        <p className="section-sub js-reveal" style={{ marginBottom: 0 }}>
          Six pillars — aligned completely around the athlete. Every variable in a player's life is controlled for performance.
        </p>

        <div className="features-grid">
          {FEATURES.map(f => (
            <div key={f.title} className="feat js-reveal">
              <div className="feat-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
