import '../Home.css'
import './Partner.css'
import Navbar from '../components/Navbar'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Partner() {
  const [formData, setFormData] = useState({
    // Organization Details
    organizationName: '',
    website: '',
    organizationType: '',
    primaryContactName: '',
    role: '',
    email: '',
    
    // Collaboration
    collaborationOptions: {
      developerOnboarding: false,
      communityActivation: false,
      campusWorkshops: false,
      hackathons: false,
      contentResearch: false,
      talentDiscovery: false,
      other: false
    },
    otherCollaboration: '',
    
    // Objective
    objective: '',
    
    // Target Audience
    targetAudience: '',
    specificLocations: '',
    
    // Timeline & Readiness
    startTimeline: '',
    hasBudget: '',
    
    // Alignment Check
    whyChainNeo: '',
    
    // Additional Context
    additionalContext: '',
    
    // Acknowledgement
    acknowledge: false
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    
    // Map checkbox names to state keys
    const collaborationMap = {
      'collaborationDeveloper': 'developeronboarding',
      'collaborationCommunity': 'communityactivation',
      'collaborationCampus': 'campusworkshops',
      'collaborationHackathons': 'hackathons',
      'collaborationContent': 'contentresearch',
      'collaborationTalent': 'talentdiscovery',
      'collaborationOther': 'other'
    }
    
    if (collaborationMap[name]) {
      setFormData(prev => ({
        ...prev,
        collaborationOptions: {
          ...prev.collaborationOptions,
          [collaborationMap[name]]: checked
        }
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Validate at least one collaboration option is selected
    const hasCollaborationOption = Object.values(formData.collaborationOptions).some(val => val === true)
    if (!hasCollaborationOption) {
      alert('Please select at least one collaboration option.')
      return
    }

    // Validate required checkbox
    if (!formData.acknowledge) {
      alert('Please acknowledge the statement before submitting.')
      return
    }

    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Partner form submitted:', formData)
      setIsSubmitting(false)
      setSubmitSuccess(true)
      
      // Reset form after success
      setTimeout(() => {
        setFormData({
          organizationName: '',
          website: '',
          organizationType: '',
          primaryContactName: '',
          role: '',
          email: '',
          collaborationOptions: {
            developerOnboarding: false,
            communityActivation: false,
            campusWorkshops: false,
            hackathons: false,
            contentResearch: false,
            talentDiscovery: false,
            other: false
          },
          otherCollaboration: '',
          objective: '',
          targetAudience: '',
          specificLocations: '',
          startTimeline: '',
          hasBudget: '',
          whyChainNeo: '',
          additionalContext: '',
          acknowledge: false
        })
        setSubmitSuccess(false)
      }, 5000)
    }, 1500)
  }

  if (submitSuccess) {
    return (
      <div className="app">
        <Navbar />
        <div className="partner-success">
          <div className="partner-success-container">
            <div className="partner-success-content">
              <h1 className="partner-success-title">Application Submitted!</h1>
              <p className="partner-success-message">
                Thank you for your interest in partnering with Chain Neo. We've received your application and will review it carefully.
              </p>
              <p className="partner-success-message">
                Our team will get back to you within 5-7 business days. We look forward to exploring how we can collaborate together!
              </p>
              <Link to="/community" className="partner-success-button">
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
      <section className="partner-header">
        <div className="partner-header-container">
          <div className="partner-header-content">
            <h1 className="partner-header-title">Partner With Chain Neo</h1>
            <p className="partner-header-subtitle">
              Calling Early Partners
            </p>
            <p className="partner-header-description">
              Chain Neo is opening collaboration slots for Web3 protocols, universities, and organizations interested in building blockchain talent across East Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="partner-form-section">
        <div className="partner-form-container">
          <form className="partner-form" onSubmit={handleSubmit}>
            
            {/* Section 1: Organization Details */}
            <div className="form-section">
              <h2 className="form-section-title">1. Organization Details</h2>
              
              <div className="form-group">
                <label htmlFor="organizationName" className="form-label">
                  Organization / Project Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="organizationName"
                  name="organizationName"
                  value={formData.organizationName}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="website" className="form-label">Website</label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="https://..."
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  Type of Organization <span className="required">*</span>
                </label>
                <div className="radio-group radio-group-column">
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="organizationType"
                      value="web3-protocol"
                      checked={formData.organizationType === 'web3-protocol'}
                      onChange={handleChange}
                      className="radio-input"
                      required
                    />
                    <span>Web3 Protocol / Network</span>
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="organizationType"
                      value="web3-startup"
                      checked={formData.organizationType === 'web3-startup'}
                      onChange={handleChange}
                      className="radio-input"
                      required
                    />
                    <span>Web3 Startup</span>
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="organizationType"
                      value="university"
                      checked={formData.organizationType === 'university'}
                      onChange={handleChange}
                      className="radio-input"
                      required
                    />
                    <span>University / TVET</span>
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="organizationType"
                      value="foundation"
                      checked={formData.organizationType === 'foundation'}
                      onChange={handleChange}
                      className="radio-input"
                      required
                    />
                    <span>Foundation / NGO</span>
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="organizationType"
                      value="company"
                      checked={formData.organizationType === 'company'}
                      onChange={handleChange}
                      className="radio-input"
                      required
                    />
                    <span>Company / Enterprise</span>
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="organizationType"
                      value="other"
                      checked={formData.organizationType === 'other'}
                      onChange={handleChange}
                      className="radio-input"
                      required
                    />
                    <span>Other</span>
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="primaryContactName" className="form-label">
                  Primary Contact Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="primaryContactName"
                  name="primaryContactName"
                  value={formData.primaryContactName}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="role" className="form-label">Role / Title</label>
                <input
                  type="text"
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email Address <span className="required">*</span>
                </label>
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
            </div>

            {/* Section 2: What Are You Looking to Collaborate On? */}
            <div className="form-section">
              <h2 className="form-section-title">2. What Are You Looking to Collaborate On?</h2>
              <p className="form-section-subtitle">(Select all that apply)</p>
              
              <div className="checkbox-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="collaborationDeveloper"
                    checked={formData.collaborationOptions.developeronboarding}
                    onChange={handleChange}
                    className="checkbox-input"
                  />
                  <span className="checkbox-text">Developer onboarding & education</span>
                </label>

                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="collaborationCommunity"
                    checked={formData.collaborationOptions.communityactivation}
                    onChange={handleChange}
                    className="checkbox-input"
                  />
                  <span className="checkbox-text">Community activation & grassroots outreach</span>
                </label>

                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="collaborationCampus"
                    checked={formData.collaborationOptions.campusworkshops}
                    onChange={handleChange}
                    className="checkbox-input"
                  />
                  <span className="checkbox-text">Campus workshops / bootcamps</span>
                </label>

                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="collaborationHackathons"
                    checked={formData.collaborationOptions.hackathons}
                    onChange={handleChange}
                    className="checkbox-input"
                  />
                  <span className="checkbox-text">Hackathons / build challenges</span>
                </label>

                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="collaborationContent"
                    checked={formData.collaborationOptions.contentresearch}
                    onChange={handleChange}
                    className="checkbox-input"
                  />
                  <span className="checkbox-text">Content & ecosystem research</span>
                </label>

                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="collaborationTalent"
                    checked={formData.collaborationOptions.talentdiscovery}
                    onChange={handleChange}
                    className="checkbox-input"
                  />
                  <span className="checkbox-text">Talent discovery & hiring pipeline</span>
                </label>

                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="collaborationOther"
                    checked={formData.collaborationOptions.other}
                    onChange={handleChange}
                    className="checkbox-input"
                  />
                  <span className="checkbox-text">Other</span>
                </label>
              </div>

              {formData.collaborationOptions.other && (
                <div className="form-group" style={{ marginTop: '16px' }}>
                  <label htmlFor="otherCollaboration" className="form-label">Please specify:</label>
                  <input
                    type="text"
                    id="otherCollaboration"
                    name="otherCollaboration"
                    value={formData.otherCollaboration}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
              )}
            </div>

            {/* Section 3: Your Objective */}
            <div className="form-section">
              <h2 className="form-section-title">3. Your Objective</h2>
              
              <div className="form-group">
                <label htmlFor="objective" className="form-label">
                  What problem are you trying to solve or goal are you trying to achieve? <span className="required">*</span>
                </label>
                <textarea
                  id="objective"
                  name="objective"
                  value={formData.objective}
                  onChange={handleChange}
                  className="form-textarea"
                  rows="5"
                  required
                />
              </div>
            </div>

            {/* Section 4: Target Audience */}
            <div className="form-section">
              <h2 className="form-section-title">4. Target Audience</h2>
              
              <div className="form-group">
                <label className="form-label">
                  Who are you most interested in reaching? <span className="required">*</span>
                </label>
                <div className="radio-group radio-group-column">
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="targetAudience"
                      value="students"
                      checked={formData.targetAudience === 'students'}
                      onChange={handleChange}
                      className="radio-input"
                      required
                    />
                    <span>Students</span>
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="targetAudience"
                      value="developers"
                      checked={formData.targetAudience === 'developers'}
                      onChange={handleChange}
                      className="radio-input"
                      required
                    />
                    <span>Developers</span>
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="targetAudience"
                      value="founders"
                      checked={formData.targetAudience === 'founders'}
                      onChange={handleChange}
                      className="radio-input"
                      required
                    />
                    <span>Founders</span>
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="targetAudience"
                      value="non-technical"
                      checked={formData.targetAudience === 'non-technical'}
                      onChange={handleChange}
                      className="radio-input"
                      required
                    />
                    <span>Non-technical community members</span>
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="targetAudience"
                      value="mixed"
                      checked={formData.targetAudience === 'mixed'}
                      onChange={handleChange}
                      className="radio-input"
                      required
                    />
                    <span>Mixed</span>
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="specificLocations" className="form-label">
                  Any specific locations or institutions in mind? (Optional)
                </label>
                <input
                  type="text"
                  id="specificLocations"
                  name="specificLocations"
                  value={formData.specificLocations}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
            </div>

            {/* Section 5: Timeline & Readiness */}
            <div className="form-section">
              <h2 className="form-section-title">5. Timeline & Readiness</h2>
              
              <div className="form-group">
                <label className="form-label">
                  When are you looking to start? <span className="required">*</span>
                </label>
                <div className="radio-group radio-group-column">
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="startTimeline"
                      value="immediately"
                      checked={formData.startTimeline === 'immediately'}
                      onChange={handleChange}
                      className="radio-input"
                      required
                    />
                    <span>Immediately</span>
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="startTimeline"
                      value="1-3"
                      checked={formData.startTimeline === '1-3'}
                      onChange={handleChange}
                      className="radio-input"
                      required
                    />
                    <span>1–3 months</span>
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="startTimeline"
                      value="3-6"
                      checked={formData.startTimeline === '3-6'}
                      onChange={handleChange}
                      className="radio-input"
                      required
                    />
                    <span>3–6 months</span>
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">
                  Do you have a budget or resources allocated for this collaboration? <span className="required">*</span>
                </label>
                <div className="radio-group">
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="hasBudget"
                      value="yes"
                      checked={formData.hasBudget === 'yes'}
                      onChange={handleChange}
                      className="radio-input"
                      required
                    />
                    <span>Yes</span>
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="hasBudget"
                      value="no"
                      checked={formData.hasBudget === 'no'}
                      onChange={handleChange}
                      className="radio-input"
                      required
                    />
                    <span>No</span>
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="hasBudget"
                      value="discussion"
                      checked={formData.hasBudget === 'discussion'}
                      onChange={handleChange}
                      className="radio-input"
                      required
                    />
                    <span>Under discussion</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Section 6: Alignment Check */}
            <div className="form-section">
              <h2 className="form-section-title">6. Alignment Check</h2>
              
              <div className="form-group">
                <label htmlFor="whyChainNeo" className="form-label">
                  Why do you want to work with Chain Neo specifically? <span className="required">*</span>
                </label>
                <textarea
                  id="whyChainNeo"
                  name="whyChainNeo"
                  value={formData.whyChainNeo}
                  onChange={handleChange}
                  className="form-textarea"
                  rows="5"
                  required
                />
              </div>
            </div>

            {/* Section 7: Additional Context */}
            <div className="form-section">
              <h2 className="form-section-title">7. Additional Context</h2>
              
              <div className="form-group">
                <label htmlFor="additionalContext" className="form-label">
                  Anything else we should know? Links, decks, docs, or context. (Optional)
                </label>
                <textarea
                  id="additionalContext"
                  name="additionalContext"
                  value={formData.additionalContext}
                  onChange={handleChange}
                  className="form-textarea"
                  rows="5"
                />
              </div>
            </div>

            {/* Acknowledgement */}
            <div className="form-section">
              <h2 className="form-section-title">Acknowledgement</h2>
              
              <div className="form-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="acknowledge"
                    checked={formData.acknowledge}
                    onChange={handleChange}
                    className="checkbox-input"
                    required
                  />
                  <span className="checkbox-text">
                    I understand Chain Neo works with a limited number of partners and prioritizes aligned, execution-driven collaborations. <span className="required">*</span>
                  </span>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="form-submit-wrapper">
              <button type="submit" className="form-submit-button" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Start a Partner Conversation'}
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

export default Partner
