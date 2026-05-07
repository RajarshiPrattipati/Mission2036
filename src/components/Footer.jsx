import yazhiLogo from '../assets/yazhi-logo.webp'

export default function Footer() {
  const scrollTo = id => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <footer id="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="f-brand">
            <div className="f-logo">
              <img src={yazhiLogo} alt="Yazhi FC" className="f-logo-badge" />
              <div className="f-logo-text">
                <div className="c">Yazhi Football Club</div>
                <div className="m">Mission 2036</div>
              </div>
            </div>
            <p>
              A residential elite development program designed to create India's next generation
              of international footballers — from Tamil Nadu to the world stage.
            </p>
            <div className="f-contact">
              <a href="mailto:yazhifctn@gmail.com">
                <span className="f-ico">✉</span>yazhifctn@gmail.com
              </a>
              <a href="tel:+919940151803">
                <span className="f-ico">☎</span>+91-9940151803
              </a>
              <a href="#">
                <span className="f-ico">📍</span>Siruseri, Chennai – 600130
              </a>
            </div>
          </div>

          <div className="f-col">
            <h5>Program</h5>
            <ul>
              {[
                ['program',   'The Academy'],
                ['selection', 'Selection Process'],
                ['ecosystem', 'Residential Life'],
                ['habits',    'Elite Habits'],
                ['coaching',  'Coaching & Education'],
                ['pathway',   'Competitive Pathway'],
              ].map(([id, label]) => (
                <li key={id}>
                  <a href={`#${id}`} onClick={e => { e.preventDefault(); scrollTo(id) }}>{label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="f-col">
            <h5>Partnership</h5>
            <ul>
              {[
                ['investment',    'Investment Case'],
                ['sponsorship',   'Sponsorship Tiers'],
                ['partner-value', 'Why Sponsor'],
                ['governance',    'Governance'],
                ['timeline',      '10-Year Vision'],
                ['cta',           'Contact Us'],
              ].map(([id, label]) => (
                <li key={id}>
                  <a href={`#${id}`} onClick={e => { e.preventDefault(); scrollTo(id) }}>{label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="f-bottom">
          <p>© 2024 Yazhi Football Club · Mission 2036 · Siruseri, Chennai</p>
          <p>Built for <span>India's football future</span></p>
        </div>
      </div>
    </footer>
  )
}
