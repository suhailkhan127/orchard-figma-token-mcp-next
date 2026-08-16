import type { Metadata } from "next";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "How Does Remote Monitoring Work? | AI Dental Monitoring — Orchard Orthodontics",
  description: "Discover how AI-powered remote dental monitoring works at Orchard Orthodontics. Track your orthodontic treatment from home with weekly smartphone scans and specialist review.",
};

const CONTENT = `<!-- ===================== INSET HERO ===================== -->
  <section class="inset-hero">
    <div class="inset-hero__bg"><img src="/images/home/why-bg.png" alt=""></div>
    <div class="container">
      <div class="inset-hero__grid">
        <div class="reveal reveal--left">
          <div class="crumb"><a href="/">Home</a> / Remote Monitoring</div>
          <h1>AI-powered<br><strong>remote monitoring</strong></h1>
          <p>Track your orthodontic treatment from the comfort of home. With weekly smartphone scans and specialist review, we keep your smile on track between visits — fewer appointments, the same expert care.</p>
          <a class="btn btn--green" href="/booking">Book a Free Consultation</a>
        </div>
        <div class="inset-hero__media reveal reveal--right">
          <img src="/images/inner/how-remote-monitoring-works/how-remote-monitoring-works-01.png" alt="Smiling Orchard Orthodontics patient">
        </div>
      </div>
    </div>
  </section>

  <!-- ===================== HOW REMOTE MONITORING WORKS (navy card) ===================== -->
  <section class="rm">
    <div class="container">
      <div class="rm__card reveal">
        <h2>How does <strong>remote monitoring work?</strong></h2>
        <p class="rm__intro">Using a smartphone application, we can monitor your treatment progress remotely. Here's how it works:</p>

        <div class="rm__steps">
          <div class="rm__step">
            <img class="rm__ico" src="/images/icons/price-cal.svg" alt="">
            <h3>Initial setup:</h3>
            <p>You'll be guided on how to download and use the Dental Monitoring app and ScanBox during your appointment.</p>
          </div>

          <div class="rm__step">
            <img class="rm__ico" src="/images/icons/why-face.svg" alt="">
            <h3>Regular at-home scans:</h3>
            <p>Each week, you'll follow simple on-screen instructions to submit photos of your teeth.</p>
          </div>

          <div class="rm__step">
            <img class="rm__ico" src="/images/icons/why-ai.svg" alt="">
            <h3>AI analysis and review:</h3>
            <p>Our team reviews your images, while the system analyses your scans and notifies our orthodontic specialists if any additional attention is required.</p>
          </div>

          <div class="rm__step">
            <img class="rm__ico" src="/images/icons/why-bolt.svg" alt="">
            <h3>Feedback and guidance:</h3>
            <p>You'll receive updates and instructions through the app, keeping your treatment on track from the comfort of home.</p>
          </div>
        </div>
      </div>
    </div>
  </section>`;

export default function Page() {
  return (
    <PageShell active="treatments" solid={true} pageClass="page-how-remote-monitoring-works">
      <div dangerouslySetInnerHTML={{ __html: CONTENT }} />
    </PageShell>
  );
}
