// src/pages/Contact.jsx
import React, { useState } from 'react';
import { 
  MapPin, Phone, Mail, Clock, Send, ShieldCheck, 
  ChevronDown, ChevronUp, MessageSquare 
} from 'lucide-react';
import '../styles/pages/pages.css';

const Contact = () => {
  // Contact Form State
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  
  // FAQs Accordion State
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      q: "What is the admission procedure for the new academic session?",
      a: "Admissions begin in December each year. Candidates seeking admission to D.Pharm and B.Pharm need to submit the registration form along with academic transcripts (10+2 Science marksheets), transfer certificate (TC), and passport photographs."
    },
    {
      q: "What are the standard timing and hours of the college?",
      a: "Standard lecture and laboratory hours run from 09:00 AM to 04:00 PM. Hostel prep hours and library study hours occur from 06:00 PM to 08:30 PM daily."
    },
    {
      q: "Does the college provide transport facilities for day scholars?",
      a: "Yes, Archana Pharmacy College operates a fleet of secure college buses covering Newada Barwan, Ratti Patti, and surrounding districts in Ballia for student convenience."
    },
    {
      q: "What are the fee payment structures and frequency?",
      a: "College fees are payable semester-wise or annually. Payments can be submitted online via Net Banking, UPI, or directly at the college administrative accounts office."
    },
    {
      q: "Are hostel accommodations available for outstation students?",
      a: "Yes, we offer premium separate hostels for boys and girls, complete with Wi-Fi, reference libraries, 24/7 security, recreation rooms, and hygienic dining halls."
    }
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const cleanName = e.target.fullName.value.trim();
    if (cleanName) {
      setName(cleanName);
      setSubmitted(true);
      e.target.reset();
      // Auto clear feedback after 8 seconds
      setTimeout(() => setSubmitted(false), 8000);
    }
  };

  const toggleFaq = (index) => {
    if (openFaq === index) {
      setOpenFaq(null);
    } else {
      setOpenFaq(index);
    }
  };

  return (
    <div className="contact-portal-wrapper" style={{ paddingBottom: '80px' }}>
      
      {/* Page Header */}
      <section className="page-header contact-header">
        <div className="container">
          <h1>Contact Us</h1>
          <div className="breadcrumbs">
            <a href="/">Home</a> <span>/</span> Contact Details
          </div>
        </div>
      </section>

      {/* Main layout containing address and form */}
      <section className="section">
        <div className="container">
          
          <div className="text-center">
            <h2 className="section-title">Get in Touch</h2>
            <p className="section-subtitle">Reach out to our administrative office for admission schedules, hostel bookings, or query feedback.</p>
          </div>

          <div className="contact-layout-grid">
            
            {/* Left side: Contact Details & Map mockup */}
            <div className="contact-info-panel animate-slide-up">
              
              <div className="contact-detail-card">
                <div className="contact-icon-box">
                  <MapPin size={22} />
                </div>
                <div>
                  <h4>College Location</h4>
                  <p>Address: Newada Barwan, Ratti Patti, Ballia, Uttar Pradesh, PIN - 221716, India</p>
                </div>
              </div>

              <div className="contact-detail-card">
                <div className="contact-icon-box">
                  <Phone size={22} />
                </div>
                <div>
                  <h4>Mobile Support</h4>
                  <p>
                    <a href="tel:8839248262" style={{ display: 'block' }}>+91 8839248262 (Principal Desk)</a>
                  </p>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '6px' }}>Timing: 09:00 AM - 04:00 PM</p>
                </div>
              </div>

              <div className="contact-detail-card">
                <div className="contact-icon-box">
                  <Mail size={22} />
                </div>
                <div>
                  <h4>Official Email</h4>
                  <p><a href="mailto:archanapharmacycballia@gmail.com">archanapharmacycballia@gmail.com</a></p>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Response within 24 Hours</p>
                </div>
              </div>

              {/* Styled Map Geolocation box */}
              <div className="contact-map-mockup">
                <div className="map-overlay-card">
                  <h4>Archana Pharmacy College</h4>
                  <p>Newada Barwan, Ratti Patti, Ballia, UP</p>
                  <a 
                    href="https://maps.google.com/?q=Archana+Pharmacy+College+Newada+Barwan+Ratti+Patti+Ballia" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-secondary" 
                    style={{ fontSize: '0.78rem', padding: '6px 12px', marginTop: '12px' }}
                  >
                    Open Google Maps
                  </a>
                </div>
              </div>

            </div>

            {/* Right side: Enquiry form */}
            <div className="card contact-form-card animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <h3>Submit Administrative Enquiry</h3>
              
              {submitted ? (
                <div className="animate-fade-in text-center" style={{ padding: '30px 0' }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', justifycenter: 'center', width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'rgba(16, 185, 129, 0.1)', color: 'var(--success-color)', marginBottom: '16px', justifyContent: 'center' }}>
                    <ShieldCheck size={32} />
                  </div>
                  <h4 style={{ fontFamily: 'var(--font-serif)', color: 'var(--primary-color)', marginBottom: '8px' }}>Thank You, {name}!</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                    Your academic/administrative query has been registered. A college representative will email details or call your mobile number (+91 8839248262 desk) shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit}>
                  
                  <div className="form-group">
                    <label className="form-label" htmlFor="fullName">Sender Full Name *</label>
                    <input type="text" name="fullName" id="fullName" required className="form-control" placeholder="Enter full name" />
                  </div>

                  <div className="form-group" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                    <div>
                      <label className="form-label" htmlFor="emailAddress">Email Address</label>
                      <input type="email" name="emailAddress" id="emailAddress" className="form-control" placeholder="name@email.com" />
                    </div>
                    <div>
                      <label className="form-label" htmlFor="phoneNumber">Mobile Number *</label>
                      <input type="tel" name="phoneNumber" id="phoneNumber" required className="form-control" placeholder="10-digit phone" />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="subjectLine">Enquiry Subject *</label>
                    <input type="text" name="subjectLine" id="subjectLine" required className="form-control" placeholder="e.g. Admission inquiry / Syllabus issue" />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="queryMessage">Detailed Message / Question *</label>
                    <textarea name="queryMessage" id="queryMessage" required className="form-control" rows="5" placeholder="Write query details here..." style={{ resize: 'vertical' }}></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                    <Send size={16} style={{ marginRight: '6px' }} /> Send Message Request
                  </button>
                </form>
              )}

            </div>

          </div>

          {/* FAQs Accordion */}
          <div className="faqs-section-container">
            <div className="text-center">
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--secondary-dark)', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.88rem', letterSpacing: '1px', marginBottom: '8px' }}>
                <MessageSquare size={16} /> FAQ Center
              </div>
              <h2 className="section-title">Frequently Asked Questions</h2>
              <p className="section-subtitle">Read quick answers to standard questions about boarding, academics, and registrations.</p>
            </div>

            <div style={{ maxWidth: '850px', margin: '0 auto' }}>
              {faqs.map((faq, idx) => (
                <div key={idx} className={`faq-item ${openFaq === idx ? 'open' : ''}`}>
                  <div className="faq-question" onClick={() => toggleFaq(idx)}>
                    <span>{faq.q}</span>
                    {openFaq === idx ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </div>
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Contact;
