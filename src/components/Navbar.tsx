import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Products', href: '#products' },
  { label: 'About', href: '#about' },
  { label: 'Wholesale', href: '#wholesale' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-stone-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
        <a href="#hero" className="flex flex-col leading-none">
          <span className={`font-serif text-2xl font-light tracking-wide transition-colors duration-300 ${scrolled ? 'text-cream-200' : 'text-cream-100'}`}>
            Exclusive Crafts
          </span>
          <span className={`font-sans text-[10px] tracking-widest2 uppercase transition-colors duration-300 ${scrolled ? 'text-cashmere-light' : 'text-cream-300'}`}>
            Kathmandu, Nepal
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`font-sans text-xs tracking-widest uppercase transition-colors duration-300 hover:text-cashmere-light ${
                  scrolled ? 'text-cream-300' : 'text-cream-200'
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="font-sans text-xs tracking-widest uppercase border border-cashmere text-cashmere-light px-5 py-2.5 hover:bg-cashmere hover:text-stone-900 transition-all duration-300"
            >
              Inquire
            </a>
          </li>
        </ul>

        <button
          className={`md:hidden p-2 transition-colors duration-300 ${scrolled ? 'text-cream-200' : 'text-cream-100'}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-stone-900/98 backdrop-blur-sm border-t border-stone-700">
          <ul className="flex flex-col py-6 px-6 gap-6">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-sans text-xs tracking-widest uppercase text-cream-300 hover:text-cashmere-light transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-block font-sans text-xs tracking-widest uppercase border border-cashmere text-cashmere-light px-5 py-2.5 hover:bg-cashmere hover:text-stone-900 transition-all duration-300"
              >
                Inquire
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
