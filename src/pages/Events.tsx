import { Link } from 'react-router-dom';
import { Calendar, Users, Network, MapPin, ArrowRight } from 'lucide-react';
import MediaPlaceholder from '../components/MediaPlaceholder';

export default function Events() {
  const eventCategories = [
    {
      icon: MapPin,
      title: 'Trade Fairs',
      button: 'View Participation',
      color: 'terracotta',
      description: 'We participate in major international textile and craft fairs, showcasing our collections and connecting with buyers worldwide.',
      events: [
        'International Fiber Expo — Tokyo',
        'Textile Design Fair — Mumbai',
        'Craft & Heritage Market — London',
        'Himalayan Artisans Summit — Kathmandu',
      ],
    },
    {
      icon: Network,
      title: 'Industry Collaborations',
      button: 'Our Network',
      color: 'himalaya',
      description: 'Strategic partnerships with designers, brands, and sustainability organizations amplify our impact and innovation.',
      events: [
        'Sustainable Fashion Consortium',
        'Himalayan Heritage Collective',
        'Fair Trade Fiber Alliance',
        'Artisan Cooperative Network',
      ],
    },
    {
      icon: Calendar,
      title: 'Training Programs',
      button: 'Community Initiatives',
      color: 'spice',
      description: 'Free workshops and apprenticeships ensuring the next generation of artisans can thrive with traditional and modern skills.',
      events: [
        'Fiber Arts Masterclass — Monthly',
        'Youth Apprenticeship Program — Year-round',
        'Sustainable Dyeing Workshops — Seasonal',
        'Digital Marketing for Artisans — Quarterly',
      ],
    },
    {
      icon: Users,
      title: 'Outreach Activities',
      button: 'See Events',
      color: 'himalaya',
      description: 'Community initiatives and educational outreach demonstrating our commitment to local development and heritage preservation.',
      events: [
        'School Visit Programs',
        'Women Artisan Networking Events',
        'Sustainability Awareness Campaigns',
        'Heritage Documentation Projects',
      ],
    },
  ];

  const colorMap: Record<string, { bg: string; border: string; text: string; iconBg: string; iconText: string; bullet: string }> = {
    terracotta: {
      bg: 'bg-terracotta-50',
      border: 'border-terracotta-200',
      text: 'text-terracotta-600',
      iconBg: 'bg-terracotta-100',
      iconText: 'text-terracotta-600',
      bullet: 'text-terracotta-400',
    },
    himalaya: {
      bg: 'bg-himalaya-50',
      border: 'border-himalaya-200',
      text: 'text-himalaya-600',
      iconBg: 'bg-himalaya-100',
      iconText: 'text-himalaya-600',
      bullet: 'text-himalaya-400',
    },
    spice: {
      bg: 'bg-spice-50',
      border: 'border-spice-200',
      text: 'text-spice-600',
      iconBg: 'bg-spice-100',
      iconText: 'text-spice-600',
      bullet: 'text-spice-400',
    },
  };

  return (
    <div>
      {/* Page Header */}
      <section className="relative bg-gradient-to-br from-spice-50 via-cream-100 to-himalaya-50 py-20 px-6 lg:px-12 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-10 left-20 w-72 h-72 bg-spice-300 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <p className="font-sans text-xs tracking-widest uppercase text-spice-500 mb-4">
            Connect & Collaborate
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-semibold text-sand-900 mb-6">
            Events & Industry Participation
          </h1>
          <p className="font-sans text-lg text-sand-600 max-w-2xl">
            We're active members of the global textile community, fostering connections and driving positive change.
          </p>
        </div>
      </section>

      {/* Events Grid */}
      <section className="bg-white py-28 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {eventCategories.map((category) => {
              const Icon = category.icon;
              const colors = colorMap[category.color];
              return (
                <div key={category.title} className={`${colors.bg} ${colors.border} border-2 rounded-2xl p-8 transition-all hover:shadow-xl`}>
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-14 h-14 ${colors.iconBg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`w-7 h-7 ${colors.iconText}`} />
                    </div>
                    <div className="flex-1">
                      <h2 className="font-serif text-2xl font-semibold text-sand-900 mb-2">
                        {category.title}
                      </h2>
                      <p className="font-sans text-sm text-sand-600 leading-relaxed">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8 ml-2">
                    {category.events.map((event, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className={`${colors.bullet} text-lg leading-none mt-0.5`}>✦</span>
                        <span className="font-sans text-sm text-sand-700">{event}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={`inline-flex items-center gap-2 font-sans text-xs tracking-widest uppercase ${colors.text} hover:gap-3 transition-all`}
                  >
                    {category.button}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="bg-cream-100 py-28 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-sans text-xs tracking-widest uppercase text-terracotta-500 mb-4">
              Mark Your Calendar
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-sand-900 mb-6">
              Upcoming Events
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-terracotta-400 to-spice-400 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { date: 'June 15-18', title: 'International Fiber & Textile Expo', location: 'Tokyo, Japan', color: 'terracotta' },
              { date: 'August 10-12', title: 'Mountain Heritage Summit', location: 'Kathmandu, Nepal', color: 'himalaya' },
              { date: 'October 5-7', title: 'Sustainable Fashion Conference', location: 'Berlin, Germany', color: 'spice' },
              { date: 'November 1-5', title: 'Artisan Skills Masterclass', location: 'Kathmandu, Nepal', color: 'himalaya' },
              { date: 'December 1', title: 'Global Crafts Collective Meeting', location: 'Virtual', color: 'terracotta' },
              { date: 'January 2025', title: 'Heritage Preservation Workshop', location: 'Kathmandu, Nepal', color: 'spice' },
            ].map((event, idx) => {
              const eColors = colorMap[event.color];
              return (
                <div key={idx} className={`bg-white p-8 rounded-2xl border-2 ${eColors.border} hover:shadow-xl transition-all`}>
                  <span className={`inline-block font-sans text-xs tracking-widest uppercase ${eColors.text} mb-3`}>
                    {event.date}
                  </span>
                  <h3 className="font-serif text-xl font-semibold text-sand-900 mb-3">
                    {event.title}
                  </h3>
                  <p className="font-sans text-sm text-sand-600 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-sand-400" />
                    {event.location}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Event Gallery */}
      <section className="bg-white py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-sans text-xs tracking-widest uppercase text-himalaya-600 mb-4">
              Highlights
            </p>
            <h2 className="font-serif text-4xl font-semibold text-sand-900">
              Past Event Highlights
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <MediaPlaceholder
              type="image"
              label="Trade fair booth & showcase"
              aspect="aspect-video"
              className="rounded-2xl"
            />
            <MediaPlaceholder
              type="video"
              label="Event recap & testimonials"
              aspect="aspect-video"
              className="rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-spice-700 to-terracotta-700 py-20 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl font-semibold text-white mb-6">
            Want to Connect or Collaborate?
          </h2>
          <p className="font-sans text-lg text-spice-100 mb-8">
            Contact us to discuss partnership opportunities, speaking engagements, or event participation.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 font-sans text-sm tracking-widest uppercase bg-white text-spice-700 px-8 py-4 rounded-lg hover:bg-cream-100 transition-colors shadow-lg"
          >
            Get In Touch
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
