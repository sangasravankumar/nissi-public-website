import { MapPin } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import { locations } from '../data/locations.js'
import '../styles/locations.css'

export default function Locations() {
  return (
    <section id="locations" className="locations section">
      <div className="container">
        <SectionHeading
          kicker="Areas We Serve"
          title="Our Locations"
          subtitle="Aluminium windows, doors, partitions, mesh and fabrication — supplied and installed across these Hyderabad areas."
        />

        <ul className="locations__grid">
          {locations.map((location, index) => (
            <li key={location.id} className="location-card">
              <span className="location-card__accent" aria-hidden="true" />
              <span className="location-card__badge" aria-hidden="true">
                <MapPin size={20} />
              </span>
              <span className="location-card__text">
                <span className="location-card__name">{location.name}</span>
                <span className="location-card__city">Hyderabad</span>
              </span>
              <span className="location-card__index" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
