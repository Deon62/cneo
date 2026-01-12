import '../Home.css'
import './Legal.css'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

function Legal() {
  return (
    <div className="app">
      <Navbar />
      
      {/* Header Section */}
      <section className="legal-header">
        <div className="legal-header-container">
          <h1 className="legal-header-title">Legal</h1>
          <p className="legal-header-subtitle">
            Terms of Service and Privacy Policy
          </p>
        </div>
      </section>

      {/* Terms of Service Section */}
      <section id="terms" className="legal-section">
        <div className="legal-container">
          <h2 className="legal-section-title">Terms of Service</h2>
          <p className="legal-last-updated">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          
          <div className="legal-content">
            <div className="legal-subsection">
              <h3 className="legal-subsection-title">1. Acceptance of Terms</h3>
              <p className="legal-text">
                By accessing and using Chain Neo's website, services, courses, and community platforms, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </div>

            <div className="legal-subsection">
              <h3 className="legal-subsection-title">2. Description of Services</h3>
              <p className="legal-text">
                Chain Neo provides educational resources, courses, community platforms, events, and related services focused on blockchain technology and Web3 education. We reserve the right to modify, suspend, or discontinue any part of our services at any time.
              </p>
            </div>

            <div className="legal-subsection">
              <h3 className="legal-subsection-title">3. User Conduct</h3>
              <p className="legal-text">
                You agree to use our services in a manner that is legal, respectful, and in accordance with these terms. You will not:
              </p>
              <ul className="legal-list">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon the rights of others</li>
                <li>Harass, abuse, or harm other community members</li>
                <li>Share false or misleading information</li>
                <li>Use our services for any unauthorized commercial purpose</li>
                <li>Interfere with or disrupt our services or servers</li>
              </ul>
            </div>

            <div className="legal-subsection">
              <h3 className="legal-subsection-title">4. Intellectual Property</h3>
              <p className="legal-text">
                All content, materials, courses, and resources provided by Chain Neo are protected by intellectual property laws. You may not reproduce, distribute, or create derivative works from our content without explicit written permission.
              </p>
            </div>

            <div className="legal-subsection">
              <h3 className="legal-subsection-title">5. Disclaimers</h3>
              <p className="legal-text">
                Our services are provided "as is" without warranties of any kind. Chain Neo does not guarantee the accuracy, completeness, or usefulness of any information provided. We are not responsible for any losses or damages resulting from your use of our services.
              </p>
            </div>

            <div className="legal-subsection">
              <h3 className="legal-subsection-title">6. Limitation of Liability</h3>
              <p className="legal-text">
                To the maximum extent permitted by law, Chain Neo shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services.
              </p>
            </div>

            <div className="legal-subsection">
              <h3 className="legal-subsection-title">7. Changes to Terms</h3>
              <p className="legal-text">
                We reserve the right to modify these Terms of Service at any time. We will notify users of any material changes. Your continued use of our services after such changes constitutes acceptance of the new terms.
              </p>
            </div>

            <div className="legal-subsection">
              <h3 className="legal-subsection-title">8. Contact Information</h3>
              <p className="legal-text">
                If you have questions about these Terms of Service, please contact us at <a href="mailto:contact@chainneo.org" className="legal-link">contact@chainneo.org</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Section */}
      <section id="privacy" className="legal-section">
        <div className="legal-container">
          <h2 className="legal-section-title">Privacy Policy</h2>
          <p className="legal-last-updated">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          
          <div className="legal-content">
            <div className="legal-subsection">
              <h3 className="legal-subsection-title">1. Information We Collect</h3>
              <p className="legal-text">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="legal-list">
                <li>Name, email address, and contact information</li>
                <li>Account credentials and profile information</li>
                <li>Course enrollment and participation data</li>
                <li>Communications and feedback you send to us</li>
                <li>Information you provide when registering for events</li>
              </ul>
              <p className="legal-text">
                We also automatically collect certain information when you use our services, such as IP addresses, browser type, device information, and usage patterns.
              </p>
            </div>

            <div className="legal-subsection">
              <h3 className="legal-subsection-title">2. How We Use Your Information</h3>
              <p className="legal-text">
                We use the information we collect to:
              </p>
              <ul className="legal-list">
                <li>Provide, maintain, and improve our services</li>
                <li>Process course enrollments and event registrations</li>
                <li>Communicate with you about our services, events, and updates</li>
                <li>Send newsletters and educational content (with your consent)</li>
                <li>Respond to your inquiries and provide support</li>
                <li>Monitor and analyze usage patterns to improve our services</li>
                <li>Ensure security and prevent fraud</li>
              </ul>
            </div>

            <div className="legal-subsection">
              <h3 className="legal-subsection-title">3. Information Sharing</h3>
              <p className="legal-text">
                We do not sell your personal information. We may share your information in the following circumstances:
              </p>
              <ul className="legal-list">
                <li>With service providers who assist us in operating our services</li>
                <li>When required by law or to protect our rights</li>
                <li>With your explicit consent</li>
                <li>In connection with a merger, acquisition, or sale of assets</li>
              </ul>
            </div>

            <div className="legal-subsection">
              <h3 className="legal-subsection-title">4. Data Security</h3>
              <p className="legal-text">
                We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div className="legal-subsection">
              <h3 className="legal-subsection-title">5. Your Rights</h3>
              <p className="legal-text">
                You have the right to:
              </p>
              <ul className="legal-list">
                <li>Access and receive a copy of your personal information</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>Request deletion of your personal information</li>
                <li>Object to or restrict certain processing of your information</li>
                <li>Withdraw consent at any time</li>
                <li>Unsubscribe from marketing communications</li>
              </ul>
            </div>

            <div className="legal-subsection">
              <h3 className="legal-subsection-title">6. Cookies and Tracking Technologies</h3>
              <p className="legal-text">
                We use cookies and similar tracking technologies to enhance your experience, analyze usage, and assist with marketing efforts. You can control cookie preferences through your browser settings.
              </p>
            </div>

            <div className="legal-subsection">
              <h3 className="legal-subsection-title">7. Third-Party Links</h3>
              <p className="legal-text">
                Our services may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies.
              </p>
            </div>

            <div className="legal-subsection">
              <h3 className="legal-subsection-title">8. Children's Privacy</h3>
              <p className="legal-text">
                Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have collected such information, please contact us immediately.
              </p>
            </div>

            <div className="legal-subsection">
              <h3 className="legal-subsection-title">9. Changes to This Privacy Policy</h3>
              <p className="legal-text">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date.
              </p>
            </div>

            <div className="legal-subsection">
              <h3 className="legal-subsection-title">10. Contact Us</h3>
              <p className="legal-text">
                If you have questions about this Privacy Policy or wish to exercise your rights, please contact us at <a href="mailto:contact@chainneo.org" className="legal-link">contact@chainneo.org</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-main">
          <div className="footer-brand">
            <div className="footer-logo">Chain Neo</div>
            <p className="footer-tagline">Building East Africa's Blockchain Builders</p>
          </div>
          <div className="footer-links-wrapper">
            <div className="footer-column">
              <h3 className="footer-column-title">Explore</h3>
              <ul className="footer-links">
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/community">Community</Link></li>
                <li><Link to="/academy">Academy</Link></li>
                <li><Link to="/events">Events</Link></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3 className="footer-column-title">Resources</h3>
              <ul className="footer-links">
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/learning">Courses</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3 className="footer-column-title">Legal</h3>
              <ul className="footer-links">
                <li><Link to="/legal#privacy">Privacy Policy</Link></li>
                <li><Link to="/legal#terms">Terms of Service</Link></li>
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
          <p className="footer-copyright">© {new Date().getFullYear()} Chain Neo. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Legal
