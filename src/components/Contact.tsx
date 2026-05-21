import { Mail, MapPin, MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '9779861397161';
const EMAIL = 'exhimalayancrafts@gmail.com';

export default function Contact() {
  return (
    <section id="contact" className="bg-cream-100 py-28 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="font-sans text-[10px] tracking-widest3 uppercase text-cashmere mb-4">Get In Touch</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-stone-900 mb-6">
            Let's Work
            <br />
            <em className="italic">Together</em>
          </h2>
          <div className="w-16 h-px bg-cashmere mx-auto mb-8" />
          <p className="font-sans text-sm font-light text-stone-500 max-w-md mx-auto leading-relaxed tracking-wide">
            Ready to place a wholesale order or request a sample? Reach out via WhatsApp or email — we respond within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-6">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-6 bg-white border border-cream-300 hover:border-cashmere p-7 transition-all duration-300 hover:shadow-md"
            >
              <div className="w-12 h-12 flex-shrink-0 bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-center group-hover:bg-[#25D366] transition-all duration-300">
                <MessageCircle size={20} className="text-[#25D366] group-hover:text-white transition-colors duration-300" />
              </div>
              <div>
                <p className="font-sans text-[10px] tracking-widest uppercase text-stone-500 mb-1">WhatsApp</p>
                <p className="font-serif text-xl font-light text-stone-900 mb-1">+977 9861397161</p>
                <p className="font-sans text-xs text-stone-400 font-light tracking-wide">
                  Chat with us directly — fastest response
                </p>
              </div>
            </a>

            <a
              href={`mailto:${EMAIL}`}
              className="group flex items-start gap-6 bg-white border border-cream-300 hover:border-cashmere p-7 transition-all duration-300 hover:shadow-md"
            >
              <div className="w-12 h-12 flex-shrink-0 bg-cashmere/10 border border-cashmere/30 flex items-center justify-center group-hover:bg-cashmere transition-all duration-300">
                <Mail size={20} className="text-cashmere group-hover:text-stone-900 transition-colors duration-300" />
              </div>
              <div>
                <p className="font-sans text-[10px] tracking-widest uppercase text-stone-500 mb-1">Email</p>
                <p className="font-serif text-xl font-light text-stone-900 mb-1 break-all">{EMAIL}</p>
                <p className="font-sans text-xs text-stone-400 font-light tracking-wide">
                  Send us your requirements & we'll respond within 24 hrs
                </p>
              </div>
            </a>

            <div className="flex items-start gap-6 bg-white border border-cream-300 p-7">
              <div className="w-12 h-12 flex-shrink-0 bg-stone-100 border border-stone-200 flex items-center justify-center">
                <MapPin size={20} className="text-stone-400" />
              </div>
              <div>
                <p className="font-sans text-[10px] tracking-widest uppercase text-stone-500 mb-1">Location</p>
                <p className="font-serif text-xl font-light text-stone-900 mb-1">Kathmandu, Nepal</p>
                <p className="font-sans text-xs text-stone-400 font-light tracking-wide">
                  Factory visits by appointment
                </p>
              </div>
            </div>
          </div>

          <form
            className="bg-white border border-cream-300 p-8 space-y-5"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const data = new FormData(form);
              const name = data.get('name');
              const company = data.get('company');
              const message = data.get('message');
              const whatsappMsg = `Hello, I'm ${name}${company ? ` from ${company}` : ''}. ${message}`;
              window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMsg)}`, '_blank');
            }}
          >
            <p className="font-sans text-[10px] tracking-widest uppercase text-cashmere mb-2">Send an Enquiry</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-sans text-[10px] tracking-widest uppercase text-stone-500 mb-2">Name</label>
                <input
                  name="name"
                  type="text"
                  required
                  className="w-full bg-cream-50 border border-cream-300 focus:border-cashmere outline-none px-4 py-3 font-sans text-sm text-stone-800 transition-colors placeholder:text-stone-300"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block font-sans text-[10px] tracking-widest uppercase text-stone-500 mb-2">Company</label>
                <input
                  name="company"
                  type="text"
                  className="w-full bg-cream-50 border border-cream-300 focus:border-cashmere outline-none px-4 py-3 font-sans text-sm text-stone-800 transition-colors placeholder:text-stone-300"
                  placeholder="Optional"
                />
              </div>
            </div>
            <div>
              <label className="block font-sans text-[10px] tracking-widest uppercase text-stone-500 mb-2">Email</label>
              <input
                name="email"
                type="email"
                required
                className="w-full bg-cream-50 border border-cream-300 focus:border-cashmere outline-none px-4 py-3 font-sans text-sm text-stone-800 transition-colors placeholder:text-stone-300"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block font-sans text-[10px] tracking-widest uppercase text-stone-500 mb-2">Message</label>
              <textarea
                name="message"
                rows={5}
                required
                className="w-full bg-cream-50 border border-cream-300 focus:border-cashmere outline-none px-4 py-3 font-sans text-sm text-stone-800 transition-colors resize-none placeholder:text-stone-300"
                placeholder="Tell us about your order requirements, quantities, and any custom requests..."
              />
            </div>
            <button
              type="submit"
              className="w-full font-sans text-xs tracking-widest2 uppercase bg-stone-900 text-cream-100 py-4 hover:bg-cashmere hover:text-stone-900 transition-all duration-300"
            >
              Send via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
