import { Link } from 'react-router-dom';
import { Mail, MessageCircle } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { label: 'About', path: '/about' },
    { label: 'Fibers', path: '/fibers' },
    { label: 'Impact', path: '/impact' },
    { label: 'Events', path: '/events' },
    { label: 'Products', path: '/products' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-sand-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-terracotta-500 flex items-center justify-center">
                <span className="font-serif text-lg text-white font-bold">EC</span>
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold text-white leading-tight">
                  Exclusive Crafts
                </h3>
                <p className="font-sans text-[9px] tracking-widest uppercase text-terracotta-400">
                  Himalayan Heritage
                </p>
              </div>
            </div>
            <p className="font-sans text-sm text-sand-300 mb-4 leading-relaxed">
              Rooted in Himalayan Heritage. Crafted Sustainably.
            </p>
            <p className="font-sans text-xs text-sand-500">
              Kathmandu, Nepal
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-terracotta-400 mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="font-sans text-sm text-sand-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-himalaya-400 mb-6">
              Sustainability
            </h4>
            <p className="font-sans text-sm text-sand-400 leading-relaxed mb-4">
              We work with responsibly sourced cashmere, yak wool, sheep wool, and emerging Himalayan plant-based fibers.
            </p>
            <Link
              to="/impact"
              className="inline-flex items-center gap-1 font-sans text-sm text-terracotta-400 hover:text-terracotta-300 hover:gap-2 transition-all"
            >
              Our Impact →
            </Link>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-spice-400 mb-6">
              Contact
            </h4>
            <div className="space-y-4">
              <a
                href="mailto:hello@exclusivecrafts.com"
                className="flex items-start gap-3 group"
              >
                <Mail className="w-4 h-4 text-terracotta-400 flex-shrink-0 mt-0.5 group-hover:text-terracotta-300 transition-colors" />
                <span className="font-sans text-sm text-sand-400 group-hover:text-white transition-colors break-all">
                  hello@exclusivecrafts.com
                </span>
              </a>
              <a
                href="tel:+9771234567"
                className="flex items-start gap-3 group"
              >
                <MessageCircle className="w-4 h-4 text-himalaya-400 flex-shrink-0 mt-0.5 group-hover:text-himalaya-300 transition-colors" />
                <span className="font-sans text-sm text-sand-400 group-hover:text-white transition-colors">
                  +977 (1) 123-4567
                </span>
              </a>
            </div>

            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 font-sans text-xs tracking-widest uppercase bg-terracotta-500 text-white px-5 py-2.5 rounded-lg hover:bg-terracotta-600 transition-colors"
              >
                Partner With Us
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-sand-700 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-sans text-xs text-sand-500">
            &copy; {new Date().getFullYear()} Exclusive Crafts. All rights reserved.
          </p>
          <p className="font-sans text-xs text-sand-500">
            Ethical Himalayan Fibers | Artisan-Centered Production
          </p>
        </div>
      </div>
    </footer>
  );
}
