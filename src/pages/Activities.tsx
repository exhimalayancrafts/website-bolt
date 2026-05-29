import MediaPlaceholder from '../components/MediaPlaceholder';

export default function Activities() {
  const events = [
    {
      year: '2024',
      name: 'International Textile Fair',
      location: 'Tokyo, Japan',
      type: 'Trade Fair',
    },
    {
      year: '2024',
      name: 'Himalayan Fiber Conference',
      location: 'Kathmandu, Nepal',
      type: 'Conference',
    },
    {
      year: '2023',
      name: 'Natural Fiber Expo',
      location: 'Frankfurt, Germany',
      type: 'Trade Fair',
    },
    {
      year: '2023',
      name: 'Sustainable Textiles Summit',
      location: 'Copenhagen, Denmark',
      type: 'Conference',
    },
    {
      year: '2023',
      name: 'Craftsmanship Exhibition',
      location: 'London, UK',
      type: 'Exhibition',
    },
  ];

  const associations = [
    {
      name: 'Nepal Cashmere Industries Association',
      role: 'Board Member',
    },
    {
      name: 'Himalayan Wool Development Board',
      role: 'Advisory Committee',
    },
    {
      name: 'International Natural Fiber Organization',
      role: 'Member',
    },
    {
      name: 'South Asian Textile Alliance',
      role: 'Founding Member',
    },
  ];

  return (
    <div className="bg-stone-50">
      {/* Header */}
      <section className="py-24 px-6 lg:px-12 border-b border-stone-200">
        <div className="max-w-6xl mx-auto">
          <p className="font-sans text-[10px] tracking-widest uppercase text-stone-500 mb-6">
            Engagement
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-stone-900 mb-8 leading-tight">
            Activities
          </h1>
          <p className="font-sans text-sm text-stone-600 max-w-2xl leading-relaxed">
            Industry participation, events, and collaborations that connect our work to the broader textile ecosystem.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-32 px-6 lg:px-12 bg-stone-100">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <p className="font-sans text-[10px] tracking-widest uppercase text-stone-500 mb-6 lg:sticky lg:top-32">
                Industry Presence
              </p>
            </div>
            <div className="lg:col-span-7">
              <p className="font-sans text-sm text-stone-600 leading-relaxed mb-6">
                Over two decades, we have built relationships across the global textile industry — participating in international trade fairs, contributing to industry associations, and collaborating with research institutions.
              </p>
              <p className="font-sans text-sm text-stone-600 leading-relaxed">
                This engagement keeps us connected to market developments, sustainability standards, and emerging fiber technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trade Fairs & Exhibitions */}
      <section className="py-32 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="font-sans text-[10px] tracking-widest uppercase text-stone-500 mb-6">
              Events
            </p>
            <h2 className="font-serif text-2xl md:text-3xl font-light text-stone-900">
              Recent participation
            </h2>
          </div>

          <div className="gb-rid space-y-px bg-stone-300">
            {events.map((event) => (
              <div
                key={`${event.year}-${event.name}`}
                className="bg-stone-50 p-6 lg:p-8 flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-12"
              >
                <div className="lg:w-20 flex-shrink-0">
                  <p className="font-sans text-xs text-stone-400">{event.year}</p>
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-lg font-medium text-stone-900 mb-1">
                    {event.name}
                  </h3>
                  <p className="font-sans text-sm text-stone-600">{event.location}</p>
                </div>
                <div className="lg:w-32 flex-shrink-0">
                  <span className="font-sans text-xs text-stone-400 uppercase tracking-wide">
                    {event.type}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <MediaPlaceholder
              type="image"
              label="Trade fair booth — product display, visitor engagement"
              aspect="aspect-video"
              className="rounded-sm"
            />
          </div>
        </div>
      </section>

      {/* Associations */}
      <section className="py-32 px-6 lg:px-12 bg-stone-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="font-sans text-[10px] tracking-widest uppercase text-stone-500 mb-6">
                Associations
              </p>
              <h2 className="font-serif text-2xl md:text-3xl font-light text-stone-900 mb-8 leading-snug">
                Active membership in industry organizations.
              </h2>
              <p className="font-sans text-sm text-stone-600 leading-relaxed">
                We hold positions in trade associations, development boards, and international fiber organizations — contributing our experience to strengthen the broader ecosystem.
              </p>
            </div>

            <div className="space-y-8">
              {associations.map((assoc) => (
                <div key={assoc.name} className="border-l-2 border-stone-300 pl-6">
                  <p className="font-serif text-base font-medium text-stone-900 mb-1">
                    {assoc.name}
                  </p>
                  <p className="font-sans text-sm text-stone-500">{assoc.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-32 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="font-sans text-[10px] tracking-widest uppercase text-stone-500 mb-6">
              Programs
            </p>
            <h2 className="font-serif text-2xl md:text-3xl font-light text-stone-900">
              Initiatives and workshops
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-stone-300">
            <div className="bg-stone-50 p-10 min-h-[280px]">
              <h3 className="font-serif text-lg font-medium text-stone-900 mb-4">
                Artisan Training Program
              </h3>
              <p className="font-sans text-sm text-stone-600 leading-relaxed">
                Annual training program for new artisans, covering fiber knowledge, weaving techniques, and quality standards. Open to community members interested in textile careers.
              </p>
            </div>

            <div className="bg-stone-50 p-10 min-h-[280px]">
              <h3 className="font-serif text-lg font-medium text-stone-900 mb-4">
                Allo Fiber Development
              </h3>
              <p className="font-sans text-sm text-stone-600 leading-relaxed">
                Research partnership exploring the potential of wild nettle fiber, including sustainable harvesting methods and textile applications.
              </p>
            </div>

            <div className="bg-stone-50 p-10 min-h-[280px]">
              <h3 className="font-serif text-lg font-medium text-stone-900 mb-4">
                Sustainability Workshops
              </h3>
              <p className="font-sans text-sm text-stone-600 leading-relaxed">
                Regular workshops for staff and partners on environmental practices — from water conservation to natural dye techniques.
              </p>
            </div>

            <div className="bg-stone-50 p-10 min-h-[280px]">
              <h3 className="font-serif text-lg font-medium text-stone-900 mb-4">
                International Collaborations
              </h3>
              <p className="font-sans text-sm text-stone-600 leading-relaxed">
                Research partnerships with universities and textile institutes, focused on fiber quality, traceability, and sustainable production methods.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Event Documentation */}
      <section className="py-32 px-6 lg:px-12 bg-stone-900 text-stone-100">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="font-sans text-[10px] tracking-widest uppercase text-stone-400 mb-6">
              Documentation
            </p>
            <h2 className="font-serif text-2xl md:text-3xl font-light text-stone-100">
              Selected events
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <MediaPlaceholder
              type="image"
              label="Exhibition opening"
              aspect="aspect-[4/3]"
              className="rounded-sm opacity-70"
            />
            <MediaPlaceholder
              type="image"
              label="Panel discussion"
              aspect="aspect-[4/3]"
              className="rounded-sm opacity-70"
            />
            <MediaPlaceholder
              type="image"
              label="Workshop session"
              aspect="aspect-[4/3]"
              className="rounded-sm opacity-70"
            />
          </div>
        </div>
      </section>

      {/* Outreach */}
      <section className="py-32 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <p className="font-sans text-[10px] tracking-widest uppercase text-stone-500 mb-6 lg:sticky lg:top-32">
                Outreach
              </p>
            </div>
            <div className="lg:col-span-7">
              <h2 className="font-serif text-xl md:text-2xl font-light text-stone-900 mb-10 leading-snug">
                Engaging beyond commercial activity.
              </h2>

              <div className="space-y-6">
                <p className="font-sans text-sm text-stone-600 leading-relaxed">
                  We participate in industry events not just to exhibit products, but to contribute knowledge, share experience, and build relationships that strengthen the sustainable textile field.
                </p>

                <p className="font-sans text-sm text-stone-600 leading-relaxed">
                  Our team members regularly speak at conferences, contribute to industry publications, and host visits from researchers, designers, and students interested in fiber production.
                </p>

                <p className="font-sans text-sm text-stone-600 leading-relaxed">
                  This openness reflects our belief that sustainable textile production benefits from shared knowledge and collective progress.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
