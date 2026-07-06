// src/pages/Hostel.jsx
import React, { useState } from 'react';
import { ShieldCheck, Coffee, Sun, Home, ShieldAlert, Award, FileText, Send } from 'lucide-react';
import '../styles/pages/pages.css';

const Hostel = () => {
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [inquiryName, setInquiryName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const cleanName = e.target.parentName.value.trim();
    if (cleanName) {
      setInquiryName(cleanName);
      setInquirySubmitted(true);
      e.target.reset();
      setTimeout(() => setInquirySubmitted(false), 8000);
    }
  };

  return (
    <div className="hostel-portal-wrapper">
      
      {/* Page Header */}
      <section className="page-header hostel-header">
        <div className="container">
          <h1>Hostel & Boarding Facility</h1>
          <div className="breadcrumbs">
            <a href="/">Home</a> <span>/</span> Hostel (Hostal)
          </div>
        </div>
      </section>

      {/* Intro & Grid section */}
      <section className="section">
        <div className="container">
          
          <div className="hostel-grid">
            
            {/* Left side: details */}
            <div className="animate-slide-up">
              <span className="text-gold" style={{ fontWeight: 700, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Home Away From Home</span>
              <h2 className="section-title" style={{ display: 'block', textAlign: 'left', margin: '10px 0 20px' }}>Our Residential Campus</h2>
              <p style={{ marginBottom: '16px' }}>
                Brij Sthali Academy offers comprehensive residential facilities for boys and girls (separate wings) seeking a disciplined and focused academic life. Situated in the peaceful district of Tentigaon, the hostel protects students from distractions, fostering regular study habits.
              </p>
              <p style={{ marginBottom: '24px' }}>
                Under the direct supervision of resident wardens and academic coaches, our boarders get structured evening prep classes, standard meals, and physical conditioning routines daily.
              </p>

              <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--primary-color)', fontSize: '1.3rem', marginBottom: '15px' }}>
                Hostel Facilities Include:
              </h3>
              <ul className="hostel-facilities-list">
                <li><ShieldCheck size={18} /> Spacious ventilated rooms</li>
                <li><ShieldCheck size={18} /> Hot & cold running water</li>
                <li><ShieldCheck size={18} /> CCTV security & 24/7 security guard</li>
                <li><ShieldCheck size={18} /> 24/7 power backup system</li>
                <li><ShieldCheck size={18} /> Resident doctor & health clinic</li>
                <li><ShieldCheck size={18} /> Evening supervised prep classes</li>
                <li><ShieldCheck size={18} /> Pure vegetarian hygienic dining</li>
                <li><ShieldCheck size={18} /> Indoor and outdoor sports coaching</li>
              </ul>
            </div>

            {/* Right side: inquiry form */}
            <div className="card hostel-form-card" style={{ borderTop: '4px solid var(--secondary-color)' }}>
              <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--primary-color)', fontSize: '1.25rem', marginBottom: '20px' }}>
                Residential Admission Inquiry
              </h3>
              
              {inquirySubmitted ? (
                <div className="animate-fade-in text-center" style={{ padding: '30px 0' }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', justifycenter: 'center', width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'rgba(16, 185, 129, 0.1)', color: 'var(--success-color)', marginBottom: '16px', justifyContent: 'center' }}>
                    <ShieldCheck size={28} />
                  </div>
                  <h4 style={{ fontFamily: 'var(--font-serif)', color: 'var(--primary-color)', marginBottom: '8px' }}>Thank you, Mr./Mrs. {inquiryName}!</h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                    Your inquiry for boarding admission has been registered. The Chief Warden office will contact you on your phone with fee charts and room vacancy details.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="parentName">Parent / Guardian Name *</label>
                    <input type="text" name="parentName" id="parentName" required className="form-control" placeholder="Enter name" />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="studentName">Student Name *</label>
                    <input type="text" name="studentName" id="studentName" required className="form-control" placeholder="Enter student's name" />
                  </div>
                  <div className="form-group" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                    <div>
                      <label className="form-label" htmlFor="studentClass">Seeking Class *</label>
                      <input type="text" name="studentClass" id="studentClass" required className="form-control" placeholder="e.g. Class IX" />
                    </div>
                    <div>
                      <label className="form-label" htmlFor="phoneNo">Contact Mobile *</label>
                      <input type="tel" name="phoneNo" id="phoneNo" required className="form-control" placeholder="Phone number" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="msgDetails">Specific Request / Medical History</label>
                    <textarea name="msgDetails" id="msgDetails" className="form-control" rows="3" placeholder="Specify requirements..." style={{ resize: 'none' }}></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                    <Send size={16} style={{ marginRight: '6px' }} /> Submit Boarding Query
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Dining Mess Menu section */}
      <section className="section section-bg-light">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">Weekly Dining Schedule</h2>
            <p className="section-subtitle">We serve nutritious, pure-vegetarian meals prepared in our steam-based modern kitchen.</p>
          </div>

          <div className="card mess-menu-card animate-slide-up">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px', color: 'var(--primary-color)' }}>
              <Coffee size={22} style={{ color: 'var(--secondary-dark)' }} />
              <h3 style={{ margin: 0, fontSize: '1.2rem' }}>Weekly Mess Menu Calendar</h3>
            </div>

            <div className="table-responsive">
              <table className="mess-table">
                <thead>
                  <tr>
                    <th>Day Name</th>
                    <th>Breakfast (07:30 AM)</th>
                    <th>Lunch (01:30 PM)</th>
                    <th>Evening Milk & Snacks (05:00 PM)</th>
                    <th>Dinner (08:00 PM)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Monday</strong></td>
                    <td>Aloo Paratha, Curd, Butter, Tea</td>
                    <td>Dal Tadka, Rice, Seasonal Veg, Chapati, Salad</td>
                    <td>Milk / Tea with Biscuits & Samosa</td>
                    <td>Paneer Masala, Dal, Chapati, Kheer</td>
                  </tr>
                  <tr>
                    <td><strong>Wednesday</strong></td>
                    <td>Poha with Sev, Milk, Sprouted Grains</td>
                    <td>Kadhi Pakoda, Jeera Rice, Chapati, Green Salad</td>
                    <td>Milk / Tea with Veg Cutlets</td>
                    <td>Mix Veg, Dal Fry, Chapati, Rice, Custard</td>
                  </tr>
                  <tr>
                    <td><strong>Friday</strong></td>
                    <td>Idli Sambhar, Coconut Chutney, Tea</td>
                    <td>Rajma Masala, Steamed Rice, Raita, Chapati</td>
                    <td>Milk / Tea with Roasted Makhana</td>
                    <td>Malai Kofta, Dal, Chapati, Rice, Gulab Jamun</td>
                  </tr>
                  <tr>
                    <td><strong>Sunday</strong></td>
                    <td>Special Veg Sandwich, Milk, Banana</td>
                    <td>Chole Bhature, Pulao, Curd, Onion Salad</td>
                    <td>Tea / Milk with Popcorn</td>
                    <td>Shahi Paneer, Dal Makhani, Butter Naan, Rice</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div style={{ marginTop: '20px', display: 'flex', gap: '10px', alignItems: 'center', backgroundColor: 'rgba(245, 158, 11, 0.08)', padding: '15px', borderRadius: '6px', borderLeft: '4px solid var(--warning-color)' }}>
              <ShieldAlert size={20} style={{ color: 'var(--warning-color)', flexShrink: 0 }} />
              <p style={{ fontSize: '0.85rem', color: 'var(--primary-color)' }}>
                <strong>Food Quality Check:</strong> The mess menu changes dynamically based on seasons. The school doctor inspects food hygiene, vegetable freshness, and milk purity indexes twice weekly.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Hostel;
