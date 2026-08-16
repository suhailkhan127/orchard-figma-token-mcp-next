import type { Metadata } from "next";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Orthodontic Treatment Pricing & Finance",
  description: "Transparent orthodontic pricing in London. Invisalign from £4,500, Damon and fixed braces from £4,200, with interest-free finance and flexible monthly payment plans.",
};

const CONTENT = `<!-- ===================== HERO ===================== -->
  <section class="inset-hero">
    <div class="inset-hero__bg"><img src="/images/home/why-bg.png" alt=""></div>
    <div class="container">
      <div class="inset-hero__grid">
        <div>
          <div class="crumb"><a href="/">Home</a> / Pricing</div>
          <h1>Pricing</h1>
          <p>Each smile is unique and all our treatment plans are customised to your needs. The cost of braces or your Invisalign® treatment may therefore vary slightly from the guide prices below. Rest assured that when you receive your custom quote at your free consultation, the cost of your orthodontic treatment is all-inclusive.</p>
          <a class="btn btn--green" href="/booking">Book a Free Consultation</a>
        </div>
        <div class="inset-hero__media">
          <!-- IMG: smiling orthodontic patient portrait 4:3 -->
          <img src="/images/inner/pricing/pricing-05.png" alt="Smiling Orchard Orthodontics patient">
        </div>
      </div>
    </div>
  </section>

  <!-- ===================== INTRO + FEATURE COLUMNS ===================== -->
  <section class="section">
    <div class="container">
      <div class="price-intro">
        <span class="eyebrow">Transparent pricing</span>
        <h2>Straightforward pricing, <strong>no hidden surprises</strong></h2>
        <p>Every treatment we provide is fully inclusive — from your specialist consultation and diagnostics through to your retainers and aftercare. Below you will find our guide prices, together with the flexible ways you can spread the cost of a healthier, straighter smile.</p>
      </div>
      <div class="pfeats">
        <div class="pfeat reveal">
          <img class="pfeat__ico" src="/images/icons/price-check.svg" alt="">
          <h4>All-inclusive quotes</h4>
          <p>One clear price covers your appointments, diagnostics, appliances, retainers and reviews.</p>
        </div>
        <div class="pfeat reveal" data-delay="1">
          <img class="pfeat__ico" src="/images/icons/price-cal.svg" alt="">
          <h4>Flexible monthly plans</h4>
          <p>Spread the cost of treatment over 6 to 24 months to suit your budget.</p>
        </div>
        <div class="pfeat reveal" data-delay="2">
          <img class="pfeat__ico" src="/images/icons/price-zero.svg" alt="">
          <h4>0% interest-free finance</h4>
          <p>Interest-free payment options are available on the majority of our treatments.</p>
        </div>
        <div class="pfeat reveal" data-delay="3">
          <img class="pfeat__ico" src="/images/icons/why-wallet.svg" alt="">
          <h4>Low deposit to start</h4>
          <p>Begin treatment with a small deposit and pay the balance in manageable steps.</p>
        </div>
      </div>

      <!-- ===================== PRICE TABLE ===================== -->
      <div class="ptable-wrap">
        <table class="ptable">
          <thead>
            <tr>
              <th>Treatment</th>
              <th>Total (£)</th>
              <th>Per Month (£)</th>
              <th>Per Week (£)</th>
              <th>Per Day (£)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="treat-name">Invisalign®<small>Almost invisible clear aligners</small></td>
              <td class="total">From £4,500</td>
              <td>£170.84</td>
              <td>£39.43</td>
              <td>£5.62</td>
            </tr>
            <tr>
              <td class="treat-name">Damon Braces<small>Discreet self-ligating fixed braces</small></td>
              <td class="total">From £4,200</td>
              <td>£141.67</td>
              <td>£32.69</td>
              <td>£4.66</td>
            </tr>
            <tr>
              <td class="treat-name">Fixed Metal Braces<small>Traditional dependable braces</small></td>
              <td class="total">From £4,200</td>
              <td>£141.67</td>
              <td>£32.69</td>
              <td>£4.66</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="price-note">
        <h5>Monthly Payment Plans</h5>
        <p>These are starting costs. The final cost of your orthodontic treatment will depend on the type of appliance you are fitted with and the complexity of your treatment. Some cases are more straightforward than others, while some require a significant amount of work. Our payment plans can be spread over 24 months — the examples above show what you could expect to pay once your deposit has been paid.</p>
        <p class="disc">**Payment plans are subject to terms and conditions. Please also note that an initial deposit may be required.</p>
      </div>
    </div>
  </section>

  <!-- ===================== BUDGET CALCULATOR ===================== -->
  <section class="section calc">
    <div class="container calc__grid">
      <div>
        <h2>Orthodontic<br><strong>Budget Calculator Guide</strong></h2>

        <span class="calc__label">Payment Frequency</span>
        <div class="seg" role="group" aria-label="Payment frequency">
          <button type="button" aria-pressed="true">Monthly</button>
          <button type="button" aria-pressed="false">Weekly</button>
        </div>

        <span class="calc__label">Cost of treatment</span>
        <div class="calc__row">
          <div class="calc__field"><span class="unit">£</span><input type="text" value="6,000" aria-label="Cost of treatment"></div>
          <input type="range" min="1000" max="12000" step="100" value="6000" aria-label="Cost of treatment slider">
        </div>

        <span class="calc__label">Deposit £ / %</span>
        <div class="calc__row">
          <div class="calc__field"><span class="unit">£</span><input type="text" value="1,500" aria-label="Deposit"></div>
          <input type="range" min="0" max="6000" step="100" value="1500" aria-label="Deposit slider">
        </div>

        <span class="calc__label">Repayment Timeframe (Monthly)</span>
        <div class="calc__row">
          <div class="calc__field">
            <svg class="ico" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"></rect><path d="M16 2v4M8 2v4M3 10h18"></path></svg>
            <select aria-label="Repayment timeframe">
              <option selected>6 Months</option>
              <option>12 Months</option>
              <option>18 Months</option>
              <option>24 Months</option>
            </select>
          </div>
          <input type="range" min="6" max="24" value="6" aria-label="Repayment timeframe slider">
        </div>
      </div>

      <div class="calc__panel">
        <div class="calc__tabs" role="tablist" aria-label="Estimate view">
          <button type="button" role="tab" aria-selected="true">Payment Options</button>
          <button type="button" role="tab" aria-selected="false">Installments</button>
          <button type="button" role="tab" aria-selected="false">Graph</button>
        </div>
        <div class="opts">
          <div class="opt">
            <div class="opt__k">Option 01</div>
            <p class="opt__desc">Pay in full with 2.5% discount</p>
            <div class="opt__price">£1,970</div>
            <a class="opt__cta" href="/booking">Enquire Today →</a>
          </div>
          <div class="opt opt--alt">
            <div class="opt__k">Option 02</div>
            <p class="opt__desc">Pay in two instalments with 1.5% discount</p>
            <div class="opt__price">£1,950</div>
            <a class="opt__cta" href="/booking">Enquire Today →</a>
          </div>
          <div class="opt opt--wide">
            <div class="opt__k">Option 03</div>
            <p class="opt__desc">Monthly instalments — through Denticare</p>
            <div class="opt__price">£250</div>
            <a class="opt__cta" href="/booking">Enquire Today →</a>
            <p class="opt__foot">Initial deposit, then weekly or monthly payments paid through our estimated treatment time. For this option we use a third-party provider, Denticare, to manage these instalments.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ===================== FAQ ===================== -->
  <section class="section">
    <div class="container faqwrap">
      <div class="sechead">
        <span class="eyebrow">Good to know</span>
        <h2>Pricing &amp; finance <strong>questions</strong></h2>
      </div>
      <div class="faq">
        <div class="faq__item is-open">
          <button class="faq__q" aria-expanded="true">Is the price I am quoted all-inclusive? <span class="plus"></span></button>
          <div class="faq__a" style="max-height:200px"><div>Yes. Your quote covers your specialist consultation, records and diagnostics, all appointments, your appliances, retainers at the end of treatment and your review appointments. There are no hidden extras.</div></div>
        </div>
        <div class="faq__item">
          <button class="faq__q" aria-expanded="false">Do you offer interest-free finance? <span class="plus"></span></button>
          <div class="faq__a"><div>We offer 0% interest-free payment plans on the majority of our treatments, spread over 6 to 24 months. Longer-term finance is also available through our partner Denticare.</div></div>
        </div>
        <div class="faq__item">
          <button class="faq__q" aria-expanded="false">How much deposit do I need to get started? <span class="plus"></span></button>
          <div class="faq__a"><div>Most plans begin with a small deposit, with the remaining balance divided into manageable weekly or monthly payments. Your exact deposit will be confirmed at your free consultation.</div></div>
        </div>
        <div class="faq__item">
          <button class="faq__q" aria-expanded="false">Is orthodontic treatment available on the NHS? <span class="plus"></span></button>
          <div class="faq__a"><div>NHS orthodontic treatment is available for eligible patients, usually those under 18 with a clinical need. Our team will happily talk you through your options and eligibility at your appointment.</div></div>
        </div>
        <div class="faq__item">
          <button class="faq__q" aria-expanded="false">Why might my final price differ from the guide prices? <span class="plus"></span></button>
          <div class="faq__a"><div>Every smile is different. The final cost depends on the appliance you choose and the complexity of your case. You will receive a fixed, all-inclusive quote before any treatment begins.</div></div>
        </div>
      </div>
    </div>
  </section>

  <!-- ===================== CTA BAND ===================== -->
  <section class="cta">
    <div class="container">
      <div class="cta__card reveal">
        <div class="cta__media">
          <!-- IMG: happy patient on phone 1:1 -->
          <img src="/images/inner/pricing/pricing-03.png" alt="Smiling patient checking her phone outside an Orchard Orthodontics practice">
        </div>
        <div class="cta__body">
          <span class="eyebrow">Book a Free Consultation</span>
          <h2>Ready to start your<br><strong>smile journey?</strong></h2>
          <p>Book a free consultation at your nearest Orchard Orthodontics practice. Our specialist team will build a clear, all-inclusive plan and talk you through the finance option that suits you best.</p>
          <a class="btn btn--green" href="/booking">Book a Free Consultation</a>
        </div>
      </div>
    </div>
  </section>`;

export default function Page() {
  return (
    <PageShell active="pricing" solid={true} pageClass="page-pricing">
      <div dangerouslySetInnerHTML={{ __html: CONTENT }} />
    </PageShell>
  );
}
