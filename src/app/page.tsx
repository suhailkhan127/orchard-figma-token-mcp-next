import PageShell from "@/components/PageShell";

const CONTENT = `<!-- ===================== HERO ===================== -->
  <section class="hero">
    <div class="hero__bg"><video autoplay muted loop playsinline preload="auto" poster="/images/home/hero-bg.png"><source src="/videos/orchard-hero-bg-video.mp4" type="video/mp4"></video></div>
    <div class="hero__inner container">
      <h1>Your Smile Deserves <strong>a Specialist</strong></h1>
      <a class="btn btn--green" href="/booking">Book a Free Consultation</a>
    </div>
  </section>

  <!-- ===================== PROS TRUST (Declan Rice) ===================== -->
  <section class="pros">
    <div class="pros__bg"><img src="/images/home/pros-patients.png" alt="" loading="lazy"></div>
    <div class="container">
      <div class="pros__card reveal">
        <span class="eyebrow">Book a Free Consultation</span>
        <h2>When The Pros Trust Us,<br><strong>So Can You.</strong></h2>
        <p>England and Arsenal star Declan Rice entrusted us with his smile. Experience the same specialist orthodontic care.</p>
        <a class="btn btn--green" href="/booking">Book a Free Consultation</a>
        <div class="pros__attr"><b>Declan Rice</b><span>Premier League Footballer</span></div>
      </div>
    </div>
  </section>

  <!-- ===================== AWARDS + VIDEO TESTIMONIAL ===================== -->
  <section class="awards">
    <div class="awards__bg"><img src="/images/home/awards.png" alt="" loading="lazy"></div>
    <div class="container awards__head reveal">
      <h2>Best Patient Care <strong>Winners</strong></h2>
      <p>We are delighted to announce that we have won best patient care at the 2025 Private Dentistry Awards.</p>
      <a class="btn btn--white" href="#">Discover More</a>
    </div>
  </section>

  <!-- ===================== VIDEO TESTIMONIAL (moved out of .awards) ===================== -->
  <div class="container">
      <div class="vtest reveal">
        <span class="eyebrow">Video Testimonial</span>
        <h3>Real patients, <strong>real results</strong></h3>
        <div class="vtest__grid" data-carousel>
          <figure class="vcard"><div class="vcard__thumb"><img src="/images/home/vtest-1.png" alt="Maria Muller" loading="lazy"><button class="playbtn" aria-label="Play video"></button><span class="playbtn__label">Play Video</span></div><figcaption><b>Maria Muller</b><span>Invisalign</span></figcaption></figure>
          <figure class="vcard"><div class="vcard__thumb"><img src="/images/home/vtest-2.png" alt="Tom Wehner" loading="lazy"><button class="playbtn" aria-label="Play video"></button><span class="playbtn__label">Play Video</span></div><figcaption><b>Tom Wehner</b><span>Damon Braces</span></figcaption></figure>
          <figure class="vcard"><div class="vcard__thumb"><img src="/images/home/vtest-3.png" alt="Yvette Boehm" loading="lazy"><button class="playbtn" aria-label="Play video"></button><span class="playbtn__label">Play Video</span></div><figcaption><b>Yvette Boehm</b><span>Dental Monitoring</span></figcaption></figure>
          <figure class="vcard"><div class="vcard__thumb"><img src="/images/home/vtest-4.png" alt="Rafael Gusikowski" loading="lazy"><button class="playbtn" aria-label="Play video"></button><span class="playbtn__label">Play Video</span></div><figcaption><b>Rafael Gusikowski</b><span>Invisalign</span></figcaption></figure>
        </div>
        <div class="vtest__foot">
          <a class="btn btn--white" href="/smile-gallery">Discover More</a>
          <div class="nav-arrows"><button class="nav-arrow" data-prev aria-label="Previous"><svg width="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M15 6l-6 6 6 6"/></svg></button><button class="nav-arrow" data-next aria-label="Next"><svg width="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 6l6 6-6 6"/></svg></button></div>
        </div>
      </div>
    </div>

  <!-- ===================== TREATMENTS TABS ===================== -->
  <section class="section treat">
    <div class="container treat__grid">
      <div class="treat__body reveal reveal--left">
        <div class="treat__tabs">
          <button class="treat__tab is-active">Invisalign</button>
          <button class="treat__tab">Damon Braces</button>
          <button class="treat__tab">NHS Braces</button>
        </div>
        <h2>Flexible treatment<br><strong>for busy lives</strong></h2>
        <p>Dr Sadiq specialises in Invisalign® treatments and has become one of London's top Invisalign® providers, with a proven track record of beautiful smiles.</p>
        <a class="btn btn--navy" href="#">Discover More</a>
      </div>
      <div class="treat__media reveal reveal--right"><img src="/images/home/treat-patient.png" alt="Orthodontic patient" loading="lazy"></div>
    </div>
  </section>

  <!-- ===================== WHY CHOOSE (dark icon grid) ===================== -->
  <section class="why">
    <div class="why__bg"><img src="/images/home/why-bg.png" alt="" loading="lazy"></div>
    <div class="container">
      <h2 class="text-center reveal">Why Choose <strong>Orchard Orthodontics</strong></h2>
      <div class="why__grid">
        <div class="whyitem reveal"><img class="whyitem__ico" src="/images/icons/why-medal.svg" alt=""><p>Winner Of The British Orthodontic Society Gold Medal</p></div>
        <div class="whyitem whyitem--down reveal" data-delay="1"><img class="whyitem__ico" src="/images/icons/why-wallet.svg" alt=""><p>Affordable Payment Plans</p></div>
        <div class="whyitem reveal" data-delay="1"><img class="whyitem__ico" src="/images/icons/why-diamond.svg" alt=""><p>One Of Europe's Top Invisalign Providers</p></div>
        <div class="whyitem whyitem--down reveal" data-delay="2"><img class="whyitem__ico" src="/images/icons/why-ai.svg" alt=""><p>AI Tracking Of Teeth</p></div>
        <div class="whyitem reveal" data-delay="2"><img class="whyitem__ico" src="/images/icons/why-face.svg" alt=""><p>30,000 Smiles Transformed Over 19 Years</p></div>
        <div class="whyitem whyitem--down reveal" data-delay="3"><img class="whyitem__ico" src="/images/icons/why-bolt.svg" alt=""><p>Start Immediately</p></div>
        <div class="whyitem reveal" data-delay="3"><img class="whyitem__ico" src="/images/icons/why-map.svg" alt=""><p>Convenient Locations In London (Near Train Stations)</p></div>
      </div>
    </div>
  </section>

  <!-- ===================== THE SADIQ TRUST (Rev06 care) ===================== -->
  <section class="sadiq">
    <div class="container">
      <div class="sadiq__card reveal">
        <div class="sadiq__bg"><img src="/images/home/sadiq-trust.png" alt="Dr Sadiq with schoolchildren in The Gambia" loading="lazy"></div>
        <div class="sadiq__body">
          <span class="eyebrow">Care Beyond the Chair</span>
          <h2>The Sadiq Trust</h2>
          <p>Founded by Dr Sadiq in October 2023, The Sadiq Trust extends Orchard's commitment to care beyond clinical treatment. The charity supports vulnerable communities across multiple countries, with a particular focus on children with special needs and disabilities. Through the development of specialist education facilities – including a dedicated school in The Gambia – the Trust works to provide access, dignity, and opportunity where it is often lacking.</p>
          <p>For Dr Sadiq, this is not a separate initiative. The same principles that guide Orchard Orthodontics – responsibility, long-term thinking and genuine care – underpin the work of the Trust. As the practice grows, so too does its ability to support this mission.</p>
          <a class="btn btn--white" href="#">Learn More About the Sadiq Trust</a>
        </div>
      </div>
    </div>
  </section>

  <!-- ===================== PRICING ===================== -->
  <section class="section pricing">
    <div class="container pricing__grid">
      <div class="pricing__body reveal reveal--left">
        <span class="eyebrow">Pricing</span>
        <h2>Straightforward pricing,<br><strong>no surprises</strong></h2>
        <div class="pricing__feats">
          <div class="feat"><img class="feat__ico" src="/images/icons/price-zero.svg" alt=""><p>Interest-free finance available</p></div>
          <div class="feat"><img class="feat__ico" src="/images/icons/price-cal.svg" alt=""><p>Flexible monthly payment plans</p></div>
          <div class="feat"><img class="feat__ico" src="/images/icons/price-check.svg" alt=""><p>Clear quote at your consultation</p></div>
        </div>
        <a class="btn btn--navy" href="/pricing">View Costs</a>
      </div>
      <div class="pricing__media reveal reveal--right"><img src="/images/home/pricing-patient.png" alt="Orthodontic patient" loading="lazy"></div>
    </div>
  </section>

  <!-- ===================== DR VIDEO REELS (dark) ===================== -->
  <section class="reels">
    <div class="reels__bg"><img src="/images/home/reels-bg.png" alt="" loading="lazy"></div>
    <div class="container">
      <span class="eyebrow reveal">Dr Videos Reels</span>
      <h2 class="reveal">What to Know<br><strong>Before Starting Treatment</strong></h2>
      <div class="reels__grid" data-carousel>
        <div class="reel"><img src="/images/home/reel-1.png" alt="" loading="lazy"><button class="playbtn" aria-label="Play reel"></button><span class="playbtn__label">Play Video</span></div>
        <div class="reel"><img src="/images/home/reel-2.png" alt="" loading="lazy"><button class="playbtn" aria-label="Play reel"></button><span class="playbtn__label">Play Video</span></div>
        <div class="reel"><img src="/images/home/reel-3.png" alt="" loading="lazy"><button class="playbtn" aria-label="Play reel"></button><span class="playbtn__label">Play Video</span></div>
        <div class="reel"><img src="/images/home/reel-4.png" alt="" loading="lazy"><button class="playbtn" aria-label="Play reel"></button><span class="playbtn__label">Play Video</span></div>
      </div>
      <div class="reels__foot">
        <a class="btn btn--white" href="#">Discover More</a>
        <div class="nav-arrows"><button class="nav-arrow" data-prev aria-label="Previous"><svg width="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M15 6l-6 6 6 6"/></svg></button><button class="nav-arrow" data-next aria-label="Next"><svg width="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 6l6 6-6 6"/></svg></button></div>
      </div>
    </div>
  </section>

  <!-- ===================== MEET THE DOCTORS ===================== -->
  <section class="section docs">
    <div class="container docs__grid">
      <div class="docs__body reveal reveal--left">
        <span class="eyebrow">Meet the Doctors</span>
        <h2><strong>Think Twice</strong><br>Why you should get teeth straightened</h2>
        <p>60 years of combined specialist experience in orthodontics.</p>
        <a class="btn btn--navy" href="/meet-team">Meet the Team</a>
      </div>
      <div class="docs__media reveal reveal--right"><img src="/images/home/doctors.png" alt="Dr Sadiq, specialist orthodontist" loading="lazy"></div>
    </div>
  </section>

  <!-- ===================== CTA BAND ===================== -->
  <section class="cta">
    <div class="container">
      <div class="cta__card reveal">
        <div class="cta__media"><img src="/images/home/cta-img.png" alt="Happy Orchard Orthodontics patient in London" loading="lazy"></div>
        <div class="cta__body">
          <span class="eyebrow">Book a Free Consultation</span>
          <h2>Ready to start your<br><strong>smile journey?</strong></h2>
          <p>Book a free consultation at your nearest Orchard Orthodontics practice. Our specialist team will guide you through every step towards the smile you deserve.</p>
          <a class="btn btn--green" href="/booking">Book a Free Consultation</a>
        </div>
      </div>
    </div>
  </section>

  <!-- ===================== VISIT US ===================== -->
  <section class="visit">
    <div class="visit__bg"><img src="/images/home/visit-bg.png" alt="" loading="lazy"></div>
    <div class="container visit__grid">
      <div class="reveal reveal--left">
        <span class="eyebrow">Find us</span>
        <h2>Visit Us</h2>
        <p class="visit__sub">Three specialist practices across South London and Surrey. Choose your nearest location for directions, opening hours and contact details.</p>
        <div class="locpick">
          <button class="locpick__btn is-active" data-loc="croydon">Croydon</button>
          <button class="locpick__btn" data-loc="brixton">Brixton</button>
          <button class="locpick__btn" data-loc="guildford">Guildford</button>
        </div>
        <div data-loc-panel="croydon">
          <div class="visit__row"><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21s7-6.3 7-11a7 7 0 10-14 0c0 4.7 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/></svg><span>114-118 Cherry Orchard Road, Croydon<br>Greater London, CR0 6BA</span></div>
          <div class="visit__row"><svg class="ico" viewBox="0 0 24 24" fill="currentColor"><path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .8-.3 1z"/></svg><a href="tel:02086497500">020 8649 7500</a></div>
          <div class="visit__row"><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg><a href="mailto:croydon@orchardortho.com">croydon@orchardortho.com</a></div>
          <div class="visit__row"><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>
            <div class="visit__hours"><span>Monday</span><span>9:00am – 5:00pm</span><span>Tuesday – Wednesday</span><span>9:00am – 6:00pm</span><span>Thursday</span><span>9:00am – 7:00pm</span><span>Friday</span><span>9:00am – 5:00pm</span><span>Saturday &amp; Sunday</span><span>Closed</span></div>
          </div>
          <a class="visit__maps" href="https://www.google.com/maps?q=114-118+Cherry+Orchard+Road+Croydon+CR0+6BA" target="_blank" rel="noopener"><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M9 7h8v8"/></svg>Open in Google Maps</a>
        </div>
        <div data-loc-panel="brixton" hidden>
          <div class="visit__row"><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21s7-6.3 7-11a7 7 0 10-14 0c0 4.7 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/></svg><span>8 Brixton Hill, Brixton<br>London, SW2 1EG</span></div>
          <div class="visit__row"><svg class="ico" viewBox="0 0 24 24" fill="currentColor"><path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .8-.3 1z"/></svg><a href="tel:02086497500">020 8649 7500</a></div>
          <div class="visit__row"><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg><a href="mailto:brixton@orchardortho.com">brixton@orchardortho.com</a></div>
          <a class="visit__maps" href="https://www.google.com/maps?q=8+Brixton+Hill+London+SW2+1EG" target="_blank" rel="noopener"><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M9 7h8v8"/></svg>Open in Google Maps</a>
        </div>
        <div data-loc-panel="guildford" hidden>
          <div class="visit__row"><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21s7-6.3 7-11a7 7 0 10-14 0c0 4.7 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/></svg><span>Dental &amp; Implant Centre, 6 Faraday Road<br>Guildford, GU1 1EA</span></div>
          <div class="visit__row"><svg class="ico" viewBox="0 0 24 24" fill="currentColor"><path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .8-.3 1z"/></svg><a href="tel:02086497500">020 8649 7500</a></div>
          <div class="visit__row"><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg><a href="mailto:ref@orchardortho.com">ref@orchardortho.com</a></div>
          <a class="visit__maps" href="https://www.google.com/maps?q=6+Faraday+Road+Guildford+GU1+1EA" target="_blank" rel="noopener"><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M9 7h8v8"/></svg>Open in Google Maps</a>
        </div>
      </div>
      <div class="reveal reveal--right visit__map">
        <iframe title="Orchard Orthodontics location map" loading="lazy" src="https://www.google.com/maps?q=114-118+Cherry+Orchard+Road+Croydon+CR0+6BA&output=embed"></iframe>
        <img class="visit__pin" src="/images/map-pin.svg" alt="">
      </div>
    </div>
  </section>`;

export default function Page() {
  return (
    <PageShell active="" solid={false} pageClass="">
      <div dangerouslySetInnerHTML={{ __html: CONTENT }} />
    </PageShell>
  );
}
