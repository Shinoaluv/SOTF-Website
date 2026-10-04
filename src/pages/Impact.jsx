import { Link } from "react-router-dom";
import { photos, impactStats, links } from "../data";
export default function Impact() {
  return (
    <main id="main-content" className="page impact-page">
      <section className="page-hero">
        <p className="section-label">Our impact</p>
        <h1>
          Real people.
          <br />
          Growing impact.
        </h1>
        <p>
          From a conversation at a community market to a story shared on the
          news, here’s how we’re bringing hearing health to more people.
        </p>
        <nav className="section-nav" aria-label="Impact sections">
          <a href="#community">Community</a>
          <a href="#media">Media & education</a>
          <a href="#supporters">Fundraising & supporters</a>
        </nav>
      </section>
      <section className="impact-band">
        <div className="wrap">
          <div className="impact-stat-grid">
            {impactStats.map(([n, label, detail]) => (
              <div className="impact-number" key={label}>
                <strong>{n}</strong>
                <h2>{label}</h2>
                <p>{detail}</p>
              </div>
            ))}
          </div>
          <p className="data-note">
            Organization-reported figures · Updated October 2026.
          </p>
        </div>
      </section>
      <section id="community" className="section-space wrap">
        <div className="section-heading">
          <div>
            <p className="section-label">In the community</p>
            <h2>Showing up. Sharing what we know.</h2>
          </div>
        </div>
        <article className="event-feature">
          <img
            src={photos.stem}
            alt="Sound of the Future's educational display at Shell Energy Stadium"
            loading="lazy"
            width="1200"
            height="1600"
          />
          <div>
            <p className="story-category">July 30, 2026 · Houston</p>
            <h3>STEM GO PRO FEST</h3>
            <p>
              At TechFest’s STEM GO PRO FEST at Shell Energy Stadium, we
              educated <strong>625+ students and adults</strong>, from
              kindergarteners to high school students and their families.
            </p>
            <p>
              Our booth brought hearing-health education into a day of
              discovery, with resources and conversations about protecting
              hearing.
            </p>
            <Link className="inline-link" to="/programs">
              Explore our education work →
            </Link>
          </div>
        </article>
        <article className="event-feature reverse">
          <img
            src={photos.market}
            alt="Sound of the Future's community market table with educational materials and fundraising items"
            loading="lazy"
            width="1600"
            height="1200"
          />
          <div>
            <p className="story-category">Community outreach & fundraising</p>
            <h3>Girls Gotta Shop Market</h3>
            <p>
              We educated <strong>250+ people</strong> about hearing health and
              raised <strong>over $200</strong> through market sales.
            </p>
            <p>
              A table, a conversation, and a chance to make hearing health part
              of everyday life.
            </p>
          </div>
        </article>
      </section>
      <section id="media" className="media-impact">
        <div className="wrap section-space">
          <div className="section-heading">
            <div>
              <p className="section-label">Media & education</p>
              <h2>Taking the conversation further.</h2>
            </div>
          </div>
          <div className="media-feature">
            <figure>
              <div className="tv-photo">
                <img
                  src={photos.interview}
                  alt="The founders discussing hearing health on KPRC 2 News"
                  loading="lazy"
                  width="900"
                  height="880"
                />
              </div>
              <figcaption>Sound of the Future on KPRC 2 News.</figcaption>
            </figure>
            <div>
              <h3>Sharing our story on KPRC 2</h3>
              <p>
                Our founders shared Sound of the Future’s mission and
                hearing-health advocacy with a wider Houston audience.
              </p>
              <h3>On air with KPFT</h3>
              <p>
                A 30-second community announcement on KPFT Houston Community
                Radio brought our message to radio listeners.
              </p>
            </div>
          </div>
          <div className="education-list">
            <article>
              <h3>100+ weekly podcast listeners</h3>
              <p>
                Weekly hearing-health education on Spotify, iHeartRadio, and
                YouTube.
              </p>
              <a className="inline-link" href={links.spotify}>
                Listen to the podcast ↗
              </a>
            </article>
            <article>
              <h3>600+ people educated online</h3>
              <p>
                Weekly hearing-health and protection posts across Instagram,
                Facebook, and TikTok.
              </p>
              <a className="inline-link" href={links.instagram}>
                Follow our updates ↗
              </a>
            </article>
            <article>
              <h3>Educational cohorts</h3>
              <p>
                Hosted learning opportunities that bring people together around
                hearing-health education.
              </p>
              <Link className="inline-link" to="/get-involved">
                Find a way to join →
              </Link>
            </article>
          </div>
        </div>
      </section>
      <section id="supporters" className="section-space wrap">
        <div className="section-heading">
          <div>
            <p className="section-label">Made possible by community</p>
            <h2>Support that makes a difference.</h2>
          </div>
          <Link className="inline-link" to="/donate">
            Support our mission →
          </Link>
        </div>
        <div className="fundraising-row">
          <div>
            <strong>$1,200+</strong>
            <p>Raised through Benevity</p>
          </div>
          <div>
            <strong>$200+</strong>
            <p>Raised through market sales</p>
          </div>
        </div>
        <h3 className="supporters-heading">Thank you to our supporters</h3>
        <dl className="supporter-list">
          <div>
            <dt>Hopdoddy</dt>
            <dd>150+ free kids’ meal coupons</dd>
          </div>
          <div>
            <dt>JK Hair Salon</dt>
            <dd>200+ cards offering a 20% discount</dd>
          </div>
          <div>
            <dt>The Home Depot</dt>
            <dd>$50 gift card</dd>
          </div>
          <div>
            <dt>Costco</dt>
            <dd>Community sponsor</dd>
          </div>
        </dl>
      </section>
      <section className="center-cta">
        <p className="section-label">What comes next starts with us</p>
        <h2>Help us reach the next person.</h2>
        <Link to="/get-involved" className="primary-button">
          Get involved ↗
        </Link>
      </section>
    </main>
  );
}
