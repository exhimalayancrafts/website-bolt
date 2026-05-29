import MediaPlaceholder from '../components/MediaPlaceholder';

export default function Community() {
  const profiles = [
    {
      role: 'Master Weaver',
      location: 'Lalitpur',
      quote: 'I learned weaving from my mother. Now my daughter works beside me. The patterns we weave are the same my grandmother knew.',
    },
    {
      role: 'Spinner',
      location: 'Bhaktapur',
      quote: 'Hand-spinning requires patience. You learn to feel the fiber — when it is too dry, when it needs more twist. Machines cannot do this.',
    },
    {
      role: 'Quality Inspector',
      location: 'Kathmandu',
      quote: 'I check every piece that leaves the workshop. My eyes know what to look for — the evenness of weave, the consistency of color.',
    },
    {
      role: 'Fiber Sorter',
      location: 'Kathmandu',
      quote: 'Sorting is delicate work. You separate by feel — the finest fiber from the acceptable, the pure from the mixed. It takes years to learn.',
    },
  ];

  return (
    <div className="bg-stone-50">
      {/* Header */}
      <section className="py-24 px-6 lg:px-12 border-b border-stone-200">
        <div className="max-w-6xl mx-auto">
          <p className="font-sans text-[10px] tracking-widest uppercase text-stone-500 mb-6">
            People
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-stone-900 mb-8 leading-tight">
            Community
          </h1>
          <p className="font-sans text-sm text-stone-600 max-w-2xl leading-relaxed">
            The artisans behind our textiles — their skills, their stories, and their contributions to the work.
          </p>
        </div>
      </section>

      {/* Opening Statement */}
      <section className="py-32 px-6 lg:px-12 bg-stone-100">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <p className="font-sans text-[10px] tracking-widest uppercase text-stone-500 mb-6 lg:sticky lg:top-32">
                Our Approach
              </p>
            </div>
            <div className="lg:col-span-7">
              <p className="font-sans text-sm text-stone-600 leading-relaxed mb-6">
                We employ over 200 artisans — weavers, spinners, sorters, finishers, and supervisors — many of whom have worked with us for decades. Their knowledge shapes every product we make.
              </p>
              <p className="font-sans text-sm text-stone-600 leading-relaxed">
                Our role is to provide stable work, fair compensation, and conditions that respect skill. We do not frame this as charity or assistance. It is simply how decent work should be organized.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Women Artisans */}
      <section className="py-32 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <MediaPlaceholder
              type="image"
              label="Women artisans at work — weaving, natural light, documentary"
              aspect="aspect-[4/5]"
              className="rounded-sm"
            />
            <div>
              <p className="font-sans text-[10px] tracking-widest uppercase text-stone-500 mb-6">
                Women's Work
              </p>
              <h2 className="font-serif text-2xl md:text-3xl font-light text-stone-900 mb-8 leading-snug">
                Majority women-led production.
              </h2>
              <p className="font-sans text-sm text-stone-600 leading-relaxed mb-6">
                Over 60% of our workforce are women — many heading households, supporting families, and maintaining craft traditions passed through generations of mothers and daughters.
              </p>
              <p className="font-sans text-sm text-stone-600 leading-relaxed mb-6">
                Weaving, spinning, and finishing have historically been women's work in this region. We support this tradition through fair wages, skills development, and leadership pathways.
              </p>
              <p className="font-sans text-sm text-stone-600 leading-relaxed">
                The economics matter: when women control income, household spending shifts toward education, health, and long-term stability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Voices / Profiles */}
      <section className="py-32 px-6 lg:px-12 bg-stone-100">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="font-sans text-[10px] tracking-widest uppercase text-stone-500 mb-6">
              Voices
            </p>
            <h2 className="font-serif text-2xl md:text-3xl font-light text-stone-900">
              In their own words
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-stone-300">
            {profiles.map((profile) => (
              <div key={profile.role} className="bg-stone-50 p-10 lg:p-12 min-h-[300px]">
                <p className="font-serif text-lg font-medium text-stone-900 mb-2">
                  {profile.role}
                </p>
                <p className="font-sans text-xs text-stone-400 mb-8">
                  {profile.location}
                </p>
                <blockquote className="font-sans text-sm text-stone-600 leading-relaxed italic">
                  "{profile.quote}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Generations */}
      <section className="py-32 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <MediaPlaceholder
                type="image"
                label="Mother and daughter artisans — workshop context"
                aspect="aspect-[4/5]"
                className="rounded-sm"
              />
            </div>
            <div className="lg:col-span-6">
              <p className="font-sans text-[10px] tracking-widest uppercase text-stone-500 mb-6">
                Knowledge Transfer
              </p>
              <h2 className="font-serif text-2xl md:text-3xl font-light text-stone-900 mb-8 leading-snug">
                Skills passed through generations.
              </h2>
              <p className="font-sans text-sm text-stone-600 leading-relaxed mb-6">
                Textile knowledge in the Himalayas is largely oral — learned through observation, practice, and correction. We support this transmission by pairing experienced artisans with younger workers, maintaining the continuity of craft.
              </p>
              <p className="font-sans text-sm text-stone-600 leading-relaxed">
                Many of our weavers learned from their mothers, who learned from theirs. This intergenerational continuity is valuable, and we work to protect it against the pressures of modernization and urban migration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Documentary Gallery */}
      <section className="py-32 px-6 lg:px-12 bg-stone-900 text-stone-100">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="font-sans text-[10px] tracking-widest uppercase text-stone-400 mb-6">
              A Day in the Workshop
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <MediaPlaceholder
              type="image"
              label="Morning preparation"
              aspect="aspect-[3/4]"
              className="rounded-sm opacity-70"
            />
            <MediaPlaceholder
              type="image"
              label="Midday weaving"
              aspect="aspect-[3/4]"
              className="rounded-sm opacity-70"
            />
            <MediaPlaceholder
              type="image"
              label="Finishing work"
              aspect="aspect-[3/4]"
              className="rounded-sm opacity-70"
            />
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section className="py-32 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <p className="font-sans text-[10px] tracking-widest uppercase text-stone-500 mb-6 lg:sticky lg:top-32">
                Working Conditions
              </p>
            </div>
            <div className="lg:col-span-7">
              <h2 className="font-serif text-xl md:text-2xl font-light text-stone-900 mb-10 leading-snug">
                Organized with respect.
              </h2>

              <div className="space-y-8">
                <div>
                  <p className="font-sans text-sm text-stone-600 leading-relaxed">
                    <strong className="font-medium text-stone-800">Wages above minimum</strong> — All workers receive compensation above the national minimum, with additional premiums for specialized skills.
                  </p>
                </div>

                <div>
                  <p className="font-sans text-sm text-stone-600 leading-relaxed">
                    <strong className="font-medium text-stone-800">Regular hours</strong> — Fixed work schedules with overtime compensation. No informal labor arrangements.
                  </p>
                </div>

                <div>
                  <p className="font-sans text-sm text-stone-600 leading-relaxed">
                    <strong className="font-medium text-stone-800">Health provisions</strong> — Basic health coverage, eye care for detail workers, and ergonomic workspace design to prevent repetitive strain.
                  </p>
                </div>

                <div>
                  <p className="font-sans text-sm text-stone-600 leading-relaxed">
                    <strong className="font-medium text-stone-800">No child labor</strong> — Strict policy with verification. We support education for children of workers instead.
                  </p>
                </div>

                <div>
                  <p className="font-sans text-sm text-stone-600 leading-relaxed">
                    <strong className="font-medium text-stone-800">Long-term employment</strong> — We prioritize retention. Many workers have been with us 10+ years.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
