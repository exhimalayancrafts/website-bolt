import { Link } from 'react-router-dom';
import SiteImage from '../components/SiteImage';
import SiteText from '../components/SiteText';
import SiteVideo from '../components/SiteVideo';
import SiteLink from '../components/SiteLink';
import PageMeta from '../components/PageMeta';

export default function Home() {
  return (
    <div className="bg-stone-50">
      <PageMeta
        title="Exclusive Crafts — Himalayan Cashmere & Fine Textiles"
        description="Premium Himalayan fiber company producing cashmere, yak wool, sheep wool, and allo textiles from Kathmandu, Nepal since 1993."
      />
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <SiteImage
            page="home"
            slot="hero"
            fallbackLabel="Himalayan landscape — hero image"
            aspect="aspect-none"
            className="h-full w-full rounded-none border-0"
            imgClassName="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/40 via-stone-900/20 to-stone-900/60" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <p className="font-sans text-[10px] tracking-widest uppercase text-stone-200 mb-5">
            <SiteText page="home" slot="hero-eyebrow" defaultContent="Himalayan Textiles" />
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light text-white mb-6 leading-tight tracking-tight">
            <SiteText page="home" slot="hero-heading" defaultContent={'Where Mountains\nMeet Fibers'} />
          </h1>
          <p className="font-sans text-sm md:text-lg text-stone-200 max-w-xl mx-auto leading-relaxed">
            <SiteText page="home" slot="hero-subtext" defaultContent="An ecosystem of responsible fiber production rooted in the landscapes, communities, and traditions of the Himalayas." />
          </p>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-px h-14 bg-gradient-to-b from-transparent via-stone-300 to-transparent opacity-60" />
        </div>
      </section>

      {/* Introduction */}
      <section className="py-14 px-6 lg:px-12 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <SiteImage
                page="home"
                slot="intro-portrait"
                fallbackLabel="Artisan hands with raw cashmere fiber"
                aspect="aspect-[4/5]"
                className="rounded-sm"
              />
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <p className="font-sans text-[10px] tracking-widest uppercase text-stone-500 mb-5">The Work</p>
              <h2 className="font-serif text-3xl md:text-4xl font-light text-stone-900 mb-6 leading-snug">
                <SiteText page="home" slot="intro-heading" defaultContent="We work with nature to create textiles that carry the story of their origin." />
              </h2>
              <p className="font-sans text-base text-stone-600 leading-relaxed mb-4">
                <SiteText page="home" slot="intro-body-1" defaultContent="Exclusive Crafts is a Himalayan fiber company working with cashmere, yak wool, sheep wool, and emerging plant-based fibers. We maintain direct relationships with herders, oversee our own manufacturing, and produce textiles that reflect the landscapes they come from." />
              </p>
              <p className="font-sans text-base text-stone-600 leading-relaxed">
                <SiteText page="home" slot="intro-body-2" defaultContent="Our model is built on traceability, quality, and long-term relationships with the people who raise animals and craft fibers in some of the world's most challenging environments." />
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Materials Overview */}
      <section className="py-16 px-6 lg:px-12 bg-stone-100">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <p className="font-sans text-[10px] tracking-widest uppercase text-stone-500 mb-3">Materials</p>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-stone-900 leading-snug">Four fibers. One origin.</h2>
          </div>
          <div className="grid grid-cols-2 gap-px bg-stone-300">
            {[
              { name: 'Cashmere', origin: 'High-altitude goats', link: '/fibers' },
              { name: 'Yak Wool', origin: 'Himalayan plateaus', link: '/fibers' },
              { name: 'Sheep Wool', origin: 'Mountain valleys', link: '/fibers' },
              { name: 'Allo', origin: 'Wild Himalayan nettle', link: '/fibers' },
            ].map((fiber) => (
              <Link key={fiber.name} to={fiber.link} className="group bg-stone-50 p-6 hover:bg-stone-100 transition-colors">
                <h3 className="font-serif text-xl font-light text-stone-900 mb-1 group-hover:text-stone-700 transition-colors">{fiber.name}</h3>
                <p className="font-sans text-sm text-stone-500">{fiber.origin}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process Narrative */}
      <section className="py-20 px-6 lg:px-12 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <p className="font-sans text-[10px] tracking-widest uppercase text-stone-500 mb-4 lg:sticky lg:top-28">
                From Land to Fiber
              </p>
            </div>
            <div className="lg:col-span-7">
              <SiteImage
                page="home"
                slot="process-landscape"
                fallbackLabel="Herders with goats in mountain grazing lands"
                aspect="aspect-[16/10]"
                className="rounded-sm mb-6"
              />
              <p className="font-sans text-base text-stone-600 leading-relaxed mb-5">
                Fibers begin in the mountains — in the high plateaus where cashmere goats grow their down coats against sub-zero winters, in the valleys where sheep graze on natural pasture, in the remote regions where yaks have adapted to extremes for millennia.
              </p>
              <p className="font-sans text-base text-stone-600 leading-relaxed">
                We source directly from these environments, maintaining relationships with herding families and communities who have worked these lands for generations.
              </p>
              <Link to="/sourcing" className="inline-block font-sans text-sm text-stone-700 hover:text-stone-900 mt-6 transition-colors">
                View sourcing process →
              </Link>
            </div>
          </div>
          {/* Optional process reel video */}
          <SiteVideo page="home" slot="process-reel" className="mt-12 max-w-4xl mx-auto" />
        </div>
      </section>

      {/* Manufacturing Preview */}
      <section className="py-20 px-6 lg:px-12 bg-stone-900 text-stone-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <SiteImage
                page="home"
                slot="manufacturing-workshop"
                fallbackLabel="Weaving workshop — looms and artisans"
                aspect="aspect-[4/3]"
                className="rounded-sm opacity-80"
              />
            </div>
            <div className="lg:col-span-6 order-1 lg:order-2">
              <p className="font-sans text-[10px] tracking-widest uppercase text-stone-400 mb-5">Making</p>
              <h2 className="font-serif text-3xl md:text-4xl font-light text-stone-100 mb-6 leading-snug">
                Crafted in our own workshops.
              </h2>
              <p className="font-sans text-base text-stone-300 leading-relaxed mb-6">
                We own and operate our manufacturing facilities in Kathmandu, combining traditional handwork with quality-controlled modern processes. Every stage — from fiber sorting to finishing — happens under our direct oversight.
              </p>
              <Link to="/manufacturing" className="inline-block font-sans text-sm text-stone-300 hover:text-stone-100 transition-colors">
                See manufacturing →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Community Hint */}
      <section className="py-20 px-6 lg:px-12 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <SiteImage
              page="home"
              slot="community-portrait"
              fallbackLabel="Artisan portrait — documentary style"
              aspect="aspect-[3/4]"
              className="rounded-sm"
            />
            <div className="flex flex-col justify-center">
              <p className="font-sans text-[10px] tracking-widest uppercase text-stone-500 mb-5">People</p>
              <h2 className="font-serif text-3xl md:text-4xl font-light text-stone-900 mb-6 leading-snug">
                Made by hands that know the work.
              </h2>
              <p className="font-sans text-base text-stone-600 leading-relaxed mb-6">
                Our artisan community spans generations — women and men who learned fiber work from their parents and are now passing it to their children.
              </p>
              <Link to="/community" className="inline-block font-sans text-sm text-stone-700 hover:text-stone-900 transition-colors">
                Meet the community →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 lg:px-12 bg-stone-900 text-stone-100" aria-label="Client testimonials">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <p className="font-sans text-[10px] tracking-widest uppercase text-stone-500 mb-3">Partners Say</p>
            <h2 className="font-serif text-2xl md:text-3xl font-light text-stone-100">Trusted by buyers worldwide</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-stone-800">
            {[
              { quote: "The quality and consistency of Exclusive Crafts cashmere is unlike anything else in the market. Our customers can feel the difference immediately.", name: "A. Laurent", role: "Buyer, Paris" },
              { quote: "Working with Exclusive Crafts gives us complete confidence in our supply chain. The traceability documentation is thorough and their team is responsive.", name: "M. Tanaka", role: "Procurement, Tokyo" },
              { quote: "We've partnered with them for over a decade. Their allo fiber program is genuinely innovative — sustainable, strong, and beautiful in construction.", name: "R. Hendricks", role: "Designer, Amsterdam" },
            ].map((t) => (
              <figure key={t.name} className="bg-stone-900 p-8 flex flex-col">
                <blockquote className="font-serif text-lg font-light text-stone-300 leading-relaxed flex-1 mb-6">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption>
                  <p className="font-sans text-sm font-medium text-stone-100">{t.name}</p>
                  <p className="font-sans text-xs text-stone-500 mt-0.5">{t.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="py-16 px-6 lg:px-12 bg-stone-100">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-sans text-base text-stone-600 leading-relaxed">
            Exclusive Crafts works at the intersection of landscape, fiber, and human skill — producing textiles that reflect the integrity of their origin.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <SiteLink page="home" slot="cta-primary" defaultHref="/products" defaultLinkText="View Products"
              className="font-sans text-sm text-stone-100 bg-stone-900 hover:bg-stone-700 transition-colors px-6 py-3" />
            <SiteLink page="home" slot="cta-secondary" defaultHref="/about" defaultLinkText="Our Story"
              className="font-sans text-sm text-stone-700 hover:text-stone-900 border border-stone-400 hover:border-stone-700 transition-colors px-6 py-3" />
          </div>
        </div>
      </section>
    </div>
  );
}
