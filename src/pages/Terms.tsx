import PageMeta from '../components/PageMeta';

export default function Terms() {
  return (
    <>
      <PageMeta
        title="Terms & Conditions — Exclusive Crafts"
        description="Terms and conditions for using the Exclusive Crafts website and services."
      />
      <div className="bg-stone-50 py-16 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <p className="font-sans text-[10px] tracking-widest uppercase text-stone-400 mb-4">Legal</p>
          <h1 className="font-serif text-4xl md:text-5xl font-light text-stone-900 mb-4 leading-tight">Terms &amp; Conditions</h1>
          <p className="font-sans text-sm text-stone-400 mb-12">Last updated: June 2026</p>

          <div className="font-sans text-base text-stone-600 leading-relaxed space-y-10">
            <section>
              <h2 className="font-serif text-xl font-light text-stone-900 mb-3">1. Acceptance of Terms</h2>
              <p>By accessing and using the Exclusive Crafts website, you accept and agree to be bound by these Terms and Conditions. If you do not agree, please do not use this website.</p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-light text-stone-900 mb-3">2. Use of Website</h2>
              <p>This website is intended for legitimate business inquiries, product information, and wholesale partnership purposes. You agree not to: use the site for any unlawful purpose, attempt to gain unauthorized access, transmit harmful code, or scrape content without permission.</p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-light text-stone-900 mb-3">3. Intellectual Property</h2>
              <p>All content on this website — including text, images, photography, logos, and design — is the property of Exclusive Crafts or its licensors. Reproduction or use without written permission is prohibited.</p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-light text-stone-900 mb-3">4. Product Information</h2>
              <p>Product descriptions, pricing, and availability shown on this website are for informational purposes only. All orders are subject to separate wholesale agreements. We reserve the right to modify product specifications without notice.</p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-light text-stone-900 mb-3">5. Limitation of Liability</h2>
              <p>Exclusive Crafts is not liable for any indirect, incidental, or consequential damages arising from use of this website or reliance on information provided herein. The website is provided "as is" without warranties of any kind.</p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-light text-stone-900 mb-3">6. External Links</h2>
              <p>This website may contain links to third-party websites. We are not responsible for the content or practices of external sites and recommend reviewing their terms and privacy policies.</p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-light text-stone-900 mb-3">7. Governing Law</h2>
              <p>These terms are governed by the laws of Nepal. Any disputes shall be subject to the jurisdiction of courts in Kathmandu, Nepal.</p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-light text-stone-900 mb-3">8. Contact</h2>
              <p>For questions about these terms: <a href="mailto:hello@exclusivecrafts.com" className="text-stone-900 underline">hello@exclusivecrafts.com</a></p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
