import React from 'react';
import { Link } from 'react-router-dom';
import SubpageLayout from '../components/SubpageLayout';
import './Photography.css';

export default function Photography() {
  return (
    <SubpageLayout>
      <div className="photography-page">
        {/* Breadcrumb */}
        <div className="breadcrumb">/photography</div>

        {/* Page Title */}
        <h1 className="page-title">
          <span className="title-initial">P</span>
          <span className="title-rest">hotography.</span>
        </h1>

        {/* Intro Paragraph */}
        <p className="intro-text">
          I took my first ever “semi-artistic” photograph on a film camera, which taught me how to respect every ray of light, master my exposure triangle and approach every frame with intention. Whether immersed in the candid energy of street photography or intimate storytelling of portraiture, my love for the medium always comes down to capturing fleeting moments and turning them into lasting memories.
        </p>

        {/* 3-Column Photography Cards Grid */}
        <div className="photography-grid">
          {/* Card 1: Street Photography */}
          <Link
            to="/photography/street-photography"
            className="photo-card card-street"
            title="View Street Photography"
          >
            <div className="card-title">/street photography</div>
            <div className="card-img-wrap">
              <img
                src="/assets/photography/street_photo.jpg"
                alt="Street photography of schoolchildren"
              />
            </div>
          </Link>

          {/* Card 2: Flowers */}
          <Link
            to="/photography/flowers"
            className="photo-card card-flowers"
            title="View Flowers"
          >
            <div className="card-title">/flowers</div>
            <div className="card-img-wrap">
              <img
                src="/assets/photography/flower_photo.jpg"
                alt="Flower bouquet photograph"
              />
            </div>
          </Link>

          {/* Card 3: Portrait */}
          <Link
            to="/photography/portrait"
            className="photo-card card-portrait"
            title="View Portrait Photography"
          >
            <div className="card-title">/portrait</div>
            <div className="card-img-wrap">
              <img
                src="/assets/photography/portrait_cover.jpg"
                alt="Portrait photography concept"
              />
            </div>
          </Link>
        </div>
      </div>
    </SubpageLayout>
  );
}

