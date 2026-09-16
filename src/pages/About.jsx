import catherinePhoto from "../assets/images/Catherine.png";
import sanniPhoto from "../assets/images/Sanni.png";

function About() {
  return (
    <main className="page">
      {/* ABOUT HERO */}
      <section className="page-hero">
        <p className="section-label">ABOUT US</p>

        <h1>
          We believe hearing health deserves to be heard.
        </h1>

        <p>
          Sound of the Future is a youth-led nonprofit focused on hearing-health
          education, prevention, advocacy, accessibility, and amplifying Deaf
          and hard-of-hearing voices.
        </p>
      </section>

      {/* OUR STORY */}
      <section className="content-section">
        <div>
          <p className="section-label">OUR STORY</p>

          <h2>
            Started from a personal experience. Built for a larger community.
          </h2>
        </div>

        <div className="content-text">
          <p>
            Sound of the Future began with Catherine&apos;s own experience with
            hearing loss. In fourth grade, she failed a hearing test but was too
            scared to tell her parents, so she kept it a secret for almost two
            years. During that time, she quietly adapted by asking people to
            repeat themselves, positioning herself so she could hear from her
            better side, and sometimes pretending she understood conversations
            when she did not. As time went on, the effects became harder to
            ignore. In crowded school hallways, her friends&apos; voices often
            sounded muffled, background noise made conversations difficult to
            follow, and she began to realize that hearing loss was affecting
            more of her daily life than she wanted to admit.
          </p>

          <p>
            When Catherine shared her experience with Sanni, Sanni connected it
            to friends and family in her own life who had also struggled with
            hearing loss. Together, they realized how little young people are
            taught about hearing health compared with topics like nutrition,
            exercise, dental care, and mental health. They founded Sound of the
            Future with two goals: to help young people protect their hearing
            before preventable damage occurs and to build greater
            understanding, inclusion, and support for the Deaf and
            hard-of-hearing community.
          </p>
        </div>
      </section>

      {/* MEET THE FOUNDERS */}
      <section className="founders-section">
        <div className="founders-heading">
          <p className="section-label">MEET THE FOUNDERS</p>

          <h2>
            Two students. One shared mission.
          </h2>

          <p>
            Sound of the Future is led by two high school seniors in CFISD who
            turned personal experiences and a shared concern for hearing health
            into a growing youth-led organization.
          </p>
        </div>

        <div className="founders-grid">
          {/* CATHERINE */}
          <div className="founder-card">
            <img
              src={catherinePhoto}
              alt="Catherine Lin"
              className="founder-photo"
            />

            <h3>Catherine Lin</h3>

            <p className="founder-role">
              Co-Founder & CEO
            </p>

            <p>
              Catherine is a senior in high school in CFISD and the Co-Founder
              and CEO of Sound of the Future. Her personal experience with
              hearing loss inspired the organization&apos;s mission to make
              hearing-health education more accessible and to create greater
              understanding for the Deaf and hard-of-hearing community. She
              leads the organization&apos;s overall vision, outreach,
              partnerships, and growth.
            </p>
          </div>

          {/* SANNI */}
          <div className="founder-card">
            <img
              src={sanniPhoto}
              alt="Sanni Arimanda"
              className="founder-photo"
            />

            <h3>Sanni Arimanda</h3>

            <p className="founder-role">
              Co-Founder & COO
            </p>

            <p>
              Sanni is a senior in high school in CFISD and the Co-Founder and
              COO of Sound of the Future. She helps lead the organization&apos;s
              operations, programs, outreach, and community initiatives. Her
              connection to friends and family who have experienced hearing
              loss helped shape Sound of the Future&apos;s focus on prevention,
              inclusion, and youth advocacy.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="values-section">
        <p className="section-label">WHAT WE BELIEVE</p>

        <div className="values-grid">
          <div className="value-card">
            <h3>Education</h3>

            <p>
              People should understand how everyday choices can affect their
              hearing health and have the knowledge to protect it early.
            </p>
          </div>

          <div className="value-card">
            <h3>Accessibility</h3>

            <p>
              Hearing-health information and resources should be understandable,
              practical, and available to everyone.
            </p>
          </div>

          <div className="value-card">
            <h3>Representation</h3>

            <p>
              Deaf and hard-of-hearing voices should be included, respected, and
              represented in the conversations that affect them.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;