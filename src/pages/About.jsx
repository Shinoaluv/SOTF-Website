function About() {
  return (
    <main className="page">
      <section className="page-hero">
        <p className="section-label">ABOUT US</p>

        <h1>
          We believe hearing health deserves to be heard.
        </h1>

        <p>
          Sound of the Future is a youth-led nonprofit focused on hearing
          health education, advocacy, accessibility, and amplifying Deaf and
          hard-of-hearing voices.
        </p>
      </section>

      <section className="content-section">
        <div>
          <p className="section-label">OUR STORY</p>

          <h2>
            Started from a personal experience. Built for a larger community.
          </h2>
        </div>

        <div className="content-text">
          <p>
            Sound of the Future began with a simple realization: hearing health
            is often overlooked until it becomes a serious problem.
          </p>

          <p>
            We wanted to create an organization that makes hearing health easier
            to understand, gives young people a voice in advocacy, and helps
            communities access practical resources and education.
          </p>

          <p>
            Today, our work includes school outreach, community events, hearing
            health education, care packages, youth branches, media outreach, and
            partnerships with organizations that share our mission.
          </p>
        </div>
      </section>

      <section className="values-section">
        <p className="section-label">WHAT WE BELIEVE</p>

        <div className="values-grid">
          <div className="value-card">
            <h3>Education</h3>
            <p>
              People should understand how everyday choices can affect their
              hearing health.
            </p>
          </div>

          <div className="value-card">
            <h3>Accessibility</h3>
            <p>
              Hearing health information and resources should be understandable
              and available to everyone.
            </p>
          </div>

          <div className="value-card">
            <h3>Representation</h3>
            <p>
              Deaf and hard-of-hearing voices should be included in the
              conversations that affect them.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;