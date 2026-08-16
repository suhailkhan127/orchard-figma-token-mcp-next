import type { Metadata } from "next";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Dentist Referral — Refer a Patient",
  description: "Refer a patient to Orchard Orthodontics. Complete our quick online referral form for NHS and private orthodontic referrals across our Croydon, Brixton and Guildford practices.",
};

const CONTENT = `<!-- ===================== INSET HERO ===================== -->
  <section class="inset-hero">
    <div class="inset-hero__bg"><div class="ph ph--dark"><img src="/images/inner/dentist-referral/dentist-referral-01.png" alt=""></div><!-- IMG: referring dentist / practice reception, faded 16:9 --></div>
    <div class="container">
      <h1>Patient <strong>Referral</strong></h1>
      <p>Refer a patient to Orchard Orthodontics in just a few minutes. Complete the form below with the patient's details and our specialist team will be in touch to arrange their assessment. We welcome both NHS and private referrals across our South London and Surrey practices.</p>
    </div>
  </section>

  <!-- ===================== INTRO: NHS / PRIVATE ===================== -->
  <section class="rf-intro">
    <div class="container">
      <div class="rf-intro__grid reveal">
        <div>
          <h3>NHS</h3>
          <p>We accept NHS patient referrals for patients 17 and under who may qualify for orthodontic treatment on the NHS at our Brixton practice. Once the online referral form below has been completed, please contact us to complete the referral process. If they are not deemed eligible for orthodontics on the NHS, we can work with them to create a customised treatment and payment plan that helps make treatment more affordable.</p>
        </div>
        <div>
          <h3>Private</h3>
          <p>We accept private patient referrals at all of our orthodontic practices across London and Surrey. Once the online referral form below has been completed, please contact us to complete the referral process. All patients can also <a href="/booking">book a free orthodontic consultation</a> directly with our team to get started.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ===================== REFERRAL FORM ===================== -->
  <section class="rf-form-sec">
    <div class="container">
      <form class="site-form" action="#" method="post" novalidate>

        <!-- Referral type -->
        <fieldset class="rf-full" style="border:0;padding:0;margin:0 0 8px">
          <legend class="rf-choice-label" style="padding:0">Is this an NHS or private referral?</legend>
          <div class="rf-opts">
            <label class="rf-opt"><input type="radio" name="referral-type" value="nhs" checked> NHS</label>
            <label class="rf-opt"><input type="radio" name="referral-type" value="private"> Private</label>
          </div>
        </fieldset>

        <!-- Dentist's details -->
        <h2 class="rf-legend">Dentist's Details</h2>
        <div class="rf-grid">
          <div><label for="d-first">First Name</label><input id="d-first" name="dentist-first-name" type="text" placeholder="First Name"></div>
          <div><label for="d-last">Last Name</label><input id="d-last" name="dentist-last-name" type="text" placeholder="Last Name"></div>
          <div><label for="d-practice">Practice Name</label><input id="d-practice" name="practice-name" type="text" placeholder="Practice Name"></div>
          <div><label for="d-postcode">Practice Postcode</label><input id="d-postcode" name="practice-postcode" type="text" placeholder="Practice Postcode"></div>
        </div>

        <!-- Patient details -->
        <h2 class="rf-legend">Patient Details</h2>
        <div class="rf-grid">
          <div><label for="p-first">First Name</label><input id="p-first" name="patient-first-name" type="text" placeholder="First Name"></div>
          <div><label for="p-last">Last Name</label><input id="p-last" name="patient-last-name" type="text" placeholder="Last Name"></div>

          <div>
            <label for="p-dob-day">Date of Birth</label>
            <div class="rf-dob">
              <select id="p-dob-day" name="dob-day" aria-label="Day of birth">
                <option value="" selected disabled hidden>Day</option>
                <option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option><option>9</option><option>10</option><option>11</option><option>12</option><option>13</option><option>14</option><option>15</option><option>16</option><option>17</option><option>18</option><option>19</option><option>20</option><option>21</option><option>22</option><option>23</option><option>24</option><option>25</option><option>26</option><option>27</option><option>28</option><option>29</option><option>30</option><option>31</option>
              </select>
              <select id="p-dob-month" name="dob-month" aria-label="Month of birth">
                <option value="" selected disabled hidden>Month</option>
                <option>January</option><option>February</option><option>March</option><option>April</option><option>May</option><option>June</option><option>July</option><option>August</option><option>September</option><option>October</option><option>November</option><option>December</option>
              </select>
              <select id="p-dob-year" name="dob-year" aria-label="Year of birth">
                <option value="" selected disabled hidden>Year</option>
                <option>2026</option><option>2025</option><option>2024</option><option>2023</option><option>2022</option><option>2021</option><option>2020</option><option>2019</option><option>2018</option><option>2017</option><option>2016</option><option>2015</option><option>2014</option><option>2013</option><option>2012</option><option>2011</option><option>2010</option><option>2009</option><option>2008</option><option>2007</option><option>2006</option><option>2005</option><option>2004</option><option>2003</option><option>2002</option><option>2001</option><option>2000</option><option>1995</option><option>1990</option><option>1985</option><option>1980</option><option>1975</option><option>1970</option><option>1965</option><option>1960</option>
              </select>
            </div>
          </div>
          <div><label for="p-mobile">Mobile Number</label><input id="p-mobile" name="patient-mobile" type="tel" placeholder="Mobile Number"></div>

          <div><label for="p-email">Email Address</label><input id="p-email" name="patient-email" type="email" placeholder="Email Address"></div>
          <div><label for="p-postcode">Postcode</label><input id="p-postcode" name="patient-postcode" type="text" placeholder="Postcode"></div>

          <div class="rf-full"><label for="p-address">Address</label><input id="p-address" name="patient-address" type="text" placeholder="Address"></div>
          <div class="rf-full"><label for="p-reason">Reason for Referral</label><textarea id="p-reason" name="reason" placeholder="Reason for Referral, treatment needed and any relevant clinical notes"></textarea></div>
        </div>

        <!-- Radiographs -->
        <div class="rf-full" style="margin-top:26px">
          <div class="rf-choice-label">How would you like to send the radiographs?</div>
          <div class="rf-opts rf-opts--col">
            <label class="rf-opt"><input type="checkbox" name="radiographs" value="patient"> Given to patient to bring to appointment</label>
            <label class="rf-opt"><input type="checkbox" name="radiographs" value="attached"> Attached to this referral</label>
            <label class="rf-opt"><input type="checkbox" name="radiographs" value="mediref"> Via Mediref</label>
          </div>
        </div>

        <!-- File upload -->
        <div class="rf-upload rf-full">
          <h4>Send us your photos</h4>
          <p>For any photos, x-rays or additional information you wish to submit alongside this referral, please upload here.</p>
          <p>Accepted file types: jpg, gif, png, pdf.</p>
          <div class="rf-drop">
            <span>Drop files here or,</span>
            <input id="rf-files" class="rf-file" type="file" name="attachments" multiple accept=".jpg,.jpeg,.gif,.png,.pdf">
            <label class="btn btn--white btn--sm" for="rf-files">Submit</label>
          </div>
        </div>

        <button class="btn btn--navy rf-submit rf-full" type="submit">Submit</button>
        <p class="rf-note">For further information about how we use your data, please see our <a href="#">privacy policy</a>.</p>
      </form>
    </div>
  </section>

  <!-- ===================== CTA BAND ===================== -->
  <section class="cta">
    <div class="container">
      <div class="cta__card reveal">
        <div class="cta__media"><img src="/images/inner/dentist-referral/dentist-referral-02.png" alt="Orthodontic patient outside a London practice"><!-- IMG: happy patient using phone, London street 3:4 --></div>
        <div class="cta__body">
          <span class="eyebrow">Book a Free Consultation</span>
          <h2>Refer with confidence,<br><strong>we'll take it from here</strong></h2>
          <p>Every patient you refer is looked after by our specialist orthodontic team. Book a free consultation on their behalf, or invite them to get started directly with us.</p>
          <a class="btn btn--green" href="/booking">Book a Free Consultation</a>
        </div>
      </div>
    </div>
  </section>

  <!-- ===================== VISIT US ===================== -->
  <section class="visit">
    <div class="visit__bg"><img src="/images/home/visit-bg.png" alt=""></div>
    <div class="container visit__grid">
      <div class="reveal reveal--left">
        <span class="eyebrow">Find us</span>
        <h2>Visit Us</h2>
        <p class="visit__sub">Three specialist practices across South London and Surrey. Choose your nearest location for directions, opening hours and contact details.</p>
        <div class="locpick">
          <button class="locpick__btn is-active" data-loc="croydon">Croydon</button>
          <button class="locpick__btn" data-loc="brixton">Brixton</button>
          <button class="locpick__btn" data-loc="guildford">Guildford</button>
        </div>
        <div data-loc-panel="croydon">
          <div class="visit__row"><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21s7-6.3 7-11a7 7 0 10-14 0c0 4.7 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/></svg><span>114-118 Cherry Orchard Road, Croydon<br>Greater London, CR0 6BA</span></div>
          <div class="visit__row"><svg class="ico" viewBox="0 0 24 24" fill="currentColor"><path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .8-.3 1z"/></svg><a href="tel:02086497500">020 8649 7500</a></div>
          <div class="visit__row"><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg><a href="mailto:croydon@orchardortho.com">croydon@orchardortho.com</a></div>
          <div class="visit__row"><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>
            <div class="visit__hours"><span>Monday</span><span>9:00am – 5:00pm</span><span>Tuesday – Wednesday</span><span>9:00am – 6:00pm</span><span>Thursday</span><span>9:00am – 7:00pm</span><span>Friday</span><span>9:00am – 5:00pm</span><span>Saturday &amp; Sunday</span><span>Closed</span></div>
          </div>
          <a class="visit__maps" href="https://www.google.com/maps?q=114-118+Cherry+Orchard+Road+Croydon+CR0+6BA" target="_blank" rel="noopener"><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M9 7h8v8"/></svg>Open in Google Maps</a>
        </div>
        <div data-loc-panel="brixton" hidden>
          <div class="visit__row"><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21s7-6.3 7-11a7 7 0 10-14 0c0 4.7 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/></svg><span>8 Brixton Hill, Brixton<br>London, SW2 1EG</span></div>
          <div class="visit__row"><svg class="ico" viewBox="0 0 24 24" fill="currentColor"><path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .8-.3 1z"/></svg><a href="tel:02086497500">020 8649 7500</a></div>
          <div class="visit__row"><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg><a href="mailto:brixton@orchardortho.com">brixton@orchardortho.com</a></div>
          <a class="visit__maps" href="https://www.google.com/maps?q=8+Brixton+Hill+London+SW2+1EG" target="_blank" rel="noopener"><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M9 7h8v8"/></svg>Open in Google Maps</a>
        </div>
        <div data-loc-panel="guildford" hidden>
          <div class="visit__row"><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21s7-6.3 7-11a7 7 0 10-14 0c0 4.7 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/></svg><span>Dental &amp; Implant Centre, 6 Faraday Road<br>Guildford, GU1 1EA</span></div>
          <div class="visit__row"><svg class="ico" viewBox="0 0 24 24" fill="currentColor"><path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .8-.3 1z"/></svg><a href="tel:02086497500">020 8649 7500</a></div>
          <div class="visit__row"><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg><a href="mailto:ref@orchardortho.com">ref@orchardortho.com</a></div>
          <a class="visit__maps" href="https://www.google.com/maps?q=6+Faraday+Road+Guildford+GU1+1EA" target="_blank" rel="noopener"><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M9 7h8v8"/></svg>Open in Google Maps</a>
        </div>
      </div>
      <div class="reveal reveal--right visit__map">
        <iframe title="Orchard Orthodontics location map" src="https://www.google.com/maps?q=114-118+Cherry+Orchard+Road+Croydon+CR0+6BA&output=embed"></iframe>
        <img class="visit__pin" src="/images/map-pin.svg" alt="">
      </div>
    </div>
  </section>`;

export default function Page() {
  return (
    <PageShell active="" solid={true} pageClass="page-dentist-referral">
      <div dangerouslySetInnerHTML={{ __html: CONTENT }} />
    </PageShell>
  );
}
