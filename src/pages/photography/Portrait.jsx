import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import SubpageLayout from '../../components/SubpageLayout';
import './Portrait.css';

const shoot1Photos = [
  { src: '/assets/photography/portrait1_1.jpg', alt: 'Portrait photoshoot 1 - IMG_2954 1' },
  { src: '/assets/photography/portrait1_2.jpg', alt: 'Portrait photoshoot 1 - IMG_2953 1' }
];

const shoot2Photos = [
  { src: '/assets/photography/portrait2_1.jpg', alt: 'Portrait photoshoot 2 - 1 1' },
  { src: '/assets/photography/portrait2_2.jpg', alt: 'Portrait photoshoot 2 - 2 1' },
  { src: '/assets/photography/portrait2_3.jpg', alt: 'Portrait photoshoot 2 - 3 2' },
  { src: '/assets/photography/portrait2_4.jpg', alt: 'Portrait photoshoot 2 - 4 1' },
  { src: '/assets/photography/portrait2_5.jpg', alt: 'Portrait photoshoot 2 - 5 1' },
  { src: '/assets/photography/portrait2_6.jpg', alt: 'Portrait photoshoot 2 - 6 1' },
  { src: '/assets/photography/portrait2_7.jpg', alt: 'Portrait photoshoot 2 - 8 1' },
  { src: '/assets/photography/portrait2_8.jpg', alt: 'Portrait photoshoot 2 - 7 1' }
];

export default function Portrait() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialShoot = searchParams.get('shoot') === '2' ? 2 : 1;
  const [activeShoot, setActiveShoot] = useState(initialShoot);
  const [currentIndex, setCurrentIndex] = useState(0);

  const photos = activeShoot === 1 ? shoot1Photos : shoot2Photos;

  const handleTabChange = (shootNum) => {
    setActiveShoot(shootNum);
    setCurrentIndex(0);
    setSearchParams(shootNum === 2 ? { shoot: '2' } : {});
  };

  const prevPhoto = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const nextPhoto = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextPhoto();
      if (e.key === 'ArrowLeft') prevPhoto();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [photos.length]);

  return (
    <SubpageLayout>
      <div className="portrait-page">
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
          <div className="breadcrumb-text">/photography/portrait</div>
        </div>

        {/* Showcase Stage */}
        <div className="showcase-stage">
          {/* Tabs: photoshoot 1 & photoshoot 2 */}
          <div className="photoshoot-tabs">
            <button
              className={`tab-btn ${activeShoot === 1 ? 'active' : ''}`}
              onClick={() => handleTabChange(1)}
            >
              photoshoot 1
            </button>
            <button
              className={`tab-btn ${activeShoot === 2 ? 'active' : ''}`}
              onClick={() => handleTabChange(2)}
            >
              photoshoot 2
            </button>
          </div>

          {/* Left Arrow (Frame 4 - Loops infinitely) */}
          <button
            className="nav-arrow-zone nav-arrow-left"
            onClick={prevPhoto}
            title="Previous photo"
            aria-label="Previous Photo"
          >
            <svg
              className="frame-arrow-svg"
              viewBox="0 0 193 952"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M67.6624 476L110.919 451.026L110.919 500.974L67.6624 476Z"
                fill="#000000"
              />
            </svg>
          </button>

          {/* Center Image Container */}
          <div className="stage-image-container">
            {photos.map((photo, idx) => (
              <img
                key={photo.src}
                src={photo.src}
                alt={photo.alt}
                className={`portrait-photo ${idx === currentIndex ? 'active' : ''}`}
              />
            ))}
          </div>

          {/* Right Arrow (Frame 3 - Loops infinitely) */}
          <button
            className="nav-arrow-zone nav-arrow-right"
            onClick={nextPhoto}
            title="Next photo"
            aria-label="Next Photo"
          >
            <svg
              className="frame-arrow-svg"
              viewBox="0 0 193 952"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M125.338 476L82.0811 500.974L82.0811 451.026L125.338 476Z"
                fill="#000000"
              />
            </svg>
          </button>
        </div>
      </div>
    </SubpageLayout>
  );
}

