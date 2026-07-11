// src/pages/Home.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, Award, ShieldAlert, ChevronRight, BookOpen, 
  ArrowUpRight, Building, HelpCircle, CheckSquare, BellRing,
  Calendar, User
} from 'lucide-react';
import { blogData, galleryData } from '../data/mockData';
import '../styles/pages/pages.css';

const Home = () => {
  const heroImages = [
    'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1579154204601-01588f35116f?q=80&w=1600&auto=format&fit=crop'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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
      <section 
        className="hero-section"
        style={{
          backgroundImage: `linear-gradient(rgba(11, 34, 64, 0.65), rgba(5, 19, 41, 0.85)), url('${heroImages[currentImageIndex]}')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          transition: 'background-image 1.2s ease-in-out'
        }}
      >
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

      {/* 4.5. Latest News & Campus Highlights */}
      <section className="section section-bg-light">
        <div className="container">
          <div className="text-center">
            <span className="text-gold" style={{ fontWeight: 700, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1.5px' }}>Updates & News</span>
            <h2 className="section-title">Latest Campus Highlights</h2>
            <p className="section-subtitle">Read about recently conducted workshops, sporting events, and academic guidelines.</p>
          </div>

          <div className="blog-grid" style={{ marginTop: '30px' }}>
            {blogData.slice(0, 3).map((blog) => (
              <div key={blog.id} className="card blog-card">
                <div className="blog-image-wrapper">
                  <img src={blog.image} alt={blog.title} loading="lazy" style={{ height: '220px', objectFit: 'cover', width: '100%' }} />
                  <span className="blog-meta-badge">{blog.category}</span>
                </div>
                <div className="blog-card-content" style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <div className="blog-date-author">
                    <span style={{ marginRight: '15px', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                      <Calendar size={13} /> {blog.date}
                    </span>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                      <User size={13} /> {blog.author}
                    </span>
                  </div>
                  <h3>{blog.title}</h3>
                  <p>{blog.excerpt}</p>
                  <Link 
                    to="/blog"
                    className="btn btn-outline" 
                    style={{ marginTop: 'auto', alignSelf: 'flex-start' }}
                  >
                    Read Article <ChevronRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: '40px' }}>
            <Link to="/blog" className="btn btn-primary">
              View All Blog Articles <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 4.6. Gallery Highlights */}
      <section className="section">
        <div className="container">
          <div className="text-center">
            <span className="text-gold" style={{ fontWeight: 700, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1.5px' }}>Visual Tour</span>
            <h2 className="section-title">Campus Gallery Highlights</h2>
            <p className="section-subtitle">Catch glimpses of sports achievements, modern laboratories, and our green college campus.</p>
          </div>

          <div className="gallery-highlights-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginTop: '30px' }}>
            {galleryData.slice(0, 4).map((item) => (
              <div key={item.id} className="card" style={{ padding: '0', overflow: 'hidden', height: '240px', position: 'relative', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                <img 
                  src={item.image} 
                  alt={item.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }} 
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.06)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1.0)'}
                />
                <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', background: 'linear-gradient(transparent, rgba(0,0,0,0.85))', padding: '15px', color: '#ffffff' }}>
                  <h4 style={{ margin: '0', fontSize: '0.92rem', fontWeight: 600, textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: '40px' }}>
            <Link to="/gallery" className="btn btn-outline">
              Explore Full Gallery <ChevronRight size={16} />
            </Link>
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
