import { ArrowUp } from 'lucide-react'
import useScrollPosition from '../hooks/useScrollPosition.js'

export default function ScrollToTop() {
  const { scrolled } = useScrollPosition()

  if (!scrolled) return null

  return (
    <button
      type="button"
      className="scroll-top"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <ArrowUp size={20} aria-hidden="true" />
    </button>
  )
}
