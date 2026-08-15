import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <Link className="footer__logo" href="/"><img src="/images/tio-logo.svg" alt="tio" /></Link>
          <div className="footer__social">
            <a href="#" aria-label="Instagram"><img src="/images/social/ig.svg" alt="" /></a>
            <a href="#" aria-label="YouTube"><img src="/images/social/youtube.svg" alt="" /></a>
            <a href="#" aria-label="Facebook"><img src="/images/social/facebook.svg" alt="" /></a>
            <a href="#" aria-label="X (Twitter)"><img src="/images/social/x.svg" alt="" /></a>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="footer__meta">© Copyright 2025 <span>|</span> Orchard Orthodontics <span>|</span> All Rights Reserved</div>
          <div className="footer__legal"><a href="#">Privacy Policy</a><span>|</span><a href="#">Terms &amp; Conditions</a><span>|</span><a href="#">Cookies Policy</a></div>
        </div>
      </div>
    </footer>
  );
}
