import '../Home.css'
import './Events.css'
import Navbar from '../components/Navbar'
import { useState } from 'react'
import eventsSvg from '../assets/events.svg'

function Events() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Event subscription:', email)
    setEmail('')
    alert('Thank you for subscribing! We\'ll notify you when events are announced.')
  }

  return (
    <div className="app">
      <Navbar />
      
      {/* Header Section */}
      <section className="events-header">
        <div className="events-header-container">
          <div className="events-header-content">
            <h1 className="events-header-title">Events</h1>
            <p className="events-header-subtitle">
              Join us for workshops, hackathons, meetups, and conferences designed to help you learn, 
              build, and connect with the blockchain community across Africa.
            </p>
          </div>
          <div className="events-header-image">
            <img src={eventsSvg} alt="Events Illustration" />
          </div>
        </div>
      </section>

      {/* Empty State Section */}
      <section className="events-empty-section">
        <div className="events-empty-container">
          <div className="events-empty-icon">
            <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 2V6M16 2V6M3 10H21M5 4H19C20.1046 4 21 4.89543 21 6V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V6C3 4.89543 3.89543 4 5 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 14H8.01M12 14H12.01M16 14H16.01M8 18H8.01M12 18H12.01M16 18H16.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h2 className="events-empty-title">Events Coming Soon</h2>
          <p className="events-empty-description">
            We're currently planning exciting events, workshops, and meetups for the blockchain community. 
            Stay tuned for announcements about upcoming hackathons, conferences, and learning sessions.
          </p>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="events-subscribe-section">
        <div className="events-subscribe-container">
          <div className="events-subscribe-content">
            <h2 className="events-subscribe-title">Get Notified About Upcoming Events</h2>
            <p className="events-subscribe-description">
              Be the first to know when we announce new workshops, hackathons, and community events. 
              Subscribe to receive updates directly in your inbox.
            </p>
            <form className="events-subscribe-form" onSubmit={handleSubmit}>
              <div className="events-subscribe-input-wrapper">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="events-subscribe-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="events-subscribe-button">
                  Subscribe
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
              <p className="events-subscribe-note">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Events
