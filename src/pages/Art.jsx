import React from 'react';
import SubpageLayout from '../components/SubpageLayout';
import './Art.css';

const fashionCutouts = [
  {
    src: '/assets/art/fashion_1_crouching.png',
    alt: 'Fashion pose crouching',
    className: 'cutout-img cutout-1'
  },
  {
    src: '/assets/art/fashion_2_standing.png',
    alt: 'Fashion pose standing',
    className: 'cutout-img cutout-2'
  },
  {
    src: '/assets/art/fashion_3_chin.png',
    alt: 'Fashion pose touching chin',
    className: 'cutout-img cutout-3'
  },
  {
    src: '/assets/art/fashion_4_seated.png',
    alt: 'Fashion pose seated',
    className: 'cutout-img cutout-4'
  },
  {
    src: '/assets/art/fashion_5_jeans_standing.png',
    alt: 'Fashion jeans pose standing',
    className: 'cutout-img cutout-5'
  },
  {
    src: '/assets/art/fashion_6_jeans_crouch.png',
    alt: 'Fashion jeans pose crouching',
    className: 'cutout-img cutout-6'
  },
  {
    src: '/assets/art/fashion_7_jeans_lying.png',
    alt: 'Fashion jeans pose lying',
    className: 'cutout-img cutout-7'
  }
];

const dientongPhotos = [
  { src: '/assets/art/dientong_1.jpg', alt: 'Dien Tong photoshoot 1' },
  { src: '/assets/art/dientong_2.jpg', alt: 'Dien Tong photoshoot 2' },
  { src: '/assets/art/dientong_3.jpg', alt: 'Dien Tong photoshoot 3' },
  { src: '/assets/art/dientong_4.jpg', alt: 'Dien Tong photoshoot 4' },
  { src: '/assets/art/dientong_5.jpg', alt: 'Dien Tong photoshoot 5' },
  { src: '/assets/art/dientong_6.jpg', alt: 'Dien Tong photoshoot 6' }
];

export default function Art() {
  return (
    <SubpageLayout>
      <div className="art-page">
        {/* Breadcrumb */}
        <div className="breadcrumb">/art</div>

        {/* Page Title */}
        <h1 className="page-title">
          <span className="title-initial">A</span>
          <span className="title-rest">rt.</span>
        </h1>

        {/* Intro Paragraph */}
        <p className="intro-text">
          Art and fashion serve as my tactile canvases for identity and storytelling. Whether rendering concepts through painting or styling garments, I treat visual design as a living medium to explore texture, form, and personal expression.
        </p>

        {/* ====================================================================
             SECTION 1: Fashion & Styling
             ==================================================================== */}
        <section className="fashion-section">
          <h2 className="section-heading">Fashion &amp; Styling</h2>
          <p className="section-desc">
            Fashion is wearable art. Through curating looks and conceptualizing designs, I love experimenting with silhouettes and aesthetics to tell visual stories without saying a word.
          </p>

          {/* Pill Badge 1: POSE */}
          <div className="pill-badge badge-pose">
            POSE | Photographer, Art Director.
          </div>

          {/* Photoshoot 1 Cutout Collage Stage */}
          <div className="fashion-collage">
            {fashionCutouts.map((cutout) => (
              <img
                key={cutout.src}
                src={cutout.src}
                alt={cutout.alt}
                className={cutout.className}
              />
            ))}
          </div>

          {/* Pill Badge 2: Dien Tong */}
          <div className="pill-badge badge-dientong">
            Dien Tong | &nbsp;Assistant Photographer, Advisor
          </div>

          {/* Photoshoot 2: 3x2 Photo Grid */}
          <div className="dientong-grid">
            {dientongPhotos.map((photo) => (
              <div className="dientong-item" key={photo.src}>
                <img src={photo.src} alt={photo.alt} className="dientong-img" />
              </div>
            ))}
          </div>
        </section>

        {/* ====================================================================
             SECTION 2: Artworks & Paintings
             ==================================================================== */}
        <section className="artworks-section">
          <h2 className="section-heading">Artworks &amp; Paintings</h2>
          <p className="section-desc artworks-desc">
            From acrylics to mixed media, painting is my space for raw experimentation. It allows me to translate internal thoughts and abstract emotions into tangible layers of color and texture.
          </p>

          {/* Artworks Collage Stage */}
          <div className="artworks-stage">
            {/* Left Artwork: Balloon-twisting with Pop-out Cutout */}
            <div className="art-col-left">
              <img
                src="/assets/art/artwork_balloon_bg.jpg"
                alt="Balloon flowers background"
                className="art-balloon-bg"
              />
            </div>
            <img
              src="/assets/art/artwork_girls_cutout.png"
              alt="Two girls with balloons pop-out cutout"
              className="art-girls-cutout"
            />
            <div className="art-caption-left">Balloon-twisting</div>

            {/* Middle Artwork: Seagul Sketch */}
            <div className="art-col-middle">
              <img
                src="/assets/art/artwork_seagul.jpg"
                alt="Seagul Sketch"
                className="art-seagul-img"
              />
            </div>
            <div className="art-caption-middle">Seagul Sketch</div>

            {/* Right Artwork: Joy, Anger, Love, and Hatred */}
            <div className="art-col-right">
              <img
                src="/assets/art/artwork_emotions.jpg"
                alt="Joy, Anger, Love, and Hatred"
                className="art-emotions-img"
              />
            </div>
            <div className="art-caption-right">Joy, Anger, Love, and Hatred</div>
          </div>
        </section>
      </div>
    </SubpageLayout>
  );
}

