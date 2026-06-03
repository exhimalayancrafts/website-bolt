import { Link, useLocation } from 'react-router-dom';
import { Instagram, Linkedin, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const PAGES = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Fibers', path: '/fibers' },
  { label: 'Products', path: '/products' },
];

const PROCESS = [
  { label: 'Sourcing', path: '/sourcing' },
  { label: 'Manufacturing', path: '/manufacturing' },
  { label: 'Community', path: '/community' },
  { label: 'Activities', path: '/activities' },
];

const LEGAL = [
  { label: 'Privacy Policy', path: '/privacy' },
  { label: 'Terms & Conditions', path: '/terms' },
  { label: 'Contact', path: '/contact' },
];

export default function Footer() {
  const location = useLocation();
  if (location.pathname === '/admin') return null;

  return (
    <footer className="bg-stone-900 text-stone-400" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-block mb-5" aria-label="Exclusive Crafts home">
              <span className="font-serif text-2xl font-light text-stone-100 tracking-tight">Exclusive Crafts</span>
            </Link>
            <p className="font-sans text-sm text-stone-400 leading-relaxed mb-6">
              Himalayan fiber company crafting cashmere, yak wool, sheep wool, and allo textiles from Kathmandu, Nepal since 1993.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-stone-500 hover:text-stone-200 transition-colors"><Instagram className="w-4 h-4" /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-stone-500 hover:text-stone-200 transition-colors"><Linkedin className="w-4 h-4" /></a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-stone-500 hover:text-stone-200 transition-colors"><Facebook className="w-4 h-4" /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter / X" className="text-stone-500 hover:text-stone-200 transition-colors"><Twitter className="w-4 h-4" /></a>
            </div>
          </div>

          {/* Pages */}
          <nav aria-label="Footer navigation — pages">
            <p className="font-sans text-[10px] tracking-widest uppercase text-stone-500 mb-5">Explore</p>
            <ul className="space-y-2.5">
              {PAGES.map((p) => (
                <li key={p.path}>
                  <Link to={p.path} className="font-sans text-sm text-stone-400 hover:text-stone-200 transition-colors">{p.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Process */}
          <nav aria-label="Footer navigation — our work">
            <p className="font-sans text-[10px] tracking-widest uppercase text-stone-500 mb-5">Our Work</p>
            <ul className="space-y-2.5">
              {PROCESS.map((p) => (
                <li key={p.path}>
                  <Link to={p.path} className="font-sans text-sm text-stone-400 hover:text-stone-200 transition-colors">{p.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <p className="font-sans text-[10px] tracking-widest uppercase text-stone-500 mb-5">Get in Touch</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 flex-shrink-0 mt-0.5 text-stone-600" aria-hidden="true" />
                <address className="not-italic font-sans text-sm text-stone-400 leading-relaxed">Gokarneshwor-06, Jorpati<br />Kathmandu, Nepal</address>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 flex-shrink-0 text-stone-600" aria-hidden="true" />
                <a href="mailto:hello@exclusivecrafts.com" className="font-sans text-sm text-stone-400 hover:text-stone-200 transition-colors">hello@exclusivecrafts.com</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 flex-shrink-0 text-stone-600" aria-hidden="true" />
                <a href="tel:+9771234567" className="font-sans text-sm text-stone-400 hover:text-stone-200 transition-colors">+977 (1) 123-4567</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-stone-800 pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="font-sans text-xs text-stone-600">&copy; {new Date().getFullYear()} Exclusive Crafts. All rights reserved.</p>
          <nav aria-label="Legal links" className="flex flex-wrap gap-5">
            {LEGAL.map((p) => (
              <Link key={p.path} to={p.path} className="font-sans text-xs text-stone-600 hover:text-stone-400 transition-colors">{p.label}</Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
