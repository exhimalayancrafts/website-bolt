import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';

interface Props {
  page: string;
  slot: string;
  defaultHref: string;
  defaultLinkText: string;
  className?: string;
}

interface LinkRecord {
  href: string;
  link_text: string;
  opens_new_tab: boolean;
}

const cache: Record<string, LinkRecord> = {};

export default function SiteLink({ page, slot, defaultHref, defaultLinkText, className = '' }: Props) {
  const key = `${page}/${slot}`;
  const [record, setRecord] = useState<LinkRecord>(
    cache[key] ?? { href: defaultHref, link_text: defaultLinkText, opens_new_tab: true }
  );

  useEffect(() => {
    if (cache[key]) return;
    supabase
      .from('site_links')
      .select('href, link_text, opens_new_tab')
      .eq('page', page)
      .eq('slot', slot)
      .maybeSingle()
      .then(({ data }) => {
        if (data) {
          cache[key] = data as LinkRecord;
          setRecord(data as LinkRecord);
        }
      });
  }, [key, page, slot]);

  const { href, link_text, opens_new_tab } = record;

  // Block dangerous URL schemes
  if (!href || /^javascript:/i.test(href) || /^data:/i.test(href)) return null;

  const isExternal = /^https?:\/\//.test(href);

  if (isExternal || opens_new_tab) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {link_text || defaultLinkText}
      </a>
    );
  }

  return (
    <Link to={href} className={className}>
      {link_text || defaultLinkText}
    </Link>
  );
}
