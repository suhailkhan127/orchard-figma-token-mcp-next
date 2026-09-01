import Link from "next/link";

const Caret = () => (
  <svg className="caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}><path d="M6 9l6 6 6-6" /></svg>
);

type Props = { active?: string; solid?: boolean };

export default function Header({ active = "", solid = true }: Props) {
  const cls = (key: string) => "nav__link" + (active === key ? " active" : "");
  return (
    <header className={"site-header" + (solid ? " is-solid" : "")}>
      <div className="container navbar">
        <Link className="brand" href="/" aria-label="Orchard Orthodontics home">
          <img src="/images/logo.svg" alt="Orchard Orthodontics" />
        </Link>
        <div className="navbar__right">
          <div className="navbar__utility">
            <div className="langmenu">
              <button className="langmenu__toggle" aria-expanded="false" aria-haspopup="true">
                <img className="ico" src="/images/icons/language.svg" alt="" />
                Language <Caret />
              </button>
              <div className="langmenu__panel">
                <a href="#">🇪🇸 Spanish</a><a href="#">🇵🇹 Portuguese</a><a href="#">🇸🇦 Arabic (Saudi Arabia)</a><a href="#">🇨🇳 Chinese (Mandarin)</a>
              </div>
            </div>
            <Link href="/dentist-referral"><img className="ico" src="/images/icons/dentist.svg" alt="" /> Dentist Referrals</Link>
            <a href="#"><img className="ico" src="/images/icons/star.svg" alt="" /> Patient Info</a>
            <a className="topbar__phone" href="tel:02086497500"><img className="ico" src="/images/icons/phone.svg" alt="" /> 020 8649 7500</a>
          </div>
          <div className="navbar__bottom">
            <nav className="nav" aria-label="Primary">
              <div className="nav__item has-dropdown">
                <a className={cls("treatments")} href="#">Treatments <Caret /></a>
                <div className="dropdown">
                  <Link href="/how-to-choose-orthodontist">Invisalign®</Link><Link href="/inset">Damon Braces</Link><Link href="/inset">NHS Braces</Link><Link href="/inset">Carriere Motion</Link><Link href="/how-remote-monitoring-works">AI Monitoring</Link><Link href="/inset">Cosmetic Dentistry</Link>
                </div>
              </div>
              <div className="nav__item"><Link className={cls("pricing")} href="/pricing">Pricing</Link></div>
              <div className="nav__item"><Link className={cls("smile-gallery")} href="/smile-gallery">Smile Gallery</Link></div>
              <div className="nav__item has-dropdown">
                <a className={cls("for-patients")} href="#">For Patients <Caret /></a>
                <div className="dropdown"><Link href="/booking">New Patients</Link><Link href="/pricing">Finance Options</Link><Link href="/inset">FAQs</Link></div>
              </div>
              <div className="nav__item has-dropdown">
                <a className={cls("about")} href="#">About Us <Caret /></a>
                <div className="dropdown"><Link href="/meet-team">Meet the Team</Link><Link href="/meet-team">Award Winning Team</Link><Link href="/blog">Blog</Link></div>
              </div>
              <div className="nav__item"><Link className={cls("contact")} href="/contact">Contact Us</Link></div>
            </nav>
            <Link className="btn btn--green btn--sm header__cta" href="/booking">Free Consultation</Link>
          </div>
        </div>
        <a className="navbar__phone-m" href="tel:02086497500" aria-label="Call us">
          <svg className="ico" viewBox="0 0 24 24" fill="currentColor"><path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .8-.3 1z" /></svg>
        </a>
        <button className="burger" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-menu"><span></span><span></span><span></span></button>
      </div>
    </header>
  );
}
