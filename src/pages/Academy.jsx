import '../App.css'
import Navbar from '../components/Navbar'
import podcastSvg from '../assets/podcast.svg'
import socialSvg from '../assets/social.svg'
import videoSvg from '../assets/video.svg'

function Academy() {
  return (
    <div className="app">
      <Navbar />
      
      {/* Header Section */}
      <section className="academy-header">
        <div className="academy-header-container">
          <div className="academy-header-content">
            <h1 className="academy-header-title">Academy</h1>
            <p className="academy-header-subtitle">
              Learn blockchain technology through comprehensive courses, podcasts, videos, and resources. 
              Build your skills and advance your career in Web3.
            </p>
          </div>
        </div>
      </section>

      {/* Podcasts & Media Section */}
      <section className="podcasts-section">
        <div className="podcasts-container">
          <div className="podcasts-header">
            <p className="podcasts-label">Content & Media</p>
            <h2 className="podcasts-title">Learn Through Content</h2>
            <p className="podcasts-description">
              Explore our collection of podcasts, videos, and media resources designed to enhance your blockchain learning journey.
            </p>
          </div>
          <div className="podcasts-grid">
            <div className="podcast-item">
              <div className="podcast-icon">
                <img src={podcastSvg} alt="Podcasts" />
              </div>
              <h3 className="podcast-item-title">Podcasts</h3>
              <p className="podcast-item-description">
                Weekly discussions with blockchain experts, builders, and innovators sharing insights and stories.
              </p>
              <a href="#" className="podcast-link">
                Listen Now
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>

            <div className="podcast-item">
              <div className="podcast-icon">
                <img src={socialSvg} alt="YouTube Shorts" />
              </div>
              <h3 className="podcast-item-title">YouTube Shorts</h3>
              <p className="podcast-item-description">
                Quick, bite-sized videos covering blockchain concepts, tips, and tutorials in under 60 seconds.
              </p>
              <a href="#" className="podcast-link">
                Watch Now
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>

            <div className="podcast-item">
              <div className="podcast-icon">
                <img src={videoSvg} alt="Video Tutorials" />
              </div>
              <h3 className="podcast-item-title">Video Tutorials</h3>
              <p className="podcast-item-description">
                In-depth video tutorials and walkthroughs for learning blockchain development and concepts.
              </p>
              <a href="#" className="podcast-link">
                Start Learning
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Academy
