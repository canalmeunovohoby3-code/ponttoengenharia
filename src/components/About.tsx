import type { CSSProperties } from 'react'
import { ABOUT_PILLARS } from '../data/site'
import { Icon } from './Icon'

export function About() {
  return (
    <section className="section about" id="sobre" aria-labelledby="about-title">
      <div className="container about__grid">
        <div className="about__visual">
          <div className="about__frame" aria-hidden="true" />
          <figure className="about__main-image" data-reveal="clip">
            <img
              src="/images/aprontto.jpeg"
              alt="Obra com a marca Prontto Engenharia & Reforma aplicada na fachada e veículo da empresa"
              width={1024}
              height={1024}
              loading="lazy"
              decoding="async"
            />
          </figure>
          <figure
            className="about__detail-image"
            data-reveal="scale"
            style={{ '--reveal-delay': '240ms' } as CSSProperties}
          >
            <img
              src="/images/about.jpg"
              alt="Equipe de construção civil reunida em canteiro de obras, com estrutura e planejamento à vista"
              width={1200}
              height={1400}
              loading="lazy"
              decoding="async"
            />
          </figure>
          <div className="about__stamp" data-reveal="up" style={{ '--reveal-delay': '420ms' } as CSSProperties}>
            <Icon name="blueprint" size={20} />
            <span>
              Planejamento
              <small>Gestão e execução</small>
            </span>
          </div>
        </div>

        <div className="about__content">
          <p className="eyebrow" data-reveal="left">
            A Prontto
          </p>
          <h2 className="section-title" id="about-title" data-reveal="blur">
            Mais do que executar obras, entregamos soluções.
          </h2>
          <p className="section-lead" data-reveal="up" style={{ '--reveal-delay': '100ms' } as CSSProperties}>
            A Prontto Engenharia &amp; Reforma atua com soluções completas para reformas, adequações de ambientes e
            serviços de engenharia. Nosso trabalho integra planejamento, organização das etapas, coordenação de
            profissionais e atenção aos acabamentos para oferecer mais tranquilidade ao cliente durante a realização da
            obra.
          </p>

          <div className="about__pillars">
            {ABOUT_PILLARS.map((pillar, index) => (
              <article
                className="about-pillar"
                key={pillar.title}
                data-reveal="left"
                style={{ '--reveal-delay': `${180 + index * 90}ms` } as CSSProperties}
              >
                <span className="about-pillar__number">{pillar.number}</span>
                <span className="about-pillar__icon">
                  <Icon name={pillar.icon} size={21} />
                </span>
                <div>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.description}</p>
                </div>
              </article>
            ))}
          </div>

          <a
            className="text-link"
            href="#modalidades"
            data-reveal="up"
            style={{ '--reveal-delay': '420ms' } as CSSProperties}
          >
            Conheça as modalidades de contratação
            <Icon name="arrow-right" size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}
