// src/pages/Course.jsx
import React, { useState } from 'react';
import { 
  BookOpen, Award, FlaskConical, TrendingUp, Palette, CheckCircle, 
  X, HelpCircle, Calendar, GraduationCap, Trophy 
} from 'lucide-react';
import { coursesData } from '../data/mockData';
import '../styles/pages/pages.css';

const Course = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'BookOpen': return <BookOpen size={24} />;
      case 'Award': return <Award size={24} />;
      case 'FlaskConical': return <FlaskConical size={24} />;
      case 'TrendingUp': return <TrendingUp size={24} />;
      case 'Palette': return <Palette size={24} />;
      case 'Trophy': return <Trophy size={24} />;
      default: return <BookOpen size={24} />;
    }
  };

  const getSyllabusDetails = (courseId) => {
    switch (courseId) {
      case 'primary':
        return {
          timing: '08:30 AM - 01:30 PM',
          labs: 'Interactive Toys Room, Art & Craft Center, Kid\'s Playground',
          exams: 'Periodic Tests (4 rounds) + Semestral Evaluations (Half Yearly & Annual Assessments)',
          objectives: 'Strong focus on foundational language concepts (English, Hindi), arithmetic basics, creative visual art, and sensory-motor coordination.'
        };
      case 'middle-secondary':
        return {
          timing: '08:00 AM - 02:00 PM',
          labs: 'Integrated Science Lab, Computer Science Lab, Social Science Lab',
          exams: 'Board Structured Class assessments + Project Portfolios + Half Yearly and Final Board Assessments',
          objectives: 'Fostering inquiry-based logical reasoning in science and mathematics, spatial and political awareness, and advanced grammatical competencies.'
        };
      case 'senior-secondary-science':
        return {
          timing: '08:00 AM - 02:00 PM',
          labs: 'Physics Lab, Chemistry Lab, Biology Lab, High-End Computer Lab',
          exams: 'Weekly Unit Tests + Lab Practicals evaluations + Mid-Term Assessments + Pre-Board Screenings',
          objectives: 'Rigorous training in experimental physics and chemistry, advanced mathematics/biological classifications, and preparation for national level entrance exams (JEE, NEET).'
        };
      case 'senior-secondary-commerce':
        return {
          timing: '08:00 AM - 02:00 PM',
          labs: 'Informatics Practices Lab, Entrepreneurship Development Room',
          exams: 'Unit Assessments + Business Case studies reviews + Mid-Terms + Pre-Board evaluations',
          objectives: 'Mastering principles of double-entry ledger bookkeeping, macro & micro economics frameworks, corporate management dynamics, and quantitative methods.'
        };
      case 'senior-secondary-arts':
        return {
          timing: '08:00 AM - 02:00 PM',
          labs: 'Geography Cartography Room, Humanities Seminar Room',
          exams: 'Periodic tests + Project Files research checks + Written Semester exams',
          objectives: 'Nurturing deep critical analysis of historical civilizations, global geopolitical structures, sociopolitical changes, and advanced lingual aesthetics.'
        };
      case 'sports-athletics':
        return {
          timing: 'Daily sessions: 02:00 PM - 04:00 PM (After Academic hours)',
          labs: 'Main Cricket Pitch, Outdoor Basketball Court, Indoor Games Room, Yoga Pavilion',
          exams: 'Physical Fitness Tests (Endurance, Speed, Flex) + Tournament performance awards',
          objectives: 'Fostering clean team building, cardiovascular fitness, athletic disciplines, self-defense skills, and representing the school in district/state tournaments.'
        };
      default:
        return null;
    }
  };

  return (
    <div className="courses-wrapper">
      
      {/* Page Header */}
      <section className="page-header course-header">
        <div className="container">
          <h1>Academics & Courses</h1>
          <div className="breadcrumbs">
            <a href="/">Home</a> <span>/</span> Courses
          </div>
        </div>
      </section>

      {/* Intro section */}
      <section className="section">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">Academic Wings & Streams</h2>
            <p className="section-subtitle">We offer comprehensive primary, secondary, and specialized senior secondary education streams structured as per state board guidelines.</p>
          </div>

          <div className="course-grid">
            {coursesData.map((course) => (
              <div key={course.id} className="card course-card">
                <div className="course-card-header">
                  <div className="course-card-icon">
                    {getIcon(course.icon)}
                  </div>
                  <div>
                    <h3>{course.wing}</h3>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{course.classes}</span>
                  </div>
                </div>
                
                <p>{course.curriculum}</p>
                
                <div className="course-subjects-title">Core Subjects</div>
                <ul className="course-subjects-list">
                  {course.subjects.map((sub, idx) => (
                    <li key={idx}>{sub}</li>
                  ))}
                </ul>

                <button 
                  onClick={() => setSelectedCourse(course)}
                  className="btn btn-outline" 
                  style={{ width: '100%', marginTop: 'auto' }}
                >
                  View Details & Timings
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Academic Rules */}
      <section className="section section-bg-light">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">Academic Policies & Guidelines</h2>
            <p className="section-subtitle">Important standards maintained to ensure high quality learning output.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px', marginTop: '20px' }}>
            <div className="card" style={{ backgroundColor: '#ffffff' }}>
              <div style={{ color: 'var(--secondary-dark)', marginBottom: '16px' }}><CheckCircle size={28} /></div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', marginBottom: '10px' }}>75% Attendance</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>Students must maintain a minimum of 75% attendance during the academic term to qualify for appearing in the final examinations.</p>
            </div>
            <div className="card" style={{ backgroundColor: '#ffffff' }}>
              <div style={{ color: 'var(--secondary-dark)', marginBottom: '16px' }}><CheckCircle size={28} /></div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', marginBottom: '10px' }}>Continuous Assessment</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>Regular monthly unit tests, oral quizzes, laboratory practical books, and project reports contribute directly to the internal assessment grades.</p>
            </div>
            <div className="card" style={{ backgroundColor: '#ffffff' }}>
              <div style={{ color: 'var(--secondary-dark)', marginBottom: '16px' }}><CheckCircle size={28} /></div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', marginBottom: '10px' }}>Remedial Classes</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>Special guidance sessions are conducted on Saturdays for students requiring additional assistance or practice in core mathematics and sciences.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Detail Modal */}
      {selectedCourse && (() => {
        const details = getSyllabusDetails(selectedCourse.id);
        return (
          <div className="blog-modal-overlay" onClick={() => setSelectedCourse(null)}>
            <div className="blog-modal-content" style={{ maxWidth: '650px' }} onClick={(e) => e.stopPropagation()}>
              <div className="blog-modal-inner" style={{ padding: '30px' }}>
                <button className="blog-modal-close-btn" onClick={() => setSelectedCourse(null)}>
                  <X size={20} />
                </button>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', borderBottom: '2px solid var(--secondary-color)', paddingBottom: '15px', marginBottom: '20px' }}>
                  <div className="course-card-icon" style={{ width: '45px', height: '45px' }}>
                    {getIcon(selectedCourse.icon)}
                  </div>
                  <div>
                    <h2 style={{ margin: 0, fontFamily: 'var(--font-serif)', fontSize: '1.45rem', color: 'var(--primary-color)' }}>
                      {selectedCourse.wing}
                    </h2>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{selectedCourse.classes} details</span>
                  </div>
                </div>

                <div className="blog-modal-body" style={{ fontSize: '0.92rem' }}>
                  <div style={{ marginBottom: '15px' }}>
                    <h4 style={{ color: 'var(--primary-color)', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Calendar size={16} /> Daily Timings
                    </h4>
                    <p style={{ paddingLeft: '24px', color: 'var(--text-muted)' }}>{details.timing}</p>
                  </div>

                  <div style={{ marginBottom: '15px' }}>
                    <h4 style={{ color: 'var(--primary-color)', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <GraduationCap size={16} /> Academic Objectives
                    </h4>
                    <p style={{ paddingLeft: '24px', color: 'var(--text-muted)', lineHeight: 1.5 }}>{details.objectives}</p>
                  </div>

                  <div style={{ marginBottom: '15px' }}>
                    <h4 style={{ color: 'var(--primary-color)', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <FlaskConical size={16} /> Laboratories & Resources
                    </h4>
                    <p style={{ paddingLeft: '24px', color: 'var(--text-muted)' }}>{details.labs}</p>
                  </div>

                  <div style={{ marginBottom: '20px' }}>
                    <h4 style={{ color: 'var(--primary-color)', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Award size={16} /> Evaluation Framework
                    </h4>
                    <p style={{ paddingLeft: '24px', color: 'var(--text-muted)', lineHeight: 1.5 }}>{details.exams}</p>
                  </div>
                  
                  <button 
                    onClick={() => setSelectedCourse(null)}
                    className="btn btn-primary" 
                    style={{ width: '100%' }}
                  >
                    Close Information
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })()}

    </div>
  );
};

export default Course;
