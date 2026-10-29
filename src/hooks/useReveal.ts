import { useEffect } from 'react'
import { prefersReducedMotion } from '../lib/motionPreference'

export function useReveal() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))

    if (elements.length === 0) return

    const reduceMotion = prefersReducedMotion()

    if (reduceMotion || typeof IntersectionObserver === 'undefined') {
      elements.forEach((element) => element.classList.add('is-visible'))
      return
    }

    let observer: IntersectionObserver

    try {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          })
        },
        { threshold: 0.08, rootMargin: '0px 0px -2% 0px' },
      )

      elements.forEach((element) => observer.observe(element))
    } catch {
      elements.forEach((element) => element.classList.add('is-visible'))
      return
    }

    return () => observer.disconnect()
  }, [])
}
