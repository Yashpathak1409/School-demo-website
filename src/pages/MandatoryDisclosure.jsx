// src/pages/MandatoryDisclosure.jsx
import React from 'react';
import { FileText, Download, ShieldCheck, ExternalLink, HelpCircle } from 'lucide-react';
import '../styles/pages/pages.css';

const MandatoryDisclosure = () => {
  const documents = [
    { id: 1, name: 'Affiliation/Upgradation Letter', category: 'General Information', docRef: 'BSA/CBSE/AFF-2025', status: 'VERIFIED' },
    { id: 2, name: 'Trust/Society Registration Certificate', category: 'General Information', docRef: 'REG/MATHURA/9845', status: 'VERIFIED' },
    { id: 3, name: 'No Objection Certificate (NOC) from State Govt.', category: 'General Information', docRef: 'NOC/UP/EDU-784', status: 'VERIFIED' },
    { id: 4, name: 'Building Safety Certificate as per NBC', category: 'Safety Compliance', docRef: 'BUILD/PWD/MANT-26', status: 'VERIFIED' },
    { id: 5, name: 'Fire Safety Certificate issued by Fire Dept.', category: 'Safety Compliance', docRef: 'FIRE/FS/MATHURA-99', status: 'VERIFIED' },
    { id: 6, name: 'Water Health & Sanitation Certificate', category: 'Safety Compliance', docRef: 'SAN/CMO/MATHURA-2026', status: 'VERIFIED' },
    { id: 7, name: 'Approved Annual Fee Structure (Classwise)', category: 'School Details', docRef: 'BSA/FEE/2026-27', status: 'VERIFIED' },
    { id: 8, name: 'Annual Academic Calendar & Holiday List', category: 'School Details', docRef: 'BSA/CAL/2026-27', status: 'VERIFIED' },
    { id: 9, name: 'School Managing Committee (SMC) Members List', category: 'School Details', docRef: 'BSA/SMC/LIST-26', status: 'VERIFIED' }
  ];

  const handleDownload = (docName) => {
    alert(`Initiating mock secure file download for:\n"${docName}"\nFile is signed with digital hash: BSA-VERIFIED-PDF.pdf`);
  };

  return (
    <div className="disclosure-wrapper">
      
      {/* Page Header */}
      <section className="page-header disclosure-header">
        <div className="container">
          <h1>Mandatory Disclosures</h1>
          <div className="breadcrumbs">
            <a href="/">Home</a> <span>/</span> Mandatory Disclosure
          </div>
        </div>
      </section>

      {/* Main Table section */}
      <section className="section">
        <div className="container">
          
          <div className="text-center">
            <h2 className="section-title">CBSE/State Board Disclosures</h2>
            <p className="section-subtitle">Official documents, safety registrations, fee plans, and management guidelines displayed in compliance with educational bylaws.</p>
          </div>

          <div className="card disclosure-card animate-slide-up">
            
            {/* Warning alert notice */}
            <div className="disclosure-notice-alert">
              <div className="disclosure-notice-title">
                <ShieldCheck size={18} style={{ color: 'var(--secondary-dark)' }} /> CBSE Bylaws Compliance Statement
              </div>
              <p>
                In compliance with boarding guidelines, Brij Sthali Academy Senior Secondary School maintains transparent records of society registration, land safety certificates, sanitation reports, and annual fee charts. General public can view or verify the details here.
              </p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px', color: 'var(--primary-color)' }}>
              <FileText size={22} style={{ color: 'var(--secondary-dark)' }} />
              <h3 style={{ margin: 0, fontSize: '1.25rem' }}>Brij Sthali Academy Certificates</h3>
            </div>

            <div className="table-responsive">
              <table>
                <thead>
                  <tr>
                    <th>S.No.</th>
                    <th>Document Name</th>
                    <th>Category Layer</th>
                    <th>Office Document Reference</th>
                    <th className="text-center">Verified Status</th>
                    <th className="text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {documents.map((doc, idx) => (
                    <tr key={doc.id}>
                      <td>{idx + 1}</td>
                      <td><strong>{doc.name}</strong></td>
                      <td><span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{doc.category}</span></td>
                      <td><code style={{ fontSize: '0.85rem', backgroundColor: '#f1f5f9', padding: '2px 6px', borderRadius: '4px' }}>{doc.docRef}</code></td>
                      <td className="text-center">
                        <span style={{ fontSize: '0.78rem', color: '#065f46', backgroundColor: '#d1fae5', padding: '4px 10px', borderRadius: '50px', fontWeight: 700 }}>
                          {doc.status}
                        </span>
                      </td>
                      <td className="text-center">
                        <button 
                          onClick={() => handleDownload(doc.name)}
                          className="document-download-btn"
                          style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}
                          aria-label={`Download ${doc.name}`}
                        >
                          <Download size={16} /> Download
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div style={{ marginTop: '30px', borderTop: '1px solid var(--border-color)', paddingTop: '20px', fontSize: '0.85rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <HelpCircle size={18} style={{ color: 'var(--primary-color)', flexShrink: 0 }} />
              <p>
                For older academic ledgers or specific society registration audits, please write an email to the school administrative desk at <strong>brijsthaliacademy2@gmail.com</strong>.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default MandatoryDisclosure;
