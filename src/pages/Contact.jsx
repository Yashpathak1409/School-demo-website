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
      a: "Admissions begin in December each year. Parents need to submit the registration form along with the candidate's transfer certificate (TC), birth certificate, and recent photographs. A minor screening test is conducted for admission into Class VI and above."
    },
    {
      q: "What are the standard timing and hours of the academy?",
      a: "For Primary Wing (Nursery to V), the timing is 08:30 AM to 01:30 PM. For Secondary and Senior Secondary wings, the school runs from 08:00 AM to 02:00 PM. Hostal prep hours occur from 06:00 PM to 08:00 PM daily."
    },
    {
      q: "Does the school provide transport facilities for day scholars?",
      a: "Yes, Brij Sthali Academy operates a fleet of secure school buses covering Mant, Tentigaon, and nearby villages in Mathura. All buses are staffed with experienced drivers and conductors."
    },
    {
      q: "What are the fee payment structures and frequency?",
      a: "School fees can be paid quarterly (in 4 cycles: April, July, October, January) or monthly. Payments can be submitted via Net Banking, UPI, or directly at the school accounts window."
    },
    {
      q: "Are hostel accommodations available for outstation pupils?",
      a: "Yes, we offer premium residential wings for boys and girls separately, complete with recreation rooms, 24/7 security, evening tutorials, and standard pure vegetarian dining halls."
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
                  <h4>School Location</h4>
                  <p>Vill + Post - Tentigaon, Mant Sub-district, Mathura District, Uttar Pradesh, PIN - 281205, India</p>
                </div>
              </div>

              <div className="contact-detail-card">
                <div className="contact-icon-box">
                  <Phone size={22} />
                </div>
                <div>
                  <h4>Mobile Support</h4>
                  <p>
                    <a href="tel:7300709977" style={{ display: 'block' }}>+91 7300709977 (Direct)</a>
                    <a href="tel:8077477382" style={{ display: 'block' }}>+91 8077477382 (Office)</a>
                    <a href="tel:7895156095" style={{ display: 'block' }}>+91 7895156095 (Reception)</a>
                  </p>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '6px' }}>Timing: 08:00 AM - 04:00 PM</p>
                </div>
              </div>

              <div className="contact-detail-card">
                <div className="contact-icon-box">
                  <Mail size={22} />
                </div>
                <div>
                  <h4>Official Email</h4>
                  <p><a href="mailto:brijsthaliacademy2@gmail.com">brijsthaliacademy2@gmail.com</a></p>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Response within 24 Hours</p>
                </div>
              </div>

              {/* Styled Map Geolocation box */}
              <div className="contact-map-mockup">
                <div className="map-overlay-card">
                  <h4>Brij Sthali Academy</h4>
                  <p>Vill+Post- Tentigaon, Mant, Mathura</p>
                  <a 
                    href="https://maps.google.com/?q=Brij+Sthali+Academy+Tentigaon+Mathura" 
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
                    Your academic/administrative query has been registered. A school coordinator will email details or call your mobile number (+91 7895156095 desk) shortly.
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
