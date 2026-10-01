import { useEffect, useState } from 'react'
import { Menu, X, MessageCircle } from 'lucide-react'
import useScrollPosition from '../hooks/useScrollPosition'
import { business } from '../data/business'
import { openWhatsApp, buildSimpleMessage } from '../utils/whatsapp'
import { NAV_LINKS, scrollToSection } from '../data/navigation.js'
import '../styles/navbar.css'

export default function Navbar() {
  const { scrolled } = useScrollPosition()
  const [menuOpen, setMenuOpen] = useState(false)

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const handleNavClick = (event, id) => {
    event.preventDefault()
    setMenuOpen(false)
    scrollToSection(id)
  }

  const handleWhatsApp = () => {
    setMenuOpen(false)
    openWhatsApp(business.whatsappNumber, buildSimpleMessage(business.name))
  }

  return (
    <header className={'navbar' + (scrolled ? ' navbar--scrolled' : '')}>
      <div className="navbar__inner container">
        <a
          href="#home"
          className="navbar__brand"
          onClick={(e) => handleNavClick(e, 'home')}
          aria-label="Nissi Aluminium Works — back to top"
        >
          <span className="navbar__logo-badge" aria-hidden="true">N</span>
          <span className="navbar__brand-text">
            <span className="navbar__brand-name">{business.nameUpper}</span>
            <span className="navbar__brand-sub">{business.subtitleUpper}</span>
          </span>
        </a>

        <nav className={'navbar__links' + (menuOpen ? ' is-open' : '')} aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={'#' + link.id}
              className="navbar__link"
              onClick={(e) => handleNavClick(e, link.id)}
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            className="btn btn--whatsapp navbar__cta"
            onClick={handleWhatsApp}
          >
            <MessageCircle size={18} aria-hidden="true" />
            WhatsApp
          </button>
        </nav>

        <button
          type="button"
          className="navbar__toggle"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
    </header>
  )
}
