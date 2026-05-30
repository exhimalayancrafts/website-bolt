// Central registry of every image slot used across the site.
// Each entry maps to a SiteImage component call: { page, slot }.

export interface ImageSlot {
  page: string;
  slot: string;
  label: string;
}

export const IMAGE_SLOTS: ImageSlot[] = [
  // Home
  { page: 'home', slot: 'hero', label: 'Home — Hero (full-screen landscape)' },
  { page: 'home', slot: 'intro-portrait', label: 'Home — Artisan hands with raw fiber' },
  { page: 'home', slot: 'process-landscape', label: 'Home — Herders with goats in mountains' },
  { page: 'home', slot: 'manufacturing-workshop', label: 'Home — Weaving workshop overview' },
  { page: 'home', slot: 'community-portrait', label: 'Home — Artisan portrait (documentary)' },

  // About
  { page: 'about', slot: 'founder-portrait', label: 'About — Founder portrait' },
  { page: 'about', slot: 'office', label: 'About — Kathmandu office or facility' },

  // Fibers
  { page: 'fibers', slot: 'cashmere-landscape', label: 'Fibers — Cashmere origin landscape' },
  { page: 'fibers', slot: 'cashmere-macro', label: 'Fibers — Cashmere fiber macro detail' },
  { page: 'fibers', slot: 'yak-landscape', label: 'Fibers — Yak wool origin landscape' },
  { page: 'fibers', slot: 'yak-macro', label: 'Fibers — Yak wool fiber macro detail' },
  { page: 'fibers', slot: 'sheep-landscape', label: 'Fibers — Sheep wool origin landscape' },
  { page: 'fibers', slot: 'sheep-macro', label: 'Fibers — Sheep wool fiber macro detail' },
  { page: 'fibers', slot: 'allo-landscape', label: 'Fibers — Allo/nettle origin landscape' },
  { page: 'fibers', slot: 'allo-macro', label: 'Fibers — Allo fiber macro detail' },
  { page: 'fibers', slot: 'study-1', label: 'Fibers — Material study 1' },
  { page: 'fibers', slot: 'study-2', label: 'Fibers — Material study 2' },
  { page: 'fibers', slot: 'study-3', label: 'Fibers — Material study 3' },
  { page: 'fibers', slot: 'study-4', label: 'Fibers — Material study 4' },

  // Products
  { page: 'products', slot: 'featured-spread', label: 'Products — Featured shawl editorial' },
  { page: 'products', slot: 'featured-detail', label: 'Products — Weave pattern detail' },
  { page: 'products', slot: 'texture-woven', label: 'Products — Woven textile texture' },
  { page: 'products', slot: 'fullbleed', label: 'Products — Products still life (wide)' },
  { page: 'products', slot: 'lookbook-1', label: 'Products — Lookbook 1 (scarf)' },
  { page: 'products', slot: 'lookbook-2', label: 'Products — Lookbook 2 (throw)' },
  { page: 'products', slot: 'lookbook-3', label: 'Products — Lookbook 3 (allo bag)' },

  // Sourcing
  { page: 'sourcing', slot: 'cashmere-source', label: 'Sourcing — Cashmere farm landscape' },
  { page: 'sourcing', slot: 'yak-source', label: 'Sourcing — Yak sourcing landscape' },
  { page: 'sourcing', slot: 'sheep-source', label: 'Sourcing — Sheep valley landscape' },
  { page: 'sourcing', slot: 'allo-source', label: 'Sourcing — Allo/nettle forest' },
  { page: 'sourcing', slot: 'herder-portrait', label: 'Sourcing — Herder documentary portrait' },
  { page: 'sourcing', slot: 'welfare-goats', label: 'Sourcing — Healthy goats grazing' },
  { page: 'sourcing', slot: 'field-1', label: 'Sourcing — Field photo 1' },
  { page: 'sourcing', slot: 'field-2', label: 'Sourcing — Field photo 2' },
  { page: 'sourcing', slot: 'field-3', label: 'Sourcing — Field photo 3' },
  { page: 'sourcing', slot: 'field-4', label: 'Sourcing — Field photo 4' },

  // Manufacturing
  { page: 'manufacturing', slot: 'facility-overview', label: 'Manufacturing — Facility overview' },
  { page: 'manufacturing', slot: 'carding', label: 'Manufacturing — Carding process' },
  { page: 'manufacturing', slot: 'spinning', label: 'Manufacturing — Spinning' },
  { page: 'manufacturing', slot: 'loom', label: 'Manufacturing — Loom / weaving' },
  { page: 'manufacturing', slot: 'dyeing', label: 'Manufacturing — Dye vats' },
  { page: 'manufacturing', slot: 'finishing', label: 'Manufacturing — Finishing / inspection' },
  { page: 'manufacturing', slot: 'quality', label: 'Manufacturing — Quality control' },

  // Community
  { page: 'community', slot: 'women-artisans', label: 'Community — Women artisans at work' },
  { page: 'community', slot: 'generations', label: 'Community — Mother and daughter artisans' },
  { page: 'community', slot: 'day-1', label: 'Community — Morning preparation' },
  { page: 'community', slot: 'day-2', label: 'Community — Midday weaving' },
  { page: 'community', slot: 'day-3', label: 'Community — Finishing work' },

  // Activities
  { page: 'activities', slot: 'trade-fair', label: 'Activities — Trade fair booth' },
  { page: 'activities', slot: 'event-1', label: 'Activities — Exhibition opening' },
  { page: 'activities', slot: 'event-2', label: 'Activities — Panel discussion' },
  { page: 'activities', slot: 'event-3', label: 'Activities — Workshop session' },

  // Contact
  { page: 'contact', slot: 'office-location', label: 'Contact — Office / facility location' },
];
