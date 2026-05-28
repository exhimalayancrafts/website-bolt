import { Link } from 'react-router-dom';
import { Users, Heart, BookOpen, Leaf, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import MediaPlaceholder from '../components/MediaPlaceholder';

export default function Impact() {
  const [activeTab, setActiveTab] = useState('artisans');

  const sections = [
    {
      id: 'artisans',
      icon: Users,
      title: 'Artisan Stories',
      color: 'terracotta',
      subtitle: 'Meet the craftspeople behind our collections',
      description: 'We celebrate the skills and heritage of Himalayan artisans. Each story represents generations of traditional knowledge and craftsmanship.',
      points: [
        'Direct partnerships with 200+ artisans across Nepal',
        'Fair wages and benefits for all craftspeople',
        'Preservation of traditional techniques',
        'Community-based production networks',
      ],
    },
    {
      id: 'women',
      icon: Heart,
      title: 'Women Empowerment',
      color: 'spice',
      subtitle: 'Supporting women-led production',
      description: 'Over 60% of our production team are women. We invest in their training, leadership development, and economic independence.',
      points: [
        '60% female workforce across operations',
        'Equal pay for equal work',
        'Leadership and skill development programs',
        'Support for women entrepreneurship',
      ],
    },
    {
      id: 'training',
      icon: BookOpen,
      title: 'Training & Outreach',
      color: 'himalaya',
      subtitle: 'Building capacity and preserving heritage',
      description: 'We run workshops and training programs to ensure traditional crafts survive and evolve with new generations.',
      points: [
        'Free workshops for community members',
        'Youth apprenticeship programs',
        'Technical skills development',
        'Digital literacy initiatives',
      ],
    },
    {
      id: 'sustainability',
      icon: Leaf,
      title: 'Sustainability Practices',
      color: 'himalaya',
      subtitle: 'Protecting our environment',
      description: 'Environmental responsibility is core to our operations. We minimize waste, support regenerative practices, and invest in ecosystem restoration.',
      points: [
        'Zero-waste production goals',
        'Natural dye and chemical reduction',
        'Reforestation partnerships',
        'Water conservation initiatives',
      ],
    },
  ];

  const colorMap: Record<string, { bg: string; activeBg: string; activeText: string; border: string; text: string; badge: string; highlight: string }> = {
    terracotta: {
      bg: 'bg-terracotta-50',
      activeBg: 'bg-terracotta-500',
      activeText: 'text-white',
      border: 'border-terracotta-300',
      text: 'text-terracotta-600',
      badge: 'bg-terracotta-100 text-terracotta-700',
      highlight: 'text-terracotta-500',
    },
    spice: {
      bg: 'bg-spice-50',
      activeBg: 'bg-spice-500',
      activeText: 'text-white',
      border: 'border-spice-300',
      text: 'text-spice-600',
      badge: 'bg-spice-100 text-spice-700',
      highlight: 'text-spice-500',
    },
    himalaya: {
      bg: 'bg-himalaya-50',
      activeBg: 'bg-himalaya-600',
      activeText: 'text-white',
      border: 'border-himalaya-300',
      text: 'text-himalaya-600',
      badge: 'bg-himalaya-100 text-himalaya-700',
      highlight: 'text-himalaya-500',
    },
  };

  const activeSection = sections.find(s => s.id === activeTab)!;
  const activeColors = colorMap[activeSection.color];
  const ActiveIcon = activeSection.icon;

  return (
    <div>
      {/* Page Header */}
      <section className="relative bg-gradient-to-br from-terracotta-50 via-cream-100 to-himalaya-50 py-20 px-6 lg:px-12 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 right-10 w-72 h-72 bg-terracotta-300 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <p className="font-sans text-xs tracking-widest uppercase text-terracotta-500 mb-4">
          Making a Difference
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-semibold text-sand-900 mb-6">
            Community & Impact
          </h1>
          <p className="font-sans text-lg text-sand-600 max-w-2xl">
            Our commitment to artisans, communities, and the environment drives every decision we make.
          </p>
        </div>
      </section>

      {/* Impact Tabs */}
      <section className="bg-white py-28 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Tab Buttons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {sections.map((section) => {
              const Icon = section.icon;
              const colors = colorMap[section.color];
              const isActive = activeTab === section.id;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveTab(section.id)}
                  className={`p-6 rounded-xl border-2 transition-all text-center ${
                    isActive
                      ? `${colors.activeBg} ${colors.activeText} border-transparent shadow-lg`
                      : `${colors.bg} ${colors.border} text-sand-800 hover:shadow-md`
                  }`}
                >
                  <Icon className="w-7 h-7 mx-auto mb-2" />
                  <span className="font-sans text-xs tracking-widest uppercase block leading-tight font-medium">
                    {section.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Section Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-16 h-16 ${activeColors.badge} rounded-xl flex items-center justify-center`}>
                  <ActiveIcon className={`w-8 h-8 ${activeColors.text}`} />
                </div>
                <div>
                  <p className={`font-sans text-xs tracking-widest uppercase ${activeColors.text} mb-1`}>
                    Our Initiatives
                  </p>
                  <h2 className="font-serif text-3xl md:text-4xl font-semibold text-sand-900">
                    {activeSection.title}
                  </h2>
                </div>
              </div>

              <p className="font-sans text-lg font-light text-sand-600 mb-4">
                {activeSection.subtitle}
              </p>

              <p className="font-sans text-sm text-sand-600 mb-8 leading-relaxed">
                {activeSection.description}
              </p>

              <ul className="space-y-4 mb-10">
                {activeSection.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className={`${activeColors.highlight} font-serif text-lg mt-0.5`}>✦</span>
                    <span className="font-sans text-sm text-sand-700">{point}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className={`inline-flex items-center gap-2 font-sans text-xs tracking-widest uppercase ${activeColors.activeBg} text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity shadow-sm`}
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <MediaPlaceholder
              type="image"
              label={`${activeSection.title} — community impact`}
              aspect="aspect-[4/3]"
              className="rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Stories Gallery */}
      <section className="bg-cream-100 py-28 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-sans text-xs tracking-widest uppercase text-spice-500 mb-4">
              Behind the Scenes
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-sand-900 mb-6">
              Stories From the Field
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-terracotta-400 to-spice-400 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <MediaPlaceholder
              type="video"
              label="Artisan story: A day in the life"
              aspect="aspect-video"
              className="rounded-2xl"
            />
            <MediaPlaceholder
              type="video"
              label="Women artisans: Empowerment journey"
              aspect="aspect-video"
              className="rounded-2xl"
            />
            <MediaPlaceholder
              type="image"
              label="Training workshop in action"
              aspect="aspect-video"
              className="rounded-2xl"
            />
            <MediaPlaceholder
              type="image"
              label="Sustainability in practice"
              aspect="aspect-video"
              className="rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-terracotta-700 to-spice-700 py-20 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl font-semibold text-white mb-6">
            Join Us in Creating Impact
          </h2>
          <p className="font-sans text-lg text-terracotta-100 mb-8">
            Every purchase supports artisan communities and sustainable practices across the Himalayas.
          </p>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 font-sans text-sm tracking-widest uppercase bg-white text-terracotta-700 px-8 py-4 rounded-lg hover:bg-cream-100 transition-colors shadow-lg"
          >
            Shop Collections
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
