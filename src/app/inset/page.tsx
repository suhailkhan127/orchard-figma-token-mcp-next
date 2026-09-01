import type { Metadata } from "next";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Invisalign in London — Clear Aligners",
  description: "Discreet, removable Invisalign clear aligners with London's leading specialist providers. Book a free consultation at Orchard Orthodontics in Croydon, Brixton or Guildford.",
};

const CONTENT = `<!-- ===================== HERO ===================== -->
  <section class="inset-hero">
    <div class="inset-hero__bg ph ph--dark"><img src="/images/inner/inset/inset-07.png" alt=""></div><!-- IMG: soft clinic backdrop, faded 16:9 -->
    <div class="container">
      <div class="inset-hero__grid">
        <div class="reveal reveal--left">
          <span class="crumb"><a href="/">Treatments</a> — Invisalign</span>
          <h1>Invisalign<sup>®</sup></h1>
          <p>Dr Sadiq specialises in Invisalign® treatments and has become one of London's top Invisalign® providers, with a proven track record of beautiful smiles.</p>
          <a class="btn btn--green" href="/booking">Book a Free Consultation</a>
        </div>
        <div class="inset-hero__media reveal reveal--right">
          <div class="ph"><img src="/images/inner/inset/inset-01.png" alt="Smiling Invisalign patient in the dental chair"></div><!-- IMG: smiling Invisalign patient in dental chair 4:3 -->
          <div class="inplay"><button class="playbtn" aria-label="Play video"></button><span class="playbtn__label">Play Video</span></div>
        </div>
      </div>
    </div>
  </section>

  <!-- ===================== SBS: INVISIBLE TREATMENT ===================== -->
  <section class="section">
    <div class="container">
      <div class="sbs sbs--rev">
        <div class="sbs__body reveal reveal--right">
          <h2>Invisible treatment,<br><strong>visible results.</strong></h2>
          <p>Your Invisalign® clear aligners may go unnoticed by colleagues, peers, and others around you, but they won't be able to ignore the stunning smile you suddenly seem to have. Dr Sadiq specialises in Invisalign® treatments and has become one of London's top Invisalign® providers, with a proven track record of beautiful smiles.</p>
          <a class="btn btn--navy" href="/booking">Start Your Consultation</a>
        </div>
        <div class="sbs__media reveal reveal--left">
          <div class="ph"><img src="/images/inner/inset/inset-02.png" alt="Hand holding an open Invisalign aligner case"></div><!-- IMG: hand holding open Invisalign aligner case 1:1 -->
          <div class="inplay"><button class="playbtn" aria-label="Play video"></button><span class="playbtn__label">Play Video</span></div>
        </div>
      </div>
    </div>
  </section>

  <!-- ===================== BENEFITS GRID (navy panel) ===================== -->
  <section class="section" style="padding-top:0">
    <div class="container">
      <div class="inben reveal">
        <h2>The benefits of Invisalign<sup>®</sup>?</h2>
        <p class="inben__intro">Invisalign clear aligners combine discreet good looks with precise, predictable results. Removable, comfortable and tailored entirely to your smile, they fit neatly around a busy life while gently guiding your teeth into place.</p>
        <div class="inben__grid">
          <div><h4>Discreet</h4><p>Because Invisalign clear aligners are nearly invisible, they make a great option for client-facing professionals.</p></div>
          <div><h4>Accurate</h4><p>Invisalign clear aligners are 100% customised for your smile, making them incredibly efficient.</p></div>
          <div><h4>Removable</h4><p>Going to a big meeting or event? You can take out your aligners for special occasions, meal times and to brush your teeth.</p></div>
          <div><h4>Comfortable</h4><p>The smooth medical-grade plastic of the aligners won't irritate your cheeks or gums.</p></div>
          <div><h4>Convenient</h4><p>Pair your Invisalign treatment with AI Dental Monitoring for remote check-ins between appointments.</p></div>
          <div><h4>Affordable</h4><p>At Orchard Orthodontics we can work out a plan that best suits your budget. We offer 0% APR finance and flexible payment options up to 36 months.</p></div>
        </div>
      </div>
    </div>
  </section>

  <!-- ===================== SBS: FLEXIBLE TREATMENT ===================== -->
  <section class="section" style="padding-top:0">
    <div class="container">
      <div class="sbs">
        <div class="sbs__body reveal reveal--left">
          <h2>Flexible treatment<br><strong>for busy lives.</strong></h2>
          <p>Invisalign® treatment is not just one of the most discreet orthodontic treatment options we have on offer, it's extremely flexible too. The clear aligners are 100% removable — meaning you can take them out for an important presentation, a social event, your favourite foods (there are no food restrictions with Invisalign®!), and your routine dental hygiene like brushing and flossing.</p>
          <a class="btn btn--navy" href="/pricing">View Pricing</a>
        </div>
        <div class="sbs__media reveal reveal--right">
          <div class="ph"><img src="/images/inner/inset/inset-03.png" alt="Relaxed patient smiling in the Orchard Orthodontics reception"></div><!-- IMG: relaxed patient smiling in reception 1:1 -->
        </div>
      </div>
    </div>
  </section>

  <!-- ===================== FULL-BLEED VIDEO BAND ===================== -->
  <section class="invideo">
    <div class="invideo__bg ph ph--dark"><img src="/images/inner/inset/inset-04.png" alt=""></div><!-- IMG: Orchard Orthodontics practice exterior signage 16:6 -->
    <button class="playbtn" aria-label="Play video"></button>
    <span class="playbtn__label">Play Video</span>
  </section>

  <!-- ===================== FAQ ===================== -->
  <section class="section">
    <div class="container">
      <h2 style="margin-bottom:36px">Invisalign <strong>FAQ</strong></h2>
      <div class="faq">
        <div class="faq__item is-open">
          <button class="faq__q">Will my teeth be straight after treatment? <span class="plus"></span></button>
          <div class="faq__a"><div>Yes. Your Invisalign treatment is planned digitally from the outset, so you can preview your projected result before you even begin. With consistent wear of 20–22 hours a day and a retainer afterwards, your teeth will be beautifully aligned — and stay that way.</div></div>
        </div>
        <div class="faq__item">
          <button class="faq__q">How do I look after my aligners? <span class="plus"></span></button>
          <div class="faq__a"><div>The best way to clean your aligners is by brushing and rinsing them in lukewarm water and using special cleaning tablets. After eating it is important that you brush your teeth before you re-insert your aligners. This has two benefits; it keeps your teeth clean and stops food discolouring the aligners.</div></div>
        </div>
        <div class="faq__item">
          <button class="faq__q">Is Invisalign treatment painful? <span class="plus"></span></button>
          <div class="faq__a"><div>No. Most patients feel only mild pressure for a day or two each time they move to a new set of aligners. This is completely normal and simply means your teeth are gently moving into their new position.</div></div>
        </div>
        <div class="faq__item">
          <button class="faq__q">What should I do if I lose or break an aligner? <span class="plus"></span></button>
          <div class="faq__a"><div>Get in touch with your practice straight away on 020 8649 7500. Depending on where you are in your treatment, we'll advise you to move to your next set or arrange a replacement so your progress stays on track.</div></div>
        </div>
      </div>
    </div>
  </section>

  <!-- ===================== RELATED TREATMENTS CARDS ===================== -->
  <section class="section" style="padding-top:0">
    <div class="container">
      <span class="eyebrow">Treatments</span>
      <h2 style="margin:10px 0 16px">Explore our <strong>other treatments</strong></h2>
      <p style="max-width:760px;margin-bottom:44px">Invisalign is one of several specialist options we offer. Whichever route is right for you, our team will recommend the treatment that fits your smile, your lifestyle and your budget.</p>
      <div class="cards">
        <article class="card reveal">
          <div class="card__media"><div class="ph"><img src="/images/inner/inset/inset-06.png" alt="Patient after Damon braces treatment"></div></div><!-- IMG: Damon braces patient 4:3 -->
          <div class="card__body">
            <span class="card__meta">Damon Braces</span>
            <h3>Discreet fixed braces that work faster.</h3>
            <p>Self-ligating Damon braces move teeth gently and efficiently, often with fewer appointments and a more comfortable experience.</p>
            <a class="inlink" href="/inset">Discover More →</a>
          </div>
        </article>
        <article class="card reveal">
          <div class="card__media"><div class="ph"><img src="/images/inner/inset/inset-01.png" alt="Young patient with NHS braces"></div></div><!-- IMG: NHS braces young patient 4:3 -->
          <div class="card__body">
            <span class="card__meta">NHS Braces</span>
            <h3>Specialist orthodontic care on the NHS.</h3>
            <p>For eligible younger patients, we provide high-quality fixed braces under the NHS, delivered by our specialist orthodontic team.</p>
            <a class="inlink" href="/inset">Discover More →</a>
          </div>
        </article>
        <article class="card reveal">
          <div class="card__media"><div class="ph"><img src="/images/inner/inset/inset-05.png" alt="Clear aligner used alongside Carriere Motion treatment"></div></div><!-- IMG: Carriere Motion appliance 4:3 -->
          <div class="card__body">
            <span class="card__meta">Carriere Motion</span>
            <h3>Correct your bite before aligners begin.</h3>
            <p>The Carriere Motion appliance addresses bite alignment early, shortening overall treatment time when paired with Invisalign.</p>
            <a class="inlink" href="/inset">Discover More →</a>
          </div>
        </article>
      </div>
      <div class="inrow-foot">
        <a class="btn btn--navy" href="/how-to-choose-orthodontist">Discover More</a>
        <div class="nav-arrows"><button class="nav-arrow" data-prev aria-label="Previous"><svg width="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M15 6l-6 6 6 6"/></svg></button><button class="nav-arrow" data-next aria-label="Next"><svg width="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 6l6 6-6 6"/></svg></button></div>
      </div>
    </div>
  </section>

  <!-- ===================== MEET THE DOCTOR BAND ===================== -->
  <section class="section indoc">
    <div class="container">
      <div class="sbs">
        <div class="sbs__body reveal reveal--left">
          <span class="eyebrow">Meet the Doctor</span>
          <h2><strong>Think Twice</strong><br>Why you should get teeth straightened</h2>
          <p>60 years of combined specialist experience in orthodontics. Our clinicians take the time to understand your goals and design a treatment plan built entirely around you.</p>
          <a class="btn btn--navy" href="/meet-team">Meet the Doctor</a>
        </div>
        <div class="sbs__media reveal reveal--right">
          <div class="ph ph--portrait"><img src="/images/inner/inset/inset-08.png" alt="Specialist orthodontist portrait"></div><!-- IMG: specialist orthodontist portrait 4:5 -->
        </div>
      </div>
    </div>
  </section>

  <!-- ===================== MEET THE TEAM CARDS ===================== -->
  <section class="section">
    <div class="container">
      <span class="eyebrow">Meet the Team</span>
      <h2 style="margin:10px 0 16px">Our specialist <strong>team</strong></h2>
      <p style="max-width:760px;margin-bottom:44px">Every Invisalign journey at Orchard is guided by a friendly, highly qualified team. Get to know the specialists and therapists who will be looking after your smile.</p>
      <div class="cards">
        <article class="card reveal">
          <div class="card__media"><div class="ph ph--portrait"><img src="/images/inner/inset/inset-09.png" alt="Orthodontic therapist headshot"></div></div><!-- IMG: orthodontic therapist headshot 4:3 -->
          <div class="card__body">
            <span class="card__meta">Orthodontic Therapist</span>
            <h3>Haneta Rondonuwu</h3>
            <span class="card__gdc">GDC: 22356</span>
            <p>Haneta qualified as a General Dentist in Jakarta in 2001 and then as an Orthodontic Therapist from Bristol in 2016. She has extensive experience in treating patients with fixed appliances and aligners.</p>
            <a class="inlink" href="/meet-team">Read More →</a>
          </div>
        </article>
        <article class="card reveal">
          <div class="card__media"><div class="ph ph--portrait"><img src="/images/inner/inset/inset-20.png" alt="Specialist orthodontist"></div></div>
          <div class="card__body">
            <span class="card__meta">Specialist Orthodontist</span>
            <h3>Dr Pragati Agarwal</h3>
            <span class="card__gdc">GDC: 70629</span>
            <p>Dr Agarwal works as a Specialist Practitioner in Orthodontics, as well as formally working at Kingston Hospital. Dr Agarwal qualified in Dental Surgery from Bristol University in 1995.</p>
            <a class="inlink" href="/meet-team">Read More →</a>
          </div>
        </article>
        <article class="card reveal">
          <div class="card__media"><div class="ph ph--portrait"><img src="/images/inner/inset/inset-09.png" alt="Orthodontic therapist headshot"></div></div><!-- IMG: orthodontic therapist headshot 4:3 -->
          <div class="card__body">
            <span class="card__meta">Orthodontic Therapist</span>
            <h3>Sara Mendes</h3>
            <span class="card__gdc">GDC: 24471</span>
            <p>Sara has worked in specialist orthodontic practice for over a decade, supporting patients through every stage of aligner and fixed-brace treatment with warmth and precision.</p>
            <a class="inlink" href="/meet-team">Read More →</a>
          </div>
        </article>
      </div>
      <div class="inrow-foot">
        <a class="btn btn--navy" href="/meet-team">Discover More</a>
        <div class="nav-arrows"><button class="nav-arrow" data-prev aria-label="Previous"><svg width="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M15 6l-6 6 6 6"/></svg></button><button class="nav-arrow" data-next aria-label="Next"><svg width="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 6l6 6-6 6"/></svg></button></div>
      </div>
    </div>
  </section>

  <!-- ===================== BLOG CARDS ===================== -->
  <section class="section" style="padding-top:0">
    <div class="container">
      <span class="eyebrow">Blog</span>
      <h2 style="margin:10px 0 16px">From our <strong>blog</strong></h2>
      <p style="max-width:760px;margin-bottom:44px">Advice, insights and patient stories from our specialist team — everything you need to feel confident about starting your Invisalign journey.</p>
      <div class="cards cards--2">
        <article class="card reveal">
          <div class="card__media"><div class="ph"><img src="/images/inner/inset/inset-10.png" alt="Happy family outdoors"></div></div><!-- IMG: happy family outdoors 16:9 -->
          <div class="card__body">
            <span class="card__meta">02.10.2025</span>
            <h3>Is Invisalign right for you? What to consider before you start.</h3>
            <p>From lifestyle and budget to how complex your case is, here's an honest guide to deciding whether clear aligners are the best choice for your smile.</p>
            <a class="inlink" href="/blog">Read More →</a>
          </div>
        </article>
        <article class="card reveal">
          <div class="card__media"><div class="ph ph--dark"><img src="/images/inner/inset/inset-17.png" alt="Orchard Orthodontics clinic"></div></div>
          <div class="card__body">
            <span class="card__meta">02.10.2025</span>
            <h3>Caring for your aligners: simple habits for a healthier smile.</h3>
            <p>A few easy routines will keep your aligners clear and your teeth clean throughout treatment. Our therapists share their top tips.</p>
            <a class="inlink" href="/blog">Read More →</a>
          </div>
        </article>
      </div>
      <div class="inrow-foot">
        <a class="btn btn--navy" href="/blog">Discover More</a>
        <div class="nav-arrows"><button class="nav-arrow" data-prev aria-label="Previous"><svg width="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M15 6l-6 6 6 6"/></svg></button><button class="nav-arrow" data-next aria-label="Next"><svg width="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 6l6 6-6 6"/></svg></button></div>
      </div>
    </div>
  </section>

  <!-- ===================== BEFORE / AFTER MINI GALLERY ===================== -->
  <section class="section inba" style="padding-top:0">
    <div class="container">
      <span class="eyebrow">Before &amp; After</span>
      <h2 style="margin:10px 0 16px">Real patient <strong>results</strong></h2>
      <p style="max-width:760px;margin-bottom:44px">A selection of smiles transformed by our specialist team. Drag the slider on each result to see the difference Invisalign and our other treatments can make.</p>
      <div class="inba__grid">
        <div class="reveal">
          <div class="ba">
            <div class="ph" style="position:absolute;inset:0"><img src="/images/inner/inset/inset-12.png" alt="Patient smile after Invisalign treatment"></div><!-- IMG: after smile close-up 4:3 -->
            <div class="ph ba__before" style="position:absolute;inset:0"><img src="/images/inner/inset/inset-11.png" alt="Patient smile before Invisalign treatment"></div><!-- IMG: before smile close-up 4:3 -->
            <span class="ba__tag ba__tag--b">Before</span>
            <span class="ba__tag ba__tag--a">After</span>
            <div class="inba__handle"><span>‹ ›</span></div>
          </div>
          <p class="inba__cap">Invisalign</p>
        </div>
        <div class="reveal">
          <div class="ba">
            <div class="ph" style="position:absolute;inset:0"><img src="/images/inner/inset/inset-14.png" alt="Patient smile after Invisalign and bonding"></div><!-- IMG: after smile close-up 4:3 -->
            <div class="ph ba__before" style="position:absolute;inset:0"><img src="/images/inner/inset/inset-13.png" alt="Patient smile before Invisalign and bonding"></div><!-- IMG: before smile close-up 4:3 -->
            <span class="ba__tag ba__tag--b">Before</span>
            <span class="ba__tag ba__tag--a">After</span>
            <div class="inba__handle"><span>‹ ›</span></div>
          </div>
          <p class="inba__cap">Invisalign &amp; Bonding</p>
        </div>
        <div class="reveal">
          <div class="ba">
            <div class="ph" style="position:absolute;inset:0"><img src="/images/inner/inset/inset-12.png" alt="Patient smile after clear aligner treatment"></div><!-- IMG: after smile close-up 4:3 -->
            <div class="ph ba__before" style="position:absolute;inset:0"><img src="/images/inner/inset/inset-11.png" alt="Patient smile before clear aligner treatment"></div><!-- IMG: before smile close-up 4:3 -->
            <span class="ba__tag ba__tag--b">Before</span>
            <span class="ba__tag ba__tag--a">After</span>
            <div class="inba__handle"><span>‹ ›</span></div>
          </div>
          <p class="inba__cap">Clear Aligners</p>
        </div>
      </div>
      <div class="inrow-foot">
        <a class="btn btn--navy" href="/smile-gallery">View Smile Gallery</a>
        <div class="nav-arrows"><button class="nav-arrow" data-prev aria-label="Previous"><svg width="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M15 6l-6 6 6 6"/></svg></button><button class="nav-arrow" data-next aria-label="Next"><svg width="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 6l6 6-6 6"/></svg></button></div>
      </div>
    </div>
  </section>

  <!-- ===================== LONG-FORM CONTENT (navy card) ===================== -->
  <section class="section" style="padding-top:0">
    <div class="container">
      <div class="intext reveal">
        <h2>Everything you need to know <strong>about Invisalign.</strong></h2>
        <div class="intext__lead">
          <p>Invisalign uses a series of custom-made, transparent aligners to move your teeth gradually into their ideal position. Each set is worn for one to two weeks before you progress to the next, and your whole plan is mapped out digitally before you begin — so you know what to expect at every stage.</p>
          <p>Treatment length varies from person to person and depends on how much movement is needed. Most cases take between six and eighteen months, and regular check-ins — in person or through AI monitoring — keep everything on track towards your final result.</p>
        </div>
        <div class="intext__cols">
          <div>
            <h4>How it works</h4>
            <p>A digital scan captures your teeth in 3D. From this we design your bespoke aligners and a step-by-step plan, gently guiding each tooth towards its target position with precise, controlled movements.</p>
          </div>
          <div>
            <h4>Your treatment plan</h4>
            <p>You'll see a preview of your projected smile before you commit. We agree the timeline and payment plan together, so there are no surprises — just a clear path towards a straighter smile.</p>
          </div>
          <div>
            <h4>Aftercare</h4>
            <p>Once your teeth are aligned, a retainer keeps them in place. We'll show you exactly how to wear and care for it so your new smile lasts for years to come.</p>
          </div>
        </div>
        <p class="intext__foot">Ready to find out whether Invisalign is right for you? Book a free, no-obligation consultation at your nearest Orchard Orthodontics practice and our specialist team will talk you through your options, timeline and costs in full.</p>
      </div>
    </div>
  </section>

  <!-- ===================== TESTIMONIALS ===================== -->
  <section class="section intest" style="padding-top:0">
    <div class="container">
      <span class="eyebrow">Testimonials</span>
      <h2 style="margin:10px 0 16px">What our <strong>patients say</strong></h2>
      <p style="max-width:760px;margin-bottom:44px">We're proud of the smiles we create — but we're just as proud of how our patients feel about their experience with us.</p>
      <div class="intest__grid">
        <div class="tcard reveal"><span class="tcard__mark">&ldquo;</span><p>From my first consultation to my final aligner, the team made everything feel effortless. My smile is exactly what I hoped for and I couldn't be happier.</p><b>Dewey Littel-Torphy</b></div>
        <div class="tcard reveal"><span class="tcard__mark">&ldquo;</span><p>I barely noticed I was wearing the aligners day to day, and the results speak for themselves. Genuinely the best decision I've made for my confidence.</p><b>Betty Hermiston</b></div>
        <div class="tcard reveal"><span class="tcard__mark">&ldquo;</span><p>Professional, friendly and reassuring at every appointment. They explained each step clearly and my treatment finished right on schedule.</p><b>Jesse Jacobs</b></div>
      </div>
      <div class="inrow-foot">
        <a class="btn btn--navy" href="/smile-gallery">Discover More</a>
        <div class="nav-arrows"><button class="nav-arrow" data-prev aria-label="Previous"><svg width="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M15 6l-6 6 6 6"/></svg></button><button class="nav-arrow" data-next aria-label="Next"><svg width="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 6l6 6-6 6"/></svg></button></div>
      </div>
    </div>
  </section>

  <!-- ===================== DR VIDEO REELS (dark) ===================== -->
  <section class="reels">
    <div class="reels__bg ph ph--dark"><img src="/images/inner/inset/inset-19.png" alt=""></div>
    <div class="container">
      <span class="eyebrow reveal">Dr Videos Reels</span>
      <h2 class="reveal">What to Know<br><strong>Before Starting Treatment</strong></h2>
      <div class="reels__grid" data-carousel>
        <div class="reel"><div class="ph ph--dark" style="position:absolute;inset:0;border-radius:16px"><img src="/images/inner/inset/inset-15.png" alt="Orthodontist video reel"></div><button class="playbtn" aria-label="Play reel"></button><span class="playbtn__label">Play Video</span></div>
        <div class="reel"><div class="ph ph--dark" style="position:absolute;inset:0;border-radius:16px"><img src="/images/inner/inset/inset-16.png" alt="Orthodontist video reel"></div><button class="playbtn" aria-label="Play reel"></button><span class="playbtn__label">Play Video</span></div>
        <div class="reel"><div class="ph ph--dark" style="position:absolute;inset:0;border-radius:16px"><img src="/images/inner/inset/inset-15.png" alt="Orthodontist video reel"></div><button class="playbtn" aria-label="Play reel"></button><span class="playbtn__label">Play Video</span></div>
        <div class="reel"><div class="ph ph--dark" style="position:absolute;inset:0;border-radius:16px"><img src="/images/inner/inset/inset-16.png" alt="Orthodontist video reel"></div><button class="playbtn" aria-label="Play reel"></button><span class="playbtn__label">Play Video</span></div>
      </div>
      <div class="reels__foot">
        <a class="btn btn--white" href="#">Discover More</a>
        <div class="nav-arrows"><button class="nav-arrow" data-prev aria-label="Previous"><svg width="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M15 6l-6 6 6 6"/></svg></button><button class="nav-arrow" data-next aria-label="Next"><svg width="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 6l6 6-6 6"/></svg></button></div>
      </div>
    </div>
  </section>

  <!-- ===================== THE SADIQ TRUST (Rev06 care) ===================== -->
  <section class="sadiq">
    <div class="container">
      <div class="sadiq__card reveal">
        <div class="sadiq__bg"><img src="/images/home/sadiq-trust.png" alt="Dr Sadiq with schoolchildren in The Gambia"></div>
        <div class="sadiq__body">
          <span class="eyebrow">Care Beyond the Chair</span>
          <h2>The Sadiq Trust</h2>
          <p>Founded by Dr Sadiq in October 2023, The Sadiq Trust extends Orchard's commitment to care beyond clinical treatment. The charity supports vulnerable communities across multiple countries, with a particular focus on children with special needs and disabilities. Through the development of specialist education facilities – including a dedicated school in The Gambia – the Trust works to provide access, dignity, and opportunity where it is often lacking.</p>
          <a class="btn btn--white" href="#">Learn More About the Sadiq Trust</a>
        </div>
      </div>
    </div>
  </section>

  <!-- ===================== CTA BAND ===================== -->
  <section class="cta">
    <div class="container">
      <div class="cta__card reveal">
        <div class="cta__media"><img src="/images/inner/inset/inset-18.png" alt="Happy Invisalign patient on the phone in London"></div><!-- IMG: happy Invisalign patient on phone in London 4:5 -->
        <div class="cta__body">
          <span class="eyebrow">Book a Free Consultation</span>
          <h2>Start your<br><strong>Invisalign journey</strong></h2>
          <p>Book a free consultation at your nearest Orchard Orthodontics practice. Our specialist team will guide you through every step towards the smile you deserve.</p>
          <a class="btn btn--green" href="/booking">Book a Free Consultation</a>
        </div>
      </div>
    </div>
  </section>`;

export default function Page() {
  return (
    <PageShell active="treatments" solid={true} pageClass="page-inset">
      <div dangerouslySetInnerHTML={{ __html: CONTENT }} />
    </PageShell>
  );
}
