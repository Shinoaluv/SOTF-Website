import { Link } from "react-router-dom";

function GetInvolved() {
  return (
    <main className="page">
      <section className="page-hero">
        <p className="section-label">GET INVOLVED</p>

        <h1>
          There&apos;s more than one way to make an impact.
        </h1>

        <p>
          Whether you want to volunteer, start a branch, bring hearing-health
          education to your school, or partner with us, there is a place for
          you in Sound of the Future.
        </p>
      </section>

      <section className="card-grid">
        <div className="info-card">
          <span>01</span>
          <h3>Volunteer</h3>
          <p>
            Support community events, educational outreach, care packages,
            social media, podcast projects, and other initiatives.
          </p>
        </div>

        <div className="info-card">
          <span>02</span>
          <h3>Start a Branch</h3>
          <p>
            Bring Sound of the Future to your school or community and lead
            local hearing-health awareness, service, and advocacy projects.
          </p>
        </div>

        <div className="info-card">
          <span>03</span>
          <h3>Partner With Us</h3>
          <p>
            We work with schools, hospitals, nonprofits, businesses, and
            community organizations to expand hearing-health education and
            outreach.
          </p>
        </div>

        <div className="info-card">
          <span>04</span>
          <h3>Bring Us to Your School</h3>
          <p>
            Invite our team to present a hearing-health workshop, educational
            session, or awareness program for students.
          </p>
        </div>
      </section>

      <section className="center-cta">
        <p className="section-label">READY TO HELP?</p>

        <h2>
          Join us in building a future where hearing health is never overlooked.
        </h2>

        <Link to="/contact" className="primary-button">
          Contact Us
        </Link>
      </section>
    </main>
  );
}

export default GetInvolved;