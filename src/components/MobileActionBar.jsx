import { Phone, MessageCircle, Calculator } from 'lucide-react'
import { business } from '../data/business.js'
import { openWhatsApp, buildSimpleMessage } from '../utils/whatsapp.js'
import { scrollToSection } from '../data/navigation.js'
import '../styles/global.css'

export default function MobileActionBar() {
  return (
    <nav className="mobile-action-bar" aria-label="Quick contact actions">
      <a className="mobile-action-bar__item" href={'tel:' + business.phoneTel}>
        <Phone size={19} aria-hidden="true" />
        <span>Call</span>
      </a>
      <button
        type="button"
        className="mobile-action-bar__item mobile-action-bar__item--whatsapp"
        onClick={() => openWhatsApp(business.whatsappNumber, buildSimpleMessage(business.name))}
      >
        <MessageCircle size={19} aria-hidden="true" />
        <span>WhatsApp</span>
      </button>
      <button
        type="button"
        className="mobile-action-bar__item"
        onClick={() => scrollToSection('estimator')}
      >
        <Calculator size={19} aria-hidden="true" />
        <span>Estimate</span>
      </button>
    </nav>
  )
}
