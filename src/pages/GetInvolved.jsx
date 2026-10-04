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
          <span>01</span>
          <h3>Volunteer</h3>
          <p>
            Support community events, educational outreach, care packages,
            social media, podcast projects, and other initiatives.
          </p>
          <a className="inline-link" href={links.join}>
            Volunteer with us ↗
          </a>
        </div>

        <div className="info-card">
          <span>02</span>
          <h3>Start a Branch</h3>
          <p>
            Bring Sound of the Future to your school or community and lead local
            hearing-health awareness, service, and advocacy projects.
          </p>
          <a
            className="inline-link"
            href="mailto:soundofthefutureofficial@gmail.com?subject=Starting%20a%20Branch"
          >
            Ask about starting a branch →
          </a>
        </div>

        <div className="info-card">
          <span>03</span>
          <h3>Partner With Us</h3>
          <p>
            We work with schools, hospitals, nonprofits, businesses, and
            community organizations to expand hearing-health education and
            outreach.
          </p>
          <Link className="inline-link" to="/contact">
            Talk about a partnership →
          </Link>
        </div>

        <div className="info-card">
          <span>04</span>
          <h3>Bring Us to Your School</h3>
          <p>
            Invite our team to present a hearing-health workshop, educational
            session, or awareness program for students.
          </p>
          <a
            className="inline-link"
            href="mailto:soundofthefutureofficial@gmail.com?subject=School%20Outreach%20Inquiry"
          >
            Invite our team →
          </a>
        </div>
        <div className="info-card">
          <h3>Become an Ambassador</h3>
          <p>
            Help share our mission and bring hearing-health awareness to your
            community.
          </p>
          <a className="inline-link" href={links.linktree}>
            Find the ambassador program on Linktree ↗
          </a>
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
