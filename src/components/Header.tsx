import { useEffect, useRef, useState } from 'react'
import { DEFAULT_WHATSAPP_MESSAGE, INSTAGRAM_URL, NAV_LINKS, WHATSAPP_DISPLAY } from '../data/site'
import { whatsappLink } from '../lib/whatsapp'
import { Icon } from './Icon'
import { Logo } from './Logo'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeId, setActiveId] = useState('')
  const toggleRef = useRef<HTMLButtonElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)

      const probe = Math.min(window.innerHeight * 0.38, 280)
      let current = ''

      NAV_LINKS.forEach((link) => {
        const section = document.getElementById(link.href.slice(1))
        if (!section) return

        const rect = section.getBoundingClientRect()
        if (rect.top <= probe && rect.bottom > probe) current = link.href.slice(1)
      })

      setActiveId(current)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const focusTimer = window.setTimeout(() => closeButtonRef.current?.focus(), 60)

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        return
      }

      if (event.key !== 'Tab' || !panelRef.current) return

      const focusable = Array.from(
        panelRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'),
      ).filter((element) => element.offsetParent !== null)

      if (focusable.length === 0) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      const active = document.activeElement

      if (event.shiftKey && active === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && active === last) {
        event.preventDefault()
        first.focus()
      }
    }

    const onResize = () => {
      if (window.innerWidth > 980) setMenuOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('resize', onResize)

    return () => {
      window.clearTimeout(focusTimer)
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('resize', onResize)

      toggleRef.current?.focus()
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}${menuOpen ? ' menu-is-open' : ''}`}>
      <div className="container site-header__inner">
        <Logo />

        <nav className="desktop-nav" aria-label="Navegação principal">
          <ul>
            {NAV_LINKS.map((link) => {
              const isActive = activeId === link.href.slice(1)

              return (
                <li key={link.href}>
                  <a
                    className={isActive ? 'is-active' : undefined}
                    href={link.href}
                    aria-current={isActive ? 'location' : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="site-header__actions">
          <a
            className="btn btn--primary btn--sm site-header__cta"
            href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            data-magnetic="6"
          >
            Solicitar orçamento
            <Icon name="arrow-up-right" size={17} />
          </a>

          <button
            ref={toggleRef}
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <Icon name={menuOpen ? 'close' : 'menu'} size={24} />
          </button>
        </div>
      </div>

      <div className={`mobile-menu${menuOpen ? ' is-open' : ''}`} id="mobile-menu" aria-hidden={!menuOpen}>
        <button className="mobile-menu__backdrop" type="button" aria-label="Fechar menu" onClick={closeMenu} tabIndex={-1} />
        <div className="mobile-menu__panel" ref={panelRef} role="dialog" aria-modal="true" aria-label="Menu de navegação">
          <div className="mobile-menu__head">
            <Logo />
            <button
              ref={closeButtonRef}
              className="menu-toggle menu-toggle--panel"
              type="button"
              aria-label="Fechar menu"
              onClick={closeMenu}
            >
              <Icon name="close" size={24} />
            </button>
          </div>

          <nav className="mobile-nav" aria-label="Navegação para dispositivos móveis">
            <ul>
              {NAV_LINKS.map((link, index) => (
                <li key={link.href}>
                  <a
                    className={activeId === link.href.slice(1) ? 'is-active' : undefined}
                    href={link.href}
                    onClick={closeMenu}
                  >
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    {link.label}
                    <Icon name="arrow-up-right" size={18} />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mobile-menu__footer">
            <a
              className="btn btn--primary btn--block"
              href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              <Icon name="whatsapp" size={19} />
              Solicitar orçamento
            </a>
            <div className="mobile-menu__contacts">
              <a href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)} target="_blank" rel="noopener noreferrer">
                WhatsApp {WHATSAPP_DISPLAY}
              </a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                @pronttoengenharia
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
