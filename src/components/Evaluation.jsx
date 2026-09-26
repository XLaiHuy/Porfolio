const evaluationSteps = [
  {
    step: '01',
    title: 'Define Reference',
    description: 'Establish expected outputs, benchmarks, or evaluation criteria.',
  },
  {
    step: '02',
    title: 'Review Outputs',
    description: 'Compare predictions or generated responses against references and expected behavior.',
  },
  {
    step: '03',
    title: 'Identify Errors',
    description: 'Analyze incorrect, inconsistent, unsupported, or ambiguous outputs.',
  },
  {
    step: '04',
    title: 'Measure & Improve',
    description: 'Use quantitative metrics and recurring error patterns to assess system quality.',
  },
]

function Evaluation() {
  return (
    <section className="section section--alt" id="evaluation">
      <div className="section__inner">
        <div className="section-heading" data-reveal="left">
          <span className="eyebrow">AI Quality</span>
          <h2>How I Evaluate AI Systems</h2>
          <p>
            Reliable AI requires more than model development. I use reference-based evaluation,
            quantitative metrics, and systematic error analysis to understand where a system succeeds
            and fails.
          </p>
        </div>

        <div className="evaluation-grid">
          {evaluationSteps.map((item, index) => (
            <article
              key={item.step}
              className="evaluation-card surface-card"
              data-reveal="zoom"
              style={{ '--reveal-delay': `${index * 80}ms` }}
            >
              <div className="evaluation-card__header">
                <span className="evaluation-card__index">{item.step}</span>
                <span className="evaluation-card__badge">Phase {item.step}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
      <div className="section-accent" />
    </section>
  )
}

export default Evaluation
