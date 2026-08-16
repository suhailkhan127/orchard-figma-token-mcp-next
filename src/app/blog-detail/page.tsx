import type { Metadata } from "next";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Invisalign vs Braces: Which Is Right for Your Smile?",
  description: "Invisalign or braces? Our specialist orthodontists compare comfort, cost, treatment time and results to help you choose the right way to straighten your teeth.",
};

const CONTENT = `<!-- ===================== ARTICLE HERO ===================== -->
  <article>
  <section class="bd-hero">
    <div class="bd-hero__bg">
      <!-- IMG: soft out-of-focus clinic backdrop 16:9 -->
      <div class="ph ph--dark" style="width:100%;height:100%"><img src="/images/inner/blog-detail/blog-detail-05.png" alt=""></div>
    </div>
    <div class="container">
      <div class="bd-hero__inner reveal">
        <div class="bd-meta">
          <span class="bd-cat">Treatment Guides</span>
          <span class="bd-date">2 October 2025</span>
        </div>
        <h1>Invisalign vs Braces: <strong>Which Treatment Is Right for Your Smile?</strong></h1>
        <p class="bd-hero__lead">Clear aligners or fixed braces? Both can give you a straighter, healthier smile — but the right choice depends on your teeth, your lifestyle and your goals. Here is how our specialist orthodontists compare the two.</p>
      </div>
      <div class="bd-hero__media reveal">
        <!-- IMG: smiling family relaxing outdoors, lead article photo 16:9 -->
        <div class="ph"><img src="/images/inner/blog-detail/blog-detail-01.png" alt="Smiling family relaxing outdoors with their dog"></div>
      </div>
    </div>
  </section>

  <!-- ===================== ARTICLE BODY ===================== -->
  <section class="bd-article">
    <div class="container">
      <div class="prose">
        <p>Deciding to straighten your teeth is a big step, and one of the first questions patients ask us is a simple one: should I choose Invisalign or traditional braces? Both are proven, effective ways to correct crowding, gaps and bite problems. The best option for you comes down to how complex your case is, how the treatment fits around your daily life, and the result you want to achieve.</p>

        <p>At Orchard Orthodontics, every treatment plan begins with a free consultation, where a specialist orthodontist assesses your teeth and talks you through the choices. To help you prepare for that conversation, here is a clear, jargon-free comparison of the two most popular treatments.</p>

        <h2>How each treatment works</h2>
        <p>Invisalign uses a series of clear, removable aligners custom-made to fit your teeth. Every couple of weeks you move to the next aligner in the set, gradually guiding your teeth into position. Because the aligners are nearly invisible, most people will not notice you are wearing them.</p>
        <p>Fixed braces use small brackets bonded to each tooth, connected by a thin wire. Your orthodontist adjusts the wire at regular appointments to apply gentle, continuous pressure. Modern systems such as Damon braces are smaller and more comfortable than the braces many people remember from years ago.</p>

        <h3>Comfort and appearance</h3>
        <p>Invisalign tends to feel less intrusive day to day and has no wires or brackets that can irritate the cheeks. Braces are fixed in place, so there is no temptation to leave them out — which for some patients means a more predictable result.</p>

        <h2>Comparing the two at a glance</h2>
        <p>When patients weigh up their options, these are the points that matter most:</p>
        <ul>
          <li><strong>Visibility:</strong> Invisalign aligners are clear and discreet; braces are visible, though tooth-coloured options soften their appearance.</li>
          <li><strong>Convenience:</strong> Aligners are removable for eating and cleaning, while braces stay on throughout treatment.</li>
          <li><strong>Discipline:</strong> Invisalign only works if worn 20 to 22 hours a day; braces do the work for you around the clock.</li>
          <li><strong>Complexity:</strong> Braces can handle more severe rotations and bite corrections that aligners may struggle with.</li>
          <li><strong>Cleaning:</strong> Removable aligners make brushing and flossing easier and support better gum health.</li>
        </ul>

        <blockquote>
          The best treatment is rarely about the appliance alone — it is about matching the right technique to the patient in front of you.
          <cite>Dr Sadiq, Specialist Orthodontist</cite>
        </blockquote>

        <h2>Cost and treatment time</h2>
        <p>Treatment length varies with the complexity of your case, but most patients complete treatment within 12 to 18 months with either option. At Orchard Orthodontics, treatment starts from £2,500, and we offer interest-free finance and flexible monthly payment plans so cost need not stand between you and a confident smile. You will always receive a clear, fixed quote at your consultation — with no surprises later.</p>

        <h2>So, which should you choose?</h2>
        <p>If discretion and flexibility matter most to you, and you are confident you will wear your aligners consistently, Invisalign is an excellent choice. If your case is more complex, or you would rather not think about your treatment day to day, fixed braces offer a reliable, hands-off route to the same goal. For many patients either would work well — which is exactly why a specialist assessment is so valuable.</p>
        <p>The most important step is simply getting started. Book a free consultation and we will recommend the approach that gives you the best possible result for your smile.</p>

        <a class="bd-back" href="/blog"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M15 6l-6 6 6 6"/></svg> Back to Blog</a>
      </div>
    </div>
  </section>
  </article>

  <!-- ===================== RELATED POSTS ===================== -->
  <section class="section bd-related">
    <div class="container">
      <h2 class="reveal">Related Posts</h2>
      <div class="cards cards--2">
        <a class="card reveal" href="/blog">
          <div class="card__media">
            <!-- IMG: family enjoying a day outdoors 4:3 -->
            <div class="ph" style="width:100%;height:100%"><img src="/images/inner/blog-detail/blog-detail-02.png" alt="Family enjoying a day outdoors together"></div>
          </div>
          <div class="card__body">
            <span class="card__meta">28 September 2025</span>
            <h3>How to Choose the Right Orthodontist for Your Family</h3>
            <p>From specialist training to aftercare, here is what to look for when trusting someone with your family's smiles.</p>
            <span class="card__link">Read More <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 6l6 6-6 6"/></svg></span>
          </div>
        </a>
        <a class="card reveal" href="/blog" data-delay="1">
          <div class="card__media">
            <!-- IMG: no featured image variant — dark branded placeholder 4:3 -->
            <div class="ph ph--dark" style="width:100%;height:100%"></div>
          </div>
          <div class="card__body">
            <span class="card__meta">21 September 2025</span>
            <h3>AI Monitoring: How Remote Check-Ups Speed Up Your Treatment</h3>
            <p>Fewer trips to the practice and closer tracking of your progress — discover how AI monitoring is changing orthodontics.</p>
            <span class="card__link">Read More <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 6l6 6-6 6"/></svg></span>
          </div>
        </a>
      </div>
    </div>
  </section>

  <!-- ===================== CTA BAND ===================== -->
  <section class="cta">
    <div class="container">
      <div class="cta__card reveal">
        <div class="cta__media">
          <!-- IMG: happy patient checking phone in London 4:5 -->
          <img src="/images/inner/blog-detail/blog-detail-04.png" alt="Happy patient checking her phone in London">
        </div>
        <div class="cta__body">
          <span class="eyebrow">Book a Free Consultation</span>
          <h2>Ready to start your<br><strong>smile journey?</strong></h2>
          <p>Book a free consultation at your nearest Orchard Orthodontics practice. Our specialist team will help you decide between Invisalign and braces, and guide you through every step towards the smile you deserve.</p>
          <a class="btn btn--green" href="/booking">Book a Free Consultation</a>
        </div>
      </div>
    </div>
  </section>`;

export default function Page() {
  return (
    <PageShell active="about" solid={true} pageClass="page-blog-detail">
      <div dangerouslySetInnerHTML={{ __html: CONTENT }} />
    </PageShell>
  );
}
