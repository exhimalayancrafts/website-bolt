import { Image, Video } from 'lucide-react';

interface MediaPlaceholderProps {
  type?: 'image' | 'video';
  label: string;
  aspect?: string;
  className?: string;
}

export default function MediaPlaceholder({
  type = 'image',
  label,
  aspect = 'aspect-video',
  className = '',
}: MediaPlaceholderProps) {
  return (
    <div
      className={`${aspect} bg-sand-100 border-2 border-dashed border-sand-300 rounded-xl flex flex-col items-center justify-center gap-3 overflow-hidden group cursor-pointer hover:border-terracotta-400 hover:bg-sand-50 transition-all ${className}`}
    >
      <div className="w-16 h-16 rounded-full bg-sand-200 group-hover:bg-terracotta-100 flex items-center justify-center transition-colors">
        {type === 'video' ? (
          <Video className="w-7 h-7 text-sand-500 group-hover:text-terracotta-500 transition-colors" />
        ) : (
          <Image className="w-7 h-7 text-sand-500 group-hover:text-terracotta-500 transition-colors" />
        )}
      </div>
      <div className="text-center px-4">
        <p className="font-sans text-sm font-medium text-sand-600 group-hover:text-terracotta-600 transition-colors">
          {type === 'video' ? 'Video' : 'Photo'}: {label}
        </p>
        <p className="font-sans text-xs text-sand-400 mt-1">
          Click to add your {type}
        </p>
      </div>
    </div>
  );
}
