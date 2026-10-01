import { Phone, MessageCircle, MapPin, Calculator } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import { business } from '../data/business.js'
import { openWhatsApp, buildSimpleMessage } from '../utils/whatsapp.js'
import { scrollToSection } from '../data/navigation.js'
import '../styles/contact.css'

export default function Contact() {
  const handleWhatsApp = () =>
    openWhatsApp(business.whatsappNumber, buildSimpleMessage(business.name))

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <SectionHeading
          kicker="Get In Touch"
          title="Contact Nissi Aluminium Works"
          subtitle="Call, message or visit — we respond quickly to new enquiries."
        />

        <div className="contact__cards">
          <article className="contact__card">
            <span className="contact__icon" aria-hidden="true"><Phone size={22} /></span>
            <h3>Call Us</h3>
            <p className="contact__value">{business.phoneDisplay}</p>
            <a className="btn btn--outline btn--sm" href={'tel:' + business.phoneTel}>
              Call Now
            </a>
          </article>

          <article className="contact__card">
            <span className="contact__icon contact__icon--whatsapp" aria-hidden="true">
              <MessageCircle size={22} />
            </span>
            <h3>WhatsApp</h3>
            <p className="contact__value">Chat with us</p>
            <button type="button" className="btn btn--whatsapp btn--sm" onClick={handleWhatsApp}>
              WhatsApp
            </button>
          </article>

          <article className="contact__card">
            <span className="contact__icon" aria-hidden="true"><MapPin size={22} /></span>
            <h3>Location</h3>
            <p className="contact__value contact__value--small">{business.addressShort}</p>
            <a
              className="btn btn--outline btn--sm"
              href="https://www.google.com/maps/search/?api=1&query=Rajiv+Gandhi+Nagar,+Nizampet+Road,+Hyderabad+500090"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Directions
            </a>
          </article>
        </div>

        <div className="contact__cta-row">
          <a className="btn btn--primary" href={'tel:' + business.phoneTel}>Call Now</a>
          <button type="button" className="btn btn--whatsapp" onClick={handleWhatsApp}>WhatsApp</button>
          <button type="button" className="btn btn--primary" onClick={() => scrollToSection('estimator')}>
            Get Estimate
          </button>
        </div>
      </div>
    </section>
  )
}
