import PageMeta from '../components/PageMeta';

export default function PrivacyPolicy() {
  return (
    <>
      <PageMeta
        title="Privacy Policy — Exclusive Crafts"
        description="How Exclusive Crafts collects, uses, and protects your personal information."
      />
      <div className="bg-stone-50 py-16 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <p className="font-sans text-[10px] tracking-widest uppercase text-stone-400 mb-4">Legal</p>
          <h1 className="font-serif text-4xl md:text-5xl font-light text-stone-900 mb-4 leading-tight">Privacy Policy</h1>
          <p className="font-sans text-sm text-stone-400 mb-12">Last updated: June 2026</p>

          <div className="prose prose-stone max-w-none font-sans text-base text-stone-600 leading-relaxed space-y-10">
            <section>
              <h2 className="font-serif text-xl font-light text-stone-900 mb-3">1. Information We Collect</h2>
              <p>When you contact us or submit an inquiry, we collect: name, email address, company name, and any message content you provide. We do not collect payment information directly — purchases are handled through secure third-party processors.</p>
              <p className="mt-3">We may collect analytics data (page views, session duration, browser type) through Google Analytics to understand how our website is used. This data is anonymized and not linked to personal identifiers.</p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-light text-stone-900 mb-3">2. How We Use Your Information</h2>
              <p>We use collected information to: respond to your inquiries, process wholesale orders, send relevant communications about products or services you have requested, and improve our website and services.</p>
              <p className="mt-3">We do not sell, rent, or share your personal information with third parties except as required to fulfill services (e.g., email delivery providers) or as required by law.</p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-light text-stone-900 mb-3">3. Cookies</h2>
              <p>We use essential cookies to ensure the website functions correctly and optional analytics cookies to understand traffic patterns. You can decline non-essential cookies via the banner shown on your first visit. Essential cookies cannot be disabled as they are required for the site to work.</p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-light text-stone-900 mb-3">4. Data Retention</h2>
              <p>We retain contact form submissions and inquiry records for up to 3 years. You may request deletion of your personal data at any time by contacting us at hello@exclusivecrafts.com.</p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-light text-stone-900 mb-3">5. Your Rights</h2>
              <p>Depending on your location, you may have rights to access, correct, delete, or restrict processing of your personal data. To exercise these rights, contact us at hello@exclusivecrafts.com. We will respond within 30 days.</p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-light text-stone-900 mb-3">6. Security</h2>
              <p>We use industry-standard security measures including HTTPS encryption and secure database hosting through Supabase. While we take reasonable precautions, no internet transmission is 100% secure.</p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-light text-stone-900 mb-3">7. Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated date. Continued use of the website after changes constitutes acceptance.</p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-light text-stone-900 mb-3">8. Contact</h2>
              <p>For privacy-related questions, contact: <a href="mailto:hello@exclusivecrafts.com" className="text-stone-900 underline">hello@exclusivecrafts.com</a></p>
              <p className="mt-2">Exclusive Crafts, Gokarneshwor-06, Jorpati, Kathmandu, Nepal.</p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
