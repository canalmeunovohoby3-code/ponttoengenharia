import { useEffect } from 'react'
import { prefersReducedMotion } from '../lib/motionPreference'

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value))
}

export function usePremiumMotion() {
  useEffect(() => {
    const reduceMotion = prefersReducedMotion()
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const cleanups: Array<() => void> = []

    if (!reduceMotion && canHover) {
      document.querySelectorAll<HTMLElement>('[data-magnetic]').forEach((element) => {
        const strength = Number(element.dataset.magnetic) || 8

        const reset = () => {
          element.style.setProperty('--mag-x', '0px')
          element.style.setProperty('--mag-y', '0px')
        }

        const onMove = (event: MouseEvent) => {
          const rect = element.getBoundingClientRect()
          const x = (event.clientX - rect.left - rect.width / 2) / (rect.width / 2)
          const y = (event.clientY - rect.top - rect.height / 2) / (rect.height / 2)

          element.style.setProperty('--mag-x', `${clamp(x * strength, -strength, strength)}px`)
          element.style.setProperty('--mag-y', `${clamp(y * strength, -strength, strength)}px`)
        }

        element.addEventListener('mousemove', onMove)
        element.addEventListener('mouseleave', reset)
        cleanups.push(() => {
          element.removeEventListener('mousemove', onMove)
          element.removeEventListener('mouseleave', reset)
          reset()
        })
      })

      document.querySelectorAll<HTMLElement>('[data-tilt]').forEach((element) => {
        const maxTilt = 3.5

        const reset = () => {
          element.style.setProperty('--tilt-x', '0deg')
          element.style.setProperty('--tilt-y', '0deg')
          element.style.setProperty('--glow-x', '50%')
          element.style.setProperty('--glow-y', '50%')
        }

        const onMove = (event: MouseEvent) => {
          const rect = element.getBoundingClientRect()
          const x = clamp((event.clientX - rect.left) / rect.width, 0, 1)
          const y = clamp((event.clientY - rect.top) / rect.height, 0, 1)

          element.style.setProperty('--tilt-x', `${(0.5 - y) * maxTilt * 2}deg`)
          element.style.setProperty('--tilt-y', `${(x - 0.5) * maxTilt * 2}deg`)
          element.style.setProperty('--glow-x', `${x * 100}%`)
          element.style.setProperty('--glow-y', `${y * 100}%`)
        }

        element.addEventListener('mousemove', onMove)
        element.addEventListener('mouseleave', reset)
        cleanups.push(() => {
          element.removeEventListener('mousemove', onMove)
          element.removeEventListener('mouseleave', reset)
          reset()
        })
      })
    }

    const parallaxElements = Array.from(document.querySelectorAll<HTMLElement>('[data-parallax]'))

    if (!reduceMotion && parallaxElements.length > 0) {
      let frame = 0

      const update = () => {
        frame = 0
        const viewportHeight = window.innerHeight

        parallaxElements.forEach((element) => {
          const rect = element.getBoundingClientRect()

          if (rect.bottom < -120 || rect.top > viewportHeight + 120) return

          const speed = Number(element.dataset.parallax) || 0.05
          const center = rect.top + rect.height / 2 - viewportHeight / 2
          const offset = clamp(-center * speed, -34, 34)

          element.style.setProperty('--parallax-y', `${offset}px`)
        })
      }

      const schedule = () => {
        if (frame) return
        frame = window.requestAnimationFrame(update)
      }

      update()
      window.addEventListener('scroll', schedule, { passive: true })
      window.addEventListener('resize', schedule)
      window.addEventListener('load', schedule)

      cleanups.push(() => {
        window.cancelAnimationFrame(frame)
        window.removeEventListener('scroll', schedule)
        window.removeEventListener('resize', schedule)
        window.removeEventListener('load', schedule)
      })
    }

    return () => {
      cleanups.forEach((cleanup) => cleanup())
    }
  }, [])
}
