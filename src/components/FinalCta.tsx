import type { CSSProperties } from 'react'
import { CONTACT_MESSAGE, DEFAULT_WHATSAPP_MESSAGE, WHATSAPP_DISPLAY } from '../data/site'
import { whatsappLink } from '../lib/whatsapp'
import { Icon } from './Icon'

export function FinalCta() {
  return (
    <section className="cta-final" id="contato" aria-labelledby="cta-final-title">
      <img
        className="cta-final__bg"
        src="/images/final-cta.jpg"
        alt=""
        width={1800}
        height={1000}
        loading="lazy"
        decoding="async"
        aria-hidden="true"
        data-parallax="0.06"
      />
      <div className="cta-final__overlay" aria-hidden="true" />

      <div className="container cta-final__content">
        <p className="eyebrow eyebrow--on-dark" data-reveal="up">
          Próximo passo
        </p>
        <h2 className="cta-final__title" id="cta-final-title" data-reveal="blur">
          Vamos tirar seu projeto do papel?
        </h2>
        <p className="cta-final__text" data-reveal="up" style={{ '--reveal-delay': '100ms' } as CSSProperties}>
          Conte à Prontto o que você precisa transformar. Vamos entender sua necessidade e orientar os próximos passos
          para sua obra.
        </p>

        <div className="cta-final__actions">
          <a
            className="btn btn--primary"
            href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            data-reveal="up"
            data-magnetic="9"
            style={{ '--reveal-delay': '220ms' } as CSSProperties}
          >
            <Icon name="whatsapp" size={19} />
            Solicitar orçamento pelo WhatsApp
            <Icon name="arrow-up-right" size={18} />
          </a>
          <a
            className="btn btn--ghost-light"
            href={whatsappLink(CONTACT_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            data-reveal="up"
            style={{ '--reveal-delay': '340ms' } as CSSProperties}
          >
            Falar com a Prontto
            <Icon name="arrow-right" size={18} />
          </a>
        </div>

        <div className="cta-final__meta" data-reveal="up" style={{ '--reveal-delay': '420ms' } as CSSProperties}>
          <a href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)} target="_blank" rel="noopener noreferrer">
            <Icon name="whatsapp" size={16} />
            {WHATSAPP_DISPLAY}
          </a>
          <span aria-hidden="true" />
          <p>
            <Icon name="pin" size={16} />
            Pernambuco
          </p>
        </div>
      </div>
    </section>
  )
}
