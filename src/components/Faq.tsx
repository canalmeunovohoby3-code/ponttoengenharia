import { useState } from 'react'
import type { CSSProperties } from 'react'
import { DEFAULT_WHATSAPP_MESSAGE, FAQ_ITEMS } from '../data/site'
import { whatsappLink } from '../lib/whatsapp'
import { Icon } from './Icon'

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index))
  }

  return (
    <section className="section faq" id="faq" aria-labelledby="faq-title">
      <div className="container faq__grid">
        <div className="faq__intro">
          <p className="eyebrow" data-reveal="left">
            Dúvidas frequentes
          </p>
          <h2 className="section-title" id="faq-title" data-reveal="blur">
            Perguntas frequentes.
          </h2>
          <p className="section-lead" data-reveal="up" style={{ '--reveal-delay': '100ms' } as CSSProperties}>
            Respostas objetivas para você entender como funciona a contratação e dar o próximo passo com mais segurança.
          </p>

          <div className="faq__support" data-reveal="up" style={{ '--reveal-delay': '180ms' } as CSSProperties}>
            <span className="faq__support-icon">
              <Icon name="message" size={22} />
            </span>
            <div>
              <strong>Ainda tem dúvidas?</strong>
              <p>Fale diretamente com a Prontto pelo WhatsApp.</p>
              <a
                className="text-link"
                href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Iniciar conversa
                <Icon name="arrow-up-right" size={17} />
              </a>
            </div>
          </div>
        </div>

        <div className="faq__list">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index
            const answerId = `faq-answer-${index}`
            const questionId = `faq-question-${index}`

            return (
              <div
                className={`faq-item${isOpen ? ' is-open' : ''}`}
                key={item.question}
                data-reveal="up"
                style={{ '--reveal-delay': `${index * 55}ms` } as CSSProperties}
              >
                <h3>
                  <button
                    className="faq-item__trigger"
                    type="button"
                    id={questionId}
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() => toggle(index)}
                  >
                    <span className="faq-item__number">{String(index + 1).padStart(2, '0')}</span>
                    <span className="faq-item__question">{item.question}</span>
                    <span className="faq-item__toggle" aria-hidden="true">
                      <span />
                      <span />
                    </span>
                  </button>
                </h3>
                <div
                  className="faq-item__answer"
                  id={answerId}
                  role="region"
                  aria-labelledby={questionId}
                  aria-hidden={!isOpen}
                >
                  <div>
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
