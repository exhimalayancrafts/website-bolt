import { Link } from 'react-router-dom';
import { Users, Heart, BookOpen, Leaf } from 'lucide-react';
import { useState } from 'react';

export default function Impact() {
  const [activeTab, setActiveTab] = useState('artisans');

  const sections = [
    {
      id: 'artisans',
      icon: Users,
      title: 'Artisan Stories',
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

  const activeSection = sections.find(s => s.id === activeTab)!;
  const ActiveIcon = activeSection.icon;

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-stone-50 to-stone-100 py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-serif text-5xl md:text-6xl font-light text-stone-900 mb-6">
            Community & Impact
          </h1>
          <p className="font-sans text-lg text-stone-600 max-w-2xl">
            Our commitment to artisans, communities, and the environment drives every decision we make.
          </p>
        </div>
      </section>

      {/* Impact Tabs */}
      <section className="py-28 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Tab Buttons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveTab(section.id)}
                  className={`p-6 rounded-lg border-2 transition-all text-center ${
                    activeTab === section.id
                      ? 'border-stone-900 bg-stone-900 text-white'
                      : 'border-stone-200 bg-stone-50 text-stone-900 hover:border-stone-900'
                  }`}
                >
                  <Icon className="w-8 h-8 mx-auto mb-2" />
                  <span className="font-sans text-xs tracking-widest uppercase block leading-tight">
                    {section.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Section Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-stone-100 rounded-lg flex items-center justify-center">
                  <ActiveIcon className="w-8 h-8 text-stone-900" />
                </div>
                <div>
                  <p className="font-sans text-xs tracking-widest uppercase text-stone-500 mb-1">
                    Our Initiatives
                  </p>
                  <h2 className="font-serif text-3xl font-light text-stone-900">
                    {activeSection.title}
                  </h2>
                </div>
              </div>

              <p className="font-sans text-lg font-light text-stone-600 mb-6">
                {activeSection.subtitle}
              </p>

              <p className="font-sans text-sm text-stone-600 mb-8 leading-relaxed">
                {activeSection.description}
              </p>

              <ul className="space-y-4 mb-8">
                {activeSection.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-stone-900 font-serif mt-1">✓</span>
                    <span className="font-sans text-sm text-stone-600">{point}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className="inline-block font-sans text-xs tracking-widest uppercase border-2 border-stone-900 text-stone-900 px-6 py-3 hover:bg-stone-900 hover:text-white transition-colors"
              >
                Learn More
              </Link>
            </div>

            <div className="relative">
              <img
                src={`https://images.pexels.com/photos/${
                  activeTab === 'artisans'
                    ? '3945657'
                    : activeTab === 'women'
                    ? '5632399'
                    : activeTab === 'training'
                    ? '3857857'
                    : '7974269'
                }/pexels-photo-${
                  activeTab === 'artisans'
                    ? '3945657'
                    : activeTab === 'women'
                    ? '5632399'
                    : activeTab === 'training'
                    ? '3857857'
                    : '7974269'
                }.jpeg?auto=compress&cs=tinysrgb&w=600&q=80`}
                alt={activeSection.title}
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-stone-900 text-white py-20 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl font-light mb-6">
            Join Us in Creating Impact
          </h2>
          <p className="font-sans text-lg text-stone-300 mb-8">
            Every purchase supports artisan communities and sustainable practices across the Himalayas.
          </p>
          <Link
            to="/products"
            className="inline-block font-sans text-xs tracking-widest uppercase border-2 border-white text-white px-8 py-4 hover:bg-white hover:text-stone-900 transition-colors"
          >
            Shop Collections
          </Link>
        </div>
      </section>
    </div>
  );
}
