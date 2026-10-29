import type { CSSProperties } from 'react'
import { MODALITIES } from '../data/site'
import { whatsappLink } from '../lib/whatsapp'
import { Icon } from './Icon'

export function Modalities() {
  return (
    <section className="section modalities" id="modalidades" aria-labelledby="modalities-title">
      <div className="container">
        <header className="section-head section-head--center">
          <p className="eyebrow" data-reveal="up">
            Modalidades de contratação
          </p>
          <h2 className="section-title" id="modalities-title" data-reveal="blur" style={{ '--reveal-delay': '80ms' } as CSSProperties}>
            Você escolhe o nível de gestão.
            <br />
            Nós planejamos a solução.
          </h2>
          <p className="section-lead" data-reveal="up" style={{ '--reveal-delay': '180ms' } as CSSProperties}>
            Contrate conforme a necessidade da sua obra, com escopo e condições definidos previamente.
          </p>
        </header>

        <div className="modalities-grid">
          {MODALITIES.map((modality, index) => (
            <article
              className={`modality-card${modality.featured ? ' modality-card--featured' : ''}`}
              key={modality.id}
              data-reveal="scale"
              style={{ '--reveal-delay': `${index * 110}ms` } as CSSProperties}
            >
              {modality.featured && <span className="modality-card__badge">Maior nível de gestão</span>}

              <div className="modality-card__head">
                <span className="modality-card__icon">
                  <Icon name={modality.icon} size={24} />
                </span>
                <span className="modality-card__label">{modality.label}</span>
              </div>

              <h3>{modality.name}</h3>
              <p className="modality-card__description">{modality.description}</p>

              <ul className="modality-card__list">
                {modality.highlights.map((highlight) => (
                  <li key={highlight}>
                    <Icon name="check" size={15} />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <a
                className={`btn ${modality.featured ? 'btn--primary' : 'btn--outline'} btn--block modality-card__cta`}
                href={whatsappLink(modality.message)}
                target="_blank"
                rel="noopener noreferrer"
                data-magnetic={modality.featured ? '6' : undefined}
              >
                {modality.cta}
                <Icon name="arrow-up-right" size={18} />
              </a>
            </article>
          ))}
        </div>

        <p className="modalities__note" data-reveal="up" style={{ '--reveal-delay': '260ms' } as CSSProperties}>
          Escopo, materiais, responsabilidades e condições são definidos previamente em proposta.
        </p>
      </div>
    </section>
  )
}
