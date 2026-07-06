// src/pages/Result.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Info, HelpCircle } from 'lucide-react';
import '../styles/pages/pages.css';

const Result = () => {
  const [rollNo, setRollNo] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [selectedTopper, setSelectedTopper] = useState(null);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const cleanRoll = rollNo.trim();

    if (!cleanRoll) {
      setErrorMsg('Please enter a roll number.');
      return;
    }

    // Mock search check (Roll numbers: 202601, 202602, 202603)
    const validRolls = ['202601', '202602', '202603'];

    if (validRolls.includes(cleanRoll)) {
      setErrorMsg('');
      navigate(`/result-detail?roll=${cleanRoll}`);
    } else {
      setErrorMsg('Roll number not found. Please try "202601", "202602", or "202603" for demo results.');
    }
  };

  return (
    <div className="result-search-wrapper">
      
      {/* Page Header */}
      <section className="page-header result-header">
        <div className="container">
          <h1>Examinations & Results</h1>
          <div className="breadcrumbs">
            <a href="/">Home</a> <span>/</span> Online Results
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="section">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">Online Student Scorecards</h2>
            <p className="section-subtitle">Search annual board grades or progress results securely using student roll numbers.</p>
          </div>

          <div className="card search-card animate-slide-up">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px', color: 'var(--primary-color)' }}>
              <Info size={20} />
              <h3 style={{ margin: 0, fontSize: '1.2rem', fontFamily: 'var(--font-serif)' }}>Search Report Sheet</h3>
            </div>
            
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '24px' }}>
              Enter the student's unique academic roll number issued during the board registrations. Verify that the session is set correct.
            </p>

            <form onSubmit={handleSearch}>
              <div className="form-group">
                <label className="form-label" htmlFor="rollNumberInput">Academic Roll Number</label>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <input 
                    type="text" 
                    id="rollNumberInput"
                    placeholder="Enter Roll Number (e.g. 202601)" 
                    value={rollNo}
                    onChange={(e) => setRollNo(e.target.value)}
                    className="form-control"
                    style={{ flexGrow: 1 }}
                  />
                  <button type="submit" className="btn btn-primary" style={{ padding: '0 24px' }}>
                    <Search size={18} style={{ marginRight: '6px' }} /> Search
                  </button>
                </div>
              </div>
            </form>

            {errorMsg && (
              <div className="search-results-feedback feedback-error">
                {errorMsg}
              </div>
            )}

            <div style={{ marginTop: '30px', borderTop: '1px solid var(--border-color)', paddingTop: '20px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--primary-color)', marginBottom: '8px' }}>
                <HelpCircle size={15} /> Demo Roll Numbers:
              </h4>
              <ul style={{ paddingLeft: '20px', lineHeight: '1.6' }}>
                <li><strong>202601</strong> - Amit Chaudhary (Class XII - Science)</li>
                <li><strong>202602</strong> - Priya Sharma (Class XII - Commerce)</li>
                <li><strong>202603</strong> - Rahul Singh (Class X)</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Toppers Section */}
      <section className="section section-bg-light" style={{ padding: '60px 0' }}>
        <div className="container">
          <div className="text-center">
            <span className="text-gold" style={{ fontWeight: 700, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1.5px' }}>Board Achievements</span>
            <h2 className="section-title">Our Academic Toppers</h2>
            <p className="section-subtitle">Celebrating the outstanding achievements of our students in CBSE Board Examinations. Hard work, guidance, and standard efforts pave the path to excellence.</p>
          </div>

          {/* Bold Motivational Quote */}
          <div style={{ maxWidth: '800px', margin: '0 auto 40px', textAlign: 'center', padding: '24px', backgroundColor: 'var(--card-bg)', borderLeft: '4px solid var(--secondary-color)', borderRadius: '4px', boxShadow: 'var(--shadow-sm)' }}>
            <p style={{ fontSize: '1.15rem', fontWeight: '700', color: 'var(--primary-color)', fontStyle: 'italic', lineHeight: '1.6' }}>
              "Success is the outcome of constant prep work, rigorous study schedules, and the relentless support of mentors. Brij Sthali Academy toppers have set benchmarks of academic brilliance."
            </p>
            <span style={{ display: 'block', marginTop: '10px', fontSize: '0.88rem', fontWeight: '600', color: 'var(--secondary-dark)' }}>
              — SCHOOL MANAGEMENT & ACADEMIC BOARD
            </span>
          </div>

          {/* Toppers Image Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '30px', marginTop: '20px' }}>
            
            <div 
              className="card" 
              style={{ padding: '15px', cursor: 'pointer', overflow: 'hidden', textAlign: 'center', transition: 'var(--transition-normal)' }}
              onClick={() => setSelectedTopper('/toppers-xii.jpg')}
            >
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', color: 'var(--primary-color)', marginBottom: '12px' }}>
                Class XII Board Toppers
              </h3>
              <div style={{ overflow: 'hidden', borderRadius: '8px', border: '1px solid var(--border-color)', height: '350px' }}>
                <img 
                  src="/toppers-xii.jpg" 
                  alt="Class XII Toppers Banner - Mayank Sharma 93%" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: '0.5s ease' }}
                  className="topper-banner-img"
                />
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '12px', fontWeight: '500' }}>
                🔍 Click image to enlarge / view Class XII results
              </p>
            </div>

            <div 
              className="card" 
              style={{ padding: '15px', cursor: 'pointer', overflow: 'hidden', textAlign: 'center', transition: 'var(--transition-normal)' }}
              onClick={() => setSelectedTopper('/toppers-x.jpg')}
            >
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', color: 'var(--primary-color)', marginBottom: '12px' }}>
                Class X Board Toppers
              </h3>
              <div style={{ overflow: 'hidden', borderRadius: '8px', border: '1px solid var(--border-color)', height: '350px' }}>
                <img 
                  src="/toppers-x.jpg" 
                  alt="Class X Toppers Banner - Aditya Kumar Singh 97%" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: '0.5s ease' }}
                  className="topper-banner-img"
                />
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '12px', fontWeight: '500' }}>
                🔍 Click image to enlarge / view Class X results
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Toppers Zoom Lightbox Modal */}
      {selectedTopper && (
        <div className="lightbox-overlay" onClick={() => setSelectedTopper(null)}>
          <div className="lightbox-content" style={{ maxWidth: '85vw' }} onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setSelectedTopper(null)} aria-label="Close zoom modal">
              &times;
            </button>
            <img 
              src={selectedTopper} 
              alt="Board Toppers Enriched View" 
              className="lightbox-image" 
              style={{ border: '4px solid var(--secondary-color)', maxHeight: '80vh', objectFit: 'contain' }}
            />
            <div className="lightbox-caption" style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--secondary-light)' }}>
              {selectedTopper.includes('xii') ? 'Class XII Board Toppers Roll of Honor' : 'Class X Board Toppers Roll of Honor'}
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Result;
