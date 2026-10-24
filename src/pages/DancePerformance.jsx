import React from 'react';
import SubpageLayout from '../components/SubpageLayout';
import VideoBox from '../components/VideoBox';
import './DancePerformance.css';

export default function DancePerformance() {
  return (
    <SubpageLayout>
      <div className="dance-page">
        {/* Breadcrumb */}
        <div className="breadcrumb">/dance&amp;performance</div>

        {/* Page Title */}
        <h1 className="page-title">
          <span className="title-word"><span className="title-script">D</span><span className="title-serif">ance</span></span>
          <span className="title-script-amp">&amp;</span>
          <span className="title-word"><span className="title-script">P</span><span className="title-serif">erformance.</span></span>
        </h1>

        {/* Intro Paragraph */}
        <p className="intro-text">
          Dance, for me, is the physical translation of thought and rhythm. Whether exploring sharp contemporary movements or dynamic cheer choreography, I use it as a visceral language to tell stories, break boundaries, and express what words cannot.
        </p>

        {/* ====================================================================
             SECTION 1: Cheer Ams
             ==================================================================== */}
        <section className="dance-section" id="cheer-ams">
          <h2 className="section-title">Cheer Ams</h2>
          <p className="section-desc">
            As a proud member of Hanoi-Amsterdam’s cheerleading squad, dance became my ultimate outlet for teamwork and school spirit, teaching me resilience and how to command a crowd through movement
          </p>

          {/* Cheer Photos Row */}
          <div className="row-cheer-photos">
            <img
              src="/assets/dance/cheer_photo_1.jpg"
              alt="Ams Got Talent Performance photo 1"
              className="cheer-photo-1"
            />
            <img
              src="/assets/dance/cheer_photo_2.jpg"
              alt="Ams Got Talent Performance photo 2"
              className="cheer-photo-2"
            />
          </div>
          <div className="caption-text">Ams Got Talent Performance</div>

          {/* Cheer Video (Full width) */}
          <div className="cheer-video-wrapper">
            <VideoBox
              youtubeId="YYrgFfKZVB0"
              posterSrc="/assets/dance/video_cheer_up.jpg"
              alt="Cheer up Music Video preview"
              caption="Cheer up Music Video"
              iconSize="large"
            />
          </div>
        </section>

        {/* ====================================================================
             SECTION 2: Ams Ambassador
             ==================================================================== */}
        <section className="dance-section" id="ams-ambassador">
          <h2 className="section-title">Ams Ambassador</h2>
          <p className="section-desc">
            Earning my spot as the runner-up in Ams Ambassador 2025 was a rewarding journey, celebrating the dynamic intellect, versatility and spirit of the student community.
          </p>

          {/* Ams Ambassador Photos Row (3 across) */}
          <div className="row-ambassador-photos">
            <img
              src="/assets/dance/ambassador_photo_1.jpg"
              alt="Ams Ambassador traditional costume"
              className="photo-ambassador-1"
            />
            <img
              src="/assets/dance/ambassador_photo_2.jpg"
              alt="Ams Ambassador award ceremony"
              className="photo-ambassador-2"
            />
            <img
              src="/assets/dance/ambassador_photo_3.jpg"
              alt="Ams Ambassador evening gown walk"
              className="photo-ambassador-3"
            />
          </div>
        </section>
      </div>
    </SubpageLayout>
  );
}

