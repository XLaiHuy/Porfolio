function Education() {
  return (
    <section className="section" id="education">
      <div className="section__inner">
        <div className="section-heading" data-reveal="left">
          <span className="eyebrow">Education</span>
          <h2>Academic excellence in Computer Science and artificial intelligence.</h2>
          <p>
            Rigorous undergraduate training combining algorithms, machine learning, mathematics,
            and software engineering fundamentals.
          </p>
        </div>

        <div className="education-card surface-card" data-reveal="zoom">
          <div className="education-card__line" />
          <div className="education-card__content">
            <span className="education-card__period">Sep 2023 – Sep 2027 (Expected)</span>
            <h3>Ho Chi Minh City Open University (HCMOU)</h3>
            <p>Bachelor of Science in Computer Science</p>
            <div className="education-card__meta">
              <span>GPA: 3.41 / 4.00</span>
              <span>Ranked 1st by GPA in Computer Science, Faculty of Special Programs (2026)</span>
              <span>Academic Merit Scholarship: 5 semesters (4 consecutive)</span>
              <span>Outstanding Student for Academic Excellence</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
