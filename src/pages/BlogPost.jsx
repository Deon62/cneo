import '../Home.css'
import './BlogPost.css'
import Navbar from '../components/Navbar'
import { Link, useParams } from 'react-router-dom'

// Blog images
import smartContractsImg from '../assets/blogs/smartcontracts.png'
import africanDevsImg from '../assets/blogs/africandevs.png'
import gasFeesImg from '../assets/blogs/gasfees.png'
import authorImg from '../assets/blogs/deon.jpeg'

function BlogPost() {
  const { id } = useParams()

  // Blog data - in a real app this would come from an API
  const blogs = {
    1: {
      title: "Your First Smart Contract in 30 Minutes",
      date: "Mar 15, 2025",
      readTime: "7 min read",
      author: "Deon Orina",
      authorRole: "Content & Education Lead",
      image: smartContractsImg,
      content: `
        <p>Building your first smart contract doesn't have to be intimidating. In this hands-on guide, we'll go from zero to a deployed contract on a test network in just 30 minutes.</p>

        <h2>What We're Building</h2>
        <p>We'll create a simple message board contract where users can post and read messages. It's basic, but it covers the core concepts you need to understand blockchain development.</p>

        <h2>Setting Up Your Workspace</h2>
        <p>Before we start coding, let's get our tools ready. You'll need:</p>
        <ul>
          <li><strong>A code editor:</strong> VS Code works great with the Solidity extension</li>
          <li><strong>Node.js:</strong> Version 16 or higher installed on your machine</li>
          <li><strong>A browser wallet:</strong> For interacting with test networks</li>
          <li><strong>Test tokens:</strong> Grab some from a faucet for free</li>
        </ul>

        <h2>Writing the Contract</h2>
        <p>Here's our simple message board:</p>
        <pre><code>// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MessageBoard {
    string[] public messages;

    function postMessage(string memory _message) public {
        messages.push(_message);
    }

    function getMessageCount() public view returns (uint256) {
        return messages.length;
    }
}</code></pre>

        <h2>Understanding What's Happening</h2>
        <p>Let's break down the key parts:</p>
        <ul>
          <li><strong>string[] public messages:</strong> An array that stores all posted messages</li>
          <li><strong>postMessage:</strong> A function anyone can call to add a new message</li>
          <li><strong>getMessageCount:</strong> Returns how many messages exist (read-only, costs no gas)</li>
        </ul>

        <h2>Deploying to a Test Network</h2>
        <p>Now comes the exciting part—putting your contract on an actual blockchain:</p>
        <ol>
          <li>Compile your contract to check for errors</li>
          <li>Connect your wallet to a test network</li>
          <li>Deploy and confirm the transaction</li>
          <li>Copy your contract address for future interactions</li>
        </ol>

        <p>Congratulations! You've just deployed your first smart contract. From here, you can experiment with adding new features, restricting who can post, or storing more complex data.</p>
      `
    },
    2: {
      title: "Why African Developers Are Leading the Next Wave of Blockchain Innovation",
      date: "Mar 12, 2025",
      readTime: "10 min read",
      author: "Deon Orina",
      authorRole: "Content & Education Lead",
      image: africanDevsImg,
      content: `
        <p>Something remarkable is happening across Africa. While much of the world debates theoretical blockchain use cases, developers here are building solutions for problems they face every day. From mobile money integration to land registry systems, African builders are creating some of the most practical blockchain applications in the world.</p>

        <h2>Real Problems, Real Solutions</h2>
        <p>The best innovation comes from necessity. In many African countries, traditional banking infrastructure is limited, but mobile phone penetration is high. This created the perfect environment for mobile money—and now, blockchain-based financial services.</p>

        <h2>What's Driving This Growth?</h2>
        <ul>
          <li><strong>Mobile-first mindset:</strong> Developers here build for phones, not desktops</li>
          <li><strong>Practical focus:</strong> Solutions address remittances, savings, and identity</li>
          <li><strong>Young population:</strong> A generation eager to learn and build</li>
          <li><strong>Community spirit:</strong> Strong networks of developers sharing knowledge</li>
        </ul>

        <h2>Success Stories Worth Knowing</h2>
        <p>Across the continent, we're seeing impressive projects emerge:</p>
        <ol>
          <li>Cross-border payment platforms reducing transfer fees by 70%</li>
          <li>Agricultural supply chain tracking ensuring fair farmer payments</li>
          <li>Digital identity systems for the millions without formal documentation</li>
          <li>Microfinance protocols enabling community-based lending</li>
        </ol>

        <h2>The Road Ahead</h2>
        <p>The next few years will be crucial. With growing developer communities, increasing investment, and supportive regulatory frameworks emerging, Africa is positioned to not just adopt blockchain technology—but to define how it's used globally.</p>

        <p>The lesson for the rest of the world? Sometimes the best innovations come from those solving their own problems, not from those imagining problems for others to solve.</p>
      `
    },
    3: {
      title: "Gas Fees Explained: What You're Actually Paying For",
      date: "Mar 8, 2025",
      readTime: "12 min read",
      author: "Deon Orina",
      authorRole: "Content & Education Lead",
      image: gasFeesImg,
      content: `
        <p>If you've ever used a blockchain, you've encountered gas fees. That moment when you try to send a transaction and see an unexpected cost can be confusing. Let's demystify what you're actually paying for and how to optimize your spending.</p>

        <h2>What is Gas, Really?</h2>
        <p>Think of gas as the fuel that powers blockchain operations. Every action you take—sending tokens, interacting with a contract, minting an NFT—requires computational resources. Gas is how we measure and pay for those resources.</p>

        <h2>Breaking Down the Cost</h2>
        <p>Your total transaction fee depends on two factors:</p>
        <ul>
          <li><strong>Gas Limit:</strong> The maximum amount of computation your transaction might need</li>
          <li><strong>Gas Price:</strong> How much you're willing to pay per unit of gas</li>
        </ul>
        <p>The formula is simple: Total Fee = Gas Used × Gas Price</p>

        <h2>Why Fees Fluctuate</h2>
        <p>Gas prices change based on network demand. When many people want to transact:</p>
        <ol>
          <li>Competition for block space increases</li>
          <li>Users bid higher gas prices to get priority</li>
          <li>Average fees across the network rise</li>
          <li>Some users wait for cheaper times to transact</li>
        </ol>

        <h2>Tips for Saving on Gas</h2>
        <ul>
          <li><strong>Time your transactions:</strong> Weekends and late nights often have lower fees</li>
          <li><strong>Use gas trackers:</strong> Tools that show current and predicted gas prices</li>
          <li><strong>Batch operations:</strong> Combine multiple actions into single transactions</li>
          <li><strong>Consider Layer 2:</strong> Networks built on top of Ethereum with much lower fees</li>
        </ul>

        <p>Understanding gas fees isn't just about saving money—it's about understanding how blockchains allocate their most precious resource: block space. Once you grasp this, you'll make smarter decisions about when and how to transact.</p>
      `
    }
  }

  const blog = blogs[id] || blogs[1]

  return (
    <div className="app">
      <Navbar />
      
      {/* Blog Post Header */}
      <section className="blog-post-header">
        <div className="blog-post-header-container">
          <Link to="/blog" className="blog-back-link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Blog
          </Link>
          <div className="blog-post-meta">
            <span>{blog.date}</span>
            <span className="blog-post-meta-dot">•</span>
            <span>{blog.readTime}</span>
          </div>
          <h1 className="blog-post-title">{blog.title}</h1>
          <div className="blog-post-author">
            <img src={authorImg} alt={blog.author} className="blog-post-author-avatar" />
            <div className="blog-post-author-info">
              <span className="blog-post-author-name">{blog.author}</span>
              <span className="blog-post-author-role">{blog.authorRole}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="blog-post-image-section">
        <div className="blog-post-image-container">
          {blog.image ? (
            <img src={blog.image} alt={blog.title} className="blog-post-featured-image" />
          ) : (
            <div className="blog-post-featured-image" style={{background: blog.gradient}}></div>
          )}
        </div>
      </section>

      {/* Blog Content */}
      <section className="blog-post-content-section">
        <div className="blog-post-content-container">
          <article 
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
          
          {/* Share Section */}
          <div className="blog-post-share">
            <span className="blog-post-share-label">Share this article</span>
            <div className="blog-post-share-links">
              <a href="#" className="blog-share-link" aria-label="Share on Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="blog-share-link" aria-label="Share on LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="blog-share-link" aria-label="Copy link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* More Articles */}
      <section className="blog-post-more-section">
        <div className="blog-post-more-container">
          <h2 className="blog-post-more-title">More Articles</h2>
          <div className="blog-post-more-grid">
            <Link to="/blog/2" className="blog-more-card">
              <img src={africanDevsImg} alt="African Developers" className="blog-more-image" />
              <h3>Why African Developers Are Leading Blockchain Innovation</h3>
              <span>10 min read</span>
            </Link>
            <Link to="/blog/3" className="blog-more-card">
              <img src={gasFeesImg} alt="Gas Fees" className="blog-more-image" />
              <h3>Gas Fees Explained: What You're Actually Paying For</h3>
              <span>12 min read</span>
            </Link>
            <Link to="/blog/1" className="blog-more-card">
              <img src={smartContractsImg} alt="Smart Contracts" className="blog-more-image" />
              <h3>Your First Smart Contract in 30 Minutes</h3>
              <span>7 min read</span>
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

export default BlogPost
