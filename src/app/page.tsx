import PageShell from "@/components/PageShell";

const CONTENT = `<!-- ===================== HERO ===================== -->
  <section class="hero">
    <div class="hero__bg"><video autoplay muted loop playsinline preload="auto" poster="/images/home/hero-bg.png"><source src="/videos/orchard-hero-bg-video.mp4" type="video/mp4"></video></div>
    <div class="hero__inner container">
      <h1>Your Smile Deserves<br><strong>a Specialist</strong></h1>
      <a class="btn btn--green" href="/booking">Book a Free Consultation</a>
    </div>
  </section>

  <!-- ===================== PROS TRUST (Declan Rice) ===================== -->
  <section class="pros">
    <div class="container-lg pros__inner">
      <div class="pros__celebrity"><h6>Declan Rice</h6><p>Premier League Footballer</p></div>
      <div class="pros__img"><img src="/images/home/home-book-sec-img.jpg" alt="Declan Rice"></div>
      <div class="pros__txt">
        <h3>Book a Free Consultation</h3>
        <h2>When the pros <strong>trust us,<br>so can you.</strong></h2>
        <p>When elite athletes choose who to trust with their smile, standards matter. England and Arsenal star Declan Rice chose Orchard Orthodontics — and every patient receives the same meticulous, specialist-led care.</p>
        <a class="btn btn--green" href="/booking"><span>Book a Free Consultation</span></a>
      </div>
    </div>
  </section>

  <!-- ===================== AWARDS + VIDEO TESTIMONIAL ===================== -->
  <section class="awards">
    <div class="awards__bg"><img src="/images/home/awards.png" alt=""></div>
    <div class="container awards__head reveal">
      <h2>Best Patient Care <strong>Winners</strong></h2>
      <p>We are delighted to announce that we have won best patient care at the 2025 Private Dentistry Awards.</p>
      <a class="btn btn--white" href="#">Discover More</a>
    </div>
  </section>

  <!-- ===================== VIDEO TESTIMONIAL (moved out of .awards) ===================== -->
  <div class="container-lg">
      <div class="vtest reveal">
        <span class="eyebrow">Video Testimonial</span>
        <h3>Real patients, <strong>real results</strong></h3>
        <div class="vtest__grid" data-carousel>
          <figure class="vcard"><div class="vcard__thumb"><img src="/images/home/testi/keshika.jpg" alt="Keshika"><button class="playbtn" aria-label="Play video"></button><span class="playbtn__label">Play Video</span></div><figcaption><b>Keshika</b><span>Invisalign®</span></figcaption></figure>
          <figure class="vcard"><div class="vcard__thumb"><img src="/images/home/testi/jacqueline.jpg" alt="Jacqueline"><button class="playbtn" aria-label="Play video"></button><span class="playbtn__label">Play Video</span></div><figcaption><b>Jacqueline</b><span>Invisalign®</span></figcaption></figure>
          <figure class="vcard"><div class="vcard__thumb"><img src="/images/home/testi/ryan.jpg" alt="Ryan"><button class="playbtn" aria-label="Play video"></button><span class="playbtn__label">Play Video</span></div><figcaption><b>Ryan</b><span>Damon Braces</span></figcaption></figure>
          <figure class="vcard"><div class="vcard__thumb"><img src="/images/home/testi/composite-bonding.jpg" alt="Composite bonding result"><button class="playbtn" aria-label="Play video"></button><span class="playbtn__label">Play Video</span></div><figcaption><b>Composite Bonding</b><span>Cosmetic Bonding</span></figcaption></figure>
          <figure class="vcard"><div class="vcard__thumb"><img src="/images/home/testi/keshika.jpg" alt="Keshika"><button class="playbtn" aria-label="Play video"></button><span class="playbtn__label">Play Video</span></div><figcaption><b>Keshika</b><span>Invisalign®</span></figcaption></figure>
          <figure class="vcard"><div class="vcard__thumb"><img src="/images/home/testi/jacqueline.jpg" alt="Jacqueline"><button class="playbtn" aria-label="Play video"></button><span class="playbtn__label">Play Video</span></div><figcaption><b>Jacqueline</b><span>Invisalign®</span></figcaption></figure>
          <figure class="vcard"><div class="vcard__thumb"><img src="/images/home/testi/ryan.jpg" alt="Ryan"><button class="playbtn" aria-label="Play video"></button><span class="playbtn__label">Play Video</span></div><figcaption><b>Ryan</b><span>Damon Braces</span></figcaption></figure>
          <figure class="vcard"><div class="vcard__thumb"><img src="/images/home/testi/composite-bonding.jpg" alt="Composite bonding result"><button class="playbtn" aria-label="Play video"></button><span class="playbtn__label">Play Video</span></div><figcaption><b>Composite Bonding</b><span>Cosmetic Bonding</span></figcaption></figure>
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
          <button class="treat__tab is-active" data-tab="0">Invisalign®</button>
          <button class="treat__tab" data-tab="1">Damon Braces</button>
          <button class="treat__tab" data-tab="2">NHS Braces</button>
        </div>
        <div class="treat__panels">
          <div class="treat__panel is-active" data-panel="0">
            <h2>Specialist-led <strong>Invisalign® in London</strong></h2>
            <p>Dr Sadiq provides specialist-led Invisalign® treatment for patients seeking discreet, carefully planned teeth straightening. Every case is individually assessed to ensure aligners are used appropriately — never as a shortcut.</p>
            <a class="btn btn--navy" href="/inset">Invisalign®</a>
          </div>
          <div class="treat__panel" data-panel="1">
            <h2>Precision orthodontics with <strong>Damon braces</strong></h2>
            <p>Damon braces are an advanced self-ligating system designed for efficient, controlled tooth movement. In specialist hands they can reduce friction, improve comfort, and shorten treatment times.</p>
            <a class="btn btn--navy" href="/inset">Damon Braces</a>
          </div>
          <div class="treat__panel" data-panel="2">
            <h2>Is your child eligible for <strong>NHS braces?</strong></h2>
            <p>NHS braces are available for children who meet specific clinical criteria. At Orchard Orthodontics our assessments are thorough, transparent and specialist-led — so parents can feel confident in every treatment decision.</p>
            <a class="btn btn--navy" href="/inset">NHS Braces</a>
          </div>
        </div>
      </div>
      <div class="treat__media reveal reveal--right">
        <img class="treat__img is-active" data-img="0" src="/images/home/tabs/invisalign.jpg" alt="Specialist-led Invisalign treatment in London">
        <img class="treat__img" data-img="1" src="/images/home/tabs/damon.jpg" alt="Damon self-ligating braces">
        <img class="treat__img" data-img="2" src="/images/home/tabs/nhs.jpg" alt="Child with NHS braces">
      </div>
    </div>
  </section>

  <!-- ===================== WHY CHOOSE (dark icon grid) ===================== -->
  <section class="why">
    <div class="why__bg"><img src="/images/home/why-bg.png" alt=""></div>
    <div class="container">
      <h2 class="text-center reveal">Why Choose<br><strong>Orchard Orthodontics</strong></h2>
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
      <div class="pricing__media reveal reveal--right"><img src="/images/home/pricing-patient.png" alt="Orthodontic patient"></div>
    </div>
  </section>

  <!-- ===================== DR VIDEO REELS (dark) ===================== -->
  <section class="reels">
    <div class="reels__bg"><img src="/images/home/reels-bg.png" alt=""></div>
    <div class="container">
      <span class="eyebrow reveal">Dr Videos Reels</span>
      <h2 class="reveal">What to Know<br><strong>Before Starting Treatment</strong></h2>
      <div class="reels__grid" data-carousel>
        <div class="reel"><img src="/images/home/reels/reel-01.jpg" alt=""><button class="playbtn" aria-label="Play reel"></button><span class="playbtn__label">Play Video</span></div>
        <div class="reel"><img src="/images/home/reels/reel-02.jpg" alt=""><button class="playbtn" aria-label="Play reel"></button><span class="playbtn__label">Play Video</span></div>
        <div class="reel"><img src="/images/home/reels/reel-03.jpg" alt=""><button class="playbtn" aria-label="Play reel"></button><span class="playbtn__label">Play Video</span></div>
        <div class="reel"><img src="/images/home/reels/reel-04.jpg" alt=""><button class="playbtn" aria-label="Play reel"></button><span class="playbtn__label">Play Video</span></div>
        <div class="reel"><img src="/images/home/reels/reel-05.jpg" alt=""><button class="playbtn" aria-label="Play reel"></button><span class="playbtn__label">Play Video</span></div>
        <div class="reel"><img src="/images/home/reels/reel-06.jpg" alt=""><button class="playbtn" aria-label="Play reel"></button><span class="playbtn__label">Play Video</span></div>
        <div class="reel"><img src="/images/home/reels/reel-07.jpg" alt=""><button class="playbtn" aria-label="Play reel"></button><span class="playbtn__label">Play Video</span></div>
        <div class="reel"><img src="/images/home/reels/reel-08.jpg" alt=""><button class="playbtn" aria-label="Play reel"></button><span class="playbtn__label">Play Video</span></div>
        <div class="reel"><img src="/images/home/reels/reel-09.jpg" alt=""><button class="playbtn" aria-label="Play reel"></button><span class="playbtn__label">Play Video</span></div>
        <div class="reel"><img src="/images/home/reels/reel-10.jpg" alt=""><button class="playbtn" aria-label="Play reel"></button><span class="playbtn__label">Play Video</span></div>
        <div class="reel"><img src="/images/home/reels/reel-11.jpg" alt=""><button class="playbtn" aria-label="Play reel"></button><span class="playbtn__label">Play Video</span></div>
        <div class="reel"><img src="/images/home/reels/reel-12.jpg" alt=""><button class="playbtn" aria-label="Play reel"></button><span class="playbtn__label">Play Video</span></div>
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
      <div class="docs__media reveal reveal--right"><img src="/images/home/doctors.png" alt="Dr Sadiq, specialist orthodontist"></div>
    </div>
  </section>

  <!-- ===================== CTA BAND ===================== -->
  <section class="cta">
    <div class="container-lg">
      <div class="cta__card reveal">
        <div class="cta__media"><img src="/images/home/cta-img.png" alt="Happy Orchard Orthodontics patient in London"></div>
        <div class="cta__body">
          <span class="eyebrow">Book a Free Consultation</span>
          <h2>Ready to start your<br><strong>smile journey?</strong></h2>
          <p>Book a free consultation at your nearest Orchard Orthodontics practice. Our specialist team will guide you through every step towards the smile you deserve.</p>
          <a class="btn btn--green" href="/booking">Book a Free Consultation</a>
        </div>
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
