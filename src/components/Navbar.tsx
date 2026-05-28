import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

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
    <nav className="sticky top-0 z-50 bg-cream-100/95 backdrop-blur-md shadow-sm border-b border-sand-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-terracotta-500 flex items-center justify-center">
            <span className="font-serif text-lg text-white font-bold">EC</span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-serif text-xl font-semibold text-sand-900">
              Exclusive Crafts
            </span>
            <span className="font-sans text-[9px] tracking-widest uppercase text-terracotta-500">
              Himalayan Heritage
            </span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`font-sans text-xs tracking-widest uppercase transition-colors relative pb-1 ${
                location.pathname === item.path
                  ? 'text-terracotta-600'
                  : 'text-sand-700 hover:text-terracotta-500'
              }`}
            >
              {item.label}
              {location.pathname === item.path && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-terracotta-500 rounded-full" />
              )}
            </Link>
          ))}
        </div>

        <Link
          to="/contact"
          className="hidden lg:inline-flex items-center gap-2 font-sans text-xs tracking-widest uppercase bg-terracotta-500 text-white px-6 py-2.5 rounded-lg hover:bg-terracotta-600 transition-colors shadow-sm"
        >
          Partner With Us
        </Link>

        <button
          className="lg:hidden p-2 text-sand-800"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-cream-100 border-t border-sand-200">
          <div className="px-6 py-4 space-y-3">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block font-sans text-sm tracking-widest uppercase py-2 transition-colors ${
                  location.pathname === item.path
                    ? 'text-terracotta-600'
                    : 'text-sand-700 hover:text-terracotta-500'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="block font-sans text-xs tracking-widest uppercase bg-terracotta-500 text-white px-6 py-2.5 rounded-lg text-center hover:bg-terracotta-600 transition-colors"
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
