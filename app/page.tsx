import Reveal from "./reveal";
import { EMAIL, SiteFooter, SiteHeader } from "./site-chrome";

/*
 * Engine-turned engraving: two sets of concentric hairline rings, one
 * centre-offset and slowly rotating. The interference between them reads
 * as guilloché — the pattern cut into a watch caseback.
 */
function Guilloche() {
  const rings = Array.from({ length: 44 }, (_, i) => 30 + i * 16);
  return (
    <svg
      className="guilloche"
      viewBox="0 0 1500 1500"
      aria-hidden="true"
      fill="none"
    >
      <g stroke="currentColor" strokeWidth="0.6">
        {rings.map((r) => (
          <circle key={`a${r}`} cx="750" cy="750" r={r} />
        ))}
      </g>
      <g className="g-rotor" stroke="currentColor" strokeWidth="0.6">
        {rings.map((r) => (
          <circle key={`b${r}`} cx="758" cy="744" r={r} />
        ))}
      </g>
    </svg>
  );
}

const projects = [
  {
    ref: "IL–01",
    name: "Slimmer",
    desc: "A women's fitness and body-transformation app for iOS. A personal plan that adapts as the body does — and a coach that never sleeps.",
    specs: [
      "Personalised 28-day plans",
      "AI progress analysis",
      "Calorie scanner",
      "24/7 AI coach",
    ],
    status: "iOS · In development",
    proof: null as string | null,
    active: true,
  },
  {
    ref: "IL–02",
    name: "CV Lab",
    desc: "An AI tool that writes a customised CV for each job application — tailored to the role, not recycled from the last one.",
    specs: ["Per-application tailoring", "AI-generated CVs"],
    status: "Shipped",
    proof: "£5,000+ revenue",
    active: false,
  },
  {
    ref: "IL–03",
    name: "Winter Arc 26",
    desc: "A men's discipline and focus app for iOS. Daily tasks verified by camera, a ranked ladder to climb, and a lock-mode that keeps distracting apps shut.",
    specs: [
      "Camera-verified daily tasks",
      "ELO ranked ladder · Bronze → Top 500",
      "Focus lock-mode",
    ],
    status: "iOS · In development",
    proof: null,
    active: true,
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main>
        <section className="hero">
          <Guilloche />
          <div className="shell hero-inner">
            <p className="eyebrow hero-eyebrow hero-rise d1">
              Newcastle upon Tyne · United Kingdom
            </p>
            <h1 className="wordmark hero-rise d2">
              INCOGNITO
              <br />
              LABS
            </h1>
            <p className="tagline hero-rise d3">
              A Newcastle studio building iOS and AI-powered mobile
              applications.
            </p>
            <p className="subline hero-rise d4">
              Software for people who want to disappear from distractions and
              get better at what they care about.
            </p>
            <div className="status-row hero-rise d5">
              <span className="status-live">
                <span className="dot" />
                Currently building — Slimmer · Winter Arc 26
              </span>
              <span className="status-sep">/</span>
              <span>CV Lab shipped · £5,000+ revenue</span>
            </div>
          </div>
        </section>

        <section className="section" id="work">
          <div className="shell">
            <Reveal>
              <div className="section-head">
                <h2 className="section-title">The Register</h2>
                <p className="eyebrow">Selected work</p>
              </div>
            </Reveal>
            {projects.map((p, i) => (
              <Reveal key={p.ref} delay={i * 80}>
                <article className="entry">
                  <p className="entry-ref">{p.ref}</p>
                  <div>
                    <h3 className="entry-name">{p.name}</h3>
                    <p className="entry-desc">{p.desc}</p>
                    <ul className="entry-specs">
                      {p.specs.map((s) => (
                        <li className="spec" key={s}>
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="entry-status">
                    <span className="status-chip">
                      {p.active && <span className="dot" />}
                      {p.status}
                    </span>
                    {p.proof && <span className="figure-brass">{p.proof}</span>}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section" id="studio">
          <div className="shell">
            <Reveal>
              <div className="section-head">
                <h2 className="section-title">The Studio</h2>
                <p className="eyebrow">Est. Newcastle</p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="studio-grid">
                <div className="studio-note">
                  <p>
                    Incognito Labs is a small studio in Newcastle,{" "}
                    <strong>United Kingdom</strong>. We build focused tools —
                    apps that remove noise rather than add to it.
                  </p>
                  <p>
                    Fewer features, chosen carefully. Shipped quietly,
                    maintained properly. If a product doesn&apos;t help someone
                    concentrate, improve, or switch the rest of the world off,
                    we don&apos;t build it.
                  </p>
                </div>
                <div className="contact-block">
                  <p className="contact-label">Enquiries</p>
                  <a className="contact-mail" href={`mailto:${EMAIL}`}>
                    {EMAIL}
                  </a>
                  <p className="contact-place">
                    Newcastle upon Tyne · United Kingdom
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
