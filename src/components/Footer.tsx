import {
  DEFAULT_WHATSAPP_MESSAGE,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  NAV_LINKS,
  WHATSAPP_DISPLAY,
} from '../data/site'
import { disableMotion, isMotionForced, systemPrefersReducedMotion } from '../lib/motionPreference'
import { whatsappLink } from '../lib/whatsapp'
import { Icon } from './Icon'
import { Logo } from './Logo'

const footerServices = [
  'Reformas residenciais',
  'Reformas comerciais',
  'Gerenciamento de obras',
  'Projetos complementares',
  'Acabamentos e infraestrutura',
]

export function Footer() {
  const year = new Date().getFullYear()
  const whatsappHref = whatsappLink(DEFAULT_WHATSAPP_MESSAGE)
  const motionForced = isMotionForced() && systemPrefersReducedMotion()

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__brand" data-reveal="up">
            <Logo variant="light" />
            <p>
              Soluções em reformas residenciais e comerciais, gerenciamento de obras e serviços técnicos de engenharia
              em Pernambuco.
            </p>
            <div className="site-footer__social">
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="Falar com a Prontto no WhatsApp">
                <Icon name="whatsapp" size={19} />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Perfil da Prontto no Instagram"
              >
                <Icon name="instagram" size={19} />
              </a>
            </div>
          </div>

          <nav className="site-footer__column" aria-label="Links do rodapé" data-reveal="up">
            <h2>Navegação</h2>
            <ul>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="site-footer__column" data-reveal="up">
            <h2>Serviços</h2>
            <ul>
              {footerServices.map((service) => (
                <li key={service}>
                  <a href="#servicos">{service}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="site-footer__column site-footer__contact" data-reveal="up">
            <h2>Contato</h2>
            <ul>
              <li>
                <Icon name="whatsapp" size={17} />
                <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                  {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li>
                <Icon name="instagram" size={17} />
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                  {INSTAGRAM_HANDLE}
                </a>
              </li>
              <li>
                <Icon name="pin" size={17} />
                <span>Pernambuco</span>
              </li>
            </ul>
            <a className="btn btn--outline-light btn--sm" href={whatsappHref} target="_blank" rel="noopener noreferrer">
              Solicitar orçamento
              <Icon name="arrow-up-right" size={16} />
            </a>
          </div>
        </div>

        <div className="site-footer__bottom" data-reveal="up">
          <p>© {year} Prontto Engenharia &amp; Reforma. Todos os direitos reservados.</p>
          <div className="site-footer__legal">
            <p className="site-footer__disclaimer">Imagens ilustrativas. Portfólio oficial em atualização.</p>
            {motionForced && (
              <button className="site-footer__motion-toggle" type="button" onClick={disableMotion}>
                Reduzir animações
              </button>
            )}
          </div>
        </div>
      </div>
    </footer>
  )
}
