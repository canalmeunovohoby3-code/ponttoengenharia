import type { CSSProperties } from 'react'
import { DEFAULT_WHATSAPP_MESSAGE, PROCESS_STEPS } from '../data/site'
import { whatsappLink } from '../lib/whatsapp'
import { Icon } from './Icon'

export function Process() {
  return (
    <section className="section process" id="como-funciona" aria-labelledby="process-title">
      <div className="container">
        <header className="section-head process__head">
          <div>
            <p className="eyebrow" data-reveal="left">
              Como funciona
            </p>
            <h2 className="section-title" id="process-title" data-reveal="blur">
              Da primeira conversa à entrega da obra.
            </h2>
          </div>
          <a
            className="text-link"
            href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            data-reveal="up"
            style={{ '--reveal-delay': '120ms' } as CSSProperties}
          >
            Começar pelo WhatsApp
            <Icon name="arrow-up-right" size={18} />
          </a>
        </header>

        <ol className="process__steps" data-reveal="timeline">
          {PROCESS_STEPS.map((step, index) => (
            <li
              className="process-step"
              key={step.number}
              data-reveal="up"
              style={{ '--reveal-delay': `${index * 110}ms` } as CSSProperties}
            >
              <div className="process-step__marker">
                <span>{step.number}</span>
                <span className="process-step__icon">
                  <Icon name={step.icon} size={21} />
                </span>
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
