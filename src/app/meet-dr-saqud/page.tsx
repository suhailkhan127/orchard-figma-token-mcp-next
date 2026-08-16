import type { Metadata } from "next";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Meet Dr Kalim Sadiq — Specialist Orthodontist",
  description: "Meet Dr Kalim Sadiq, award-winning Specialist Orthodontist and founder of Orchard Orthodontics. Discover his experience, qualifications and approach to bespoke Invisalign® care across South London and Surrey.",
};

const CONTENT = `<!-- ===================== DOCTOR HERO ===================== -->
  <section class="inset-hero">
    <div class="inset-hero__bg"><div class="ph ph--dark"><img src="/images/inner/meet-dr-saqud/meet-dr-saqud-04.png" alt=""></div><!-- IMG: soft blurred clinic interior backdrop 16:9 --></div>
    <div class="container">
      <div class="inset-hero__grid drhero__grid">
        <div class="reveal reveal--left">
          <h1>Dr Kalim<br><strong>Sadiq</strong></h1>
          <span class="drhero__role">Specialist Orthodontist</span>
          <p>Dr Sadiq is an award-winning Specialist Orthodontist who has been recognised for his work across a wide range of orthodontic treatments. As lead orthodontist for the practice, he has a keen interest in the multidisciplinary treatment of adult patients and specialises in creating bespoke Invisalign® treatment plans.</p>
          <a class="btn btn--green" href="/booking">Book a Free Consultation</a>
        </div>
        <div class="inset-hero__media drhero__media">
          <div class="ph ph--dark"><img src="/images/inner/meet-dr-saqud/meet-dr-saqud-05.png" alt="Orchard Orthodontics specialist at the clinic reception"></div><!-- IMG: Dr Kalim Sadiq studio portrait, dark suit, smiling 4:5 -->
        </div>
      </div>
    </div>
  </section>

  <!-- ===================== ABOUT / BIO ===================== -->
  <section class="section drbio">
    <div class="container">
      <div class="drbio__head">
        <span class="eyebrow">About</span>
        <h2>About Dr Sadiq</h2>
      </div>
      <div class="drbio__cols">
        <div>
          <p>Dr Kalim Sadiq qualified as a dentist from Guy's Hospital in 1998 with five distinctions, before gaining his master's degree in orthodontics from The Eastman Dental Hospital in 2003, where he had the honour of coming top in the country. After completing a three-year orthodontic specialist programme, he became a GDC registered specialist orthodontist. He is also a former SHO maxillofacial surgeon at the teaching hospital of Cambridge University, during which time he passed the membership to the faculty examination with the Royal College of Surgeons and Physicians.</p>
          <p>In 2004, Dr Sadiq was the winner of the British Orthodontic Society gold medal, and has since been awarded a Clinical Excellence Award for orthodontic specialist training at the Eastman Dental Hospital in London.</p>
        </div>
        <div>
          <p>Dr Sadiq set up Orchard Orthodontics in 2005 with a vision of providing each of his patients with an outstanding care plan to achieve a wonderful smile. Many of his patients begin treatment after seeing the life-changing results achieved by family and friends.</p>
          <p>As a father of three young children, Dr Sadiq aims to treat your family with the same care and respect he wants for his own. He has a fun and gentle approach with younger patients, who thoroughly enjoy his sense of humour.</p>
          <p>Dr Sadiq regularly attends training to keep up to date with the latest developments in orthodontics. Among UK-trained orthodontists, he is a provider of both Incognito hidden lingual braces and Invisalign® treatments, including Invisalign® First for children.</p>
          <p>Outside of the practice, Dr Sadiq is a keen sportsman, with a particular interest in squash. He also enjoys travelling and experiencing international cuisine.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ===================== QUALIFICATIONS & AWARDS ===================== -->
  <section class="section quals">
    <div class="container">
      <div class="quals__head">
        <span class="eyebrow">Credentials</span>
        <h2>Qualifications &amp; Awards</h2>
      </div>
      <div class="quals__cols">
        <ul class="quals__list">
          <li>Top in the country in the Orthodontic Examinations, receiving a Master of Science Degree and Membership in Orthodontics</li>
          <li>Winner of the British Orthodontic Society Gold Medal (2004)</li>
          <li>Clinical Excellence Award for Orthodontic Specialist Training (Eastman Dental Hospital, London)</li>
        </ul>
        <ul class="quals__list">
          <li>BDS with 5 distinctions (Guy's Dental Hospital, London)</li>
          <li>GDC registered specialist (GDC no: 75132)</li>
          <li>Former SHO Maxillofacial Surgeon (Cambridge University)</li>
          <li>Member of the Royal College of Surgeons and Physicians</li>
        </ul>
      </div>
    </div>
  </section>

  <!-- ===================== CTA BAND ===================== -->
  <section class="cta">
    <div class="container">
      <div class="cta__card reveal">
        <div class="cta__media"><img src="/images/inner/meet-dr-saqud/meet-dr-saqud-03.png" alt="Patient with clear aligners using her phone on a London street"><!-- IMG: patient with clear aligners using phone, city street 4:5 --></div>
        <div class="cta__body">
          <span class="eyebrow">Book a Free Consultation</span>
          <h2>Start your journey<br><strong>with Dr Sadiq</strong></h2>
          <p>Book a free consultation and let Dr Sadiq design a bespoke treatment plan for you. With specialist expertise and a genuinely caring approach, you are in the very best hands for the smile you deserve.</p>
          <a class="btn btn--green" href="/booking">Book a Free Consultation</a>
        </div>
      </div>
    </div>
  </section>`;

export default function Page() {
  return (
    <PageShell active="about" solid={true} pageClass="page-meet-dr-saqud">
      <div dangerouslySetInnerHTML={{ __html: CONTENT }} />
    </PageShell>
  );
}
