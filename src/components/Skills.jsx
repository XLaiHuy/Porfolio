import skills from '../data/skills'

function Skills() {
  return (
    <section className="section section--alt" id="skills">
      <div className="section__inner">
        <div className="section-heading" data-reveal="left">
          <span className="eyebrow">Skills</span>
          <h2>Core capabilities across AI evaluation, machine learning, and engineering.</h2>
          <p>
            A structured toolkit applied to model development, systematic benchmarking, error analysis,
            and production deployment.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((group, index) => (
            <article
              key={group.title}
              className="skill-card surface-card"
              data-reveal="zoom"
              style={{ '--reveal-delay': `${index * 70}ms` }}
            >
              <div className="skill-card__header">
                <span>{group.title}</span>
                <strong>{group.items.length} skills</strong>
              </div>
              <div className="skill-card__chips">
                {group.items.map((item) => (
                  <span key={item} className="skill-pill">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
