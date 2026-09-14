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
            href="mailto:soundofthefuture@example.com"
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
            href="mailto:soundofthefuture@example.com?subject=Partnership Inquiry"
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
            href="mailto:soundofthefuture@example.com?subject=School Outreach Inquiry"
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
            href="mailto:soundofthefuture@example.com?subject=Media Inquiry"
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
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="secondary-button"
          >
            Instagram
          </a>

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="secondary-button"
          >
            TikTok
          </a>

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="secondary-button"
          >
            YouTube
          </a>
        </div>
      </section>
    </main>
  );
}

export default Contact;