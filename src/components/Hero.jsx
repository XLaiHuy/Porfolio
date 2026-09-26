import { useState } from 'react'
import profileImg from '../assets/images/profile.jpg'

const heroBadges = [
  'AI Engineer @ Cybertech JSC',
  'Python & PyTorch',
  'AI Evaluation',
  'Vietnamese • English C1',
]

const heroTags = [
  'AI/ML Evaluation',
  'Computer Vision',
  'Generative AI',
  'RAG',
]

function Hero() {
  const [imageError, setImageError] = useState(false)
  const hasProfileImage = Boolean(profileImg) && !imageError

  return (
    <section className="hero-section" id="home">
      <div className="hero-glow hero-glow--left" />
      <div className="hero-glow hero-glow--right" />
      <div className="section__inner hero-layout">
        <div className="hero-copy" data-reveal="left">
          <span className="eyebrow">Portfolio 2026</span>
          <h1>Hi, I&apos;m Phan Cao Huy</h1>
          <p className="hero-subtitle">
            AI Engineer | AI/ML Evaluation &amp; Data Quality
          </p>
          <p className="hero-description">
            I build and evaluate AI systems across computer vision, generative AI, RAG, and
            vision-language models — with a focus on accuracy, reliability, and real-world deployment.
          </p>

          <div className="hero-actions">
            <a className="primary-button" href="#projects">
              View Projects
            </a>
            <a className="secondary-button" href="#contact">
              Contact Me
            </a>
          </div>

          <div className="chip-list hero-tech-list">
            {heroTags.map((tag, index) => (
              <span
                key={tag}
                className="chip"
                data-reveal="zoom"
                style={{ '--reveal-delay': `${120 + index * 70}ms` }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="hero-visual" data-reveal="right">
          <div className="hero-card surface-card">
            <div className="hero-image-wrap">
              {hasProfileImage ? (
                <img
                  src={profileImg}
                  alt="Phan Cao Huy profile"
                  className="hero-image"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="hero-image-placeholder">
                  <div className="hero-placeholder-icon">
                    <span>PCH</span>
                  </div>
                  <div className="hero-placeholder-text">
                    <strong>Phan Cao Huy</strong>
                    <p>AI Engineer &bull; AI/ML Evaluation</p>
                  </div>
                  <div className="hero-placeholder-metrics">
                    <span>Precision &bull; Accuracy &bull; Reliability</span>
                  </div>
                </div>
              )}
            </div>
            <div className="hero-card__content">
              <p>AI Engineer</p>
              <strong>Cybertech JSC</strong>
            </div>
          </div>

          {heroBadges.map((badge, index) => (
            <span
              key={badge}
              className={`hero-floating-badge hero-floating-badge--${index + 1}`}
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
