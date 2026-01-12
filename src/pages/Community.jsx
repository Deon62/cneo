import '../Community.css'
import '../Home.css'
import Navbar from '../components/Navbar'
import learnSvg from '../assets/learn.svg'
import impactSvg from '../assets/impact.svg'
import communitySvg from '../assets/community.svg'
import universitySvg from '../assets/university.svg'
import communityHeaderSvg from '../assets/community1.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Community() {
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [newsletterFilters, setNewsletterFilters] = useState({
    developers: false,
    general: false,
    events: false
  })
  const [newsletterSuccess, setNewsletterSuccess] = useState(false)
  const [newsletterError, setNewsletterError] = useState('')

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    
    // Validate at least one checkbox is selected
    const hasSelectedFilter = newsletterFilters.developers || newsletterFilters.general || newsletterFilters.events
    
    if (!hasSelectedFilter) {
      setNewsletterError('Please select at least one newsletter subscription')
      return
    }
    
    // Clear any previous errors
    setNewsletterError('')
    
    console.log('Newsletter subscription:', { email: newsletterEmail, filters: newsletterFilters })
    
    // Show success message
    setNewsletterSuccess(true)
    
    // Reset form after a delay (optional, or keep it visible)
    setTimeout(() => {
      setNewsletterEmail('')
      setNewsletterFilters({
        developers: false,
        general: false,
        events: false
      })
    }, 5000)
  }

  const handleFilterChange = (filter) => {
    setNewsletterFilters({
      ...newsletterFilters,
      [filter]: !newsletterFilters[filter]
    })
    // Clear error when user selects a checkbox
    if (newsletterError) {
      setNewsletterError('')
    }
  }

  const handleNewsletterEmailChange = (e) => {
    setNewsletterEmail(e.target.value)
    // Clear error when user types
    if (newsletterError) {
      setNewsletterError('')
    }
  }

  return (
    <div className="app">
      <Navbar />
      
      {/* Header Section */}
      <section className="community-header">
        <div className="community-header-container">
          <div className="community-header-image">
            <img src={communityHeaderSvg} alt="Community Illustration" />
          </div>
          <div className="community-header-content">
            <h1 className="community-header-title">Our Community</h1>
            <p className="community-header-subtitle">
              Join a vibrant network of blockchain builders, learners, and innovators across East Africa. 
              Together, we're shaping the future of decentralized technology.
            </p>
          </div>
        </div>
      </section>

      {/* Community Values Section */}
      <section className="community-values-section">
        <div className="community-values-container">
          <h2 className="section-title">Why Join Our Community</h2>
          <p className="community-values-intro">
            We're more than just a community we're a movement dedicated to empowering East Africa's blockchain ecosystem 
            through collaboration, education, and innovation.
          </p>
          <div className="community-values-grid">
            <div className="community-value-card">
              <div className="value-icon">
                <img src={learnSvg} alt="Learn Together" />
              </div>
              <h3 className="value-title">Learn Together</h3>
              <p className="value-description">
                Access comprehensive learning resources, courses, and workshops designed to help you master blockchain technology at your own pace.
              </p>
            </div>

            <div className="community-value-card">
              <div className="value-icon">
                <img src={communitySvg} alt="Build Connections" />
              </div>
              <h3 className="value-title">Build Connections</h3>
              <p className="value-description">
                Connect with like minded builders, developers, and entrepreneurs. Network with industry leaders and find your next collaborator.
              </p>
            </div>

            <div className="community-value-card">
              <div className="value-icon">
                <img src={impactSvg} alt="Create Impact" />
              </div>
              <h3 className="value-title">Create Impact</h3>
              <p className="value-description">
                Work on real world projects that solve problems and create value. Contribute to East Africa's blockchain transformation.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Community Chapters Section */}
      <section className="chapters-section">
        <div className="chapters-container">
          <div className="chapters-content">
            <div className="chapters-image">
              <img src={universitySvg} alt="University Chapters" />
            </div>
            <div className="chapters-header">
              <p className="chapters-label">Introducing</p>
              <h2 className="chapters-title">Community Chapters</h2>
              <p className="chapters-description">
                We're building a network of campus chapters across universities, TVETs, and colleges throughout East Africa. 
                Join us in bringing blockchain education and innovation to educational institutions near you.
              </p>
              <div className="chapters-cta-wrapper">
                <a href="#" className="chapters-cta-button">
                  Start a Chapter
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="chapters-stats-card">
            <div className="stat-section stat-section-white">
              <div className="stat-number">0</div>
              <div className="stat-label">Ambassadors</div>
            </div>
            <div className="stat-section stat-section-dark">
              <div className="stat-number">0</div>
              <div className="stat-label">Events Run</div>
            </div>
            <div className="stat-section stat-section-light">
              <div className="stat-number">0</div>
              <div className="stat-label">Projects Supported</div>
            </div>
          </div>
          <p className="stats-note">We're just getting started! As a new startup, we're building our community from the ground up. Join us to be part of our growth story.</p>
        </div>
      </section>

      {/* Telegram Section */}
      <section className="telegram-section">
        <div className="telegram-container">
          <div className="telegram-logo-wrapper">
            <div className="telegram-logo">
              <svg width="200" height="200" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0C5.373 0 0 5.373 0 12C0 18.627 5.373 24 12 24C18.627 24 24 18.627 24 12C24 5.373 18.627 0 12 0ZM17.896 8.178L16.051 18.302C15.878 19.261 15.316 19.486 14.488 19.019L10.681 16.227L8.813 17.943C8.599 18.155 8.419 18.333 8.004 18.333L8.291 14.458L15.948 7.592C16.272 7.301 15.88 7.131 15.45 7.422L6.698 13.465L2.93 12.208C1.978 11.911 1.961 11.293 3.12 10.849L17.013 5.368C17.806 5.054 18.496 5.466 18.244 6.515L17.896 8.178Z" fill="currentColor"/>
              </svg>
            </div>
          </div>
          <div className="telegram-content">
            <h2 className="telegram-title">Join our Telegram</h2>
            <p className="telegram-description">
              The Chain Neo Telegram is a community group for events, feedback, questions, mentoring, expert guidance, and networking.
            </p>
            <a href="#" className="telegram-button">
              Join Now
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Our Growth Section */}
      <section className="growth-section">
        <div className="growth-container">
          <div className="growth-header">
            <p className="growth-label">Our Growth</p>
            <h2 className="growth-title">Join the Movement</h2>
            <p className="growth-description">
              Connect with us across all platforms and be part of East Africa's fastest-growing blockchain community.
            </p>
          </div>
          <div className="growth-stats-card">
            <div className="growth-stat-section growth-stat-section-white">
              <div className="growth-stat-number">0</div>
              <div className="growth-stat-label">Telegram Members</div>
            </div>
            <div className="growth-stat-section growth-stat-section-dark">
              <div className="growth-stat-number">0</div>
              <div className="growth-stat-label">Twitter Followers</div>
            </div>
            <div className="growth-stat-section growth-stat-section-light">
              <div className="growth-stat-number">0</div>
              <div className="growth-stat-label">All Platforms Combined</div>
            </div>
            <div className="growth-stat-section growth-stat-section-accent">
              <div className="growth-stat-number">0%</div>
              <div className="growth-stat-label">Growing Rate</div>
            </div>
          </div>
          <p className="stats-note">We're just getting started! As a new startup, we're building our community from the ground up. Join us to be part of our growth story.</p>
        </div>
      </section>

      {/* Partner Section */}
      <section className="partner-section">
        <div className="partner-container">
          <div className="partner-content">
            <span className="partner-label">Collaborate With Us</span>
            <h2 className="partner-title">Let's Build Together</h2>
            <p className="partner-description">
              We're looking for organizations, protocols, and companies who share our vision of empowering East African youth in blockchain. Whether you're a Web3 project seeking local talent, an educator wanting to expand your reach, or a business looking to support the next generation of builders—let's connect.
            </p>
            <a href="/contact" className="partner-button">
              Become a Partner
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Our Partners Section */}
      <section className="partners-section">
        <div className="partners-container">
          <div className="partners-header">
            <h2 className="partners-title">Our Partners</h2>
            <p className="partners-description">
              We wouldn't have gotten this far without our Partners. Our partners are our backbone, providing much-needed support to continue to support East Africa.
            </p>
          </div>
          <div className="partners-grid">
            <div className="partner-card"></div>
            <div className="partner-card"></div>
            <div className="partner-card"></div>
            <div className="partner-card"></div>
            <div className="partner-card"></div>
            <div className="partner-card"></div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="newsletter-container">
          <div className="newsletter-content">
            <div className="newsletter-left">
              <h2 className="newsletter-title">The Newsletter you want to read</h2>
              <p className="newsletter-description">
                Get the latest updates on blockchain education, community events, and opportunities delivered straight to your inbox.
              </p>
            </div>
            <div className="newsletter-right">
              {!newsletterSuccess ? (
                <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
                  <div className="newsletter-filters">
                    <label className="newsletter-checkbox-label">
                      <input 
                        type="checkbox" 
                        checked={newsletterFilters.developers}
                        onChange={() => handleFilterChange('developers')}
                        className="newsletter-checkbox"
                      />
                      <div className="checkbox-content">
                        <span className="checkbox-title">Developers Newsletter</span>
                        <span className="checkbox-note">Technical tutorials, code snippets, and dev resources</span>
                      </div>
                    </label>
                    <label className="newsletter-checkbox-label">
                      <input 
                        type="checkbox" 
                        checked={newsletterFilters.general}
                        onChange={() => handleFilterChange('general')}
                        className="newsletter-checkbox"
                      />
                      <div className="checkbox-content">
                        <span className="checkbox-title">General</span>
                        <span className="checkbox-note">Community updates, news, and announcements</span>
                      </div>
                    </label>
                    <label className="newsletter-checkbox-label">
                      <input 
                        type="checkbox" 
                        checked={newsletterFilters.events}
                        onChange={() => handleFilterChange('events')}
                        className="newsletter-checkbox"
                      />
                      <div className="checkbox-content">
                        <span className="checkbox-title">Events & Opportunities</span>
                        <span className="checkbox-note">Hackathons, workshops, jobs, and career opportunities</span>
                      </div>
                    </label>
                  </div>
                  {newsletterError && (
                    <div className="newsletter-error">
                      {newsletterError}
                    </div>
                  )}
                  <div className="newsletter-input-wrapper">
                    <input 
                      type="email" 
                      placeholder="Enter your email address" 
                      className="newsletter-input"
                      value={newsletterEmail}
                      onChange={handleNewsletterEmailChange}
                      required
                    />
                  </div>
                  <button type="submit" className="newsletter-button">
                    Subscribe
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </form>
              ) : (
                <div className="newsletter-success">
                  <h3 className="newsletter-success-title">The Newsletters</h3>
                  <h4 className="newsletter-success-subtitle">The email you actually want to read</h4>
                  <p className="newsletter-success-description">
                    Hear it from us first. Sign up to get the real-time scoop on blockchain ecosystem news, educational resources, and opportunities.
                  </p>
                  <div className="newsletter-success-thanks">
                    <p className="newsletter-success-thanks-title">Thank You</p>
                    <p className="newsletter-success-thanks-text">
                      Welcome to the community. We'll keep you in the loop. If you'd like, get started with some of our <a href="/academy" className="newsletter-success-link">Learning Resources</a> or <a href="/blog" className="newsletter-success-link">Blog</a>.
                    </p>
                  </div>
                  <button 
                    className="newsletter-button"
                    onClick={() => {
                      setNewsletterSuccess(false)
                      setNewsletterEmail('')
                      setNewsletterFilters({
                        developers: false,
                        general: false,
                        events: false
                      })
                    }}
                  >
                    Subscribe Another Email
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-main">
            <div className="footer-brand">
              <Link to="/" className="footer-logo">
                <span className="footer-logo-text">Chain Neo</span>
              </Link>
              <p className="footer-tagline">Building East Africa's Blockchain Builders</p>
            </div>
            <div className="footer-links-wrapper">
              <div className="footer-column">
                <h4 className="footer-column-title">Navigate</h4>
                <ul className="footer-links">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About Us</Link></li>
                  <li><Link to="/academy">Academy</Link></li>
                  <li><Link to="/events">Events</Link></li>
                </ul>
              </div>
              <div className="footer-column">
                <h4 className="footer-column-title">Community</h4>
                <ul className="footer-links">
                  <li><Link to="/community">Join Us</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </div>
              <div className="footer-column">
                <h4 className="footer-column-title">Legal</h4>
                <ul className="footer-links">
                  <li><Link to="/legal#terms">Terms of Service</Link></li>
                  <li><Link to="/legal#privacy">Privacy Policy</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-social">
              <span className="footer-social-label">Follow us</span>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer" aria-label="Discord">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z"/>
                </svg>
              </a>
              <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </a>
            </div>
            <p className="footer-copyright">&copy; {new Date().getFullYear()} Chain Neo. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Community
