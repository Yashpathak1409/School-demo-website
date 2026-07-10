// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, Award, ShieldAlert, ChevronRight, BookOpen, 
  ArrowUpRight, Building, HelpCircle, CheckSquare, BellRing 
} from 'lucide-react';
import '../styles/pages/pages.css';

const Home = () => {
  return (
    <div className="home-wrapper">
      
      {/* Urgent Admissions Alarm Bar */}
      <div className="admissions-alarm-bar animate-fade-in">
        <div className="container alarm-flex">
          <div className="alarm-left">
            <span className="alarm-pulse-dot"></span>
            <BellRing className="alarm-bell-icon" size={18} />
            <span>Admissions Alert: Enrollment is open for Session 2026-27 (D.Pharm & B.Pharm). limited seats remaining!</span>
          </div>
          <a href="https://jnuadmissions.udyogx.in/apps" target="_blank" rel="noopener noreferrer" className="btn btn-secondary alarm-btn">
            Apply Online / Admission
          </a>
        </div>
      </div>

      {/* 1. Hero Banner */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content animate-slide-up">
            <span className="hero-badge">Est. 2024 • Approved by PCI</span>
            <h1>Shaping the Future of <span>Pharmaceutical Care</span></h1>
            <p>
              Welcome to Archana Pharmacy College, a premier institution in Ballia (UP) dedicated to providing quality education in pharmacy, advanced laboratory training, and clinical excellence.
            </p>
            <div className="hero-actions">
              <Link to="/course" className="btn btn-secondary">
                Explore Courses <ChevronRight size={16} />
              </Link>
              <Link to="/about" className="btn btn-outline-gold">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Urgent Notice Marquee */}
      <div className="notice-marquee-wrapper">
        <div className="notice-title">
          <ShieldAlert size={16} style={{ marginRight: '8px' }} /> Announcements:
        </div>
        <div className="marquee-container">
          <div className="marquee-content">
            <span>🎓 Admissions open for Academic Session 2026-27 for D.Pharm & B.Pharm. Apply online or call 8839248262.</span>
            <span>📝 Semester mock examinations for B.Pharm and D.Pharm courses begin next week. View details in Academics Portal.</span>
            <span>🏆 Congratulations to our students for winning the Inter-College Pharmacy Quiz Championship!</span>
            <span>🚌 College transport facility covers Newada Barwan, Ratti Patti, and surrounding Ballia districts from July 1st.</span>
          </div>
        </div>
      </div>

      {/* 3. Statistics Grid */}
      <section className="section section-bg-light" style={{ padding: '60px 0' }}>
        <div className="container">
          <div className="stats-grid">
            
            <div className="stat-card card animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="stat-icon-wrapper">
                <Users size={28} />
              </div>
              <div className="stat-number">1,200+</div>
              <div className="stat-label">Enrolled Students</div>
            </div>

            <div className="stat-card card animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="stat-icon-wrapper">
                <Award size={28} />
              </div>
              <div className="stat-number">45+</div>
              <div className="stat-label">Expert Teachers</div>
            </div>

            <div className="stat-card card animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="stat-icon-wrapper">
                <Building size={28} />
              </div>
              <div className="stat-number">15+</div>
              <div className="stat-label">Modern Facilities</div>
            </div>

            <div className="stat-card card animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="stat-icon-wrapper">
                <CheckSquare size={28} />
              </div>
              <div className="stat-number">98%</div>
              <div className="stat-label">Board Passing Rate</div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Manager Message */}
      <section className="section">
        <div className="container">
          <div className="principal-section">
            
            <div className="principal-image-container">
              <div className="principal-image-frame">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop" 
                  alt="Principal Manoj Kumar" 
                />
              </div>
              <div className="principal-experience-badge">
                <span>ESTD</span>
                2024
              </div>
            </div>

            <div className="principal-content">
              <span className="text-gold" style={{ fontWeight: 700, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Message from Principal</span>
              <h3>Principal's Address</h3>
              <div className="principal-title">Manoj Kumar, Principal</div>
              <p className="principal-message">
                "Our core commitment at Archana Pharmacy College is to foster innovation, clinical integrity, and research excellence. Pharmaceutical education is about giving students the advanced laboratories, formulation expertise, and scientific ethics to serve global healthcare."
              </p>
              <p style={{ color: 'var(--text-muted)', marginBottom: '30px' }}>
                Under the guidance of our dedicated lecturers and pharmaceutical mentors, we have created an academic campus in Ballia that blends modern pharmacology research, digital drug design portals, and traditional values. We invite students to join us in shaping the future of healthcare.
              </p>
              <div className="principal-signature">
                <h4>Manoj Kumar</h4>
                <p>Principal, Archana Pharmacy College</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Quick Portals Section */}
      <section className="section section-bg-dark">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title text-gold">Student & Parent Portals</h2>
            <p className="section-subtitle">Access student data, verify credentials, or apply for enrollment directly.</p>
          </div>

          <div className="quick-links-section">
            
            <div className="quick-link-card">
              <div style={{ color: 'var(--secondary-color)' }}>
                <BookOpen size={36} />
              </div>
              <h3>Academics & Courses</h3>
              <p>Explore our PCI approved pharmaceutical courses including B.Pharm and D.Pharm with details on syllabi, state-of-the-art laboratory research, and training hours.</p>
              <Link to="/course" className="quick-link-arrow">
                View Curriculum <ArrowUpRight size={16} />
              </Link>
            </div>

            <div className="quick-link-card">
              <div style={{ color: 'var(--secondary-color)' }}>
                <Award size={36} />
              </div>
              <h3>Online Result Portal</h3>
              <p>Check board scorecards and annual exam results online. Enter the student's unique board roll number to generate a secure digital marksheet report.</p>
              <Link to="/result" className="quick-link-arrow">
                Search Results <ArrowUpRight size={16} />
              </Link>
            </div>

            <div className="quick-link-card">
              <div style={{ color: 'var(--secondary-color)' }}>
                <CheckSquare size={36} />
              </div>
              <h3>Transfer Certificate (TC)</h3>
              <p>Verify or request student Transfer Certificates (TC) online. Search using certificate IDs to pull official verified status for higher studies enrollment.</p>
              <Link to="/tc" className="quick-link-arrow">
                Verify Certificates <ArrowUpRight size={16} />
              </Link>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
