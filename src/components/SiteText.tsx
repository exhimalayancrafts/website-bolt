import { useEffect, useRef, useState } from 'react';
import { supabase } from '../lib/supabase';
import { useEditMode } from '../context/EditModeContext';

interface Props {
  page: string;
  slot: string;
  defaultContent: string;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  label?: string;
}

const cache: Record<string, string> = {};

export default function SiteText({ page, slot, defaultContent, className = '', as: Tag = 'span', label }: Props) {
  const key = `${page}/${slot}`;
  const [content, setContent] = useState<string>(cache[key] ?? defaultContent);
  const { editMode, setPending, pending } = useEditMode();
  const textareaRef = useRef<HTMLTextAreaElement>(null);

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

  const pendingContent = pending[key]?.content;
  const displayContent = pendingContent !== undefined ? pendingContent : content;

  const handleChange = (val: string) => {
    setPending(key, { table: 'site_texts', page, slot, label: label ?? slot, content: val });
    if (pendingContent === undefined) setContent(content); // keep local in sync
  };

  if (editMode) {
    return (
      <span
        className={`relative inline-block w-full group ${className}`}
        title={`Edit: ${label ?? slot}`}
      >
        <textarea
          ref={textareaRef}
          value={displayContent}
          onChange={(e) => handleChange(e.target.value)}
          rows={Math.max(1, displayContent.split('\n').length)}
          className="w-full bg-amber-50 border border-amber-300 focus:border-amber-500 focus:outline-none rounded-sm p-1 font-[inherit] text-[inherit] leading-[inherit] resize-y"
          aria-label={`Edit ${label ?? slot}`}
        />
        <span className="absolute -top-5 left-0 font-sans text-[9px] text-amber-600 bg-amber-50 px-1 opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
          {label ?? slot}
        </span>
      </span>
    );
  }

  return (
    <Tag className={className}>
      {displayContent.split('\n').map((line, i, arr) => (
        i < arr.length - 1 ? <span key={i}>{line}<br /></span> : <span key={i}>{line}</span>
      ))}
    </Tag>
  );
}
