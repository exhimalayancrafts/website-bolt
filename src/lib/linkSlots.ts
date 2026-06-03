export interface LinkSlot {
  page: string;
  slot: string;
  label: string;
  defaultHref: string;
  defaultLinkText: string;
}

export const LINK_SLOTS: LinkSlot[] = [
  // Home
  { page: 'home', slot: 'cta-primary', label: 'Home — Primary CTA button', defaultHref: '/products', defaultLinkText: 'View Products' },
  { page: 'home', slot: 'cta-secondary', label: 'Home — Secondary CTA button', defaultHref: '/about', defaultLinkText: 'Our Story' },

  // About
  { page: 'about', slot: 'certification-1', label: 'About — External certification link 1', defaultHref: '', defaultLinkText: 'View Certification' },
  { page: 'about', slot: 'certification-2', label: 'About — External certification link 2', defaultHref: '', defaultLinkText: 'View Certification' },
  { page: 'about', slot: 'sustainability-report', label: 'About — Sustainability report PDF', defaultHref: '', defaultLinkText: 'Download Report' },

  // Products
  { page: 'products', slot: 'catalogue-pdf', label: 'Products — Catalogue PDF download', defaultHref: '', defaultLinkText: 'Download Catalogue' },
  { page: 'products', slot: 'wholesale-form', label: 'Products — Wholesale inquiry link', defaultHref: '/contact', defaultLinkText: 'Wholesale Inquiry' },

  // Activities
  { page: 'activities', slot: 'event-1-link', label: 'Activities — Event 1 external link', defaultHref: '', defaultLinkText: 'Learn More' },
  { page: 'activities', slot: 'event-2-link', label: 'Activities — Event 2 external link', defaultHref: '', defaultLinkText: 'Learn More' },
  { page: 'activities', slot: 'event-3-link', label: 'Activities — Event 3 external link', defaultHref: '', defaultLinkText: 'Learn More' },
  { page: 'activities', slot: 'press-feature-1', label: 'Activities — Press feature 1 link', defaultHref: '', defaultLinkText: 'Read Article' },
  { page: 'activities', slot: 'press-feature-2', label: 'Activities — Press feature 2 link', defaultHref: '', defaultLinkText: 'Read Article' },

  // Contact
  { page: 'contact', slot: 'instagram', label: 'Contact — Instagram link', defaultHref: '', defaultLinkText: 'Instagram' },
  { page: 'contact', slot: 'linkedin', label: 'Contact — LinkedIn link', defaultHref: '', defaultLinkText: 'LinkedIn' },
  { page: 'contact', slot: 'whatsapp', label: 'Contact — WhatsApp link', defaultHref: '', defaultLinkText: 'WhatsApp' },
];
