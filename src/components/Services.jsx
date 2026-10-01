import { Calculator } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import { workPhotos } from '../data/services.js'
import { selectEstimatorService } from '../data/estimatorBus.js'
import { scrollToSection } from '../data/navigation.js'
import '../styles/services.css'

export default function Services() {
  const handleEstimate = (serviceId) => {
    selectEstimatorService(serviceId)
    scrollToSection('estimator')
  }

  return (
    <section id="services" className="services section">
      <div className="container">
        <SectionHeading
          kicker="What We Do"
          title="Our Aluminium Services"
          subtitle="Custom solutions for residential, office and commercial requirements."
        />

        <div className="services__grid">
          {workPhotos.map((photo, index) => (
            <article className="service-photo" key={photo.id}>
              <img
                className="service-photo__img"
                src={photo.src}
                alt={photo.alt}
                loading={index < 3 ? 'eager' : 'lazy'}
                decoding="async"
              />
              <span className="service-photo__shade" aria-hidden="true" />

              <div className="service-photo__body">
                <span className="service-photo__tag">{photo.tag}</span>
                <h3 className="service-photo__title">{photo.title}</h3>
                <p className="service-photo__desc">{photo.description}</p>
                <button
                  type="button"
                  className="service-photo__cta"
                  onClick={() => handleEstimate(photo.serviceId)}
                >
                  <Calculator size={15} aria-hidden="true" />
                  Get Estimate
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
