export interface VideoSlot {
  page: string;
  slot: string;
  label: string;
}

export const VIDEO_SLOTS: VideoSlot[] = [
  // Home
  { page: 'home', slot: 'hero-reel', label: 'Home — Hero background reel (YouTube/Vimeo/mp4)' },
  { page: 'home', slot: 'process-reel', label: 'Home — Process overview reel' },

  // About
  { page: 'about', slot: 'company-story', label: 'About — Company story video' },

  // Manufacturing
  { page: 'manufacturing', slot: 'facility-tour', label: 'Manufacturing — Facility tour video' },
  { page: 'manufacturing', slot: 'process-reel', label: 'Manufacturing — Full process reel' },

  // Community
  { page: 'community', slot: 'artisan-stories', label: 'Community — Artisan stories video' },

  // Activities
  { page: 'activities', slot: 'trade-fair-reel', label: 'Activities — Trade fair highlights reel' },
  { page: 'activities', slot: 'panel-recording', label: 'Activities — Panel/talk recording' },

  // Sourcing
  { page: 'sourcing', slot: 'field-reel', label: 'Sourcing — Field visit reel' },

  // Products
  { page: 'products', slot: 'lookbook-reel', label: 'Products — Lookbook / product reel' },
];
