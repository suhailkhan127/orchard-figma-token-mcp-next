import type { Metadata } from "next";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "How to Choose an Orthodontist",
  description: "A specialist's guide to choosing the right orthodontist. Learn the five key things to consider, from qualifications and experience to results, reviews and value.",
};

const CONTENT = `<!-- ===================== INSET HERO ===================== -->
  <section class="inset-hero">
    <div class="inset-hero__bg"><div class="ph ph--dark" aria-hidden="true"></div><!-- IMG: orthodontist treating patient, faded background 16:9 --></div>
    <div class="container">
      <div class="inset-hero__grid">
        <div class="reveal reveal--left">
          <div class="crumb"><a href="/">Home</a> / Choosing an Orthodontist</div>
          <h1>How to choose<br><strong>an orthodontist</strong></h1>
          <p>Choosing the right orthodontist is an important decision that can have a lasting impact on your smile and oral health. This page is designed to help you understand what to look for when selecting an orthodontic provider.</p>
          <a class="btn btn--green" href="/booking">Book a Free Consultation</a>
        </div>
        <div class="inset-hero__media reveal reveal--right">
          <img src="/images/inner/how-to-choose-orthodontist/how-to-choose-orthodontist-01.png" alt="Two specialist orthodontists treating a patient in the clinic">
          <div class="ph ph--dark"></div><!-- IMG: two specialist orthodontists treating a patient in clinic 4:3 -->
        </div>
      </div>
    </div>
  </section>

  <!-- ===================== FIVE THINGS TO CONSIDER ===================== -->
  <section class="section">
    <div class="container">
      <div class="choose-head reveal">
        <h2>5 things to consider<br><strong>when choosing an orthodontist</strong></h2>
        <p>At Orchard Orthodontics, we believe informed patients make confident choices. When selecting an orthodontist, these key factors can help guide your decision.</p>
      </div>

      <!-- Row 1: text left, image right -->
      <div class="sbs reveal">
        <div class="sbs__body">
          <div class="step">
            <h3><span class="step__n">1.</span> Dentist vs orthodontist</h3>
            <p>All orthodontists are fully qualified dentists who complete several additional years of postgraduate training to specialise in orthodontics. Some dentists may undertake short courses to apply basic teeth-straightening products, but they are not specialist orthodontists.</p>
            <p>Dr Sadiq is a fully qualified Specialist Orthodontist registered with the GDC (75132).</p>
          </div>
          <div class="step">
            <h3><span class="step__n">2.</span> Avoid quick fixes</h3>
            <p>While some treatments promise fast results, they may not address the underlying cause of misalignment. This can lead to relapse and the need for further treatment. Orthodontics requires careful planning to achieve stable, long-lasting results.</p>
            <p>Orchard Orthodontics is a specialist practice with over 12 years' experience dedicated solely to creating healthy, straighter smiles.</p>
          </div>
        </div>
        <div class="sbs__media">
          <img src="/images/inner/how-to-choose-orthodontist/how-to-choose-orthodontist-02.png" alt="Hand holding an open case with a clear aligner">
          <div class="ph"></div><!-- IMG: hand holding a clear aligner case 1:1 -->
        </div>
      </div>

      <!-- Row 2: image left, text right -->
      <div class="sbs sbs--rev reveal">
        <div class="sbs__body">
          <div class="step">
            <h3><span class="step__n">3.</span> Cheapest isn't always best</h3>
            <p>Orthodontic treatment is a once-in-a-lifetime investment. Choosing the lowest price may compromise results, longevity or the level of care you receive. Consider your clinician's qualifications, experience, team support and what is included in your treatment package.</p>
            <p>At Orchard Orthodontics, we offer competitive pricing alongside interest-free monthly payment plans.</p>
          </div>
          <div class="step">
            <h3><span class="step__n">4.</span> Experience and expertise</h3>
            <p>Experience counts. An orthodontist who has treated thousands of cases can recognise the right approach for your smile and anticipate any challenges along the way. Ask how long your clinician has been practising and the range of treatments they provide.</p>
            <p>Our specialist team combines advanced training with years of hands-on experience, from Invisalign® to Damon and NHS braces, so every treatment plan is tailored to you.</p>
          </div>
        </div>
        <div class="sbs__media">
          <img src="/images/inner/how-to-choose-orthodontist/how-to-choose-orthodontist-03.png" alt="Smiling Orchard Orthodontics patient">
          <div class="ph"></div><!-- IMG: smiling patient portrait 1:1 -->
        </div>
      </div>

      <!-- Row 3: text left, image right -->
      <div class="sbs reveal">
        <div class="sbs__body">
          <div class="step">
            <h3><span class="step__n">5.</span> Results and reviews</h3>
            <p>Always review testimonials and before &amp; after case photos to understand the results an orthodontist can deliver. Hearing from previous patients offers valuable insight into both treatment outcomes and overall experience.</p>
            <p>We encourage you to explore our <a href="/smile-gallery">patient testimonials</a> and view our latest Google reviews.</p>
          </div>
        </div>
        <div class="sbs__media">
          <img src="/images/inner/how-to-choose-orthodontist/how-to-choose-orthodontist-04.png" alt="Hand holding an open case with a clear aligner">
          <div class="ph"></div><!-- IMG: hand holding a clear aligner case 1:1 -->
        </div>
      </div>
    </div>
  </section>

  <!-- ===================== CTA BAND ===================== -->
  <section class="cta">
    <div class="container">
      <div class="cta__card reveal">
        <div class="cta__media"><img src="/images/home/cta-img.png" alt="Patient consultation with a specialist orthodontist"></div>
        <div class="cta__body">
          <span class="eyebrow">Ready to begin?</span>
          <h2>Book your free consultation</h2>
          <p>Meet our specialist team, discuss your goals and discover the right treatment for your smile. There's no obligation, just clear, expert advice.</p>
          <a class="btn btn--green" href="/booking">Book a Free Consultation</a>
        </div>
      </div>
    </div>
  </section>`;

export default function Page() {
  return (
    <PageShell active="treatments" solid={true} pageClass="page-how-to-choose-orthodontist">
      <div dangerouslySetInnerHTML={{ __html: CONTENT }} />
    </PageShell>
  );
}
