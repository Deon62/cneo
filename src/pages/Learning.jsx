import './Learning.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import bitcoinIcon from '../assets/bitcoin.svg'
import contractsIcon from '../assets/contracts.svg'
import defiIcon from '../assets/defi.svg'
import securityIcon from '../assets/security.svg'
import soonSvg from '../assets/soon.svg'

function Learning() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const renderContent = () => {
    if (activeFilter === 'all') {
      return (
        <>
          <div className="learning-coming-soon-overlay">
            <div className="learning-coming-soon-card">
              <div className="learning-coming-soon-image">
                <img src={soonSvg} alt="Coming soon" />
              </div>
              <h2 className="learning-coming-soon-title">Courses Opening Soon</h2>
              <p className="learning-coming-soon-text">
                We're putting the finishing touches on our courses. Check back soon to start your blockchain learning journey!
              </p>
            </div>
          </div>
          <div className="learning-grid">
            <div className="learning-card">
              <div className="learning-card-icon">
                <img src={bitcoinIcon} alt="Blockchain Fundamentals" />
              </div>
              <div className="learning-card-content">
                <h3 className="learning-card-title">Blockchain Fundamentals</h3>
                <p className="learning-card-description">
                  Learn the core concepts of blockchain technology, including distributed ledgers, consensus mechanisms, and cryptographic principles.
                </p>
                <div className="learning-card-meta">
                  <span className="learning-card-badge">Beginner</span>
                  <span className="learning-card-stats">12 Lessons</span>
                </div>
                <button className="learning-card-btn">
                  Start Course
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>

            <div className="learning-card">
              <div className="learning-card-icon">
                <img src={contractsIcon} alt="Smart Contracts Development" />
              </div>
              <div className="learning-card-content">
                <h3 className="learning-card-title">Smart Contracts Development</h3>
                <p className="learning-card-description">
                  Master smart contract programming, deployment, and testing. Build decentralized applications with hands-on projects.
                </p>
                <div className="learning-card-meta">
                  <span className="learning-card-badge">Intermediate</span>
                  <span className="learning-card-stats">18 Lessons</span>
                </div>
                <button className="learning-card-btn">
                  Start Course
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>

            <div className="learning-card">
              <div className="learning-card-icon">
                <img src={defiIcon} alt="DeFi & Web3" />
              </div>
              <div className="learning-card-content">
                <h3 className="learning-card-title">DeFi & Web3</h3>
                <p className="learning-card-description">
                  Explore decentralized finance protocols, Web3 architecture, and how to build financial applications on blockchain.
                </p>
                <div className="learning-card-meta">
                  <span className="learning-card-badge">Intermediate</span>
                  <span className="learning-card-stats">15 Lessons</span>
                </div>
                <button className="learning-card-btn">
                  Start Course
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>

            <div className="learning-card">
              <div className="learning-card-icon">
                <img src={securityIcon} alt="Blockchain Security" />
              </div>
              <div className="learning-card-content">
                <h3 className="learning-card-title">Blockchain Security</h3>
                <p className="learning-card-description">
                  Understand security best practices, vulnerability assessment, and how to build secure blockchain applications.
                </p>
                <div className="learning-card-meta">
                  <span className="learning-card-badge">Advanced</span>
                  <span className="learning-card-stats">20 Lessons</span>
                </div>
                <button className="learning-card-btn">
                  Start Course
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </>
      )
    }

    // Empty states for other filters
    const emptyStates = {
      progress: {
        icon: (
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
        title: "No Courses In Progress",
        description: "Start a course to track your learning progress here."
      },
      completed: {
        icon: (
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 11.08V12A10 10 0 1 1 5.93 18.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
        title: "No Completed Courses",
        description: "Complete courses to see them listed here."
      },
      saved: {
        icon: (
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H11L19 11V19A2 2 0 0 1 19 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M17 21V13H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
        title: "No Saved Courses",
        description: "Save courses to access them later from here."
      }
    }

    const emptyState = emptyStates[activeFilter]
    if (emptyState) {
      return (
        <div className="learning-empty-state">
          <div className="learning-empty-icon">{emptyState.icon}</div>
          <h2 className="learning-empty-title">{emptyState.title}</h2>
          <p className="learning-empty-description">{emptyState.description}</p>
        </div>
      )
    }
  }

  return (
    <div className="learning-dashboard">
      {/* Top Bar with Back Button */}
      <div className="learning-topbar">
        <div className="learning-topbar-left">
          <button 
            className="learning-menu-toggle"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <Link to="/academy" className="learning-back-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="learning-back-text">Back</span>
          </Link>
        </div>
        <div className="learning-title">Learning</div>
        <div className="learning-profile-placeholder">
          <div className="learning-profile-avatar">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div 
          className="learning-sidebar-overlay"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <div className="learning-layout">
        {/* Sidebar Panel (IDE style) */}
        <aside className={`learning-sidebar ${isSidebarOpen ? 'sidebar-open' : ''}`}>
          <div className="learning-sidebar-header">
            <h3 className="learning-sidebar-title">Courses</h3>
            <button 
              className="learning-sidebar-close"
              onClick={() => setIsSidebarOpen(false)}
              aria-label="Close menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          <nav className="learning-sidebar-nav">
            <div className={`learning-nav-item ${activeFilter === 'all' ? 'active' : ''}`} onClick={() => { setActiveFilter('all'); setIsSidebarOpen(false); }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 9H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 21V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>All Courses</span>
            </div>
            <div className={`learning-nav-item ${activeFilter === 'progress' ? 'active' : ''}`} onClick={() => { setActiveFilter('progress'); setIsSidebarOpen(false); }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>In Progress</span>
            </div>
            <div className={`learning-nav-item ${activeFilter === 'completed' ? 'active' : ''}`} onClick={() => { setActiveFilter('completed'); setIsSidebarOpen(false); }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 11.08V12A10 10 0 1 1 5.93 18.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Completed</span>
            </div>
            <div className={`learning-nav-item ${activeFilter === 'saved' ? 'active' : ''}`} onClick={() => { setActiveFilter('saved'); setIsSidebarOpen(false); }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H11L19 11V19A2 2 0 0 1 19 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17 21V13H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Saved</span>
            </div>
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="learning-main">
          {renderContent()}
        </main>
      </div>
    </div>
  )
}

export default Learning
