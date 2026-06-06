import SiteImage from '../components/SiteImage';
import SiteText from '../components/SiteText';
import PageMeta from '../components/PageMeta';

export default function Sourcing() {
  const sources = [
    {
      fiber: 'Cashmere',
      region: 'High-altitude plateaus of Dolpa and Mustang',
      animals: 'Chyangra goats, adapted to 4,000+ meter elevations',
      season: 'Spring combing season (March–May)',
      slot: 'cashmere-source',
      description: 'Chyangra goats live at elevations above 4,000 meters, where the cold winters push them to grow the fine undercoat that cashmere comes from. During spring, when the animals naturally begin to shed, herding families comb rather than shear which is a slower process that protects both the animal and the fiber.  We work with herding families who have maintained these breeds for generations, following protocols that protect animal health and fiber quality.',
    },
    {
      fiber: 'Yak Wool - Khullu',
      region: 'Mustang',
      animals: 'Chauri and pure yak herds',
      season: 'Spring harvest (April–June)',
      slot: 'yak-source',
      description: 'Yak down is collected during spring when animals shed their fine undercoat. The coarse guard hair is separated by hand, leaving the soft down for textile use. Herders rotate grazing according to traditional patterns that preserve pasture health.',
    },
    {
      fiber: 'Sheep Wool',
      region: 'Mid-elevation valleys across Nepal',
      animals: 'Local mountain breeds and crossbreeds',
      season: 'Annual shearing (usually pre-monsoon)',
      slot: 'sheep-source',
      description: 'Sheep are shorn annually, with wool quality varying by breed and grazing conditions. We work with shepherd communities who move their flocks seasonally between grazing areas.',
    },
    {
      fiber: 'Himalayan Nettle - Allo',
      region: 'Community forests in mid-hill regions',
      animals: 'Girardinia diversifolia (wild Himalayan nettle)',
      season: 'Harvest cycle aligned with plant maturity',
      slot: 'allo-source',
      description: 'Allo is harvested from wild-growing plants in forest understories. Community groups cut stems, strip bark, and process fiber through traditional retting and beating methods. No cultivation or chemicals are involved.',
    },
  ];

  return (
    <div className="bg-stone-50">
      <PageMeta title="Fiber Sourcing — Exclusive Crafts" description="How we source cashmere, yak, sheep wool, and allo fiber directly from Himalayan herders and communities." />
      {/* Header */}
      <section className="py-16 px-6 lg:px-12 border-b border-stone-200">
        <div className="max-w-6xl mx-auto">
          <p className="font-sans text-[10px] tracking-widest uppercase text-stone-500 mb-4">Origins</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-stone-900 mb-5 leading-tight">Sourcing</h1>
          <p className="font-sans text-base text-stone-600 max-w-2xl leading-relaxed">
            <SiteText page="sourcing" slot="page-intro" defaultContent="How and where we obtain our fibers: the landscapes, animals, and communities at the beginning of the supply chain." />
          </p>
        </div>
      </section>

      {/* Approach */}
      <section className="py-16 px-6 lg:px-12 bg-stone-100">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <p className="font-sans text-[10px] tracking-widest uppercase text-stone-500 mb-4 lg:sticky lg:top-28">Approach</p>
            </div>
            <div className="lg:col-span-7">
              <p className="font-sans text-base text-stone-600 leading-relaxed mb-4">
                  <SiteText page="sourcing" slot="approach-body" defaultContent="We source fiber directly from herding families and community groups, maintaining personal knowledge of animals, grazing practices, and harvest methods allowing us genuine traceability and fair terms." />
                </p>
              <p className="font-sans text-base text-stone-600 leading-relaxed">
                  Each fiber type comes from a distinct environment with its own climate, seasonality, and traditional knowledge. Understanding these origins is essential to producing quality textiles.
                </p>
            </div>
          </div>
        </div>
      </section>

      {/* Source Sections */}
      {sources.map((source, index) => (
        <section key={source.fiber} className={`py-20 px-6 lg:px-12 ${index % 2 === 0 ? 'bg-stone-50' : 'bg-stone-100'}`}>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
              <div className={`lg:col-span-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <SiteImage page="sourcing" slot={source.slot} fallbackLabel={`${source.fiber} sourcing landscape`} aspect="aspect-[4/3]" className="rounded-sm" />
              </div>
              <div className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:order-1 lg:col-start-1' : 'lg:col-start-7'}`}>
                <h2 className="font-serif text-3xl md:text-4xl font-light text-stone-900 mb-6">{source.fiber}</h2>
                <div className="space-y-5">
                  <div>
                    <p className="font-sans text-[10px] tracking-widest uppercase text-stone-400 mb-1">Region</p>
                    <p className="font-sans text-base text-stone-600">{source.region}</p>
                  </div>
                  <div>
                    <p className="font-sans text-[10px] tracking-widest uppercase text-stone-400 mb-1">Animals / Plants</p>
                    <p className="font-sans text-base text-stone-600">{source.animals}</p>
                  </div>
                  <div>
                    <p className="font-sans text-[10px] tracking-widest uppercase text-stone-400 mb-1">Season</p>
                    <p className="font-sans text-base text-stone-600">{source.season}</p>
                  </div>
                  <div>
                    <p className="font-sans text-[10px] tracking-widest uppercase text-stone-400 mb-1">Process</p>
                    <p className="font-sans text-base text-stone-600 leading-relaxed">{source.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Traceability */}
      <section className="py-20 px-6 lg:px-12 bg-stone-900 text-stone-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <SiteImage page="sourcing" slot="herder-portrait" fallbackLabel="Herder documentary portrait" aspect="aspect-[4/5]" className="rounded-sm opacity-70" />
            <div>
              <p className="font-sans text-[10px] tracking-widest uppercase text-stone-400 mb-5">Traceability</p>
              <h2 className="font-serif text-2xl md:text-3xl font-light text-stone-100 mb-6 leading-snug">Knowing the origin.</h2>
              <p className="font-sans text-base text-stone-300 leading-relaxed mb-4">
                We maintain records connecting each fiber lot to its source; the herder, the region, the season to ensure traceability.
              </p>
              <p className="font-sans text-base text-stone-300 leading-relaxed">
                When you handle our textiles, you are handling material with a known lineage from specific animals and landscapes to finished product.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Animal Welfare */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <p className="font-sans text-[10px] tracking-widest uppercase text-stone-500 mb-4">Animal Welfare</p>
            </div>
            <div className="lg:col-span-7">
              <p className="font-sans text-base text-stone-600 leading-relaxed mb-4">
                Our herding families follow practices that prioritize animal health: proper nutrition, seasonal grazing rotation, and low-stress handling.
              </p>
              <SiteImage page="sourcing" slot="welfare-goats" fallbackLabel="Healthy goats grazing" aspect="aspect-video" className="rounded-sm mt-6" />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 px-6 lg:px-12 bg-stone-100">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <p className="font-sans text-[10px] tracking-widest uppercase text-stone-500 mb-4">From the Field</p>
            <h2 className="font-serif text-2xl md:text-3xl font-light text-stone-900">Sourcing </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {(['field-1','field-2','field-3','field-4'] as const).map((slot, i) => (
              <SiteImage key={slot} page="sourcing" slot={slot} fallbackLabel={`Field photo ${i+1}`} aspect="aspect-square" className="rounded-sm" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
