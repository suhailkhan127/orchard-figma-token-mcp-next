const PinIcon = () => <img className="ico" src="/images/icons/pin.svg" alt="" />;
const PhoneIcon = () => <img className="ico" src="/images/icons/phone.svg" alt="" />;
const MailIcon = () => <img className="ico" src="/images/icons/email.svg" alt="" />;
const MapsArrow = () => <img className="ico" src="/images/icons/open.svg" alt="" />;

export default function VisitMap({ className = "" }: { className?: string }) {
  return (
    <section className={"visit" + (className ? " " + className : "")}>
      <div className="visit__bg"><img src="/images/home/visit-bg.png" alt="" /></div>
      <div className="container visit__grid">
        <div className="reveal reveal--left">
          <span className="eyebrow">Find us</span>
          <h2>Visit Us</h2>
          <p className="visit__sub">Three specialist practices across South London and Surrey. Choose your nearest location for directions, opening hours and contact details.</p>
          <div className="locpick">
            <button className="locpick__btn is-active" data-loc="croydon">Croydon</button>
            <button className="locpick__btn" data-loc="brixton">Brixton</button>
            <button className="locpick__btn" data-loc="guildford">Guildford</button>
          </div>
          <div data-loc-panel="croydon">
            <div className="visit__row"><PinIcon /><span>114-118 Cherry Orchard Road, Croydon<br />Greater London, CR0 6BA</span></div>
            <div className="visit__row"><PhoneIcon /><a href="tel:02086497500">020 8649 7500</a></div>
            <div className="visit__row"><MailIcon /><a href="mailto:croydon@orchardortho.com">croydon@orchardortho.com</a></div>
            <div className="visit__row">
              <img className="ico" src="/images/icons/time.svg" alt="" />
              <div className="visit__hours">
                <span>Monday</span><span>9:00am – 5:00pm</span>
                <span>Tuesday – Wednesday</span><span>9:00am – 6:00pm</span>
                <span>Thursday</span><span>9:00am – 7:00pm</span>
                <span>Friday</span><span>9:00am – 5:00pm</span>
                <span>Saturday &amp; Sunday</span><span>Closed</span>
              </div>
            </div>
            <div className="visit__row"><MapsArrow /><a className="visit__maps" href="https://www.google.com/maps?q=114-118+Cherry+Orchard+Road+Croydon+CR0+6BA" target="_blank" rel="noopener">Open in Google Maps</a></div>
          </div>
          <div data-loc-panel="brixton" hidden>
            <div className="visit__row"><PinIcon /><span>8 Brixton Hill, Brixton<br />London, SW2 1EG</span></div>
            <div className="visit__row"><PhoneIcon /><a href="tel:02086497500">020 8649 7500</a></div>
            <div className="visit__row"><MailIcon /><a href="mailto:brixton@orchardortho.com">brixton@orchardortho.com</a></div>
            <div className="visit__row"><MapsArrow /><a className="visit__maps" href="https://www.google.com/maps?q=8+Brixton+Hill+London+SW2+1EG" target="_blank" rel="noopener">Open in Google Maps</a></div>
          </div>
          <div data-loc-panel="guildford" hidden>
            <div className="visit__row"><PinIcon /><span>Dental &amp; Implant Centre, 6 Faraday Road<br />Guildford, GU1 1EA</span></div>
            <div className="visit__row"><PhoneIcon /><a href="tel:02086497500">020 8649 7500</a></div>
            <div className="visit__row"><MailIcon /><a href="mailto:ref@orchardortho.com">ref@orchardortho.com</a></div>
            <div className="visit__row"><MapsArrow /><a className="visit__maps" href="https://www.google.com/maps?q=6+Faraday+Road+Guildford+GU1+1EA" target="_blank" rel="noopener">Open in Google Maps</a></div>
          </div>
        </div>
        <div className="reveal reveal--right visit__map">
          <iframe title="Orchard Orthodontics location map" src="https://www.google.com/maps?q=114-118+Cherry+Orchard+Road+Croydon+CR0+6BA&output=embed" />
          <img className="visit__pin" src="/images/map-pin.svg" alt="" />
        </div>
      </div>
    </section>
  );
}
