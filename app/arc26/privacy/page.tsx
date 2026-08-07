import type { Metadata } from "next";
import { EMAIL, SiteFooter, SiteHeader } from "../../site-chrome";
import { Clause, List } from "../../doc-components";

export const metadata: Metadata = {
  title: "Arc 26 — Privacy Policy",
  description:
    "How Winter Arc 26 handles your data. Operated by incognito labs limited.",
};

const Mail = () => (
  <a className="doc-link" href={`mailto:${EMAIL}`}>
    {EMAIL}
  </a>
);

const sharing = [
  ["Google Firebase", "Sign-in, database, file storage, push notifications"],
  ["OpenAI", "Task photo verification, AI coach responses, content moderation"],
  ["RevenueCat", "Managing your subscription"],
  ["Apple", "Sign in with Apple, App Store payments, notifications"],
];

export default function Arc26Privacy() {
  return (
    <>
      <SiteHeader />

      <main className="doc-page">
        <article className="doc doc-body">
          <header className="doc-head">
            <h1 className="doc-title">Winter Arc 26 — Privacy Policy</h1>
            <p className="doc-updated">Last updated: 07/08/2026</p>
          </header>

          <div className="doc-lede">
            <p>
              Winter Arc 26 (&quot;the app&quot;) is operated by incognito labs
              limited. We are the data controller for the personal data
              described in this policy.
            </p>
            <p>
              We built this app to help you spend less time on your phone. We do
              not sell your data, we do not run advertising, and we do not use
              third-party analytics or tracking SDKs.
            </p>
            <p>
              Questions, requests or complaints: <Mail />
            </p>
          </div>

          <Clause no="1." title="What we collect">
            <h3 className="doc-sub">Information you give us</h3>
            <List
              items={[
                "Username — a public handle you choose. Visible to all users on the community feed and leaderboard.",
                "Age — a number you enter during setup, used to personalise your results screen. We do not store your date of birth.",
                "Sign in with Apple identifier — and an email address if you choose to share it. If you use Apple's Hide My Email, we only ever see the relay address.",
                "Your tasks and daily progress — the habits you configure, which you complete each day, and your alarm times.",
                "Your commitment pledge — the sentence you type during setup.",
                "Setup answers — such as your estimated distraction hours and the habit you want to quit.",
                "Community content — posts, replies and reactions you choose to publish.",
                "Motivation media — any images or video you upload to the Jarvis feature.",
              ]}
            />

            <h3 className="doc-sub">Information created by using the app</h3>
            <List
              items={[
                "ELO score, rank, streak, and daily completion history.",
                "Focus session records (start time, duration, outcome).",
                "Subscription status.",
              ]}
            />

            <h3 className="doc-sub">Information collected automatically</h3>
            <List
              items={[
                "A Firebase anonymous user ID, created on first launch before you sign in.",
                "A push notification token, if you allow notifications.",
                "Basic technical information needed to deliver the service, such as app version and device type.",
              ]}
            />

            <h3 className="doc-sub">What we do not collect</h3>
            <List
              items={[
                "We do not collect your location.",
                "We do not collect your contacts, calendar, or photo library. The app cannot access your camera roll.",
                "We do not use advertising identifiers (IDFA) and do not track you across other apps or websites.",
                "We do not use analytics or crash-reporting SDKs.",
              ]}
            />
          </Clause>

          <Clause
            no="2."
            title="Task verification photos — read this section"
            flag
          >
            <p>
              When you complete a photo-verified task, the app opens the camera
              and you take a live photo.
            </p>
            <p>
              That photo is uploaded to our server and sent to OpenAI to be
              analysed. It is checked against the requirements for that specific
              task, a pass or fail result is returned, and the image is then
              discarded. We do not store it, we do not save it to your photo
              library, and it is not attached to your account or shown to
              anyone.
            </p>
            <p>
              We are being explicit because the analysis cannot happen on your
              device alone. If you would rather no photo of yours ever leaves
              your phone, choose check-off tasks instead of photo-verified ones
              — they work without the camera.
            </p>
            <p>
              OpenAI processes this data as our service provider under its API
              terms, which state that API data is not used to train its models.
            </p>
          </Clause>

          <Clause no="3." title="Blocked apps and Screen Time">
            <p>
              Winter Arc 26 uses Apple&apos;s Screen Time (Family Controls)
              framework to block apps during a focus session.
            </p>
            <p>
              Your app selections never leave your device. Apple provides them
              to us as opaque tokens that cannot be read or reversed. We cannot
              see which apps you chose, we do not transmit that selection to our
              servers, and it is never stored in our database. We use this data
              only to power the blocking feature you asked for, and for nothing
              else.
            </p>
          </Clause>

          <Clause no="4." title="The AI coach">
            <p>
              If you try to open a blocked app, the app may present a short
              conversation with an AI coach.
            </p>
            <p>
              Your messages, along with limited context about your current
              progress (such as how many tasks you have left today and your
              streak length), are sent to OpenAI to generate a response.
              Conversations are not stored on our servers after the session
              ends.
            </p>
            <p>
              Please don&apos;t share sensitive personal information — financial
              details, passwords, health information — with the coach.
            </p>
          </Clause>

          <Clause no="5." title="What is public">
            <p>The following are visible to other users of the app:</p>
            <List
              items={[
                "Your username, ELO score, rank, streak and equipped cosmetics.",
                "Your posts, replies and reactions on the community feed.",
                "Your public profile, including your activity heatmap.",
              ]}
            />
            <p>
              Your task photos, pledge, age, email address and blocked-app
              selections are never public.
            </p>
            <p>
              Community content is automatically screened for harmful and
              explicit material before it appears. Content that breaks our rules
              may be removed and may affect your score.
            </p>
          </Clause>

          <Clause no="6." title="Why we're allowed to process it (legal basis)">
            <p>Under UK and EU data protection law we rely on:</p>
            <List
              items={[
                "Contract — to give you an account, run your tasks and streaks, and manage your subscription.",
                "Legitimate interests — to keep the community safe, prevent abuse, and keep the app working.",
                "Consent — for camera access, notifications and Screen Time, each of which you grant through an iOS prompt and can withdraw in Settings at any time.",
                "Legal obligation — where we must keep records or respond to lawful requests.",
              ]}
            />
          </Clause>

          <Clause no="7." title="Who we share it with">
            <p>
              We do not sell or rent your personal data. We share it only with
              the following providers, each acting on our instructions:
            </p>
            <div className="doc-table-wrap">
              <table className="doc-table">
                <thead>
                  <tr>
                    <th scope="col">Provider</th>
                    <th scope="col">What for</th>
                  </tr>
                </thead>
                <tbody>
                  {sharing.map(([provider, purpose]) => (
                    <tr key={provider}>
                      <th scope="row">{provider}</th>
                      <td>{purpose}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              We never see your card details. Payments are handled entirely by
              Apple.
            </p>
            <p>
              We may also disclose data where required by law, or to protect the
              rights and safety of our users.
            </p>
          </Clause>

          <Clause no="8." title="Data leaving the UK">
            <p>
              Firebase and OpenAI process data on servers in the United States.
              Where personal data is transferred outside the UK or EEA, we rely
              on the UK International Data Transfer Addendum and the European
              Commission&apos;s Standard Contractual Clauses to protect it.
            </p>
          </Clause>

          <Clause no="9." title="How long we keep it">
            <List
              items={[
                "Account data — for as long as your account exists.",
                "Task photos — not retained. Analysed and discarded.",
                "Coach conversations — not retained after the session.",
                "Community posts — until you delete them or your account.",
              ]}
            />
            <p>
              When you delete your account we delete your profile, history and
              community content, except where we must keep something to meet a
              legal obligation.
            </p>
          </Clause>

          <Clause no="10." title="Your rights">
            <p>
              You have the right to access your data, correct it, delete it,
              restrict or object to how we use it, receive a copy in a portable
              format, and withdraw consent at any time.
            </p>
            <p>
              You can delete your account and all associated data yourself:
              Profile → Settings → Delete my account.
            </p>
            <p>
              For anything else, email <Mail /> We will respond within one
              month.
            </p>
            <p>
              If you&apos;re unhappy with our response, you can complain to the
              UK Information Commissioner&apos;s Office at{" "}
              <a
                className="doc-link"
                href="https://ico.org.uk"
                rel="noopener noreferrer"
              >
                ico.org.uk
              </a>
              , or to your local supervisory authority if you&apos;re in the
              EEA.
            </p>
          </Clause>

          <Clause no="11." title="Children">
            <p>
              Winter Arc 26 is not intended for children under 13, and you must
              be at least 13 to create an account. We do not knowingly collect
              data from children under 13. If you believe a child has given us
              personal data, email us and we will delete it.
            </p>
          </Clause>

          <Clause no="12." title="Security">
            <p>
              We use encryption in transit, Apple&apos;s Sign in with Apple for
              authentication, and database rules that prevent one user reading
              another&apos;s private data. No system is completely secure, but
              we work to keep your data protected and will notify you and the
              relevant authority if a breach affects your rights.
            </p>
          </Clause>

          <Clause no="13." title="Changes">
            <p>
              We may update this policy. The date at the top shows when it last
              changed, and we&apos;ll tell you in the app if a change is
              significant.
            </p>
          </Clause>
        </article>
      </main>

      <SiteFooter />
    </>
  );
}
