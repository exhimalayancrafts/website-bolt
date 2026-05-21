import { Package, Truck, Clock, Palette } from 'lucide-react';

const details = [
  {
    Icon: Package,
    title: 'Minimum Order',
    value: '$400 USD',
    note: 'Minimum order value per shipment',
  },
  {
    Icon: Truck,
    title: 'Shipping Method',
    value: 'DHL Express',
    note: 'Worldwide door-to-door delivery',
  },
  {
    Icon: Clock,
    title: 'Lead Time',
    value: '2–3 Weeks',
    note: 'From order confirmation to dispatch',
  },
  {
    Icon: Palette,
    title: 'Custom Colors',
    value: 'Available',
    note: 'Pantone matching & custom dyeing',
  },
];

export default function WholesaleInfo() {
  return (
    <section id="wholesale" className="relative bg-stone-900 py-28 px-6 lg:px-12 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <img
          src="https://images.pexels.com/photos/4996838/pexels-photo-4996838.jpeg?auto=compress&cs=tinysrgb&w=1920&q=40"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div>
            <p className="font-sans text-[10px] tracking-widest3 uppercase text-cashmere mb-6">For Retailers & Brands</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.25rem] font-light text-cream-100 leading-tight mb-8">
              Wholesale
              <br />
              <em className="italic">Partnership</em>
            </h2>
            <div className="w-12 h-px bg-cashmere mb-10" />
            <p className="font-sans text-sm font-light text-stone-400 leading-[1.85] tracking-wide mb-8">
              We partner with boutiques, multi-brand retailers, department stores, and fashion brands worldwide. Our flexible wholesale programme is designed to support businesses of every size, from independent stores to large-scale buyers.
            </p>
            <p className="font-sans text-sm font-light text-stone-400 leading-[1.85] tracking-wide mb-12">
              Whether you need a staple cashmere line or a fully bespoke private-label collection, we are your manufacturing partner from concept to delivery.
            </p>
            <a
              href="#contact"
              className="inline-block font-sans text-xs tracking-widest2 uppercase bg-cashmere text-stone-900 px-10 py-4 hover:bg-cashmere-light transition-all duration-300"
            >
              Start Your Order
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {details.map(({ Icon, title, value, note }) => (
              <div key={title} className="border border-stone-700 hover:border-cashmere/50 p-7 transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-5">
                  <Icon size={16} className="text-cashmere" />
                  <span className="font-sans text-[10px] tracking-widest uppercase text-stone-500">{title}</span>
                </div>
                <p className="font-serif text-3xl font-light text-cream-200 mb-2">{value}</p>
                <p className="font-sans text-xs font-light text-stone-500 tracking-wide">{note}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-stone-800 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">
          {[
            { label: 'Payment', value: 'T/T Bank Transfer, Western Union, PayPal' },
            { label: 'Samples', value: 'Sample orders available before bulk purchase' },
            { label: 'Packaging', value: 'Custom branding & private label available' },
          ].map(({ label, value }) => (
            <div key={label}>
              <p className="font-sans text-[10px] tracking-widest uppercase text-cashmere mb-2">{label}</p>
              <p className="font-sans text-xs font-light text-stone-400 leading-relaxed">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
