import { useState } from 'react';
import SiteImage from '../components/SiteImage';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', role: '', interest: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', company: '', role: '', interest: '', message: '' });
      setSubmitted(false);
    }, 4000);
  };

  return (
    <div className="bg-stone-50">
      {/* Header */}
      <section className="py-16 px-6 lg:px-12 border-b border-stone-200">
        <div className="max-w-6xl mx-auto">
          <p className="font-sans text-[10px] tracking-widest uppercase text-stone-500 mb-4">Get in Touch</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-stone-900 mb-5 leading-tight">Contact</h1>
          <p className="font-sans text-base text-stone-600 max-w-2xl leading-relaxed">
            For partnership inquiries, wholesale orders, or general questions.
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
                <div className="bg-stone-100 border border-stone-300 p-10 rounded-sm">
                  <p className="font-sans text-base text-stone-700 leading-relaxed">
                    Thank you for your message. We will respond within 2–3 business days.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-7">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                    <div>
                      <label className="block font-sans text-[10px] tracking-widest uppercase text-stone-500 mb-2">Name</label>
                      <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required className="w-full bg-transparent border-b border-stone-300 py-2.5 font-sans text-base text-stone-900 focus:outline-none focus:border-stone-900 transition-colors" />
                    </div>
                    <div>
                      <label className="block font-sans text-[10px] tracking-widest uppercase text-stone-500 mb-2">Email</label>
                      <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required className="w-full bg-transparent border-b border-stone-300 py-2.5 font-sans text-base text-stone-900 focus:outline-none focus:border-stone-900 transition-colors" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                    <div>
                      <label className="block font-sans text-[10px] tracking-widest uppercase text-stone-500 mb-2">Company</label>
                      <input type="text" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className="w-full bg-transparent border-b border-stone-300 py-2.5 font-sans text-base text-stone-900 focus:outline-none focus:border-stone-900 transition-colors" />
                    </div>
                    <div>
                      <label className="block font-sans text-[10px] tracking-widest uppercase text-stone-500 mb-2">Role</label>
                      <input type="text" value={formData.role} onChange={(e) => setFormData({ ...formData, role: e.target.value })} className="w-full bg-transparent border-b border-stone-300 py-2.5 font-sans text-base text-stone-900 focus:outline-none focus:border-stone-900 transition-colors" />
                    </div>
                  </div>
                  <div>
                    <label className="block font-sans text-[10px] tracking-widest uppercase text-stone-500 mb-2">Interest</label>
                    <select value={formData.interest} onChange={(e) => setFormData({ ...formData, interest: e.target.value })} className="w-full bg-transparent border-b border-stone-300 py-2.5 font-sans text-base text-stone-900 focus:outline-none focus:border-stone-900 transition-colors cursor-pointer">
                      <option value="">Select...</option>
                      <option value="wholesale">Wholesale Inquiry</option>
                      <option value="partnership">Partnership</option>
                      <option value="product">Product Information</option>
                      <option value="sourcing">Sourcing Details</option>
                      <option value="press">Press & Media</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-sans text-[10px] tracking-widest uppercase text-stone-500 mb-2">Message</label>
                    <textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required rows={5} className="w-full bg-transparent border-b border-stone-300 py-2.5 font-sans text-base text-stone-900 focus:outline-none focus:border-stone-900 transition-colors resize-none" />
                  </div>
                  <button type="submit" className="font-sans text-sm tracking-wide text-stone-600 hover:text-stone-900 border-b border-stone-400 hover:border-stone-900 pb-1 transition-colors">
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
                  <p className="font-sans text-base text-stone-600 leading-relaxed">Exclusive Crafts<br />Gokarneshwor-06, Jorpati<br />Kathmandu, Nepal</p>
                </div>
                <div>
                  <p className="font-sans text-[10px] tracking-widest uppercase text-stone-400 mb-3">Email</p>
                  <a href="mailto:hello@exclusivecrafts.com" className="font-sans text-base text-stone-600 hover:text-stone-900 transition-colors">
                    hello@exclusivecrafts.com
                  </a>
                </div>
                <div>
                  <p className="font-sans text-[10px] tracking-widest uppercase text-stone-400 mb-3">Phone</p>
                  <a href="tel:+9771234567" className="font-sans text-base text-stone-600 hover:text-stone-900 transition-colors">
                    +977 (1) 123-4567
                  </a>
                </div>
                <div>
                  <p className="font-sans text-[10px] tracking-widest uppercase text-stone-400 mb-3">Response</p>
                  <p className="font-sans text-base text-stone-600">We respond within 2–3 business days.</p>
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
            Samples, specifications, and wholesale terms are available to qualified partners. Please include company details and area of interest in your message.
          </p>
        </div>
      </section>
    </div>
  );
}
