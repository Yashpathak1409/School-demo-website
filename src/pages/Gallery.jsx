// src/pages/Gallery.jsx
import React, { useState } from 'react';
import { X, Search, ZoomIn } from 'lucide-react';
import { galleryData } from '../data/mockData';
import '../styles/pages/pages.css';

const Gallery = () => {
  const [filter, setFilter] = useState('all');
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const filteredPhotos = filter === 'all' 
    ? galleryData 
    : galleryData.filter(item => item.category === filter);

  return (
    <div className="gallery-wrapper">
      
      {/* Page Header */}
      <section className="page-header gallery-header">
        <div className="container">
          <h1>College Gallery</h1>
          <div className="breadcrumbs">
            <a href="/">Home</a> <span>/</span> Gallery
          </div>
        </div>
      </section>

      {/* Grid and Tabs section */}
      <section className="section">
        <div className="container">
          
          <div className="text-center">
            <h2 className="section-title">Life at Archana Pharmacy College</h2>
            <p className="section-subtitle">Catch glimpses of sports achievements, modern laboratories, cultural acts, and our green college campus.</p>
          </div>

          {/* Filter Tabs */}
          <div className="gallery-tabs">
            <button 
              onClick={() => setFilter('all')}
              className={`gallery-tab-btn ${filter === 'all' ? 'active' : ''}`}
            >
              All Images
            </button>
            <button 
              onClick={() => setFilter('campus')}
              className={`gallery-tab-btn ${filter === 'campus' ? 'active' : ''}`}
            >
              Campus & Infrastructure
            </button>
            <button 
              onClick={() => setFilter('labs')}
              className={`gallery-tab-btn ${filter === 'labs' ? 'active' : ''}`}
            >
              Labs & Classrooms
            </button>
            <button 
              onClick={() => setFilter('sports')}
              className={`gallery-tab-btn ${filter === 'sports' ? 'active' : ''}`}
            >
              Sports & Athletics
            </button>
            <button 
              onClick={() => setFilter('cultural')}
              className={`gallery-tab-btn ${filter === 'cultural' ? 'active' : ''}`}
            >
              Cultural & Festivals
            </button>
          </div>

          {/* Gallery Grid */}
          <div className="gallery-grid animate-fade-in">
            {filteredPhotos.map((photo) => (
              <div 
                key={photo.id} 
                className="gallery-item"
                onClick={() => setSelectedPhoto(photo)}
              >
                <img src={photo.image} alt={photo.title} loading="lazy" />
                <div className="gallery-item-overlay">
                  <div className="gallery-item-info">
                    <span>{photo.category}</span>
                    <h4>{photo.title}</h4>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.8rem', color: 'var(--secondary-color)', marginTop: '8px' }}>
                      <ZoomIn size={14} /> Click to zoom
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredPhotos.length === 0 && (
            <div style={{ textAlign: 'center', padding: '40px', color: 'var(--text-muted)' }}>
              No photos found under this category.
            </div>
          )}

        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div className="lightbox-overlay" onClick={() => setSelectedPhoto(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setSelectedPhoto(null)} aria-label="Close photo">
              <X size={32} />
            </button>
            <img src={selectedPhoto.image} alt={selectedPhoto.title} className="lightbox-image" />
            <div className="lightbox-caption">
              <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--secondary-color)', fontWeight: 600, display: 'block', marginBottom: '4px' }}>
                {selectedPhoto.category}
              </span>
              <strong>{selectedPhoto.title}</strong>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Gallery;
