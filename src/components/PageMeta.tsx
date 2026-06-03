import { useEffect } from 'react';

interface Props {
  title: string;
  description: string;
  ogImage?: string;
  canonical?: string;
}

const BASE_URL = 'https://exclusivecrafts.com';
const DEFAULT_OG = `${BASE_URL}/og-default.jpg`;

export default function PageMeta({ title, description, ogImage = DEFAULT_OG, canonical }: Props) {
  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string, property = false) => {
      const attr = property ? 'property' : 'name';
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('description', description);
    setMeta('og:title', title, true);
    setMeta('og:description', description, true);
    setMeta('og:image', ogImage, true);
    setMeta('og:type', 'website', true);
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);
    setMeta('twitter:image', ogImage);

    const url = canonical ?? (BASE_URL + window.location.hash.replace('#', ''));
    let canonical_el = document.querySelector('link[rel="canonical"]');
    if (!canonical_el) {
      canonical_el = document.createElement('link');
      canonical_el.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical_el);
    }
    canonical_el.setAttribute('href', url);
  }, [title, description, ogImage, canonical]);

  return null;
}
