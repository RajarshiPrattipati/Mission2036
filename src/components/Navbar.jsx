import { useEffect, useState } from 'react'
import yazhiLogo from '../assets/yazhi-logo.webp'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    setOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
      <div className="container">
        <div className="nav-inner">
          <a href="#hero" className="nav-logo" onClick={e => { e.preventDefault(); scrollTo('hero') }}>
            <img src={yazhiLogo} alt="Yazhi FC" className="nav-logo-badge" />
            <div className="nav-logo-text">
              <div className="club">Yazhi Football Club</div>
              <div className="mission">Mission 2036</div>
            </div>
          </a>

          <ul className={`nav-links${open ? ' open' : ''}`}>
            {[
              ['hard-truth', 'The Problem'],
              ['program',    'Program'],
              ['sponsorship','Sponsor'],
              ['timeline',   'Vision'],
            ].map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`} onClick={e => { e.preventDefault(); scrollTo(id) }}>{label}</a>
              </li>
            ))}
            <li>
              <a href="#cta" className="nav-cta" onClick={e => { e.preventDefault(); scrollTo('cta') }}>
                Join the Movement
              </a>
            </li>
          </ul>

          <button className="nav-menu-btn" aria-label="Menu" onClick={() => setOpen(o => !o)}>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open
                ? <><line x1="3" y1="3" x2="19" y2="19"/><line x1="19" y1="3" x2="3" y2="19"/></>
                : <><line x1="2" y1="6"  x2="20" y2="6"/><line x1="2" y1="11" x2="20" y2="11"/><line x1="2" y1="16" x2="20" y2="16"/></>
              }
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}
