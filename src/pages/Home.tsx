import { Link } from 'react-router-dom';
import MediaPlaceholder from '../components/MediaPlaceholder';

export default function Home() {
  return (
    <div className="bg-stone-50">
      {/* Hero - Immersive Opening */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Full-bleed hero image placeholder */}
        <div className="absolute inset-0">
          <MediaPlaceholder
            type="image"
            label="Himalayan landscape — valleys, grazing lands, morning light"
            aspect="aspect-none"
            className="h-full w-full rounded-none border-0"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/40 via-stone-900/20 to-stone-900/60" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <p className="font-sans text-[10px] tracking-widest uppercase text-stone-200 mb-6">
            Himalayan Textiles
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-white mb-8 leading-tight tracking-tight">
            Where Mountains<br />Meet Fibers
          </h1>
          <p className="font-sans text-sm md:text-base text-stone-200 max-w-xl mx-auto leading-relaxed">
            An ecosystem of responsible fiber production rooted in the landscapes, communities, and traditions of the Himalayas.
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-stone-300 to-transparent opacity-60" />
        </div>
      </section>

      {/* Introduction - Editorial Opening */}
      <section className="py-32 px-6 lg:px-12 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <MediaPlaceholder
                type="image"
                label="Artisan hands with raw cashmere fiber"
                aspect="aspect-[4/5]"
                className="rounded-sm"
              />
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <p className="font-sans text-[10px] tracking-widest uppercase text-stone-500 mb-8">
                The Work
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-light text-stone-900 mb-8 leading-snug">
                We work with nature to create textiles that carry the story of their origin.
              </h2>
              <p className="font-sans text-sm text-stone-600 leading-relaxed mb-6">
                Exclusive Crafts is a Himalayan fiber company working with cashmere, yak wool, sheep wool, and emerging plant-based fibers. We maintain direct relationships with herders, oversee our own manufacturing, and produce textiles that reflect the landscapes they come from.
              </p>
              <p className="font-sans text-sm text-stone-600 leading-relaxed">
                Our model is built on traceability, quality, and long-term relationships with the people who raise animals and craft fibers in some of the world's most challenging environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Materials Overview - Quiet Grid */}
      <section className="py-24 px-6 lg:px-12 bg-stone-100">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="font-sans text-[10px] tracking-widest uppercase text-stone-500 mb-4">
              Materials
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-stone-900 leading-snug">
              Four fibers. One origin.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-stone-300">
            {[
              { name: 'Cashmere', origin: 'High-altitude goats', link: '/fibers' },
              { name: 'Yak Wool', origin: 'Himalayan plateaus', link: '/fibers' },
              { name: 'Sheep Wool', origin: 'Mountain valleys', link: '/fibers' },
              { name: 'Allo', origin: 'Wild Himalayan nettle', link: '/fibers' },
            ].map((fiber) => (
              <Link
                key={fiber.name}
                to={fiber.link}
                className="group bg-stone-50 p-10 hover:bg-stone-100 transition-colors"
              >
                <h3 className="font-serif text-xl font-light text-stone-900 mb-2 group-hover:text-stone-700 transition-colors">
                  {fiber.name}
                </h3>
                <p className="font-sans text-xs text-stone-500">
                  {fiber.origin}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process Narrative - Immersive Storytelling */}
      <section className="py-32 px-6 lg:px-12 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <p className="font-sans text-[10px] tracking-widest uppercase text-stone-500 mb-8 lg:sticky lg:top-32">
                From Land to Fiber
              </p>
            </div>
            <div className="lg:col-span-7">
              <MediaPlaceholder
                type="image"
                label="Herders with goats in mountain grazing lands"
                aspect="aspect-[16/10]"
                className="rounded-sm mb-8"
              />
              <p className="font-sans text-sm text-stone-600 leading-relaxed mb-8">
                Fibers begin in the mountains — in the high plateaus where cashmere goats grow their down coats against sub-zero winters, in the valleys where sheep graze on natural pasture, in the remote regions where yaks have adapted to extremes for millennia.
              </p>
              <p className="font-sans text-sm text-stone-600 leading-relaxed">
                We source directly from these environments, maintaining relationships with herding families and communities who have worked these lands for generations. The fiber carries the character of its origin — the nutrition, climate, and care that shaped it.
              </p>
              <Link
                to="/sourcing"
                className="inline-block font-sans text-xs tracking-wide text-stone-700 hover:text-stone-900 mt-8 transition-colors"
              >
                View sourcing process →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Preview */}
      <section className="py-32 px-6 lg:px-12 bg-stone-900 text-stone-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <MediaPlaceholder
                type="image"
                label="Weaving workshop — looms and artisans at work"
                aspect="aspect-[4/3]"
                className="rounded-sm opacity-80"
              />
            </div>
            <div className="lg:col-span-6 order-1 lg:order-2">
              <p className="font-sans text-[10px] tracking-widest uppercase text-stone-400 mb-8">
                Making
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-light text-stone-100 mb-8 leading-snug">
                Crafted in our own workshops.
              </h2>
              <p className="font-sans text-sm text-stone-300 leading-relaxed mb-8">
                We own and operate our manufacturing facilities in Kathmandu, combining traditional handwork with quality-controlled modern processes. Every stage — from fiber sorting to finishing — happens under our direct oversight.
              </p>
              <Link
                to="/manufacturing"
                className="inline-block font-sans text-xs tracking-wide text-stone-300 hover:text-stone-100 transition-colors"
              >
                See manufacturing →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Community Hint */}
      <section className="py-32 px-6 lg:px-12 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <MediaPlaceholder
              type="image"
              label="Artisan portrait — documentary style, natural light"
              aspect="aspect-[3/4]"
              className="rounded-sm"
            />
            <div className="flex flex-col justify-center">
              <p className="font-sans text-[10px] tracking-widest uppercase text-stone-500 mb-8">
                People
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-light text-stone-900 mb-8 leading-snug">
                Made by hands that know the work.
              </h2>
              <p className="font-sans text-sm text-stone-600 leading-relaxed mb-8">
                Our artisan community spans generations — women and men who learned fiber work from their parents and are now passing it to their children. We invest in their skills, provide fair conditions, and build long-term livelihoods.
              </p>
              <Link
                to="/community"
                className="inline-block font-sans text-xs tracking-wide text-stone-700 hover:text-stone-900 transition-colors"
              >
                Meet the community →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quiet Closing */}
      <section className="py-24 px-6 lg:px-12 bg-stone-100">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-sans text-sm text-stone-600 leading-relaxed">
            Exclusive Crafts works at the intersection of landscape, fiber, and human skill — producing textiles that reflect the integrity of their origin.
          </p>
        </div>
      </section>
    </div>
  );
}
