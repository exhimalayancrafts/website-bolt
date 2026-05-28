import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';
import MediaPlaceholder from '../components/MediaPlaceholder';

export default function Home() {
  const processCards = [
    {
      title: 'Ethical Sourcing',
      description: 'Responsibly sourced fibers from sustainable farms and artisan communities.',
      button: 'Learn About Sourcing',
      link: '/fibers',
      icon: '🐑',
      color: 'bg-himalaya-50 border-himalaya-200 hover:border-himalaya-500',
      iconBg: 'bg-himalaya-100 text-himalaya-600',
    },
    {
      title: 'Own Manufacturing',
      description: 'Complete control over production ensures quality and fair practices.',
      button: 'Explore Production',
      link: '/about',
      icon: '🏭',
      color: 'bg-terracotta-50 border-terracotta-200 hover:border-terracotta-500',
      iconBg: 'bg-terracotta-100 text-terracotta-600',
    },
    {
      title: 'Artisan Communities',
      description: 'Direct partnerships with skilled craftspeople across the Himalayas.',
      button: 'Meet the Artisans',
      link: '/impact',
      icon: '🤝',
      color: 'bg-spice-50 border-spice-200 hover:border-spice-500',
      iconBg: 'bg-spice-100 text-spice-600',
    },
    {
      title: 'Sustainable Fibers',
      description: 'Premium natural fibers with minimal environmental impact.',
      button: 'Discover Natural Fibers',
      link: '/fibers',
      icon: '🌿',
      color: 'bg-himalaya-50 border-himalaya-200 hover:border-himalaya-500',
      iconBg: 'bg-himalaya-100 text-himalaya-600',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sand-50 via-cream-100 to-himalaya-50 min-h-[90vh] flex items-center">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-terracotta-300 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-himalaya-200 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-spice-200 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="z-10">
              <div className="inline-flex items-center gap-2 bg-himalaya-100 text-himalaya-700 px-4 py-2 rounded-full text-xs font-sans tracking-widest uppercase mb-8">
                <span className="w-2 h-2 bg-himalaya-500 rounded-full animate-pulse" />
                Ethical Himalayan Fibers
              </div>

              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold text-sand-900 mb-8 leading-tight">
                Crafted with{' '}
                <span className="text-terracotta-500">Heritage</span> and{' '}
                <span className="text-himalaya-600">Purpose</span>
              </h1>

              <p className="font-sans text-lg text-sand-600 mb-12 leading-relaxed max-w-xl">
                Exclusive Crafts works with responsibly sourced cashmere, yak wool, sheep wool, and emerging Himalayan plant-based fibers through artisan-centered and sustainable production.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/fibers"
                  className="group inline-flex items-center justify-center gap-3 font-sans text-sm tracking-widest uppercase bg-terracotta-500 text-white px-8 py-4 rounded-lg hover:bg-terracotta-600 transition-colors shadow-lg shadow-terracotta-500/20"
                >
                  Explore Fibers
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/about"
                  className="group inline-flex items-center justify-center gap-3 font-sans text-sm tracking-widest uppercase border-2 border-himalaya-600 text-himalaya-700 px-8 py-4 rounded-lg hover:bg-himalaya-600 hover:text-white transition-colors"
                >
                  Our Story
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/products"
                  className="group inline-flex items-center justify-center gap-3 font-sans text-sm tracking-widest uppercase border-2 border-sand-400 text-sand-700 px-8 py-4 rounded-lg hover:bg-sand-800 hover:text-white transition-colors"
                >
                  View Products
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="relative">
              {/* Hero image/video placeholder */}
              <MediaPlaceholder
                type="video"
                label="Himalayan artisans and cashmere goats"
                aspect="aspect-[4/5]"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-sand-200">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-terracotta-100 flex items-center justify-center">
                    <Play className="w-5 h-5 text-terracotta-600" />
                  </div>
                  <div>
                    <p className="font-sans text-sm font-medium text-sand-800">Watch Our Story</p>
                    <p className="font-sans text-xs text-sand-500">3 min documentary</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* From Source to Craftsmanship */}
      <section className="bg-white py-28 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="font-sans text-xs tracking-widest uppercase text-terracotta-500 mb-4">
              Our Process
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-sand-900 mb-6">
              From Source to Craftsmanship
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-terracotta-400 to-himalaya-400 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processCards.map((card, idx) => (
              <div
                key={card.title}
                className={`${card.color} p-8 rounded-2xl border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
              >
                <div className={`w-14 h-14 ${card.iconBg} rounded-xl flex items-center justify-center text-2xl mb-6`}>
                  {card.icon}
                </div>
                <h3 className="font-serif text-2xl font-semibold text-sand-900 mb-3">
                  {card.title}
                </h3>
                <p className="font-sans text-sm text-sand-600 mb-8 leading-relaxed">
                  {card.description}
                </p>
                <Link
                  to={card.link}
                  className="inline-flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-terracotta-600 hover:text-terracotta-700 hover:gap-3 transition-all"
                >
                  {card.button}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="bg-cream-100 py-28 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-sans text-xs tracking-widest uppercase text-himalaya-600 mb-4">
              Gallery
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-sand-900 mb-6">
              A Glimpse of Our World
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-himalaya-400 to-spice-400 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <MediaPlaceholder
              type="image"
              label="Artisans at work"
              aspect="aspect-square"
              className="rounded-2xl"
            />
            <MediaPlaceholder
              type="image"
              label="Himalayan landscape"
              aspect="aspect-square"
              className="rounded-2xl"
            />
            <MediaPlaceholder
              type="video"
              label="Production process"
              aspect="aspect-square"
              className="rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-r from-sand-800 to-sand-900 py-20 px-6 lg:px-12">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-terracotta-400 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl font-semibold text-white mb-6">
            Ready to Bring Himalayan Heritage to Your Collection?
          </h2>
          <p className="font-sans text-lg text-sand-300 mb-8">
            Partner with us for ethically sourced, artisan-crafted textiles.
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
