import { MapPin, Phone } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import { business } from '../data/business.js'
import '../styles/about.css'

export default function About() {
  return (
    <section id="about" className="about section section--alt">
      <div className="container">
        <SectionHeading
          kicker="Who We Are"
          title="About Nissi Aluminium Works"
        />

        <div className="about__layout">
          <div className="about__media">
            <img
              src="/images/about.jpg"
              alt="Aluminium profile and glass work handled by Nissi Aluminium Works"
              loading="lazy"
              decoding="async"
              width="800"
              height="600"
            />
          </div>

          <div className="about__content">
            <p className="about__text">
              Nissi Aluminium Works provides aluminium work and fabrication solutions
              for residential, office and commercial requirements. We undertake
              custom-size aluminium works based on customer requirements and site
              conditions.
            </p>

            <div className="about__info">
              <p className="about__info-name">
                <strong>{business.name}</strong>
                <span>{business.subtitle}</span>
              </p>
              <p className="about__info-address">
                {business.addressLines.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </p>
              <p className="about__info-phone">
                Phone: <strong>{business.phoneDisplay}</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
