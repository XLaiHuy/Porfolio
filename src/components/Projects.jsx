import projects from '../data/projects'

const projectImageModules = import.meta.glob('../assets/images/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
})

function Projects() {
  return (
    <section className="section" id="projects">
      <div className="section__inner">
        <div className="section-heading" data-reveal="left">
          <span className="eyebrow">Projects</span>
          <h2>Evidence-driven AI systems, research benchmarks, and production analytics.</h2>
          <p>
            Selected work across legal document intelligence (RAG), multimodal anomaly detection,
            emotion recognition, and production camera analytics.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => {
            const imageSrc = project.image
              ? projectImageModules[`../assets/images/${project.image}`]
              : null

            return (
              <article
                key={project.title}
                className="project-card surface-card"
                data-reveal="zoom"
                style={{ '--reveal-delay': `${index * 80}ms` }}
              >
                {imageSrc ? (
                  <div className="project-card__image-wrap">
                    <img
                      src={imageSrc}
                      alt={`${project.title} evaluation or architecture demonstration`}
                      className="project-card__image"
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <div className="project-card__image-placeholder">
                    <div className="project-card__placeholder-meta">
                      <span className="project-card__placeholder-type">{project.type}</span>
                      <span className="project-card__placeholder-stack">
                        {project.stack.slice(0, 3).join(' • ')}
                      </span>
                    </div>
                  </div>
                )}

                <div className="project-card__body">
                  <div className="project-card__top">
                    <span className="project-card__index">0{index + 1}</span>
                    <span className="project-card__type">{project.type}</span>
                  </div>

                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  {project.metrics && project.metrics.length > 0 && (
                    <div className="project-card__metrics">
                      <span className="project-card__subheading">Verified Metrics</span>
                      <div className="project-card__metric-list">
                        {project.metrics.map((metric) => (
                          <span key={metric} className="project-metric-badge">
                            {metric}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {project.evaluationDatasets && (
                    <div className="project-card__datasets">
                      <span className="project-card__subheading">Evaluation Datasets</span>
                      <p className="project-card__dataset-text">
                        {project.evaluationDatasets.join(' • ')}
                      </p>
                    </div>
                  )}

                  <div className="project-card__stack">
                    {project.stack.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>

                  <div className="project-card__footer">
                    {project.link ? (
                      <a
                        className="link-button project-card__link"
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {project.linkLabel || 'View Repository'}
                      </a>
                    ) : (
                      <span className="project-card__status-badge">
                        {project.linkLabel || 'Professional Project'}
                      </span>
                    )}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
      <div className="section-accent" />
    </section>
  )
}

export default Projects
