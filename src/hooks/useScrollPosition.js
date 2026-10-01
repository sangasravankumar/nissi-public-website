import { useEffect, useState } from 'react'

/**
 * Tracks window scroll offset and a boolean "scrolled" flag (past 10px).
 * Used for the navbar shadow/shrink and back-to-top button visibility.
 */
export default function useScrollPosition() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return { scrollY, scrolled: scrollY > 10 }
}
