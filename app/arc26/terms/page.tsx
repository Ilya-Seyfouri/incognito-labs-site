import type { Metadata } from "next";
import { EMAIL, SiteFooter, SiteHeader } from "../../site-chrome";
import { Clause, List } from "../../doc-components";

export const metadata: Metadata = {
  title: "Arc 26 — Terms of Use and End User Licence Agreement",
  description:
    "The terms governing your use of Winter Arc 26. Operated by incognito labs limited.",
};

const Mail = () => (
  <a className="doc-link" href={`mailto:${EMAIL}`}>
    {EMAIL}
  </a>
);

export default function Arc26Terms() {
  return (
    <>
      <SiteHeader />

      <main className="doc-page">
        <article className="doc doc-body">
          <header className="doc-head">
            <h1 className="doc-title">
              Winter Arc 26 — Terms of Use and End User Licence Agreement
            </h1>
            <p className="doc-updated">Effective date: 07/08/2026</p>
          </header>

          <div className="doc-lede">
            <p>
              These terms are a legal agreement between you and incognito labs
              limited, covering your use of the Winter Arc 26 mobile
              application (&quot;the app&quot;).
            </p>
            <p>
              By downloading or using the app you accept these terms. If you
              do not accept them, do not use the app.
            </p>
            <p>You must be at least 13 years old to use Winter Arc 26.</p>
          </div>

          <Clause no="1." title="Licence">
            <p>
              We grant you a personal, non-exclusive, non-transferable,
              revocable licence to use the app on Apple-branded devices you
              own or control, as permitted by the App Store Terms of Service.
              The app is licensed, not sold.
            </p>
            <p>
              You may not: copy or redistribute the app; reverse-engineer,
              decompile or disassemble it except where that right cannot
              lawfully be excluded; rent, lease, sublicense or sell it; remove
              proprietary notices; or use it to build a competing product.
            </p>
          </Clause>

          <Clause no="2." title="Relationship with Apple">
            <p>
              These terms are between you and us only — not with Apple. Apple
              is not responsible for the app or its content.
            </p>
            <List
              items={[
                "Apple has no obligation to provide maintenance or support for the app. Support requests should come to us at ilya@incognitolabs.org,",
                "If the app fails to conform to any applicable warranty, you may notify Apple and Apple will refund the purchase price. To the maximum extent permitted by law, Apple has no other warranty obligation.",
                "We, not Apple, are responsible for addressing any claim that the app or your use of it infringes intellectual property rights, fails to conform to legal requirements, or gives rise to product liability or consumer protection claims.",
                "You confirm you are not located in a country subject to a U.S. Government embargo or designated as a \"terrorist supporting\" country, and are not on any U.S. Government list of prohibited or restricted parties.",
                "Apple and its subsidiaries are third-party beneficiaries of these terms and may enforce them against you.",
              ]}
            />
          </Clause>

          <Clause no="3." title="Your account">
            <p>
              You are responsible for activity on your account and for
              keeping your sign-in credentials secure. Provide accurate
              information. One account per person. You may delete your
              account at any time from Profile → Settings → Delete my
              account.
            </p>
          </Clause>

          <Clause no="4." title="Subscriptions and payment">
            <p>
              Winter Arc 26 offers auto-renewing subscriptions purchased
              through the App Store.
            </p>
            <List
              items={[
                "Payment is charged to your Apple ID at confirmation of purchase.",
                "Your subscription renews automatically unless auto-renew is turned off at least 24 hours before the end of the current period.",
                "Your Apple ID is charged for renewal within 24 hours before the end of the current period, at the price shown at purchase.",
                "Where a free trial is offered, any unused portion is forfeited if you buy a subscription during the trial. Trials convert to a paid subscription unless cancelled before they end.",
                "Manage or cancel your subscription in Settings → your name → Subscriptions on your device. Deleting the app does not cancel a subscription.",
                "Prices may change. We'll give notice, and changes take effect at your next renewal.",
              ]}
            />
            <p>
              <strong className="doc-strong">Refunds.</strong> All purchases
              are processed by Apple, and refunds are handled by Apple under
              the App Store Terms of Service, not by us. We cannot issue
              refunds directly. Nothing here affects your statutory rights as
              a consumer under the Consumer Rights Act 2015 or the Consumer
              Contracts Regulations 2013.
            </p>
          </Clause>

          <Clause no="5." title="User-generated content">
            <p>
              Winter Arc 26 includes a community feed where you can post and
              reply.
            </p>

            <h3 className="doc-sub">5.1 Zero tolerance</h3>
            <p>
              We operate a zero-tolerance policy for objectionable content and
              abusive behaviour. Content that breaches these terms will be
              removed, and accounts responsible may be suspended or
              terminated without notice.
            </p>
            <p>We aim to review reported content and act within 24 hours.</p>

            <h3 className="doc-sub">5.2 What you must not post</h3>
            <List
              items={[
                "Anything unlawful, or that promotes illegal activity.",
                "Hate speech, harassment, bullying, threats, or content attacking people on the basis of race, ethnicity, religion, sex, gender identity, sexual orientation, disability or any other protected characteristic.",
                "Sexually explicit or pornographic material.",
                "Graphic violence or gore.",
                "Content that encourages or glorifies self-harm, suicide, eating disorders, or substance abuse.",
                "Content that infringes anyone's intellectual property or privacy.",
                "Spam, scams, advertising, or repetitive posting.",
                "Impersonation of another person.",
                "Anyone else's personal information.",
              ]}
            />

            <h3 className="doc-sub">5.3 Reporting and blocking</h3>
            <p>
              Every post and reply can be reported from within the app. You
              can also block any user, which hides their content from you and
              prevents them contacting you. Reports are reviewed and acted
              on; we will remove offending content and eject repeat
              offenders.
            </p>
            <p>
              You can also email <Mail />
            </p>

            <h3 className="doc-sub">5.4 Your content</h3>
            <p>
              You keep ownership of what you post. You grant us a worldwide,
              royalty-free, non-exclusive licence to host, store, display and
              distribute it within the app for the purpose of running the
              service. This licence ends when you delete the content or your
              account, except for copies we must retain by law.
            </p>
            <p>You confirm you have the right to post what you post.</p>

            <h3 className="doc-sub">5.5 Moderation</h3>
            <p>
              Content is automatically screened before publication and may be
              removed automatically. We may also remove content, restrict
              features, or terminate accounts at our discretion where these
              terms are breached. Because moderation is partly automated, it
              is not perfect — reporting content helps us.
            </p>
          </Clause>

          <Clause no="6." title="Acceptable use">
            <p>
              You must not: access the app by any means other than the
              published interface; attempt to gain unauthorised access to our
              systems or another user&apos;s account; interfere with or
              overload our infrastructure; scrape or bulk-collect data;
              manipulate scores, streaks, rankings or rewards through
              automation, exploits, or fake activity; or submit false or
              manipulated photographs to task verification.
            </p>
            <p>
              We may reset scores or terminate accounts we reasonably believe
              are being manipulated.
            </p>
          </Clause>

          <Clause no="7." title="Virtual items and rewards">
            <p>
              The app includes virtual items — ELO score, ranks, streaks,
              crates, cosmetics and banked reward time. These:
            </p>
            <List
              items={[
                "have no monetary value and cannot be exchanged for money or transferred;",
                "are licensed to you for use within the app only, not owned by you;",
                "may be modified, reset or removed as the app develops;",
                "are lost when your account is deleted.",
              ]}
            />
            <p>
              Crates are earned through app activity and are not sold. Drop
              odds are shown in the app.
            </p>
          </Clause>

          <Clause no="8." title="Task verification and AI features">
            <p>
              Task verification uses automated image analysis, and the app
              includes an AI coach. Both are automated systems and may make
              mistakes — a valid photo may be rejected, or an invalid one
              accepted.
            </p>
            <p>
              The AI coach produces automatically generated responses. It is
              not a person, not a professional adviser, and its output should
              not be relied on as fact. Do not share sensitive personal
              information with it.
            </p>
          </Clause>

          <Clause no="9." title="App blocking and health">
            <p>
              Winter Arc 26 is not a safety or parental-control product and
              must not be relied on as one. App blocking uses Apple&apos;s
              Screen Time framework, is subject to the limitations of that
              framework, and can be bypassed through iOS Settings. Do not
              rely on it to prevent access to anything where the consequences
              of failure matter.
            </p>
            <p>
              Never rely on the app in an emergency. Blocking does not
              restrict phone calls or emergency services, but you should
              always be able to reach your device&apos;s emergency features
              directly.
            </p>
            <p>
              The app provides motivational and productivity content. It is
              not medical, psychological, or professional advice, and is not
              a treatment for any condition including addiction, anxiety or
              depression. If you are struggling with your mental health,
              please speak to a qualified professional or contact a support
              service in your country.
            </p>
          </Clause>

          <Clause no="10." title="Our intellectual property">
            <p>
              The app, its design, code, artwork, video, copy and branding
              are owned by us or our licensors and protected by intellectual
              property law. These terms grant you no rights to them beyond
              the licence in section 1.
            </p>
          </Clause>

          <Clause no="11." title="Availability">
            <p>
              We aim to keep the app available but do not guarantee it will
              be uninterrupted or error-free. Features may change, and parts
              of the app depend on third-party services outside our control.
              We may suspend or discontinue the app or any feature, giving
              reasonable notice where we can.
            </p>
          </Clause>

          <Clause no="12." title="Termination">
            <p>
              You may stop using the app at any time and delete your account
              from Settings.
            </p>
            <p>
              We may suspend or terminate your access immediately if you
              breach these terms, manipulate the service, or use it in a way
              that harms other users or us. On termination your licence ends.
              Any subscription is managed through Apple and must be cancelled
              there.
            </p>
          </Clause>

          <Clause no="13." title="Warranties and liability">
            <p>
              Except as set out in these terms and to the extent permitted by
              law, the app is provided &quot;as is&quot; without warranties of
              any kind.
            </p>
            <p>
              Nothing in these terms limits or excludes our liability for:
              death or personal injury caused by our negligence; fraud or
              fraudulent misrepresentation; or any liability that cannot
              lawfully be limited — including your non-excludable rights
              under the Consumer Rights Act 2015.
            </p>
            <p>
              Subject to that, we are not liable for: indirect or
              consequential loss; loss of profit, revenue, data or
              opportunity; loss caused by your reliance on the app for
              productivity, wellbeing or digital-health outcomes; or the acts
              or content of other users. Our total liability for any claim is
              limited to the amount you paid us in the 12 months before the
              claim arose.
            </p>
          </Clause>

          <Clause no="14." title="Changes to these terms">
            <p>
              We may update these terms. We&apos;ll change the effective date
              above and, for significant changes, tell you in the app.
              Continuing to use the app after a change means you accept the
              updated terms. If you don&apos;t accept them, stop using the app
              and delete your account.
            </p>
          </Clause>

          <Clause no="15." title="Governing law">
            <p>
              These terms are governed by the laws of England and Wales, and
              the courts of England and Wales have exclusive jurisdiction. If
              you live elsewhere in the UK or in the EEA, you keep the
              benefit of any mandatory consumer protections of your home
              country and may bring proceedings there.
            </p>
          </Clause>

          <Clause no="16." title="Contact">
            <p>
              <Mail />
            </p>
          </Clause>
        </article>
      </main>

      <SiteFooter />
    </>
  );
}
