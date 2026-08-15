import type { Metadata } from "next";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Meet the Team",
  description: "Meet the specialist orthodontists, therapists and hygienists behind Orchard Orthodontics. Award-winning, GDC-registered clinicians caring for smiles across South London and Surrey.",
};

const CONTENT = `<!-- ===================== HERO ===================== -->
  <section class="inset-hero page-meet-team__hero">
    <div class="container">
      <div class="inset-hero__grid">
        <div class="reveal reveal--left">
          <h1>Meet the <strong>Team</strong></h1>
          <p>Behind every Orchard Orthodontics smile is a team of specialist orthodontists, therapists and hygienists. Our GDC-registered clinicians combine years of experience with genuine, friendly care across our practices in South London and Surrey.</p>
        </div>
        <div class="inset-hero__media reveal reveal--right">
          <div class="ph"><img src="/images/inner/meet-team/meet-team-06.png" alt="Smiling specialist orthodontist" loading="lazy"></div>
          <!-- IMG: smiling lead orthodontist portrait 4:5 -->
        </div>
      </div>
    </div>
  </section>

  <!-- ===================== TEAM GRID ===================== -->
  <section class="section">
    <div class="container">

      <div class="teamfilter">
        <button class="teamfilter__btn is-active" type="button">All</button>
        <button class="teamfilter__btn" type="button">Orthodontists</button>
        <button class="teamfilter__btn" type="button">Therapists</button>
        <button class="teamfilter__btn" type="button">Hygienists</button>
        <button class="teamfilter__btn" type="button">Support</button>
      </div>

      <div class="team">

        <!-- Card 1 -->
        <button class="tcard reveal" type="button">
          <div class="tcard__media"><div class="ph"><img src="/images/inner/meet-team/meet-team-01.png" alt="Dr Priya Agarwal, specialist orthodontist" loading="lazy"></div><!-- IMG: Dr Priya Agarwal portrait 1:1 --></div>
          <span class="tcard__role">Specialist Orthodontist</span>
          <span class="tcard__name">Dr Priya Agarwal</span>
          <span class="tcard__gdc">GDC: 70629</span>
          <p class="tcard__excerpt">Priya is a specialist orthodontist working across our Croydon and Brixton practices, with a particular interest in Invisalign and complex adult treatment.</p>
          <span class="tcard__more">Read more →</span>
          <div class="tcard__full">
            <span class="tcard__role">Specialist Orthodontist</span>
            <h3>Dr Priya Agarwal</h3>
            <p class="tcard__gdc">GDC: 70629</p>
            <div class="tcard__media-full"><img src="/images/inner/meet-team/meet-team-06.png" alt="Dr Priya Agarwal, specialist orthodontist" loading="lazy"></div>
            <p>Priya qualified in dentistry before completing three further years of specialist orthodontic training, and now leads treatment planning across our South London practices. She has a special interest in clear aligner therapy and treating adult patients who thought orthodontics was no longer an option for them.</p>
            <p>She believes the best results come from listening first. Priya takes time to understand what each patient wants from their smile, then designs a treatment plan around their lifestyle, budget and goals — explaining every step in plain English along the way.</p>
            <p>Outside the practice, Priya mentors newly qualified clinicians and regularly attends conferences to stay at the forefront of orthodontic techniques.</p>
          </div>
        </button>

        <!-- Card 2 -->
        <button class="tcard reveal" type="button">
          <div class="tcard__media"><div class="ph"><img src="/images/inner/meet-team/meet-team-02.png" alt="Haneta Rondonuwu, orthodontic therapist" loading="lazy"></div><!-- IMG: Haneta Rondonuwu portrait 1:1 --></div>
          <span class="tcard__role">Orthodontic Therapist</span>
          <span class="tcard__name">Haneta Rondonuwu</span>
          <span class="tcard__gdc">GDC: 22356</span>
          <p class="tcard__excerpt">Haneta is an experienced orthodontic therapist who works closely with our specialists to fit, adjust and monitor braces and aligners.</p>
          <span class="tcard__more">Read more →</span>
          <div class="tcard__full">
            <span class="tcard__role">Orthodontic Therapist</span>
            <h3>Haneta Rondonuwu</h3>
            <p class="tcard__gdc">GDC: 22356</p>
            <div class="tcard__media-full"><img src="/images/inner/meet-team/meet-team-08.png" alt="Haneta Rondonuwu, orthodontic therapist" loading="lazy"></div>
            <p>Haneta joined Orchard Orthodontics after training and working in both hospital and private practice. As an orthodontic therapist she carries out much of the hands-on care during treatment — fitting brackets, changing wires, taking impressions and keeping each smile on track between reviews.</p>
            <p>Patients love her calm, reassuring manner, especially younger patients and anyone feeling nervous about their first appointment. Haneta is passionate about making every visit comfortable and stress-free.</p>
            <p>She has extensive experience treating patients with fixed appliances and aligners, and takes real pride in seeing a smile transform from the first fitting to the final reveal.</p>
          </div>
        </button>

        <!-- Card 3 -->
        <button class="tcard reveal" type="button">
          <div class="tcard__media"><div class="ph"><img src="/images/inner/meet-team/meet-team-03.png" alt="Dr James Whitmore, specialist orthodontist" loading="lazy"></div><!-- IMG: Dr James Whitmore portrait 1:1 --></div>
          <span class="tcard__role">Specialist Orthodontist</span>
          <span class="tcard__name">Dr James Whitmore</span>
          <span class="tcard__gdc">GDC: 68142</span>
          <p class="tcard__excerpt">James is a specialist orthodontist who treats children, teenagers and adults, with a focus on early intervention and functional appliances.</p>
          <span class="tcard__more">Read more →</span>
          <div class="tcard__full">
            <span class="tcard__role">Specialist Orthodontist</span>
            <h3>Dr James Whitmore</h3>
            <p class="tcard__gdc">GDC: 68142</p>
            <div class="tcard__media-full"><img src="/images/inner/meet-team/meet-team-06.png" alt="Dr James Whitmore, specialist orthodontist" loading="lazy"></div>
            <p>James has spent his career helping patients of every age achieve healthier, straighter smiles. He is a specialist orthodontist with a keen interest in early treatment for children, guiding developing teeth and jaws to reduce the need for more complex work later on.</p>
            <p>He treats a wide range of cases, from NHS braces for younger patients to Damon and Invisalign for adults, and is known for his thorough, gentle approach.</p>
            <p>James is committed to continuing education and shares his knowledge with the wider team through regular in-practice training sessions.</p>
          </div>
        </button>

        <!-- Card 4 -->
        <button class="tcard reveal" type="button">
          <div class="tcard__media"><div class="ph"><img src="/images/inner/meet-team/meet-team-04.png" alt="Sofia Almeida, orthodontic therapist" loading="lazy"></div><!-- IMG: Sofia Almeida portrait 1:1 --></div>
          <span class="tcard__role">Orthodontic Therapist</span>
          <span class="tcard__name">Sofia Almeida</span>
          <span class="tcard__gdc">GDC: 24518</span>
          <p class="tcard__excerpt">Sofia is a friendly orthodontic therapist who supports patients through every stage of their aligner and brace treatment.</p>
          <span class="tcard__more">Read more →</span>
          <div class="tcard__full">
            <span class="tcard__role">Orthodontic Therapist</span>
            <h3>Sofia Almeida</h3>
            <p class="tcard__gdc">GDC: 24518</p>
            <div class="tcard__media-full"><img src="/images/inner/meet-team/meet-team-08.png" alt="Sofia Almeida, orthodontic therapist" loading="lazy"></div>
            <p>Sofia brings warmth and precision to every appointment. As an orthodontic therapist she works alongside our specialists to deliver day-to-day care, from bonding brackets to fitting retainers and offering oral hygiene advice.</p>
            <p>Fluent in Portuguese as well as English, Sofia is a familiar and welcoming face for many of our patients and their families.</p>
            <p>She is a firm believer that a great smile is built on great habits, and enjoys coaching patients on how to look after their teeth throughout treatment and beyond.</p>
          </div>
        </button>

        <!-- Card 5 -->
        <button class="tcard reveal" type="button">
          <div class="tcard__media"><div class="ph"><img src="/images/inner/meet-team/meet-team-01.png" alt="Dr Aisha Khan, specialist orthodontist" loading="lazy"></div><!-- IMG: Dr Aisha Khan portrait 1:1 --></div>
          <span class="tcard__role">Specialist Orthodontist</span>
          <span class="tcard__name">Dr Aisha Khan</span>
          <span class="tcard__gdc">GDC: 71903</span>
          <p class="tcard__excerpt">Aisha is a specialist orthodontist with a passion for discreet, comfortable treatment and the latest digital planning technology.</p>
          <span class="tcard__more">Read more →</span>
          <div class="tcard__full">
            <span class="tcard__role">Specialist Orthodontist</span>
            <h3>Dr Aisha Khan</h3>
            <p class="tcard__gdc">GDC: 71903</p>
            <div class="tcard__media-full"><img src="/images/inner/meet-team/meet-team-06.png" alt="Dr Aisha Khan, specialist orthodontist" loading="lazy"></div>
            <p>Aisha combines specialist orthodontic expertise with a love of the latest technology. She uses digital scanning and AI-assisted monitoring to plan precise, predictable treatment and keep patients on track with fewer in-practice visits.</p>
            <p>She has a particular interest in aesthetic orthodontics for adults, helping busy professionals straighten their teeth discreetly with clear aligners and tooth-coloured appliances.</p>
            <p>Aisha is dedicated to patient comfort and takes great care to make every step of the journey feel calm, clear and reassuring.</p>
          </div>
        </button>

        <!-- Card 6 -->
        <button class="tcard reveal" type="button">
          <div class="tcard__media"><div class="ph"><img src="/images/inner/meet-team/meet-team-02.png" alt="Grace Lim, orthodontic therapist" loading="lazy"></div><!-- IMG: Grace Lim portrait 1:1 --></div>
          <span class="tcard__role">Orthodontic Therapist</span>
          <span class="tcard__name">Grace Lim</span>
          <span class="tcard__gdc">GDC: 25610</span>
          <p class="tcard__excerpt">Grace is an orthodontic therapist who makes every appointment feel easy, especially for our youngest and most nervous patients.</p>
          <span class="tcard__more">Read more →</span>
          <div class="tcard__full">
            <span class="tcard__role">Orthodontic Therapist</span>
            <h3>Grace Lim</h3>
            <p class="tcard__gdc">GDC: 25610</p>
            <div class="tcard__media-full"><img src="/images/inner/meet-team/meet-team-08.png" alt="Grace Lim, orthodontic therapist" loading="lazy"></div>
            <p>Grace is an orthodontic therapist who thrives on the day-to-day detail of treatment — adjusting appliances, fitting aligners and tracking each patient's progress with real care and attention.</p>
            <p>She has a gift for putting nervous patients at ease and is especially popular with children and teenagers, who quickly feel comfortable in her chair.</p>
            <p>Grace is a strong advocate for preventive care and enjoys teaching patients simple routines that keep their teeth and appliances in top condition.</p>
          </div>
        </button>

        <!-- Card 7 -->
        <button class="tcard reveal" type="button">
          <div class="tcard__media"><div class="ph"><img src="/images/inner/meet-team/meet-team-03.png" alt="Dr Daniel Osei, specialist orthodontist" loading="lazy"></div><!-- IMG: Dr Daniel Osei portrait 1:1 --></div>
          <span class="tcard__role">Specialist Orthodontist</span>
          <span class="tcard__name">Dr Daniel Osei</span>
          <span class="tcard__gdc">GDC: 69255</span>
          <p class="tcard__excerpt">Daniel is a specialist orthodontist who enjoys the challenge of complex cases and restoring confidence through carefully planned treatment.</p>
          <span class="tcard__more">Read more →</span>
          <div class="tcard__full">
            <span class="tcard__role">Specialist Orthodontist</span>
            <h3>Dr Daniel Osei</h3>
            <p class="tcard__gdc">GDC: 69255</p>
            <div class="tcard__media-full"><img src="/images/inner/meet-team/meet-team-06.png" alt="Dr Daniel Osei, specialist orthodontist" loading="lazy"></div>
            <p>Daniel is a specialist orthodontist known for taking on more complex cases, including patients who need combined orthodontic and restorative care. He works closely with referring dentists to plan treatment that is both functional and beautiful.</p>
            <p>He is a patient, methodical clinician who believes in taking the time to get things right, and in explaining the reasoning behind every decision.</p>
            <p>Daniel finds the most rewarding part of his work is seeing the boost in confidence that a new smile brings to his patients.</p>
          </div>
        </button>

        <!-- Card 8 -->
        <button class="tcard reveal" type="button">
          <div class="tcard__media"><div class="ph"><img src="/images/inner/meet-team/meet-team-04.png" alt="Marco Bianchi, dental hygienist" loading="lazy"></div><!-- IMG: Marco Bianchi portrait 1:1 --></div>
          <span class="tcard__role">Dental Hygienist</span>
          <span class="tcard__name">Marco Bianchi</span>
          <span class="tcard__gdc">GDC: 30447</span>
          <p class="tcard__excerpt">Marco is our dental hygienist, helping patients keep their teeth and gums healthy before, during and after orthodontic treatment.</p>
          <span class="tcard__more">Read more →</span>
          <div class="tcard__full">
            <span class="tcard__role">Dental Hygienist</span>
            <h3>Marco Bianchi</h3>
            <p class="tcard__gdc">GDC: 30447</p>
            <div class="tcard__media-full"><img src="/images/inner/meet-team/meet-team-08.png" alt="Marco Bianchi, dental hygienist" loading="lazy"></div>
            <p>Marco plays a vital role in keeping our patients' smiles healthy. As a dental hygienist he provides professional cleaning, tailored oral-health advice and the support patients need to care for their teeth around braces and aligners.</p>
            <p>Healthy gums are the foundation of successful orthodontic treatment, and Marco makes sure every patient has the tools and knowledge to keep theirs in great shape.</p>
            <p>Approachable and encouraging, he turns oral hygiene into a habit patients actually enjoy keeping up.</p>
          </div>
        </button>

        <!-- Card 9 -->
        <button class="tcard reveal" type="button">
          <div class="tcard__media"><div class="ph"><img src="/images/inner/meet-team/meet-team-01.png" alt="Ella Thompson, treatment coordinator" loading="lazy"></div><!-- IMG: Ella Thompson portrait 1:1 --></div>
          <span class="tcard__role">Treatment Coordinator</span>
          <span class="tcard__name">Ella Thompson</span>
          <span class="tcard__gdc">Patient Care</span>
          <p class="tcard__excerpt">Ella is our treatment coordinator and often the first friendly face you'll meet, guiding you from enquiry to your first consultation.</p>
          <span class="tcard__more">Read more →</span>
          <div class="tcard__full">
            <span class="tcard__role">Treatment Coordinator</span>
            <h3>Ella Thompson</h3>
            <p class="tcard__gdc">Patient Care</p>
            <div class="tcard__media-full"><img src="/images/inner/meet-team/meet-team-06.png" alt="Ella Thompson, treatment coordinator" loading="lazy"></div>
            <p>Ella is the warm welcome at the heart of Orchard Orthodontics. As our treatment coordinator she helps new patients understand their options, talks through finance and payment plans, and makes booking that first appointment simple and stress-free.</p>
            <p>She knows that starting orthodontic treatment can feel like a big decision, so she takes the time to answer every question and make sure patients feel completely at ease.</p>
            <p>From your very first enquiry to the day your braces come off, Ella is there to support you every step of the way.</p>
          </div>
        </button>

      </div>
    </div>
  </section>

  <!-- ===================== CTA BAND ===================== -->
  <section class="cta">
    <div class="container">
      <div class="cta__card reveal">
        <div class="cta__media"><div class="ph ph--dark"><img src="/images/inner/meet-team/meet-team-08.png" alt="Patient smiling while using phone outdoors" loading="lazy"></div><!-- IMG: patient smiling on phone outdoors 4:5 --></div>
        <div class="cta__body">
          <span class="eyebrow">Book a Free Consultation</span>
          <h2>Ready to meet<br><strong>your new team?</strong></h2>
          <p>Book a free consultation at your nearest Orchard Orthodontics practice and meet the specialists who'll guide you towards the smile you deserve.</p>
          <a class="btn btn--green" href="/booking">Book a Free Consultation</a>
        </div>
      </div>
    </div>
  </section>

  <!-- ===================== BIO MODAL (hidden by default) ===================== -->
  <div class="bio-modal" id="bioModal" role="dialog" aria-modal="true" aria-hidden="true" aria-label="Team member biography">
    <div class="bio-modal__overlay" data-bio-close></div>
    <div class="bio-modal__dialog">
      <button class="bio-modal__close" type="button" aria-label="Close biography" data-bio-close>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M6 6l12 12M18 6L6 18"/></svg>
      </button>
      <div class="bio-modal__grid">
        <div class="bio-modal__media"><div class="ph"><img src="/images/inner/meet-team/meet-team-06.png" alt="Orchard Orthodontics clinician portrait" loading="lazy"></div></div>
        <div class="bio-modal__text" id="bioModalText"></div>
      </div>
    </div>
  </div>`;

export default function Page() {
  return (
    <PageShell active="about" solid={true} pageClass="page-meet-team">
      <div dangerouslySetInnerHTML={{ __html: CONTENT }} />
    </PageShell>
  );
}
