// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, Award, ShieldAlert, ChevronRight, BookOpen, 
  ArrowUpRight, Building, HelpCircle, CheckSquare 
} from 'lucide-react';
import '../styles/pages/pages.css';

const Home = () => {
  return (
    <div className="home-wrapper">
      
      {/* 1. Hero Banner */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content animate-slide-up">
            <span className="hero-badge">Est. 2011 • Co-Educational</span>
            <h1>Nurturing Minds, <span>Inspiring Excellence</span></h1>
            <p>
              Welcome to Brij Sthali Academy Senior Secondary School, a premier institution in Tentigaon (Mathura) dedicated to providing holistic learning, scientific inquiry, and standard values.
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
            <span>🎓 Admissions open for Academic Session 2026-27 from Nursery to Class XI. Visit contact desk or call 7300709977, 8077477382.</span>
            <span>📝 Mock examinations for classes X and XII begin next week. View subject-wise syllabus in Academics Portal.</span>
            <span>🏆 Congratulations to Raman House for winning the Annual Sports Meet Championship Shield!</span>
            <span>🚌 New school bus routes from Mant and surrounding Mathura districts are operational from July 1st.</span>
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
              <div className="stat-number">99%</div>
              <div className="stat-label">CBSE Success Rate</div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Principal Message */}
      <section className="section">
        <div className="container">
          <div className="principal-section">
            
            <div className="principal-image-container">
              <div className="principal-image-frame">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop" 
                  alt="Principal Mr. Devendra Singh" 
                />
              </div>
              <div className="principal-experience-badge">
                <span>15+ Yrs</span>
                Experience
              </div>
            </div>

            <div className="principal-content">
              <span className="text-gold" style={{ fontWeight: 700, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Message from Desk</span>
              <h3>Principal's Address</h3>
              <div className="principal-title">Mr. Devendra Singh, Principal</div>
              <p className="principal-message">
                "Our vision at Brij Sthali Academy is to nurture curious minds and foster moral character in a welcoming, technologically advanced setting. We believe that true education goes beyond textbooks—it lies in curiosity, critical analysis, sportsmanship, and service to society."
              </p>
              <p style={{ color: 'var(--text-muted)', marginBottom: '30px' }}>
                We are committed to delivering rigorous education that prepares students for global challenges while rooted in our regional culture and heritage. Our teachers work closely with families to create paths where every student achieves their fullest potential.
              </p>
              <div className="principal-signature">
                <h4>Devendra Singh</h4>
                <p>Principal, Brij Sthali Academy</p>
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
              <p>Explore streams offered at senior secondary levels including Science, Commerce, and Arts with details on subjects, practical labs, and evaluation patterns.</p>
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
