function Contact() {
  return (
    <section className="section section--alt" id="contact">
      <div className="section__inner">
        <div className="contact-cta-card surface-card" data-reveal="zoom">
          <div className="contact-cta-copy">
            <span className="eyebrow">Contact</span>
            <h2>Let&apos;s connect.</h2>
            <p>
              I&apos;m open to opportunities in AI engineering, AI/ML evaluation, data quality,
              annotation, and reliable AI systems.
            </p>

            <div className="contact-meta-list">
              <div className="contact-meta-item">
                <span className="contact-meta-label">Email</span>
                <a href="mailto:phanhuy210925@gmail.com" className="contact-meta-value">
                  phanhuy210925@gmail.com
                </a>
              </div>
              <div className="contact-meta-item">
                <span className="contact-meta-label">Location</span>
                <span className="contact-meta-value">Ho Chi Minh City, Vietnam</span>
              </div>
              <div className="contact-meta-item">
                <span className="contact-meta-label">Languages</span>
                <span className="contact-meta-value">Vietnamese (Native) • English (C1 Advanced)</span>
              </div>
            </div>

            <div className="contact-actions">
              <a
                className="primary-button"
                href="mailto:phanhuy210925@gmail.com"
              >
                Email
              </a>
              <a
                className="secondary-button"
                href="https://www.linkedin.com/in/cao-huy-phan-194195373/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                className="secondary-button"
                href="https://github.com/XLaiHuy"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                className="secondary-button"
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                download="Phan_Cao_Huy_Resume.pdf"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="section-accent" />
    </section>
  )
}

export default Contact
