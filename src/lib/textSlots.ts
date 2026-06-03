export interface TextSlot {
  page: string;
  slot: string;
  label: string;
  defaultContent: string;
  multiline?: boolean;
}

export const TEXT_SLOTS: TextSlot[] = [
  // Home
  { page: 'home', slot: 'hero-eyebrow', label: 'Home — Hero eyebrow', defaultContent: 'Himalayan Textiles' },
  { page: 'home', slot: 'hero-heading', label: 'Home — Hero heading', defaultContent: 'Where Mountains\nMeet Fibers', multiline: true },
  { page: 'home', slot: 'hero-subtext', label: 'Home — Hero subtext', defaultContent: 'An ecosystem of responsible fiber production rooted in the landscapes, communities, and traditions of the Himalayas.', multiline: true },
  { page: 'home', slot: 'intro-heading', label: 'Home — Intro heading', defaultContent: 'We work with nature to create textiles that carry the story of their origin.', multiline: true },
  { page: 'home', slot: 'intro-body-1', label: 'Home — Intro paragraph 1', defaultContent: 'Exclusive Crafts is a Himalayan fiber company working with cashmere, yak wool, sheep wool, and emerging plant-based fibers. We maintain direct relationships with herders, oversee our own manufacturing, and produce textiles that reflect the landscapes they come from.', multiline: true },
  { page: 'home', slot: 'intro-body-2', label: 'Home — Intro paragraph 2', defaultContent: 'Our model is built on traceability, quality, and long-term relationships with the people who raise animals and craft fibers in some of the world\'s most challenging environments.', multiline: true },

  // About
  { page: 'about', slot: 'page-heading', label: 'About — Page heading', defaultContent: 'About Us' },
  { page: 'about', slot: 'page-intro', label: 'About — Page intro', defaultContent: 'The story of Exclusive Crafts — our founding, mission, and the values that guide our work.', multiline: true },
  { page: 'about', slot: 'mission-heading', label: 'About — Mission heading', defaultContent: 'A business built on the integrity of its materials.' },
  { page: 'about', slot: 'mission-body', label: 'About — Mission body', defaultContent: 'We founded Exclusive Crafts with a single idea: that the quality of a textile is inseparable from the integrity of its supply chain. Every decision we make — who we source from, how we manufacture, how we treat the people who work with us — reflects that conviction.', multiline: true },
  { page: 'about', slot: 'founder-name', label: 'About — Founder name', defaultContent: 'Founder & Director' },
  { page: 'about', slot: 'founder-bio', label: 'About — Founder bio', defaultContent: 'With over 25 years in the Himalayan textile industry, our founder built Exclusive Crafts from direct experience with herders, artisans, and international buyers. The company reflects a lifetime of knowledge about how exceptional fiber becomes exceptional cloth.', multiline: true },

  // Products
  { page: 'products', slot: 'page-intro', label: 'Products — Page intro', defaultContent: 'Finished textiles crafted from Himalayan fibers — presented here as objects of material and craft.', multiline: true },
  { page: 'products', slot: 'featured-heading', label: 'Products — Featured heading', defaultContent: 'Cashmere Shawls' },
  { page: 'products', slot: 'featured-body', label: 'Products — Featured body', defaultContent: 'Fine cashmere shawls woven from high-altitude fiber. Each piece carries the softness and warmth of its origin, finished with hand-twisted fringes and careful quality control.', multiline: true },
  { page: 'products', slot: 'inquiry-note', label: 'Products — Inquiry note', defaultContent: 'Products are available through wholesale partnership and custom order. For specifications, samples, and wholesale terms, please get in touch.', multiline: true },

  // Sourcing
  { page: 'sourcing', slot: 'page-intro', label: 'Sourcing — Page intro', defaultContent: 'How and where we obtain our fibers — the landscapes, animals, and communities at the beginning of the supply chain.', multiline: true },
  { page: 'sourcing', slot: 'approach-body', label: 'Sourcing — Approach body', defaultContent: 'We source fiber directly from herding families and community groups, maintaining personal knowledge of animals, grazing practices, and harvest methods. This direct relationship allows genuine traceability and fair terms.\n\nEach fiber type comes from a distinct environment with its own climate, seasonality, and traditional knowledge. Understanding these origins is essential to producing quality textiles.', multiline: true },

  // Manufacturing
  { page: 'manufacturing', slot: 'page-intro', label: 'Manufacturing — Page intro', defaultContent: 'We own and operate our production facilities in Kathmandu, maintaining direct oversight from raw fiber to finished product.', multiline: true },
  { page: 'manufacturing', slot: 'facility-body', label: 'Manufacturing — Facility body', defaultContent: 'Unlike many operators who outsource manufacturing, we own our facilities in Kathmandu Valley. This allows us to control quality at every stage, ensure fair working conditions, and maintain consistent standards.\n\nOur workshops combine traditional handwork with quality-controlled modern processes. Hand-spinning zones sit alongside machine carding lines. Handlooms operate in parallel with finishing equipment.', multiline: true },

  // Community
  { page: 'community', slot: 'page-intro', label: 'Community — Page intro', defaultContent: 'The artisans behind our textiles — their skills, their stories, and their contributions to the work.', multiline: true },
  { page: 'community', slot: 'approach-body', label: 'Community — Approach body', defaultContent: 'We employ over 200 artisans — weavers, spinners, sorters, finishers, and supervisors — many of whom have worked with us for decades. Their knowledge shapes every product we make.\n\nOur role is to provide stable work, fair compensation, and conditions that respect skill. We do not frame this as charity or assistance. It is simply how decent work should be organized.', multiline: true },
  { page: 'community', slot: 'women-heading', label: 'Community — Women section heading', defaultContent: 'Majority women-led production.' },
  { page: 'community', slot: 'women-body', label: 'Community — Women section body', defaultContent: 'Over 60% of our workforce are women — many heading households, supporting families, and maintaining craft traditions passed through generations of mothers and daughters.', multiline: true },

  // Activities
  { page: 'activities', slot: 'page-intro', label: 'Activities — Page intro', defaultContent: 'Industry participation, events, and collaborations that connect our work to the broader textile ecosystem.', multiline: true },
  { page: 'activities', slot: 'industry-body', label: 'Activities — Industry body', defaultContent: 'Over two decades, we have built relationships across the global textile industry — participating in international trade fairs, contributing to industry associations, and collaborating with research institutions.\n\nThis engagement keeps us connected to market developments, sustainability standards, and emerging fiber technologies.', multiline: true },

  // Contact
  { page: 'contact', slot: 'page-intro', label: 'Contact — Page intro', defaultContent: 'For partnership inquiries, wholesale orders, or general questions.', multiline: true },
  { page: 'contact', slot: 'address', label: 'Contact — Address', defaultContent: 'Exclusive Crafts\nGokarneshwor-06, Jorpati\nKathmandu, Nepal', multiline: true },
  { page: 'contact', slot: 'email', label: 'Contact — Email', defaultContent: 'hello@exclusivecrafts.com' },
  { page: 'contact', slot: 'phone', label: 'Contact — Phone', defaultContent: '+977 (1) 123-4567' },
  { page: 'contact', slot: 'footer-note', label: 'Contact — Footer note', defaultContent: 'Samples, specifications, and wholesale terms are available to qualified partners. Please include company details and area of interest in your message.', multiline: true },
];
