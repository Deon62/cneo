import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState, useRef } from 'react'
import './NavbarMobile.css'

function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()
  const [isNavbarDark, setIsNavbarDark] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const searchInputRef = useRef(null)
  const searchBarRef = useRef(null)

  // Searchable sections data
  const searchableSections = [
    { id: 'home', title: 'Home', path: '/', type: 'page' },
    { id: 'about', title: 'About Us', path: '/about', type: 'page' },
    { id: 'academy', title: 'Academy', path: '/academy', type: 'page' },
    { id: 'events', title: 'Events', path: '/events', type: 'page' },
    { id: 'community', title: 'Community', path: '/community', type: 'page' },
    { id: 'contact', title: 'Contact Us', path: '/contact', type: 'page' },
    { id: 'blog', title: 'Blog', path: '/blog', type: 'page' },
    { id: 'how-it-works', title: 'Programs & Opportunities', path: '/', type: 'section' },
    { id: 'community-snapshot', title: 'Community Snapshot', path: '/', type: 'section' },
    { id: 'faq', title: 'FAQ', path: '/', type: 'section' },
  ]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen)
    if (!isSearchOpen) {
      setTimeout(() => {
        searchInputRef.current?.focus()
      }, 100)
    } else {
      setSearchQuery('')
      setSearchResults([])
    }
  }

  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase().trim()
    setSearchQuery(query)
    
    if (query.length > 0) {
      const results = searchableSections.filter(section =>
        section.title.toLowerCase().includes(query) ||
        section.id.toLowerCase().includes(query)
      )
      setSearchResults(results)
    } else {
      setSearchResults([])
    }
  }

  const handleSearchResultClick = (result) => {
    setSearchQuery('')
    setSearchResults([])
    setIsSearchOpen(false)
    closeMenu()
    
    if (result.path) {
      navigate(result.path)
      // If it's a section on the home page, scroll to it after navigation
      if (result.type === 'section' && result.path === '/') {
        setTimeout(() => {
          const element = document.getElementById(result.id)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        }, 100)
      }
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setIsSearchOpen(false)
      setSearchQuery('')
      setSearchResults([])
    } else if (e.key === 'Enter' && searchResults.length > 0) {
      handleSearchResultClick(searchResults[0])
    }
  }

  // Close menu when route changes
  useEffect(() => {
    closeMenu()
  }, [location.pathname])

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isSearchOpen && searchBarRef.current && !searchBarRef.current.contains(event.target)) {
        setIsSearchOpen(false)
        setSearchQuery('')
        setSearchResults([])
      }
    }

    if (isSearchOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }
  }, [isSearchOpen])

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]')
      const navbar = document.querySelector('.navbar-container')
      const navLinks = document.querySelectorAll('.nav-link')
      const scrollPosition = window.scrollY + window.innerHeight / 2

      const darkSectionIds = ['academy']

      let currentSection = null
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          currentSection = sectionId
        }
      })

      if (currentSection && darkSectionIds.includes(currentSection)) {
        navbar?.classList.add('navbar-dark')
        setIsNavbarDark(true)
      } else {
        navbar?.classList.remove('navbar-dark')
        setIsNavbarDark(false)
      }

      navLinks.forEach((link) => {
        const linkSection = link.getAttribute('data-section')
        // Exclude sections that have their own pages from scroll-based activation on home page
        // These links should only be active when on their respective routes
        if (linkSection === 'community' || linkSection === 'academy' || linkSection === 'about' || linkSection === 'events' || linkSection === 'contact') {
          link.classList.remove('active')
        } else if (linkSection === 'home') {
          // Keep Home active for all home page sections
          link.classList.add('active')
        } else {
          link.classList.remove('active')
        }
      })
    }

    // Handle active state based on route
    const navLinks = document.querySelectorAll('.nav-link')
    
    if (location.pathname === '/community') {
      // On community page, mark Community link as active
      navLinks.forEach((link) => {
        const linkSection = link.getAttribute('data-section')
        if (linkSection === 'community') {
          link.classList.add('active')
        } else {
          link.classList.remove('active')
        }
      })
    } else if (location.pathname === '/academy') {
      // On academy page, mark Academy link as active
      navLinks.forEach((link) => {
        const linkSection = link.getAttribute('data-section')
        if (linkSection === 'academy') {
          link.classList.add('active')
        } else {
          link.classList.remove('active')
        }
      })
    } else if (location.pathname === '/contact') {
      // On contact page, mark Contact Us link as active
      navLinks.forEach((link) => {
        const linkSection = link.getAttribute('data-section')
        if (linkSection === 'contact') {
          link.classList.add('active')
        } else {
          link.classList.remove('active')
        }
      })
    } else if (location.pathname === '/events') {
      // On events page, mark Events link as active
      navLinks.forEach((link) => {
        const linkSection = link.getAttribute('data-section')
        if (linkSection === 'events') {
          link.classList.add('active')
        } else {
          link.classList.remove('active')
        }
      })
    } else if (location.pathname === '/about') {
      // On about page, mark About Us link as active
      navLinks.forEach((link) => {
        const linkSection = link.getAttribute('data-section')
        if (linkSection === 'about') {
          link.classList.add('active')
        } else {
          link.classList.remove('active')
        }
      })
    } else if (location.pathname === '/') {
      // On home page, mark Home link as active by default, then use scroll-based states
      navLinks.forEach((link) => {
        const linkSection = link.getAttribute('data-section')
        if (linkSection === 'home') {
          link.classList.add('active')
        } else {
          link.classList.remove('active')
        }
      })
      window.addEventListener('scroll', handleScroll)
      handleScroll()
      return () => window.removeEventListener('scroll', handleScroll)
    } else {
      // On other pages, remove all active states
      navLinks.forEach((link) => {
        link.classList.remove('active')
      })
    }
  }, [location.pathname])

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/" className="logo-link" onClick={closeMenu}>
            <span className="logo-text">Chain Neo</span>
          </Link>
        </div>
        <button 
          className={`mobile-menu-toggle ${isMenuOpen ? 'menu-open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
        <div className={`navbar-menu ${isMenuOpen ? 'menu-open' : ''}`}>
          <ul className="navbar-links">
            <li><Link to="/" className="nav-link" data-section="home" onClick={closeMenu}>Home</Link></li>
            <li><Link to="/about" className="nav-link" data-section="about" onClick={closeMenu}>About Us</Link></li>
            <li><Link to="/academy" className="nav-link" data-section="academy" onClick={closeMenu}>Academy</Link></li>
            <li><Link to="/events" className="nav-link" data-section="events" onClick={closeMenu}>Events</Link></li>
            <li><Link to="/community" className="nav-link" data-section="community" onClick={closeMenu}>Community</Link></li>
            <li><Link to="/contact" className="nav-link" data-section="contact" onClick={closeMenu}>Contact Us</Link></li>
          </ul>
          <div className="navbar-search-wrapper" ref={searchBarRef}>
            <button 
              className="nav-search-toggle" 
              onClick={toggleSearch}
              aria-label="Toggle search"
              aria-expanded={isSearchOpen}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="m21 21-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="nav-search-text">search</span>
            </button>
            <div className={`navbar-search-bar ${isSearchOpen ? 'search-open' : ''}`}>
              <input
                ref={searchInputRef}
                type="text"
                className="navbar-search-input"
                placeholder="Search sections..."
                value={searchQuery}
                onChange={handleSearchChange}
                onKeyDown={handleKeyDown}
              />
              {searchResults.length > 0 && (
                <div className="navbar-search-results">
                  {searchResults.map((result, index) => (
                    <button
                      key={index}
                      className="navbar-search-result"
                      onClick={() => handleSearchResultClick(result)}
                    >
                      <span className="search-result-title">{result.title}</span>
                      <span className="search-result-type">{result.type}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
