import { Phone, MapPin, MessageCircle } from 'lucide-react'
import { business } from '../data/business.js'
import { NAV_LINKS, scrollToSection } from '../data/navigation.js'
import { openWhatsApp, buildSimpleMessage } from '../utils/whatsapp.js'
import '../styles/footer.css'

export default function Footer() {
  const handleNavClick = (event, id) => {
    event.preventDefault()
    scrollToSection(id)
  }

  const handleWhatsApp = () =>
    openWhatsApp(business.whatsappNumber, buildSimpleMessage(business.name))

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <p className="footer__name">{business.nameUpper}</p>
            <p className="footer__sub">{business.subtitleUpper}</p>
            <p className="footer__tagline">Aluminium Windows • Doors • Partitions • Fabrication</p>
          </div>

          <nav className="footer__links" aria-label="Footer navigation">
            <h3>Quick Links</h3>
            <ul>
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <a href={'#' + link.id} onClick={(e) => handleNavClick(e, link.id)}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer__contact">
            <h3>Contact</h3>
            <p>
              <Phone size={15} aria-hidden="true" />
              <a href={'tel:' + business.phoneTel}>{business.phoneDisplay}</a>
            </p>
            <p>
              <MessageCircle size={15} aria-hidden="true" />
              <button type="button" onClick={handleWhatsApp}>WhatsApp us</button>
            </p>
            <p className="footer__address">
              <MapPin size={15} aria-hidden="true" />
              <span>
                {business.addressLines.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </span>
            </p>
          </div>
        </div>

        <div className="footer__bottom">
          <p>{business.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
