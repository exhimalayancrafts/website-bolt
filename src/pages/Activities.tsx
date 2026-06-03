import SiteImage from '../components/SiteImage';
import SiteText from '../components/SiteText';
import SiteVideo from '../components/SiteVideo';
import SiteLink from '../components/SiteLink';

export default function Activities() {
  const events = [
    { year: '2024', name: 'International Textile Fair', location: 'Tokyo, Japan', type: 'Trade Fair' },
    { year: '2024', name: 'Himalayan Fiber Conference', location: 'Kathmandu, Nepal', type: 'Conference' },
    { year: '2023', name: 'Natural Fiber Expo', location: 'Frankfurt, Germany', type: 'Trade Fair' },
    { year: '2023', name: 'Sustainable Textiles Summit', location: 'Copenhagen, Denmark', type: 'Conference' },
    { year: '2023', name: 'Craftsmanship Exhibition', location: 'London, UK', type: 'Exhibition' },
  ];

  const associations = [
    { name: 'Nepal Cashmere Industries Association', role: 'Board Member' },
    { name: 'Himalayan Wool Development Board', role: 'Advisory Committee' },
    { name: 'International Natural Fiber Organization', role: 'Member' },
    { name: 'South Asian Textile Alliance', role: 'Founding Member' },
  ];

  return (
    <div className="bg-stone-50">
      {/* Header */}
      <section className="py-16 px-6 lg:px-12 border-b border-stone-200">
        <div className="max-w-6xl mx-auto">
          <p className="font-sans text-[10px] tracking-widest uppercase text-stone-500 mb-4">Engagement</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-stone-900 mb-5 leading-tight">Activities</h1>
          <p className="font-sans text-base text-stone-600 max-w-2xl leading-relaxed">
            <SiteText page="activities" slot="page-intro" defaultContent="Industry participation, events, and collaborations that connect our work to the broader textile ecosystem." />
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-6 lg:px-12 bg-stone-100">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <p className="font-sans text-[10px] tracking-widest uppercase text-stone-500 mb-4 lg:sticky lg:top-28">Industry Presence</p>
            </div>
            <div className="lg:col-span-7">
              <p className="font-sans text-base text-stone-600 leading-relaxed mb-4">
                <SiteText page="activities" slot="industry-body" defaultContent="Over two decades, we have built relationships across the global textile industry — participating in international trade fairs, contributing to industry associations, and collaborating with research institutions." />
              </p>
              <p className="font-sans text-base text-stone-600 leading-relaxed">
                This engagement keeps us connected to market developments, sustainability standards, and emerging fiber technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Events Table */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <p className="font-sans text-[10px] tracking-widest uppercase text-stone-500 mb-4">Events</p>
            <h2 className="font-serif text-2xl md:text-3xl font-light text-stone-900">Recent participation</h2>
          </div>
          <div className="space-y-px bg-stone-300 mb-10">
            {events.map((e) => (
              <div key={`${e.year}-${e.name}`} className="bg-stone-50 p-6 lg:p-8 flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-10">
                <div className="lg:w-16 flex-shrink-0">
                  <p className="font-sans text-xs text-stone-400">{e.year}</p>
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-lg font-medium text-stone-900 mb-0.5">{e.name}</h3>
                  <p className="font-sans text-sm text-stone-600">{e.location}</p>
                </div>
                <div className="lg:w-28 flex-shrink-0">
                  <span className="font-sans text-xs text-stone-400 uppercase tracking-wide">{e.type}</span>
                </div>
              </div>
            ))}
          </div>
          <SiteImage page="activities" slot="trade-fair" fallbackLabel="Trade fair booth" aspect="aspect-video" className="rounded-sm" />
          {/* Trade fair reel video — shown if a URL is added in admin */}
          <SiteVideo page="activities" slot="trade-fair-reel" className="mt-6" />
          <div className="flex flex-wrap gap-4 mt-6">
            <SiteLink page="activities" slot="event-1-link" defaultHref="" defaultLinkText="Learn More"
              className="font-sans text-sm text-stone-700 hover:text-stone-900 transition-colors" />
            <SiteLink page="activities" slot="event-2-link" defaultHref="" defaultLinkText="Learn More"
              className="font-sans text-sm text-stone-700 hover:text-stone-900 transition-colors" />
          </div>
        </div>
      </section>

      {/* Associations */}
      <section className="py-20 px-6 lg:px-12 bg-stone-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="font-sans text-[10px] tracking-widest uppercase text-stone-500 mb-4">Associations</p>
              <h2 className="font-serif text-2xl md:text-3xl font-light text-stone-900 mb-6 leading-snug">Active membership in industry organizations.</h2>
              <p className="font-sans text-base text-stone-600 leading-relaxed">
                We hold positions in trade associations, development boards, and international fiber organizations — contributing our experience to strengthen the broader ecosystem.
              </p>
            </div>
            <div className="space-y-6">
              {associations.map((a) => (
                <div key={a.name} className="border-l-2 border-stone-300 pl-6">
                  <p className="font-serif text-base font-medium text-stone-900 mb-0.5">{a.name}</p>
                  <p className="font-sans text-sm text-stone-500">{a.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <p className="font-sans text-[10px] tracking-widest uppercase text-stone-500 mb-4">Programs</p>
            <h2 className="font-serif text-2xl md:text-3xl font-light text-stone-900">Initiatives and workshops</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-stone-300">
            {[
              { title: 'Artisan Training Program', desc: 'Annual training program for new artisans, covering fiber knowledge, weaving techniques, and quality standards. Open to community members interested in textile careers.' },
              { title: 'Allo Fiber Development', desc: 'Research partnership exploring the potential of wild nettle fiber, including sustainable harvesting methods and textile applications.' },
              { title: 'Sustainability Workshops', desc: 'Regular workshops for staff and partners on environmental practices — from water conservation to natural dye techniques.' },
              { title: 'International Collaborations', desc: 'Research partnerships with universities and textile institutes, focused on fiber quality, traceability, and sustainable production methods.' },
            ].map((item) => (
              <div key={item.title} className="bg-stone-50 p-8 min-h-[200px]">
                <h3 className="font-serif text-lg font-medium text-stone-900 mb-3">{item.title}</h3>
                <p className="font-sans text-base text-stone-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Documentation */}
      <section className="py-20 px-6 lg:px-12 bg-stone-900 text-stone-100">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <p className="font-sans text-[10px] tracking-widest uppercase text-stone-400 mb-4">Documentation</p>
            <h2 className="font-serif text-2xl md:text-3xl font-light text-stone-100">Selected events</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <SiteImage page="activities" slot="event-1" fallbackLabel="Exhibition opening" aspect="aspect-[4/3]" className="rounded-sm opacity-70" />
            <SiteImage page="activities" slot="event-2" fallbackLabel="Panel discussion" aspect="aspect-[4/3]" className="rounded-sm opacity-70" />
            <SiteImage page="activities" slot="event-3" fallbackLabel="Workshop session" aspect="aspect-[4/3]" className="rounded-sm opacity-70" />
          </div>
          {/* Optional panel recording video */}
          <SiteVideo page="activities" slot="panel-recording" className="mt-8" />
          <div className="flex flex-wrap gap-6 mt-6">
            <SiteLink page="activities" slot="press-feature-1" defaultHref="" defaultLinkText="Read Article"
              className="font-sans text-sm text-stone-300 hover:text-stone-100 transition-colors" />
            <SiteLink page="activities" slot="press-feature-2" defaultHref="" defaultLinkText="Read Article"
              className="font-sans text-sm text-stone-300 hover:text-stone-100 transition-colors" />
          </div>
        </div>
      </section>
    </div>
  );
}
