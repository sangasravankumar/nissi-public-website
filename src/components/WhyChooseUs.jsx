import { Ruler, BadgeCheck, ShieldCheck, Building, FileText, MessageCircle } from 'lucide-react'
import '../styles/about.css'

const REASONS = [
  {
    icon: Ruler,
    title: 'Custom Sizes',
    text: 'Every window, door and partition is made to your exact measurements.',
  },
  {
    icon: BadgeCheck,
    title: 'Quality Materials',
    text: 'Aluminium profiles and hardware selected for smooth, long-lasting operation.',
  },
  {
    icon: ShieldCheck,
    title: 'Professional Work',
    text: 'Neat finishing and careful installation by experienced fabricators.',
  },
  {
    icon: Building,
    title: 'Residential & Commercial',
    text: 'From single windows to full office partitions — homes and businesses served.',
  },
  {
    icon: FileText,
    title: 'Transparent Estimation',
    text: 'Approximate SFT-based cost estimate before you commit to anything.',
  },
  {
    icon: MessageCircle,
    title: 'Direct WhatsApp Support',
    text: 'Send your requirements on WhatsApp and get a quick response.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="why section" aria-labelledby="why-heading">
      <div className="container">
        <div className="section-heading">
          <p className="section-heading__kicker">Why Us</p>
          <h2 id="why-heading" className="section-heading__title">Why Choose Nissi Aluminium Works?</h2>
        </div>


        <div className="why__grid">
          {REASONS.map((reason) => {
            const Icon = reason.icon
            return (
              <article className="why__card" key={reason.title}>
                <span className="why__icon" aria-hidden="true">
                  <Icon size={24} />
                </span>
                <h3>{reason.title}</h3>
                <p>{reason.text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
