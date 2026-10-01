export default function SectionHeading({ kicker, title, subtitle }) {
  return (
    <div className="section-heading">
      {kicker && <p className="section-heading__kicker">{kicker}</p>}
      <h2 className="section-heading__title">{title}</h2>
      {subtitle && <p className="section-heading__subtitle">{subtitle}</p>}
    </div>
  )
}
