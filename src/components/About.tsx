export default function About() {
  return (
    <section id="about" className="bg-stone-900 py-28 px-6 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative">
            <div className="relative aspect-[3/4] overflow-hidden">
              <img
                src="https://images.pexels.com/photos/6069552/pexels-photo-6069552.jpeg?auto=compress&cs=tinysrgb&w=900&q=80"
                alt="Himalayan artisan crafting cashmere"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 border border-cashmere/30 -z-10" />
          </div>

          <div className="lg:py-8">
            <p className="font-sans text-[10px] tracking-widest3 uppercase text-cashmere mb-6">Our Story</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.25rem] font-light text-cream-100 leading-tight mb-8">
              Three Decades of
              <br />
              <em className="italic">Himalayan Craft</em>
            </h2>
            <div className="w-12 h-px bg-cashmere mb-10" />

            <div className="space-y-6 font-sans text-sm font-light text-stone-400 leading-[1.85] tracking-wide">
              <p>
                Founded in 1993 in Kathmandu, Nepal, Exclusive Crafts was born from a passion for preserving the ancient tradition of Himalayan cashmere weaving. What began as a small family workshop has grown into a trusted wholesale partner for luxury retailers across the globe.
              </p>
              <p>
                Every piece we produce is handmade by skilled artisans who have inherited their craft across generations. We source only the finest Grade-A cashmere fibers from the high-altitude regions of the Himalayas, where the extreme climate produces wool of unparalleled softness and warmth.
              </p>
              <p>
                Today, our workshop employs over 50 artisans and ships to boutiques, department stores, and fashion brands in Europe, the United States, Japan, and beyond. We take immense pride in the authenticity, sustainability, and artisanal quality behind every product we make.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-8 border-t border-stone-700 pt-10">
              {[
                { stat: '1993', label: 'Founded' },
                { stat: '50+', label: 'Artisans' },
                { stat: '30+', label: 'Countries' },
              ].map(({ stat, label }) => (
                <div key={label}>
                  <p className="font-serif text-3xl md:text-4xl font-light text-cream-200 mb-1">{stat}</p>
                  <p className="font-sans text-[10px] tracking-widest uppercase text-stone-500">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
