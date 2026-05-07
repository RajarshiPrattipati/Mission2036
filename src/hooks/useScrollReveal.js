import { useEffect } from 'react'
import anime from 'animejs'

/**
 * Attach IntersectionObserver-driven Anime.js reveal to all .js-reveal elements
 * under the given containerRef. Call once after mount.
 */
export function useScrollReveal(containerRef) {
  useEffect(() => {
    const root = containerRef ? containerRef.current : document
    if (!root) return

    const reveals = root.querySelectorAll ? root.querySelectorAll('.js-reveal') : document.querySelectorAll('.js-reveal')

    const childSelectors = [
      '.stat-card','.gap-card','.pillar','.dev-card','.feat',
      '.coach-card','.scard','.pv-card','.gov-card','.quality',
      '.habit-card','.eco-item','.tl-phase','.inv-tag',
    ].join(',')

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return
        const el = entry.target
        const children = el.querySelectorAll(childSelectors)

        if (children.length > 1) {
          el.style.opacity = '1'
          children.forEach(c => { c.style.opacity = '0'; c.style.transform = 'translateY(30px)' })
          anime({
            targets: children,
            opacity: [0, 1],
            translateY: [30, 0],
            duration: 700,
            delay: anime.stagger(80),
            easing: 'cubicBezier(0.16,1,0.3,1)',
          })
        } else {
          anime({
            targets: el,
            opacity: [0, 1],
            translateY: [32, 0],
            duration: 750,
            easing: 'cubicBezier(0.16,1,0.3,1)',
          })
        }
        observer.unobserve(el)
      })
    }, { threshold: 0.08, rootMargin: '0px 0px -50px 0px' })

    reveals.forEach(el => {
      el.style.opacity = '0'
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [containerRef])
}

/**
 * Trigger an Anime.js animation when the given element enters the viewport.
 * animFn receives the element and returns an anime config object.
 */
export function useOnVisible(ref, animFn, options = {}) {
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return
        anime(animFn(el))
        observer.unobserve(el)
      })
    }, { threshold: options.threshold ?? 0.3, rootMargin: options.rootMargin ?? '0px' })
    observer.observe(el)
    return () => observer.disconnect()
  }, [ref, animFn, options.threshold, options.rootMargin])
}
