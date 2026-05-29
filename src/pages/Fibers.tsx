import MediaPlaceholder from '../components/MediaPlaceholder';

export default function Fibers() {
  const fibers = [
    {
      name: 'Cashmere',
      scientificName: 'Capra hircus laniger',
      origin: 'High-altitude plateaus of the Himalayas',
      characteristics: [
        'Ultra-fine diameter (14-16 microns)',
        'Exceptional softness and drape',
        'Natural temperature regulation',
        'Lightweight insulation',
      ],
      environment: 'Cashmere goats thrive at elevations above 3,500 meters, where cold winters stimulate the growth of their fine undercoat. The fiber is collected through combing during the spring molt.',
      traditionalUse: 'Historically reserved for royalty and religious ceremonies, cashmere has been traded along Himalayan routes for centuries.',
    },
    {
      name: 'Yak Wool',
      scientificName: 'Bos grunniens',
      origin: 'Tibetan plateau and high Himalayan valleys',
      characteristics: [
        'Fine down layer (18-20 microns)',
        'Highly durable outer coat',
        'Excellent moisture wicking',
        'Natural odor resistance',
      ],
      environment: 'Yaks are adapted to extreme conditions at 4,000+ meters, developing dual coats for survival. The fine undercoat is harvested during spring, separate from the coarse guard hair.',
      traditionalUse: 'Tibetan communities have used yak wool for centuries in tents, ropes, and heavy garments suited to harsh mountain climates.',
    },
    {
      name: 'Sheep Wool',
      scientificName: 'Ovis aries',
      origin: 'Mountain valleys of Nepal and Tibet',
      characteristics: [
        'Variable micron count by breed',
        'Natural crimp for elasticity',
        'Good moisture absorption',
        'Flame resistant properties',
      ],
      environment: 'Mountain sheep breeds have adapted to local conditions, producing wool suited to specific climates. Grazing on natural pasture contributes to fiber quality.',
      traditionalUse: 'Sheep wool forms the backbone of traditional Himalayan textiles — used in rugs, blankets, and everyday clothing across the region.',
    },
    {
      name: 'Allo (Himalayan Nettle)',
      scientificName: 'Girardinia diversifolia',
      origin: 'Mid-hill forests of Nepal',
      characteristics: [
        'Long, strong bast fibers',
        'Natural luster and texture',
        'Breathable and durable',
        'Biodegradable',
      ],
      environment: 'Allo grows wild in forest understories, requiring no cultivation, irrigation, or chemicals. Harvest involves cutting stems and extracting fiber through traditional retting methods.',
      traditionalUse: 'Indigenous communities have used allo for generations in fishing nets, bags, and traditional garments. Today, it represents a sustainable fiber future.',
    },
  ];

  return (
    <div className="bg-stone-50">
      {/* Header */}
      <section className="py-24 px-6 lg:px-12 border-b border-stone-200">
        <div className="max-w-6xl mx-auto">
          <p className="font-sans text-[10px] tracking-widest uppercase text-stone-500 mb-6">
            Materials Archive
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-stone-900 mb-8 leading-tight">
            Fibers
          </h1>
          <p className="font-sans text-sm text-stone-600 max-w-2xl leading-relaxed">
            The raw materials we work with — their origins, characteristics, and the environments that shape them.
          </p>
        </div>
      </section>

      {/* Fiber Sections */}
      {fibers.map((fiber, index) => (
        <section
          key={fiber.name}
          className={`py-32 px-6 lg:px-12 ${index % 2 === 1 ? 'bg-stone-100' : 'bg-stone-50'}`}
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              {/* Images */}
              <div className={`lg:col-span-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <MediaPlaceholder
                  type="image"
                  label={`${fiber.name} — landscape and origin environment`}
                  aspect="aspect-[4/3]"
                  className="rounded-sm mb-6"
                />
                <MediaPlaceholder
                  type="image"
                  label={`${fiber.name} fiber — macro detail, texture study`}
                  aspect="aspect-square"
                  className="rounded-sm"
                />
              </div>

              {/* Content */}
              <div className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:order-1 lg:col-start-1' : 'lg:col-start-7'}`}>
                <p className="font-sans text-[10px] tracking-widest uppercase text-stone-400 mb-2">
                  {fiber.scientificName}
                </p>
                <h2 className="font-serif text-3xl md:text-4xl font-light text-stone-900 mb-6">
                  {fiber.name}
                </h2>
                <p className="font-sans text-xs text-stone-500 mb-10">
                  {fiber.origin}
                </p>

                <div className="mb-10">
                  <p className="font-sans text-[10px] tracking-widest uppercase text-stone-400 mb-4">
                    Characteristics
                  </p>
                  <ul className="space-y-2">
                    {fiber.characteristics.map((char) => (
                      <li key={char} className="font-sans text-sm text-stone-600">
                        {char}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-10">
                  <p className="font-sans text-[10px] tracking-widest uppercase text-stone-400 mb-4">
                    Environment
                  </p>
                  <p className="font-sans text-sm text-stone-600 leading-relaxed">
                    {fiber.environment}
                  </p>
                </div>

                <div>
                  <p className="font-sans text-[10px] tracking-widest uppercase text-stone-400 mb-4">
                    Traditional Relevance
                  </p>
                  <p className="font-sans text-sm text-stone-600 leading-relaxed">
                    {fiber.traditionalUse}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Material Studies Gallery */}
      <section className="py-32 px-6 lg:px-12 bg-stone-900 text-stone-100">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="font-sans text-[10px] tracking-widest uppercase text-stone-400 mb-6">
              Material Studies
            </p>
            <h2 className="font-serif text-2xl md:text-3xl font-light text-stone-100">
              Fiber in detail
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <MediaPlaceholder
              type="image"
              label="Cashmere fiber microscopic"
              aspect="aspect-square"
              className="rounded-sm opacity-70"
            />
            <MediaPlaceholder
              type="image"
              label="Yak wool texture close-up"
              aspect="aspect-square"
              className="rounded-sm opacity-70"
            />
            <MediaPlaceholder
              type="image"
              label="Sheep wool crimp detail"
              aspect="aspect-square"
              className="rounded-sm opacity-70"
            />
            <MediaPlaceholder
              type="image"
              label="Allo fiber structure"
              aspect="aspect-square"
              className="rounded-sm opacity-70"
            />
          </div>
        </div>
      </section>

      {/* Climate Context */}
      <section className="py-32 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <p className="font-sans text-[10px] tracking-widest uppercase text-stone-500 mb-6">
                Climate Resilience
              </p>
            </div>
            <div className="lg:col-span-7">
              <h2 className="font-serif text-xl md:text-2xl font-light text-stone-900 mb-8 leading-snug">
                Natural fibers adapted to harsh conditions.
              </h2>
              <p className="font-sans text-sm text-stone-600 leading-relaxed mb-6">
                The fibers we work with evolved in some of the world's most challenging environments. This makes them inherently resilient — capable of withstanding extreme cold, regulating temperature, and lasting for decades with proper care.
              </p>
              <p className="font-sans text-sm text-stone-600 leading-relaxed">
                As climate patterns shift, these time-tested materials offer a sustainable alternative to petroleum-based synthetics. Natural fibers biodegrade at end of life, returning to the soil rather than accumulating as waste.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
