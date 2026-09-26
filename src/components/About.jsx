import imageOne from '../assets/images/image-1.jpg'
import imageTwo from '../assets/images/image-2.jpg'
import imageThree from '../assets/images/image-3.jpg'

const technicalCards = [
  {
    title: 'AI Camera',
    detail: 'Loitering • Smoke/Fire • License Plate',
    badge: 'Computer Vision',
  },
  {
    title: 'Generative AI',
    detail: 'RAG • Agents • Structured Reporting',
    badge: 'LLMs & Agents',
  },
  {
    title: 'AI Evaluation',
    detail: 'Benchmarking • Error Analysis • Output Verification',
    badge: 'Quality & QA',
  },
  {
    title: 'Engineering',
    detail: 'Python • FastAPI • Docker • Linux',
    badge: 'Core Tooling',
  },
]

const traits = [
  'AI Camera Analytics & Edge Cases',
  'Multi-Agent & RAG Architectures',
  'Benchmark Validation & Output Verification',
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
    alt: 'Phan Cao Huy during university campus training',
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
                Vietnam. My work spans computer vision, generative AI, retrieval-augmented generation,
                and AI-assisted automation.
              </p>
            </div>

            <div className="about-copy surface-card">
              <p>
                At Cybertech JSC, I work on AI camera systems for loitering, smoke/fire, and license
                plate detection, as well as AI-agent workflows for information aggregation and
                structured administrative reporting.
              </p>
              <p>
                Beyond building models and pipelines, I focus on evaluating AI outputs, validating
                results, identifying inconsistencies, and improving system reliability.
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

        {/* 3 Photos in exact order */}
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
                <div className="about-gallery-card__image-wrap">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className={`about-gallery-card__image about-gallery-card__image--${index + 1}`}
                    loading="lazy"
                  />
                  <span className="about-gallery-card__badge">{item.badge}</span>
                </div>
                <div className="about-gallery-card__content">
                  <h4>{item.title}</h4>
                  <p>{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="section-accent" />
    </section>
  )
}

export default About
