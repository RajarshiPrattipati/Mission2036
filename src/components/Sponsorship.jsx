import { useRef, useEffect } from 'react'
import anime from 'animejs'
import { useScrollReveal } from '../hooks/useScrollReveal'

const TIERS = [
  {
    tier: 'tier-1', badge: 'Flagship Partner', name: 'Title Sponsor',
    items: [
      'Program naming rights — your brand becomes the program',
      'Prime front-of-jersey branding on all kits',
      'Full media visibility across all program coverage',
      'Social media branding across all Yazhi FC platforms',
      'Presence across all promotional & match-day materials',
    ],
  },
  {
    tier: 'tier-2', badge: 'Associate Partner', name: 'Co-Sponsor',
    items: [
      'Jersey sleeve branding on all match kits',
      'Event visibility at tournaments & showcases',
      'Digital branding across content and campaigns',
      'Association with program milestones & results',
      'Partnership storytelling for brand communications',
    ],
  },
  {
    tier: 'tier-3', badge: 'Support Partner', name: 'Support Partner',
    items: [
      'Equipment partner recognition on all materials',
      'Nutrition partner recognition & logo placement',
      'Medical partner recognition at events',
      'Exclusive category association with the program',
      'Program support visibility in all communications',
    ],
  },
]

export default function Sponsorship() {
  const ref = useRef(null)
  const gridRef = useRef(null)
  useScrollReveal(ref)

  useEffect(() => {
    const el = gridRef.current
    if (!el) return
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return
        const cards = el.querySelectorAll('.scard')
        anime({
          targets: cards,
          opacity:    [0, 1],
          translateY: [50, 0],
          scale:      [0.95, 1],
          delay:      anime.stagger(130),
          duration:   800,
          easing:     'cubicBezier(0.16,1,0.3,1)',
        })
        observer.unobserve(el)
      })
    }, { threshold: 0.1 })
    el.querySelectorAll('.scard').forEach(c => { c.style.opacity = '0' })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="section" id="sponsorship" ref={ref}>
      <div className="container">
        <div className="section-head js-reveal">
          <span className="label">The Ask</span>
          <h2 className="section-title">Sponsorship Opportunities</h2>
          <p className="section-sub">
            Three tiers of partnership — each with meaningful brand association, real visibility,
            and a lasting connection to India's football future.
          </p>
        </div>

        <div className="sponsor-grid" ref={gridRef}>
          {TIERS.map(t => (
            <div key={t.tier} className={`scard ${t.tier}`}>
              {t.tier === 'tier-1' && <div className="scard-glow" />}
              <div className="tier-badge">{t.badge}</div>
              <h3 className="scard-name">{t.name}</h3>
              <hr />
              <ul>
                {t.items.map(item => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
