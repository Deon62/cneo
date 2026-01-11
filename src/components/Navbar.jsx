import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

function Navbar() {
  const location = useLocation()
  const [isNavbarDark, setIsNavbarDark] = useState(false)

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
        // Exclude 'community' and 'academy' sections from activating links on home page
        // These links should only be active when on their respective routes
        if (linkSection === 'community' || linkSection === 'academy') {
          link.classList.remove('active')
        } else if (linkSection === currentSection) {
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
    } else if (location.pathname === '/') {
      // On home page, use scroll-based active states
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
          <Link to="/" className="logo-link">
            <span className="logo-text">Chain Neo</span>
          </Link>
        </div>
        <ul className="navbar-links">
          <li><Link to="/" className="nav-link" data-section="home">Home</Link></li>
          <li><Link to="/#about" className="nav-link" data-section="about">About Us</Link></li>
          <li><Link to="/academy" className="nav-link" data-section="academy">Academy</Link></li>
          <li><Link to="/#events" className="nav-link" data-section="events">Events</Link></li>
          <li><Link to="/community" className="nav-link" data-section="community">Community</Link></li>
          <li><Link to="/contact" className="nav-link" data-section="contact">Contact Us</Link></li>
        </ul>
        <Link to="/community" className="nav-join">
          Join the Community
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="nav-join-arrow">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
