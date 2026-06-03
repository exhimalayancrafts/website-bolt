import { useRef, useState } from 'react';
import SiteImage from '../components/SiteImage';
import SiteText from '../components/SiteText';
import SiteLink from '../components/SiteLink';
import PageMeta from '../components/PageMeta';
import { sanitizeField, isValidEmail } from '../lib/sanitize';

const RATE_LIMIT_KEY = 'ec_form_ts';
const RATE_LIMIT_MS = 60_000; // 1 submission per minute

const INTERESTS = [
  { value: '', label: 'Select...' },
  { value: 'wholesale', label: 'Wholesale Inquiry' },
  { value: 'partnership', label: 'Partnership' },
  { value: 'product', label: 'Product Information' },
  { value: 'sourcing', label: 'Sourcing Details' },
  { value: 'press', label: 'Press & Media' },
  { value: 'other', label: 'Other' },
] as const;

const EMPTY = { name: '', email: '', company: '', role: '', interest: '', message: '' };

export default function Contact() {
  const [formData, setFormData] = useState(EMPTY);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<typeof EMPTY>>({});
  const [blocked, setBlocked] = useState(false);

  // Honeypot field — hidden from real users, filled by bots
  const honeypotRef = useRef<HTMLInputElement>(null);
  // Timestamp to detect suspiciously fast submissions
  const loadTimeRef = useRef<number>(Date.now());

  const field = (key: keyof typeof EMPTY) => (
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setFormData((prev) => ({ ...prev, [key]: e.target.value }));
      setErrors((prev) => ({ ...prev, [key]: '' }));
    }
  );

  const validate = (): boolean => {
    const next: Partial<typeof EMPTY> = {};
    if (!formData.name.trim()) next.name = 'Required';
    if (!formData.email.trim()) next.email = 'Required';
    else if (!isValidEmail(formData.email)) next.email = 'Invalid email';
    if (!formData.message.trim()) next.message = 'Required';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check — if filled, silently ignore
    if (honeypotRef.current?.value) return;

    // Submission speed check — bots submit instantly
    if (Date.now() - loadTimeRef.current < 2000) return;

    // Rate limiting — one submission per minute per browser
    const last = Number(localStorage.getItem(RATE_LIMIT_KEY) ?? 0);
    if (Date.now() - last < RATE_LIMIT_MS) {
      setBlocked(true);
      setTimeout(() => setBlocked(false), RATE_LIMIT_MS - (Date.now() - last));
      return;
    }

    if (!validate()) return;

    // Sanitize all inputs before any use
    const safe = {
      name:     sanitizeField(formData.name, 100),
      email:    sanitizeField(formData.email, 200),
      company:  sanitizeField(formData.company, 200),
      role:     sanitizeField(formData.role, 100),
      interest: sanitizeField(formData.interest, 50),
      message:  sanitizeField(formData.message, 2000),
    };

    // Intentionally unused until a backend endpoint is wired up:
    void safe;

    localStorage.setItem(RATE_LIMIT_KEY, String(Date.now()));
    setSubmitted(true);
    setTimeout(() => {
      setFormData(EMPTY);
      setSubmitted(false);
    }, 6000);
  };

  const inputClass = (key: keyof typeof EMPTY) =>
    `w-full bg-transparent border-b py-2.5 font-sans text-base text-stone-900 focus:outline-none transition-colors ${
      errors[key] ? 'border-red-400 focus:border-red-600' : 'border-stone-300 focus:border-stone-900'
    }`;

  return (
    <div className="bg-stone-50">
      <PageMeta title="Contact Exclusive Crafts — Wholesale Inquiries" description="Get in touch with Exclusive Crafts for wholesale orders, partnership inquiries, and product information." />

      {/* Header */}
      <section className="py-16 px-6 lg:px-12 border-b border-stone-200">
        <div className="max-w-6xl mx-auto">
          <p className="font-sans text-[10px] tracking-widest uppercase text-stone-500 mb-4">Get in Touch</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-stone-900 mb-5 leading-tight">Contact</h1>
          <p className="font-sans text-base text-stone-600 max-w-2xl leading-relaxed">
            <SiteText page="contact" slot="page-intro" defaultContent="For partnership inquiries, wholesale orders, or general questions." />
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">
            {/* Form */}
            <div className="lg:col-span-7">
              {submitted ? (
                <div className="bg-stone-100 border border-stone-300 p-10 rounded-sm" role="alert">
                  <p className="font-sans text-base text-stone-700 leading-relaxed">
                    Thank you for your message. We will respond within 2–3 business days.
                  </p>
                </div>
              ) : blocked ? (
                <div className="bg-amber-50 border border-amber-200 p-10 rounded-sm" role="alert">
                  <p className="font-sans text-base text-amber-800 leading-relaxed">
                    Please wait a moment before sending another message.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-7" noValidate aria-label="Contact form">
                  {/* Honeypot — hidden from real users via CSS, filled by bots */}
                  <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', opacity: 0, pointerEvents: 'none', tabIndex: -1 } as React.CSSProperties}>
                    <label htmlFor="website">Website (leave blank)</label>
                    <input
                      id="website"
                      ref={honeypotRef}
                      type="text"
                      name="website"
                      autoComplete="off"
                      tabIndex={-1}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                    <div>
                      <label htmlFor="contact-name" className="block font-sans text-[10px] tracking-widest uppercase text-stone-500 mb-2">
                        Name <span className="text-red-500" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={formData.name}
                        onChange={field('name')}
                        required
                        autoComplete="name"
                        maxLength={100}
                        aria-describedby={errors.name ? 'err-name' : undefined}
                        className={inputClass('name')}
                      />
                      {errors.name && <p id="err-name" className="font-sans text-xs text-red-500 mt-1" role="alert">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block font-sans text-[10px] tracking-widest uppercase text-stone-500 mb-2">
                        Email <span className="text-red-500" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={formData.email}
                        onChange={field('email')}
                        required
                        autoComplete="email"
                        maxLength={200}
                        aria-describedby={errors.email ? 'err-email' : undefined}
                        className={inputClass('email')}
                      />
                      {errors.email && <p id="err-email" className="font-sans text-xs text-red-500 mt-1" role="alert">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                    <div>
                      <label htmlFor="contact-company" className="block font-sans text-[10px] tracking-widest uppercase text-stone-500 mb-2">Company</label>
                      <input
                        id="contact-company"
                        type="text"
                        value={formData.company}
                        onChange={field('company')}
                        autoComplete="organization"
                        maxLength={200}
                        className={inputClass('company')}
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-role" className="block font-sans text-[10px] tracking-widest uppercase text-stone-500 mb-2">Role</label>
                      <input
                        id="contact-role"
                        type="text"
                        value={formData.role}
                        onChange={field('role')}
                        autoComplete="organization-title"
                        maxLength={100}
                        className={inputClass('role')}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-interest" className="block font-sans text-[10px] tracking-widest uppercase text-stone-500 mb-2">Interest</label>
                    <select
                      id="contact-interest"
                      value={formData.interest}
                      onChange={field('interest')}
                      className="w-full bg-transparent border-b border-stone-300 py-2.5 font-sans text-base text-stone-900 focus:outline-none focus:border-stone-900 transition-colors cursor-pointer"
                    >
                      {INTERESTS.map((o) => (
                        <option key={o.value} value={o.value}>{o.label}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block font-sans text-[10px] tracking-widest uppercase text-stone-500 mb-2">
                      Message <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      value={formData.message}
                      onChange={field('message')}
                      required
                      rows={5}
                      maxLength={2000}
                      aria-describedby={errors.message ? 'err-message' : undefined}
                      className={`${inputClass('message')} resize-none`}
                    />
                    {errors.message && <p id="err-message" className="font-sans text-xs text-red-500 mt-1" role="alert">{errors.message}</p>}
                    <p className="font-sans text-[10px] text-stone-400 mt-1 text-right">{formData.message.length}/2000</p>
                  </div>

                  <button
                    type="submit"
                    className="font-sans text-sm tracking-wide text-stone-600 hover:text-stone-900 border-b border-stone-400 hover:border-stone-900 pb-1 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-4 lg:col-start-9">
              <div className="lg:sticky lg:top-28 space-y-10">
                <div>
                  <p className="font-sans text-[10px] tracking-widest uppercase text-stone-400 mb-3">Office</p>
                  <address className="not-italic font-sans text-base text-stone-600 leading-relaxed">
                    <SiteText page="contact" slot="address" defaultContent={'Exclusive Crafts\nGokarneshwor-06, Jorpati\nKathmandu, Nepal'} />
                  </address>
                </div>
                <div>
                  <p className="font-sans text-[10px] tracking-widest uppercase text-stone-400 mb-3">Email</p>
                  <a href="mailto:hello@exclusivecrafts.com" className="font-sans text-base text-stone-600 hover:text-stone-900 transition-colors">
                    <SiteText page="contact" slot="email" defaultContent="hello@exclusivecrafts.com" />
                  </a>
                </div>
                <div>
                  <p className="font-sans text-[10px] tracking-widest uppercase text-stone-400 mb-3">Phone</p>
                  <a href="tel:+9771234567" className="font-sans text-base text-stone-600 hover:text-stone-900 transition-colors">
                    <SiteText page="contact" slot="phone" defaultContent="+977 (1) 123-4567" />
                  </a>
                </div>
                <div>
                  <p className="font-sans text-[10px] tracking-widest uppercase text-stone-400 mb-3">Response</p>
                  <p className="font-sans text-base text-stone-600">We respond within 2–3 business days.</p>
                </div>
                <div className="flex flex-col gap-2">
                  <SiteLink page="contact" slot="instagram" defaultHref="" defaultLinkText="Instagram" className="font-sans text-sm text-stone-600 hover:text-stone-900 transition-colors" />
                  <SiteLink page="contact" slot="linkedin" defaultHref="" defaultLinkText="LinkedIn" className="font-sans text-sm text-stone-600 hover:text-stone-900 transition-colors" />
                  <SiteLink page="contact" slot="whatsapp" defaultHref="" defaultLinkText="WhatsApp" className="font-sans text-sm text-stone-600 hover:text-stone-900 transition-colors" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Image */}
      <section className="py-16 px-6 lg:px-12 bg-stone-100">
        <div className="max-w-6xl mx-auto">
          <SiteImage page="contact" slot="office-location" fallbackLabel="Office / facility location" aspect="aspect-video" className="rounded-sm" />
        </div>
      </section>

      {/* Note */}
      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-sans text-base text-stone-500 leading-relaxed">
            <SiteText page="contact" slot="footer-note" defaultContent="Samples, specifications, and wholesale terms are available to qualified partners. Please include company details and area of interest in your message." />
          </p>
        </div>
      </section>
    </div>
  );
}
