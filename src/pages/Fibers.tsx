import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import MediaPlaceholder from '../components/MediaPlaceholder';

export default function Fibers() {
  const [expandedFiber, setExpandedFiber] = useState<string | null>(null);

  const fibers = [
    {
      id: 'cashmere',
      name: 'Cashmere',
      color: 'terracotta',
      button: 'Explore Cashmere',
      details: {
        subtitle: 'The Luxury of the Himalayas',
        description: 'Our cashmere comes from high-altitude Himalayan goats, sourced ethically from sustainable farms. Each fiber is hand-selected for softness and quality.',
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
      color: 'himalaya',
      button: 'Learn About Yak Wool',
      details: {
        subtitle: 'Ancient Fiber, Sustainable Future',
        description: 'Yak wool has been used for centuries in Himalayan textiles, offering warmth without the environmental impact of synthetic alternatives.',
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
      color: 'spice',
      button: 'Discover Wool Craftsmanship',
      details: {
        subtitle: 'Durability Meets Tradition',
        description: 'Our sheep wool comes from local Himalayan shepherds, processed through traditional weaving techniques passed down through generations.',
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
      color: 'himalaya',
      button: 'Explore Plant-Based Fibers',
      details: {
        subtitle: 'The Future of Natural Fibers',
        description: 'Himalayan nettle fiber represents an emerging sustainable alternative, requiring minimal input and water while supporting rural communities.',
        highlights: [
          'Natural and plant-based fiber source',
          'Minimal environmental footprint',
          'Climate-resilient plant species',
          'Pioneering sustainable production',
        ],
      },
    },
  ];

  const colorMap: Record<string, { bg: string; border: string; text: string; hoverBg: string; badge: string; highlight: string }> = {
    terracotta: {
      bg: 'bg-terracotta-50',
      border: 'border-terracotta-300',
      text: 'text-terracotta-600',
      hoverBg: 'hover:bg-terracotta-100',
      badge: 'bg-terracotta-100 text-terracotta-700',
      highlight: 'text-terracotta-500',
    },
    himalaya: {
      bg: 'bg-himalaya-50',
      border: 'border-himalaya-300',
      text: 'text-himalaya-600',
      hoverBg: 'hover:bg-himalaya-100',
      badge: 'bg-himalaya-100 text-himalaya-700',
      highlight: 'text-himalaya-500',
    },
    spice: {
      bg: 'bg-spice-50',
      border: 'border-spice-300',
      text: 'text-spice-600',
      hoverBg: 'hover:bg-spice-100',
      badge: 'bg-spice-100 text-spice-700',
      highlight: 'text-spice-500',
    },
  };

  return (
    <div>
      {/* Page Header */}
      <section className="relative bg-gradient-to-br from-himalaya-50 via-cream-100 to-terracotta-50 py-20 px-6 lg:px-12 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-72 h-72 bg-himalaya-300 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <p className="font-sans text-xs tracking-widest uppercase text-himalaya-600 mb-4">
            Natural Materials
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-semibold text-sand-900 mb-6">
            Our Fibers
          </h1>
          <p className="font-sans text-lg text-sand-600 max-w-2xl">
            Discover the premium natural fibers we work with, each selected for sustainability, quality, and heritage.
          </p>
        </div>
      </section>

      {/* Fibers Grid */}
      <section className="bg-white py-28 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto space-y-20">
          {fibers.map((fiber) => {
            const colors = colorMap[fiber.color];
            return (
              <div key={fiber.id} className={`rounded-3xl ${colors.bg} ${colors.border} border-2 p-8 md:p-12 transition-all duration-300`}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <span className={`inline-block font-sans text-xs tracking-widest uppercase ${colors.badge} px-4 py-1.5 rounded-full mb-6`}>
                      {fiber.details.subtitle}
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl font-semibold text-sand-900 mb-6">
                      {fiber.name}
                    </h2>

                    {expandedFiber === fiber.id && (
                      <div className="mb-6 space-y-4 animate-in">
                        <p className="font-sans text-base text-sand-600 leading-relaxed">
                          {fiber.details.description}
                        </p>
                        <ul className="space-y-3">
                          {fiber.details.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <span className={`${colors.highlight} text-lg leading-none mt-0.5`}>✦</span>
                              <span className="font-sans text-sm text-sand-700">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <button
                      onClick={() => setExpandedFiber(expandedFiber === fiber.id ? null : fiber.id)}
                      className={`inline-flex items-center gap-2 font-sans text-xs tracking-widest uppercase ${colors.text} hover:gap-3 transition-all`}
                    >
                      {fiber.button}
                      <ChevronRight className={`w-4 h-4 transition-transform ${expandedFiber === fiber.id ? 'rotate-90' : ''}`} />
                    </button>
                  </div>

                  <MediaPlaceholder
                    type="image"
                    label={`${fiber.name} — sourcing & production`}
                    aspect="aspect-[4/3]"
                    className="rounded-2xl"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Video Section */}
      <section className="bg-cream-100 py-20 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-sans text-xs tracking-widest uppercase text-terracotta-500 mb-4">
              See It In Action
            </p>
            <h2 className="font-serif text-4xl font-semibold text-sand-900">
              From Fiber to Fabric
            </h2>
          </div>
          <MediaPlaceholder
            type="video"
            label="Documentary: From fiber to finished product"
            aspect="aspect-video"
            className="rounded-2xl shadow-xl"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-himalaya-800 to-himalaya-900 py-20 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl font-semibold text-white mb-6">
            Ready to Partner With Us?
          </h2>
          <p className="font-sans text-lg text-himalaya-200 mb-8">
            Whether you're a designer, manufacturer, or retailer, we offer premium fibers sourced with integrity.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 font-sans text-sm tracking-widest uppercase bg-terracotta-500 text-white px-8 py-4 rounded-lg hover:bg-terracotta-400 transition-colors shadow-lg"
          >
            Get In Touch
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
