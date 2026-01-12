import '../About.css'
import Navbar from '../components/Navbar'
import aboutImage from '../assets/about.svg'

function About() {
  return (
    <div className="app">
      <Navbar />

      {/* Header Section */}
      <section className="about-header">
        <div className="about-header-container">
          <div className="about-header-content">
            <h1 className="about-header-title">Empowering East Africa's Next Web3 Generation</h1>
            <p className="about-header-subtitle">
              We connect young talent with blockchain opportunities—bridging the gap between emerging tech and the students, developers, and founders ready to build the future.
            </p>
          </div>
          <div className="about-header-image">
            <img src={aboutImage} alt="Chain Neo Community" />
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="vision-section">
        <div className="vision-container">
          <span className="section-label">Our Vision</span>
          <h2 className="vision-title">A Leading Youth-Driven Blockchain Community in East Africa</h2>
          <p className="vision-description">
            To become a leading youth-driven blockchain community in East Africa, producing skilled builders, informed users, and globally competitive Web3 talent.
          </p>
          <div className="vision-stats">
            <div className="vision-stat">
              <span className="stat-value">2030</span>
              <span className="stat-label">Vision Horizon</span>
            </div>
            <div className="vision-stat">
              <span className="stat-value">10K+</span>
              <span className="stat-label">Builders Trained</span>
            </div>
            <div className="vision-stat">
              <span className="stat-value">50+</span>
              <span className="stat-label">Cities Reached</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="mission-container">
          <div className="mission-content">
            <span className="section-label">Our Mission</span>
            <h2 className="mission-title">Building the Future, One Builder at a Time</h2>
            <p className="mission-description">
              We are committed to creating pathways for young Africans to thrive in the blockchain ecosystem through education, community, and real-world opportunities.
            </p>
          </div>
          <div className="mission-cards">
            <div className="mission-card">
              <span className="mission-number">01</span>
              <h3>Educate & Onboard</h3>
              <p>Educate and onboard young people into blockchain and emerging technologies through structured learning programs.</p>
            </div>
            <div className="mission-card">
              <span className="mission-number">02</span>
              <h3>Build Communities</h3>
              <p>Build sustainable tech communities through learning, collaboration, and mentorship across East Africa.</p>
            </div>
            <div className="mission-card">
              <span className="mission-number">03</span>
              <h3>Connect Globally</h3>
              <p>Support blockchain adoption by connecting global Web3 projects with local talent and communities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="story-container">
          <div className="story-header">
            <span className="section-label">Our Story</span>
            <h2 className="story-title">From Idea to Movement</h2>
          </div>
          <div className="story-content">
            <div className="story-text">
              <p>
                What started as small university workshops has grown into a vibrant community of builders across East Africa. We discovered untapped talent hungry to learn, build, and innovate.
              </p>
              <p>
                Today, we're just getting started—committed to being the launchpad for young Africans in Web3.
              </p>
            </div>
            <div className="story-timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-year">2024</span>
                  <p>Chain Neo founded</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot active"></div>
                <div className="timeline-content">
                  <span className="timeline-year">2025</span>
                  <p>Growing across East Africa</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="values-container">
          <span className="section-label">Our Values</span>
          <h2 className="values-title">What We Stand For</h2>
          <div className="values-grid">
            <div className="value-item">
              <div className="value-number">01</div>
              <h3>Accessibility</h3>
              <p>Knowledge should be free and accessible to anyone willing to learn, regardless of their background or resources.</p>
            </div>
            <div className="value-item">
              <div className="value-number">02</div>
              <h3>Community</h3>
              <p>We grow stronger together. Every member contributes to and benefits from our collective knowledge and support.</p>
            </div>
            <div className="value-item">
              <div className="value-number">03</div>
              <h3>Innovation</h3>
              <p>We encourage creative thinking and bold ideas. The best solutions often come from unexpected places.</p>
            </div>
            <div className="value-item">
              <div className="value-number">04</div>
              <h3>Integrity</h3>
              <p>We build trust through transparency, honesty, and doing what's right—even when it's difficult.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta-section">
        <div className="about-cta-container">
          <h2 className="about-cta-title">Ready to Start Your Journey?</h2>
          <p className="about-cta-description">
            Join thousands of young builders who are learning, growing, and building the future with blockchain technology.
          </p>
          <div className="about-cta-buttons">
            <a href="/community" className="cta-button-primary">
              Join the Community
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="/academy" className="cta-button-secondary">
              Explore Courses
            </a>
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

export default About
