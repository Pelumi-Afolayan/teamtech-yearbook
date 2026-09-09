import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Link, useLocation } from 'react-router'

const navigationLinks = [
  {
    label: 'Story',
    to: '/#our-story',
    sectionId: 'our-story',
  },
  {
    label: 'Leadership',
    to: '/#department-structure',
    sectionId: 'department-structure',
  },
  {
    label: 'Units',
    to: '/#units',
    sectionId: 'units',
  },
  {
    label: 'Executives',
    to: '/#executives',
    sectionId: 'executives',
  },
  {
    label: 'Graduates',
    to: '/graduates',
    pagePath: '/graduates',
  },
  {
    label: 'Memories',
    to: '/memories',
    pagePath: '/memories',
  },
  {
    label: 'Awards',
    to: '/#awards',
    sectionId: 'awards',
  },
]

function Navbar() {
  const location = useLocation()

  const [hasScrolled, setHasScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  const isHomePage = location.pathname === '/'

  useEffect(() => {
    function handleScroll() {
      setHasScrolled(window.scrollY > 50)
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll)
    document.addEventListener('keydown', handleEscape)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  useEffect(() => {
    if (!isHomePage) {
      setActiveSection('')
      return
    }

    const sectionIds = navigationLinks
      .map((link) => link.sectionId)
      .filter((sectionId): sectionId is string => Boolean(sectionId))

    const sections = sectionIds
      .map((sectionId) => document.getElementById(sectionId))
      .filter((section): section is HTMLElement => Boolean(section))

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find(
          (entry) => entry.isIntersecting
        )

        if (visibleSection) {
          setActiveSection(visibleSection.target.id)
        }
      },
      {
        rootMargin: '-30% 0px -60% 0px',
      }
    )

    sections.forEach((section) => observer.observe(section))

    return () => {
      observer.disconnect()
    }
  }, [isHomePage])

  function closeMenu() {
    setIsMenuOpen(false)
  }

  function isLinkActive(link: (typeof navigationLinks)[number]) {
    if (link.pagePath) {
      return location.pathname === link.pagePath
    }

    return isHomePage && activeSection === link.sectionId
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        hasScrolled || isMenuOpen || !isHomePage
          ? 'bg-[#00344d]/95 shadow-lg backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link
          to="/"
          onClick={closeMenu}
          className="relative z-50 text-lg font-black uppercase tracking-[-0.03em] text-white"
        >
          Team <span className="text-[#ef3340]">Tech</span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {navigationLinks.map((link) => {
            const active = isLinkActive(link)

            return (
              <Link
                key={link.to}
                to={link.to}
                className={`relative py-2 text-xs font-bold uppercase tracking-[0.1em] transition ${
                  active
                    ? 'text-[#ef3340]'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {link.label}

                <span
                  className={`absolute inset-x-0 bottom-0 h-[2px] origin-left bg-[#ef3340] transition-transform duration-300 ${
                    active ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </Link>
            )
          })}
        </div>

        <button
          type="button"
          aria-label={
            isMenuOpen
              ? 'Close navigation menu'
              : 'Open navigation menu'
          }
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((current) => !current)}
          className="relative z-50 flex h-11 w-11 flex-col items-center justify-center gap-[5px] text-white md:hidden"
        >
          <span
            className={`block h-[2px] w-6 bg-current transition duration-300 ${
              isMenuOpen ? 'translate-y-[7px] rotate-45' : ''
            }`}
          />

          <span
            className={`block h-[2px] w-6 bg-current transition duration-300 ${
              isMenuOpen ? 'opacity-0' : ''
            }`}
          />

          <span
            className={`block h-[2px] w-6 bg-current transition duration-300 ${
              isMenuOpen ? '-translate-y-[7px] -rotate-45' : ''
            }`}
          />
        </button>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: 'auto',
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.3,
            }}
            className="overflow-hidden border-t border-white/10 bg-[#00344d] md:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col px-6 py-5">
              {navigationLinks.map((link, index) => {
                const active = isLinkActive(link)

                return (
                  <motion.div
                    key={link.to}
                    initial={{
                      opacity: 0,
                      x: -20,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * 0.04,
                    }}
                  >
                    <Link
                      to={link.to}
                      onClick={closeMenu}
                      className={`block border-b border-white/10 py-4 text-sm font-bold uppercase tracking-[0.14em] transition last:border-b-0 ${
                        active
                          ? 'text-[#ef3340]'
                          : 'text-white/85 hover:text-white'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar