import { Link } from 'react-router-dom';
import { Calendar, Users, Network, MapPin } from 'lucide-react';

export default function Events() {
  const eventCategories = [
    {
      icon: MapPin,
      title: 'Trade Fairs',
      button: 'View Participation',
      description: 'We participate in major international textile and craft fairs, showcasing our collections and connecting with buyers worldwide.',
      events: [
        'International Fiber Expo 2024 - Tokyo',
        'Textile Design Fair - Mumbai',
        'Craft & Heritage Market - London',
        'Himalayan Artisans Summit - Kathmandu',
      ],
    },
    {
      icon: Network,
      title: 'Industry Collaborations',
      button: 'Our Network',
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
      description: 'Free workshops and apprenticeships ensuring the next generation of artisans can thrive with traditional and modern skills.',
      events: [
        'Fiber Arts Masterclass - Monthly',
        'Youth Apprenticeship Program - Year-round',
        'Sustainable Dyeing Workshops - Seasonal',
        'Digital Marketing for Artisans - Quarterly',
      ],
    },
    {
      icon: Users,
      title: 'Outreach Activities',
      button: 'See Events',
      description: 'Community initiatives and educational outreach demonstrating our commitment to local development and heritage preservation.',
      events: [
        'School Visit Programs',
        'Women Artisan Networking Events',
        'Sustainability Awareness Campaigns',
        'Heritage Documentation Projects',
      ],
    },
  ];

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-stone-50 to-stone-100 py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-serif text-5xl md:text-6xl font-light text-stone-900 mb-6">
            Events & Industry Participation
          </h1>
          <p className="font-sans text-lg text-stone-600 max-w-2xl">
            We're active members of the global textile community, fostering connections and driving positive change.
          </p>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-28 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {eventCategories.map((category) => {
              const Icon = category.icon;
              return (
                <div key={category.title} className="group">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 bg-stone-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-stone-900 group-hover:text-white transition-colors">
                      <Icon className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <h2 className="font-serif text-2xl font-light text-stone-900 mb-1">
                        {category.title}
                      </h2>
                      <p className="font-sans text-sm text-stone-600">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6 ml-20">
                    {category.events.map((event, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-stone-900 font-serif text-lg leading-none mt-0.5">•</span>
                        <span className="font-sans text-sm text-stone-600">{event}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-stone-900 hover:gap-3 transition-all ml-20"
                  >
                    {category.button}
                    <span>→</span>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="bg-stone-50 py-28 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-light text-stone-900 mb-6">
              Upcoming Events 2024
            </h2>
            <div className="w-16 h-px bg-stone-900 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                date: 'June 15-18',
                title: 'International Fiber & Textile Expo',
                location: 'Tokyo, Japan',
              },
              {
                date: 'August 10-12',
                title: 'Mountain Heritage Summit',
                location: 'Kathmandu, Nepal',
              },
              {
                date: 'October 5-7',
                title: 'Sustainable Fashion Conference',
                location: 'Berlin, Germany',
              },
              {
                date: 'November 1-5',
                title: 'Artisan Skills Masterclass',
                location: 'Kathmandu, Nepal',
              },
              {
                date: 'December 1',
                title: 'Global Crafts Collective Meeting',
                location: 'Virtual',
              },
              {
                date: 'January 2025',
                title: 'Heritage Preservation Workshop',
                location: 'Kathmandu, Nepal',
              },
            ].map((event, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg border border-stone-200 hover:border-stone-900 hover:shadow-lg transition-all">
                <p className="font-sans text-xs tracking-widest uppercase text-stone-500 mb-2">
                  {event.date}
                </p>
                <h3 className="font-serif text-lg font-light text-stone-900 mb-2">
                  {event.title}
                </h3>
                <p className="font-sans text-sm text-stone-600 flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {event.location}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-stone-900 text-white py-20 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl font-light mb-6">
            Want to Connect or Collaborate?
          </h2>
          <p className="font-sans text-lg text-stone-300 mb-8">
            Contact us to discuss partnership opportunities, speaking engagements, or event participation.
          </p>
          <Link
            to="/contact"
            className="inline-block font-sans text-xs tracking-widest uppercase border-2 border-white text-white px-8 py-4 hover:bg-white hover:text-stone-900 transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
