// src/pages/About.jsx
import React from 'react';
import { Target, Compass, Award, Shield, User, Heart } from 'lucide-react';
import '../styles/pages/pages.css';

const About = () => {
  return (
    <div className="about-wrapper">
      
      {/* Page Header */}
      <section className="page-header about-header">
        <div className="container animate-fade-in">
          <h1>About Our College</h1>
          <div className="breadcrumbs">
            <a href="/">Home</a> <span>/</span> About Us
          </div>
        </div>
      </section>

      {/* Intro section */}
      <section className="section">
        <div className="container">
          <div className="about-intro-grid">
            
            <div className="about-intro-content animate-slide-up">
              <span className="text-gold" style={{ fontWeight: 700, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Established 2024</span>
              <h2 className="section-title" style={{ display: 'block', textAlign: 'left', margin: '10px 0 20px' }}>Pharmaceutical Excellence in Mathura</h2>
              <p>
                Archana Pharmacy College is a premier pharmaceutical institution located in the peaceful landscape of <strong>Vill+Post- Tentigaon, Mant, Mathura</strong>. Established with a vision to make top-tier healthcare and pharmaceutical education accessible, the college has grown into a hub of academic excellence, research, and ethics.
              </p>
              <p>
                Approved by the Pharmacy Council of India (PCI), New Delhi, we offer Bachelor of Pharmacy (B.Pharm) and Diploma in Pharmacy (D.Pharm) courses. Our campus is spread over a sprawling area, offering a modern, state-of-the-art laboratory and focused learning environment.
              </p>
              <p>
                Through a blend of rigorous laboratory training, clinical assignments, research expos, and professional development seminars, we prepare our students to become competent pharmacists and research scientists of tomorrow.
              </p>
            </div>

            <div className="about-photo-stack">
              <div className="photo-stack-item photo-stack-item-1">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop" 
                  alt="Modern Pharmacy Laboratory" 
                />
              </div>
              <div className="photo-stack-item photo-stack-item-2">
                <img 
                  src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=600&auto=format&fit=crop" 
                  alt="Pharmacy Reference Library" 
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="section section-bg-light">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">Core Ideals & Values</h2>
            <p className="section-subtitle">The foundation upon which our educational system stands.</p>
          </div>

          <div className="values-grid">
            
            <div className="value-card value-card-primary">
              <div className="value-icon">
                <Target size={32} />
              </div>
              <h3>Our Vision</h3>
              <p>
                To provide a transformative learning experience that fosters intellectual development, innovative thinking, and high integrity in students, empowering them to contribute meaningfully to society.
              </p>
            </div>

            <div className="value-card value-card-gold">
              <div className="value-icon">
                <Compass size={32} />
              </div>
              <h3>Our Mission</h3>
              <p>
                We strive to maintain a state-of-the-art educational facility, provide highly dedicated faculty mentorship, foster a dynamic sports program, and build active parent partnerships to shape well-rounded students.
              </p>
            </div>

            <div className="value-card value-card-primary">
              <div className="value-icon">
                <Shield size={32} />
              </div>
              <h3>Core Values</h3>
              <p>
                We operate on the principles of mutual respect, responsibility, academic curiosity, community service, and personal excellence, ensuring that our students develop strong moral character.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Administration Message */}
      <section className="section">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">Management Board</h2>
            <p className="section-subtitle">Dedicated leaders driving the academic and administrative growth of Archana Pharmacy College.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '40px', marginTop: '20px' }}>
            
            <div className="card" style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
              <div style={{ flexShrink: 0, width: '100px', height: '100px', borderRadius: '50%', backgroundColor: 'var(--primary-color)', color: 'var(--secondary-color)', display: 'flex', alignItems: 'center', justifycenter: 'center', fontSize: '2.5rem', fontWeight: 'bold', justifyContent: 'center' }}>
                <User size={40} />
              </div>
              <div>
                <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--primary-color)', fontSize: '1.25rem' }}>Mr. Satish Chaudhary</h3>
                <span style={{ fontSize: '0.85rem', color: 'var(--secondary-dark)', fontWeight: '600', textTransform: 'uppercase' }}>Managing Director</span>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginTop: '8px' }}>
                  "We believe that every child has a unique spark. Our management focuses on creating the ideal environment with labs, libraries, hostels, and sports grounds to convert that spark into a flame of success."
                </p>
              </div>
            </div>

            <div className="card" style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
              <div style={{ flexShrink: 0, width: '100px', height: '100px', borderRadius: '50%', backgroundColor: 'var(--primary-color)', color: 'var(--secondary-color)', display: 'flex', alignItems: 'center', justifycenter: 'center', fontSize: '2.5rem', fontWeight: 'bold', justifyContent: 'center' }}>
                <User size={40} />
              </div>
              <div>
                <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--primary-color)', fontSize: '1.25rem' }}>Mrs. Laxmi Devi</h3>
                <span style={{ fontSize: '0.85rem', color: 'var(--secondary-dark)', fontWeight: '600', textTransform: 'uppercase' }}>Academic Director</span>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginTop: '8px' }}>
                  "Our curriculum matches board standards, supplemented with digital classrooms, language training, and competitive exam guidance. Quality and discipline are our core commitments."
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
