import experiences from '../data/experiences'

function Experience() {
  return (
    <section className="section" id="experience">
      <div className="section__inner">
        <div className="section-heading" data-reveal="left">
          <span className="eyebrow">Experience</span>
          <h2>Real-world AI engineering and operational quality.</h2>
          <p>
            Production camera analytics, model output review, edge-case investigations, and
            automated administrative reporting workflows.
          </p>
        </div>

        <div className="timeline">
          {experiences.map((item, index) => (
            <article
              key={item.company + item.role}
              className="timeline-item surface-card"
              data-reveal={index % 2 === 0 ? 'left' : 'right'}
              style={{ '--reveal-delay': `${index * 80}ms` }}
            >
              <div className="timeline-item__dot" />
              <div className="timeline-item__header">
                <span className="timeline-item__period">{item.period}</span>
                <h3>{item.role}</h3>
                <p className="timeline-item__company">{item.company}</p>
                {item.location && <span className="timeline-item__location">{item.location}</span>}
              </div>
              <ul>
                {item.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
