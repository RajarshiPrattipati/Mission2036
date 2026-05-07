import { useRef } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const HABITS = [
  { icon: '🥗', title: 'Customized Nutrition',        body: "A certified nutrition plan aligned to each player's growth stage, energy demands, and recovery. What you eat at 13–16 shapes athletic potential for life." },
  { icon: '📊', title: 'Growth Monitoring',           body: 'Regular tracking of body composition, strength baselines, and physical development ensures training stays age-appropriate, safe, and maximally effective.' },
  { icon: '🏋️', title: 'Strength & Conditioning',    body: 'Progressive movement, power, mobility, and physical robustness are built systematically — not improvised. The foundation for a long professional career.' },
  { icon: '😴', title: 'Recovery',                    body: 'Sleep, active recovery, injury prevention, and load management are treated as training inputs — not afterthoughts. Adaptation happens in rest, not just in reps.' },
]

export default function Habits() {
  const ref = useRef(null)
  useScrollReveal(ref)

  return (
    <section className="section" id="habits" ref={ref}>
      <div className="container">
        <div className="section-head js-reveal">
          <span className="label">Performance</span>
          <h2 className="section-title">Building Elite Habits Early</h2>
          <p className="section-sub">
            Elite environments are not only about football sessions. Habits around food, rest, and physical
            development create a durable performance base that outlasts any single training method.
          </p>
        </div>

        <div className="habits-grid">
          {HABITS.map(h => (
            <div key={h.title} className="habit-card js-reveal">
              <div className="habit-icon">{h.icon}</div>
              <h3>{h.title}</h3>
              <p>{h.body}</p>
            </div>
          ))}
        </div>

        <div className="why-box js-reveal">
          <div className="why-label">Why This Matters</div>
          <div className="why-text">
            Elite environments are not only about football sessions. Habits around food, rest, body development,
            and psychological recovery create a durable performance base. Players who build these habits at 13
            arrive at 18 ahead of those who don't — not by talent, but by system. This is the competitive edge
            that Mission 2036 builds into every single day.
          </div>
        </div>

        <p className="italic-callout js-reveal" style={{ textAlign: 'right' }}>"Elite habits begin early."</p>
      </div>
    </section>
  )
}
