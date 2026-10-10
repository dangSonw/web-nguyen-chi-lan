import React, { useState } from 'react';
import './VideoBox.css';

export default function VideoBox({
  youtubeId,
  posterSrc,
  alt = 'Video preview',
  caption,
  iconSize = 'medium', // 'large' | 'medium' | 'small'
  className = '',
  aspectRatio,
  style = {}
}) {
  const [isPlaying, setIsPlaying] = useState(false);

  const iconClass =
    iconSize === 'large'
      ? 'play-icon-large'
      : iconSize === 'small'
      ? 'play-icon-small'
      : 'play-icon-medium';

  const boxStyle = {
    ...(aspectRatio ? { aspectRatio } : {}),
    ...style
  };

  return (
    <div className={className ? `videobox-wrapper ${className}` : 'videobox-wrapper'}>
      <div
        className="video-box"
        style={boxStyle}
        onClick={() => setIsPlaying(true)}
        title="Click to play video"
      >
        {isPlaying ? (
          <iframe
            className="video-iframe-holder"
            src={`https://www.youtube.com/embed/${encodeURIComponent(
              youtubeId
            )}?autoplay=1&controls=0&modestbranding=1&rel=0&iv_load_policy=3&playsinline=1`}
            title={caption || alt}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <>
            <img src={posterSrc} alt={alt} className="video-poster" />
            <div className="play-button">
              <svg className={iconClass} viewBox="0 0 52 60" fill="none">
                <path
                  d="M51.1826 29.55L0.000241357 59.1002L0.000243941 -0.000110956L51.1826 29.55Z"
                  fill="white"
                />
              </svg>
            </div>
          </>
        )}
      </div>
      {caption && <div className="video-caption">{caption}</div>}
    </div>
  );
}

