const products = [
  {
    name: 'Cashmere Scarves',
    description: 'Lightweight yet warm, hand-woven in traditional and contemporary patterns.',
    image: 'https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    tag: 'Bestseller',
  },
  {
    name: 'Cashmere Sweaters',
    description: 'Classic cuts and modern silhouettes crafted from the finest Himalayan cashmere.',
    image: 'https://images.pexels.com/photos/5081971/pexels-photo-5081971.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    tag: null,
  },
  {
    name: 'Cashmere Blankets',
    description: 'Sumptuous throws that bring warmth and elegance to any living space.',
    image: 'https://images.pexels.com/photos/6585601/pexels-photo-6585601.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    tag: null,
  },
  {
    name: 'Cashmere Beanies',
    description: 'Soft, cozy hats in a range of colors – perfect for cold-weather collections.',
    image: 'https://images.pexels.com/photos/5214136/pexels-photo-5214136.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    tag: null,
  },
  {
    name: 'Cashmere Wraps',
    description: 'Versatile oversized wraps that drape beautifully over any outfit.',
    image: 'https://images.pexels.com/photos/6311387/pexels-photo-6311387.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    tag: 'Popular',
  },
  {
    name: 'Custom Orders',
    description: 'Your design, your colors, your label. We manufacture to your specification.',
    image: 'https://images.pexels.com/photos/3756784/pexels-photo-3756784.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    tag: 'OEM / Private Label',
  },
];

export default function Products() {
  return (
    <section id="products" className="bg-cream-100 py-28 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="font-sans text-[10px] tracking-widest3 uppercase text-cashmere mb-4">Our Products</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-stone-900 mb-6">
            The Collection
          </h2>
          <div className="w-16 h-px bg-cashmere mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.name} className="group cursor-pointer">
              <div className="relative overflow-hidden aspect-[4/5] mb-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/20 transition-all duration-500" />
                {product.tag && (
                  <span className="absolute top-4 left-4 font-sans text-[9px] tracking-widest uppercase bg-cashmere text-stone-900 px-3 py-1.5">
                    {product.tag}
                  </span>
                )}
              </div>
              <h3 className="font-serif text-2xl font-light text-stone-900 mb-2">{product.name}</h3>
              <p className="font-sans text-xs font-light text-stone-500 leading-relaxed tracking-wide">
                {product.description}
              </p>
              <div className="mt-4 flex items-center gap-2 text-cashmere">
                <span className="font-sans text-[10px] tracking-widest uppercase">Inquire</span>
                <div className="w-8 h-px bg-cashmere group-hover:w-14 transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-block font-sans text-xs tracking-widest2 uppercase border border-stone-800 text-stone-800 px-12 py-4 hover:bg-stone-900 hover:text-cream-100 transition-all duration-300"
          >
            Request Catalogue
          </a>
        </div>
      </div>
    </section>
  );
}
