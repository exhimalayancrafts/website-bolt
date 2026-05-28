import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Products() {
  const categories = [
    {
      name: 'Shawls',
      image: 'https://images.pexels.com/photos/3945657/pexels-photo-3945657.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
      description: 'Luxurious, versatile shawls in cashmere and natural blends.',
      button: 'View Collection',
    },
    {
      name: 'Scarves',
      image: 'https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
      description: 'Hand-woven scarves with traditional and contemporary designs.',
      button: 'Explore Designs',
    },
    {
      name: 'Yarn & Raw Fiber',
      image: 'https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
      description: 'Premium yarns and raw fibers for designers and craftspeople.',
      button: 'Fiber Inquiries',
    },
    {
      name: 'Custom & Wholesale',
      image: 'https://images.pexels.com/photos/3857857/pexels-photo-3857857.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
      description: 'Bespoke collections and wholesale opportunities for brands.',
      button: 'Request Information',
    },
  ];

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-stone-50 to-stone-100 py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-serif text-5xl md:text-6xl font-light text-stone-900 mb-6">
            Collections & Products
          </h1>
          <p className="font-sans text-lg text-stone-600 max-w-2xl">
            Explore our carefully curated collections of Himalayan textiles, from luxury scarves to wholesale fiber.
          </p>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-28 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {categories.map((category) => (
              <div key={category.name} className="group">
                <div className="relative overflow-hidden aspect-[4/5] mb-6 rounded-lg shadow-lg">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/20 transition-all duration-500" />
                </div>
                <h2 className="font-serif text-3xl font-light text-stone-900 mb-2">
                  {category.name}
                </h2>
                <p className="font-sans text-sm text-stone-600 mb-6 leading-relaxed">
                  {category.description}
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-stone-900 hover:gap-3 transition-all group/btn"
                >
                  {category.button}
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="bg-stone-50 py-28 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-light text-stone-900 mb-6">
              Featured Collections
            </h2>
            <p className="font-sans text-lg text-stone-600 max-w-2xl mx-auto">
              Discover our signature collections, each telling a story of heritage and craftsmanship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Heritage Cashmere',
                fiber: 'Pure Cashmere',
                price: 'From $400',
              },
              {
                name: 'Himalayan Blend',
                fiber: 'Cashmere & Yak Wool',
                price: 'From $250',
              },
              {
                name: 'Sustainable Series',
                fiber: 'Mixed Natural Fibers',
                price: 'From $180',
              },
              {
                name: 'Artisan Premium',
                fiber: 'Hand-Dyed Cashmere',
                price: 'From $500',
              },
              {
                name: 'Plant-Based Future',
                fiber: 'Allo & Himalayan Nettle',
                price: 'From $150',
              },
              {
                name: 'Classic Wool',
                fiber: 'Himalayan Sheep Wool',
                price: 'From $120',
              },
            ].map((collection, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg border border-stone-200 hover:border-stone-900 hover:shadow-lg transition-all">
                <h3 className="font-serif text-xl font-light text-stone-900 mb-2">
                  {collection.name}
                </h3>
                <p className="font-sans text-sm text-stone-600 mb-4">
                  {collection.fiber}
                </p>
                <p className="font-sans text-sm font-light text-stone-500">
                  {collection.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wholesale Section */}
      <section className="bg-stone-900 text-white py-28 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl font-light mb-6">
            Wholesale & Custom Orders
          </h2>
          <p className="font-sans text-lg text-stone-300 mb-4">
            We offer bulk orders, custom collections, and private label manufacturing for brands and retailers worldwide.
          </p>
          <ul className="inline-flex flex-col items-start gap-3 mb-12 text-left font-sans text-sm text-stone-300 mx-auto">
            <li className="flex items-center gap-2">
              <span className="text-white">✓</span> Minimum order quantities available
            </li>
            <li className="flex items-center gap-2">
              <span className="text-white">✓</span> Custom fiber blends and designs
            </li>
            <li className="flex items-center gap-2">
              <span className="text-white">✓</span> Private label capabilities
            </li>
            <li className="flex items-center gap-2">
              <span className="text-white">✓</span> Competitive wholesale pricing
            </li>
          </ul>
          <Link
            to="/contact"
            className="inline-block font-sans text-xs tracking-widest uppercase border-2 border-white text-white px-8 py-4 hover:bg-white hover:text-stone-900 transition-colors"
          >
            Request Information
          </Link>
        </div>
      </section>
    </div>
  );
}
