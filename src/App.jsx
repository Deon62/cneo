import './Home.css'
import './animations.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import AnimatedSection from './components/AnimatedSection'

function App() {
  const [openFaq, setOpenFaq] = useState(null)

  const faqs = [
    {
      id: 1,
      question: "What is Chain Neo?",
      answer: "Chain Neo is a blockchain community-based organization focused on building East Africa's blockchain builders. We provide learning resources, courses, events, and a supportive community for anyone interested in blockchain technology."
    },
    {
      id: 2,
      question: "How do I join Chain Neo?",
      answer: "You can explore our community by clicking the 'Explore Community' button on our homepage. We welcome builders, developers, learners, and anyone interested in blockchain technology. No account registration required - just explore and engage!"
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

  return (
    <div className="app">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-headline">Building East Africa's Blockchain Builders</h1>
            <p className="hero-subtext">
              A friendly community learning, building, and growing with blockchain.
            </p>
            <div className="hero-ctas">
              <Link to="/community" className="btn btn-primary">Explore Community</Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is Chain Neo Section */}
      <section id="about" className="about-section">
        <div className="about-container">
          <AnimatedSection animation="fadeInUp" delay={0}>
            <div className="about-content">
              <span className="section-label">What is Chain Neo?</span>
              <h2 className="about-title">What is Chain Neo?</h2>
              <p className="about-description">
                Chain Neo is a friendly blockchain community dedicated to building East Africa's next generation of blockchain builders. We believe in making blockchain technology accessible, approachable, and empowering for everyone.
              </p>
            </div>
          </AnimatedSection>
          <div className="about-cards">
            <AnimatedSection animation="fadeInUp" delay={100}>
              <div className="about-card">
                <span className="about-number">01</span>
                <h3>Learn Blockchain</h3>
                <p>Master the fundamentals and advanced concepts of blockchain technology through guided learning paths designed for all skill levels.</p>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fadeInUp" delay={200}>
              <div className="about-card">
                <span className="about-number">02</span>
                <h3>Build Real Projects</h3>
                <p>Apply your knowledge by creating real-world blockchain solutions and contributing to innovative projects that make a difference.</p>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fadeInUp" delay={300}>
              <div className="about-card">
                <span className="about-number">03</span>
                <h3>Grow a Community</h3>
                <p>Connect with fellow builders, share knowledge, and grow together in a supportive ecosystem that celebrates learning and collaboration.</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Programs & Opportunities Section */}
      <section id="how-it-works" className="how-it-works-section">
        <AnimatedSection animation="fadeInUp" delay={0}>
          <div className="how-it-works-header">
            <h2 className="how-it-works-title">Programs & Opportunities</h2>
            <p className="how-it-works-description">
              Explore our comprehensive programs designed to help you learn, build, and grow in the blockchain space.
            </p>
          </div>
        </AnimatedSection>
        <div className="how-it-works-grid">
          <AnimatedSection animation="fadeInLeft" delay={100}>
            <Link to="/academy" className="how-it-works-card">
              <div className="how-it-works-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="how-it-works-card-title">Courses & Workshops</h3>
              <p className="how-it-works-card-description">
                Hands-on learning paths that give you practical blockchain skills you can apply immediately.
              </p>
            </Link>
          </AnimatedSection>

          <AnimatedSection animation="fadeInUp" delay={200}>
            <Link to="/events" className="how-it-works-card">
              <div className="how-it-works-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 16V8C20.9996 7.64928 20.9071 7.30481 20.7315 7.00116C20.556 6.69751 20.3037 6.44536 20 6.27L13 2.27C12.696 2.09446 12.3511 2.00205 12 2.00205C11.6489 2.00205 11.304 2.09446 11 2.27L4 6.27C3.69626 6.44536 3.44398 6.69751 3.26846 7.00116C3.09294 7.30481 3.00036 7.64928 3 8V16C3.00036 16.3507 3.09294 16.6952 3.26846 16.9988C3.44398 17.3025 3.69626 17.5546 4 17.73L11 21.73C11.304 21.9055 11.6489 21.9979 12 21.9979C12.3511 21.9979 12.696 21.9055 13 21.73L20 17.73C20.3037 17.5546 20.556 17.3025 20.7315 16.9988C20.9071 16.6952 20.9996 16.3507 21 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3.27002 6.96L12 12.01L20.73 6.96" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 22.08V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="how-it-works-card-title">Events</h3>
              <p className="how-it-works-card-description">
                Collaborate with peers to solve real problems, build projects, and showcase your talent.
              </p>
            </Link>
          </AnimatedSection>

          <AnimatedSection animation="fadeInRight" delay={300}>
            <Link to="/community" className="how-it-works-card">
              <div className="how-it-works-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45768C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="how-it-works-card-title">Community & Mentorship</h3>
              <p className="how-it-works-card-description">
                Join study groups, connect with mentors, and participate in discussions to grow as a builder.
              </p>
            </Link>
          </AnimatedSection>

        </div>
      </section>

      {/* Community Snapshot Section */}
      <section id="community-snapshot" className="community-snapshot-section">
        <AnimatedSection animation="fadeInUp" delay={0}>
          <div className="community-snapshot-header">
            <p className="community-snapshot-label">Community Snapshot</p>
            <h2 className="community-snapshot-title">Trust & legitimacy</h2>
            <p className="community-snapshot-description">
              Building East Africa's blockchain future with a growing community of builders, learners, and innovators committed to excellence.
            </p>
          </div>
        </AnimatedSection>
        <div className="snapshot-stats-card">
          <AnimatedSection animation="scaleIn" delay={100}>
            <div className="snapshot-stat-section snapshot-stat-section-white">
              <div className="stat-number">30+</div>
              <div className="stat-description">Active members building together</div>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="scaleIn" delay={200}>
            <div className="snapshot-stat-section snapshot-stat-section-light">
              <div className="stat-number">1</div>
              <div className="stat-description">Upcoming event</div>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="scaleIn" delay={300}>
            <div className="snapshot-stat-section snapshot-stat-section-dark">
              <div className="stat-number">1</div>
              <div className="stat-description">University</div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <AnimatedSection animation="fadeInUp" delay={0}>
          <div className="faq-content">
            <h2 className="faq-title">Frequently Asked Questions</h2>
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <AnimatedSection key={faq.id} animation="fadeInUp" delay={index * 50}>
                  <div className={`faq-item ${openFaq === faq.id ? 'faq-open' : ''}`}>
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
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-main">
            {/* Brand Section */}
            <div className="footer-brand">
              <Link to="/" className="footer-logo">
                <span className="footer-logo-text">Chain Neo</span>
              </Link>
              <p className="footer-tagline">Building East Africa's Blockchain Builders</p>
            </div>

            {/* Links Columns */}
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

          {/* Footer Bottom */}
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

export default App
