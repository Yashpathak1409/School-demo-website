// src/pages/Teacher.jsx
import React from 'react';
import { Mail, GraduationCap, Award, HelpCircle } from 'lucide-react';
import { teachersData } from '../data/mockData';
import '../styles/pages/pages.css';

const Teacher = () => {
  return (
    <div className="teachers-wrapper">
      
      {/* Page Header */}
      <section className="page-header teacher-header">
        <div className="container">
          <h1>Meet Our Faculty</h1>
          <div className="breadcrumbs">
            <a href="/">Home</a> <span>/</span> Faculty Staff
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="section">
        <div className="container">
          
          <div className="text-center">
            <h2 className="section-title">Academicians & Educators</h2>
            <p className="section-subtitle">Our teachers bring academic expertise, standard board insights, and dedicated mentoring focus to help students succeed.</p>
          </div>

          <div className="teacher-grid animate-fade-in">
            {teachersData.map((teacher) => (
              <div key={teacher.id} className="card teacher-card">
                <div className="teacher-image-wrapper">
                  <img src={teacher.photo} alt={teacher.name} loading="lazy" />
                </div>
                <div className="teacher-card-content">
                  <h3>{teacher.name}</h3>
                  <span>{teacher.role}</span>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '20px' }}>
                    <GraduationCap size={16} style={{ color: 'var(--secondary-dark)', flexShrink: 0 }} />
                    <span style={{ margin: 0, textTransform: 'none', fontWeight: 400, color: 'var(--text-muted)' }}>
                      {teacher.qualification}
                    </span>
                  </div>

                  <a 
                    href={`mailto:${teacher.email}`}
                    className="teacher-contact-btn"
                  >
                    <Mail size={14} /> Send Email Address
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Academic Advisory Notice */}
          <div className="card" style={{ marginTop: '60px', display: 'flex', gap: '20px', alignItems: 'center', backgroundColor: '#f8fafc', borderLeft: '4px solid var(--secondary-color)' }}>
            <div style={{ color: 'var(--secondary-dark)' }}><Award size={40} /></div>
            <div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--primary-color)' }}>Faculty Training & Seminars</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                All faculty staff at Brij Sthali Academy undergo periodic professional training workshops, CBSE workshops, and curriculum reviews to stay ahead of pedagogical standards.
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Teacher;
