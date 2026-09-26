import { useEffect, useState } from 'react'

function Header({ sections, activeSection, onNavigate }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 24)
    }

    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', isMenuOpen)
    return () => document.body.classList.remove('menu-open')
  }, [isMenuOpen])

  const handleMenuClick = (event, id) => {
    event.preventDefault()
    onNavigate?.(id)
    setIsMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className={`site-header ${isScrolled ? 'site-header--scrolled' : ''}`}>
      <div className="site-header__inner">
        <a className="site-logo" href="#home" onClick={(event) => handleMenuClick(event, 'home')}>
          Phan Cao Huy
        </a>

        <button
          type="button"
          className={`menu-toggle ${isMenuOpen ? 'menu-toggle--open' : ''}`}
          aria-label="Toggle navigation"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`site-nav ${isMenuOpen ? 'site-nav--open' : ''}`}>
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={activeSection === section.id ? 'is-active' : ''}
              onClick={(event) => handleMenuClick(event, section.id)}
            >
              {section.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
