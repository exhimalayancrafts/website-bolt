import SiteImage from '../components/SiteImage';

export default function Products() {
  const collections = [
    { name: 'Scarves', description: 'Lightweight scarves in cashmere and blended fibers, suited to transitional seasons and everyday wear.', fibers: 'Cashmere, Cashmere-Silk blend, Yak-Sheep blend' },
    { name: 'Shawls', description: 'Larger-format pieces providing warmth and versatility, from fine cashmere to substantial wool weaves.', fibers: 'Pure Cashmere, Yak Wool, Sheep Wool' },
    { name: 'Throws', description: 'Oversized blankets and throws for home use, showcasing the full character of natural fibers.', fibers: 'Heavy Cashmere, Yak-Sheep blend, Wool' },
    { name: 'Woven Textiles', description: 'Fabric by the yard for designers and manufacturers, available in various weights and compositions.', fibers: 'All fiber types, custom blends available' },
    { name: 'Wool Accessories', description: 'Smaller items including hats, gloves, and socks in durable wool constructions.', fibers: 'Sheep Wool, Yak Wool' },
    { name: 'Allo Fiber Products', description: 'Emerging products using Himalayan nettle — bags, home textiles, and experimental pieces.', fibers: 'Pure Allo, Allo-Cotton blend' },
  ];

  return (
    <div className="bg-stone-50">
      {/* Header */}
      <section className="py-16 px-6 lg:px-12 border-b border-stone-200">
        <div className="max-w-6xl mx-auto">
          <p className="font-sans text-[10px] tracking-widest uppercase text-stone-500 mb-4">Collections</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-stone-900 mb-5 leading-tight">Products</h1>
          <p className="font-sans text-base text-stone-600 max-w-2xl leading-relaxed">
            Finished textiles crafted from Himalayan fibers — presented here as objects of material and craft.
          </p>
        </div>
      </section>

      {/* Featured Editorial Spread */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
            <div className="lg:col-span-7">
              <SiteImage page="products" slot="featured-spread" fallbackLabel="Cashmere shawl editorial" aspect="aspect-[4/3]" className="rounded-sm" />
            </div>
            <div className="lg:col-span-5">
              <SiteImage page="products" slot="featured-detail" fallbackLabel="Weave pattern detail" aspect="aspect-[4/5]" className="rounded-sm" />
            </div>
          </div>
          <div className="max-w-2xl">
            <h2 className="font-serif text-xl md:text-2xl font-light text-stone-900 mb-3">Cashmere Shawls</h2>
            <p className="font-sans text-base text-stone-600 leading-relaxed">
              Fine cashmere shawls woven from high-altitude fiber. Each piece carries the softness and warmth of its origin, finished with hand-twisted fringes and careful quality control.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 px-6 lg:px-12 bg-stone-100">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <p className="font-sans text-[10px] tracking-widest uppercase text-stone-500 mb-4">Categories</p>
            <h2 className="font-serif text-2xl md:text-3xl font-light text-stone-900">By form and function</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-300">
            {collections.map((c) => (
              <div key={c.name} className="bg-stone-50 p-8 min-h-[220px]">
                <h3 className="font-serif text-lg font-medium text-stone-900 mb-2">{c.name}</h3>
                <p className="font-sans text-base text-stone-600 leading-relaxed mb-3">{c.description}</p>
                <p className="font-sans text-xs text-stone-400">{c.fibers}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Texture Section */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <SiteImage page="products" slot="texture-woven" fallbackLabel="Woven textile detail" aspect="aspect-[3/4]" className="rounded-sm" />
            <div className="flex flex-col justify-center">
              <p className="font-sans text-[10px] tracking-widest uppercase text-stone-500 mb-5">Texture</p>
              <h2 className="font-serif text-2xl md:text-3xl font-light text-stone-900 mb-6 leading-snug">The feel of natural fiber</h2>
              <p className="font-sans text-base text-stone-600 leading-relaxed">
                Unlike synthetic alternatives, natural fibers develop character over time. They soften with use, adapt to the wearer, and carry the memory of their origin. Our textiles are designed to age gracefully.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Full-bleed */}
      <section className="py-20 px-6 lg:px-12 bg-stone-900">
        <div className="max-w-6xl mx-auto">
          <SiteImage page="products" slot="fullbleed" fallbackLabel="Products still life" aspect="aspect-[21/9]" className="rounded-sm opacity-60" />
        </div>
      </section>

      {/* Lookbook */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <SiteImage page="products" slot="lookbook-1" fallbackLabel="Scarf — lookbook" aspect="aspect-[3/4]" className="rounded-sm" />
            <SiteImage page="products" slot="lookbook-2" fallbackLabel="Throw — lookbook" aspect="aspect-[3/4]" className="rounded-sm" />
            <SiteImage page="products" slot="lookbook-3" fallbackLabel="Allo bag — lookbook" aspect="aspect-[3/4]" className="rounded-sm" />
          </div>
        </div>
      </section>

      {/* Inquiry */}
      <section className="py-16 px-6 lg:px-12 bg-stone-100">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-sans text-base text-stone-600 leading-relaxed">
            Products are available through wholesale partnership and custom order. For specifications, samples, and wholesale terms, please get in touch.
          </p>
          <a href="/contact" className="inline-block font-sans text-sm text-stone-700 hover:text-stone-900 mt-6 transition-colors">
            Make an inquiry →
          </a>
        </div>
      </section>
    </div>
  );
}
