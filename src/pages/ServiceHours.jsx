import { Link } from "react-router-dom";
import { links } from "../data";

// Inherit the site's blue, navy, and white reading layout. Present three
// concise role summaries, their deliverables, and one shared submission form.
const opportunities = [
  {
    title: "Research Development Volunteer",
    description: "Turn hearing-health research into clear, engaging educational resources for people of all ages.",
    requirements: "Choose an approved topic (or submit one for approval), read 1–2 credible sources, and write a 200–500 word summary. Explain why the research matters for hearing health, accessibility, or everyday life, verify the facts, and cite your sources in the required format.",
    examples: "Understanding tinnitus, safe headphone volume, the science of hearing, or a classroom lesson about sound waves.",
    review: "Submit your article for review. Outstanding approved work may appear on our website, in educational materials, or in newsletters.",
  },
  {
    title: "AI & Accessibility Innovation Volunteer",
    description: "Explore how emerging technology can improve accessibility and communication for Deaf and Hard of Hearing communities.",
    requirements: "Choose an assigned or approved AI or accessibility tool and test it with the standardized evaluation guide. Assess accuracy, ease of use, accessibility, response time, and effectiveness. Write a brief report with testing evidence, strengths, limitations, rubric ratings, and recommendations.",
    examples: "Compare live captioning tools, test captions in noisy environments, review hearing aid apps, or evaluate educational website accessibility.",
    review: "Submit your report for review. Reports that meet quality standards may be published in our accessibility resource library.",
  },
  {
    title: "Journalism & Communications Volunteer",
    description: "Inform and inspire others through original stories about hearing health, accessibility, and Deaf and Hard of Hearing communities.",
    requirements: "Choose an approved topic, research credible sources or conduct interviews, and write an original 500–800 word article for the general public. Check facts, cite sources in the required format, and proofread for clarity, engagement, and accessibility.",
    examples: "5 Ways to Protect Your Hearing, a monthly hearing news roundup, student spotlights, or hearing technology feature stories.",
    review: "Submit your article for editorial review. Approved work may appear on our website, in our newsletter, or on other educational platforms.",
  },
];

export default function ServiceHours() {
  return (
    <main id="main-content" className="page">
      <section className="page-hero">
        <p className="section-label">ONLINE VOLUNTEERING</p>
        <h1>Earn Service Hours Online With Us</h1>
        <p>Make hearing-health knowledge and accessible technology easier to understand, wherever you are. Choose one of the three opportunities below. Each opportunity earns 3 service hours.</p>
        <div className="join-intro">
          <a className="primary-button" href={links.serviceSubmission}>Submit your volunteer work ↗</a>
          <Link className="inline-link" to="/get-involved">Back to Get Involved →</Link>
        </div>
      </section>
      <section className="wrap section-space service-opportunities" aria-label="Online volunteer opportunities">
        {opportunities.map((opportunity) => (
          <article className="service-opportunity" key={opportunity.title}>
            <header>
              <p className="service-hours-credit">3 service hours</p>
              <h2>{opportunity.title}</h2>
              <p>{opportunity.description}</p>
            </header>
            <div>
              <h3>What you’ll do</h3>
              <p>{opportunity.requirements}</p>
              <h3>Example projects</h3>
              <p>{opportunity.examples}</p>
              <p>{opportunity.review}</p>
            </div>
          </article>
        ))}
      </section>
      <section className="center-cta">
        <h2>Ready to share your work?</h2>
        <p>Submit your completed project for review through our volunteer submission form.</p>
        <a className="primary-button" href={links.serviceSubmission}>Submit your volunteer work ↗</a>
        <p><a className="inline-link" href={links.email}>Email us with questions →</a></p>
      </section>
    </main>
  );
}
