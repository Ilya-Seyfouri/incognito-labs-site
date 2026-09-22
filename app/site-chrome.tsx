import Link from "next/link";

export const EMAIL = "ilya@incognitolabs.org";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="legal-name legal-name-link" href="/">
          INCOGNITO LABS <span className="ltd">LIMITED</span>
        </Link>
        <div className="header-meta">
          <span className="header-place">Newcastle · United Kingdom</span>
          <a className="header-link" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-id">
          <p className="legal-name">
            INCOGNITO LABS <span className="ltd">LIMITED</span>
          </p>
          <p className="eyebrow">iOS &amp; AI-powered mobile applications</p>
        </div>
        <div className="footer-meta">
          <a className="footer-mail" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
          <span>Newcastle upon Tyne · United Kingdom</span>
          <Link className="footer-mail" href="/arc26/privacy">
            Winter Arc 26 — Privacy policy
          </Link>
          <Link className="footer-mail" href="/arc26/terms">
            Winter Arc 26 — Terms &amp; EULA
          </Link>
          <Link className="footer-mail" href="/arc26/support">
            Winter Arc 26 — Support
          </Link>
          <Link className="footer-mail" href="/hilal/privacy">
            Hilal — Privacy policy
          </Link>
          <Link className="footer-mail" href="/hilal/terms">
            Hilal — Terms &amp; EULA
          </Link>
          <span>
            INCOGNITO LABS LIMITED · Registered in England &amp; Wales · 2026
          </span>
        </div>
      </div>
    </footer>
  );
}
