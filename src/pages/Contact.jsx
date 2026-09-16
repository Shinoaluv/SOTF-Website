function Contact() {
  return (
    <main className="page">
      <section className="page-hero">
        <p className="section-label">CONTACT US</p>

        <h1>
          Let&apos;s build something meaningful together.
        </h1>

        <p>
          Reach out to Sound of the Future about partnerships, volunteering,
          school presentations, media opportunities, branch programs, or
          community outreach.
        </p>
      </section>

      <section className="contact-section">
        <div className="contact-card">
          <p className="section-label">GENERAL INQUIRIES</p>
          <h3>Email Us</h3>
          <p>
            Have a question, collaboration idea, or want to learn more about
            Sound of the Future? Send us an email and our team will get back to
            you.
          </p>

          <a
            href="mailto:soundofthefutureofficial@gmail.com"
            className="primary-button"
          >
            Send an Email
          </a>
        </div>

        <div className="contact-card">
          <p className="section-label">PARTNERSHIPS</p>
          <h3>Work With Us</h3>
          <p>
            We collaborate with schools, hospitals, nonprofits, businesses,
            community organizations, and other groups that want to expand
            hearing-health awareness.
          </p>

          <a
            href="mailto:soundofthefutureofficial@gmail.com?subject=Partnership Inquiry"
            className="secondary-button"
          >
            Partnership Inquiry
          </a>
        </div>

        <div className="contact-card">
          <p className="section-label">SCHOOLS</p>
          <h3>Bring Us to Your School</h3>
          <p>
            Interested in a hearing-health presentation, workshop, awareness
            campaign, or student collaboration? We would love to connect with
            your school.
          </p>

          <a
            href="mailto:soundofthefutureofficial@gmail.com?subject=School Outreach Inquiry"
            className="secondary-button"
          >
            School Outreach
          </a>
        </div>

        <div className="contact-card">
          <p className="section-label">MEDIA</p>
          <h3>Media & Interview Requests</h3>
          <p>
            For interviews, stories, podcasts, television, radio, or other
            media opportunities, contact our team directly.
          </p>

          <a
            href="mailto:soundofthefutureofficial@gmail.com?subject=Media Inquiry"
            className="secondary-button"
          >
            Media Inquiry
          </a>
        </div>
      </section>

      <section className="center-cta">
    <p className="section-label">FOLLOW OUR WORK</p>

    <h2>
        Stay connected with Sound of the Future.
    </h2>

    <div className="social-buttons">
        <a
        href="https://www.instagram.com/sound_of_the_future/"
        target="_blank"
        rel="noopener noreferrer"
        className="secondary-button"
        >
        Instagram
        </a>

        <a
        href="https://www.tiktok.com/@sound.of.the.futu"
        target="_blank"
        rel="noopener noreferrer"
        className="secondary-button"
        >
        TikTok
        </a>

        <a
        href="https://www.youtube.com/@soundofthefutureofficial"
        target="_blank"
        rel="noopener noreferrer"
        className="secondary-button"
        >
        YouTube
        </a>

        <a
        href="https://open.spotify.com/show/033vuNIwHRVaqR0F1wbr3v?si=X1cC1aWxSzuu2_uSJXzqpQ&nd=1&dlsi=710bea1d852f489e"
        target="_blank"
        rel="noopener noreferrer"
        className="secondary-button"
        >
        Spotify
        </a>

        <a
        href="https://www.iheart.com/podcast/269-the-sound-of-the-future-po-340113210"
        target="_blank"
        rel="noopener noreferrer"
        className="secondary-button"
        >
        iHeartRadio
        </a>
    </div>
    </section>
    </main>
  );
}

export default Contact;