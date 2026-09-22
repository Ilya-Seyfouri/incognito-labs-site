import type { Metadata } from "next";
import { EMAIL, SiteFooter, SiteHeader } from "../../site-chrome";
import { Clause, List } from "../../doc-components";

export const metadata: Metadata = {
  title: "Hilal — Privacy Policy",
  description:
    "How Hilal handles your data — it collects nothing. Operated by incognito labs limited.",
};

const Mail = () => (
  <a className="doc-link" href={`mailto:${EMAIL}`}>
    {EMAIL}
  </a>
);

export default function HilalPrivacy() {
  return (
    <>
      <SiteHeader />

      <main className="doc-page">
        <article className="doc doc-body">
          <header className="doc-head">
            <h1 className="doc-title">Hilal — Privacy Policy</h1>
            <p className="doc-updated">Last updated: 22/09/2026</p>
          </header>

          <div className="doc-lede">
            <p>
              Hilal (&quot;the app&quot;) is operated by INCOGNITO LABS LIMITED.
            </p>
            <p>
              <strong className="doc-strong">The short version.</strong> Hilal
              collects nothing. There are no accounts, no servers, and the app
              makes no network connections of any kind. Nothing you do in it
              reaches us or anyone else. There is no analytics, no advertising,
              and no tracking.
            </p>
            <p>
              This policy exists because the App Store requires one — not
              because there is much to disclose.
            </p>
            <p>
              Questions: <Mail />
            </p>
          </div>

          <Clause no="1." title="What stays on your device">
            <p>
              The app saves a small amount of information locally, using the
              standard iOS preferences store. None of it is transmitted
              anywhere:
            </p>
            <List
              items={[
                "A display name, if you enter one during setup. It is shown only to you, on your own screen.",
                "Your reading preferences — Arabic script style, translation choice, text size, interface style.",
                "Your reading and memorisation progress — what you have read, bookmarked, noted or practised.",
              ]}
            />
            <p>
              All of it lives on your device, is included in your own encrypted
              device backup if you use one, and is permanently deleted when you
              delete the app. We have no copy and cannot retrieve any of it.
            </p>
          </Clause>

          <Clause no="2." title="What we do not collect">
            <p>To be explicit, the app does not collect or transmit:</p>
            <List
              items={[
                "Your name, email address, or any contact details",
                "Your location",
                "Your contacts, calendar, photos or camera",
                "Any device or advertising identifier (no IDFA)",
                "Usage analytics, crash reports or diagnostics",
                "Anything at all, by any means",
              ]}
            />
          </Clause>

          <Clause no="3." title="No third parties">
            <p>
              The app contains no third-party SDKs, no analytics, no advertising
              networks and no social integrations. We share nothing with anyone,
              because we hold nothing.
            </p>
            <p>
              The app makes no network requests, so no data leaves your device
              in the course of using it.
            </p>
          </Clause>

          <Clause no="4." title="Payments">
            <p>
              The app is free. If paid features are introduced, payment will be
              handled entirely by Apple. We would never see your card details.
            </p>
          </Clause>

          <Clause no="5." title="Children">
            <p>
              The app collects no personal data from anyone, of any age. It is
              suitable for general audiences.
            </p>
          </Clause>

          <Clause no="6." title="Your rights">
            <p>
              Under UK and EU data protection law you have rights to access,
              correct, delete and port your personal data. Because we hold no
              personal data about you, there is nothing for us to provide,
              correct or erase — deleting the app removes everything.
            </p>
            <p>
              If you want to exercise a right or have a concern, email <Mail />{" "}
              and we will respond within one month. If you are unhappy with our
              response you can complain to the UK Information
              Commissioner&apos;s Office at{" "}
              <a
                className="doc-link"
                href="https://ico.org.uk"
                rel="noopener noreferrer"
              >
                ico.org.uk
              </a>
              , or to your local supervisory authority if you are in the EEA.
            </p>
          </Clause>

          <Clause no="7." title="Security">
            <p>
              Because nothing is transmitted or stored off your device, there is
              no server holding your data and no transmission to intercept.
              Information saved locally is protected by your device&apos;s own
              security and encryption.
            </p>
          </Clause>

          <Clause no="8." title="Changes">
            <p>
              We may update this policy. The date at the top shows when it last
              changed, and we&apos;ll tell you in the app if a change is
              significant. In particular, if we add a feature that sends
              anything off your device, we will update this policy and say so
              clearly before that feature ships.
            </p>
          </Clause>
        </article>
      </main>

      <SiteFooter />
    </>
  );
}
