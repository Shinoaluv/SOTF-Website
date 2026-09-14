import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="hero hero-with-logo">
        <div className="hero-content">
          <p className="eyebrow">YOUTH-LED • COMMUNITY-DRIVEN</p>

          <h1>
            A louder future starts
            <span> with listening.</span>
          </h1>

          <p className="hero-description">
            Sound of the Future is a youth-led nonprofit working to educate
            communities about hearing health, amplify Deaf and hard-of-hearing
            voices, and make hearing resources more accessible.
          </p>

          <div className="hero-buttons">
            <Link to="/get-involved" className="primary-button">
              Get Involved
            </Link>

            <Link to="/about" className="secondary-button">
              Our Story
            </Link>
          </div>
        </div>

        <div className="hero-logo-side">
          <img
            src={logo}
            alt="Sound of the Future logo"
            className="hero-side-logo"
          />
        </div>
      </section>

      {/* OUR MISSION */}
      <section className="home-mission">
        <p className="section-label">OUR MISSION</p>

        <h2>
          Protect hearing. Share stories. Build change.
        </h2>

        <p>
          Through education, advocacy, community outreach, and youth leadership,
          Sound of the Future works to make hearing health easier to understand,
          more accessible, and impossible to overlook.
        </p>

        <Link to="/about" className="text-link">
          Learn about our mission →
        </Link>
      </section>

      {/* WHY IT MATTERS */}
      <section className="home-intro">
        <p className="section-label">WHY IT MATTERS</p>

        <h2>
          Hearing health affects how we communicate, learn, connect, and
          experience the world.
        </h2>

        <p>
          Yet hearing health is often overlooked, especially among young
          people. We work to make hearing health education easier to understand,
          more accessible, and part of everyday conversation.
        </p>

        <Link to="/about" className="text-link">
          Learn more about us →
        </Link>
      </section>

      {/* IMPACT */}
      <section className="home-impact">
        <div className="home-section-heading">
          <div>
            <p className="section-label">OUR IMPACT</p>

            <h2>
              From one conversation to thousands.
            </h2>
          </div>

          <Link to="/impact" className="secondary-button">
            See Our Impact
          </Link>
        </div>

        <div className="home-stats">
          <div className="home-stat">
            <h3>120K+</h3>

            <p>
              People reached through education, media, outreach, and online
              content
            </p>
          </div>

          <div className="home-stat">
            <h3>600+</h3>

            <p>
              People educated at STEM GO PRO FEST
            </p>
          </div>

          <div className="home-stat">
            <h3>$1,200+</h3>

            <p>
              Raised through Benevity to support our mission
            </p>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="home-programs">
        <div className="home-section-heading">
          <div>
            <p className="section-label">WHAT WE DO</p>

            <h2>
              Awareness is only the beginning.
            </h2>
          </div>

          <Link to="/programs" className="secondary-button">
            Explore Programs
          </Link>
        </div>

        <div className="home-program-grid">
          <Link to="/programs" className="home-program-card">
            <span>01</span>

            <h3>Education</h3>

            <p>
              Workshops, presentations, and resources that teach young people
              how to protect their hearing.
            </p>

            <strong>Learn more →</strong>
          </Link>

          <Link to="/programs" className="home-program-card">
            <span>02</span>

            <h3>Community Outreach</h3>

            <p>
              Bringing hearing-health education directly to schools, families,
              events, and communities.
            </p>

            <strong>Learn more →</strong>
          </Link>

          <Link to="/programs" className="home-program-card">
            <span>03</span>

            <h3>Media & Advocacy</h3>

            <p>
              Using social media, podcasts, radio, television, and storytelling
              to amplify the conversation.
            </p>

            <strong>Learn more →</strong>
          </Link>
        </div>
      </section>

      {/* GET INVOLVED */}
      <section className="home-join">
        <div>
          <p className="section-label">
            JOIN THE MOVEMENT
          </p>

          <h2>
            Your voice can help shape the future of hearing health.
          </h2>

          <p>
            Volunteer, start a branch, partner with us, invite us to your school,
            or help support our work.
          </p>
        </div>

        <div className="home-join-buttons">
          <Link to="/get-involved" className="primary-button">
            Get Involved
          </Link>

          <Link to="/donate" className="secondary-button">
            Donate
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Home;