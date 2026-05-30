import { useEffect, useState } from 'react';
import { supabase, getPublicUrl } from '../lib/supabase';

interface SiteImageProps {
  page: string;
  slot: string;
  fallbackLabel: string;
  aspect?: string;
  className?: string;
  imgClassName?: string;
}

interface ImageRecord {
  storage_path: string;
  label: string;
}

export default function SiteImage({
  page,
  slot,
  fallbackLabel,
  aspect = 'aspect-video',
  className = '',
  imgClassName = 'w-full h-full object-cover',
}: SiteImageProps) {
  const [image, setImage] = useState<ImageRecord | null>(null);

  useEffect(() => {
    supabase
      .from('site_images')
      .select('storage_path, label')
      .eq('page', page)
      .eq('slot', slot)
      .maybeSingle()
      .then(({ data }) => {
        if (data) setImage(data);
      });
  }, [page, slot]);

  if (!image) {
    return (
      <div
        className={`${aspect} bg-stone-200 border border-dashed border-stone-300 flex flex-col items-center justify-center overflow-hidden ${className}`}
      >
        <p className="font-sans text-xs text-stone-400 text-center px-4">{fallbackLabel}</p>
        <p className="font-sans text-[10px] text-stone-400 mt-1">No image uploaded</p>
      </div>
    );
  }

  return (
    <div className={`${aspect} overflow-hidden ${className}`}>
      <img
        src={getPublicUrl(image.storage_path)}
        alt={image.label || fallbackLabel}
        className={imgClassName}
      />
    </div>
  );
}
