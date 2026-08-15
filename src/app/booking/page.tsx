import type { Metadata } from "next";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Book a Free Consultation — Orchard Orthodontics | Croydon, Brixton &amp; Guildford",
  description: "Book your free orthodontic consultation with Orchard Orthodontics in Croydon, Brixton or Guildford. Tell us a little about you and our specialist team will be in touch.",
};

const CONTENT = `<!-- ===================== HERO + CONSULTATION FORM ===================== -->
  <section class="inset-hero book-hero">
    <!-- IMG: South London street scene, softly blurred behind navy overlay 16:9 -->
    <div class="inset-hero__bg ph ph--dark"><img src="/images/inner/booking/booking-01.png" alt="" loading="lazy"></div>
    <div class="container">
      <div class="inset-hero__grid book-hero__grid">
        <div class="reveal reveal--left">
          <span class="eyebrow">Book a Free Consultation</span>
          <h1>Your smile journey<br><strong>starts here</strong></h1>
          <p>Tell us a little about yourself and choose your nearest practice. Our specialist team will be in touch to arrange your free, no-obligation consultation.</p>
          <form class="site-form" action="#" method="post" novalidate>
            <div class="site-form__row">
              <div>
                <label for="first-name">First name</label>
                <input type="text" id="first-name" name="first-name" placeholder="First name" autocomplete="given-name" required>
              </div>
              <div>
                <label for="last-name">Last name</label>
                <input type="text" id="last-name" name="last-name" placeholder="Last name" autocomplete="family-name" required>
              </div>
            </div>
            <div>
              <label for="email">Email</label>
              <input type="email" id="email" name="email" placeholder="you@example.com" autocomplete="email" required>
            </div>
            <div>
              <label for="phone">Phone number</label>
              <input type="tel" id="phone" name="phone" placeholder="020 8649 7500" autocomplete="tel" required>
            </div>
            <div>
              <label for="location">Preferred location</label>
              <select id="location" name="location" required>
                <option value="" disabled selected>Select a practice</option>
                <option value="croydon">Croydon</option>
                <option value="brixton">Brixton</option>
                <option value="guildford">Guildford</option>
              </select>
            </div>
            <div>
              <label for="treatment">Preferred treatment</label>
              <select id="treatment" name="treatment" required>
                <option value="" disabled selected>Select a treatment</option>
                <option value="invisalign">Invisalign®</option>
                <option value="damon">Damon Braces</option>
                <option value="nhs">NHS Braces</option>
                <option value="carriere">Carriere Motion</option>
                <option value="ai-monitoring">AI Monitoring</option>
                <option value="cosmetic">Cosmetic Dentistry</option>
                <option value="not-sure">Not sure yet</option>
              </select>
            </div>
            <div>
              <label for="message">Your message</label>
              <textarea id="message" name="message" placeholder="Tell us a little about what you'd like to achieve"></textarea>
            </div>
            <button type="submit" class="btn btn--green">Book a Free Consultation</button>
          </form>
          <p class="form-note">For further information about how we use your data, please see our <a href="#">privacy policy</a>.</p>
        </div>
        <div class="reveal reveal--right inset-hero__media book-hero__media">
          <!-- IMG: smiling patient checking phone outdoors in London 3:4 -->
          <div class="ph ph--portrait" style="width:100%;height:100%"><img src="/images/inner/booking/booking-02.png" alt="Smiling patient checking her phone on a London street" loading="lazy"></div>
        </div>
      </div>
    </div>
  </section>

  <!-- ===================== WHAT HAPPENS AT YOUR APPOINTMENT ===================== -->
  <section class="section steps reveal">
    <div class="container">
      <h2>What happens <span style="color:var(--c02)">at your appointment?</span></h2>
      <p class="steps__intro">Your free consultation is a relaxed, no-pressure conversation about your smile. Here's what to expect from the moment you arrive to leaving with a clear plan and quote.</p>
      <div class="steps__grid">
        <div class="step">
          <img class="step__ico" src="/images/icons/why-face.svg" alt="">
          <p>We start with a friendly chat about your goals, your medical history and any concerns, so we understand exactly what you'd like to achieve.</p>
        </div>
        <div class="step">
          <img class="step__ico" src="/images/icons/why-medal.svg" alt="">
          <p>One of our specialist orthodontists carries out a thorough clinical assessment of your teeth, bite and smile to confirm your options.</p>
        </div>
        <div class="step">
          <img class="step__ico" src="/images/icons/price-cal.svg" alt="">
          <p>You'll receive a tailored treatment plan with recommended options, expected timelines and a clear written quote with no hidden costs.</p>
        </div>
        <div class="step">
          <img class="step__ico" src="/images/icons/why-ai.svg" alt="">
          <p>We explain finance and payment plans, answer every question, and help you book your next steps whenever you feel ready to begin.</p>
        </div>
      </div>
      <div class="steps__cta">
        <a class="btn btn--green" href="#main">Book a Free Consultation</a>
      </div>
    </div>
  </section>`;

export default function Page() {
  return (
    <PageShell active="" solid={false} pageClass="page-booking">
      <div dangerouslySetInnerHTML={{ __html: CONTENT }} />
    </PageShell>
  );
}
