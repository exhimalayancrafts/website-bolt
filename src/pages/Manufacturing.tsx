import MediaPlaceholder from '../components/MediaPlaceholder';

export default function Manufacturing() {
  const processes = [
    {
      stage: 'Fiber Sorting',
      description: 'Raw fiber arrives at our facility for hand-sorting. Experienced graders separate fibers by color, length, and fineness, removing impurities and ensuring consistent quality.',
      key_points: ['Hand sorting by trained graders', 'Color and quality separation', 'Contamination removal', 'Lot tracking begins'],
    },
    {
      stage: 'Carding',
      description: 'Fibers are opened, aligned, and cleaned through carding machines. This process removes remaining impurities and prepares fiber for spinning.',
      key_points: ['Mechanical carding', 'Fiber alignment', 'Further cleaning', 'Sliver formation'],
    },
    {
      stage: 'Spinning',
      description: 'Carded fiber is spun into yarn using both traditional hand-spinning for premium lines and machine spinning for consistency in larger volumes.',
      key_points: ['Hand spinning for fine yarns', 'Machine spinning for consistency', 'Multiple yarn weights', 'Twist specification'],
    },
    {
      stage: 'Weaving',
      description: 'Yarn is woven into fabric on handlooms and powerlooms. Weaving patterns, tension, and density are controlled to specification.',
      key_points: ['Handloom weaving', 'Powerloom capability', 'Pattern development', 'Quality monitoring'],
    },
    {
      stage: 'Dyeing',
      description: 'Where required, fabrics are dyed using both natural and low-impact synthetic dyes. We prefer natural tones and undyed fiber where possible.',
      key_points: ['Natural dye options', 'Low-impact synthetics', 'Color matching', 'Minimize chemical use'],
    },
    {
      stage: 'Finishing',
      description: 'Woven fabrics are washed, brushed, and finished by hand. Final inspection catches any defects before products are prepared for shipment.',
      key_points: ['Hand finishing', 'Quality inspection', 'Hand-twisted fringes', 'Final measurements'],
    },
  ];

  return (
    <div className="bg-stone-50">
      {/* Header */}
      <section className="py-24 px-6 lg:px-12 border-b border-stone-200">
        <div className="max-w-6xl mx-auto">
          <p className="font-sans text-[10px] tracking-widest uppercase text-stone-500 mb-6">
            Production
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-stone-900 mb-8 leading-tight">
            Manufacturing
          </h1>
          <p className="font-sans text-sm text-stone-600 max-w-2xl leading-relaxed">
            We own and operate our production facilities in Kathmandu, maintaining direct oversight from raw fiber to finished product.
          </p>
        </div>
      </section>

      {/* Workshop Intro */}
      <section className="py-32 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <MediaPlaceholder
                type="image"
                label="Manufacturing facility — overview, looms, workspace"
                aspect="aspect-[4/3]"
                className="rounded-sm"
              />
            </div>
            <div>
              <p className="font-sans text-[10px] tracking-widest uppercase text-stone-500 mb-6">
                Facilities
              </p>
              <h2 className="font-serif text-2xl md:text-3xl font-light text-stone-900 mb-8 leading-snug">
                Owned production, direct control.
              </h2>
              <p className="font-sans text-sm text-stone-600 leading-relaxed mb-6">
                Unlike many operators who outsource manufacturing, we own our facilities in Kathmandu Valley. This allows us to control quality at every stage, ensure fair working conditions, and maintain consistent standards.
              </p>
              <p className="font-sans text-sm text-stone-600 leading-relaxed">
                Our workshops combine traditional handwork with quality-controlled modern processes. Hand-spinning zones sit alongside machine carding lines. Handlooms operate in parallel with finishing equipment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Stages */}
      <section className="py-32 px-6 lg:px-12 bg-stone-100">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="font-sans text-[10px] tracking-widest uppercase text-stone-500 mb-6">
              Process
            </p>
            <h2 className="font-serif text-2xl md:text-3xl font-light text-stone-900">
              From fiber to finished product
            </h2>
          </div>

          <div className="space-y-px bg-stone-300">
            {processes.map((process) => (
              <div key={process.stage} className="bg-stone-50 p-10 lg:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  <div className="lg:col-span-3">
                    <h3 className="font-serif text-lg font-medium text-stone-900 mb-4">
                      {process.stage}
                    </h3>
                  </div>
                  <div className="lg:col-span-6">
                    <p className="font-sans text-sm text-stone-600 leading-relaxed mb-6">
                      {process.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {process.key_points.map((point) => (
                        <span
                          key={point}
                          className="font-sans text-xs text-stone-500 bg-stone-100 px-3 py-1 rounded-full"
                        >
                          {point}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop Gallery */}
      <section className="py-32 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="font-sans text-[10px] tracking-widest uppercase text-stone-500 mb-6">
              In the Workshop
            </p>
            <h2 className="font-serif text-2xl md:text-3xl font-light text-stone-900">
              Production in detail
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <MediaPlaceholder
              type="image"
              label="Carding process — fiber transformation"
              aspect="aspect-[4/3]"
              className="rounded-sm"
            />
            <MediaPlaceholder
              type="image"
              label="Spinning — hand spindle or machine"
              aspect="aspect-[4/3]"
              className="rounded-sm"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <MediaPlaceholder
              type="image"
              label="Loom area — weaving in progress"
              aspect="aspect-[3/4]"
              className="rounded-sm"
            />
            <MediaPlaceholder
              type="image"
              label="Dye vats — natural dye work"
              aspect="aspect-[3/4]"
              className="rounded-sm"
            />
            <MediaPlaceholder
              type="image"
              label="Finishing — hand inspection"
              aspect="aspect-[3/4]"
              className="rounded-sm"
            />
          </div>
        </div>
      </section>

      {/* Quality Control */}
      <section className="py-32 px-6 lg:px-12 bg-stone-900 text-stone-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-sans text-[10px] tracking-widest uppercase text-stone-400 mb-8">
                Quality Control
              </p>
              <h2 className="font-serif text-2xl md:text-3xl font-light text-stone-100 mb-8 leading-snug">
                Standards maintained through direct oversight.
              </h2>
              <p className="font-sans text-sm text-stone-300 leading-relaxed mb-6">
                Every production lot passes through quality checkpoints: fiber testing, yarn inspection, fabric grading, and final product review. Defects are identified and addressed at each stage.
              </p>
              <p className="font-sans text-sm text-stone-300 leading-relaxed">
                This systematic approach — combined with the skill of experienced artisans — ensures that finished products meet specifications and last for years of use.
              </p>
            </div>
            <div>
              <MediaPlaceholder
                type="image"
                label="Quality inspection — checking fabric, documenting"
                aspect="aspect-[4/3]"
                className="rounded-sm opacity-70"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="py-32 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <p className="font-sans text-[10px] tracking-widest uppercase text-stone-500 mb-6 lg:sticky lg:top-32">
                Capability
              </p>
            </div>
            <div className="lg:col-span-7">
              <h2 className="font-serif text-xl md:text-2xl font-light text-stone-900 mb-10 leading-snug">
                Combining traditional craft with modern equipment.
              </h2>

              <div className="space-y-8">
                <div className="border-l border-stone-300 pl-6">
                  <h3 className="font-serif text-base font-medium text-stone-900 mb-2">Handlooms</h3>
                  <p className="font-sans text-sm text-stone-600">Traditional pit looms for fine weaving, allowing maximum control over tension and pattern.</p>
                </div>

                <div className="border-l border-stone-300 pl-6">
                  <h3 className="font-serif text-base font-medium text-stone-900 mb-2">Carding Machines</h3>
                  <p className="font-sans text-sm text-stone-600">Modern carding equipment for consistent fiber preparation at scale.</p>
                </div>

                <div className="border-l border-stone-300 pl-6">
                  <h3 className="font-serif text-base font-medium text-stone-900 mb-2">Spinning Systems</h3>
                  <p className="font-sans text-sm text-stone-600">Both hand spinning stations and machine spinning for different product requirements.</p>
                </div>

                <div className="border-l border-stone-300 pl-6">
                  <h3 className="font-serif text-base font-medium text-stone-900 mb-2">Finishing Equipment</h3>
                  <p className="font-sans text-sm text-stone-600">Washing, brushing, and pressing equipment for final fabric preparation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Film Strip */}
      <section className="py-20 px-6 lg:px-12 bg-stone-100">
        <div className="max-w-6xl mx-auto">
          <MediaPlaceholder
            type="video"
            label="Manufacturing process — documentary short"
            aspect="aspect-video"
            className="rounded-sm"
          />
        </div>
      </section>
    </div>
  );
}
