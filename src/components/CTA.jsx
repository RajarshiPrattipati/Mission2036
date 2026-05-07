import { useRef, useEffect } from 'react'
import anime from 'animejs'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function CTA() {
  const ref = useRef(null)
  const titleRef = useRef(null)
  useScrollReveal(ref)

  useEffect(() => {
    const el = titleRef.current
    if (!el) return
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return
        anime({
          targets: el.querySelectorAll('.l1, .l2'),
          opacity:    [0, 1],
          translateY: [40, 0],
          delay:      anime.stagger(150),
          duration:   900,
          easing:     'cubicBezier(0.16,1,0.3,1)',
        })
        observer.unobserve(el)
      })
    }, { threshold: 0.3 })
    el.querySelectorAll('.l1,.l2').forEach(el => { el.style.opacity = '0' })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const scrollTo = id => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="cta" ref={ref}>
      <div className="cta-grid" />
      <div className="container">
        <div className="cta-content">
          <div className="js-reveal"><span className="label">Join the Movement</span></div>

          <h2 className="cta-title" ref={titleRef}>
            <span className="l1">If not now, when?</span>
            <span className="l2 gradient-text">If not us, who?</span>
          </h2>

          <p className="cta-sub js-reveal">India deserves a football system that believes in excellence.</p>
          <p className="cta-sub2 js-reveal">We are looking for patriots, visionaries, and nation-builders.</p>
          <div className="cta-rule js-reveal" />
          <p className="cta-final js-reveal">"Let us build the golden age of Indian football — together."</p>

          <div className="cta-btns js-reveal">
            <a href="mailto:yazhifctn@gmail.com" className="btn btn-primary">Get in Touch ↗</a>
            <a
              href="#sponsorship"
              className="btn btn-ghost"
              onClick={e => { e.preventDefault(); scrollTo('sponsorship') }}
            >
              View Sponsorship Tiers
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
