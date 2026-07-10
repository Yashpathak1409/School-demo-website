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
      case 'b-pharm':
        return {
          timing: '09:00 AM - 04:00 PM',
          labs: 'Pharmaceutics Lab, Pharmacology Lab, Pharmaceutical Chemistry Lab, Pharmacognosy Lab, Instrument Room',
          exams: 'Semester End University Examinations + Sessional internal tests',
          objectives: 'Comprehensive study of drugs, chemical synthesis, pharmacological testing, clinical pharmacy parameters, and drug regulatory laws.'
        };
      case 'd-pharm':
        return {
          timing: '09:00 AM - 03:00 PM',
          labs: 'Model Dispensing Pharmacy, Biochemistry Lab, EVS & Social Pharmacy Wing',
          exams: 'Annual Board Examinations + 3 internal sessional assessments',
          objectives: 'Practical skills in compounding and dispensing medications, patient counseling, community pharmacy shop setup, and hospital drug distribution.'
        };
      case 'medicinal-garden':
        return {
          timing: 'Daily study: 03:00 PM - 04:30 PM',
          labs: 'Main botanical garden, drying unit, classification catalog room',
          exams: 'Phytochemistry identification evaluations + Herbal project reports',
          objectives: 'Cultivating, cataloging, and studying active constituents of over 100 species of medicinal plants.'
        };
      case 'pharmaceutics-lab':
        return {
          timing: '10:00 AM - 04:00 PM',
          labs: 'Advanced industrial formulation facility, sterilization chambers',
          exams: 'Practical notebook checks + sessional reports + dosage form presentations',
          objectives: 'Formulation development and quality checking of tablets, capsules, ointments, emulsions, and novel drug carriers.'
        };
      case 'pharmacology-wing':
        return {
          timing: '10:00 AM - 04:00 PM',
          labs: 'Pre-clinical screening room, simulation software systems',
          exams: 'Toxicity screening reports + animal action simulations + oral vivas',
          objectives: 'Measuring drug action mechanism, safety indicators, adverse effects, and biological evaluations.'
        };
      case 'pharmaceutical-chemistry-lab':
        return {
          timing: '10:00 AM - 04:00 PM',
          labs: 'API Synthesis lab, chromatography room, UV spectrophotometer lab',
          exams: 'Organic synthesis yields + UV spectrophotometry assays + laboratory files',
          objectives: 'Synthesizing active ingredients, quality control testing, structure elucidation, and analytical purity estimations.'
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
            <h2 className="section-title">Academic Courses & Streams</h2>
            <p className="section-subtitle">We offer professional pharmacy courses approved by the Pharmacy Council of India (PCI) and structured according to standard university guidelines.</p>
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
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>Special guidance sessions are conducted on Saturdays for students requiring additional assistance or practice in pharmaceutical chemistry and calculations.</p>
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
