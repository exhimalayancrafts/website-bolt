import MediaPlaceholder from '../components/MediaPlaceholder';

export default function Sourcing() {
  const sources = [
    {
      fiber: 'Cashmere',
      region: 'High-altitude plateaus of Dolpa and Mustang districts',
      animals: 'Chyangra goats, adapted to 4,000+ meter elevations',
      season: 'Spring combing season (March-May)',
      description: 'Cashmere fiber is harvested through careful combing during the spring molt, when goats naturally shed their winter undercoat. We work with herding families who have maintained these breeds for generations, following protocols that protect animal health and fiber quality.',
    },
    {
      fiber: 'Yak Wool',
      region: 'Northern Himalayan valleys and Tibetan border areas',
      animals: 'Chauri and pure yak herds',
      season: 'Spring harvest (April-June)',
      description: 'Yak down is collected during spring when animals shed their fine undercoat. The coarse guard hair is separated by hand, leaving the soft down for textile use. Herders rotate grazing according to traditional patterns that preserve pasture health.',
    },
    {
      fiber: 'Sheep Wool',
      region: 'Mid-elevation valleys across Nepal',
      animals: 'Local mountain breeds and crossbreeds',
      season: 'Annual shearing (usually pre-monsoon)',
      description: 'Sheep are shorn annually, with wool quality varying by breed and grazing conditions. We work with shepherd communities who maintain traditional transhumance routes, moving flocks seasonally between grazing areas.',
    },
    {
      fiber: 'Allo',
      region: 'Community forests in mid-hill regions',
      plants: 'Girardinia diversifolia (wild Himalayan nettle)',
      season: 'Harvest cycle aligned with plant maturity',
      description: 'Allo is harvested from wild-growing plants in forest understories. Community groups cut stems, strip bark, and process fiber through traditional retting and beating methods. No cultivation or chemicals are involved.',
    },
  ];

  return (
    <div className="bg-stone-50">
      {/* Header */}
      <section className="py-24 px-6 lg:px-12 border-b border-stone-200">
        <div className="max-w-6xl mx-auto">
          <p className="font-sans text-[10px] tracking-widest uppercase text-stone-500 mb-6">
            Origins
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-stone-900 mb-8 leading-tight">
            Sourcing
          </h1>
          <p className="font-sans text-sm text-stone-600 max-w-2xl leading-relaxed">
            How and where we obtain our fibers — the landscapes, animals, and communities at the beginning of the supply chain.
          </p>
        </div>
      </section>

      {/* Philosophy Statement */}
      <section className="py-32 px-6 lg:px-12 bg-stone-100">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <p className="font-sans text-[10px] tracking-widest uppercase text-stone-500 mb-6 lg:sticky lg:top-32">
                Approach
              </p>
            </div>
            <div className="lg:col-span-7">
              <p className="font-sans text-sm text-stone-600 leading-relaxed mb-6">
                We source fiber directly from herding families and community groups, maintaining personal knowledge of animals, grazing practices, and harvest methods. This direct relationship allows genuine traceability and fair terms.
              </p>
              <p className="font-sans text-sm text-stone-600 leading-relaxed">
                Each fiber type comes from a distinct environment with its own climate, seasonality, and traditional knowledge. Understanding these origins is essential to producing quality textiles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Source Sections */}
      {sources.map((source, index) => (
        <section
          key={source.fiber}
          className={`py-32 px-6 lg:px-12 ${index % 2 === 0 ? 'bg-stone-50' : 'bg-stone-100'}`}
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              {/* Image */}
              <div className={`lg:col-span-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <MediaPlaceholder
                  type="image"
                  label={`${source.fiber} — sourcing landscape, grazing environment, documentary style`}
                  aspect="aspect-[4/3]"
                  className="rounded-sm"
                />
              </div>

              {/* Content */}
              <div className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:order-1 lg:col-start-1' : 'lg:col-start-7'}`}>
                <h2 className="font-serif text-3xl md:text-4xl font-light text-stone-900 mb-8">
                  {source.fiber}
                </h2>

                <div className="space-y-6">
                  <div>
                    <p className="font-sans text-[10px] tracking-widest uppercase text-stone-400 mb-2">
                      Region
                    </p>
                    <p className="font-sans text-sm text-stone-600">
                      {source.region}
                    </p>
                  </div>

                  <div>
                    <p className="font-sans text-[10px] tracking-widest uppercase text-stone-400 mb-2">
                      {source.fiber === 'Allo' ? 'Plants' : 'Animals'}
                    </p>
                    <p className="font-sans text-sm text-stone-600">
                      {source.animals}
                    </p>
                  </div>

                  <div>
                    <p className="font-sans text-[10px] tracking-widest uppercase text-stone-400 mb-2">
                      Season
                    </p>
                    <p className="font-sans text-sm text-stone-600">
                      {source.season}
                    </p>
                  </div>

                  <div>
                    <p className="font-sans text-[10px] tracking-widest uppercase text-stone-400 mb-2">
                      Process
                    </p>
                    <p className="font-sans text-sm text-stone-600 leading-relaxed">
                      {source.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Traceability */}
      <section className="py-32 px-6 lg:px-12 bg-stone-900 text-stone-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <MediaPlaceholder
                type="image"
                label="Herder with animals — documentary portrait"
                aspect="aspect-[4/5]"
                className="rounded-sm opacity-70"
              />
            </div>
            <div>
              <p className="font-sans text-[10px] tracking-widest uppercase text-stone-400 mb-8">
                Traceability
              </p>
              <h2 className="font-serif text-2xl md:text-3xl font-light text-stone-100 mb-8 leading-snug">
                Knowing the origin.
              </h2>
              <p className="font-sans text-sm text-stone-300 leading-relaxed mb-6">
                We maintain records connecting each fiber lot to its source — the herder, the region, the season. This traceability is not a marketing claim but a working practice that allows us to verify quality and ensure fair terms.
              </p>
              <p className="font-sans text-sm text-stone-300 leading-relaxed">
                When you handle our textiles, you are handling material with a known lineage — from specific animals and landscapes to finished product.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Animal Welfare */}
      <section className="py-32 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <p className="font-sans text-[10px] tracking-widest uppercase text-stone-500 mb-6">
                Animal Welfare
              </p>
            </div>
            <div className="lg:col-span-7">
              <p className="font-sans text-sm text-stone-600 leading-relaxed mb-6">
                Our herding partners follow practices that prioritize animal health: proper nutrition, seasonal grazing rotation, and low-stress handling. Cashmere harvesting uses combing rather than shearing during the natural molt, avoiding harm to animals.
              </p>
              <p className="font-sans text-sm text-stone-600 leading-relaxed mb-8">
                We are committed to fiber sourcing that respects animal welfare as a non-negotiable standard.
              </p>
              <MediaPlaceholder
                type="image"
                label="Healthy goats grazing — natural environment, free range"
                aspect="aspect-video"
                className="rounded-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-32 px-6 lg:px-12 bg-stone-100">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="font-sans text-[10px] tracking-widest uppercase text-stone-500 mb-6">
                From the Field
            </p>
            <h2 className="font-serif text-2xl md:text-3xl font-light text-stone-900">
                Sourcing in context
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <MediaPlaceholder type="image" label="Herders" aspect="aspect-square" className="rounded-sm" />
            <MediaPlaceholder type="image" label="Grazing lands" aspect="aspect-square" className="rounded-sm" />
            <MediaPlaceholder type="image" label="Seasonal migration" aspect="aspect-square" className="rounded-sm" />
            <MediaPlaceholder type="image" label="Fiber collection" aspect="aspect-square" className="rounded-sm" />
          </div>
        </div>
      </section>
    </div>
  );
}
