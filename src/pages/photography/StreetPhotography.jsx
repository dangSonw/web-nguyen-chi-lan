import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SubpageLayout from '../../components/SubpageLayout';
import './StreetPhotography.css';

const streetSlides = [
  { src: '/assets/photography/street_photo.jpg', alt: 'Street photography - DSC06084 1' },
  { src: '/assets/photography/street_2.jpg', alt: 'Street photography - DSC06043 1' },
  { src: '/assets/photography/street_3.jpg', alt: 'Street photography - DSC06048 1' },
  { src: '/assets/photography/street_4.jpg', alt: 'Street photography - DSC06102 1' }
];

export default function StreetPhotography() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + streetSlides.length) % streetSlides.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % streetSlides.length);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <SubpageLayout>
      <div className="street-page">
        {/* Header: Back Arrow + Breadcrumb */}
        <div className="header-breadcrumb">
          <Link to="/photography" className="back-btn" title="Back to /photography">
            <svg className="back-arrow-icon" viewBox="0 0 28 13" fill="none">
              <path
                d="M10.8457 4.54004H27.291V7.98242H10.8457V12.5225L0 6.26172L10.8457 0V4.54004Z"
                fill="#9E9E9E"
              />
            </svg>
          </Link>
          <div className="breadcrumb-text">/photography/streetphotography</div>
        </div>

        {/* Full-Width Image Showcase with Inside Edge Arrows */}
        <div className="showcase-container">
          {/* Left Arrow Button (Frame 4) */}
          <button
            className="nav-edge-arrow arrow-left"
            onClick={prevSlide}
            title="Previous photo"
            aria-label="Previous photo"
          >
            <svg
              className="frame-arrow-svg"
              viewBox="0 0 193 952"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="arrow-shape"
                d="M67.6624 476L110.919 451.026L110.919 500.974L67.6624 476Z"
                fill="white"
                fillOpacity="0.9"
              />
            </svg>
          </button>

          {/* Carousel Images */}
          {streetSlides.map((slide, idx) => (
            <div
              key={slide.src}
              className={`showcase-slide ${idx === currentIndex ? 'active' : ''}`}
            >
              <img src={slide.src} alt={slide.alt} className="showcase-image" />
            </div>
          ))}

          {/* Right Arrow Button (Frame 3) */}
          <button
            className="nav-edge-arrow arrow-right"
            onClick={nextSlide}
            title="Next photo"
            aria-label="Next photo"
          >
            <svg
              className="frame-arrow-svg"
              viewBox="0 0 193 952"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="arrow-shape"
                d="M125.338 476L82.0811 500.974L82.0811 451.026L125.338 476Z"
                fill="white"
                fillOpacity="0.9"
              />
            </svg>
          </button>
        </div>
      </div>
    </SubpageLayout>
  );
}

