import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

interface Props {
  page: string;
  slot: string;
  defaultContent: string;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

const cache: Record<string, string> = {};

export default function SiteText({ page, slot, defaultContent, className = '', as: Tag = 'span' }: Props) {
  const key = `${page}/${slot}`;
  const [content, setContent] = useState<string>(cache[key] ?? defaultContent);

  useEffect(() => {
    if (cache[key]) return;
    supabase
      .from('site_texts')
      .select('content')
      .eq('page', page)
      .eq('slot', slot)
      .maybeSingle()
      .then(({ data }) => {
        if (data?.content) {
          cache[key] = data.content;
          setContent(data.content);
        }
      });
  }, [key, page, slot]);

  return (
    <Tag className={className}>
      {content.split('\n').map((line, i, arr) => (
        i < arr.length - 1 ? <span key={i}>{line}<br /></span> : <span key={i}>{line}</span>
      ))}
    </Tag>
  );
}
