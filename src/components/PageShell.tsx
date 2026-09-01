import Header from "./Header";
import MobileMenu from "./MobileMenu";
import VisitMap from "./VisitMap";
import Footer from "./Footer";
import Widgets from "./Widgets";

type Props = {
  children: React.ReactNode;
  /** nav key to highlight: treatments | pricing | smile-gallery | for-patients | about | contact */
  active?: string;
  /** solid navy header (inner pages) vs transparent over a photo hero (home/booking) */
  solid?: boolean;
  /** body-scoping class for page-specific CSS, e.g. "page-inset" */
  pageClass?: string;
  /** extra class on the shared Visit/map section, e.g. "home_map" on the homepage */
  mapClass?: string;
};

export default function PageShell({ children, active = "", solid = true, pageClass = "", mapClass = "" }: Props) {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header active={active} solid={solid} />
      <MobileMenu />
      <main id="main" className={pageClass}>{children}</main>
      <VisitMap className={mapClass} />
      <Footer />
      <Widgets />
    </>
  );
}
