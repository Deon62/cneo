import '../Academy.css'
import Navbar from '../components/Navbar'
import podcastSvg from '../assets/podcast.svg'
import socialSvg from '../assets/social.svg'
import videoSvg from '../assets/video.svg'
import academySvg from '../assets/academy.svg'
import { useRef } from 'react'

function Academy() {
  const blogsScrollRef = useRef(null)

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
            <article className="blog-card">
              <div className="blog-image">
                <div className="blog-image-placeholder" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}></div>
              </div>
              <div className="blog-meta">
                <span className="blog-date-author">March 15, 2024 • John Doe</span>
              </div>
              <h3 className="blog-title">Understanding Solidity: A Beginner's Guide</h3>
              <p className="blog-excerpt">
                Dive into the fundamentals of Solidity programming language. Learn about data types, functions, and how to write your first smart contract on Ethereum.
              </p>
            </article>

            <article className="blog-card">
              <div className="blog-image">
                <div className="blog-image-placeholder" style={{background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'}}></div>
              </div>
              <div className="blog-meta">
                <span className="blog-date-author">March 10, 2024 • Jane Smith</span>
              </div>
              <h3 className="blog-title">Building Decentralized Applications with React</h3>
              <p className="blog-excerpt">
                Explore how to integrate Web3 technologies with React to create modern decentralized applications. From wallet connections to contract interactions.
              </p>
            </article>

            <article className="blog-card">
              <div className="blog-image">
                <div className="blog-image-placeholder" style={{background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'}}></div>
              </div>
              <div className="blog-meta">
                <span className="blog-date-author">March 5, 2024 • Alex Johnson</span>
              </div>
              <h3 className="blog-title">Best Practices for Smart Contract Security</h3>
              <p className="blog-excerpt">
                Learn essential security patterns and common vulnerabilities in smart contract development. Protect your contracts from attacks and ensure user funds are safe.
              </p>
            </article>

            <article className="blog-card">
              <div className="blog-image">
                <div className="blog-image-placeholder" style={{background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'}}></div>
              </div>
              <div className="blog-meta">
                <span className="blog-date-author">February 28, 2024 • Sarah Williams</span>
              </div>
              <h3 className="blog-title">Introduction to DeFi Protocols and Yield Farming</h3>
              <p className="blog-excerpt">
                Get started with decentralized finance concepts. Understand liquidity pools, automated market makers, and how yield farming works in practice.
              </p>
            </article>

            <article className="blog-card">
              <div className="blog-image">
                <div className="blog-image-placeholder" style={{background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'}}></div>
              </div>
              <div className="blog-meta">
                <span className="blog-date-author">February 20, 2024 • Michael Brown</span>
              </div>
              <h3 className="blog-title">Creating and Deploying NFT Collections</h3>
              <p className="blog-excerpt">
                Step-by-step guide to building NFT collections using ERC-721 standards. From minting to marketplace integration, everything you need to know.
              </p>
            </article>

            <article className="blog-card">
              <div className="blog-image">
                <div className="blog-image-placeholder" style={{background: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)'}}></div>
              </div>
              <div className="blog-meta">
                <span className="blog-date-author">February 15, 2024 • Emily Davis</span>
              </div>
              <h3 className="blog-title">The Future of Web3 Development in Africa</h3>
              <p className="blog-excerpt">
                Exploring the growing blockchain ecosystem across Africa. Opportunities, challenges, and how developers can contribute to the continent's Web3 transformation.
              </p>
            </article>
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
        </div>
      </section>
    </div>
  )
}

export default Academy
