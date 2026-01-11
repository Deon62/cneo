import './App.css'
import { useState, useEffect } from 'react'
import africaImage from './assets/africa.svg'
import learnImage from './assets/learn.png'
import buildImage from './assets/build.png'
import communityImage from './assets/community.png'
import bitcoinIcon from './assets/bitcoin.svg'
import contractsIcon from './assets/contracts.svg'
import defiIcon from './assets/defi.svg'
import securityIcon from './assets/security.svg'

function App() {
  const [openFaq, setOpenFaq] = useState(null)
  const [isNavbarDark, setIsNavbarDark] = useState(false)

  const faqs = [
    {
      id: 1,
      question: "What is Chain Neo?",
      answer: "Chain Neo is a blockchain community-based organization focused on building Africa's blockchain builders. We provide learning resources, courses, events, and a supportive community for anyone interested in blockchain technology."
    },
    {
      id: 2,
      question: "How do I join Chain Neo?",
      answer: "You can join Chain Neo by clicking the 'Join the Community' button on our homepage. We welcome builders, developers, learners, and anyone interested in blockchain technology. Membership is free and open to all."
    },
    {
      id: 3,
      question: "Do I need prior blockchain experience?",
      answer: "No prior experience is required! Chain Neo offers courses and resources for all skill levels, from complete beginners to advanced developers. We have structured learning paths to help you start from the basics."
    },
    {
      id: 4,
      question: "What courses and events do you offer?",
      answer: "We offer various courses including Blockchain Fundamentals, Smart Contracts Development, DeFi & Web3, and Blockchain Security. We also host regular events, workshops, hackathons, and networking sessions throughout the year."
    },
    {
      id: 5,
      question: "Is there a cost to participate?",
      answer: "Most of our resources, courses, and community access are free. Some advanced courses or special events may have fees, but we always strive to keep education accessible. Check individual course pages for specific details."
    },
    {
      id: 6,
      question: "How can I get involved in projects?",
      answer: "Once you're part of the community, you can join ongoing projects, propose new ideas, or collaborate with other members. We regularly share project opportunities through our community channels and events."
    }
  ]

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id)
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]')
      const navbar = document.querySelector('.navbar-container')
      const navLinks = document.querySelectorAll('.nav-link')
      const scrollPosition = window.scrollY + window.innerHeight / 2

      // Dark sections that need light navbar
      const darkSectionIds = ['academy'] // Add more dark section IDs here

      let currentSection = null
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          currentSection = sectionId
        }
      })

      // Update navbar dark mode
      if (currentSection && darkSectionIds.includes(currentSection)) {
        navbar?.classList.add('navbar-dark')
        setIsNavbarDark(true)
      } else {
        navbar?.classList.remove('navbar-dark')
        setIsNavbarDark(false)
      }

      // Update active link indicators
      navLinks.forEach((link) => {
        const linkSection = link.getAttribute('data-section')
        if (linkSection === currentSection) {
          link.classList.add('active')
        } else {
          link.classList.remove('active')
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check on initial load

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            <span className="logo-text">Chain Neo</span>
          </div>
          <ul className="navbar-links">
            <li><a href="#home" className="nav-link" data-section="home">Home</a></li>
            <li><a href="#about" className="nav-link" data-section="about">About Us</a></li>
            <li><a href="#academy" className="nav-link" data-section="academy">Academy</a></li>
            <li><a href="#events" className="nav-link" data-section="events">Events</a></li>
            <li><a href="#community" className="nav-link" data-section="community">Community</a></li>
            <li><a href="#blogs" className="nav-link" data-section="blogs">Blogs</a></li>
            <li><a href="#contact" className="nav-link" data-section="contact">Contact Us</a></li>
          </ul>
          <a href="#community" className="nav-join">
            Join the Community
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="nav-join-arrow">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-headline">Building Africa's Blockchain Builders</h1>
            <p className="hero-subtext">
              A friendly community learning, building, and growing with blockchain.
            </p>
            <div className="hero-ctas">
              <button className="btn btn-primary">Join the Community</button>
              <button className="btn btn-secondary">Explore Programs</button>
            </div>
          </div>
          <div className="hero-image-container">
            <img src={africaImage} alt="African continent map" className="hero-image" />
          </div>
        </div>
      </section>

      {/* What is Chain Neo Section */}
      <section id="about" className="about-section">
        <h2 className="section-title">What is Chain Neo?</h2>
        <div className="about-content">
          <div className="about-intro">
            <p className="about-text">
              Chain Neo is a friendly blockchain community dedicated to building Africa's next generation of blockchain builders. We believe in making blockchain technology accessible, approachable, and empowering for everyone.
            </p>
          </div>
          <div className="about-features">
            <div className="about-feature-item">
              <div className="feature-number">01</div>
              <div className="feature-image-wrapper">
                <img src={learnImage} alt="Learn Blockchain" className="feature-image" />
              </div>
              <div className="feature-content">
                <h3 className="feature-title">Learn Blockchain</h3>
                <p className="feature-text">
                  Master the fundamentals and advanced concepts of blockchain technology through guided learning paths designed for all skill levels.
                </p>
              </div>
            </div>
            <div className="about-feature-item feature-item-right">
              <div className="feature-number">02</div>
              <div className="feature-content">
                <h3 className="feature-title">Build Real Projects</h3>
                <p className="feature-text">
                  Apply your knowledge by creating real-world blockchain solutions and contributing to innovative projects that make a difference.
                </p>
              </div>
              <div className="feature-image-wrapper">
                <img src={buildImage} alt="Build Real Projects" className="feature-image" />
              </div>
            </div>
            <div className="about-feature-item">
              <div className="feature-number">03</div>
              <div className="feature-image-wrapper">
                <img src={communityImage} alt="Grow a Community" className="feature-image" />
              </div>
              <div className="feature-content">
                <h3 className="feature-title">Grow a Community</h3>
                <p className="feature-text">
                  Connect with fellow builders, share knowledge, and grow together in a supportive ecosystem that celebrates learning and collaboration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="academy" className="how-it-works-section">
        <h2 className="how-it-works-title">How it works</h2>
        <div className="how-it-works-grid">
          <div className="how-it-works-card">
            <div className="how-it-works-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45768C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="how-it-works-card-title">Join Chain Neo</h3>
            <p className="how-it-works-card-description">
              Become part of Africa's leading blockchain community. Connect with builders, developers, and innovators shaping the future.
            </p>
            <a href="#community" className="how-it-works-cta">
              <span>Get started</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          <div className="how-it-works-card">
            <div className="how-it-works-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="how-it-works-card-title">Learn through courses & events</h3>
            <p className="how-it-works-card-description">
              Access comprehensive courses, workshops, and events designed to help you master blockchain technology and stay ahead of the curve.
            </p>
            <a href="#academy" className="how-it-works-cta">
              <span>Explore courses</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          <div className="how-it-works-card">
            <div className="how-it-works-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 16V8C20.9996 7.64928 20.9071 7.30481 20.7315 7.00116C20.556 6.69751 20.3037 6.44536 20 6.27L13 2.27C12.696 2.09446 12.3511 2.00205 12 2.00205C11.6489 2.00205 11.304 2.09446 11 2.27L4 6.27C3.69626 6.44536 3.44398 6.69751 3.26846 7.00116C3.09294 7.30481 3.00036 7.64928 3 8V16C3.00036 16.3507 3.09294 16.6952 3.26846 16.9988C3.44398 17.3025 3.69626 17.5546 4 17.73L11 21.73C11.304 21.9055 11.6489 21.9979 12 21.9979C12.3511 21.9979 12.696 21.9055 13 21.73L20 17.73C20.3037 17.5546 20.556 17.3025 20.7315 16.9988C20.9071 16.6952 20.9996 16.3507 21 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3.27002 6.96L12 12.01L20.73 6.96" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 22.08V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="how-it-works-card-title">Build real projects</h3>
            <p className="how-it-works-card-description">
              Apply your skills by building real-world blockchain solutions. Work on projects that make a difference and showcase your expertise.
            </p>
            <a href="#events" className="how-it-works-cta">
              <span>Start building</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

        </div>
      </section>

      {/* Community Snapshot Section */}
      <section id="community" className="community-snapshot-section">
        <div className="community-snapshot-header">
          <p className="community-snapshot-label">Community Snapshot</p>
          <h2 className="community-snapshot-title">Trust & legitimacy</h2>
          <p className="community-snapshot-description">
            Building Africa's blockchain future with a growing community of builders, learners, and innovators committed to excellence.
          </p>
        </div>
        <div className="snapshot-stats-grid">
          <div className="snapshot-stat-card">
            <div className="stat-number">Growing community</div>
            <div className="stat-description">Active members building together</div>
          </div>
          <div className="snapshot-stat-card">
            <div className="stat-number">25+</div>
            <div className="stat-description">Events run</div>
          </div>
          <div className="snapshot-stat-card snapshot-stat-dark">
            <div className="stat-number">15+</div>
            <div className="stat-description">Universities & partners involved</div>
          </div>
          <div className="snapshot-stat-card">
            <div className="stat-number">50+</div>
            <div className="stat-description">Projects built</div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="courses-section">
        <div className="courses-content">
          <h2 className="courses-title">Courses</h2>
          <div className="courses-grid">
            <div className="course-card">
              <div className="course-icon">
                <img src={bitcoinIcon} alt="Blockchain Fundamentals" />
              </div>
              <h3 className="course-title">Blockchain Fundamentals</h3>
              <p className="course-description">
                Learn the core concepts of blockchain technology, including distributed ledgers, consensus mechanisms, and cryptographic principles.
              </p>
              <button className="course-enroll-btn">
                Enroll
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="enroll-arrow">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            <div className="course-card">
              <div className="course-icon">
                <img src={contractsIcon} alt="Smart Contracts Development" />
              </div>
              <h3 className="course-title">Smart Contracts Development</h3>
              <p className="course-description">
                Master smart contract programming, deployment, and testing. Build decentralized applications with hands-on projects.
              </p>
              <button className="course-enroll-btn">
                Enroll
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="enroll-arrow">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            <div className="course-card">
              <div className="course-icon">
                <img src={defiIcon} alt="DeFi & Web3" />
              </div>
              <h3 className="course-title">DeFi & Web3</h3>
              <p className="course-description">
                Explore decentralized finance protocols, Web3 architecture, and how to build financial applications on blockchain.
              </p>
              <button className="course-enroll-btn">
                Enroll
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="enroll-arrow">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            <div className="course-card">
              <div className="course-icon">
                <img src={securityIcon} alt="Blockchain Security" />
              </div>
              <h3 className="course-title">Blockchain Security</h3>
              <p className="course-description">
                Understand security best practices, vulnerability assessment, and how to build secure blockchain applications.
              </p>
              <button className="course-enroll-btn">
                Enroll
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="enroll-arrow">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
          <div className="courses-view-more">
            <a href="#academy" className="view-more-courses-btn">
              View more courses
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="faq-content">
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <div className="faq-list">
            {faqs.map((faq) => (
              <div key={faq.id} className={`faq-item ${openFaq === faq.id ? 'faq-open' : ''}`}>
                <button 
                  className="faq-question"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={openFaq === faq.id}
                >
                  <span>{faq.question}</span>
                  <svg 
                    className="faq-icon"
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M12 5V19M5 12H19" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <div className="faq-answer-wrapper">
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-brand">
              <span className="footer-logo">Chain Neo</span>
              <p className="footer-tagline">Building Africa's Blockchain Builders</p>
            </div>
            <div className="footer-social">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Twitter">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 4.01C21.09 4.39 20.12 4.65 19.1 4.78C21.16 3.57 22.64 1.6 23.26 0.24C21.29 1.35 19.07 2.09 16.69 2.43C14.78 0.5 12.03 0.49 10.11 2.41C8.91 3.61 8.29 5.26 8.5 6.91C5.89 6.75 3.44 5.65 1.5 3.88C0.26 6.15 1.03 9.08 3.49 10.57C2.65 10.57 1.86 10.36 1.17 10C1.17 10 1.17 10 1.17 10.01C1.17 12.61 3.06 14.83 5.55 15.32C4.75 15.53 3.89 15.56 3.07 15.39C3.67 17.54 5.69 19.1 8.07 19.15C6.2 20.59 3.85 21.43 1.35 21.43C0.9 21.43 0.45 21.4 0 21.33C2.52 22.91 5.51 23.87 8.72 23.87C18.93 23.87 24.58 15.62 24.58 8.41C24.58 8.17 24.57 7.93 24.55 7.7C25.52 7.02 26.35 6.17 27 5.19L22 4.01Z" fill="currentColor"/>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0H5C2.24 0 0 2.24 0 5V19C0 21.76 2.24 24 5 24H19C21.76 24 24 21.76 24 19V5C24 2.24 21.76 0 19 0ZM8 19H5V8H8V19ZM6.5 6.73C5.53 6.73 4.75 5.96 4.75 5C4.75 4.04 5.53 3.27 6.5 3.27C7.47 3.27 8.25 4.04 8.25 5C8.25 5.96 7.47 6.73 6.5 6.73ZM20 19H17V13.67C17 11.37 13 11.53 13 13.67V19H10V8H13V9.76C13.8 8.63 15.92 8.39 17 10.26V8H20V19Z" fill="currentColor"/>
                </svg>
              </a>
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Discord">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.317 4.37C18.352 3.435 16.302 2.706 14.188 2.202C13.85 2.597 13.535 3.007 13.258 3.427C11.06 3.066 8.855 3.066 6.701 3.427C6.424 3.007 6.109 2.597 5.769 2.202C3.654 2.706 1.603 3.435 0.637 4.37C0.484 7.134 0.628 9.859 1.055 12.524C1.055 12.524 1.623 13.569 2.863 14.656C4.809 14.201 6.695 13.552 8.479 12.724C8.831 13.42 9.239 14.085 9.699 14.714C7.611 15.123 5.546 15.311 3.493 15.277C4.999 16.425 6.727 17.334 8.607 17.95C10.423 18.549 12.304 18.855 14.191 18.855C15.996 18.855 17.776 18.577 19.493 18.024C21.327 17.431 23.078 16.547 24.691 15.39C24.746 15.2 24.816 15.008 24.877 14.814C25.269 12.154 25.467 9.435 25.318 6.678C23.568 5.738 21.743 4.992 19.859 4.457L20.317 4.37ZM9.012 11.964C8.015 11.964 7.204 11.22 7.204 10.297C7.204 9.373 8.015 8.629 9.012 8.629C10.009 8.629 10.818 9.373 10.818 10.297C10.818 11.22 10.009 11.964 9.012 11.964ZM14.987 11.964C13.99 11.964 13.18 11.22 13.18 10.297C13.18 9.373 13.99 8.629 14.987 8.629C15.984 8.629 16.793 9.373 16.793 10.297C16.793 11.22 15.984 11.964 14.987 11.964Z" fill="currentColor"/>
                </svg>
              </a>
              <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Telegram">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0C5.373 0 0 5.373 0 12C0 18.627 5.373 24 12 24C18.627 24 24 18.627 24 12C24 5.373 18.627 0 12 0ZM17.896 8.178L16.051 18.302C15.878 19.261 15.316 19.486 14.488 19.019L10.681 16.227L8.813 17.943C8.599 18.155 8.419 18.333 8.004 18.333L8.291 14.458L15.948 7.592C16.272 7.301 15.88 7.131 15.45 7.422L6.698 13.465L2.93 12.208C1.978 11.911 1.961 11.293 3.12 10.849L17.013 5.368C17.806 5.054 18.496 5.466 18.244 6.515L17.896 8.178Z" fill="currentColor"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="footer-copyright">&copy; {new Date().getFullYear()} Chain Neo. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
