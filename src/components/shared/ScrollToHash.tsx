import { useEffect } from 'react'
import { useLocation } from 'react-router'

function ScrollToHash() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })

      return
    }

    const sectionId = location.hash.replace('#', '')

    requestAnimationFrame(() => {
      const section = document.getElementById(sectionId)

      section?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    })
  }, [location.pathname, location.hash])

  return null
}

export default ScrollToHash