import { useState } from 'react'
import imageOne from '../assets/images/image-1.jpg'
import imageTwo from '../assets/images/image-2.jpg'
import imageThree from '../assets/images/image-3.jpg'

const technicalCards = [
  {
    title: 'Edge AI Box & Tracking',
    detail: 'Loitering • Smoke/Fire • ANPR • Trajectory Tracing',
    badge: 'Computer Vision',
  },
  {
    title: 'Gov-Report AI Agent',
    detail: 'LangGraph • RAG • Strict Formatting • Multi-Agent',
    badge: 'LLMs & LangGraph',
  },
  {
    title: 'AI Evaluation & QA',
    detail: 'Edge Cases • Numerical Fidelity • Grounding QA',
    badge: 'Quality & QA',
  },
  {
    title: 'Engineering',
    detail: 'Python • FastAPI • PyTorch • Docker • Linux',
    badge: 'Core Tooling',
  },
]

const traits = [
  'Edge AI Box & Trajectory Tracking (Local Cameras)',
  'LangGraph Multi-Agent & Strict RAG Grounding',
  'Vietnamese Gov-Standard Formatting (Decree 30/2020/ND-CP)',
  'Native Vietnamese & C1 Advanced English',
]

const journeyImages = [
  {
    src: imageOne,
    title: 'Academic Excellence Recognition',
    caption: 'Lễ Tuyên Dương Thành Tích Cao Trong Học Tập Và Rèn Luyện — HCMOU (Rank 1 CS)',
    badge: '01 • Award',
    alt: 'Phan Cao Huy receiving Academic Excellence award at Ho Chi Minh City Open University',
  },
  {
    src: imageTwo,
    title: 'Campus Journey & Discipline',
    caption: 'Student life, discipline, and undergraduate training at Ho Chi Minh City Open University',
    badge: '02 • Campus',
    alt: 'Phan Cao Huy walking during university campus and military training',
  },
  {
    src: imageThree,
    title: 'Enterprise Integration Program',
    caption: 'Field exploration & workplace integration visit to Galaxy Innovation Hub (Vikki Bank)',
    badge: '03 • Industry',
    alt: 'Enterprise Integration Training Program field visit to Galaxy Innovation Hub with HCMOU students',
  },
]

function About() {
  const [selectedPhoto, setSelectedPhoto] = useState(null)

  return (
    <section className="section" id="about">
      <div className="section__inner">
        <div className="grid-two">
          <div data-reveal="left">
            <div className="section-heading">
              <span className="eyebrow">About Me</span>
              <h2>Bridging AI engineering with rigorous output evaluation.</h2>
              <p>
                I am a Computer Science undergraduate and AI Engineer based in Ho Chi Minh City,
                Vietnam. My work spans computer vision, edge AI, generative AI, retrieval-augmented
                generation, and multi-agent systems.
              </p>
            </div>

            <div className="about-copy surface-card">
              <p>
                At Cybertech JSC, I develop Edge AI systems where on-premises AI Boxes ingest local
                camera streams to perform real-time on-device inference for loitering detection,
                smoke/fire alerts, license plate recognition (ANPR/LPR), and object/vehicle
                trajectory tracking.
              </p>
              <p>
                In parallel, I engineer enterprise multi-agent workflows using LangGraph and RAG to
                ingest multi-source documents and synthesize official Vietnamese administrative reports
                strictly compliant with governmental formatting standards (Decree 30/2020/ND-CP),
                backed by strict citation and numerical fidelity verification.
              </p>
              <div className="about-traits">
                {traits.map((trait, index) => (
                  <div
                    key={trait}
                    className="about-trait"
                    data-reveal="zoom"
                    style={{ '--reveal-delay': `${90 + index * 80}ms` }}
                  >
                    {trait}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="about-tech-cards" data-reveal="right">
            {technicalCards.map((card, index) => (
              <div
                key={card.title}
                className={`about-tech-card about-tech-card--${index + 1} surface-card`}
                data-reveal="zoom"
                style={{ '--reveal-delay': `${120 + index * 70}ms` }}
              >
                <div className="about-tech-card__top">
                  <span className="about-tech-card__index">0{index + 1}</span>
                  <span className="about-tech-card__badge">{card.badge}</span>
                </div>
                <h3>{card.title}</h3>
                <p>{card.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 3 Photos in exact order with full-frame display and expand modal */}
        <div className="about-gallery-showcase" data-reveal="zoom">
          <div className="about-gallery-showcase__header">
            <span className="eyebrow">Milestones</span>
            <h3>Academic achievements &amp; enterprise engagement</h3>
          </div>

          <div className="about-gallery-grid">
            {journeyImages.map((item, index) => (
              <div
                key={item.title}
                className="about-gallery-card surface-card"
                data-reveal="zoom"
                style={{ '--reveal-delay': `${140 + index * 80}ms` }}
              >
                <div
                  className="about-gallery-card__image-wrap"
                  onClick={() => setSelectedPhoto(item)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && setSelectedPhoto(item)}
                  aria-label={`View full photo: ${item.title}`}
                >
                  <img
                    src={item.src}
                    alt=""
                    className="about-gallery-card__bg-blur"
                    aria-hidden="true"
                  />
                  <img
                    src={item.src}
                    alt={item.alt}
                    className={`about-gallery-card__image about-gallery-card__image--${index + 1}`}
                    loading="lazy"
                  />
                  <span className="about-gallery-card__badge">{item.badge}</span>
                  <span className="about-gallery-card__expand-icon" title="View Full Frame">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="15 3 21 3 21 9" />
                      <polyline points="9 21 3 21 3 15" />
                      <line x1="21" y1="3" x2="14" y2="10" />
                      <line x1="3" y1="21" x2="10" y2="14" />
                    </svg>
                  </span>
                </div>
                <div className="about-gallery-card__content">
                  <h4>{item.title}</h4>
                  <p>{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Full-Frame Lightbox Modal */}
        {selectedPhoto && (
          <div
            className="gallery-modal-backdrop"
            onClick={() => setSelectedPhoto(null)}
            role="dialog"
            aria-modal="true"
          >
            <div
              className="gallery-modal-content surface-card"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="gallery-modal-close"
                onClick={() => setSelectedPhoto(null)}
                aria-label="Close modal"
              >
                &times;
              </button>
              <div className="gallery-modal-image-wrap">
                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.alt}
                  className="gallery-modal-image"
                />
              </div>
              <div className="gallery-modal-footer">
                <span className="about-gallery-card__badge">{selectedPhoto.badge}</span>
                <h4>{selectedPhoto.title}</h4>
                <p>{selectedPhoto.caption}</p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="section-accent" />
    </section>
  )
}

export default About
