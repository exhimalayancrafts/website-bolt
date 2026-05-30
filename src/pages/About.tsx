export default function About() {
  const milestones = [
    { year: '1998', title: 'Founding', description: 'Established in Kathmandu with a focus on cashmere export and direct sourcing relationships.' },
    { year: '2005', title: 'First Manufacturing Facility', description: 'Acquired weaving workshop in Lalitpur, bringing production under direct oversight.' },
    { year: '2012', title: 'Yak Wool Development', description: 'Began systematic development of yak wool as a premium textile fiber.' },
    { year: '2018', title: 'Allo Research Program', description: 'Initiated research into Himalayan nettle fiber with agricultural partners.' },
    { year: '2023', title: 'Current Operations', description: 'Working with 200+ artisans across four fiber types, serving partners globally.' },
  ];

  return (
    <div className="bg-stone-50">
      {/* Header */}
      <section className="py-24 px-6 lg:px-12 border-b border-stone-200">
        <div className="max-w-6xl mx-auto">
          <p className="font-sans text-[10px] tracking-widest uppercase text-stone-500 mb-6">
            About
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-stone-900 mb-8 leading-tight">
            The Company
          </h1>
          <p className="font-sans text-sm text-stone-600 max-w-2xl leading-relaxed">
            A family-run business built on generations of experience in Himalayan textile production, maintaining direct relationships from grazing lands to finished goods.
          </p>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-32 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <p className="font-sans text-[10px] tracking-widest uppercase text-stone-500 mb-6 lg:sticky lg:top-32">
                Founder
              </p>
            </div>
            <div className="lg:col-span-7">
              <img
                src="/website-bolt/Founder.jpeg"
                alt="Founder"
                className= "aspect-[4/5] object-cover rounded-sm mb-12 w-full"
              />
              <div className="space-y-6">
                <p className="font-sans text-sm text-stone-600 leading-relaxed">
                  The company was founded by a family with deep roots in Himalayan textile traditions. Before starting Exclusive Crafts, the founders spent two decades working with cashmere traders, learning the complexities of fiber quality, and building relationships with herding communities across the high plateaus.
                </p>
                <p className="font-sans text-sm text-stone-600 leading-relaxed">
                  This experience shaped a conviction: that quality textiles require direct oversight from source to finish. No middlemen. No fragmented supply chains. Complete traceability.
                </p>
                <p className="font-sans text-sm text-stone-600 leading-relaxed">
                  Today, the company remains family-run. Decisions are made with a long view — favoring relationships over transactions, sustainability over rapid growth, and craft over commodity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Philosophy */}
      <section className="py-32 px-6 lg:px-12 bg-stone-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <p className="font-sans text-[10px] tracking-widest uppercase text-stone-500 mb-6">
                Philosophy
              </p>
            </div>
            <div className="lg:col-span-7">
              <h2 className="font-serif text-2xl md:text-3xl font-light text-stone-900 mb-12 leading-snug">
                Three principles guide our work.
              </h2>

              <div className="space-y-12">
                <div className="border-l border-stone-400 pl-8">
                  <h3 className="font-serif text-lg font-medium text-stone-900 mb-4">Direct Relationships</h3>
                  <p className="font-sans text-sm text-stone-600 leading-relaxed">
                    We work directly with herders and artisans, maintaining personal knowledge of the people and places behind our fibers. This allows genuine traceability and fair terms.
                  </p>
                </div>

                <div className="border-l border-stone-400 pl-8">
                  <h3 className="font-serif text-lg font-medium text-stone-900 mb-4">Owned Production</h3>
                  <p className="font-sans text-sm text-stone-600 leading-relaxed">
                    We own our facilities. This is not common in this industry, but it ensures quality control, fair working conditions, and the ability to innovate without compromise.
                  </p>
                </div>

                <div className="border-l border-stone-400 pl-8">
                  <h3 className="font-serif text-lg font-medium text-stone-900 mb-4">Long-Term Thinking</h3>
                  <p className="font-sans text-sm text-stone-600 leading-relaxed">
                    Decisions are measured against decades, not quarters. We invest in soil health, animal welfare, and artisan skills knowing the returns take years to materialize.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-32 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <p className="font-sans text-[10px] tracking-widest uppercase text-stone-500 mb-6">
              History
            </p>
            <h2 className="font-serif text-2xl md:text-3xl font-light text-stone-900">
              Company evolution
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-stone-300">
            {milestones.map((milestone) => (
              <div key={milestone.year} className="bg-stone-50 p-10 min-h-[200px]">
                <p className="font-sans text-xs text-stone-400 mb-4">{milestone.year}</p>
                <h3 className="font-serif text-lg font-medium text-stone-900 mb-4">
                  {milestone.title}
                </h3>
                <p className="font-sans text-sm text-stone-600 leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Involvement */}
      <section className="py-32 px-6 lg:px-12 bg-stone-900 text-stone-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <p className="font-sans text-[10px] tracking-widest uppercase text-stone-400 mb-6">
                Associations
              </p>
            </div>
            <div className="lg:col-span-7">
              <h2 className="font-serif text-2xl md:text-3xl font-light text-stone-100 mb-12 leading-snug">
                Long-standing involvement in the textile ecosystem.
              </h2>
              <div className="space-y-8">
                <p className="font-sans text-sm text-stone-300 leading-relaxed">
                  Over 25 years, we have built relationships across the global textile industry — participating in trade associations, contributing to sustainability standards, and collaborating with research institutions on fiber development.
                </p>
                <div className="space-y-4 pt-8 border-t border-stone-700">
                  <p className="font-sans text-xs text-stone-400">Active membership and participation in:</p>
                  <ul className="space-y-2">
                    <li className="font-sans text-sm text-stone-300">Nepal Cashmere Industries Association</li>
                    <li className="font-sans text-sm text-stone-300">Himalayan Wool Development Board</li>
                    <li className="font-sans text-sm text-stone-300">International Natural Fiber Organization</li>
                    <li className="font-sans text-sm text-stone-300">Fair Trade Fiber Collective</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-32 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <img
              src="/website-bolt/office.jpeg"
              alt="Kathmandu office"
              className="aspect-[4/3] object-cover rounded-sm w-full"
            />
            <div className="flex flex-col justify-center">
              <p className="font-sans text-[10px] tracking-widest uppercase text-stone-500 mb-6">
                Location
              </p>
              <h2 className="font-serif text-2xl md:text-3xl font-light text-stone-900 mb-8 leading-snug">
                Based in Kathmandu, Nepal
              </h2>
              <p className="font-sans text-sm text-stone-600 leading-relaxed">
                Our headquarters and primary manufacturing operations are in Kathmandu Valley. This location keeps us close to herding regions in the north, connected to the broader Himalayan textile network, and accessible to international partners.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
