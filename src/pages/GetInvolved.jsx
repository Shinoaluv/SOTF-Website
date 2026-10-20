import { Link } from "react-router-dom";
import { links, photos } from "../data";

function GetInvolved() {
  return (
    <main id="main-content" className="page">
      <section className="page-hero">
        <p className="section-label">GET INVOLVED</p>

        <h1>There&apos;s more than one way to make an impact.</h1>

        <p>
          Whether you want to volunteer, start a branch, bring hearing-health
          education to your school, or partner with us, there is a place for you
          in Sound of the Future.
        </p>
        <div className="join-intro">
          <a className="primary-button" href={links.join}>
            Join Sound of the Future ↗
          </a>
          <Link className="inline-link" to="/contact">
            Ask us a question →
          </Link>
        </div>
      </section>

      <div className="page-photo-strip">
        <img
          src={photos.team}
          alt="Our team together at a community outreach event"
          loading="lazy"
        />
        <img
          src={photos.market}
          alt="Educational materials and fundraising items at our community market booth"
          loading="lazy"
        />
      </div>
      <section className="card-grid">
        <div className="info-card">
          <h3>Start a Branch</h3>
          <p>
            Bring Sound of the Future to your school or community and lead local
            hearing-health awareness, service, and advocacy projects.
          </p>
          <a
            className="inline-link"
            href={links.join}
          >
            Apply to start a branch ↗
          </a>
        </div>

        <div className="info-card">
          <h3>Partner With Us</h3>
          <p>
            We work with schools, hospitals, nonprofits, businesses, and
            community organizations to expand hearing-health education and
            outreach. Email us for more information.
          </p>
          <a className="inline-link" href="mailto:soundofthefutureofficial@gmail.com?subject=Partnership%20Inquiry">
            Email us about a partnership →
          </a>
        </div>

        <div className="info-card">
          <h3>Bring Us to Your School</h3>
          <p>
            Invite our team to present a hearing-health workshop, educational
            session, or awareness program for students. Email us for more information.
          </p>
          <a
            className="inline-link"
            href="mailto:soundofthefutureofficial@gmail.com?subject=School%20Outreach%20Inquiry"
          >
            Email us about a school visit →
          </a>
        </div>
        <div className="info-card">
          <h3>Become an Ambassador</h3>
          <p>
            Help share our mission and bring hearing-health awareness to your
            community.
          </p>
          <a className="inline-link" href={links.ambassador}>
            Apply to become an ambassador ↗
          </a>
        </div>
      </section>

      <section className="service-hours-intro wrap section-space" aria-labelledby="service-hours-heading">
        <h2 id="service-hours-heading">Earn Service Hours Online With Us</h2>
        <p>Support hearing-health education and accessibility from anywhere. Explore research, technology evaluation, and journalism opportunities, each worth 3 service hours.</p>
        <Link className="primary-button" to="/get-involved/service-hours">Explore online volunteer opportunities →</Link>
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
