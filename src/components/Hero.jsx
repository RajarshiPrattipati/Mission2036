import { useEffect } from 'react'
import anime from 'animejs'

const MISSION_CHARS = 'MISSION'.split('')
const YEAR_CHARS    = '2036'.split('')

export default function Hero() {
  useEffect(() => {
    // Headline character stagger
    anime({
      targets: '#heroMission .char',
      translateY: [60, 0],
      opacity:    [0, 1],
      duration:   900,
      delay:      anime.stagger(60, { start: 300 }),
      easing:     'cubicBezier(0.16,1,0.3,1)',
    })
    anime({
      targets: '#heroYear .char',
      translateY: [80, 0],
      opacity:    [0, 1],
      scale:      [0.8, 1],
      duration:   900,
      delay:      anime.stagger(80, { start: 700 }),
      easing:     'cubicBezier(0.16,1,0.3,1)',
    })

    // Supporting elements
    anime({
      targets: ['#heroPill', '#heroEyebrow'],
      translateY: [20, 0],
      opacity:    [0, 1],
      duration:   800,
      delay:      anime.stagger(100, { start: 200 }),
      easing:     'cubicBezier(0.16,1,0.3,1)',
    })
    anime({
      targets: ['#heroTagline', '#heroByline', '#heroTags', '#heroBtns', '#heroScroll'],
      translateY: [24, 0],
      opacity:    [0, 1],
      duration:   800,
      delay:      anime.stagger(80, { start: 900 }),
      easing:     'cubicBezier(0.16,1,0.3,1)',
    })

    // Orbs entrance
    anime({
      targets: '.orb',
      scale:   [0, 1],
      opacity: [0, 1],
      duration: 2000,
      delay:    anime.stagger(200, { start: 400 }),
      easing:   'easeOutExpo',
    })

    // Orb breathing loops
    anime({ targets: '.orb-1', scale: [1, 1.08, 1], duration: 8000, loop: true, easing: 'easeInOutSine', direction: 'alternate' })
    anime({ targets: '.orb-2', scale: [1, 1.12, 1], duration: 6000, loop: true, easing: 'easeInOutSine', direction: 'alternate', delay: 1000 })
    anime({ targets: '.orb-3', scale: [1, 1.15, 1], duration: 7000, loop: true, easing: 'easeInOutSine', direction: 'alternate', delay: 2000 })

    // Parallax grid on scroll
    const gridEl = document.querySelector('.hero-grid-bg')
    const onScroll = () => { if (gridEl) gridEl.style.transform = `translateY(${window.scrollY * 0.25}px)` }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="hero">
      <div className="hero-bg" />
      <div className="hero-grid-bg" />
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      <div className="container">
        <div className="hero-content">
          <div className="hero-pill" id="heroPill" style={{ opacity: 0 }}>
            <div className="hero-pill-dot" />
            <span>Yazhi Football Club · Siruseri, Chennai</span>
          </div>

          <div className="hero-eyebrow" id="heroEyebrow" style={{ opacity: 0 }}>
            Residential Elite Development Program
          </div>

          <h1 className="hero-headline">
            <span className="word-mission" id="heroMission">
              {MISSION_CHARS.map((c, i) => (
                <span key={i} className="char" style={{ opacity: 0 }}>{c}</span>
              ))}
            </span>
            <span className="word-year" id="heroYear">
              {YEAR_CHARS.map((c, i) => (
                <span key={i} className="char" style={{ opacity: 0 }}>{c}</span>
              ))}
            </span>
          </h1>

          <p className="hero-tagline" id="heroTagline" style={{ opacity: 0 }}>
            Building India's Next Generation of International Footballers
          </p>
          <p className="hero-byline" id="heroByline" style={{ opacity: 0 }}>
            A Residential Elite Development Program by Yazhi Football Club
          </p>

          <div className="tag-row" id="heroTags" style={{ opacity: 0 }}>
            {['Elite development','Scholarship support','AFC-licensed coaches','Long-horizon pipeline','Nation-building'].map(t => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>

          <div className="btn-row" id="heroBtns" style={{ opacity: 0 }}>
            <a href="#sponsorship" className="btn btn-primary" onClick={e => { e.preventDefault(); scrollTo('sponsorship') }}>
              Become a Sponsor ↗
            </a>
            <a href="#program" className="btn btn-ghost" onClick={e => { e.preventDefault(); scrollTo('program') }}>
              Explore the Program
            </a>
          </div>
        </div>
      </div>

      <div className="hero-scroll-hint" id="heroScroll" style={{ opacity: 0 }}>
        <div className="scroll-bar" />
        <span>Scroll</span>
      </div>
    </section>
  )
}
