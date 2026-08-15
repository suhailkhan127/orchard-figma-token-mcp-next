import type { Metadata } from "next";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Smile Gallery — Before &amp; After Results",
  description: "Browse real before and after smile transformations from Orchard Orthodontics patients across South London and Surrey. See what specialist orthodontic treatment can achieve.",
};

const CONTENT = `<!-- ===================== INSET HERO ===================== -->
  <section class="inset-hero">
    <div class="container">
      <div class="inset-hero__grid">
        <div class="reveal reveal--left">
          <h1>Smile Gallery</h1>
          <p>Ready to see our smile transformations? Here at Orchard Orthodontics we treat patients with all sorts of orthodontic problems, the most common being crowding, spacing, protrusion and reverse bite. See the difference orthodontics has made for some of our patients suffering from these issues in our before and after galleries.</p>
        </div>
        <div class="inset-hero__media reveal reveal--right">
          <div class="ph"><img src="/images/inner/smile-gallery/smile-gallery-01.png" alt="Smiling Orchard Orthodontics patient in a cream coat" loading="lazy"></div><!-- IMG: smiling patient portrait, cream jacket 4:3 -->
        </div>
      </div>
    </div>
  </section>

  <!-- ===================== BEFORE / AFTER GALLERY ===================== -->
  <section class="sg-gallery">
    <div class="container">
      <div class="sg-grid">

        <div class="sg-card reveal">
          <div class="ba">
            <div class="ph"><img src="/images/inner/smile-gallery/smile-gallery-02.png" alt="Natalie's teeth before orthodontic treatment" loading="lazy"></div><!-- IMG: Natalie before, crowded teeth 1:1 -->
            <div class="ph"><img src="/images/inner/smile-gallery/smile-gallery-08.png" alt="Natalie's aligned smile after treatment" loading="lazy"></div><!-- IMG: Natalie after, aligned smile 1:1 -->
            <span class="ba__tag ba__tag--b">Before</span>
            <span class="ba__tag ba__tag--a">After</span>
          </div>
          <div class="sg-card__body">
            <h3>Natalie</h3>
            <p>My teeth were terrible before getting the braces; the before and after pictures say it all. I couldn't be happier; now I smile with pride. The team and service has been fantastic.</p>
          </div>
        </div>

        <div class="sg-card reveal">
          <div class="ba">
            <div class="ph"><img src="/images/inner/smile-gallery/smile-gallery-03.png" alt="Jodie's teeth before orthodontic treatment" loading="lazy"></div><!-- IMG: Jodie before, spacing 1:1 -->
            <div class="ph"><img src="/images/inner/smile-gallery/smile-gallery-08.png" alt="Jodie's confident smile after treatment" loading="lazy"></div><!-- IMG: Jodie after, confident smile 1:1 -->
            <span class="ba__tag ba__tag--b">Before</span>
            <span class="ba__tag ba__tag--a">After</span>
          </div>
          <div class="sg-card__body">
            <h3>Jodie</h3>
            <p>We can smile with such confidence now, thank you Orchard Orthodontics for such amazing work!</p>
          </div>
        </div>

        <div class="sg-card reveal">
          <div class="ba">
            <div class="ph"><img src="/images/inner/smile-gallery/smile-gallery-04.png" alt="Jodie's teeth before orthodontic treatment" loading="lazy"></div><!-- IMG: Jodie before, protrusion 1:1 -->
            <div class="ph"><img src="/images/inner/smile-gallery/smile-gallery-08.png" alt="Jodie's straight teeth after treatment" loading="lazy"></div><!-- IMG: Jodie after, straight teeth 1:1 -->
            <span class="ba__tag ba__tag--b">Before</span>
            <span class="ba__tag ba__tag--a">After</span>
          </div>
          <div class="sg-card__body">
            <h3>Jodie</h3>
            <p>We can smile with such confidence now, thank you Orchard Orthodontics for such amazing work!</p>
          </div>
        </div>

        <div class="sg-card reveal">
          <div class="ba">
            <div class="ph"><img src="/images/inner/smile-gallery/smile-gallery-02.png" alt="Natalie's teeth before orthodontic treatment" loading="lazy"></div><!-- IMG: Natalie before, reverse bite 1:1 -->
            <div class="ph"><img src="/images/inner/smile-gallery/smile-gallery-08.png" alt="Natalie's even smile after treatment" loading="lazy"></div><!-- IMG: Natalie after, even smile 1:1 -->
            <span class="ba__tag ba__tag--b">Before</span>
            <span class="ba__tag ba__tag--a">After</span>
          </div>
          <div class="sg-card__body">
            <h3>Natalie</h3>
            <p>My teeth were terrible before getting the braces; the before and after pictures say it all. I couldn't be happier; now I smile with pride. The team and service has been fantastic.</p>
          </div>
        </div>

        <div class="sg-card reveal">
          <div class="ba">
            <div class="ph"><img src="/images/inner/smile-gallery/smile-gallery-03.png" alt="Natalie's teeth before orthodontic treatment" loading="lazy"></div><!-- IMG: Natalie before, crowding 1:1 -->
            <div class="ph"><img src="/images/inner/smile-gallery/smile-gallery-08.png" alt="Natalie's aligned smile after treatment" loading="lazy"></div><!-- IMG: Natalie after, aligned smile 1:1 -->
            <span class="ba__tag ba__tag--b">Before</span>
            <span class="ba__tag ba__tag--a">After</span>
          </div>
          <div class="sg-card__body">
            <h3>Natalie</h3>
            <p>My teeth were terrible before getting the braces; the before and after pictures say it all. I couldn't be happier; now I smile with pride. The team and service has been fantastic.</p>
          </div>
        </div>

        <div class="sg-card reveal">
          <div class="ba">
            <div class="ph"><img src="/images/inner/smile-gallery/smile-gallery-04.png" alt="Jodie's teeth before orthodontic treatment" loading="lazy"></div><!-- IMG: Jodie before, spacing 1:1 -->
            <div class="ph"><img src="/images/inner/smile-gallery/smile-gallery-08.png" alt="Jodie's confident smile after treatment" loading="lazy"></div><!-- IMG: Jodie after, confident smile 1:1 -->
            <span class="ba__tag ba__tag--b">Before</span>
            <span class="ba__tag ba__tag--a">After</span>
          </div>
          <div class="sg-card__body">
            <h3>Jodie</h3>
            <p>We can smile with such confidence now, thank you Orchard Orthodontics for such amazing work!</p>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- ===================== CTA BAND ===================== -->
  <section class="cta">
    <div class="container">
      <div class="cta__card reveal">
        <div class="cta__media"><div class="ph"><img src="/images/inner/smile-gallery/smile-gallery-06.png" alt="Smiling patient using her phone on a London street" loading="lazy"></div><!-- IMG: smiling patient with phone, street 4:5 --></div>
        <div class="cta__body">
          <span class="eyebrow">Book a Free Consultation</span>
          <h2>Your new smile<br><strong>starts here</strong></h2>
          <p>Book a free consultation at your nearest Orchard Orthodontics practice. Our specialist team will assess your smile and talk you through the treatment options best suited to you.</p>
          <a class="btn btn--green" href="/booking">Book a Free Consultation</a>
        </div>
      </div>
    </div>
  </section>`;

export default function Page() {
  return (
    <PageShell active="smile-gallery" solid={true} pageClass="page-smile-gallery">
      <div dangerouslySetInnerHTML={{ __html: CONTENT }} />
    </PageShell>
  );
}
