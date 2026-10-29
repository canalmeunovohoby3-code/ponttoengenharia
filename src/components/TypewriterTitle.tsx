import { useEffect, useState } from 'react'
import { prefersReducedMotion } from '../lib/motionPreference'

const segments = [
  { text: 'Sua obra ', accent: false },
  { text: 'planejada', accent: true },
  { text: ', gerenciada e entregue com ', accent: false },
  { text: 'excelência.', accent: true },
] as const

const fullText = segments.map((segment) => segment.text).join('')
const segmentOffsets = segments.map((_, index) =>
  segments.slice(0, index).reduce((total, segment) => total + segment.text.length, 0),
)

const START_DELAY = 300
const TYPE_DELAY = 28
const DELETE_DELAY = 15
const HOLD_FULL = 2400
const HOLD_EMPTY = 900

export function TypewriterTitle() {
  const [reducedMotion] = useState(prefersReducedMotion)
  const [visibleChars, setVisibleChars] = useState(() => (prefersReducedMotion() ? fullText.length : 0))

  useEffect(() => {
    if (reducedMotion) {
      setVisibleChars(fullText.length)
      return
    }

    let cancelled = false
    let timer = 0
    let current = 0
    let deleting = false

    setVisibleChars(0)

    const tick = () => {
      if (cancelled) return

      if (!deleting) {
        current += 1
        setVisibleChars(current)

        if (current >= fullText.length) {
          deleting = true
          timer = window.setTimeout(tick, HOLD_FULL)
        } else {
          timer = window.setTimeout(tick, TYPE_DELAY)
        }

        return
      }

      current -= 1
      setVisibleChars(Math.max(0, current))

      if (current <= 0) {
        deleting = false
        timer = window.setTimeout(tick, HOLD_EMPTY)
      } else {
        timer = window.setTimeout(tick, DELETE_DELAY)
      }
    }

    const startTimer = window.setTimeout(tick, START_DELAY)

    return () => {
      cancelled = true
      window.clearTimeout(startTimer)
      window.clearTimeout(timer)
    }
  }, [reducedMotion])

  const renderSegments = (limit: number) =>
    segments.map((segment, index) => {
      const start = segmentOffsets[index]
      const available = Math.max(0, Math.min(segment.text.length, limit - start))

      if (available === 0) return null

      return (
        <span className={segment.accent ? 'text-accent' : undefined} key={`${segment.text}-${index}`}>
          {segment.text.slice(0, available)}
        </span>
      )
    })

  return (
    <>
      <span className="sr-only">{fullText}</span>
      <span className="hero__title-reserve" aria-hidden="true">
        {renderSegments(fullText.length)}
      </span>
      <span className="hero__title-live" aria-hidden="true">
        {renderSegments(reducedMotion ? fullText.length : visibleChars)}
        {!reducedMotion && <span className="typewriter-cursor" />}
      </span>
    </>
  )
}
