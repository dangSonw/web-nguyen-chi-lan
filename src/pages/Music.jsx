import React from 'react';
import SubpageLayout from '../components/SubpageLayout';
import VideoBox from '../components/VideoBox';
import './Music.css';

export default function Music() {
  return (
    <SubpageLayout>
      <div className="music-page">
        {/* Breadcrumb */}
        <div className="breadcrumb">/music</div>

        {/* Page Title */}
        <h1 className="page-title">
          <span className="title-initial">M</span>
          <span className="title-rest">usic.</span>
        </h1>

        {/* Intro Paragraph */}
        <p className="intro-text">
          My musical journey began with the piano in the 2nd grade, followed by traditional instruments in the 6th. That early curiosity sparked a lifelong exploration, leading me to pick up new instruments along the way. Today, I play 7 instruments with varying degrees of expertise.
        </p>

        {/* ====================================================================
             SECTION 1: Piano
             ==================================================================== */}
        <section className="music-section" id="piano">
          <h2 className="section-title">Piano</h2>
          <p className="section-desc">
            My musical journey began with the piano in the 2nd grade, establishing a foundational discipline and love for melody. Over the years, I evolved from a little girl who hated going to lessons to an absolute music lover.
          </p>

          {/* Piano Photos Row */}
          <div className="row-piano-photos">
            <img src="/assets/music/piano_1.jpg" alt="Chi Lan playing piano" className="photo-1" />
            <img src="/assets/music/piano_2.jpg" alt="Piano recital performance" className="photo-2" />
          </div>

          {/* Video 1 (Full width): Chopin */}
          <div className="video-piano-wrapper">
            <VideoBox
              youtubeId="MkfE9DV5va8"
              posterSrc="/assets/music/video_piano.jpg"
              alt="Chopin - Nocturne in C sharp minor preview"
              caption="Chopin - Nocturne in C sharp minor"
              iconSize="large"
            />
          </div>
        </section>

        {/* ====================================================================
             SECTION 2: Traditional Instruments
             ==================================================================== */}
        <section className="music-section" id="traditional-instruments">
          <h2 className="section-title">Traditional Instruments</h2>
          <p className="section-desc">
            Expanding into traditional instruments in the 6th grade opened up a deeply resonant cultural dialogue. This exploration grew beyond a casual interest into a profound appreciation for heritage.
          </p>

          {/* Traditional Photos Row */}
          <div className="row-trad-photos">
            <img src="/assets/music/trad_1.jpg" alt="Traditional instrument performance 1" className="photo-1" />
            <img src="/assets/music/trad_2.jpg" alt="Traditional instrument performance 2" className="photo-2" />
          </div>

          {/* Traditional Videos Row */}
          <div className="row-trad-videos">
            {/* Video 2: Co Gai Vot Chong */}
            <div className="video-col-1">
              <VideoBox
                youtubeId="eS_INtlEtD8"
                posterSrc="/assets/music/video_trad_1.jpg"
                alt="Performance “Cô Gái Vót Chông”"
                caption="Performance “Cô Gái Vót Chông” | Traditional Vietnamese T’rung"
                iconSize="small"
              />
            </div>

            {/* Video 3: Hoi tho Tay Nguyen */}
            <div className="video-col-2">
              <VideoBox
                youtubeId="Qryg9ZdmFqM"
                posterSrc="/assets/music/video_trad_2.jpg"
                alt="Performance “Hoi tho Tay Nguyen”"
                caption="Performance “Hoi tho Tay Nguyen” | Traditional Vietnamese Bass T’rung"
                iconSize="small"
              />
            </div>
          </div>
        </section>

        {/* ====================================================================
             SECTION 3: Viet Nam Tinh Hoa Concert
             ==================================================================== */}
        <section className="music-section" id="viet-nam-tinh-hoa">
          <h2 className="section-title">Viet Nam Tinh Hoa Concert</h2>
          <p className="section-desc">
            Bridging classical heritage with contemporary energy. It was the very first time I tried playing a modern drumset. Performing at the Vietnam Tinh Hoa Concert marked my debut on a modern drum set, where I played piano, drums, and T'rung (a Vietnamese tradditional instrument).
          </p>

          {/* Concert Photos Row (3 across) */}
          <div className="row-concert-photos">
            <img src="/assets/music/concert_1.jpg" alt="Viet Nam Tinh Hoa Concert photo 1" className="photo-concert" />
            <img src="/assets/music/concert_2.jpg" alt="Viet Nam Tinh Hoa Concert photo 2" className="photo-concert" />
            <img src="/assets/music/concert_3.jpg" alt="Viet Nam Tinh Hoa Concert photo 3" className="photo-concert" />
          </div>

          {/* Concert Videos Row (2 across, 50-50 16:9) */}
          <div className="row-concert-videos">
            {/* Video 4: Modern Drums */}
            <div className="video-col-1">
              <VideoBox
                youtubeId="Vl1AOwZxxwc"
                posterSrc="/assets/music/video_concert_1.jpg"
                alt="Performance “Hoa Thom Buom Luon” preview"
                caption="Performance “Hoa Thom Buom Luon” | Impromptu Modern Drums"
                iconSize="medium"
              />
            </div>

            {/* Video 5: Traditional Drums */}
            <div className="video-col-2">
              <VideoBox
                youtubeId="mM9lymapfuQ"
                posterSrc="/assets/music/video_concert_2.jpg"
                alt="Perfomance “Tinh Hoa Viet Nam” preview"
                caption="Perfomance “Tinh Hoa Viet Nam” | Traditional Vietnamese Drums"
                iconSize="medium"
              />
            </div>
          </div>
        </section>
      </div>
    </SubpageLayout>
  );
}

