import { useState } from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import MediaPlaceholder from '../components/MediaPlaceholder';

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
    { id: 'wholesale', label: 'Wholesale Inquiry', description: 'For retailers and bulk buyers', color: 'terracotta' },
    { id: 'collaboration', label: 'Collaboration Inquiry', description: 'For designers, NGOs, and partners', color: 'himalaya' },
    { id: 'general', label: 'General Contact', description: 'Questions and general inquiries', color: 'spice' },
  ];

  const colorMap: Record<string, { bg: string; activeBg: string; activeText: string; border: string; text: string; badge: string }> = {
    terracotta: {
      bg: 'bg-terracotta-50',
      activeBg: 'bg-terracotta-500',
      activeText: 'text-white',
      border: 'border-terracotta-300',
      text: 'text-terracotta-600',
      badge: 'bg-terracotta-100 text-terracotta-700',
    },
    himalaya: {
      bg: 'bg-himalaya-50',
      activeBg: 'bg-himalaya-600',
      activeText: 'text-white',
      border: 'border-himalaya-300',
      text: 'text-himalaya-600',
      badge: 'bg-himalaya-100 text-himalaya-700',
    },
    spice: {
      bg: 'bg-spice-50',
      activeBg: 'bg-spice-500',
      activeText: 'text-white',
      border: 'border-spice-300',
      text: 'text-spice-600',
      badge: 'bg-spice-100 text-spice-700',
    },
  };

  return (
    <div>
      {/* Page Header */}
      <section className="relative bg-gradient-to-br from-himalaya-50 via-cream-100 to-terracotta-50 py-20 px-6 lg:px-12 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 left-10 w-72 h-72 bg-himalaya-300 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <p className="font-sans text-xs tracking-widest uppercase text-himalaya-600 mb-4">
            Reach Out
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-semibold text-sand-900 mb-6">
            Connect With Exclusive Crafts
          </h1>
          <p className="font-sans text-lg text-sand-600 max-w-2xl">
            Whether you're interested in wholesale, collaboration, or simply want to learn more, we're here to help.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-white py-28 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Form */}
          <div className="lg:col-span-2">
            {/* Form Type Selector */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
              {formTypes.map((type) => {
                const colors = colorMap[type.color];
                const isActive = formType === type.id;
                return (
                  <button
                    key={type.id}
                    onClick={() => setFormType(type.id)}
                    className={`p-5 rounded-xl border-2 transition-all text-left ${
                      isActive
                        ? `${colors.activeBg} ${colors.activeText} border-transparent shadow-lg`
                        : `${colors.bg} ${colors.border} text-sand-800 hover:shadow-md`
                    }`}
                  >
                    <h3 className="font-sans text-xs tracking-widest uppercase font-medium mb-1">
                      {type.label}
                    </h3>
                    <p className={`font-sans text-xs ${isActive ? 'opacity-80' : 'text-sand-500'}`}>
                      {type.description}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {submitted && (
                <div className="bg-himalaya-50 border-2 border-himalaya-300 text-himalaya-800 p-6 rounded-xl font-sans text-sm">
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
                  className="font-sans text-sm px-5 py-3.5 border-2 border-sand-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-terracotta-400 focus:border-terracotta-400 bg-cream-50"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="font-sans text-sm px-5 py-3.5 border-2 border-sand-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-terracotta-400 focus:border-terracotta-400 bg-cream-50"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="font-sans text-sm px-5 py-3.5 border-2 border-sand-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-terracotta-400 focus:border-terracotta-400 bg-cream-50"
                />
                <input
                  type="text"
                  placeholder="Company (if applicable)"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="font-sans text-sm px-5 py-3.5 border-2 border-sand-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-terracotta-400 focus:border-terracotta-400 bg-cream-50"
                />
              </div>

              <textarea
                placeholder="Tell us more about your inquiry..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={6}
                className="font-sans text-sm w-full px-5 py-3.5 border-2 border-sand-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-terracotta-400 focus:border-terracotta-400 bg-cream-50 resize-none"
              />

              <button
                type="submit"
                className="inline-flex items-center gap-2 font-sans text-sm tracking-widest uppercase bg-terracotta-500 text-white px-8 py-4 rounded-xl hover:bg-terracotta-600 transition-colors shadow-lg"
              >
                Send Message
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-terracotta-50 border-2 border-terracotta-200 rounded-2xl p-6">
              <h3 className="font-sans text-xs tracking-widest uppercase text-terracotta-600 mb-4">
                Email
              </h3>
              <a
                href="mailto:hello@exclusivecrafts.com"
                className="font-sans text-lg text-sand-800 hover:text-terracotta-600 transition-colors flex items-center gap-3"
              >
                <Mail className="w-5 h-5 text-terracotta-500" />
                hello@exclusivecrafts.com
              </a>
            </div>

            <div className="bg-himalaya-50 border-2 border-himalaya-200 rounded-2xl p-6">
              <h3 className="font-sans text-xs tracking-widest uppercase text-himalaya-600 mb-4">
                Phone
              </h3>
              <a
                href="tel:+977-1-1234567"
                className="font-sans text-lg text-sand-800 hover:text-himalaya-600 transition-colors flex items-center gap-3"
              >
                <Phone className="w-5 h-5 text-himalaya-500" />
                +977 (1) 123-4567
              </a>
            </div>

            <div className="bg-spice-50 border-2 border-spice-200 rounded-2xl p-6">
              <h3 className="font-sans text-xs tracking-widest uppercase text-spice-600 mb-4">
                Location
              </h3>
              <p className="font-sans text-sm text-sand-700 flex items-start gap-3">
                <MapPin className="w-5 h-5 text-spice-500 flex-shrink-0 mt-0.5" />
                <span>
                  Thamel, Kathmandu<br />Nepal
                </span>
              </p>
            </div>

            <div className="bg-sand-50 border-2 border-sand-200 rounded-2xl p-6">
              <h3 className="font-sans text-xs tracking-widest uppercase text-sand-600 mb-3">
                Response Time
              </h3>
              <p className="font-sans text-sm text-sand-600">
                We typically respond to inquiries within 24 hours during business days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Section */}
      <section className="bg-cream-100 py-28 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-sans text-xs tracking-widest uppercase text-terracotta-500 mb-4">
              Come See Us
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-sand-900 mb-6">
              Visit Our Studio
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-terracotta-400 to-himalaya-400 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <MediaPlaceholder
                type="image"
                label="Our studio & workshop in Kathmandu"
                aspect="aspect-[4/3]"
                className="rounded-2xl"
              />
              <MediaPlaceholder
                type="video"
                label="Studio tour & meet the team"
                aspect="aspect-video"
                className="rounded-2xl"
              />
            </div>

            <div className="grid grid-cols-1 gap-6">
              {[
                {
                  icon: Mail,
                  title: 'Subscribe',
                  desc: 'Get updates on new collections, events, and sustainability initiatives.',
                  color: 'terracotta',
                },
                {
                  icon: MapPin,
                  title: 'Get Directions',
                  desc: 'Come see our collections and meet the team in Kathmandu.',
                  color: 'himalaya',
                },
                {
                  icon: Phone,
                  title: 'Call Us',
                  desc: 'For urgent inquiries, call us during business hours.',
                  color: 'spice',
                },
              ].map((item) => {
                const Icon = item.icon;
                const colors = colorMap[item.color];
                return (
                  <div key={item.title} className={`${colors.bg} border-2 ${colors.border} rounded-2xl p-6 flex items-start gap-4`}>
                    <div className={`w-12 h-12 ${colors.activeBg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-semibold text-sand-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="font-sans text-sm text-sand-600">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
