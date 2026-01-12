import '../Home.css'
import './Blog.css'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

function Blog() {
  const blogs = [
    {
      id: 1,
      title: "Understanding Solidity: A Beginner's Guide",
      excerpt: "Dive into the fundamentals of Solidity programming language. Learn about data types, functions, and how to write your first smart contract on Ethereum.",
      date: "Mar 15, 2025",
      readTime: "7 min read",
      author: "John Doe",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      featured: false
    },
    {
      id: 2,
      title: "Wallets Are the Front Door to Web3: Let's Make Them Welcoming",
      excerpt: "Here's the thing about Web3: we keep talking about scalability, security, and decentralization, but most people never even make it past the first step. They try to set up a crypto wallet, get overwhelmed, and give up.",
      date: "Mar 12, 2025",
      readTime: "10 min read",
      author: "Jane Smith",
      gradient: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
      featured: true
    },
    {
      id: 3,
      title: "Demystifying Consensus Mechanisms: A Comprehensive Guide",
      excerpt: "Explore the different types of consensus mechanisms that power blockchain networks, from Proof of Work to Proof of Stake and beyond.",
      date: "Mar 8, 2025",
      readTime: "12 min read",
      author: "Alex Johnson",
      gradient: "linear-gradient(135deg, #232526 0%, #414345 100%)",
      featured: false
    },
    {
      id: 4,
      title: "Getting Started with Solidity: All You Need to Know",
      excerpt: "A comprehensive introduction to Solidity programming for beginners. Learn the essential concepts and start building smart contracts today.",
      date: "Mar 5, 2025",
      readTime: "8 min read",
      author: "Sarah Williams",
      gradient: "linear-gradient(135deg, #c31432 0%, #240b36 100%)",
      featured: false
    },
    {
      id: 5,
      title: "Why is the Hard Drive for Blockchain and the Internet Important?",
      excerpt: "Understanding the role of decentralized storage solutions like IPFS in the Web3 ecosystem and why they matter for the future of the internet.",
      date: "Mar 1, 2025",
      readTime: "6 min read",
      author: "Michael Brown",
      gradient: "linear-gradient(135deg, #f7971e 0%, #ffd200 100%)",
      featured: false
    },
    {
      id: 6,
      title: "Building Decentralized Applications with React",
      excerpt: "Explore how to integrate Web3 technologies with React to create modern decentralized applications. From wallet connections to contract interactions.",
      date: "Feb 28, 2025",
      readTime: "9 min read",
      author: "Emily Davis",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      featured: false
    },
    {
      id: 7,
      title: "Best Practices for Smart Contract Security",
      excerpt: "Learn essential security patterns and common vulnerabilities in smart contract development. Protect your contracts from attacks.",
      date: "Feb 25, 2025",
      readTime: "11 min read",
      author: "Chris Taylor",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      featured: false
    },
    {
      id: 8,
      title: "Introduction to DeFi Protocols and Yield Farming",
      excerpt: "Get started with decentralized finance concepts. Understand liquidity pools, automated market makers, and how yield farming works.",
      date: "Feb 20, 2025",
      readTime: "8 min read",
      author: "Amanda Lee",
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      featured: false
    },
    {
      id: 9,
      title: "The Future of Web3 Development in Africa",
      excerpt: "Exploring the growing blockchain ecosystem across Africa. Opportunities, challenges, and how developers can contribute to the continent's Web3 transformation.",
      date: "Feb 15, 2025",
      readTime: "7 min read",
      author: "David Okonkwo",
      gradient: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
      featured: false
    }
  ]

  const featuredBlog = blogs.find(blog => blog.featured)
  const leftBlogs = blogs.filter(blog => !blog.featured).slice(0, 4)
  const rightBlogs = blogs.filter(blog => !blog.featured).slice(4, 8)

  return (
    <div className="app">
      <Navbar />
      
      {/* Header Section */}
      <section className="blog-header">
        <div className="blog-header-container">
          <div className="blog-header-content">
            <h1 className="blog-header-title">Chain Neo | Blog</h1>
            <p className="blog-header-subtitle">
              Technical insights, tutorials, and stories from our developer community. 
              Learn about blockchain development, Web3 technologies, and the African tech ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid Section */}
      <section className="blog-grid-section">
        <div className="blog-grid-container">
          <div className="blog-masonry-grid">
            {/* Left Column */}
            <div className="blog-column blog-column-left">
              {leftBlogs.map((blog) => (
                <article key={blog.id} className="blog-grid-card">
                  <div className="blog-grid-image">
                    <div className="blog-grid-image-placeholder" style={{background: blog.gradient}}></div>
                  </div>
                  <h3 className="blog-grid-title">{blog.title}</h3>
                  <div className="blog-grid-meta">
                    <span>{blog.date}</span>
                    <span className="blog-meta-dot">•</span>
                    <span>{blog.readTime}</span>
                  </div>
                </article>
              ))}
            </div>

            {/* Center Column - Featured */}
            <div className="blog-column blog-column-center">
              {featuredBlog && (
                <article className="blog-grid-card blog-featured-card">
                  <div className="blog-grid-image blog-featured-image">
                    <div className="blog-grid-image-placeholder" style={{background: featuredBlog.gradient}}></div>
                  </div>
                  <h2 className="blog-featured-title">{featuredBlog.title}</h2>
                  <p className="blog-featured-excerpt">{featuredBlog.excerpt}</p>
                  <div className="blog-grid-meta">
                    <span>{featuredBlog.date}</span>
                    <span className="blog-meta-dot">•</span>
                    <span>{featuredBlog.readTime}</span>
                  </div>
                </article>
              )}
            </div>

            {/* Right Column */}
            <div className="blog-column blog-column-right">
              {rightBlogs.map((blog) => (
                <article key={blog.id} className="blog-grid-card">
                  <div className="blog-grid-image">
                    <div className="blog-grid-image-placeholder" style={{background: blog.gradient}}></div>
                  </div>
                  <h3 className="blog-grid-title">{blog.title}</h3>
                  <div className="blog-grid-meta">
                    <span>{blog.date}</span>
                    <span className="blog-meta-dot">•</span>
                    <span>{blog.readTime}</span>
                  </div>
                </article>
              ))}
            </div>
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
              <p className="footer-tagline">Building Africa's Blockchain Builders</p>
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
                  <li><a href="#">Terms of Service</a></li>
                  <li><a href="#">Privacy Policy</a></li>
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

export default Blog
