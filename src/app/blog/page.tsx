import type { Metadata } from "next";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Orchard Orthodontics Blog — Braces, Invisalign & Smile Care Advice",
  description: "Expert orthodontic advice from Orchard Orthodontics. Read our latest articles on Invisalign, Damon braces, treatment care, retainers and keeping your smile healthy.",
};

const CONTENT = `<!-- ===================== BLOG HERO ===================== -->
  <section class="inset-hero">
    <div class="inset-hero__bg"><img src="/images/inner/blog/blog-09.png" alt=""><!-- IMG: soft blurred clinic backdrop 16:9 --></div>
    <div class="container">
      <div class="inset-hero__grid">
        <div>
          <div class="crumb"><a href="/">Home</a> &nbsp;/&nbsp; <a href="#">About Us</a> &nbsp;/&nbsp; Blog</div>
          <h1><strong>Blog</strong></h1>
          <p>Guidance, insight and honest answers from our specialist orthodontic team. Explore the latest on Invisalign, braces, treatment care and everything that goes into a confident, healthy smile.</p>
          <a class="btn btn--green" href="/booking">Book a Free Consultation</a>
        </div>
        <div class="inset-hero__media"><img src="/images/inner/blog/blog-08.png" alt="Smiling Orchard Orthodontics patient"><!-- IMG: happy family with dog outdoors 4:3 --></div>
      </div>
    </div>
  </section>

  <!-- ===================== BLOG ARTICLE LISTING ===================== -->
  <section class="section blog-list">
    <div class="container">
      <div class="cards cards--2">

        <article class="card blog-card reveal">
          <div class="card__media"><img src="/images/inner/blog/blog-01.png" alt="Patient fitting a clear Invisalign aligner"><!-- IMG: patient fitting clear aligner 4:3 --></div>
          <div class="card__body">
            <span class="card__meta">2 October 2025 · Invisalign</span>
            <h3><a href="/blog-detail">How Invisalign Gently Straightens Teeth Without Anyone Noticing</a></h3>
            <p>Clear aligners have transformed orthodontics for adults and teenagers alike. We explain how the removable trays work week by week, why they are so discreet, and what to expect from your first fitting.</p>
            <a class="card__more" href="/blog-detail">Read More <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
          </div>
        </article>

        <article class="card blog-card reveal">
          <div class="card__media"><img src="/images/inner/blog/blog-02.png" alt="Close-up of Damon self-ligating braces"><!-- IMG: Damon braces close-up 4:3 --></div>
          <div class="card__body">
            <span class="card__meta">28 September 2025 · Braces</span>
            <h3><a href="/blog-detail">Damon Braces vs Traditional Braces: What Is the Real Difference?</a></h3>
            <p>Self-ligating Damon braces promise fewer appointments and gentler tooth movement. Our specialists compare them with conventional fixed braces so you can understand which option may suit your smile.</p>
            <a class="card__more" href="/blog-detail">Read More <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
          </div>
        </article>

        <article class="card blog-card reveal">
          <div class="card__media"><img src="/images/inner/blog/blog-03.png" alt="Person brushing teeth while wearing braces"><!-- IMG: person brushing teeth with braces 4:3 --></div>
          <div class="card__body">
            <span class="card__meta">19 September 2025 · Treatment Care</span>
            <h3><a href="/blog-detail">Caring for Your Teeth and Gums During Orthodontic Treatment</a></h3>
            <p>Keeping teeth clean around brackets and aligners takes a little extra care. Here are our practical, dentist-approved tips for brushing, flossing and protecting your enamel throughout treatment.</p>
            <a class="card__more" href="/blog-detail">Read More <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
          </div>
        </article>

        <article class="card blog-card reveal">
          <div class="card__media"><img src="/images/inner/blog/blog-04.png" alt="Child at an orthodontic consultation"><!-- IMG: child at orthodontist consultation 4:3 --></div>
          <div class="card__body">
            <span class="card__meta">11 September 2025 · Children</span>
            <h3><a href="/blog-detail">When Should Your Child First See an Orthodontist?</a></h3>
            <p>The British Orthodontic Society recommends an early assessment by age seven. We look at why timing matters, what an early visit involves, and how it can make later treatment simpler.</p>
            <a class="card__more" href="/blog-detail">Read More <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
          </div>
        </article>

        <article class="card blog-card reveal">
          <div class="card__media"><img src="/images/inner/blog/blog-05.png" alt="Dental monitoring app shown on a smartphone"><!-- IMG: dental monitoring app on smartphone 4:3 --></div>
          <div class="card__body">
            <span class="card__meta">2 September 2025 · AI Monitoring</span>
            <h3><a href="/blog-detail">AI Monitoring: The Future of Remote Orthodontic Care</a></h3>
            <p>Our AI-powered dental monitoring lets you scan your smile at home while our clinicians track progress remotely. Discover how this technology reduces visits without compromising your results.</p>
            <a class="card__more" href="/blog-detail">Read More <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
          </div>
        </article>

        <article class="card blog-card reveal">
          <div class="card__media"><img src="/images/inner/blog/blog-06.png" alt="Clear removable retainer being held"><!-- IMG: clear retainer being held 4:3 --></div>
          <div class="card__body">
            <span class="card__meta">25 August 2025 · Retainers</span>
            <h3><a href="/blog-detail">Retainers Explained: Keeping Your New Smile Straight for Life</a></h3>
            <p>Finishing treatment is only half the journey. We explain why retainers are essential, the difference between fixed and removable options, and how to look after them so your smile stays put.</p>
            <a class="card__more" href="/blog-detail">Read More <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
          </div>
        </article>

      </div>

      <!-- pagination -->
      <nav class="pager" aria-label="Blog pagination">
        <a class="pager__arrow" href="#" aria-label="Previous page"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M15 6l-6 6 6 6"/></svg></a>
        <span class="is-current" aria-current="page">1</span>
        <a href="#">2</a>
        <a href="#">3</a>
        <a href="#">4</a>
        <a href="#">5</a>
        <a href="#">6</a>
        <a class="pager__arrow" href="#" aria-label="Next page"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 6l6 6-6 6"/></svg></a>
      </nav>
    </div>
  </section>

  <!-- ===================== RELATED POSTS ===================== -->
  <section class="section blog-related">
    <div class="container">
      <h2 class="reveal">Related Posts</h2>
      <div class="cards cards--2">

        <article class="card blog-card reveal">
          <div class="card__media"><img src="/images/inner/blog/blog-07.png" alt="Healthy brace-friendly foods"><!-- IMG: healthy foods for braces 4:3 --></div>
          <div class="card__body">
            <span class="card__meta">18 August 2025 · Lifestyle</span>
            <h3><a href="/blog-detail">Five Foods to Avoid While Wearing Fixed Braces</a></h3>
            <p>Certain foods can damage brackets and wires or slow your progress. Our team shares the everyday items to steer clear of, plus tasty, brace-friendly swaps that keep treatment on track.</p>
            <a class="card__more" href="/blog-detail">Read More <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
          </div>
        </article>

        <article class="card blog-card reveal">
          <div class="card__media"><img src="/images/inner/blog/blog-09.png" alt="Discussing an orthodontic payment plan"><!-- IMG: finance and payment plan discussion 4:3 --></div>
          <div class="card__body">
            <span class="card__meta">9 August 2025 · Pricing</span>
            <h3><a href="/blog-detail">Understanding the Cost of Orthodontic Treatment</a></h3>
            <p>From consultation to finance plans, we break down what influences the price of braces and Invisalign, and how interest-free monthly payments make specialist care more affordable than you might think.</p>
            <a class="card__more" href="/blog-detail">Read More <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
          </div>
        </article>

      </div>
    </div>
  </section>

  <!-- ===================== CTA BAND ===================== -->
  <section class="cta">
    <div class="container">
      <div class="cta__card reveal">
        <div class="cta__media"><img src="/images/inner/blog/blog-10.png" alt="Smiling patient using a phone in the city"><!-- IMG: smiling patient using phone in the city 4:5 --></div>
        <div class="cta__body">
          <span class="eyebrow">Book a Free Consultation</span>
          <h2>Ready to start your<br><strong>smile journey?</strong></h2>
          <p>Book a free consultation at your nearest Orchard Orthodontics practice. Our specialist team will guide you through every step towards the confident smile you deserve.</p>
          <a class="btn btn--green" href="/booking">Book a Free Consultation</a>
        </div>
      </div>
    </div>
  </section>`;

export default function Page() {
  return (
    <PageShell active="about" solid={true} pageClass="page-blog">
      <div dangerouslySetInnerHTML={{ __html: CONTENT }} />
    </PageShell>
  );
}
