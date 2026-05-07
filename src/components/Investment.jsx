import { useRef, useEffect } from 'react'
import anime from 'animejs'
import { useScrollReveal } from '../hooks/useScrollReveal'

const TAGS = ['Structured','Accountable','Long-term','High-performance','Impact-driven']

const PEOPLE_COSTS = [
  'Football coaches (head & assistants)',
  'Certified nutritionist',
  'Fitness & conditioning coach',
  'Sports psychologist',
  'Residential cook',
  'Full-time warden',
]

const PROGRAM_COSTS = [
  'Food & residential accommodation',
  'School education fees',
  'Transport & match travel',
  'AIFF league registration fees',
  'Equipment, kits & uniforms',
  'Medical care & insurance',
]

export default function Investment() {
  const ref = useRef(null)
  const tagsRef = useRef(null)
  useScrollReveal(ref)

  useEffect(() => {
    const el = tagsRef.current
    if (!el) return
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return
        anime({
          targets: el.querySelectorAll('.inv-tag'),
          scale:   [0.7, 1],
          opacity: [0, 1],
          delay:   anime.stagger(70),
          duration: 500,
          easing:  'easeOutBack',
        })
        observer.unobserve(el)
      })
    }, { threshold: 0.3 })
    el.querySelectorAll('.inv-tag').forEach(t => { t.style.opacity = '0' })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="section" id="investment" ref={ref}>
      <div className="container">
        <div className="section-head js-reveal">
          <span className="label">Investment Case</span>
          <h2 className="section-title">This Is Not Charity</h2>
        </div>

        <p className="inv-headline js-reveal">This is a strategic investment in India's football future.</p>

        <div className="inv-tags js-reveal" ref={tagsRef}>
          {TAGS.map(t => <div key={t} className="inv-tag">{t}</div>)}
        </div>

        <div className="cost-grid">
          <div className="cost-card js-reveal">
            <h3>People Costs</h3>
            <div className="cost-items">
              {PEOPLE_COSTS.map(c => <div key={c} className="cost-item">{c}</div>)}
            </div>
          </div>
          <div className="cost-card js-reveal">
            <h3>Program Costs</h3>
            <div className="cost-items">
              {PROGRAM_COSTS.map(c => <div key={c} className="cost-item">{c}</div>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
