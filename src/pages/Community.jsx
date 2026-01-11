import '../App.css'
import Navbar from '../components/Navbar'
import learnSvg from '../assets/learn.svg'
import impactSvg from '../assets/impact.svg'
import communitySvg from '../assets/community.svg'

function Community() {
  return (
    <div className="app">
      <Navbar />
      
      {/* Header Section */}
      <section className="community-header">
        <div className="community-header-container">
          <div className="community-header-content">
            <h1 className="community-header-title">Our Community</h1>
            <p className="community-header-subtitle">
              Join a vibrant network of blockchain builders, learners, and innovators across Africa. 
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
            We're more than just a community—we're a movement dedicated to empowering Africa's blockchain ecosystem 
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
                Connect with like-minded builders, developers, and entrepreneurs. Network with industry leaders and find your next collaborator.
              </p>
            </div>

            <div className="community-value-card">
              <div className="value-icon">
                <img src={impactSvg} alt="Create Impact" />
              </div>
              <h3 className="value-title">Create Impact</h3>
              <p className="value-description">
                Work on real-world projects that solve problems and create value. Contribute to Africa's blockchain transformation.
              </p>
            </div>

          </div>
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

export default Community
