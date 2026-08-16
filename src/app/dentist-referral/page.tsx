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
          <div><input id="d-first" name="dentist-first-name" type="text" placeholder="First Name" aria-label="First Name"></div>
          <div><input id="d-last" name="dentist-last-name" type="text" placeholder="Last Name" aria-label="Last Name"></div>
          <div><input id="d-practice" name="practice-name" type="text" placeholder="Practice Name" aria-label="Practice Name"></div>
          <div><input id="d-postcode" name="practice-postcode" type="text" placeholder="Practice Postcode" aria-label="Practice Postcode"></div>
        </div>

        <!-- Patient details -->
        <h2 class="rf-legend">Patient Details</h2>
        <div class="rf-grid">
          <div><input id="p-first" name="patient-first-name" type="text" placeholder="First Name" aria-label="First Name"></div>
          <div><input id="p-last" name="patient-last-name" type="text" placeholder="Last Name" aria-label="Last Name"></div>

          <div>
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
          <div><input id="p-mobile" name="patient-mobile" type="tel" placeholder="Phone Number" aria-label="Phone Number"></div>

          <div><input id="p-email" name="patient-email" type="email" placeholder="Email" aria-label="Email"></div>
          <div><input id="p-postcode" name="patient-postcode" type="text" placeholder="Postcode" aria-label="Postcode"></div>

          <div class="rf-full"><input id="p-address" name="patient-address" type="text" placeholder="Address" aria-label="Address"></div>
          <div class="rf-full"><textarea id="p-reason" name="reason" placeholder="Reason for Referral, treatment needed and any relevant clinical notes" aria-label="Reason for Referral"></textarea></div>
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
  </section>`;

export default function Page() {
  return (
    <PageShell active="" solid={true} pageClass="page-dentist-referral">
      <div dangerouslySetInnerHTML={{ __html: CONTENT }} />
    </PageShell>
  );
}
