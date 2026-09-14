function Donate() {
  return (
    <main className="page">
      <section className="page-hero donate-page">
        <p className="section-label">SUPPORT OUR MISSION</p>

        <h1>
          Help us make hearing health impossible to ignore.
        </h1>

        <p>
          Your support helps Sound of the Future create educational resources,
          expand community outreach, provide hearing-health care packages, and
          bring awareness programs to more schools and communities.
        </p>

        <a
          href="https://soundofthefuture.base44.app/donate"
          target="_blank"
          rel="noopener noreferrer"
          className="primary-button"
        >
          Donate Now
        </a>
      </section>

      <section className="card-grid">
        <div className="info-card">
          <span>01</span>
          <h3>Education</h3>
          <p>
            Donations help us create guides, presentations, workshops, and
            educational materials about hearing health and safe listening.
          </p>
        </div>

        <div className="info-card">
          <span>02</span>
          <h3>Community Outreach</h3>
          <p>
            Support helps us attend community events, reach new audiences, and
            bring hearing-health education directly to students and families.
          </p>
        </div>

        <div className="info-card">
          <span>03</span>
          <h3>Care Packages</h3>
          <p>
            Contributions can help us provide practical hearing-protection
            resources and educational materials to people in the community.
          </p>
        </div>

        <div className="info-card">
          <span>04</span>
          <h3>Youth Leadership</h3>
          <p>
            Donations help us expand youth-led programs, branches, advocacy
            initiatives, and opportunities for students to create local impact.
          </p>
        </div>
      </section>

      <section className="center-cta">
        <p className="section-label">EVERY CONTRIBUTION MATTERS</p>

        <h2>
          Support a louder, safer, and more inclusive future.
        </h2>

        <a
          href="https://www.zeffy.com/en-US/donation-form/sound-of-the-future"
          target="_blank"
          rel="noopener noreferrer"
          className="primary-button"
        >
          Make a Donation
        </a>
      </section>
    </main>
  );
}

export default Donate;