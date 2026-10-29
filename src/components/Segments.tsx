import type { CSSProperties } from 'react'
import { SEGMENTS } from '../data/site'

export function Segments() {
  return (
    <section className="section segments" id="atuacao" aria-labelledby="segments-title">
      <div className="container">
        <header className="section-head">
          <p className="eyebrow" data-reveal="left">
            Frentes de atuação
          </p>
          <div className="section-head__row">
            <h2 className="section-title" id="segments-title" data-reveal="blur">
              Engenharia aplicada a diferentes necessidades.
            </h2>
          </div>
        </header>

        <div className="segments-grid">
          {SEGMENTS.map((segment, index) => (
            <article
              className="segment-card"
              key={segment.title}
              data-reveal="clip"
              style={{ '--reveal-delay': `${index * 110}ms` } as CSSProperties}
            >
              <img
                src={segment.image}
                alt={segment.alt}
                width={segment.width}
                height={segment.height}
                loading="lazy"
                decoding="async"
              />
              <div className="segment-card__shade" aria-hidden="true" />
              <span className="segment-card__number">{String(index + 1).padStart(2, '0')}</span>
              <div className="segment-card__content">
                <h3>{segment.title}</h3>
                <p>{segment.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
