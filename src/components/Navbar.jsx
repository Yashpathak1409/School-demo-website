// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap, Phone } from 'lucide-react';
import '../styles/navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className={`navbar-wrapper ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Brand Logo */}
        <NavLink to="/" className="logo-section">
          <div className="logo-icon-box">
            <img src="/logo.png" alt="Archana Pharmacy College Logo" />
          </div>
          <div className="logo-text-box">
            <h2>Archana Pharmacy College</h2>
            <span>Approved by PCI, New Delhi</span>
          </div>
        </NavLink>

        {/* Mobile menu trigger */}
        <button 
          className="mobile-toggle" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Links menu */}
        <nav>
          <ul className={`nav-menu ${isOpen ? 'open' : ''}`}>
            <li className="nav-item">
              <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/course" className={({ isActive }) => isActive ? 'active' : ''}>
                Course
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/gallery" className={({ isActive }) => isActive ? 'active' : ''}>
                Gallery
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/result" className={({ isActive }) => isActive ? 'active' : ''}>
                Result
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/blog" className={({ isActive }) => isActive ? 'active' : ''}>
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/tc" className={({ isActive }) => isActive ? 'active' : ''}>
                TC
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/teacher" className={({ isActive }) => isActive ? 'active' : ''}>
                Teacher
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/hostel" className={({ isActive }) => isActive ? 'active' : ''}>
                Hostel
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/mandatory-disclosure" className={({ isActive }) => isActive ? 'active' : ''}>
                Disclosure
              </NavLink>
            </li>
            <li className="nav-item contact-btn-nav">
              <NavLink to="/contact" className="btn btn-secondary" style={{ padding: '8px 16px', fontSize: '0.85rem', color: '#000000', fontWeight: '700' }}>
                <Phone size={14} /> Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
