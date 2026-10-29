import type { CSSProperties } from 'react'
import { DIFFERENTIALS } from '../data/site'
import { Icon } from './Icon'

export function Differentials() {
  return (
    <section className="section differentials" id="diferenciais" aria-labelledby="differentials-title">
      <div className="differentials__grid-lines" aria-hidden="true" />
      <div className="container differentials__inner">
        <header className="differentials__head">
          <div>
            <p className="eyebrow eyebrow--on-dark" data-reveal="left">
              Por que a Prontto
            </p>
            <h2
              className="section-title"
              id="differentials-title"
              data-reveal="left"
              style={{ '--reveal-delay': '80ms' } as CSSProperties}
            >
              Mais organização em cada etapa da sua obra.
            </h2>
          </div>
          <p
            className="differentials__lead"
            data-reveal="right"
            style={{ '--reveal-delay': '160ms' } as CSSProperties}
          >
            Um processo conduzido com clareza, acompanhamento e atenção ao que realmente importa para o resultado final.
          </p>
        </header>

        <div className="differentials__grid">
          {DIFFERENTIALS.map((differential, index) => (
            <article
              className="differential"
              key={differential.title}
              data-reveal="up"
              style={{ '--reveal-delay': `${100 + (index % 4) * 70}ms` } as CSSProperties}
            >
              <span className="differential__icon">
                <Icon name={differential.icon} size={22} />
              </span>
              <h3>{differential.title}</h3>
              <p>{differential.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
