import { useEffect, useState } from 'react'
import { DEFAULT_WHATSAPP_MESSAGE } from '../data/site'
import { whatsappLink } from '../lib/whatsapp'
import { Icon } from './Icon'

export function WhatsAppFloat() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 180)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a
      className={`whatsapp-float${visible ? ' is-visible' : ''}`}
      href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Prontto Engenharia & Reforma pelo WhatsApp"
    >
      <span className="whatsapp-float__icon" aria-hidden="true">
        <Icon name="whatsapp" size={29} />
      </span>
      <span className="whatsapp-float__tooltip" aria-hidden="true">
        Fale com a Prontto
      </span>
    </a>
  )
}
