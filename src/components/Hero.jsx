import { ArrowRight, ShieldCheck, Ruler, Zap } from 'lucide-react'
import { business } from '../data/business'
import { openWhatsApp, buildSimpleMessage } from '../utils/whatsapp'
import { scrollToSection } from '../data/navigation.js'
import '../styles/hero.css'

const TRUST_ITEMS = [
  { icon: Ruler, label: 'Custom Sizes' },
  { icon: ShieldCheck, label: 'Professional Work' },
  { icon: Zap, label: 'Fast Response' },
]

export default function Hero() {
  const handleWhatsApp = () =>
    openWhatsApp(business.whatsappNumber, buildSimpleMessage(business.name))

  return (
    <section id="home" className="hero">
      <div
        className="hero__bg"
        role="img"
        aria-label="Modern interior with large aluminium windows"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      />
      <div className="hero__overlay" aria-hidden="true" />

      <div className="container hero__content">
        <p className="hero__brand-line">{business.nameUpper}</p>
        <p className="hero__subtitle">{business.subtitleUpper}</p>
        <h1 className="hero__title">
          Quality Aluminium Works for Homes, Offices &amp; Commercial Spaces
        </h1>
        <p className="hero__text">{business.description}</p>

        <div className="hero__actions">
          <button type="button" className="btn btn--primary btn--lg" onClick={() => scrollToSection('estimator')}>
            Calculate Your Cost
            <ArrowRight size={18} aria-hidden="true" />
          </button>
          <button type="button" className="btn btn--whatsapp btn--lg" onClick={handleWhatsApp}>
            WhatsApp Us
          </button>
        </div>

        <p className="hero__features">
          Custom Sizes • Professional Installation • Residential &amp; Commercial
        </p>

        <ul className="hero__trust" aria-label="Highlights">
          {TRUST_ITEMS.map((item) => {
            const Icon = item.icon
            return (
              <li key={item.label} className="hero__trust-item">
                <Icon size={18} aria-hidden="true" />
                <span>{item.label}</span>
              </li>
            )
          })}
        </ul>
      </div>

      <button
        type="button"
        className="hero__scroll-cue"
        aria-label="Scroll to services"
        onClick={() => scrollToSection('services')}
      >
        <span aria-hidden="true">↓</span>
      </button>
    </section>
  )
}
