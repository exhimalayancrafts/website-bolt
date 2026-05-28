import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function Fibers() {
  const [expandedFiber, setExpandedFiber] = useState<string | null>(null);

  const fibers = [
    {
      id: 'cashmere',
      name: 'Cashmere',
      image: 'https://images.pexels.com/photos/5081971/pexels-photo-5081971.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
      button: 'Explore Cashmere',
      details: {
        subtitle: 'The Luxury of the Himalayas',
        description: 'Our cashmere comes from high-altitude Himalayan goats, sourced ethically from sustainable farms.',
        highlights: [
          'Exceptional softness and fineness',
          'Superior insulation and warmth',
          'Responsibly sourced from heritage farms',
          'Farm story and artisan partnerships',
        ],
      },
    },
    {
      id: 'yak',
      name: 'Yak Wool',
      image: 'https://images.pexels.com/photos/3838622/pexels-photo-3838622.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
      button: 'Learn About Yak Wool',
      details: {
        subtitle: 'Ancient Fiber, Sustainable Future',
        description: 'Yak wool has been used for centuries in Himalayan textiles, offering warmth without the environmental impact.',
        highlights: [
          'Naturally warm and durable',
          'Himalayan-sourced and ethical',
          'Supports local herding communities',
          'Climate-appropriate fiber production',
        ],
      },
    },
    {
      id: 'sheep',
      name: 'Sheep Wool',
      image: 'https://images.pexels.com/photos/6069554/pexels-photo-6069554.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
      button: 'Discover Wool Craftsmanship',
      details: {
        subtitle: 'Durability Meets Tradition',
        description: 'Our sheep wool comes from local Himalayan shepherds, processed through traditional weaving techniques.',
        highlights: [
          'Exceptional durability and longevity',
          'Traditional weaving methods',
          'Local artisan production',
          'Sustainable land use practices',
        ],
      },
    },
    {
      id: 'allo',
      name: 'Allo / Himalayan Nettle',
      image: 'https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
      button: 'Explore Plant-Based Fibers',
      details: {
        subtitle: 'The Future of Natural Fibers',
        description: 'Himalayan nettle fiber represents an emerging sustainable alternative, requiring minimal input and water.',
        highlights: [
          'Natural and plant-based fiber source',
          'Minimal environmental footprint',
          'Climate-resilient plant species',
          'Pioneering sustainable production',
        ],
      },
    },
  ];

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-stone-50 to-stone-100 py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-serif text-5xl md:text-6xl font-light text-stone-900 mb-6">
            Our Fibers
          </h1>
          <p className="font-sans text-lg text-stone-600 max-w-2xl">
            Discover the premium natural fibers we work with, each selected for sustainability, quality, and heritage.
          </p>
        </div>
      </section>

      {/* Fibers Grid */}
      <section className="py-28 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {fibers.map((fiber) => (
              <div key={fiber.id} className="group">
                <div className="relative overflow-hidden aspect-[4/5] mb-6 rounded-lg shadow-lg">
                  <img
                    src={fiber.image}
                    alt={fiber.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h2 className="font-serif text-3xl font-light text-stone-900 mb-2">
                  {fiber.name}
                </h2>
                <p className="font-sans text-sm text-stone-500 mb-6">
                  {fiber.details.subtitle}
                </p>

                {expandedFiber === fiber.id && (
                  <div className="mb-6 space-y-4">
                    <p className="font-sans text-sm text-stone-600 leading-relaxed">
                      {fiber.details.description}
                    </p>
                    <ul className="space-y-2">
                      {fiber.details.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-stone-900 mt-1">•</span>
                          <span className="font-sans text-sm text-stone-600">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <button
                  onClick={() => setExpandedFiber(expandedFiber === fiber.id ? null : fiber.id)}
                  className="inline-flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-stone-900 hover:gap-3 transition-all group/btn"
                >
                  {fiber.button}
                  <ChevronRight className={`w-4 h-4 transition-transform ${expandedFiber === fiber.id ? 'rotate-90' : ''}`} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-stone-900 text-white py-20 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl font-light mb-6">
            Ready to Partner With Us?
          </h2>
          <p className="font-sans text-lg text-stone-300 mb-8">
            Whether you're a designer, manufacturer, or retailer, we offer premium fibers sourced with integrity.
          </p>
          <Link
            to="/contact"
            className="inline-block font-sans text-xs tracking-widest uppercase border-2 border-white text-white px-8 py-4 hover:bg-white hover:text-stone-900 transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
