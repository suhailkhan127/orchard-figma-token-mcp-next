import type { Metadata } from "next";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Orchard Orthodontics. Book a free consultation or ask us anything at our Croydon, Brixton or Guildford practices. Call 020 8649 7500.",
};

const CONTENT = `<!-- ===================== INSET HERO ===================== -->
  <section class="inset-hero is-center">
    <div class="container">
      <div class="inset-hero__grid">
        <div class="reveal">
          <nav class="crumb" aria-label="Breadcrumb"><a href="/">Home</a> &nbsp;/&nbsp; Contact Us</nav>
          <span class="eyebrow">Get in touch</span>
          <h1>We would love to <strong>hear from you</strong></h1>
          <p>Questions about treatment, appointments or referrals? Our friendly team across Croydon, Brixton and Guildford is here to help. Send us a message or call and we will get straight back to you.</p>
          <a class="btn btn--green" href="tel:02086497500">Call 020 8649 7500</a>
        </div>
      </div>
    </div>
  </section>

  <!-- ===================== CONTACT FORM ===================== -->
  <section class="cform">
    <div class="container">
      <div class="cform__card reveal">
        <div class="cform__media">
          <!-- IMG: smiling patient using phone outdoors in London, portrait 4:5 -->
          <div class="ph ph--dark"><img src="/images/inner/contact/contact-04.png" alt="Smiling patient using her phone on a London street" loading="lazy"></div>
        </div>
        <div class="cform__body">
          <span class="eyebrow">Send us a message</span>
          <h2>Book your free consultation</h2>
          <p>Tell us your nearest practice and a few details, and one of our team will be in touch to arrange your visit.</p>
          <form class="site-form" action="#" method="post" novalidate>
            <label>
              <span class="sr-only">Preferred practice</span>
              <select name="practice" required>
                <option value="" selected disabled>Preferred practice</option>
                <option value="croydon">Croydon — Cherry Orchard Road</option>
                <option value="brixton">Brixton — Brixton Hill</option>
                <option value="guildford">Guildford — Faraday Road</option>
              </select>
            </label>
            <div class="form-row">
              <label>
                <span class="sr-only">First name</span>
                <input type="text" name="first_name" placeholder="First name" autocomplete="given-name" required>
              </label>
              <label>
                <span class="sr-only">Last name</span>
                <input type="text" name="last_name" placeholder="Last name" autocomplete="family-name" required>
              </label>
            </div>
            <label>
              <span class="sr-only">Email</span>
              <input type="email" name="email" placeholder="E-mail" autocomplete="email" required>
            </label>
            <label>
              <span class="sr-only">Phone number</span>
              <input type="tel" name="phone" placeholder="Phone number" autocomplete="tel" required>
            </label>
            <label>
              <span class="sr-only">Message</span>
              <textarea name="message" placeholder="How can we help?"></textarea>
            </label>
            <button class="btn btn--green" type="submit">Book a Free Consultation</button>
            <p class="form-note">For further information about how we use your data, please see our <a href="#">privacy policy</a>.</p>
          </form>
        </div>
      </div>
    </div>
  </section>`;

export default function Page() {
  return (
    <PageShell active="contact" solid={true} pageClass="page-contact">
      <div dangerouslySetInnerHTML={{ __html: CONTENT }} />
    </PageShell>
  );
}
