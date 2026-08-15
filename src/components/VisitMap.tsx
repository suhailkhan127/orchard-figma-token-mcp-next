const PinIcon = () => (
  <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M12 21s7-6.3 7-11a7 7 0 10-14 0c0 4.7 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></svg>
);
const PhoneIcon = () => (
  <svg className="ico" viewBox="0 0 24 24" fill="currentColor"><path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .8-.3 1z" /></svg>
);
const MailIcon = () => (
  <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>
);
const MapsArrow = () => (
  <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M7 17L17 7M9 7h8v8" /></svg>
);

export default function VisitMap() {
  return (
    <section className="visit">
      <div className="visit__bg"><img src="/images/home/visit-bg.png" alt="" loading="lazy" /></div>
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
              <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
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
          <iframe title="Orchard Orthodontics location map" loading="lazy" src="https://www.google.com/maps?q=114-118+Cherry+Orchard+Road+Croydon+CR0+6BA&output=embed" />
          <img className="visit__pin" src="/images/map-pin.svg" alt="" />
        </div>
      </div>
    </section>
  );
}
