import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

interface Props {
  page: string;
  slot: string;
  className?: string;
}

interface VideoRecord {
  url: string;
}

function getEmbedUrl(url: string): { type: 'youtube' | 'vimeo' | 'direct'; src: string } | null {
  if (!url) return null;

  // Block dangerous URL schemes — only allow https
  if (!/^https:\/\//i.test(url)) return null;

  // YouTube: watch?v=ID or youtu.be/ID or /embed/ID
  const ytMatch = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/);
  if (ytMatch) {
    return { type: 'youtube', src: `https://www.youtube.com/embed/${ytMatch[1]}?rel=0&modestbranding=1` };
  }

  // Vimeo: vimeo.com/ID or player.vimeo.com/video/ID
  const vimeoMatch = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if (vimeoMatch) {
    return { type: 'vimeo', src: `https://player.vimeo.com/video/${vimeoMatch[1]}?dnt=1` };
  }

  // Direct mp4/webm/ogg
  if (/\.(mp4|webm|ogg)(\?|$)/i.test(url)) {
    return { type: 'direct', src: url };
  }

  return null;
}

const cache: Record<string, string> = {};

export default function SiteVideo({ page, slot, className = '' }: Props) {
  const key = `${page}/${slot}`;
  const [url, setUrl] = useState<string>(cache[key] ?? '');

  useEffect(() => {
    if (cache[key]) return;
    supabase
      .from('site_videos')
      .select('url')
      .eq('page', page)
      .eq('slot', slot)
      .maybeSingle()
      .then(({ data }) => {
        if (data?.url) {
          cache[key] = data.url;
          setUrl(data.url);
        }
      });
  }, [key, page, slot]);

  if (!url) return null;

  const embed = getEmbedUrl(url);
  if (!embed) return null;

  if (embed.type === 'direct') {
    return (
      <div className={`aspect-video overflow-hidden rounded-sm ${className}`}>
        <video src={embed.src} controls className="w-full h-full object-cover" />
      </div>
    );
  }

  return (
    <div className={`aspect-video overflow-hidden rounded-sm ${className}`}>
      <iframe
        src={embed.src}
        className="w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title={`${page} ${slot} video`}
      />
    </div>
  );
}
