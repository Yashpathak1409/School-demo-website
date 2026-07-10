// src/components/Footer.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, Phone, Mail, GraduationCap, ChevronRight, Send 
} from 'lucide-react';
import '../styles/footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="footer-wrapper">
      <div className="container">
        <div className="footer-container">
          
          {/* Column 1: Info */}
          <div className="footer-col">
            <div className="footer-logo">
              <div className="logo-icon-box" style={{ width: '45px', height: '45px', background: '#ffffff', borderRadius: '50%', overflow: 'hidden', padding: '2px', border: '1px solid var(--secondary-color)' }}>
                <img src="/logo.png" alt="Archana Pharmacy College Logo" style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '50%' }} />
              </div>
              <div>
                <h2>Archana Pharmacy College</h2>
                <span>Approved by PCI, New Delhi</span>
              </div>
            </div>
            <p>
              Fostering excellence in pharmaceutical education, clinical research, drug design, and patient care. Preparing the pharmacists of tomorrow since 2024.
            </p>
            <div className="footer-socials">
              <a href="#" className="social-icon-btn" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="social-icon-btn" aria-label="Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a href="#" className="social-icon-btn" aria-label="Youtube">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
              </a>
              <a href="#" className="social-icon-btn" aria-label="Linkedin">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/about"><ChevronRight size={14} /> About Us</Link></li>
              <li><Link to="/course"><ChevronRight size={14} /> Courses</Link></li>
              <li><Link to="/gallery"><ChevronRight size={14} /> Gallery</Link></li>
              <li><Link to="/teacher"><ChevronRight size={14} /> Faculty Staff</Link></li>
              <li><Link to="/hostel"><ChevronRight size={14} /> Hostel Facility</Link></li>
            </ul>
          </div>

          {/* Column 3: Portals */}
          <div className="footer-col">
            <h3>Student Portals</h3>
            <ul className="footer-links">
              <li><Link to="/result"><ChevronRight size={14} /> Check Results</Link></li>
              <li><Link to="/tc"><ChevronRight size={14} /> Transfer Certificate (TC)</Link></li>
              <li><Link to="/blog"><ChevronRight size={14} /> College Blog</Link></li>
              <li><Link to="/mandatory-disclosure"><ChevronRight size={14} /> Mandatory Disclosure</Link></li>
              <li><Link to="/contact"><ChevronRight size={14} /> Get in Touch</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact & Newsletter */}
          <div className="footer-col">
            <h3>Contact Us</h3>
            <ul className="footer-contact-info">
              <li>
                <MapPin size={18} />
                <span>Vill + Post - Tentigaon, Mant, Mathura, Uttar Pradesh, India</span>
              </li>
              <li>
                <Phone size={18} />
                <span>
                  +91 8839248262
                </span>
              </li>
              <li>
                <Mail size={18} />
                <span>archanapharmacycballia@gmail.com</span>
              </li>
            </ul>

            <h3 style={{ marginTop: '20px', fontSize: '1.05rem' }}>College Newsletter</h3>
            <p style={{ fontSize: '0.85rem', marginBottom: '10px' }}>Subscribe to get latest exam dates, events, and circulars.</p>
            <form onSubmit={handleSubscribe} className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter email address" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-btn" aria-label="Subscribe">
                <Send size={16} />
              </button>
            </form>
            {subscribed && (
              <span style={{ display: 'block', color: 'var(--secondary-color)', fontSize: '0.8rem', marginTop: '5px' }}>
                ✓ Thank you for subscribing!
              </span>
            )}
          </div>
          
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Archana Pharmacy College. All Rights Reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/mandatory-disclosure">Privacy Policy</Link>
            <Link to="/mandatory-disclosure">Terms of Service</Link>
            <Link to="/contact">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
