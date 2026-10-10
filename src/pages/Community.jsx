import React from 'react';
import SubpageLayout from '../components/SubpageLayout';
import './Community.css';

export default function Community() {
  return (
    <SubpageLayout>
      <div className="community-page">
        {/* Breadcrumb */}
        <div className="breadcrumb">/community</div>

        {/* Page Title */}
        <h1 className="page-title">
          <span className="title-initial">C</span>
          <span className="title-rest">ommunity.</span>
        </h1>

        {/* Intro Paragraph */}
        <p className="intro-text">
          Community involvement is where my empathy meets action. Whether advocating for gender equity, expanding educational access, or preserving cultural heritage, I am driven to build initiatives that create tangible, lasting social change.
        </p>

        {/* ====================================================================
             PROJECT 1: Equimed
             ==================================================================== */}
        <section className="project-section" id="equimed">
          <h2 className="project-title">Equimed</h2>
          <p className="project-desc">
            Co-created a digital platform addressing gender inequality in media by crowdsourcing submissions, moderating narratives, and transforming biased media into gender-reversed posts to educate and raise awareness. Received highest recognition in High School Social Impact Challenge
          </p>

          {/* Row 1: Award Ceremony, Pitching Photo, Quote */}
          <div className="equimed-row-1">
            <img
              src="/assets/community/equimed_award.jpg"
              alt="Equimed High School Social Impact Challenge Award"
              className="project-img photo-award"
            />
            <img
              src="/assets/community/equimed_pitch.jpg"
              alt="Equimed Pitching at HSSIC"
              className="project-img photo-pitch"
            />
            <p className="accent-quote quote-top">
              Our initiatives received the highest recognition at the “High School Social Impact Challenge”, earning great reception amongst students and judges, alike
            </p>
          </div>

          {/* Row 2: Quote on left, 2x2 Slides on right */}
          <div className="equimed-row-2">
            <p className="accent-quote quote-left">
              I created a social media platform where young girls could speak up about gender inequality in the media. Through open discussions and mini-essay, I explored media bias by flipping the genders in real headlines, making everyday double standards easier to see and question.
            </p>
            <div className="equimed-slides-grid">
              <img
                src="/assets/community/equimed_slide_1.jpg"
                alt="Proposal pitching Equimed"
                className="project-img equimed-slide"
              />
              <img
                src="/assets/community/equimed_slide_2.jpg"
                alt="II. Identified Social Issue"
                className="project-img equimed-slide"
              />
              <img
                src="/assets/community/equimed_slide_3.jpg"
                alt="Anonymous gender bias reporting workflow"
                className="project-img equimed-slide"
              />
              <img
                src="/assets/community/equimed_slide_4.jpg"
                alt="III. Proposed Solution: Equimed"
                className="project-img equimed-slide"
              />
            </div>
          </div>
        </section>

        {/* ====================================================================
             PROJECT 2: Libreria Project
             ==================================================================== */}
        <section className="project-section" id="libreria">
          <h2 className="project-title">Libreria Project</h2>
          <p className="project-desc">
            Served as Vice Head of Content, leading book drives across primary schools, raising funds to build a school in Lạng Sơn, and teaching vital life skills to children.
          </p>
          <div className="libreria-photos-row">
            <img
              src="/assets/community/libreria_1.jpg"
              alt="Libreria school activity cheering children"
              className="project-img"
            />
            <img
              src="/assets/community/libreria_2.jpg"
              alt="Libreria workshop teaching vital skills"
              className="project-img"
            />
            <img
              src="/assets/community/libreria_3.jpg"
              alt="Libreria school project group photo"
              className="project-img"
            />
          </div>
        </section>

        {/* ====================================================================
             PROJECT 3: The Wildflower Project
             ==================================================================== */}
        <section className="project-section" id="wildflower">
          <h2 className="project-title">The Wildflower Project</h2>
          <p className="project-desc">
            Handcrafted and sold balloon flowers to fund and deliver comprehensive sex education workshops and essential supplies to children in Sơn La.
          </p>
          <div className="wildflower-row-1">
            <img
              src="/assets/community/wildflower_1.jpg"
              alt="Delivering balloon flowers to children"
              className="project-img"
            />
            <img
              src="/assets/community/wildflower_2.jpg"
              alt="Delivering workshops in Son La"
              className="project-img"
            />
          </div>
          <img
            src="/assets/community/wildflower_3.jpg"
            alt="Dong Am Vung Cao group photo with children and local soldiers"
            className="project-img wildflower-wide-photo"
          />
        </section>

        {/* ====================================================================
             PROJECT 4: Y4C (Youth for Community)
             ==================================================================== */}
        <section className="project-section" id="y4c">
          <h2 className="project-title">Y4C (Youth for Community)</h2>
          <p className="project-desc">
            Participated in community outreach and charitable volunteer missions in Lào Cai to help underprivileged children and local families gain access to STEM education.
          </p>
          <img
            src="/assets/community/y4c_1.jpg"
            alt="Y4C volunteers guiding STEM activities"
            className="project-img y4c-wide-photo"
          />
          <div className="y4c-row-2">
            <img
              src="/assets/community/y4c_2.jpg"
              alt="Y4C volunteers and children outdoors"
              className="project-img"
            />
            <img
              src="/assets/community/y4c_3.jpg"
              alt="Y4C group ceremony under canopy"
              className="project-img"
            />
          </div>
        </section>

        {/* ====================================================================
             PROJECT 5: Tu Su
             ==================================================================== */}
        <section className="project-section" id="tusu">
          <h2 className="project-title">Tu Su</h2>
          <p className="project-desc">
            Developed a creative initiative to gamify traditional Vietnamese folk games, preserving cultural heritage and engaging younger generations in interactive play.
          </p>
          <div className="tusu-photos-row">
            <img
              src="/assets/community/tusu_1.jpg"
              alt="Tu Su folk game boxes display"
              className="project-img"
            />
            <img
              src="/assets/community/tusu_2.jpg"
              alt="Tu Su traditional card deck"
              className="project-img"
            />
          </div>
        </section>
      </div>
    </SubpageLayout>
  );
}

