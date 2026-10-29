import type { CSSProperties } from 'react'
import { REGION_MESSAGE } from '../data/site'
import { whatsappLink } from '../lib/whatsapp'
import { Icon } from './Icon'

export function Region() {
  return (
    <section className="section region" id="pernambuco" aria-labelledby="region-title">
      <div className="container region__grid">
        <div className="region__content">
          <p className="eyebrow" data-reveal="left">
            Onde atendemos
          </p>
          <h2 className="section-title" id="region-title" data-reveal="blur">
            Seu próximo projeto começa em Pernambuco.
          </h2>
          <p className="section-lead" data-reveal="up" style={{ '--reveal-delay': '100ms' } as CSSProperties}>
            A Prontto Engenharia &amp; Reforma oferece soluções para obras e reformas em Pernambuco. Entre em contato para
            apresentar seu projeto e confirmar a disponibilidade de atendimento na sua cidade.
          </p>
          <a
            className="btn btn--primary"
            href={whatsappLink(REGION_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            data-reveal="up"
            data-magnetic="7"
            style={{ '--reveal-delay': '200ms' } as CSSProperties}
          >
            <Icon name="whatsapp" size={19} />
            Consultar disponibilidade para minha obra
          </a>
          <p className="region__note" data-reveal="up" style={{ '--reveal-delay': '300ms' } as CSSProperties}>
            Atendimento sujeito à confirmação de disponibilidade para cada projeto.
          </p>
        </div>

        <div className="region__visual" data-reveal="scale" style={{ '--reveal-delay': '160ms' } as CSSProperties}>
          <iframe
            className="region__map-embed"
            title="Mapa do estado de Pernambuco"
            src="https://www.google.com/maps?ll=-8.28,-37.05&z=7&hl=pt-BR&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <div className="region__map-shade" aria-hidden="true" />

          <div className="region__map-label">
            <span className="region__map-label-dot" aria-hidden="true" />
            Pernambuco · PE
          </div>

          <div className="region__pin-card">
            <span className="region__pin-icon">
              <Icon name="pin" size={21} />
            </span>
            <span>
              <strong>Pernambuco</strong>
              <small>Atendimento sob consulta</small>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
