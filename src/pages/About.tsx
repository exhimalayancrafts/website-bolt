import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function About() {
  const [activeSection, setActiveSection] = useState('founder');

  const sections = [
    {
      id: 'founder',
      title: 'Founder Story',
      subtitle: 'A Journey to Preserve Heritage',
      button: 'Read the Journey',
      content: `Exclusive Crafts was founded by a family deeply rooted in Himalayan textile traditions. With generations of experience in cashmere and natural fiber production, our founder recognized the need to bridge the gap between artisans and global markets while preserving traditional knowledge.

Starting with a small group of 30 artisans in Kathmandu, Exclusive Crafts has grown into a network of over 200 craftspeople across Nepal, Tibet, and Bhutan. Every step of growth has been guided by one principle: never compromise on quality, ethics, or artisan welfare.

Today, we remain a family-run business committed to our founding vision: creating beautiful textiles that tell the stories of Himalayan heritage.`,
      image: 'https://images.pexels.com/photos/3945657/pexels-photo-3945657.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
    },
    {
      id: 'philosophy',
      title: 'Company Philosophy',
      subtitle: 'Our Values & Mission',
      button: 'Our Values',
      content: `At Exclusive Crafts, we believe that exceptional textiles can only come from exceptional practices. Our philosophy rests on three pillars:

Ethical Sourcing: We work directly with farmers and artisans, ensuring fair prices, safe working conditions, and long-term partnerships. No middlemen. No exploitation.

Sustainability: Every product we create considers environmental impact—from fiber sourcing to dyeing to packaging. We invest in regenerative practices that heal the ecosystem.

Heritage Preservation: Traditional techniques aren't relics—they're living skills passed down through families. We create markets for these skills, ensuring they survive and thrive for future generations.

Our mission is simple: produce the world's most beautiful and responsible Himalayan fibers.`,
      image: 'https://images.pexels.com/photos/6069553/pexels-photo-6069553.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
    },
    {
      id: 'process',
      title: 'Manufacturing & Sourcing',
      subtitle: 'From Farm to Finished Product',
      button: 'See Our Process',
      content: `Our production process maintains complete transparency and control. Starting from the farm, we:

1. Source directly from certified sustainable farms across the Himalayas
2. Process fibers using traditional methods combined with modern quality standards
3. Work with artisan groups for carding, spinning, and weaving
4. Dye using natural, plant-based dyes wherever possible
5. Finish products with hand-blocking, hand-washing, and careful quality control
6. Package sustainably with minimal environmental impact

This vertically integrated approach allows us to maintain the highest standards while ensuring every artisan in the chain receives fair compensation. We conduct regular audits and maintain direct relationships with producers at every level.`,
      image: 'https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
    },
  ];

  const active = sections.find(s => s.id === activeSection)!;

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-stone-50 to-stone-100 py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-serif text-5xl md:text-6xl font-light text-stone-900 mb-6">
            About Exclusive Crafts
          </h1>
          <p className="font-sans text-lg text-stone-600 max-w-2xl">
            Our story is rooted in the Himalayas, driven by passion for artistry and sustainability.
          </p>
        </div>
      </section>

      {/* About Sections */}
      <section className="py-28 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Selector */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`p-6 rounded-lg border-2 transition-all text-left ${
                  activeSection === section.id
                    ? 'border-stone-900 bg-stone-900 text-white'
                    : 'border-stone-200 bg-stone-50 text-stone-900 hover:border-stone-900'
                }`}
              >
                <h3 className="font-serif text-lg font-light mb-2">{section.title}</h3>
                <p className="font-sans text-xs text-opacity-75">
                  {section.subtitle}
                </p>
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-4xl font-light text-stone-900 mb-4">
                {active.title}
              </h2>
              <p className="font-sans text-sm text-stone-500 mb-6 tracking-widest uppercase">
                {active.subtitle}
              </p>
              <div className="prose prose-sm max-w-none">
                {active.content.split('\n\n').map((paragraph, idx) => (
                  <p
                    key={idx}
                    className="font-sans text-sm text-stone-600 mb-6 leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
              <Link
                to="/contact"
                className="inline-block font-sans text-xs tracking-widest uppercase border-2 border-stone-900 text-stone-900 px-6 py-3 hover:bg-stone-900 hover:text-white transition-colors mt-8"
              >
                {active.button}
              </Link>
            </div>

            <div>
              <img
                src={active.image}
                alt={active.title}
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-stone-900 text-white py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div>
              <p className="font-serif text-4xl font-light mb-2">200+</p>
              <p className="font-sans text-sm text-stone-300">Artisans</p>
            </div>
            <div>
              <p className="font-serif text-4xl font-light mb-2">60%</p>
              <p className="font-sans text-sm text-stone-300">Women-Led</p>
            </div>
            <div>
              <p className="font-serif text-4xl font-light mb-2">15+</p>
              <p className="font-sans text-sm text-stone-300">Years Experience</p>
            </div>
            <div>
              <p className="font-serif text-4xl font-light mb-2">4</p>
              <p className="font-sans text-sm text-stone-300">Natural Fibers</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-stone-50 py-20 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl font-light text-stone-900 mb-6">
            Ready to Collaborate?
          </h2>
          <p className="font-sans text-lg text-stone-600 mb-8">
            Whether you're a retailer, designer, or brand partner, we'd love to work with you.
          </p>
          <Link
            to="/contact"
            className="inline-block font-sans text-xs tracking-widest uppercase border-2 border-stone-900 text-stone-900 px-8 py-4 hover:bg-stone-900 hover:text-white transition-colors"
          >
            Partner With Us
          </Link>
        </div>
      </section>
    </div>
  );
}
