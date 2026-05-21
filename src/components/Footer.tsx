import { MessageCircle, Mail } from 'lucide-react';

const WHATSAPP_NUMBER = '9779861397161';
const EMAIL = 'exhimalayancrafts@gmail.com';

export default function Footer() {
  return (
    <footer className="bg-stone-900 border-t border-stone-800 py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <p className="font-serif text-2xl font-light text-cream-200 mb-2">Exclusive Crafts</p>
            <p className="font-sans text-[10px] tracking-widest2 uppercase text-cashmere mb-6">
              Kathmandu, Nepal &nbsp;&middot;&nbsp; Est. 1993
            </p>
            <p className="font-sans text-xs font-light text-stone-500 leading-relaxed max-w-xs">
              Premium wholesale cashmere manufacturer. Handcrafted by Himalayan artisans for over three decades.
            </p>
          </div>

          <div>
            <p className="font-sans text-[10px] tracking-widest uppercase text-cashmere mb-6">Navigate</p>
            <ul className="space-y-3">
              {[
                { label: 'Products', href: '#products' },
                { label: 'About Us', href: '#about' },
                { label: 'Wholesale Info', href: '#wholesale' },
                { label: 'Contact', href: '#contact' },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="font-sans text-xs font-light text-stone-500 hover:text-cream-300 transition-colors tracking-wide"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-sans text-[10px] tracking-widest uppercase text-cashmere mb-6">Contact</p>
            <div className="space-y-4">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <MessageCircle size={14} className="text-[#25D366] flex-shrink-0" />
                <span className="font-sans text-xs font-light text-stone-500 group-hover:text-cream-300 transition-colors tracking-wide">
                  +977 9861397161
                </span>
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-3 group"
              >
                <Mail size={14} className="text-cashmere flex-shrink-0" />
                <span className="font-sans text-xs font-light text-stone-500 group-hover:text-cream-300 transition-colors tracking-wide break-all">
                  {EMAIL}
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-sans text-[10px] text-stone-600 tracking-wide">
            &copy; {new Date().getFullYear()} Exclusive Crafts. All rights reserved.
          </p>
          <p className="font-sans text-[10px] text-stone-600 tracking-wide">
            Handmade in Kathmandu, Nepal
          </p>
        </div>
      </div>
    </footer>
  );
}
