import React from 'react';
import SubpageLayout from '../components/SubpageLayout';
import VideoBox from '../components/VideoBox';
import './Filmmaking.css';

const films = [
  {
    id: 'streets-that-speak',
    title: 'Streets that speak',
    format: 'Cinematic short film',
    role: 'Videographer, Editor',
    summary:
      'I wanted to capture the pulse of Hanoi beyond the tourist maps, showcasing the hidden subcultures that make the city feel like home. From the sizzle of tucked-away stalls to skate sessions in concrete courtyards and dusty thrift shops, this film is a sensory love letter to the authentic, unpolished rhythm of local youth life.',
    youtubeId: 'SU-GhGr9Oc4',
    posterSrc: '/assets/filmmaking/film_1_streets.jpg'
  },
  {
    id: 'breadwinner',
    title: 'Breadwinner',
    format: 'Solo Documentary',
    role: 'Director, Videographer, Editor',
    summary:
      'I made this documentary on my cousin who is your typical exhausted office worker, navigating the quiet hours of the night and balancing the crushing burden of financial stability by day with her burning, secret passion for baking by night.',
    youtubeId: 'xfrnRK0bGqs',
    posterSrc: '/assets/filmmaking/film_2_breadwinner.jpg'
  },
  {
    id: 'bet',
    title: 'Bet?',
    format: 'Awareness-raising short film',
    role: 'Videographer, Editor',
    summary:
      'I made “Bet?” to shed light on an invisible issue: the rising wave of online football betting among teenagers. Seeing peers normalize casual wagers into dangerous traps inspired this story. To capture this essence, I purposefully used color grading and sound effects to drive tension.',
    youtubeId: 'YfrVAgb8DXQ',
    posterSrc: '/assets/filmmaking/film_3_bet.jpg'
  },
  {
    id: 'the-last-call',
    title: 'The last call:',
    format: 'Narrative short film',
    role: 'Actor',
    summary:
      'I participated in this film because I’ve seen too many brilliant friends, and myself, trapped in a relentless cycle of academic burnout. We become so consumed by grades and future expectations that we forget how to simply be young. I want my acting performance to remind us to pause and rediscover the simple joys that we are rushing past.',
    youtubeId: 'jsgOnEpe9PE',
    posterSrc: '/assets/filmmaking/film_4_last_call.jpg'
  }
];

export default function Filmmaking() {
  return (
    <SubpageLayout>
      <div className="filmmaking-page">
        {/* Breadcrumb */}
        <div className="breadcrumb">/filmmaking</div>

        {/* Page Title */}
        <h1 className="page-title">
          <span className="title-initial">F</span>
          <span className="title-rest">ilmmaking.</span>
        </h1>

        {/* Intro Paragraph */}
        <p className="intro-text">
          Everyone has had their phase of pretending to be a Youtuber as a child, I was not different: my filmmaking journey started with very childish vlogs that slowly sparked a genuine passion for visual storytelling. Over time, that curiosity evolved into experimenting with amateur short films and documentaries, as well as film commentary. Through each project, I strive to explore new perspectives and deepen my connection to the world around me.
        </p>

        {/* Film Rows */}
        {films.map((film) => (
          <article className="film-row" id={film.id} key={film.id}>
            <div className="film-info-col">
              <h2 className="film-title">{film.title}</h2>
              <div className="film-meta-item">
                <span className="film-meta-label">Format |</span>
                <span className="film-meta-value"> {film.format}</span>
              </div>
              <div className="film-meta-item">
                <span className="film-meta-label">Role |</span>
                <span className="film-meta-value"> {film.role}</span>
              </div>
              <p className="film-summary">{film.summary}</p>
            </div>

            <div className="film-video-box-col">
              <VideoBox
                youtubeId={film.youtubeId}
                posterSrc={film.posterSrc}
                alt={`${film.title} video preview`}
                iconSize="large"
              />
            </div>
          </article>
        ))}
      </div>
    </SubpageLayout>
  );
}

