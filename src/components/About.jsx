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

function About() {
  return (
    <section className="section" id="about">
      <div className="section__inner grid-two">
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
      <div className="section-accent" />
    </section>
  )
}

export default About
