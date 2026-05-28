import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const [formType, setFormType] = useState('general');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const formTypes = [
    { id: 'wholesale', label: 'Wholesale Inquiry', description: 'For retailers and bulk buyers' },
    { id: 'collaboration', label: 'Collaboration Inquiry', description: 'For designers, NGOs, and partners' },
    { id: 'general', label: 'General Contact', description: 'Questions and general inquiries' },
  ];

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-stone-50 to-stone-100 py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-serif text-5xl md:text-6xl font-light text-stone-900 mb-6">
            Connect With Exclusive Crafts
          </h1>
          <p className="font-sans text-lg text-stone-600 max-w-2xl">
            Whether you're interested in wholesale, collaboration, or simply want to learn more, we're here to help.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-28 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Form */}
          <div className="lg:col-span-2">
            {/* Form Type Selector */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
              {formTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setFormType(type.id)}
                  className={`p-4 rounded-lg border-2 transition-all text-left ${
                    formType === type.id
                      ? 'border-stone-900 bg-stone-900 text-white'
                      : 'border-stone-200 bg-stone-50 text-stone-900 hover:border-stone-900'
                  }`}
                >
                  <h3 className="font-sans text-xs tracking-widest uppercase font-medium mb-1">
                    {type.label}
                  </h3>
                  <p className="font-sans text-xs text-opacity-75">
                    {type.description}
                  </p>
                </button>
              ))}
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {submitted && (
                <div className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-lg font-sans text-sm">
                  Thank you for reaching out! We'll respond within 24 hours.
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="font-sans text-sm px-4 py-3 border border-stone-300 rounded focus:outline-none focus:ring-2 focus:ring-stone-900"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="font-sans text-sm px-4 py-3 border border-stone-300 rounded focus:outline-none focus:ring-2 focus:ring-stone-900"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="font-sans text-sm px-4 py-3 border border-stone-300 rounded focus:outline-none focus:ring-2 focus:ring-stone-900"
                />
                <input
                  type="text"
                  placeholder="Company (if applicable)"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="font-sans text-sm px-4 py-3 border border-stone-300 rounded focus:outline-none focus:ring-2 focus:ring-stone-900"
                />
              </div>

              <textarea
                placeholder="Tell us more about your inquiry..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={6}
                className="font-sans text-sm w-full px-4 py-3 border border-stone-300 rounded focus:outline-none focus:ring-2 focus:ring-stone-900 resize-none"
              />

              <button
                type="submit"
                className="font-sans text-xs tracking-widest uppercase bg-stone-900 text-white px-8 py-4 hover:bg-stone-800 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-sans text-xs tracking-widest uppercase text-stone-500 mb-2">
                Email
              </h3>
              <a
                href="mailto:hello@exclusivecrafts.com"
                className="font-sans text-lg text-stone-900 hover:text-stone-600 transition-colors flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                hello@exclusivecrafts.com
              </a>
            </div>

            <div>
              <h3 className="font-sans text-xs tracking-widest uppercase text-stone-500 mb-2">
                Phone
              </h3>
              <a
                href="tel:+977-1-1234567"
                className="font-sans text-lg text-stone-900 hover:text-stone-600 transition-colors flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                +977 (1) 123-4567
              </a>
            </div>

            <div>
              <h3 className="font-sans text-xs tracking-widest uppercase text-stone-500 mb-2">
                Location
              </h3>
              <p className="font-sans text-sm text-stone-600 flex items-start gap-2">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>
                  Thamel, Kathmandu<br />
                  Nepal
                </span>
              </p>
            </div>

            <div className="bg-stone-50 p-6 rounded-lg border border-stone-200">
              <h3 className="font-sans text-xs tracking-widest uppercase text-stone-500 mb-3">
                Response Time
              </h3>
              <p className="font-sans text-sm text-stone-600">
                We typically respond to inquiries within 24 hours during business days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Options */}
      <section className="bg-stone-50 py-28 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-light text-stone-900 mb-6">
              Other Ways to Connect
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-stone-900 text-white rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-xl font-light text-stone-900 mb-2">
                Subscribe
              </h3>
              <p className="font-sans text-sm text-stone-600 mb-4">
                Get updates on new collections, events, and sustainability initiatives.
              </p>
              <input
                type="email"
                placeholder="Your email"
                className="w-full font-sans text-sm px-4 py-2 border border-stone-300 rounded focus:outline-none focus:ring-2 focus:ring-stone-900"
              />
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-stone-900 text-white rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-xl font-light text-stone-900 mb-2">
                Visit Our Studio
              </h3>
              <p className="font-sans text-sm text-stone-600 mb-4">
                Come see our collections and meet the team in Kathmandu.
              </p>
              <button className="font-sans text-xs tracking-widest uppercase border-2 border-stone-900 text-stone-900 px-6 py-2 hover:bg-stone-900 hover:text-white transition-colors">
                Get Directions
              </button>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-stone-900 text-white rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-xl font-light text-stone-900 mb-2">
                Call Us
              </h3>
              <p className="font-sans text-sm text-stone-600 mb-4">
                For urgent inquiries, call us during business hours.
              </p>
              <p className="font-sans text-sm font-medium text-stone-900">
                +977 (1) 123-4567
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
