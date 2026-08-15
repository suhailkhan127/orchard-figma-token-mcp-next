import Link from "next/link";

const MCaret = () => (
  <svg className="caret" width="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}><path d="M6 9l6 6 6-6" /></svg>
);

export default function MobileMenu() {
  return (
    <div className="mobile-menu" id="mobile-menu" aria-label="Mobile navigation">
      <div className="mobile-menu__item has-sub">
        <a className="mobile-menu__link" href="#">Treatments <MCaret /></a>
        <div className="mobile-menu__sub">
          <Link href="/how-to-choose-orthodontist">Invisalign®</Link><Link href="/inset">Damon Braces</Link><Link href="/inset">NHS Braces</Link><Link href="/inset">Carriere Motion</Link><Link href="/how-remote-monitoring-works">AI Monitoring</Link><Link href="/inset">Cosmetic Dentistry</Link>
        </div>
      </div>
      <div className="mobile-menu__item"><Link className="mobile-menu__link" href="/pricing">Pricing</Link></div>
      <div className="mobile-menu__item"><Link className="mobile-menu__link" href="/smile-gallery">Smile Gallery</Link></div>
      <div className="mobile-menu__item has-sub">
        <a className="mobile-menu__link" href="#">For Patients <MCaret /></a>
        <div className="mobile-menu__sub"><Link href="/booking">New Patients</Link><Link href="/pricing">Finance Options</Link><Link href="/inset">FAQs</Link></div>
      </div>
      <div className="mobile-menu__item has-sub">
        <a className="mobile-menu__link" href="#">About Us <MCaret /></a>
        <div className="mobile-menu__sub"><Link href="/meet-team">Meet the Team</Link><Link href="/meet-team">Award Winning Team</Link><Link href="/blog">Blog</Link></div>
      </div>
      <div className="mobile-menu__item"><Link className="mobile-menu__link" href="/contact">Contact Us</Link></div>
      <div className="mobile-menu__cta"><Link className="btn btn--green" href="/booking">Free Consultation</Link></div>
    </div>
  );
}
