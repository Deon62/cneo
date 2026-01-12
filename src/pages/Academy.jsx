import '../Academy.css'
import '../Home.css'
import Navbar from '../components/Navbar'
import podcastSvg from '../assets/podcast.svg'
import socialSvg from '../assets/social.svg'
import videoSvg from '../assets/video.svg'
import academySvg from '../assets/academy.svg'
import readSvg from '../assets/read.svg'
import { useRef } from 'react'
import { Link } from 'react-router-dom'

// Blog images
import smartContractsImg from '../assets/blogs/smartcontracts.png'
import africanDevsImg from '../assets/blogs/africandevs.png'
import gasFeesImg from '../assets/blogs/gasfees.png'
import studentsOnChainImg from '../assets/blogs/studentsonchain.png'
import tokensImg from '../assets/blogs/tokens.png'
import dappsImg from '../assets/blogs/dapps.png'

function Academy() {
  const blogsScrollRef = useRef(null)

  const blogs = [
    {
      id: 1,
      title: "Your First Smart Contract in 30 Minutes",
      excerpt: "A hands-on walkthrough for absolute beginners. We'll write, deploy, and interact with a simple contract on a test network.",
      date: "Mar 15, 2025",
      author: "Deon Orina",
      image: smartContractsImg
    },
    {
      id: 2,
      title: "Why African Developers Are Leading Blockchain Innovation",
      excerpt: "From mobile money to decentralized identity, African builders are solving real problems with blockchain.",
      date: "Mar 12, 2025",
      author: "Deon Orina",
      image: africanDevsImg
    },
    {
      id: 3,
      title: "Gas Fees Explained: What You're Actually Paying For",
      excerpt: "Break down the mystery of transaction costs on Ethereum and other networks.",
      date: "Mar 8, 2025",
      author: "Deon Orina",
      image: gasFeesImg
    },
    {
      id: 4,
      title: "From Campus to Chain: A Student's Journey into Web3",
      excerpt: "Real stories from university students who transitioned from traditional tech studies to blockchain.",
      date: "Mar 5, 2025",
      author: "Deon Orina",
      image: studentsOnChainImg
    },
    {
      id: 5,
      title: "Token Standards Decoded: ERC-20, ERC-721, and Beyond",
      excerpt: "Understand the building blocks of digital assets. What makes a fungible token different from an NFT.",
      date: "Mar 1, 2025",
      author: "Deon Orina",
      image: tokensImg
    },
    {
      id: 6,
      title: "Building Your First dApp: A Weekend Project Guide",
      excerpt: "Turn your ideas into working decentralized applications. From concept to deployment in a single weekend.",
      date: "Feb 28, 2025",
      author: "Deon Orina",
      image: dappsImg
    }
  ]

  const scrollBlogs = (direction) => {
    if (blogsScrollRef.current) {
      const container = blogsScrollRef.current
      const firstCard = container.querySelector('.blog-card')
      if (firstCard) {
        const cardWidth = firstCard.offsetWidth
        const scrollAmount = cardWidth * 4 // Scroll by exactly 4 cards (gap is included in card width)
        
        container.scrollBy({
          left: direction === 'right' ? scrollAmount : -scrollAmount,
          behavior: 'smooth'
        })
      }
    }
  }
  return (
    <div className="app">
      <Navbar />
      
      {/* Header Section */}
      <section className="academy-header">
        <div className="academy-header-container">
          <div className="academy-header-image">
            <img src={academySvg} alt="Academy Illustration" />
          </div>
          <div className="academy-header-content">
            <h1 className="academy-header-title">Academy</h1>
            <p className="academy-header-subtitle">
              Learn blockchain technology through comprehensive courses, podcasts, videos, and resources. 
              Build your skills and advance your career in Web3.
            </p>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="courses-intro-section">
        <div className="courses-intro-container">
          <div className="courses-intro-image">
            <img src={readSvg} alt="Courses illustration" />
          </div>
          <div className="courses-intro-content">
            <span className="section-label">Our Courses</span>
            <h2 className="courses-intro-title">Comprehensive Blockchain Education</h2>
            <p className="courses-intro-description">
              From blockchain fundamentals to advanced smart contract development, our courses are designed to take you from beginner to builder. Learn at your own pace with hands-on projects and real-world examples.
            </p>
            <Link to="/learning" className="courses-cta-button">
              Start Learning
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
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

      {/* Academy Stats Card */}
      <section className="academy-stats-section">
        <div className="academy-stats-container">
          <div className="academy-stats-header">
            <h2 className="academy-stats-title">Our Impact</h2>
            <p className="academy-stats-subtitle">
              Building East Africa's next generation of blockchain talent through comprehensive education and hands-on learning.
            </p>
          </div>
          <div className="academy-stats-card">
            <div className="academy-stat-section academy-stat-section-white">
              <div className="academy-stat-number">25+</div>
              <div className="academy-stat-label">Courses Offered</div>
            </div>
            <div className="academy-stat-section academy-stat-section-dark">
              <div className="academy-stat-number">2.8K+</div>
              <div className="academy-stat-label">Students Trained</div>
            </div>
            <div className="academy-stat-section academy-stat-section-light">
              <div className="academy-stat-number">1.5K+</div>
              <div className="academy-stat-label">Certificates Issued</div>
            </div>
            <div className="academy-stat-section academy-stat-section-accent">
              <div className="academy-stat-number">850+</div>
              <div className="academy-stat-label">Active Learners</div>
            </div>
            <div className="academy-stat-section academy-stat-section-white-alt">
              <div className="academy-stat-number">120+</div>
              <div className="academy-stat-label">Workshops Conducted</div>
            </div>
          </div>
        </div>
      </section>

      {/* Developer Blogs Section */}
      <section className="developer-blogs-section">
        <div className="developer-blogs-container">
          <div className="developer-blogs-header">
            <p className="developer-blogs-label">Technical Insights</p>
            <h2 className="developer-blogs-title">Developer Blogs</h2>
            <p className="developer-blogs-description">
              In-depth technical articles, tutorials, and insights from our developer community covering blockchain development, smart contracts, and Web3 technologies.
            </p>
          </div>
          <div className="blogs-scroll-wrapper">
            <button 
              className="blogs-scroll-btn blogs-scroll-left" 
              onClick={() => scrollBlogs('left')}
              aria-label="Scroll left"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="blogs-scroll-container" ref={blogsScrollRef}>
              <div className="blogs-grid">
                {blogs.map((blog, index) => (
                  <Link to={`/blog/${blog.id}`} key={blog.id} className="blog-card" data-index={index}>
                    <div className="blog-image">
                      <img src={blog.image} alt={blog.title} className="blog-image-img" />
                    </div>
                    <div className="blog-meta">
                      <span className="blog-date-author">{blog.date} • {blog.author}</span>
                    </div>
                    <h3 className="blog-title">{blog.title}</h3>
                    <p className="blog-excerpt">{blog.excerpt}</p>
                  </Link>
                ))}
              </div>
            </div>
            <button 
              className="blogs-scroll-btn blogs-scroll-right" 
              onClick={() => scrollBlogs('right')}
              aria-label="Scroll right"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          <div className="blogs-view-all-wrapper">
            <Link to="/blog" className="blogs-view-all-btn">
              View All Blogs
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
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

export default Academy
