// src/pages/ResultDetail.jsx
import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Printer, ArrowLeft, Download, GraduationCap, Award } from 'lucide-react';
import { resultsData } from '../data/mockData';
import '../styles/pages/pages.css';

const ResultDetail = () => {
  const [searchParams] = useSearchParams();
  const roll = searchParams.get('roll');

  const studentResult = resultsData.find(res => res.rollNumber === roll);

  const handlePrint = () => {
    window.print();
  };

  if (!studentResult) {
    return (
      <div className="section container text-center" style={{ minHeight: '60vh', paddingTop: '150px' }}>
        <h2 style={{ fontFamily: 'var(--font-serif)', color: 'var(--primary-color)' }}>No Record Found</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '30px' }}>The roll number requested does not exist in our active archives.</p>
        <Link to="/result" className="btn btn-primary">
          <ArrowLeft size={16} /> Back to Search
        </Link>
      </div>
    );
  }

  // Calculate totals
  const totalMax = studentResult.marks.reduce((acc, curr) => acc + curr.maxTheory + curr.maxPractical, 0);
  const totalObtained = studentResult.marks.reduce((acc, curr) => acc + curr.total, 0);

  return (
    <div className="result-detail-wrapper" style={{ paddingBottom: '80px' }}>
      
      {/* Page Header */}
      <section className="page-header result-header">
        <div className="container">
          <h1>Student Report Sheet</h1>
          <div className="breadcrumbs">
            <Link to="/">Home</Link> <span>/</span> <Link to="/result">Online Results</Link> <span>/</span> Report Sheet
          </div>
        </div>
      </section>

      {/* Marksheet Report Section */}
      <section className="section">
        <div className="container">
          
          <div className="transcript-card animate-slide-up">
            
            {/* Report Sheet Head */}
            <div className="transcript-header">
              <div className="transcript-header-left">
                <div className="transcript-header-logo" style={{ background: '#ffffff', border: '1px solid var(--secondary-color)', padding: '2px' }}>
                  <img src="/logo.png" alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '50%' }} />
                </div>
                <div className="transcript-school-info">
                  <h2>Archana Pharmacy College</h2>
                  <p>Approved by PCI, New Delhi • Vill+Post- Tentigaon, Mant, Mathura</p>
                </div>
              </div>
              <div className="transcript-header-right">
                <span className={`transcript-badge ${studentResult.status === 'PASSED' ? 'transcript-badge-pass' : 'transcript-badge-fail'}`}>
                  {studentResult.status}
                </span>
              </div>
            </div>

            {/* Document Details grid */}
            <div className="transcript-student-details">
              <div className="student-detail-item">
                <p><strong>Student Name:</strong> {studentResult.studentName}</p>
                <p><strong>Father's Name:</strong> {studentResult.fatherName}</p>
                <p><strong>Mother's Name:</strong> {studentResult.motherName}</p>
              </div>
              <div className="student-detail-item">
                <p><strong>Roll Number:</strong> {studentResult.rollNumber}</p>
                <p><strong>Class & Stream:</strong> {studentResult.class}</p>
                <p><strong>Academic Session:</strong> {studentResult.session}</p>
                <p><strong>Evaluation Term:</strong> {studentResult.examType}</p>
              </div>
            </div>

            {/* Marks breakdown Table */}
            <div className="table-responsive">
              <table className="marksheet-table">
                <thead>
                  <tr>
                    <th>Subject Name</th>
                    <th className="text-center">Theory (Obt)</th>
                    <th className="text-center">Practical (Obt)</th>
                    <th className="text-center">Max Marks</th>
                    <th className="text-center">Marks Obtained</th>
                    <th className="text-center">Grade</th>
                  </tr>
                </thead>
                <tbody>
                  {studentResult.marks.map((m, idx) => {
                    // Quick Grade check helper
                    const pct = (m.total / (m.maxTheory + m.maxPractical)) * 100;
                    let grade = 'D';
                    if (pct >= 90) grade = 'A1';
                    else if (pct >= 80) grade = 'A2';
                    else if (pct >= 70) grade = 'B1';
                    else if (pct >= 60) grade = 'B2';
                    else if (pct >= 50) grade = 'C1';
                    else if (pct >= 40) grade = 'C2';
                    
                    return (
                      <tr key={idx}>
                        <td><strong>{m.subject}</strong></td>
                        <td className="text-center">{m.theory} / {m.maxTheory}</td>
                        <td className="text-center">{m.practical} / {m.maxPractical}</td>
                        <td className="text-center">{m.maxTheory + m.maxPractical}</td>
                        <td className="text-center" style={{ fontWeight: 600, color: 'var(--primary-color)' }}>{m.total}</td>
                        <td className="text-center" style={{ fontWeight: 700, color: 'var(--secondary-dark)' }}>{grade}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Scorecard Summary block */}
            <div className="transcript-summary-grid">
              <div className="summary-item-box">
                <span>Grand Total Marks</span>
                <strong>{totalObtained} / {totalMax}</strong>
              </div>
              <div className="summary-item-box">
                <span>Overall Percentage</span>
                <strong>{studentResult.overallPercentage}%</strong>
              </div>
              <div className="summary-item-box">
                <span>Division Result</span>
                <strong>{studentResult.division}</strong>
              </div>
            </div>

            {/* Official signatures seal */}
            <div className="transcript-footer">
              <div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  Report generated online on: {new Date().toLocaleDateString()}<br />
                  System Hash: BSA-{studentResult.rollNumber}-VERIFIED
                </p>
              </div>
              <div className="transcript-signatures">
                <div className="signature-line"></div>
                <h4 style={{ fontSize: '1rem', color: 'var(--primary-color)' }}>Devendra Singh</h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Principal Signature</p>
              </div>
            </div>

          </div>

          {/* Action buttons */}
          <div className="transcript-actions-bar">
            <Link to="/result" className="btn btn-outline">
              <ArrowLeft size={16} /> Back to Search
            </Link>
            <button onClick={handlePrint} className="btn btn-primary">
              <Printer size={16} /> Print Report Sheet
            </button>
            <button onClick={() => alert('Secure digital download is initiated. Verified certificate copy is saving to files.')} className="btn btn-secondary">
              <Download size={16} /> Save PDF Report
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};

export default ResultDetail;
