import type { CSSProperties } from 'react'
import { SERVICE_GROUPS } from '../data/site'
import { whatsappLink } from '../lib/whatsapp'
import { Icon } from './Icon'

export function Services() {
  return (
    <section className="section services" id="servicos" aria-labelledby="services-title">
      <div className="container">
        <header className="section-head">
          <p className="eyebrow" data-reveal="left">
            O que fazemos
          </p>
          <div className="section-head__row">
            <h2 className="section-title" id="services-title" data-reveal="blur">
              Soluções completas para sua obra.
            </h2>
            <p className="section-lead" data-reveal="up" style={{ '--reveal-delay': '120ms' } as CSSProperties}>
              Do serviço pontual à reforma completa, encontre a solução ideal para o seu projeto.
            </p>
          </div>
        </header>

        <div className="service-groups">
          {SERVICE_GROUPS.map((group) => (
            <div className="service-group" key={group.id}>
              <header className="service-group__head" data-reveal="left">
                <span className="service-group__number">{group.number}</span>
                <div>
                  <h3>{group.title}</h3>
                  <p>{group.intro}</p>
                </div>
              </header>

              <div className={`services-grid services-grid--${group.services.length}`}>
                {group.services.map((service, index) => (
                  <article
                    className="service-card"
                    key={service.title}
                    data-reveal="scale"
                    data-tilt
                    style={{ '--reveal-delay': `${(index % 3) * 80}ms` } as CSSProperties}
                  >
                    <div className="service-card__top">
                      <span className="service-card__icon">
                        <Icon name={service.icon} size={23} />
                      </span>
                      <span className="service-card__index" aria-hidden="true">
                        {group.number}.{String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <h4>{service.title}</h4>
                    <p className="service-card__description">{service.description}</p>

                    <ul className="service-card__list">
                      {service.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>

                    <a
                      className="service-card__link"
                      href={whatsappLink(service.message)}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Solicitar orçamento para ${service.title}`}
                    >
                      Solicitar orçamento
                      <Icon name="arrow-up-right" size={17} />
                    </a>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
