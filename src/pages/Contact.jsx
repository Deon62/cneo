import '../Home.css'
import './Contact.css'
import Navbar from '../components/Navbar'
import { useState } from 'react'
import contactImage from '../assets/contact.svg'
import emailSvg from '../assets/email.svg'
import { Link } from 'react-router-dom'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [newsletterFilters, setNewsletterFilters] = useState({
    developers: false,
    general: false,
    events: false
  })
  const [newsletterSuccess, setNewsletterSuccess] = useState(false)
  const [newsletterError, setNewsletterError] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
    alert('Thank you for your message! We will get back to you soon.')
  }

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
      <section className="contact-header">
        <div className="contact-header-container">
          <div className="contact-header-content">
            <h1 className="contact-header-title">Contact Us</h1>
            <p className="contact-header-subtitle">
              Have questions, ideas, or want to collaborate? We'd love to hear from you. 
              Get in touch with the Chain Neo team and let's build East Africa's blockchain future together.
            </p>
          </div>
          <div className="contact-header-image">
            <img src={contactImage} alt="Contact illustration" />
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="contact-form-container">
          <div className="contact-form-header">
            <h2 className="contact-form-title">Send us a Message</h2>
            <p className="contact-form-description">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
            <div className="contact-form-image">
              <img src={emailSvg} alt="Email illustration" />
            </div>
          </div>
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="What is this regarding?"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  placeholder="Tell us more about your inquiry..."
                  rows="4"
                  required
                ></textarea>
              </div>
              <button type="submit" className="contact-submit-btn">
                Send Message
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="contact-info-section">
        <div className="contact-info-container">
          <div className="contact-info-header">
            <h2 className="contact-info-title">Connect With Us Directly</h2>
          </div>
          <div className="contact-channels">
            <a href="mailto:contact@chainneo.org" className="contact-channel">
              <div className="contact-channel-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="contact-channel-info">
                <span className="contact-channel-name">Email</span>
                <span className="contact-channel-value">contact@chainneo.org</span>
              </div>
            </a>

            <a href="#" className="contact-channel">
              <div className="contact-channel-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </div>
              <div className="contact-channel-info">
                <span className="contact-channel-name">Telegram</span>
                <span className="contact-channel-value">Join our community</span>
              </div>
            </a>

            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="contact-channel">
              <div className="contact-channel-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </div>
              <div className="contact-channel-info">
                <span className="contact-channel-name">X (Twitter)</span>
                <span className="contact-channel-value">Follow for updates</span>
              </div>
            </a>
          </div>

          {/* Community Stats Card */}
          <div className="contact-stats-card">
            <div className="contact-stat-section contact-stat-section-white">
              <div className="contact-stat-number">0</div>
              <div className="contact-stat-label">Telegram Members</div>
            </div>
            <div className="contact-stat-section contact-stat-section-dark">
              <div className="contact-stat-number">0</div>
              <div className="contact-stat-label">Twitter Followers</div>
            </div>
            <div className="contact-stat-section contact-stat-section-light">
              <div className="contact-stat-number">0</div>
              <div className="contact-stat-label">All Platforms Combined</div>
            </div>
            <div className="contact-stat-section contact-stat-section-accent">
              <div className="contact-stat-number">0%</div>
              <div className="contact-stat-label">Growing Rate</div>
            </div>
          </div>
          <p className="stats-note">We're just getting started! As a new startup, we're building our community from the ground up. Join us to be part of our growth story.</p>
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

export default Contact
