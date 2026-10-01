import { Calculator, MessageCircle } from 'lucide-react'
import { business } from '../data/business.js'
import { openWhatsApp, buildSimpleMessage } from '../utils/whatsapp.js'
import { scrollToSection } from '../data/navigation.js'
import '../styles/contact.css'

export default function FinalCTA() {
  return (
    <section className="final-cta" aria-labelledby="final-cta-heading">
      <div className="container">
        <h2 id="final-cta-heading">Need Aluminium Work?</h2>
        <p>Tell us your dimensions and get an approximate estimate instantly.</p>

        <div className="final-cta__actions">
          <button type="button" className="btn btn--primary btn--lg" onClick={() => scrollToSection('estimator')}>
            <Calculator size={18} aria-hidden="true" />
            Calculate My Cost
          </button>
          <button
            type="button"
            className="btn btn--whatsapp btn--lg"
            onClick={() => openWhatsApp(business.whatsappNumber, buildSimpleMessage(business.name))}
          >
            <MessageCircle size={18} aria-hidden="true" />
            WhatsApp Nissi Aluminium Works
          </button>
        </div>
      </div>
    </section>
  )
}
