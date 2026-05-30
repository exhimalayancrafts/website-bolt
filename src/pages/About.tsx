export default function About() {
  const milestones = [
    { year: '1998', title: 'Founding', description: 'Established in Kathmandu with a focus on cashmere export and direct sourcing relationships.' },
    { year: 'Early Growth', title: 'International Market Development', description: 'Expanded global presence through participation in major international trade fairs across North America, Europe, and Asia, including AmericasMart Atlanta, ASD Market Week Las Vegas, Off Price Show Las Vegas, LA Mart Los Angeles, Sourcing at MAGIC New York, CNE Toronto, MUBA Basel, California Gift Show, San Francisco International Gift Fair, and numerous European trade exhibitions.' },
    { year: '2021', title: 'Cashmere Processing Development', description: 'Became part of Nepal\'s first cashmere fiber processing initiative, allowing Chyangra Pashmina to be sourced and processed domestically.' },
    { year: '2023', title: 'Natural Fiber Expansion', description: 'Expanded sourcing and product development across a broader range of plant based fibers, including himalayan nettle(allo) and hemp.' },
    { year: 'Present', title: 'Current Operations', description: 'Providing sourcing, development, manufacturing, and export solutions across natural fibers for clients around the world.' },
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
              We source, process, and manufacture Himalayan natural fibers for international brands. Family-run and based in Kathmandu since 1998.          </p>
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
                className= "aspect-[4/5] object-cover rounded-sm mb-12 w-full max-w-sm"
              />
              <div className="space-y-6">
                <p className="font-sans text-sm text-stone-600 leading-relaxed">
                  Dhan Prasad Lamichhane founded Exclusive Crafts, formerly known as Mount Manaslu Pashmina Industry, in 1998, starting with cashmere export and building direct relationships with clients across the world. Over 25 years the business has grown into a trusted supplier to international brands worldwide.
                </p>
                <p className="font-sans text-sm text-stone-600 leading-relaxed">
                  He established Nepal's first cashmere dehairing facility through NFPPL (Nepal Fibre Processing Private Limited) , with support from ITC's EU-Nepal Trade and Investment Programme. The facility was built with a single goal: to allow Nepalese cashmere to be processed locally and reach world markets on its own terms.
                </p> 
                <p className="font-sans text-sm text-stone-600 leading-relaxed">
                 His background is in dyeing with a long focus on vegetable dye techniques. Since 2002 he has been involved in promoting Nepalese handicrafts internationally. He currently serves as a President of Nepal Pashmina Industries Association, is a founding member of NFPPL, and sits on the board of the Federation of Handicrafts Associations of Nepal. He also founded Jorpati Lions Academy, a school for underprivileged children in Kathmandu.
                </p> 
                  <a href="https://www.intracen.org/news-and-events/news/pashmina-from-nepal-a-unique-product-ready-to-embrace-international-markets"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-sm text-stone-900 underline underline-offset-4 hover:text-stone-600"
                >
                  Read more about Dhan's work in pashmina →
                  </a>
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
                How we work ?
              </h2>

              <div className="space-y-12">
                <div className="border-l border-stone-400 pl-8">
                  <h3 className="font-serif text-lg font-medium text-stone-900 mb-4">Direct Relationships</h3>
                  <p className="font-sans text-sm text-stone-600 leading-relaxed">
                          We buy directly from herders we work with personally. We know the people, the animals, and the regions. There are no middlemen between us and the source.                  </p>
                </div>

                <div className="border-l border-stone-400 pl-8">
                  <h3 className="font-serif text-lg font-medium text-stone-900 mb-4">Owned Production</h3>
                  <p className="font-sans text-sm text-stone-600 leading-relaxed">
                    We own our facilities and ensure quality ,  working conditions, and the process.
                  </p>
                </div>

                <div className="border-l border-stone-400 pl-8">
                  <h3 className="font-serif text-lg font-medium text-stone-900 mb-4">Experience</h3>
                  <p className="font-sans text-sm text-stone-600 leading-relaxed">
                   Dhan has been working with pashmina since he was a teenager. The business has been running since 1998. That kind of experience shows in the work.
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
                    <li className="font-sans text-sm text-stone-300">Nepal Pashmina Industries Association (NPIA)</li>
                    <li className="font-sans text-sm text-stone-300">Nepal Fibre Processing Private Limited (NFPPL)</li>
                    <li className="font-sans text-sm text-stone-300">Federation of Handicrafts Associations of Nepal(FHAN)</li>
                    <li className="font-sans text-sm text-stone-300">Federation of Nepalese Chambers of Commerce & Industries(FNCCI)</li>
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
                Based in Gokarneshwor-06, Jorpati, Kathmandu, Nepal
              </h2>
              <p className="font-sans text-sm text-stone-600 leading-relaxed">
                  Our office and primary manufacturing operations are in Kathmandu Valley. We also run a cashmere farm in Mustang, in the high Himalayas, where our fiber sourcing begins.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
