import type { Metadata } from "next";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Before &amp; After Smile Transformations",
  description: "See real before-and-after results from Orchard Orthodontics patients across Croydon, Brixton and Guildford — Invisalign, Damon braces, porcelain veneers and cosmetic bonding.",
};

const CONTENT = `<!-- ===================== INSET HERO ===================== -->
  <section class="inset-hero is-center">
    <div class="inset-hero__bg"><div class="ph ph--dark"><img src="/images/inner/before-after/before-after-21.png" alt="" loading="lazy"></div><!-- IMG: soft smiling patient portrait, faded 16:6 --></div>
    <div class="container">
      <div class="inset-hero__grid">
        <div>
          <div class="crumb"><a href="/">Home</a> / Before &amp; After</div>
          <h1>Before &amp; After</h1>
          <p>Explore real smile transformations from patients treated across our Croydon, Brixton and Guildford practices. Drag through each case to see the difference our specialist orthodontists and cosmetic dentists make — from Invisalign and Damon braces to porcelain veneers and bonding.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ===================== BEFORE / AFTER GALLERY ===================== -->
  <section class="section">
    <div class="container">

      <div class="ba-filter" role="tablist" aria-label="Filter transformations by treatment">
        <button class="ba-pill is-active" data-filter="all">All</button>
        <button class="ba-pill" data-filter="invisalign">Invisalign</button>
        <button class="ba-pill" data-filter="damon">Damon Braces</button>
        <button class="ba-pill" data-filter="veneers">Porcelain Veneers</button>
        <button class="ba-pill" data-filter="bonding">Cosmetic Bonding</button>
      </div>

      <div class="ba-grid">

        <!-- Row 1 -->
        <figure class="ba-case reveal" data-cat="bonding">
          <div class="ba">
            <div class="ph ph--dark ba__before"><img src="/images/inner/before-after/before-after-01.png" alt="Patient's smile before cosmetic bonding" loading="lazy"></div><!-- IMG: patient smile BEFORE cosmetic bonding 3:2 -->
            <div class="ph ph--dark"><img src="/images/inner/before-after/before-after-02.png" alt="Patient's smile after cosmetic bonding" loading="lazy"></div><!-- IMG: same patient smile AFTER cosmetic bonding 3:2 -->
            <span class="ba__divider"></span>
            <span class="ba__handle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M13 6l-6 6 6 6M11 6l6 6-6 6"/></svg></span>
            <span class="ba__tag ba__tag--b">BEFORE</span><span class="ba__tag ba__tag--a">AFTER</span>
          </div>
          <figcaption class="ba-case__caption">Cosmetic Bonding</figcaption>
        </figure>

        <figure class="ba-case reveal" data-cat="bonding">
          <div class="ba">
            <div class="ph ph--dark ba__before"><img src="/images/inner/before-after/before-after-03.png" alt="Patient's smile before cosmetic bonding" loading="lazy"></div><!-- IMG: patient smile BEFORE cosmetic bonding 3:2 -->
            <div class="ph ph--dark"><img src="/images/inner/before-after/before-after-04.png" alt="Patient's smile after cosmetic bonding" loading="lazy"></div><!-- IMG: same patient smile AFTER cosmetic bonding 3:2 -->
            <span class="ba__divider"></span>
            <span class="ba__handle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M13 6l-6 6 6 6M11 6l6 6-6 6"/></svg></span>
            <span class="ba__tag ba__tag--b">BEFORE</span><span class="ba__tag ba__tag--a">AFTER</span>
          </div>
          <figcaption class="ba-case__caption">Cosmetic Bonding</figcaption>
        </figure>

        <figure class="ba-case reveal" data-cat="veneers">
          <div class="ba">
            <div class="ph ph--dark ba__before"><img src="/images/inner/before-after/before-after-05.png" alt="Patient's smile before porcelain veneers" loading="lazy"></div><!-- IMG: patient smile BEFORE porcelain veneers 3:2 -->
            <div class="ph ph--dark"><img src="/images/inner/before-after/before-after-06.png" alt="Patient's smile after porcelain veneers" loading="lazy"></div><!-- IMG: same patient smile AFTER porcelain veneers 3:2 -->
            <span class="ba__divider"></span>
            <span class="ba__handle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M13 6l-6 6 6 6M11 6l6 6-6 6"/></svg></span>
            <span class="ba__tag ba__tag--b">BEFORE</span><span class="ba__tag ba__tag--a">AFTER</span>
          </div>
          <figcaption class="ba-case__caption">Porcelain Veneers</figcaption>
        </figure>

        <!-- Row 2 -->
        <figure class="ba-case reveal" data-cat="invisalign">
          <div class="ba">
            <div class="ph ph--dark ba__before"><img src="/images/inner/before-after/before-after-07.png" alt="Patient's smile before Invisalign treatment" loading="lazy"></div><!-- IMG: patient smile BEFORE Invisalign 3:2 -->
            <div class="ph ph--dark"><img src="/images/inner/before-after/before-after-08.png" alt="Patient's smile after Invisalign treatment" loading="lazy"></div><!-- IMG: same patient smile AFTER Invisalign 3:2 -->
            <span class="ba__divider"></span>
            <span class="ba__handle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M13 6l-6 6 6 6M11 6l6 6-6 6"/></svg></span>
            <span class="ba__tag ba__tag--b">BEFORE</span><span class="ba__tag ba__tag--a">AFTER</span>
          </div>
          <figcaption class="ba-case__caption">Invisalign</figcaption>
        </figure>

        <figure class="ba-case reveal" data-cat="bonding">
          <div class="ba">
            <div class="ph ph--dark ba__before"><img src="/images/inner/before-after/before-after-09.png" alt="Patient's smile before cosmetic bonding" loading="lazy"></div><!-- IMG: patient smile BEFORE cosmetic bonding 3:2 -->
            <div class="ph ph--dark"><img src="/images/inner/before-after/before-after-10.png" alt="Patient's smile after cosmetic bonding" loading="lazy"></div><!-- IMG: same patient smile AFTER cosmetic bonding 3:2 -->
            <span class="ba__divider"></span>
            <span class="ba__handle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M13 6l-6 6 6 6M11 6l6 6-6 6"/></svg></span>
            <span class="ba__tag ba__tag--b">BEFORE</span><span class="ba__tag ba__tag--a">AFTER</span>
          </div>
          <figcaption class="ba-case__caption">Cosmetic Bonding</figcaption>
        </figure>

        <figure class="ba-case reveal" data-cat="veneers">
          <div class="ba">
            <div class="ph ph--dark ba__before"><img src="/images/inner/before-after/before-after-11.png" alt="Patient's smile before porcelain veneers" loading="lazy"></div><!-- IMG: patient smile BEFORE porcelain veneers 3:2 -->
            <div class="ph ph--dark"><img src="/images/inner/before-after/before-after-12.png" alt="Patient's smile after porcelain veneers" loading="lazy"></div><!-- IMG: same patient smile AFTER porcelain veneers 3:2 -->
            <span class="ba__divider"></span>
            <span class="ba__handle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M13 6l-6 6 6 6M11 6l6 6-6 6"/></svg></span>
            <span class="ba__tag ba__tag--b">BEFORE</span><span class="ba__tag ba__tag--a">AFTER</span>
          </div>
          <figcaption class="ba-case__caption">Porcelain Veneers</figcaption>
        </figure>

        <!-- Row 3 -->
        <figure class="ba-case reveal" data-cat="bonding">
          <div class="ba">
            <div class="ph ph--dark ba__before"><img src="/images/inner/before-after/before-after-13.png" alt="Patient's smile before cosmetic bonding" loading="lazy"></div><!-- IMG: patient smile BEFORE cosmetic bonding 3:2 -->
            <div class="ph ph--dark"><img src="/images/inner/before-after/before-after-14.png" alt="Patient's smile after cosmetic bonding" loading="lazy"></div><!-- IMG: same patient smile AFTER cosmetic bonding 3:2 -->
            <span class="ba__divider"></span>
            <span class="ba__handle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M13 6l-6 6 6 6M11 6l6 6-6 6"/></svg></span>
            <span class="ba__tag ba__tag--b">BEFORE</span><span class="ba__tag ba__tag--a">AFTER</span>
          </div>
          <figcaption class="ba-case__caption">Cosmetic Bonding</figcaption>
        </figure>

        <figure class="ba-case reveal" data-cat="damon">
          <div class="ba">
            <div class="ph ph--dark ba__before"><img src="/images/inner/before-after/before-after-15.png" alt="Patient's smile before Damon braces" loading="lazy"></div><!-- IMG: patient smile BEFORE Damon braces 3:2 -->
            <div class="ph ph--dark"><img src="/images/inner/before-after/before-after-16.png" alt="Patient's smile after Damon braces" loading="lazy"></div><!-- IMG: same patient smile AFTER Damon braces 3:2 -->
            <span class="ba__divider"></span>
            <span class="ba__handle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M13 6l-6 6 6 6M11 6l6 6-6 6"/></svg></span>
            <span class="ba__tag ba__tag--b">BEFORE</span><span class="ba__tag ba__tag--a">AFTER</span>
          </div>
          <figcaption class="ba-case__caption">Damon Braces</figcaption>
        </figure>

        <figure class="ba-case reveal" data-cat="veneers">
          <div class="ba">
            <div class="ph ph--dark ba__before"><img src="/images/inner/before-after/before-after-17.png" alt="Patient's smile before porcelain veneers" loading="lazy"></div><!-- IMG: patient smile BEFORE porcelain veneers 3:2 -->
            <div class="ph ph--dark"><img src="/images/inner/before-after/before-after-18.png" alt="Patient's smile after porcelain veneers" loading="lazy"></div><!-- IMG: same patient smile AFTER porcelain veneers 3:2 -->
            <span class="ba__divider"></span>
            <span class="ba__handle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M13 6l-6 6 6 6M11 6l6 6-6 6"/></svg></span>
            <span class="ba__tag ba__tag--b">BEFORE</span><span class="ba__tag ba__tag--a">AFTER</span>
          </div>
          <figcaption class="ba-case__caption">Porcelain Veneers</figcaption>
        </figure>

        <!-- Row 4 -->
        <figure class="ba-case reveal" data-cat="invisalign">
          <div class="ba">
            <div class="ph ph--dark ba__before"><img src="/images/inner/before-after/before-after-19.png" alt="Patient's smile before Invisalign treatment" loading="lazy"></div><!-- IMG: patient smile BEFORE Invisalign 3:2 -->
            <div class="ph ph--dark"><img src="/images/inner/before-after/before-after-20.png" alt="Patient's smile after Invisalign treatment" loading="lazy"></div><!-- IMG: same patient smile AFTER Invisalign 3:2 -->
            <span class="ba__divider"></span>
            <span class="ba__handle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M13 6l-6 6 6 6M11 6l6 6-6 6"/></svg></span>
            <span class="ba__tag ba__tag--b">BEFORE</span><span class="ba__tag ba__tag--a">AFTER</span>
          </div>
          <figcaption class="ba-case__caption">Invisalign</figcaption>
        </figure>

        <figure class="ba-case reveal" data-cat="bonding">
          <div class="ba">
            <div class="ph ph--dark ba__before"><img src="/images/inner/before-after/before-after-01.png" alt="Patient's smile before cosmetic bonding" loading="lazy"></div><!-- IMG: patient smile BEFORE cosmetic bonding 3:2 -->
            <div class="ph ph--dark"><img src="/images/inner/before-after/before-after-02.png" alt="Patient's smile after cosmetic bonding" loading="lazy"></div><!-- IMG: same patient smile AFTER cosmetic bonding 3:2 -->
            <span class="ba__divider"></span>
            <span class="ba__handle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M13 6l-6 6 6 6M11 6l6 6-6 6"/></svg></span>
            <span class="ba__tag ba__tag--b">BEFORE</span><span class="ba__tag ba__tag--a">AFTER</span>
          </div>
          <figcaption class="ba-case__caption">Cosmetic Bonding</figcaption>
        </figure>

        <figure class="ba-case reveal" data-cat="veneers">
          <div class="ba">
            <div class="ph ph--dark ba__before"><img src="/images/inner/before-after/before-after-03.png" alt="Patient's smile before porcelain veneers" loading="lazy"></div><!-- IMG: patient smile BEFORE porcelain veneers 3:2 -->
            <div class="ph ph--dark"><img src="/images/inner/before-after/before-after-04.png" alt="Patient's smile after porcelain veneers" loading="lazy"></div><!-- IMG: same patient smile AFTER porcelain veneers 3:2 -->
            <span class="ba__divider"></span>
            <span class="ba__handle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M13 6l-6 6 6 6M11 6l6 6-6 6"/></svg></span>
            <span class="ba__tag ba__tag--b">BEFORE</span><span class="ba__tag ba__tag--a">AFTER</span>
          </div>
          <figcaption class="ba-case__caption">Porcelain Veneers</figcaption>
        </figure>

        <!-- Row 5 -->
        <figure class="ba-case reveal" data-cat="bonding">
          <div class="ba">
            <div class="ph ph--dark ba__before"><img src="/images/inner/before-after/before-after-05.png" alt="Patient's smile before cosmetic bonding" loading="lazy"></div><!-- IMG: patient smile BEFORE cosmetic bonding 3:2 -->
            <div class="ph ph--dark"><img src="/images/inner/before-after/before-after-06.png" alt="Patient's smile after cosmetic bonding" loading="lazy"></div><!-- IMG: same patient smile AFTER cosmetic bonding 3:2 -->
            <span class="ba__divider"></span>
            <span class="ba__handle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M13 6l-6 6 6 6M11 6l6 6-6 6"/></svg></span>
            <span class="ba__tag ba__tag--b">BEFORE</span><span class="ba__tag ba__tag--a">AFTER</span>
          </div>
          <figcaption class="ba-case__caption">Cosmetic Bonding</figcaption>
        </figure>

        <figure class="ba-case reveal" data-cat="damon">
          <div class="ba">
            <div class="ph ph--dark ba__before"><img src="/images/inner/before-after/before-after-07.png" alt="Patient's smile before Damon braces" loading="lazy"></div><!-- IMG: patient smile BEFORE Damon braces 3:2 -->
            <div class="ph ph--dark"><img src="/images/inner/before-after/before-after-08.png" alt="Patient's smile after Damon braces" loading="lazy"></div><!-- IMG: same patient smile AFTER Damon braces 3:2 -->
            <span class="ba__divider"></span>
            <span class="ba__handle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M13 6l-6 6 6 6M11 6l6 6-6 6"/></svg></span>
            <span class="ba__tag ba__tag--b">BEFORE</span><span class="ba__tag ba__tag--a">AFTER</span>
          </div>
          <figcaption class="ba-case__caption">Damon Braces</figcaption>
        </figure>

        <figure class="ba-case reveal" data-cat="veneers">
          <div class="ba">
            <div class="ph ph--dark ba__before"><img src="/images/inner/before-after/before-after-09.png" alt="Patient's smile before porcelain veneers" loading="lazy"></div><!-- IMG: patient smile BEFORE porcelain veneers 3:2 -->
            <div class="ph ph--dark"><img src="/images/inner/before-after/before-after-10.png" alt="Patient's smile after porcelain veneers" loading="lazy"></div><!-- IMG: same patient smile AFTER porcelain veneers 3:2 -->
            <span class="ba__divider"></span>
            <span class="ba__handle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M13 6l-6 6 6 6M11 6l6 6-6 6"/></svg></span>
            <span class="ba__tag ba__tag--b">BEFORE</span><span class="ba__tag ba__tag--a">AFTER</span>
          </div>
          <figcaption class="ba-case__caption">Porcelain Veneers</figcaption>
        </figure>

      </div>
    </div>
  </section>

  <!-- ===================== CTA BAND ===================== -->
  <section class="cta">
    <div class="container">
      <div class="cta__card reveal">
        <div class="cta__media"><div class="ph"><img src="/images/inner/before-after/before-after-22.png" alt="Happy patient checking her phone on a London street" loading="lazy"></div><!-- IMG: happy patient checking phone outdoors in London 4:5 --></div>
        <div class="cta__body">
          <span class="eyebrow">Book a Free Consultation</span>
          <h2>See the smile that's<br><strong>waiting for you</strong></h2>
          <p>Every transformation here started with a single, no-obligation consultation. Book yours at your nearest Orchard Orthodontics practice and our specialist team will map out the right treatment for your smile.</p>
          <a class="btn btn--green" href="/booking">Book a Free Consultation</a>
        </div>
      </div>
    </div>
  </section>`;

export default function Page() {
  return (
    <PageShell active="" solid={true} pageClass="page-before-after">
      <div dangerouslySetInnerHTML={{ __html: CONTENT }} />
    </PageShell>
  );
}
