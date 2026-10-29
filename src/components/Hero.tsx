import type { CSSProperties } from 'react'
import { DEFAULT_WHATSAPP_MESSAGE, HERO_DIFFERENTIALS } from '../data/site'
import { whatsappLink } from '../lib/whatsapp'
import { Icon } from './Icon'
import { TypewriterTitle } from './TypewriterTitle'

export function Hero() {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="hero__backdrop" aria-hidden="true">
        <div className="hero__grid-lines" />
        <div className="hero__glow" />
        <svg className="hero__blueprint" viewBox="0 0 360 240" fill="none" aria-hidden="true">
          <path d="M22 218V92L130 28l108 64v126M22 92h216M130 28v190M54 218v-82h52v82M154 136h62v82M154 136v82" />
          <path d="M22 218h316M204 92v44M246 116h54v102" />
        </svg>
      </div>

      <div className="container hero__grid">
        <div className="hero__content">
          <p className="eyebrow" data-reveal="left">
            Engenharia <span aria-hidden="true">•</span> Reformas <span aria-hidden="true">•</span> Gerenciamento de obras
          </p>

          <h1 className="hero__title" id="hero-title">
            <TypewriterTitle />
          </h1>

          <p className="hero__lead" data-reveal="up" style={{ '--reveal-delay': '900ms' } as CSSProperties}>
            Da primeira etapa à entrega final, a Prontto Engenharia &amp; Reforma cuida do planejamento, da execução e dos
            detalhes para transformar seu espaço com segurança, organização e qualidade.
          </p>

          <div className="hero__actions">
            <a
              className="btn btn--primary"
              href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              data-reveal="up"
              data-magnetic="9"
              style={{ '--reveal-delay': '1120ms' } as CSSProperties}
            >
              <Icon name="whatsapp" size={19} />
              Solicitar orçamento pelo WhatsApp
              <Icon name="arrow-up-right" size={18} />
            </a>
            <a
              className="btn btn--outline"
              href="#servicos"
              data-reveal="up"
              style={{ '--reveal-delay': '1240ms' } as CSSProperties}
            >
              Conheça nossos serviços
              <Icon name="arrow-right" size={18} />
            </a>
          </div>

          <ul className="hero__points" data-reveal="up" style={{ '--reveal-delay': '1420ms' } as CSSProperties}>
            {HERO_DIFFERENTIALS.map((item) => (
              <li key={item}>
                <span className="hero__point-icon">
                  <Icon name="check" size={14} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="hero__visual" data-reveal="scale" style={{ '--reveal-delay': '260ms' } as CSSProperties}>
          <div className="hero__frame" aria-hidden="true" />
          <figure className="hero__figure" data-parallax="0.035">
            <img
              src="/images/fotohero2.jpeg"
              alt="Engenheiro da Prontto com capacete e uniforme, segurando um tablet em uma obra"
              width={1024}
              height={1024}
              fetchPriority="high"
              decoding="async"
            />
          </figure>

          <div className="hero__card">
            <span className="hero__card-icon">
              <Icon name="compass" size={22} />
            </span>
            <div>
              <strong>Do planejamento à entrega</strong>
              <span>Gestão de obras residenciais e comerciais</span>
            </div>
          </div>

          <div className="hero__location">
            <span className="hero__location-dot" aria-hidden="true" />
            Pernambuco
          </div>
        </div>
      </div>
    </section>
  )
}
