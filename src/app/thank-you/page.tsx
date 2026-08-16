import type { Metadata } from "next";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Thank You — Orchard Orthodontics",
  description: "Thank you for your assessment request. Our specialist team will be in touch shortly. Here's what happens next at your Orchard Orthodontics appointment.",
};

const CONTENT = `<!-- ===================== CONFIRMATION HERO ===================== -->
  <section class="inset-hero">
    <div class="container">
      <h1>Thank you for your <strong>assessment request</strong>.</h1>
      <p>We've received your details and a member of our specialist team will be in touch shortly to arrange your free consultation. In the meantime, here's what you can look forward to when you visit Orchard Orthodontics.</p>
    </div>
  </section>

  <!-- ===================== WELCOME VIDEO BAND ===================== -->
  <section class="ty-video">
    <div class="ty-video__media">
      <div class="ph ph--dark"><img src="/images/inner/thank-you/thank-you-01.png" alt="Orchard Orthodontics practice exterior"></div>
      <!-- IMG: Orchard Orthodontics practice exterior / welcome video 16:6 -->
      <button class="ty-video__play" aria-label="Play welcome video">
        <span class="playbtn"></span>
        <span>Play Video</span>
      </button>
    </div>
  </section>

  <!-- ===================== WHAT HAPPENS AT YOUR APPOINTMENT ===================== -->
  <section class="section">
    <div class="container">
      <h2>What happens <strong>at your appointment?</strong></h2>
      <p style="max-width:760px">Your first visit is relaxed, unhurried and completely free of obligation. Our specialists take the time to understand your goals and explain every option clearly, so you can make a confident decision about your smile.</p>
      <div class="ty-steps">
        <div class="ty-step reveal">
          <img class="ty-step__ico" src="/images/icons/why-face.svg" alt="">
          <h5>A warm welcome</h5>
          <p>You'll be greeted by our friendly team and shown through to meet one of our specialist orthodontists for a relaxed, one-to-one chat.</p>
        </div>
        <div class="ty-step reveal" data-delay="1">
          <img class="ty-step__ico" src="/images/icons/why-ai.svg" alt="">
          <h5>A digital 3D scan</h5>
          <p>Using our advanced intraoral scanner, we capture a precise 3D image of your teeth — no messy impressions, no discomfort.</p>
        </div>
        <div class="ty-step reveal" data-delay="2">
          <img class="ty-step__ico" src="/images/icons/why-diamond.svg" alt="">
          <h5>A personalised plan</h5>
          <p>Your orthodontist will talk you through the treatment options best suited to you and preview the results you can expect.</p>
        </div>
        <div class="ty-step reveal" data-delay="3">
          <img class="ty-step__ico" src="/images/icons/price-check.svg" alt="">
          <h5>A clear quote</h5>
          <p>You'll receive transparent pricing and flexible, interest-free finance options — with no pressure and no surprises.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ===================== BEFORE & AFTER ===================== -->
  <section class="section ty-ba">
    <div class="container">
      <span class="eyebrow">Before &amp; After</span>
      <h2 style="margin:12px 0 16px">Real smiles, <strong>real transformations</strong></h2>
      <p style="max-width:760px;margin-bottom:0">Every day our specialists help patients across London and Surrey achieve results they're proud to share. Here are just a few of the smiles we've transformed.</p>
      <div class="cards" style="margin-top:48px">
        <div>
          <div class="ba">
            <!-- IMG: before/after smile — Invisalign 4:3 -->
            <div class="ph"><img src="/images/inner/thank-you/thank-you-02.png" alt="Before and after Invisalign smile transformation"></div>
            <span class="ba__tag ba__tag--b">Before</span>
            <span class="ba__tag ba__tag--a">After</span>
          </div>
          <p class="ty-ba__cap">Invisalign® clear aligners</p>
        </div>
        <div>
          <div class="ba">
            <!-- IMG: before/after smile — Damon braces 4:3 -->
            <div class="ph"><img src="/images/inner/thank-you/thank-you-03.png" alt="Before and after Damon braces smile transformation"></div>
            <span class="ba__tag ba__tag--b">Before</span>
            <span class="ba__tag ba__tag--a">After</span>
          </div>
          <p class="ty-ba__cap">Damon self-ligating braces</p>
        </div>
        <div>
          <div class="ba">
            <!-- IMG: before/after smile — cosmetic bonding 4:3 -->
            <div class="ph"><img src="/images/inner/thank-you/thank-you-04.png" alt="Before and after cosmetic bonding smile transformation"></div>
            <span class="ba__tag ba__tag--b">Before</span>
            <span class="ba__tag ba__tag--a">After</span>
          </div>
          <p class="ty-ba__cap">Cosmetic bonding</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ===================== TESTIMONIALS ===================== -->
  <section class="section">
    <div class="container">
      <span class="eyebrow">Testimonials</span>
      <h2 style="margin:12px 0 16px">What our <strong>patients say</strong></h2>
      <p style="max-width:760px;margin-bottom:0">We're proud of the difference we make, but it's our patients who tell the story best. Here's what a few of them had to say about their Orchard experience.</p>
      <div class="ty-quotes">
        <div class="ty-quote reveal">
          <p>"From the very first appointment I felt looked after. The team explained everything clearly and my Invisalign results exceeded what I'd hoped for."</p>
          <b>Danny Lithel-Torphy</b>
        </div>
        <div class="ty-quote reveal" data-delay="1">
          <p>"A genuinely brilliant practice. Friendly, professional and always on time. I couldn't be happier with my new smile — thank you Orchard."</p>
          <b>Betty Harmiston</b>
        </div>
        <div class="ty-quote reveal" data-delay="2">
          <p>"The digital scanning and AI monitoring made the whole process so easy around my work. Highly recommend the team to anyone considering treatment."</p>
          <b>Jesse Jacobs</b>
        </div>
      </div>
    </div>
  </section>

  <!-- ===================== ANY QUESTION? CALL US ===================== -->
  <section class="ty-callus">
    <div class="container">
      <div class="ty-callus__grid">
        <div class="ty-callus__body reveal reveal--left">
          <h2>Any question?<br><strong>Call us!</strong></h2>
          <p>If you'd like to speak to us before your consultation, our team is always happy to help. Give us a call and we'll answer any questions you have.</p>
          <a class="btn btn--white" href="tel:02086497500">Call Us</a>
        </div>
        <div class="ty-callus__media reveal reveal--right">
          <!-- IMG: friendly Orchard clinician smiling in surgery 4:3 -->
          <div class="ph"><img src="/images/inner/thank-you/thank-you-06.png" alt="Friendly Orchard clinician smiling in the surgery"></div>
        </div>
      </div>
    </div>
  </section>

  <!-- ===================== CTA BAND ===================== -->
  <section class="cta">
    <div class="container">
      <div class="cta__card reveal">
        <div class="cta__media">
          <!-- IMG: happy patient using phone outdoors in London 4:5 -->
          <img src="/images/inner/thank-you/thank-you-08.png" alt="Happy patient using her phone outdoors in London">
        </div>
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
    <PageShell active="" solid={true} pageClass="page-thank-you">
      <div dangerouslySetInnerHTML={{ __html: CONTENT }} />
    </PageShell>
  );
}
