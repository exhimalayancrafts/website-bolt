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
    <footer className="bg-stone-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-light text-white mb-4">
              EXCLUSIVE CRAFTS
            </h3>
            <p className="font-sans text-sm text-stone-300 mb-4">
              Rooted in Himalayan Heritage. Crafted Sustainably.
            </p>
            <p className="font-sans text-xs text-stone-500">
              Kathmandu, Nepal
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-stone-400 mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="font-sans text-xs text-stone-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-stone-400 mb-6">
              About
            </h4>
            <p className="font-sans text-xs text-stone-400 leading-relaxed mb-4">
              We work with responsibly sourced cashmere, yak wool, sheep wool, and emerging Himalayan plant-based fibers.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-1 font-sans text-xs text-white hover:gap-2 transition-all"
            >
              Learn More →
            </Link>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-stone-400 mb-6">
              Contact
            </h4>
            <div className="space-y-4">
              <a
                href="mailto:hello@exclusivecrafts.com"
                className="flex items-start gap-2 group"
              >
                <Mail className="w-4 h-4 text-stone-400 flex-shrink-0 mt-0.5 group-hover:text-white transition-colors" />
                <span className="font-sans text-xs text-stone-400 group-hover:text-white transition-colors break-all">
                  hello@exclusivecrafts.com
                </span>
              </a>
              <a
                href="tel:+9771234567"
                className="flex items-start gap-2 group"
              >
                <MessageCircle className="w-4 h-4 text-stone-400 flex-shrink-0 mt-0.5 group-hover:text-white transition-colors" />
                <span className="font-sans text-xs text-stone-400 group-hover:text-white transition-colors">
                  +977 (1) 123-4567
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-stone-700 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-sans text-xs text-stone-500">
            &copy; {new Date().getFullYear()} Exclusive Crafts. All rights reserved.
          </p>
          <p className="font-sans text-xs text-stone-500">
            Ethical Himalayan Fibers | Artisan-Centered Production
          </p>
        </div>
      </div>
    </footer>
  );
}
