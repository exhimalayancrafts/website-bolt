import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import MediaPlaceholder from '../components/MediaPlaceholder';

export default function Products() {
  const categories = [
    {
      name: 'Shawls',
      description: 'Luxurious, versatile shawls in cashmere and natural blends.',
      button: 'View Collection',
      color: 'terracotta',
    },
    {
      name: 'Scarves',
      description: 'Hand-woven scarves with traditional and contemporary designs.',
      button: 'Explore Designs',
      color: 'himalaya',
    },
    {
      name: 'Yarn & Raw Fiber',
      description: 'Premium yarns and raw fibers for designers and craftspeople.',
      button: 'Fiber Inquiries',
      color: 'spice',
    },
    {
      name: 'Custom & Wholesale',
      description: 'Bespoke collections and wholesale opportunities for brands.',
      button: 'Request Information',
      color: 'himalaya',
    },
  ];

  const colorMap: Record<string, { bg: string; border: string; text: string; badge: string }> = {
    terracotta: {
      bg: 'bg-terracotta-50',
      border: 'border-terracotta-200',
      text: 'text-terracotta-600',
      badge: 'bg-terracotta-100 text-terracotta-700',
    },
    himalaya: {
      bg: 'bg-himalaya-50',
      border: 'border-himalaya-200',
      text: 'text-himalaya-600',
      badge: 'bg-himalaya-100 text-himalaya-700',
    },
    spice: {
      bg: 'bg-spice-50',
      border: 'border-spice-200',
      text: 'text-spice-600',
      badge: 'bg-spice-100 text-spice-700',
    },
  };

  return (
    <div>
      {/* Page Header */}
      <section className="relative bg-gradient-to-br from-terracotta-50 via-cream-100 to-himalaya-50 py-20 px-6 lg:px-12 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-72 h-72 bg-terracotta-300 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <p className="font-sans text-xs tracking-widest uppercase text-terracotta-500 mb-4">
            Handcrafted Excellence
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-semibold text-sand-900 mb-6">
            Collections & Products
          </h1>
          <p className="font-sans text-lg text-sand-600 max-w-2xl">
            Explore our carefully curated collections of Himalayan textiles, from luxury scarves to wholesale fiber.
          </p>
        </div>
      </section>

      {/* Product Categories */}
      <section className="bg-white py-28 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {categories.map((category) => {
              const colors = colorMap[category.color];
              return (
                <div key={category.name} className={`${colors.bg} ${colors.border} border-2 rounded-2xl overflow-hidden transition-all hover:shadow-xl`}>
                  <MediaPlaceholder
                    type="image"
                    label={`${category.name} collection`}
                    aspect="aspect-[4/3]"
                    className="rounded-none"
                  />
                  <div className="p-8">
                    <h2 className="font-serif text-3xl font-semibold text-sand-900 mb-3">
                      {category.name}
                    </h2>
                    <p className="font-sans text-sm text-sand-600 mb-6 leading-relaxed">
                      {category.description}
                    </p>
                    <Link
                      to="/contact"
                      className={`inline-flex items-center gap-2 font-sans text-xs tracking-widest uppercase ${colors.text} hover:gap-3 transition-all`}
                    >
                      {category.button}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="bg-cream-100 py-28 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-sans text-xs tracking-widest uppercase text-himalaya-600 mb-4">
              Signature Lines
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-sand-900 mb-6">
              Featured Collections
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-terracotta-400 to-himalaya-400 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Heritage Cashmere', fiber: 'Pure Cashmere', price: 'From $400', color: 'terracotta' },
              { name: 'Himalayan Blend', fiber: 'Cashmere & Yak Wool', price: 'From $250', color: 'himalaya' },
              { name: 'Sustainable Series', fiber: 'Mixed Natural Fibers', price: 'From $180', color: 'himalaya' },
              { name: 'Artisan Premium', fiber: 'Hand-Dyed Cashmere', price: 'From $500', color: 'spice' },
              { name: 'Plant-Based Future', fiber: 'Allo & Himalayan Nettle', price: 'From $150', color: 'himalaya' },
              { name: 'Classic Wool', fiber: 'Himalayan Sheep Wool', price: 'From $120', color: 'spice' },
            ].map((collection) => {
              const colors = colorMap[collection.color];
              return (
                <div key={collection.name} className={`bg-white p-8 rounded-2xl border-2 ${colors.border} hover:shadow-xl transition-all`}>
                  <span className={`inline-block font-sans text-xs tracking-widest uppercase ${colors.badge} px-3 py-1 rounded-full mb-4`}>
                    {collection.fiber}
                  </span>
                  <h3 className="font-serif text-xl font-semibold text-sand-900 mb-3">
                    {collection.name}
                  </h3>
                  <p className="font-sans text-sm text-sand-500">
                    {collection.price}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Video Showcase */}
      <section className="bg-white py-20 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-sans text-xs tracking-widest uppercase text-spice-500 mb-4">
              See Our Work
            </p>
            <h2 className="font-serif text-4xl font-semibold text-sand-900">
              Craftsmanship in Motion
            </h2>
          </div>
          <MediaPlaceholder
            type="video"
            label="Product showcase: From fiber to finished textile"
            aspect="aspect-video"
            className="rounded-2xl shadow-xl"
          />
        </div>
      </section>

      {/* Wholesale */}
      <section className="bg-gradient-to-r from-sand-800 to-sand-900 py-28 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-semibold text-white mb-6">
              Wholesale & Custom Orders
            </h2>
            <p className="font-sans text-lg text-sand-300 mb-8">
              We offer bulk orders, custom collections, and private label manufacturing for brands and retailers worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              { text: 'Minimum order quantities available', color: 'text-terracotta-300' },
              { text: 'Custom fiber blends and designs', color: 'text-himalaya-300' },
              { text: 'Private label capabilities', color: 'text-spice-300' },
              { text: 'Competitive wholesale pricing', color: 'text-terracotta-300' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <span className={`${item.color} text-lg`}>✦</span>
                <span className="font-sans text-sm text-sand-200">{item.text}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 font-sans text-sm tracking-widest uppercase bg-terracotta-500 text-white px-8 py-4 rounded-lg hover:bg-terracotta-400 transition-colors shadow-lg"
            >
              Request Information
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
