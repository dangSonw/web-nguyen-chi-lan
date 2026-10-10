import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SubpageLayout from '../../components/SubpageLayout';
import './Flowers.css';

const flowerSlides = [
  {
    src: '/assets/photography/flower_photo.jpg',
    alt: 'Flowers photography - DSC02635 1'
  },
  {
    src: '/assets/photography/flowers_2.jpg',
    alt: 'Flowers photography - DSC02624 1'
  }
];

export default function Flowers() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + flowerSlides.length) % flowerSlides.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % flowerSlides.length);
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
      <div className="flowers-page">
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
          <div className="breadcrumb-text">/photography/flowers</div>
        </div>

        {/* Showcase Stage */}
        <div className="flowers-stage">
          {/* Slides */}
          {flowerSlides.map((slide, idx) => (
            <div
              key={slide.src}
              className={`flower-slide ${idx === currentIndex ? 'active' : ''}`}
            >
              <img src={slide.src} alt={slide.alt} className="flower-image" />
            </div>
          ))}

          {/* Left Arrow pinned inside left edge */}
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

          {/* Right Arrow pinned inside right edge */}
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

