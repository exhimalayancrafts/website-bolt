import { Link } from 'react-router-dom';

export default function Footer() {
  const pages = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Fibers', path: '/fibers' },
    { label: 'Products', path: '/products' },
    { label: 'Sourcing', path: '/sourcing' },
    { label: 'Manufacturing', path: '/manufacturing' },
    { label: 'Community', path: '/community' },
    { label: 'Activities', path: '/activities' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          {/* Brand */}
          <div>
            <p className="font-serif text-xl text-stone-100 mb-4">
              Exclusive Crafts
            </p>
            <p className="font-sans text-sm text-stone-400 leading-relaxed">
              Himalayan fiber company working with cashmere, yak wool, sheep wool, and Allo. Based in Kathmandu, Nepal.
            </p>
          </div>

          {/* Pages */}
          <div>
            <p className="font-sans text-[10px] tracking-widest uppercase text-stone-500 mb-6">
              Pages
            </p>
            <ul className="space-y-2">
              {pages.map((page) => (
                <li key={page.path}>
                  <Link
                    to={page.path}
                    className="font-sans text-sm text-stone-400 hover:text-stone-200 transition-colors"
                  >
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-sans text-[10px] tracking-widest uppercase text-stone-500 mb-6">
              Contact
            </p>
            <div className="space-y-4">
              <p className="font-sans text-sm text-stone-400">
                Thamel, Kathmandu<br />
                Nepal
              </p>
              <a
                href="mailto:hello@exclusivecrafts.com"
                className="block font-sans text-sm text-stone-400 hover:text-stone-200 transition-colors"
              >
                hello@exclusivecrafts.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-stone-700 pt-8">
          <p className="font-sans text-xs text-stone-500">
            &copy; {new Date().getFullYear()} Exclusive Crafts. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
