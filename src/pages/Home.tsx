import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  const processCards = [
    {
      title: 'Ethical Sourcing',
      description: 'Responsibly sourced fibers from sustainable farms and artisan communities.',
      button: 'Learn About Sourcing',
      link: '/fibers',
    },
    {
      title: 'Own Manufacturing',
      description: 'Complete control over production ensures quality and fair practices.',
      button: 'Explore Production',
      link: '/about',
    },
    {
      title: 'Artisan Communities',
      description: 'Direct partnerships with skilled craftspeople across the Himalayas.',
      button: 'Meet the Artisans',
      link: '/impact',
    },
    {
      title: 'Sustainable Fibers',
      description: 'Premium natural fibers with minimal environmental impact.',
      button: 'Discover Natural Fibers',
      link: '/fibers',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-stone-50 to-stone-100 overflow-hidden pt-20">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-10 w-96 h-96 bg-amber-200 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-blue-100 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-32 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 z-10">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-stone-900 mb-6 leading-tight">
              Ethical Himalayan Fibers Crafted with Heritage and Purpose
            </h1>
            <p className="font-sans text-lg text-stone-600 mb-12 leading-relaxed max-w-2xl">
              Exclusive Crafts works with responsibly sourced cashmere, yak wool, sheep wool, and emerging Himalayan plant-based fibers through artisan-centered and sustainable production.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                to="/fibers"
                className="group inline-flex items-center justify-center gap-3 font-sans text-sm tracking-widest uppercase bg-stone-900 text-white px-8 py-4 hover:bg-stone-800 transition-colors"
              >
                Explore Fibers
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/about"
                className="group inline-flex items-center justify-center gap-3 font-sans text-sm tracking-widest uppercase border-2 border-stone-900 text-stone-900 px-8 py-4 hover:bg-stone-900 hover:text-white transition-colors"
              >
                Our Story
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/products"
                className="group inline-flex items-center justify-center gap-3 font-sans text-sm tracking-widest uppercase border-2 border-stone-900 text-stone-900 px-8 py-4 hover:bg-stone-900 hover:text-white transition-colors"
              >
                View Products
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
          <div className="flex-1 hidden lg:block">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3945657/pexels-photo-3945657.jpeg?auto=compress&cs=tinysrgb&w=600&q=80"
                alt="Himalayan artisan crafting fibers"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* From Source to Craftsmanship Section */}
      <section className="bg-white py-28 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-stone-900 mb-6">
              From Source to Craftsmanship
            </h2>
            <div className="w-16 h-px bg-stone-900 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processCards.map((card) => (
              <div
                key={card.title}
                className="group bg-stone-50 p-8 rounded-lg border border-stone-200 hover:border-stone-900 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="font-serif text-2xl font-light text-stone-900 mb-4">
                  {card.title}
                </h3>
                <p className="font-sans text-sm text-stone-600 mb-8 leading-relaxed">
                  {card.description}
                </p>
                <Link
                  to={card.link}
                  className="inline-flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-stone-900 hover:gap-3 transition-all"
                >
                  {card.button}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
