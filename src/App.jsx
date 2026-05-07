import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HardTruth from './components/HardTruth'
import TheGap from './components/TheGap'
import Vision from './components/Vision'
import Age13 from './components/Age13'
import Program from './components/Program'
import Selection from './components/Selection'
import Ecosystem from './components/Ecosystem'
import Habits from './components/Habits'
import Coaching from './components/Coaching'
import Pathway from './components/Pathway'
import Beyond from './components/Beyond'
import Investment from './components/Investment'
import Sponsorship from './components/Sponsorship'
import PartnerValue from './components/PartnerValue'
import Timeline from './components/Timeline'
import Governance from './components/Governance'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  // Cursor glow
  useEffect(() => {
    const glow = document.getElementById('cursorGlow')
    if (!glow) return
    const onMove = e => {
      glow.style.left = e.clientX + 'px'
      glow.style.top  = e.clientY + 'px'
    }
    document.addEventListener('mousemove', onMove)
    return () => document.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <>
      <div className="cursor-glow" id="cursorGlow" />
      <Navbar />
      <main>
        <Hero />
        <HardTruth />
        <TheGap />
        <Vision />
        <Age13 />
        <Program />
        <Selection />
        <Ecosystem />
        <Habits />
        <Coaching />
        <Pathway />
        <Beyond />
        <Investment />
        <Sponsorship />
        <PartnerValue />
        <Timeline />
        <Governance />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
