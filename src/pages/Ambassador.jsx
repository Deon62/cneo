import '../Home.css'
import './Ambassador.css'
import Navbar from '../components/Navbar'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Ambassador() {
  const [formData, setFormData] = useState({
    // Basic Information
    fullName: '',
    email: '',
    phone: '',
    city: '',
    institution: '',
    
    // Chapter Details
    chapterLocation: '',
    locationReason: '',
    
    // Your Background
    currentRole: '',
    experience: '',
    organizedEvents: '',
    eventDescription: '',
    
    // Execution & Commitment
    first90Days: '',
    timeCommitment: '',
    hasTeam: '',
    
    // Alignment & Motivation
    whyAmbassador: '',
    blockchainAdoption: '',
    
    // Links
    links: '',
    previousLinks: '',
    
    // Acknowledgement
    acknowledgeLeadership: false,
    acknowledgeValues: false
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Validate required checkboxes
    if (!formData.acknowledgeLeadership || !formData.acknowledgeValues) {
      alert('Please acknowledge both statements before submitting.')
      return
    }

    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData)
      setIsSubmitting(false)
      setSubmitSuccess(true)
      
      // Reset form after success
      setTimeout(() => {
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          city: '',
          institution: '',
          chapterLocation: '',
          locationReason: '',
          currentRole: '',
          experience: '',
          organizedEvents: '',
          eventDescription: '',
          first90Days: '',
          timeCommitment: '',
          hasTeam: '',
          whyAmbassador: '',
          blockchainAdoption: '',
          links: '',
          previousLinks: '',
          acknowledgeLeadership: false,
          acknowledgeValues: false
        })
        setSubmitSuccess(false)
      }, 5000)
    }, 1500)
  }

  if (submitSuccess) {
    return (
      <div className="app">
        <Navbar />
        <div className="ambassador-success">
          <div className="ambassador-success-container">
            <div className="ambassador-success-content">
              <h1 className="ambassador-success-title">Application Submitted!</h1>
              <p className="ambassador-success-message">
                Thank you for applying to become a Chain Neo Ambassador. We've received your application and will review it carefully.
              </p>
              <p className="ambassador-success-message">
                Our team will get back to you within 5-7 business days. In the meantime, feel free to join our community and start engaging!
              </p>
              <Link to="/community" className="ambassador-success-button">
                Back to Community
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="app">
      <Navbar />
      
      {/* Header Section */}
      <section className="ambassador-header">
        <div className="ambassador-header-container">
          <div className="ambassador-header-content">
            <h1 className="ambassador-header-title">Chain Neo Ambassador Program</h1>
            <p className="ambassador-header-subtitle">
              Apply to Lead a Local Chapter
            </p>
            <p className="ambassador-header-description">
              We're opening community chapters across Kenya and East Africa.
              This role is for builders, organizers, and leaders ready to grow blockchain education and activity on the ground.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="ambassador-form-section">
        <div className="ambassador-form-container">
          <form className="ambassador-form" onSubmit={handleSubmit}>
            
            {/* Section 1: Basic Information */}
            <div className="form-section">
              <h2 className="form-section-title">1. Basic Information</h2>
              
              <div className="form-group">
                <label htmlFor="fullName" className="form-label">Full Name <span className="required">*</span></label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address <span className="required">*</span></label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone" className="form-label">Phone Number / WhatsApp <span className="required">*</span></label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="city" className="form-label">City / Town <span className="required">*</span></label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="institution" className="form-label">Institution or Organization (if applicable)</label>
                <input
                  type="text"
                  id="institution"
                  name="institution"
                  value={formData.institution}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
            </div>

            {/* Section 2: Chapter Details */}
            <div className="form-section">
              <h2 className="form-section-title">2. Chapter Details</h2>
              
              <div className="form-group">
                <label htmlFor="chapterLocation" className="form-label">
                  Where do you want to open a Chain Neo chapter? <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="chapterLocation"
                  name="chapterLocation"
                  value={formData.chapterLocation}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="e.g., University of Nairobi, Mombasa Community, etc."
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="locationReason" className="form-label">
                  Why this location? <span className="required">*</span>
                </label>
                <textarea
                  id="locationReason"
                  name="locationReason"
                  value={formData.locationReason}
                  onChange={handleChange}
                  className="form-textarea"
                  rows="4"
                  required
                />
              </div>
            </div>

            {/* Section 3: Your Background */}
            <div className="form-section">
              <h2 className="form-section-title">3. Your Background</h2>
              
              <div className="form-group">
                <label htmlFor="currentRole" className="form-label">
                  Current Role / Area of Focus <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="currentRole"
                  name="currentRole"
                  value={formData.currentRole}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="experience" className="form-label">
                  Your experience with tech, blockchain, or community building <span className="required">*</span>
                </label>
                <textarea
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className="form-textarea"
                  rows="5"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  Have you organized or supported events before? <span className="required">*</span>
                </label>
                <div className="radio-group">
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="organizedEvents"
                      value="yes"
                      checked={formData.organizedEvents === 'yes'}
                      onChange={handleChange}
                      className="radio-input"
                      required
                    />
                    <span>Yes</span>
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="organizedEvents"
                      value="no"
                      checked={formData.organizedEvents === 'no'}
                      onChange={handleChange}
                      className="radio-input"
                      required
                    />
                    <span>No</span>
                  </label>
                </div>
              </div>

              {formData.organizedEvents === 'yes' && (
                <div className="form-group">
                  <label htmlFor="eventDescription" className="form-label">If yes, describe briefly:</label>
                  <textarea
                    id="eventDescription"
                    name="eventDescription"
                    value={formData.eventDescription}
                    onChange={handleChange}
                    className="form-textarea"
                    rows="4"
                  />
                </div>
              )}
            </div>

            {/* Section 4: Execution & Commitment */}
            <div className="form-section">
              <h2 className="form-section-title">4. Execution & Commitment</h2>
              
              <div className="form-group">
                <label htmlFor="first90Days" className="form-label">
                  What would your first 90 days as a chapter lead look like? <span className="required">*</span>
                </label>
                <textarea
                  id="first90Days"
                  name="first90Days"
                  value={formData.first90Days}
                  onChange={handleChange}
                  className="form-textarea"
                  rows="6"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  How much time can you realistically commit per week? <span className="required">*</span>
                </label>
                <div className="radio-group radio-group-column">
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="timeCommitment"
                      value="5-10"
                      checked={formData.timeCommitment === '5-10'}
                      onChange={handleChange}
                      className="radio-input"
                      required
                    />
                    <span>5–10 hrs</span>
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="timeCommitment"
                      value="10-20"
                      checked={formData.timeCommitment === '10-20'}
                      onChange={handleChange}
                      className="radio-input"
                      required
                    />
                    <span>10–20 hrs</span>
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="timeCommitment"
                      value="20+"
                      checked={formData.timeCommitment === '20+'}
                      onChange={handleChange}
                      className="radio-input"
                      required
                    />
                    <span>20+ hrs</span>
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">
                  Do you already have a small team or peers who could help? <span className="required">*</span>
                </label>
                <div className="radio-group">
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="hasTeam"
                      value="yes"
                      checked={formData.hasTeam === 'yes'}
                      onChange={handleChange}
                      className="radio-input"
                      required
                    />
                    <span>Yes</span>
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="hasTeam"
                      value="no"
                      checked={formData.hasTeam === 'no'}
                      onChange={handleChange}
                      className="radio-input"
                      required
                    />
                    <span>No</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Section 5: Alignment & Motivation */}
            <div className="form-section">
              <h2 className="form-section-title">5. Alignment & Motivation</h2>
              
              <div className="form-group">
                <label htmlFor="whyAmbassador" className="form-label">
                  Why do you want to be a Chain Neo Ambassador? <span className="required">*</span>
                </label>
                <textarea
                  id="whyAmbassador"
                  name="whyAmbassador"
                  value={formData.whyAmbassador}
                  onChange={handleChange}
                  className="form-textarea"
                  rows="5"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="blockchainAdoption" className="form-label">
                  What does "real blockchain adoption" mean to you? <span className="required">*</span>
                </label>
                <textarea
                  id="blockchainAdoption"
                  name="blockchainAdoption"
                  value={formData.blockchainAdoption}
                  onChange={handleChange}
                  className="form-textarea"
                  rows="4"
                  required
                />
              </div>
            </div>

            {/* Section 6: Links */}
            <div className="form-section">
              <h2 className="form-section-title">6. Links</h2>
              
              <div className="form-group">
                <label htmlFor="links" className="form-label">LinkedIn / X / GitHub / Portfolio</label>
                <input
                  type="url"
                  id="links"
                  name="links"
                  value={formData.links}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="https://..."
                />
              </div>

              <div className="form-group">
                <label htmlFor="previousLinks" className="form-label">Previous community or event links (if any)</label>
                <input
                  type="url"
                  id="previousLinks"
                  name="previousLinks"
                  value={formData.previousLinks}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="https://..."
                />
              </div>
            </div>

            {/* Final Acknowledgement */}
            <div className="form-section">
              <h2 className="form-section-title">Final Acknowledgement</h2>
              
              <div className="form-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="acknowledgeLeadership"
                    checked={formData.acknowledgeLeadership}
                    onChange={handleChange}
                    className="checkbox-input"
                    required
                  />
                  <span className="checkbox-text">
                    I understand this is a leadership and execution role, not just a title. <span className="required">*</span>
                  </span>
                </label>
              </div>

              <div className="form-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="acknowledgeValues"
                    checked={formData.acknowledgeValues}
                    onChange={handleChange}
                    className="checkbox-input"
                    required
                  />
                  <span className="checkbox-text">
                    I'm committed to upholding Chain Neo's values and community standards. <span className="required">*</span>
                  </span>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="form-submit-wrapper">
              <button type="submit" className="form-submit-button" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>
            </div>
          </form>
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

export default Ambassador
