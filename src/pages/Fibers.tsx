import SiteImage from '../components/SiteImage';
import PageMeta from '../components/PageMeta';

export default function Fibers() {
  const fibers = [
    {
      name: 'Cashmere',
      scientificName: 'Capra hircus laniger',
      origin: 'High-altitude plateaus of the Himalayas',
      landscapeSlot: 'cashmere-landscape',
      macroSlot: 'cashmere-macro',
      characteristics: ['Ultra-fine diameter (14–16 microns)', 'Exceptional softness and drape', 'Natural temperature regulation', 'Lightweight insulation'],
      environment: 'Cashmere goats thrive at elevations above 3,500 meters, where cold winters stimulate the growth of their fine undercoat. The fiber is collected through combing during the spring molt.',
      traditionalUse: 'Historically reserved for royalty and religious ceremonies, cashmere has been traded along Himalayan routes for centuries.',
    },
    {
      name: 'Yak Wool',
      scientificName: 'Bos grunniens',
      origin: 'Tibetan plateau and high Himalayan valleys',
      landscapeSlot: 'yak-landscape',
      macroSlot: 'yak-macro',
      characteristics: ['Fine down layer (18–20 microns)', 'Highly durable outer coat', 'Excellent moisture wicking', 'Natural odor resistance'],
      environment: 'Yaks are adapted to extreme conditions at 4,000+ meters, developing dual coats for survival. The fine undercoat is harvested during spring, separate from the coarse guard hair.',
      traditionalUse: 'Tibetan communities have used yak wool for centuries in tents, ropes, and heavy garments suited to harsh mountain climates.',
    },
    {
      name: 'Sheep Wool',
      scientificName: 'Ovis aries',
      origin: 'Mountain valleys of Nepal and Tibet',
      landscapeSlot: 'sheep-landscape',
      macroSlot: 'sheep-macro',
      characteristics: ['Variable micron count by breed', 'Natural crimp for elasticity', 'Good moisture absorption', 'Flame resistant properties'],
      environment: 'Mountain sheep breeds have adapted to local conditions, producing wool suited to specific climates. Grazing on natural pasture contributes to fiber quality.',
      traditionalUse: 'Sheep wool forms the backbone of traditional Himalayan textiles — used in rugs, blankets, and everyday clothing across the region.',
    },
    {
      name: 'Allo (Himalayan Nettle)',
      scientificName: 'Girardinia diversifolia',
      origin: 'Mid-hill forests of Nepal',
      landscapeSlot: 'allo-landscape',
      macroSlot: 'allo-macro',
      characteristics: ['Long, strong bast fibers', 'Natural luster and texture', 'Breathable and durable', 'Biodegradable'],
      environment: 'Allo grows wild in forest understories, requiring no cultivation, irrigation, or chemicals. Harvest involves cutting stems and extracting fiber through traditional retting methods.',
      traditionalUse: 'Indigenous communities have used allo for generations in fishing nets, bags, and traditional garments. Today, it represents a sustainable fiber future.',
    },
  ];

  return (
    <div className="bg-stone-50">
      <PageMeta title="Himalayan Fibers — Cashmere, Yak, Sheep & Allo" description="Explore the four Himalayan natural fibers we work with: cashmere, yak wool, sheep wool, and allo nettle fiber." />
      {/* Header */}
      <section className="py-16 px-6 lg:px-12 border-b border-stone-200">
        <div className="max-w-6xl mx-auto">
          <p className="font-sans text-[10px] tracking-widest uppercase text-stone-500 mb-4">Materials Archive</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-stone-900 mb-5 leading-tight">Fibers</h1>
          <p className="font-sans text-base text-stone-600 max-w-2xl leading-relaxed">
            The raw materials we work with — their origins, characteristics, and the environments that shape them.
          </p>
        </div>
      </section>

      {/* Fiber Sections */}
      {fibers.map((fiber, index) => (
        <section key={fiber.name} className={`py-20 px-6 lg:px-12 ${index % 2 === 1 ? 'bg-stone-100' : 'bg-stone-50'}`}>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
              <div className={`lg:col-span-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <SiteImage page="fibers" slot={fiber.landscapeSlot} fallbackLabel={`${fiber.name} landscape`} aspect="aspect-[4/3]" className="rounded-sm mb-5" />
                <SiteImage page="fibers" slot={fiber.macroSlot} fallbackLabel={`${fiber.name} fiber macro`} aspect="aspect-square" className="rounded-sm" />
              </div>
              <div className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:order-1 lg:col-start-1' : 'lg:col-start-7'}`}>
                <p className="font-sans text-[10px] tracking-widest uppercase text-stone-400 mb-1">{fiber.scientificName}</p>
                <h2 className="font-serif text-3xl md:text-4xl font-light text-stone-900 mb-4">{fiber.name}</h2>
                <p className="font-sans text-sm text-stone-500 mb-8">{fiber.origin}</p>
                <div className="mb-8">
                  <p className="font-sans text-[10px] tracking-widest uppercase text-stone-400 mb-3">Characteristics</p>
                  <ul className="space-y-1.5">
                    {fiber.characteristics.map((c) => (
                      <li key={c} className="font-sans text-base text-stone-600">{c}</li>
                    ))}
                  </ul>
                </div>
                <div className="mb-8">
                  <p className="font-sans text-[10px] tracking-widest uppercase text-stone-400 mb-3">Environment</p>
                  <p className="font-sans text-base text-stone-600 leading-relaxed">{fiber.environment}</p>
                </div>
                <div>
                  <p className="font-sans text-[10px] tracking-widest uppercase text-stone-400 mb-3">Traditional Relevance</p>
                  <p className="font-sans text-base text-stone-600 leading-relaxed">{fiber.traditionalUse}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Material Studies */}
      <section className="py-20 px-6 lg:px-12 bg-stone-900 text-stone-100">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <p className="font-sans text-[10px] tracking-widest uppercase text-stone-400 mb-4"> </p>
            <h2 className="font-serif text-2xl md:text-3xl font-light text-stone-100">Fiber in detail</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {(['study-1','study-2','study-3','study-4'] as const).map((slot, i) => (
              <SiteImage key={slot} page="fibers" slot={slot} fallbackLabel={`Material study ${i+1}`} aspect="aspect-square" className="rounded-sm opacity-70" />
            ))}
          </div>
        </div>
      </section>

      {/* Climate Context */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <p className="font-sans text-[10px] tracking-widest uppercase text-stone-500 mb-4">Climate Resilience</p>
            </div>
            <div className="lg:col-span-7">
              <h2 className="font-serif text-xl md:text-2xl font-light text-stone-900 mb-6 leading-snug">Natural fibers adapted to harsh conditions.</h2>
              <p className="font-sans text-base text-stone-600 leading-relaxed mb-4">
                Cashmere goats, yaks, and mountain sheep have lived at altitude for thousands of years, developing coats that insulate, regulate, and breathe naturally. These qualities come from animals and landscapes shaping each other over a very long time not from any manufacturing process. 
              </p>
              <p className="font-sans text-base text-stone-600 leading-relaxed">
                As the pressure to replace natural materials grows, we think there's something worth holding onto here. Fibers that come from the land, and return to it.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
