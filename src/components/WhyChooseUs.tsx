import { Factory, Award, Palette, Globe } from 'lucide-react';

const cards = [
  {
    Icon: Factory,
    title: 'Direct Manufacturer',
    description:
      'We are the factory. No middlemen, no markups. Buy direct from the source and benefit from competitive wholesale pricing with full transparency.',
  },
  {
    Icon: Award,
    title: '30+ Years Experience',
    description:
      'Since 1993, we have been perfecting our craft. Our decades of experience mean consistent quality, reliable delivery, and deep product expertise.',
  },
  {
    Icon: Palette,
    title: 'Custom Orders',
    description:
      'Your vision, our hands. From custom colorways and designs to private-label production, we deliver bespoke cashmere tailored to your brand.',
  },
  {
    Icon: Globe,
    title: 'Worldwide Shipping',
    description:
      'We ship via DHL Express to over 30 countries. Your order arrives safely and swiftly, fully insured and carefully packed.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-cream-200 py-28 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="font-sans text-[10px] tracking-widest3 uppercase text-cashmere mb-4">Why Work With Us</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-stone-900 mb-6">
            The Exclusive Crafts
            <br />
            <em className="italic">Difference</em>
          </h2>
          <div className="w-16 h-px bg-cashmere mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {cards.map(({ Icon, title, description }) => (
            <div key={title} className="group bg-cream-50 p-8 border border-cream-300 hover:border-cashmere transition-all duration-300 hover:shadow-lg">
              <div className="mb-6 w-12 h-12 flex items-center justify-center border border-cashmere/50 group-hover:bg-cashmere group-hover:border-cashmere transition-all duration-300">
                <Icon
                  size={20}
                  className="text-cashmere group-hover:text-stone-900 transition-colors duration-300"
                />
              </div>
              <h3 className="font-serif text-xl font-light text-stone-900 mb-4">{title}</h3>
              <div className="w-8 h-px bg-cashmere mb-5 group-hover:w-14 transition-all duration-300" />
              <p className="font-sans text-xs font-light text-stone-500 leading-relaxed tracking-wide">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
