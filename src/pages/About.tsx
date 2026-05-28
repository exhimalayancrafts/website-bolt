import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import MediaPlaceholder from '../components/MediaPlaceholder';

export default function About() {
  const [activeSection, setActiveSection] = useState('founder');

  const sections = [
    {
      id: 'founder',
      title: 'Founder Story',
      subtitle: 'A Journey to Preserve Heritage',
      button: 'Read the Journey',
      color: 'terracotta',
      content: `Exclusive Crafts was founded by a family deeply rooted in Himalayan textile traditions. With generations of experience in cashmere and natural fiber production, our founder recognized the need to bridge the gap between artisans and global markets while preserving traditional knowledge.

Starting with a small group of 30 artisans in Kathmandu, Exclusive Crafts has grown into a network of over 200 craftspeople across Nepal, Tibet, and Bhutan. Every step of growth has been guided by one principle: never compromise on quality, ethics, or artisan welfare.

Today, we remain a family-run business committed to our founding vision: creating beautiful textiles that tell the stories of Himalayan heritage.`,
    },
    {
      id: 'philosophy',
      title: 'Company Philosophy',
      subtitle: 'Our Values & Mission',
      button: 'Our Values',
      color: 'himalaya',
      content: `At Exclusive Crafts, we believe that exceptional textiles can only come from exceptional practices. Our philosophy rests on three pillars:

Ethical Sourcing — We work directly with farmers and artisans, ensuring fair prices, safe working conditions, and long-term partnerships. No middlemen. No exploitation.

Sustainability — Every product we create considers environmental impact—from fiber sourcing to dyeing to packaging. We invest in regenerative practices that heal the ecosystem.

Heritage Preservation — Traditional techniques aren't relics—they're living skills passed down through families. We create markets for these skills, ensuring they survive and thrive for future generations.

Our mission is simple: produce the world's most beautiful and responsible Himalayan fibers.`,
    },
    {
      id: 'process',
      title: 'Manufacturing & Sourcing',
      subtitle: 'From Farm to Finished Product',
      button: 'See Our Process',
      color: 'spice',
      content: `Our production process maintains complete transparency and control. Starting from the farm, we:

1. Source directly from certified sustainable farms across the Himalayas
2. Process fibers using traditional methods combined with modern quality standards
3. Work with artisan groups for carding, spinning, and weaving
4. Dye using natural, plant-based dyes wherever possible
5. Finish products with hand-blocking, hand-washing, and careful quality control
6. Package sustainably with minimal environmental impact

This vertically integrated approach allows us to maintain the highest standards while ensuring every artisan in the chain receives fair compensation. We conduct regular audits and maintain direct relationships with producers at every level.`,
    },
  ];

  const colorMap: Record<string, { bg: string; activeBg: string; activeText: string; border: string; text: string; badge: string }> = {
    terracotta: {
      bg: 'bg-terracotta-50',
      activeBg: 'bg-terracotta-500',
      activeText: 'text-white',
      border: 'border-terracotta-300',
      text: 'text-terracotta-600',
      badge: 'bg-terracotta-100 text-terracotta-700',
    },
    himalaya: {
      bg: 'bg-himalaya-50',
      activeBg: 'bg-himalaya-600',
      activeText: 'text-white',
      border: 'border-himalaya-300',
      text: 'text-himalaya-600',
      badge: 'bg-himalaya-100 text-himalaya-700',
    },
    spice: {
      bg: 'bg-spice-50',
      activeBg: 'bg-spice-500',
      activeText: 'text-white',
      border: 'border-spice-300',
      text: 'text-spice-600',
      badge: 'bg-spice-100 text-spice-700',
    },
  };

  const active = sections.find(s => s.id === activeSection)!;
  const activeColors = colorMap[active.color];

  return (
    <div>
      {/* Page Header */}
      <section className="relative bg-gradient-to-br from-spice-50 via-cream-100 to-terracotta-50 py-20 px-6 lg:px-12 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-20 w-72 h-72 bg-spice-300 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <p className="font-sans text-xs tracking-widest uppercase text-spice-500 mb-4">
            Our Story
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-semibold text-sand-900 mb-6">
            About Exclusive Crafts
          </h1>
          <p className="font-sans text-lg text-sand-600 max-w-2xl">
            Our story is rooted in the Himalayas, driven by passion for artistry and sustainability.
          </p>
        </div>
      </section>

      {/* About Sections */}
      <section className="bg-white py-28 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Selector */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
            {sections.map((section) => {
              const colors = colorMap[section.color];
              const isActive = activeSection === section.id;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`p-6 rounded-xl border-2 transition-all text-left ${
                    isActive
                      ? `${colors.activeBg} ${colors.activeText} border-transparent shadow-lg`
                      : `${colors.bg} ${colors.border} text-sand-800 hover:shadow-md`
                  }`}
                >
                  <h3 className="font-serif text-lg font-semibold mb-2">{section.title}</h3>
                  <p className={`font-sans text-xs ${isActive ? 'opacity-80' : 'text-sand-500'}`}>
                    {section.subtitle}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className={`inline-block font-sans text-xs tracking-widest uppercase ${activeColors.badge} px-4 py-1.5 rounded-full mb-6`}>
                {active.subtitle}
              </span>
              <h2 className="font-serif text-4xl font-semibold text-sand-900 mb-8">
                {active.title}
              </h2>
              <div>
                {active.content.split('\n\n').map((paragraph, idx) => (
                  <p
                    key={idx}
                    className="font-sans text-sm text-sand-600 mb-6 leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
              <Link
                to="/contact"
                className={`inline-flex items-center gap-2 font-sans text-xs tracking-widest uppercase ${activeColors.activeBg} text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity shadow-sm mt-4`}
              >
                {active.button}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="space-y-6">
              <MediaPlaceholder
                type="image"
                label={`${active.title} — ${active.subtitle}`}
                aspect="aspect-[4/3]"
                className="rounded-2xl"
              />
              <MediaPlaceholder
                type="video"
                label={`${active.title} — documentary clip`}
                aspect="aspect-video"
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gradient-to-r from-sand-800 to-sand-900 py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { value: '200+', label: 'Artisans', color: 'text-terracotta-300' },
              { value: '60%', label: 'Women-Led', color: 'text-spice-300' },
              { value: '15+', label: 'Years Experience', color: 'text-himalaya-300' },
              { value: '4', label: 'Natural Fibers', color: 'text-terracotta-300' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className={`font-serif text-5xl font-semibold ${stat.color} mb-2`}>
                  {stat.value}
                </p>
                <p className="font-sans text-sm text-sand-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream-100 py-20 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl font-semibold text-sand-900 mb-6">
            Ready to Collaborate?
          </h2>
          <p className="font-sans text-lg text-sand-600 mb-8">
            Whether you're a retailer, designer, or brand partner, we'd love to work with you.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 font-sans text-sm tracking-widest uppercase bg-terracotta-500 text-white px-8 py-4 rounded-lg hover:bg-terracotta-600 transition-colors shadow-lg"
          >
            Partner With Us
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
