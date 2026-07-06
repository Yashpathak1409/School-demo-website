// src/pages/TC.jsx
import React, { useState } from 'react';
import { Search, ShieldCheck, Mail, Phone, Info, Award, HelpCircle } from 'lucide-react';
import { tcData } from '../data/mockData';
import '../styles/pages/pages.css';

const TC = () => {
  // Verification states
  const [tcSearchId, setTcSearchId] = useState('');
  const [searchedTc, setSearchedTc] = useState(null);
  const [searchError, setSearchError] = useState('');

  // Request form states
  const [requestSubmitted, setRequestSubmitted] = useState(false);
  const [requestId, setRequestId] = useState('');
  const [formData, setFormData] = useState({
    studentName: '',
    admissionNo: '',
    className: '',
    reason: '',
    parentName: '',
    email: '',
    phone: ''
  });

  const handleTcSearch = (e) => {
    e.preventDefault();
    const cleanId = tcSearchId.trim().toUpperCase();

    if (!cleanId) {
      setSearchError('Please enter a TC number.');
      setSearchedTc(null);
      return;
    }

    const matchedTc = tcData.find(item => item.tcNumber.toUpperCase() === cleanId);

    if (matchedTc) {
      setSearchError('');
      setSearchedTc(matchedTc);
    } else {
      setSearchError('No matching verified TC record found. (Try "TC-202601" or "TC-202602")');
      setSearchedTc(null);
    }
  };

  const handleRequestSubmit = (e) => {
    e.preventDefault();
    // Validate email, phone, fields
    if (!formData.studentName || !formData.admissionNo || !formData.className || !formData.phone) {
      alert('Please fill out all mandatory fields.');
      return;
    }

    // Generate random Request ID
    const randomId = 'REQ-TC-' + Math.floor(1000 + Math.random() * 9000);
    setRequestId(randomId);
    setRequestSubmitted(true);

    // Clear form
    setFormData({
      studentName: '',
      admissionNo: '',
      className: '',
      reason: '',
      parentName: '',
      email: '',
      phone: ''
    });
  };

  return (
    <div className="tc-portal-wrapper">
      
      {/* Page Header */}
      <section className="page-header tc-header">
        <div className="container">
          <h1>Transfer Certificate Portal</h1>
          <div className="breadcrumbs">
            <a href="/">Home</a> <span>/</span> TC Verification & Request
          </div>
        </div>
      </section>

      {/* Grid containing verification and form request */}
      <section className="section">
        <div className="container">
          
          <div className="text-center">
            <h2 className="section-title">Transfer Certificate Portal</h2>
            <p className="section-subtitle">Verify the authenticity of issued certificates online, or submit requests for issuing a new certificate.</p>
          </div>

          <div className="tc-grid-container">
            
            {/* Left side: TC Verification */}
            <div>
              <div className="card" style={{ marginBottom: '30px', borderTop: '4px solid var(--secondary-color)' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--primary-color)', fontSize: '1.25rem', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <ShieldCheck size={22} style={{ color: 'var(--success-color)' }} /> Verify Issued TC
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '20px' }}>
                  Verify official withdrawal certificates issued by the academy board. Search by certificate ID.
                </p>

                <form onSubmit={handleTcSearch}>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <input 
                      type="text" 
                      placeholder="TC Number (e.g. TC-202601)"
                      value={tcSearchId}
                      onChange={(e) => setTcSearchId(e.target.value)}
                      className="form-control"
                      style={{ flexGrow: 1 }}
                    />
                    <button type="submit" className="btn btn-primary" style={{ padding: '0 20px' }}>
                      Verify
                    </button>
                  </div>
                </form>

                {searchError && (
                  <div className="search-results-feedback feedback-error" style={{ marginTop: '15px', fontSize: '0.85rem' }}>
                    {searchError}
                  </div>
                )}
                
                <div style={{ marginTop: '15px', fontSize: '0.8rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <HelpCircle size={14} /> Demo IDs: <strong>TC-202601</strong>, <strong>TC-202602</strong>
                </div>
              </div>

              {/* Verified Document display */}
              {searchedTc && (
                <div className="tc-document-sheet animate-slide-up">
                  <div className="tc-border-outer">
                    <div className="tc-letterhead">
                      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
                        <div style={{ width: '55px', height: '55px', background: '#ffffff', borderRadius: '50%', border: '1px solid var(--secondary-color)', padding: '2px', overflow: 'hidden' }}>
                          <img src="/logo.png" alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '50%' }} />
                        </div>
                      </div>
                      <h2>Brij Sthali Academy</h2>
                      <p>Senior Secondary School • Vill+Post- Tentigaon, Mathura</p>
                      <span style={{ fontSize: '0.75rem', color: 'var(--success-color)', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '4px', border: '1px solid var(--success-color)', padding: '2px 8px', borderRadius: '4px', marginTop: '6px', backgroundColor: '#ecfdf5' }}>
                        ✓ OFFICIAL SYSTEM VERIFIED
                      </span>
                    </div>

                    <div className="tc-doc-title">Transfer Certificate</div>

                    <div className="tc-field-row">
                      <span className="label">TC Serial Number:</span>
                      <span className="value" style={{ fontWeight: 700, color: 'var(--primary-color)' }}>{searchedTc.tcNumber}</span>
                    </div>
                    <div className="tc-field-row">
                      <span className="label">Student Name:</span>
                      <span className="value">{searchedTc.studentName}</span>
                    </div>
                    <div className="tc-field-row">
                      <span className="label">Father's Name:</span>
                      <span className="value">{searchedTc.fatherName}</span>
                    </div>
                    <div className="tc-field-row">
                      <span className="label">Mother's Name:</span>
                      <span className="value">{searchedTc.motherName}</span>
                    </div>
                    <div className="tc-field-row">
                      <span className="label">Admission Register No:</span>
                      <span className="value">{searchedTc.admissionNumber}</span>
                    </div>
                    <div className="tc-field-row">
                      <span className="label">Date of Birth:</span>
                      <span className="value">{searchedTc.dateOfBirth}</span>
                    </div>
                    <div className="tc-field-row">
                      <span className="label">Class Left/Withdrawn:</span>
                      <span className="value">{searchedTc.classLeft}</span>
                    </div>
                    <div className="tc-field-row">
                      <span className="label">Date of Leaving School:</span>
                      <span className="value">{searchedTc.dateOfLeaving}</span>
                    </div>
                    <div className="tc-field-row">
                      <span className="label">Reason for Withdrawal:</span>
                      <span className="value">{searchedTc.reasonForLeaving}</span>
                    </div>
                    <div className="tc-field-row">
                      <span className="label">Conduct & Character:</span>
                      <span className="value" style={{ fontWeight: 600, color: 'var(--success-color)' }}>{searchedTc.conduct}</span>
                    </div>
                    <div className="tc-field-row" style={{ borderBottom: 'none' }}>
                      <span className="label">Certificate Date of Issue:</span>
                      <span className="value">{searchedTc.issueDate}</span>
                    </div>

                    <div className="tc-sign-box">
                      <div style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                        <div style={{ width: '100px', height: '1px', backgroundColor: 'var(--text-muted)', marginBottom: '4px' }}></div>
                        Prepared By
                      </div>
                      <div style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                        <div style={{ width: '100px', height: '1px', backgroundColor: 'var(--text-muted)', marginBottom: '4px' }}></div>
                        Principal Stamp
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right side: TC Request Form */}
            <div>
              <div className="card tc-request-form-card" style={{ borderTop: '4px solid var(--primary-color)' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--primary-color)', fontSize: '1.25rem', marginBottom: '20px' }}>
                  Request Transfer Certificate
                </h3>

                {requestSubmitted ? (
                  <div className="animate-fade-in text-center" style={{ padding: '20px 0' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', justifycenter: 'center', width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'rgba(16, 185, 129, 0.1)', color: 'var(--success-color)', marginBottom: '16px', justifyContent: 'center' }}>
                      <ShieldCheck size={32} />
                    </div>
                    <h4 style={{ fontFamily: 'var(--font-serif)', color: 'var(--primary-color)', marginBottom: '10px' }}>Request Submitted Successfully!</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '20px', lineHeight: 1.5 }}>
                      Your application has been registered. Our administration office will contact you for manual ledger verification details within 3-4 working days.
                    </p>
                    <div style={{ padding: '12px', backgroundColor: '#f1f5f9', borderRadius: '6px', fontSize: '0.85rem', fontWeight: 600, color: 'var(--primary-color)', marginBottom: '25px' }}>
                      Request Ticket ID: {requestId}
                    </div>
                    <button onClick={() => setRequestSubmitted(false)} className="btn btn-outline" style={{ width: '100%' }}>
                      Apply For Another Certificate
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleRequestSubmit}>
                    
                    <div className="form-group">
                      <label className="form-label" htmlFor="stdName">Student Full Name *</label>
                      <input 
                        type="text" 
                        id="stdName"
                        value={formData.studentName}
                        onChange={(e) => setFormData({...formData, studentName: e.target.value})}
                        required 
                        className="form-control" 
                        placeholder="As registered in books" 
                      />
                    </div>

                    <div className="form-group" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                      <div>
                        <label className="form-label" htmlFor="admNo">Admission Register No *</label>
                        <input 
                          type="text" 
                          id="admNo"
                          value={formData.admissionNo}
                          onChange={(e) => setFormData({...formData, admissionNo: e.target.value})}
                          required 
                          className="form-control" 
                          placeholder="e.g. ADM-1489" 
                        />
                      </div>
                      <div>
                        <label className="form-label" htmlFor="className">Last Class Studied *</label>
                        <input 
                          type="text" 
                          id="className"
                          value={formData.className}
                          onChange={(e) => setFormData({...formData, className: e.target.value})}
                          required 
                          className="form-control" 
                          placeholder="e.g. Class XII - Science" 
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="reason">Reason for Transfer / Leaving *</label>
                      <textarea 
                        id="reason"
                        value={formData.reason}
                        onChange={(e) => setFormData({...formData, reason: e.target.value})}
                        className="form-control" 
                        rows="3" 
                        placeholder="e.g. Parents relocating to another state / Completed board examinations"
                        style={{ resize: 'vertical' }}
                      ></textarea>
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="parentName">Parent / Guardian Name *</label>
                      <input 
                        type="text" 
                        id="parentName"
                        value={formData.parentName}
                        onChange={(e) => setFormData({...formData, parentName: e.target.value})}
                        required 
                        className="form-control" 
                        placeholder="Father's or Mother's Name" 
                      />
                    </div>

                    <div className="form-group" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                      <div>
                        <label className="form-label" htmlFor="parentEmail">Email Address</label>
                        <input 
                          type="email" 
                          id="parentEmail"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="form-control" 
                          placeholder="name@email.com" 
                        />
                      </div>
                      <div>
                        <label className="form-label" htmlFor="parentPhone">Contact Phone *</label>
                        <input 
                          type="tel" 
                          id="parentPhone"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          required 
                          className="form-control" 
                          placeholder="Mobile number" 
                        />
                      </div>
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '10px' }}>
                      Submit TC Application Request
                    </button>
                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default TC;
