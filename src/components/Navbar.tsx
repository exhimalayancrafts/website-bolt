import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

type DropdownItem = { label: string; path: string };
type NavLink = { label: string; path: string; children?: undefined };
type NavGroup = { label: string; path?: undefined; children: DropdownItem[] };
type NavItem = NavLink | NavGroup;

const NAV: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Fibers', path: '/fibers' },
  { label: 'Products', path: '/products' },
  { label: 'Process', children: [
    { label: 'Sourcing', path: '/sourcing' },
    { label: 'Manufacturing', path: '/manufacturing' },
  ]},
  { label: 'Impact', children: [
    { label: 'Community', path: '/community' },
    { label: 'Activities', path: '/activities' },
  ]},
  { label: 'Contact', path: '/contact' },
];

function DesktopDropdown({ item, active }: { item: NavGroup; active: boolean }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, []);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className={`flex items-center gap-1 font-sans text-[11px] tracking-wide uppercase transition-colors relative pb-1 ${
          active ? 'text-stone-900' : 'text-stone-500 hover:text-stone-800'
        }`}
      >
        {item.label}
        <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
        {active && <span className="absolute bottom-0 left-0 right-0 h-px bg-stone-900" />}
      </button>

      <div
        className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 min-w-[160px] bg-stone-50 border border-stone-200 z-50 transition-all duration-150 ${
          open ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-1 pointer-events-none'
        }`}
      >
        {item.children.map((child) => (
          <Link
            key={child.path}
            to={child.path}
            onClick={() => setOpen(false)}
            className="block px-5 py-3 font-sans text-[11px] tracking-wide uppercase text-stone-500 hover:text-stone-900 hover:bg-stone-100 transition-colors"
          >
            {child.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const isGroupActive = (children: DropdownItem[]) => children.some((c) => location.pathname === c.path);

  return (
    <nav className="sticky top-0 z-50 bg-stone-50/95 backdrop-blur-sm border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
          <span className="font-serif text-xl font-semibold text-stone-900 tracking-tight">
            Exclusive Crafts
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV.map((item) =>
            item.children ? (
              <DesktopDropdown key={item.label} item={item} active={isGroupActive(item.children)} />
            ) : (
              <Link
                key={item.path}
                to={item.path}
                className={`font-sans text-[11px] tracking-wide uppercase transition-colors relative pb-1 ${
                  isActive(item.path) ? 'text-stone-900' : 'text-stone-500 hover:text-stone-800'
                }`}
              >
                {item.label}
                {isActive(item.path) && (
                  <span className="absolute bottom-0 left-0 right-0 h-px bg-stone-900" />
                )}
              </Link>
            )
          )}
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-stone-700"
          onClick={() => { setIsOpen(!isOpen); setExpanded(null); }}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-stone-50 border-t border-stone-200">
          <div className="px-6 py-4 space-y-1">
            {NAV.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <button
                    onClick={() => setExpanded(expanded === item.label ? null : item.label)}
                    className={`w-full flex items-center justify-between font-sans text-xs tracking-widest uppercase py-2.5 transition-colors ${
                      isGroupActive(item.children) ? 'text-stone-900' : 'text-stone-500'
                    }`}
                  >
                    {item.label}
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        expanded === item.label ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {expanded === item.label && (
                    <div className="pl-4 pb-1 space-y-0.5">
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          onClick={() => { setIsOpen(false); setExpanded(null); }}
                          className={`block font-sans text-xs tracking-widest uppercase py-2 transition-colors ${
                            isActive(child.path) ? 'text-stone-900' : 'text-stone-400 hover:text-stone-700'
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => { setIsOpen(false); setExpanded(null); }}
                  className={`block font-sans text-xs tracking-widest uppercase py-2.5 transition-colors ${
                    isActive(item.path) ? 'text-stone-900' : 'text-stone-500 hover:text-stone-700'
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
