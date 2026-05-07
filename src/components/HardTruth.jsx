import { useRef, useEffect } from 'react'
import anime from 'animejs'
import { useScrollReveal } from '../hooks/useScrollReveal'

const STATS = [
  {
    target: 78, suffix: '+', decimal: 0, color: 'var(--red)',
    label: 'Years since Independence',
    note: 'Seven decades of football history — and still waiting for a single World Cup qualification.',
  },
  {
    target: 1.4, suffix: 'B', decimal: 1, color: 'var(--red)',
    label: 'People in the world\'s largest population',
    note: 'The talent pool is enormous. The infrastructure to convert it into elite players simply doesn\'t exist yet.',
  },
  {
    target: 0, suffix: '', decimal: 0, color: 'var(--red-lt)',
    label: 'FIFA World Cup qualifications',
    note: 'Not for lack of passion or numbers — but for lack of a sustained, structured, long-term development system.',
  },
]

function StatCard({ stat }) {
  const numRef = useRef(null)

  useEffect(() => {
    const el = numRef.current
    if (!el) return
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return
        if (stat.target === 0) { el.textContent = '0'; return }
        const obj = { val: 0 }
        anime({
          targets: obj, val: stat.target,
          duration: 2200, easing: 'easeOutExpo',
          update: () => {
            el.textContent = (stat.decimal ? obj.val.toFixed(stat.decimal) : Math.floor(obj.val)) + stat.suffix
          },
        })
        observer.unobserve(el)
      })
    }, { threshold: 0.5 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [stat])

  const onEnter = () => {
    const el = numRef.current
    if (el) anime({ targets: el, scale: [1, 1.04], duration: 300, easing: 'easeOutBack' })
  }
  const onLeave = () => {
    const el = numRef.current
    if (el) anime({ targets: el, scale: [1.04, 1], duration: 300, easing: 'easeOutBack' })
  }

  return (
    <div className="stat-card js-reveal" onMouseEnter={onEnter} onMouseLeave={onLeave}>
      <div
        ref={numRef}
        className="stat-num"
        style={{ color: stat.color }}
      >
        {stat.target === 0 ? '0' : '0' + stat.suffix}
      </div>
      <div className="stat-label">{stat.label}</div>
      <div className="stat-note">{stat.note}</div>
    </div>
  )
}

export default function HardTruth() {
  const sectionRef = useRef(null)
  useScrollReveal(sectionRef)

  return (
    <section id="hard-truth" ref={sectionRef}>
      <div className="container">
        <div className="section-head js-reveal">
          <span className="label">The Case for Change</span>
          <h2 className="section-title">The Hard Truth</h2>
          <p className="section-sub">
            India has the world's largest young population, the passion, and the love of the game.
            What's missing isn't talent — it's the system that develops it.
          </p>
        </div>

        <div className="stats-grid">
          {STATS.map((s, i) => <StatCard key={i} stat={s} />)}
        </div>

        <div className="truth-bar js-reveal">
          "India has the numbers. What we lack is the system."
        </div>
      </div>
    </section>
  )
}
