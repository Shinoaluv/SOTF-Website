/* THESIS: Introduce the people doing the work, then show what they have done.
OWN-WORLD: Preserve the blue/navy identity; documentary photos, clear type, flat surfaces.
STORY: Meet us, understand our mission, explore our work, find a way to connect.
FIRST VIEWPORT: A concise introduction beside a large team photograph, with story and impact links.
FORM: Extension of the existing nonprofit website with a photo-led opening and event stories. */
import { Link } from "react-router-dom";
import { links, photos, impactStats } from "../data";
export default function Home() {
  return (
    <main id="main-content" className="home-page">
      <section className="home-opening wrap">
        <div className="opening-copy">
          <p className="eyebrow">Youth-led. Community-driven.</p>
          <h1>
            Hear today.
            <br />
            <span>Protect tomorrow.</span>
          </h1>
          <p className="opening-description">
            We’re Sound of the Future—a youth-led nonprofit making hearing
            health part of everyday conversation and amplifying Deaf and
            hard-of-hearing voices.
          </p>
          <div className="actions">
            <Link className="primary-button" to="/about">
              Get to know us <span aria-hidden="true">↗</span>
            </Link>
            <Link className="inline-link" to="/impact">
              See our impact <span aria-hidden="true">→</span>
            </Link>
          </div>
          <p className="opening-note">
            Education. Advocacy. A community that listens.
          </p>
        </div>
        <figure className="opening-photo">
          <img
            src={photos.team}
            alt="Three Sound of the Future team members at their hearing-health outreach booth"
            fetchPriority="high"
            width="1200"
            height="1600"
          />
          <figcaption>
            Our team, out in the community.
            <span>Shell Energy Stadium · Houston</span>
          </figcaption>
        </figure>
      </section>
      <section className="impact-band" aria-label="Our impact at a glance">
        <div className="wrap">
          <div className="impact-stat-grid">
            {impactStats.map(([n, label]) => (
              <div className="impact-number" key={label}>
                <strong>{n}</strong>
                <p>{label}</p>
              </div>
            ))}
          </div>
          <p className="data-note">
            Organization-reported impact · Updated October 2026
          </p>
        </div>
      </section>
      <section className="section-space wrap">
        <div className="section-heading">
          <div>
            <p className="section-label">Our work in the community</p>
            <h2>
              Small conversations.
              <br />
              Lasting connections.
            </h2>
          </div>
          <Link className="inline-link" to="/impact">
            All accomplishments <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="story-grid">
          <article className="story">
            <Link to="/impact#community" className="story-image">
              <img
                src={photos.outreach}
                alt="Sound of the Future's outreach booth at Shell Energy Stadium, with a visiting mascot"
                width="1200"
                height="900"
                loading="lazy"
              />
            </Link>
            <p className="story-category">Education · Houston</p>
            <h3>
              <Link to="/impact#community">
                Taking hearing health to STEM GO PRO FEST
              </Link>
            </h3>
            <p>
              625+ students and adults. Hands-on conversations. A day of
              learning at Shell Energy Stadium.
            </p>
          </article>
          <article className="story">
            <Link to="/impact#media" className="story-image tv-photo">
              <img
                src={photos.interview}
                alt="Sound of the Future's founders speaking with a KPRC 2 News interviewer about hearing health and advocacy"
                width="900"
                height="880"
                loading="lazy"
              />
            </Link>
            <p className="story-category">Media · KPRC 2</p>
            <h3>
              <Link to="/impact#media">
                Bringing our mission to a wider audience
              </Link>
            </h3>
            <p>
              Sharing the story behind Sound of the Future and why
              hearing-health awareness matters.
            </p>
          </article>
        </div>
      </section>
      <section className="mission-section">
        <div className="wrap mission-layout">
          <div>
            <p className="section-label">Why we’re here</p>
            <h2>
              Hearing health is personal.
              <br />
              So is our mission.
            </h2>
          </div>
          <div>
            <p>
              Sound of the Future began with Catherine’s experience with hearing
              loss and a conversation with Sanni. Together, they saw how much
              more young people could learn about protecting their hearing and
              supporting one another.
            </p>
            <p>
              Today, we bring that conversation to schools, community events,
              and the places people already connect.
            </p>
            <Link to="/about" className="inline-link">
              Meet Catherine and Sanni <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
      <section className="section-space wrap explore-section">
        <div className="section-heading">
          <div>
            <p className="section-label">Find your way</p>
            <h2>There’s a place for you here.</h2>
          </div>
        </div>
        <div className="explore-links">
          <Link to="/programs">
            <h3>Explore our programs</h3>
            <p>
              Hearing-health education, community outreach, and youth advocacy.
            </p>
            <span aria-hidden="true">↗</span>
          </Link>
          <Link to="/get-involved">
            <h3>Get involved</h3>
            <p>Volunteer, start a branch, or bring our work to your school.</p>
            <span aria-hidden="true">↗</span>
          </Link>
          <Link to="/donate">
            <h3>Support our work</h3>
            <p>
              Help education and hearing-health resources reach more people.
            </p>
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
      <section className="podcast-section">
        <div className="wrap podcast-layout">
          <div>
            <p className="section-label">The Sound of the Future Podcast</p>
            <h2>Keep the conversation going.</h2>
            <p>
              Hearing health, personal stories, and advocacy. Join 100+ weekly
              listeners.
            </p>
          </div>
          <div className="podcast-links">
            <a href={links.spotify}>
              Listen on Spotify <span aria-hidden="true">↗</span>
            </a>
            <a href={links.iheart}>
              Listen on iHeartRadio <span aria-hidden="true">↗</span>
            </a>
            <a href={links.youtube}>
              Watch on YouTube <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>
      <section className="section-space wrap home-close">
        <h2>Let’s make a difference, together.</h2>
        <p>
          Have a question, an idea, or a story to share? We’d love to hear from
          you.
        </p>
        <Link className="primary-button" to="/contact">
          Talk to our team <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </main>
  );
}
