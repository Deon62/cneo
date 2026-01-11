import '../App.css'
import './Contact.css'
import Navbar from '../components/Navbar'
import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

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
              Get in touch with the Chain Neo team and let's build Africa's blockchain future together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="contact-form-container">
          <div className="contact-form-wrapper">
            <div className="contact-form-header">
              <h2 className="contact-form-title">Send us a Message</h2>
              <p className="contact-form-description">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>
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
                  rows="6"
                  required
                ></textarea>
              </div>
              <button type="submit" className="contact-submit-btn">
                Send Message
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            <p className="contact-info-label">Get in Touch</p>
            <h2 className="contact-info-title">Other Ways to Reach Us</h2>
            <p className="contact-info-description">
              Prefer a different method? Connect with us through these channels.
            </p>
          </div>
          <div className="contact-info-grid">
            <div className="contact-info-card">
              <div className="contact-info-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="contact-info-card-title">Email</h3>
              <p className="contact-info-card-description">
                Send us an email and we'll respond within 24-48 hours.
              </p>
              <a href="mailto:contact@chainneo.org" className="contact-info-link">
                contact@chainneo.org
              </a>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0C5.373 0 0 5.373 0 12C0 18.627 5.373 24 12 24C18.627 24 24 18.627 24 12C24 5.373 18.627 0 12 0ZM17.896 8.178L16.051 18.302C15.878 19.261 15.316 19.486 14.488 19.019L10.681 16.227L8.813 17.943C8.599 18.155 8.419 18.333 8.004 18.333L8.291 14.458L15.948 7.592C16.272 7.301 15.88 7.131 15.45 7.422L6.698 13.465L2.93 12.208C1.978 11.911 1.961 11.293 3.12 10.849L17.013 5.368C17.806 5.054 18.496 5.466 18.244 6.515L17.896 8.178Z" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="contact-info-card-title">Telegram</h3>
              <p className="contact-info-card-description">
                Join our community group for real-time discussions and support.
              </p>
              <a href="#" className="contact-info-link">
                Join Telegram Group
              </a>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 4.01C21.09 4.39 20.12 4.65 19.1 4.78C21.16 3.57 22.64 1.6 23.26 0.24C21.29 1.35 19.07 2.09 16.69 2.43C14.78 0.5 12.03 0.49 10.11 2.41C8.91 3.61 8.29 5.26 8.5 6.91C5.89 6.75 3.44 5.65 1.5 3.88C0.26 6.15 1.03 9.08 3.49 10.57C2.65 10.57 1.86 10.36 1.17 10C1.17 10 1.17 10 1.17 10.01C1.17 12.61 3.06 14.83 5.55 15.32C4.75 15.53 3.89 15.56 3.07 15.39C3.67 17.54 5.69 19.1 8.07 19.15C6.2 20.59 3.85 21.43 1.35 21.43C0.9 21.43 0.45 21.4 0 21.33C2.52 22.91 5.51 23.87 8.72 23.87C18.93 23.87 24.58 15.62 24.58 8.41C24.58 8.17 24.57 7.93 24.55 7.7C25.52 7.02 26.35 6.17 27 5.19L22 4.01Z" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="contact-info-card-title">Social Media</h3>
              <p className="contact-info-card-description">
                Follow us on Twitter, LinkedIn, and other platforms for updates.
              </p>
              <a href="#" className="contact-info-link">
                Follow Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="newsletter-container">
          <div className="newsletter-content">
            <h2 className="newsletter-title">Stay in the Loop</h2>
            <p className="newsletter-description">
              Get the latest updates on blockchain education, community events, and opportunities delivered straight to your inbox.
            </p>
            <form className="newsletter-form">
              <div className="newsletter-input-wrapper">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="newsletter-input"
                  required
                />
                <button type="submit" className="newsletter-button">
                  Subscribe
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
              <p className="newsletter-note">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
