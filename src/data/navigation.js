// Section ids shared across navbar, footer and CTA buttons.

export const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'estimator', label: 'Estimator' },
  { id: 'locations', label: 'Locations' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]

export const SECTION_IDS = NAV_LINKS.map((link) => link.id)

/** Smooth-scroll to a section, accounting for the fixed navbar height. */
export function scrollToSection(id) {
  const el = document.getElementById(id)
  if (!el) return
  const navbarHeight = 72
  const top = el.getBoundingClientRect().top + window.scrollY - navbarHeight
  window.scrollTo({ top, behavior: 'smooth' })
}
