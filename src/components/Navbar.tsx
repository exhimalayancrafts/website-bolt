import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'Fibers', path: '/fibers' },
    { label: 'Impact', path: '/impact' },
    { label: 'About', path: '/about' },
    { label: 'Events', path: '/events' },
    { label: 'Products', path: '/products' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="font-serif text-2xl font-light text-stone-900">
            EXCLUSIVE CRAFTS
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="font-sans text-xs tracking-widest uppercase text-stone-700 hover:text-stone-900 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Partner Button */}
        <Link
          to="/contact"
          className="hidden md:inline-block font-sans text-xs tracking-widest uppercase border-2 border-stone-900 text-stone-900 px-6 py-2.5 hover:bg-stone-900 hover:text-white transition-colors"
        >
          Partner With Us
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-stone-900" />
          ) : (
            <Menu className="w-6 h-6 text-stone-900" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-stone-200">
          <div className="px-6 py-4 space-y-4">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block font-sans text-sm tracking-widest uppercase text-stone-700 hover:text-stone-900 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="block font-sans text-xs tracking-widest uppercase border-2 border-stone-900 text-stone-900 px-6 py-2.5 text-center hover:bg-stone-900 hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Partner With Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
