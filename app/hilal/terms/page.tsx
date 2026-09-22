import type { Metadata } from "next";
import { EMAIL, SiteFooter, SiteHeader } from "../../site-chrome";
import { Clause, List } from "../../doc-components";

export const metadata: Metadata = {
  title: "Hilal — Terms of Use and End User Licence Agreement",
  description:
    "The terms governing your use of Hilal. Operated by incognito labs limited.",
};

const Mail = () => (
  <a className="doc-link" href={`mailto:${EMAIL}`}>
    {EMAIL}
  </a>
);

export default function HilalTerms() {
  return (
    <>
      <SiteHeader />

      <main className="doc-page">
        <article className="doc doc-body">
          <header className="doc-head">
            <h1 className="doc-title">
              Hilal — Terms of Use and End User Licence Agreement
            </h1>
            <p className="doc-updated">Effective date: 22/09/2026</p>
          </header>

          <div className="doc-lede">
            <p>
              These terms are a legal agreement between you and INCOGNITO LABS
              LIMITED, covering your use of the Hilal mobile application
              (&quot;the app&quot;).
            </p>
            <p>
              By downloading or using the app you accept these terms. If you do
              not accept them, do not use the app.
            </p>
          </div>

          <Clause no="1." title="Licence">
            <p>
              We grant you a personal, non-exclusive, non-transferable,
              revocable licence to use the app on Apple-branded devices you own
              or control, as permitted by the App Store Terms of Service. The
              app is licensed, not sold.
            </p>
            <p>
              You may not: copy or redistribute the app; reverse-engineer,
              decompile or disassemble it except where that right cannot
              lawfully be excluded; rent, lease, sublicense or sell it; remove
              proprietary notices; extract or redistribute its bundled texts as
              a dataset; or use it to build a competing product.
            </p>
          </Clause>

          <Clause no="2." title="Relationship with Apple">
            <p>
              These terms are between you and us only — not with Apple. Apple is
              not responsible for the app or its content.
            </p>
            <List
              items={[
                <>
                  Apple has no obligation to provide maintenance or support for
                  the app. Support requests should come to us at <Mail />
                </>,
                "If the app fails to conform to any applicable warranty, you may notify Apple and Apple will refund the purchase price. To the maximum extent permitted by law, Apple has no other warranty obligation.",
                "We, not Apple, are responsible for addressing any claim that the app or your use of it infringes intellectual property rights, fails to conform to legal requirements, or gives rise to product liability or consumer protection claims.",
                "You confirm you are not located in a country subject to a U.S. Government embargo or designated as a \"terrorist supporting\" country, and are not on any U.S. Government list of prohibited or restricted parties.",
                "Apple and its subsidiaries are third-party beneficiaries of these terms and may enforce them against you.",
              ]}
            />
          </Clause>

          <Clause no="3." title="No account required">
            <p>
              Hilal has no accounts and no sign-in. Everything you do in the app
              — your reading progress, bookmarks, notes and preferences — stays
              on your device. We hold nothing for you, and we cannot recover
              anything if you delete the app or lose your device.
            </p>
          </Clause>

          <Clause no="4." title="Price">
            <p>
              Hilal is currently free to use. If we introduce paid features in
              future, they will be sold through the App Store, these terms will
              be updated before that happens, and nothing you already have will
              be taken away without notice.
            </p>
          </Clause>

          <Clause no="5." title="Religious content — please read" flag>
            <p>
              Hilal presents hadith texts, translations and supporting material
              for reading and memorisation. It is a reading tool, not a source
              of religious authority.
            </p>
            <List
              items={[
                "The app does not issue rulings and is not a substitute for a qualified scholar.",
                "Translations are interpretations. Where a matter affects how you practise, consult someone qualified rather than relying on the app.",
                "Any automated feature that helps you search or find relevant texts is a retrieval aid. It does not interpret, and it should not be treated as giving an opinion.",
              ]}
            />
          </Clause>

          <Clause no="6." title="Texts, translations and attribution">
            <p>
              The hadith texts in the app are classical works. The translations,
              chapter arrangements and any supporting commentary are used under
              licence from, or with permission of, their respective rights
              holders, and remain their property. Attribution appears in the app
              where required.
            </p>
            <p>
              You may quote from the app for personal, educational or devotional
              use with appropriate attribution. You may not extract the
              collection wholesale, republish it, or use it to build another
              product or dataset.
            </p>
            <p>
              If you believe anything in the app infringes your rights, email{" "}
              <Mail /> and we will act promptly.
            </p>
          </Clause>

          <Clause no="7." title="Acceptable use">
            <p>
              You must not: access the app by any means other than the published
              interface; attempt to gain unauthorised access to our systems;
              interfere with the app&apos;s operation; or extract its bundled
              content in bulk.
            </p>
          </Clause>

          <Clause no="8." title="Our intellectual property">
            <p>
              The app, its design, code, artwork, copy and branding are owned by
              us or our licensors and protected by intellectual property law.
              These terms grant you no rights to them beyond the licence in
              section 1. This does not extend to the underlying classical texts,
              which are not ours.
            </p>
          </Clause>

          <Clause no="9." title="Availability">
            <p>
              We aim to keep the app working but do not guarantee it will be
              uninterrupted or error-free. Features may change. We may
              discontinue the app or any feature, giving reasonable notice where
              we can.
            </p>
          </Clause>

          <Clause no="10." title="Termination">
            <p>
              You may stop using the app at any time by deleting it. Deleting
              the app removes everything stored on your device.
            </p>
            <p>
              We may terminate your licence if you breach these terms. On
              termination your licence ends and you must stop using the app.
            </p>
          </Clause>

          <Clause no="11." title="Warranties and liability">
            <p>
              Except as set out in these terms and to the extent permitted by
              law, the app is provided &quot;as is&quot; without warranties of
              any kind. We do not warrant that any translation or text is free
              of error.
            </p>
            <p>
              Nothing in these terms limits or excludes our liability for: death
              or personal injury caused by our negligence; fraud or fraudulent
              misrepresentation; or any liability that cannot lawfully be
              limited — including your non-excludable rights under the Consumer
              Rights Act 2015.
            </p>
            <p>
              Subject to that, we are not liable for: indirect or consequential
              loss; loss of data stored on your device; or loss caused by your
              reliance on any text, translation or interpretation presented in
              the app. Our total liability for any claim is limited to the
              amount you paid us in the 12 months before the claim arose.
            </p>
          </Clause>

          <Clause no="12." title="Changes to these terms">
            <p>
              We may update these terms. We&apos;ll change the effective date
              above and, for significant changes, tell you in the app.
              Continuing to use the app after a change means you accept the
              updated terms.
            </p>
          </Clause>

          <Clause no="13." title="Governing law">
            <p>
              These terms are governed by the laws of England and Wales, and the
              courts of England and Wales have exclusive jurisdiction. If you
              live elsewhere in the UK or in the EEA, you keep the benefit of
              any mandatory consumer protections of your home country and may
              bring proceedings there.
            </p>
          </Clause>

          <Clause no="14." title="Contact">
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
