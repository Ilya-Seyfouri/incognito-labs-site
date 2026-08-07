import type { Metadata } from "next";
import Link from "next/link";
import { EMAIL, SiteFooter, SiteHeader } from "../../site-chrome";

export const metadata: Metadata = {
  title: "Arc 26 — Support",
  description:
    "Get help with Winter Arc 26. Email ilya@incognitolabs.org and we'll reply within 24 hours.",
};

const faqs = [
  {
    q: "How do I cancel my subscription?",
    a: (
      <>
        On your iPhone: Settings → tap your name → Subscriptions → Winter Arc
        26 → Cancel Subscription. Deleting the app does not cancel a
        subscription.
      </>
    ),
  },
  {
    q: "How do I delete my account?",
    a: (
      <>
        In the app: Profile tab → gear icon → scroll to Account → Delete my
        account. This permanently removes your profile, history and posts.
      </>
    ),
  },
  {
    q: "How do I report or block someone in the community?",
    a: (
      <>
        Open the post, tap the &quot;…&quot; button in the bottom-right corner
        of the post or reply, then choose Report or Block. Blocking hides
        that person&apos;s posts and replies from you immediately. We review
        reports within 24 hours.
      </>
    ),
  },
  {
    q: "How do I restore a purchase on a new device?",
    a: <>Profile tab → gear icon → Restore Purchases.</>,
  },
  {
    q: "A photo task won't verify",
    a: (
      <>
        Task photos are checked automatically. Make sure the photo clearly
        shows the thing the task is asking for, in good light. You can retake
        as many times as you need.
      </>
    ),
  },
];

export default function Arc26Support() {
  return (
    <>
      <SiteHeader />

      <main className="support-page">
        <div className="shell support-shell">
          <header className="support-head">
            <p className="eyebrow">Winter Arc 26</p>
            <h1 className="support-title">Support</h1>
            <p className="support-intro">
              Need help with Winter Arc 26? Email us at{" "}
              <a className="support-inline-mail" href={`mailto:${EMAIL}`}>
                {EMAIL}
              </a>{" "}
              and we&apos;ll reply within 24 hours.
            </p>
          </header>

          <a className="mail-plate" href={`mailto:${EMAIL}`}>
            <span className="mail-plate-tick tl" aria-hidden="true" />
            <span className="mail-plate-tick tr" aria-hidden="true" />
            <span className="mail-plate-tick bl" aria-hidden="true" />
            <span className="mail-plate-tick br" aria-hidden="true" />
            <span className="mail-plate-label">Email support</span>
            <span className="mail-plate-address">{EMAIL}</span>
            <span className="mail-plate-note">Reply within 24 hours</span>
          </a>

          <section className="faq" aria-label="Common questions">
            <h2 className="faq-heading">Common questions</h2>
            <div className="faq-list">
              {faqs.map((item) => (
                <details className="faq-item" key={item.q}>
                  <summary className="faq-q">{item.q}</summary>
                  <p className="faq-a">{item.a}</p>
                </details>
              ))}
            </div>
          </section>

          <nav className="support-legal" aria-label="Legal">
            <Link className="support-legal-link" href="/arc26/privacy">
              Privacy Policy
            </Link>
            <span className="support-legal-sep" aria-hidden="true">
              ·
            </span>
            <Link className="support-legal-link" href="/arc26/terms">
              Terms of Use
            </Link>
          </nav>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
