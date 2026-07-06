// src/pages/Blog.jsx
import React, { useState } from 'react';
import { X, Calendar, User, ChevronRight, BookOpen } from 'lucide-react';
import { blogData } from '../data/mockData';
import '../styles/pages/pages.css';

const Blog = () => {
  const [activeArticle, setActiveArticle] = useState(null);

  return (
    <div className="blog-portal-wrapper">
      
      {/* Page Header */}
      <section className="page-header blog-header">
        <div className="container">
          <h1>School Blog & News</h1>
          <div className="breadcrumbs">
            <a href="/">Home</a> <span>/</span> News & Blogs
          </div>
        </div>
      </section>

      {/* Grid section */}
      <section className="section">
        <div className="container">
          
          <div className="text-center">
            <h2 className="section-title">Latest Campus Highlights</h2>
            <p className="section-subtitle">Read about recently conducted workshops, sporting events, science showcases, and academic guidelines.</p>
          </div>

          <div className="blog-grid animate-fade-in">
            {blogData.map((blog) => (
              <div key={blog.id} className="card blog-card">
                <div className="blog-image-wrapper">
                  <img src={blog.image} alt={blog.title} loading="lazy" />
                  <span className="blog-meta-badge">{blog.category}</span>
                </div>
                <div className="blog-card-content">
                  <div className="blog-date-author">
                    <span style={{ marginRight: '15px', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                      <Calendar size={13} /> {blog.date}
                    </span>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                      <User size={13} /> {blog.author}
                    </span>
                  </div>
                  <h3>{blog.title}</h3>
                  <p>{blog.excerpt}</p>
                  
                  <button 
                    onClick={() => setActiveArticle(blog)}
                    className="btn btn-outline" 
                    style={{ marginTop: 'auto', alignSelf: 'flex-start' }}
                  >
                    Read Article <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Single Blog Article Reader Modal */}
      {activeArticle && (
        <div className="blog-modal-overlay" onClick={() => setActiveArticle(null)}>
          <div className="blog-modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={activeArticle.image} alt={activeArticle.title} className="blog-modal-image" />
            
            <div className="blog-modal-inner">
              <button className="blog-modal-close-btn" onClick={() => setActiveArticle(null)} aria-label="Close reader">
                <X size={20} />
              </button>

              <div className="blog-modal-header">
                <span className="blog-meta-badge" style={{ position: 'static' }}>{activeArticle.category}</span>
                <h2>{activeArticle.title}</h2>
                <div className="blog-date-author" style={{ fontSize: '0.88rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '15px', marginBottom: '20px' }}>
                  <span style={{ marginRight: '20px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    <Calendar size={14} /> Issued on: {activeArticle.date}
                  </span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    <User size={14} /> Published by: {activeArticle.author}
                  </span>
                </div>
              </div>

              <div className="blog-modal-body">
                <p style={{ fontWeight: 500, fontSize: '1.05rem', color: 'var(--primary-color)', marginBottom: '20px', lineHeight: 1.6 }}>
                  {activeArticle.excerpt}
                </p>
                <p>
                  {activeArticle.content}
                </p>
              </div>

              <div style={{ marginTop: '30px', borderTop: '1px solid var(--border-color)', paddingTop: '20px', textAlign: 'right' }}>
                <button onClick={() => setActiveArticle(null)} className="btn btn-primary">
                  Close Article
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Blog;
