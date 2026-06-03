import { useEffect, useRef, useState } from 'react';
import { supabase, getPublicUrl, BUCKET } from '../lib/supabase';
import { IMAGE_SLOTS, type ImageSlot } from '../lib/imageSlots';
import { TEXT_SLOTS, type TextSlot } from '../lib/textSlots';
import { Upload, Trash2, CheckCircle, AlertCircle, Loader, Lock, Image, Type, Save } from 'lucide-react';

interface UploadedImage {
  id: string;
  page: string;
  slot: string;
  label: string;
  storage_path: string;
}

interface SavedText {
  id: string;
  page: string;
  slot: string;
  content: string;
}

type Status = { type: 'success' | 'error'; message: string } | null;

const PAGES = [...new Set(IMAGE_SLOTS.map((s) => s.page))];
const TEXT_PAGES = [...new Set(TEXT_SLOTS.map((s) => s.page))];
const ADMIN_PASSWORD = 'exclusivecrafts2024';

function PasswordGate({ onUnlock }: { onUnlock: () => void }) {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value === ADMIN_PASSWORD) {
      onUnlock();
    } else {
      setError(true);
      setValue('');
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-stone-900 flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <div className="flex justify-center mb-8">
          <Lock className="w-7 h-7 text-stone-400" />
        </div>
        <p className="font-serif text-xl font-light text-stone-100 text-center mb-8">Admin Access</p>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="password"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Password"
            autoFocus
            className={`w-full bg-transparent border-b py-3 font-sans text-base text-stone-100 placeholder-stone-600 focus:outline-none transition-colors ${
              error ? 'border-red-500' : 'border-stone-600 focus:border-stone-300'
            }`}
          />
          {error && <p className="font-sans text-sm text-red-400">Incorrect password</p>}
          <button
            type="submit"
            className="w-full font-sans text-sm text-stone-400 hover:text-stone-100 border border-stone-700 hover:border-stone-400 py-3 transition-colors"
          >
            Enter
          </button>
        </form>
      </div>
    </div>
  );
}

// ─── Images Tab ───────────────────────────────────────────────────────────────

function ImagesTab() {
  const [uploaded, setUploaded] = useState<UploadedImage[]>([]);
  const [activePage, setActivePage] = useState(PAGES[0]);
  const [uploading, setUploading] = useState<string | null>(null);
  const [deleting, setDeleting] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const pendingSlot = useRef<ImageSlot | null>(null);

  useEffect(() => { fetchImages(); }, []);

  async function fetchImages() {
    const { data } = await supabase.from('site_images').select('*');
    if (data) setUploaded(data as UploadedImage[]);
  }

  function showStatus(type: 'success' | 'error', message: string) {
    setStatus({ type, message });
    setTimeout(() => setStatus(null), 4000);
  }

  function triggerUpload(slot: ImageSlot) {
    pendingSlot.current = slot;
    fileInputRef.current?.click();
  }

  async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    const slot = pendingSlot.current;
    if (!file || !slot) return;
    e.target.value = '';

    const ext = file.name.split('.').pop();
    const storagePath = `${slot.page}/${slot.slot}.${ext}`;
    setUploading(`${slot.page}/${slot.slot}`);

    try {
      const existing = uploaded.find((u) => u.page === slot.page && u.slot === slot.slot);
      if (existing) {
        await supabase.storage.from(BUCKET).remove([existing.storage_path]);
        await supabase.from('site_images').delete().eq('id', existing.id);
      }
      const { error: uploadError } = await supabase.storage.from(BUCKET).upload(storagePath, file, { upsert: true });
      if (uploadError) throw uploadError;
      const { error: dbError } = await supabase.from('site_images').upsert({ page: slot.page, slot: slot.slot, label: slot.label, storage_path: storagePath }, { onConflict: 'storage_path' });
      if (dbError) throw dbError;
      showStatus('success', `Uploaded: ${slot.label}`);
      fetchImages();
    } catch (err: unknown) {
      showStatus('error', err instanceof Error ? err.message : 'Upload failed');
    } finally {
      setUploading(null);
      pendingSlot.current = null;
    }
  }

  async function handleDelete(img: UploadedImage) {
    setDeleting(img.id);
    try {
      await supabase.storage.from(BUCKET).remove([img.storage_path]);
      await supabase.from('site_images').delete().eq('id', img.id);
      showStatus('success', 'Image removed');
      setUploaded((prev) => prev.filter((u) => u.id !== img.id));
    } catch (err: unknown) {
      showStatus('error', err instanceof Error ? err.message : 'Delete failed');
    } finally {
      setDeleting(null);
    }
  }

  const pageSlots = IMAGE_SLOTS.filter((s) => s.page === activePage);

  return (
    <div className="flex flex-1 min-h-0">
      <input ref={fileInputRef} type="file" accept="image/jpeg,image/jpg,image/png,image/webp" className="hidden" onChange={handleFileChange} />

      {status && (
        <div className={`fixed top-6 right-6 z-50 flex items-center gap-3 px-5 py-3 rounded-sm shadow-lg font-sans text-sm ${status.type === 'success' ? 'bg-stone-800 text-stone-100' : 'bg-red-800 text-red-100'}`}>
          {status.type === 'success' ? <CheckCircle className="w-4 h-4 flex-shrink-0" /> : <AlertCircle className="w-4 h-4 flex-shrink-0" />}
          {status.message}
        </div>
      )}

      {/* Sidebar */}
      <aside className="w-44 flex-shrink-0 bg-stone-50 border-r border-stone-200 pt-4 overflow-y-auto">
        {PAGES.map((page) => {
          const total = IMAGE_SLOTS.filter((s) => s.page === page).length;
          const done = uploaded.filter((u) => u.page === page).length;
          return (
            <button key={page} onClick={() => setActivePage(page)} className={`w-full text-left px-4 py-3 transition-colors ${activePage === page ? 'bg-stone-900 text-stone-100' : 'text-stone-600 hover:bg-stone-100'}`}>
              <p className="font-sans text-xs tracking-wide capitalize font-medium">{page}</p>
              <p className="font-sans text-[10px] mt-0.5 text-stone-400">{done}/{total} uploaded</p>
            </button>
          );
        })}
      </aside>

      {/* Grid */}
      <main className="flex-1 p-6 overflow-y-auto">
        <h2 className="font-serif text-lg font-light text-stone-900 mb-5 capitalize">{activePage}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {pageSlots.map((slot) => {
            const existing = uploaded.find((u) => u.page === slot.page && u.slot === slot.slot);
            const isUploading = uploading === `${slot.page}/${slot.slot}`;
            const isDeleting = deleting === existing?.id;
            return (
              <div key={slot.slot} className="bg-white border border-stone-200 rounded-sm overflow-hidden">
                <div className="aspect-[4/3] bg-stone-100 relative overflow-hidden">
                  {existing ? (
                    <img src={getPublicUrl(existing.storage_path)} alt={existing.label} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <p className="font-sans text-xs text-stone-400 text-center px-4">No image</p>
                    </div>
                  )}
                  {(isUploading || isDeleting) && (
                    <div className="absolute inset-0 bg-stone-900/60 flex items-center justify-center">
                      <Loader className="w-6 h-6 text-white animate-spin" />
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <p className="font-sans text-[10px] text-stone-400 mb-1 uppercase tracking-wide">{slot.slot}</p>
                  <p className="font-sans text-sm text-stone-700 leading-snug mb-3">{slot.label}</p>
                  <div className="flex gap-2">
                    <button onClick={() => triggerUpload(slot)} disabled={isUploading} className="flex-1 flex items-center justify-center gap-2 font-sans text-xs py-2 px-3 bg-stone-900 text-stone-100 hover:bg-stone-700 transition-colors disabled:opacity-50">
                      <Upload className="w-3.5 h-3.5" />
                      {existing ? 'Replace' : 'Upload'}
                    </button>
                    {existing && (
                      <button onClick={() => handleDelete(existing)} disabled={isDeleting} className="flex items-center justify-center px-3 border border-stone-300 text-stone-500 hover:border-red-400 hover:text-red-600 transition-colors disabled:opacity-50">
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}

// ─── Texts Tab ────────────────────────────────────────────────────────────────

function TextsTab() {
  const [saved, setSaved] = useState<SavedText[]>([]);
  const [activePage, setActivePage] = useState(TEXT_PAGES[0]);
  const [drafts, setDrafts] = useState<Record<string, string>>({});
  const [saving, setSaving] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>(null);

  useEffect(() => { fetchTexts(); }, []);

  async function fetchTexts() {
    const { data } = await supabase.from('site_texts').select('*');
    if (data) setSaved(data as SavedText[]);
  }

  function showStatus(type: 'success' | 'error', message: string) {
    setStatus({ type, message });
    setTimeout(() => setStatus(null), 4000);
  }

  function getDraft(slot: TextSlot): string {
    const key = `${slot.page}/${slot.slot}`;
    if (key in drafts) return drafts[key];
    const record = saved.find((s) => s.page === slot.page && s.slot === slot.slot);
    return record?.content ?? slot.defaultContent;
  }

  function setDraft(slot: TextSlot, value: string) {
    setDrafts((prev) => ({ ...prev, [`${slot.page}/${slot.slot}`]: value }));
  }

  function isDirty(slot: TextSlot): boolean {
    const key = `${slot.page}/${slot.slot}`;
    if (!(key in drafts)) return false;
    const record = saved.find((s) => s.page === slot.page && s.slot === slot.slot);
    const original = record?.content ?? slot.defaultContent;
    return drafts[key] !== original;
  }

  async function saveSlot(slot: TextSlot) {
    const key = `${slot.page}/${slot.slot}`;
    const content = getDraft(slot);
    setSaving(key);
    try {
      const { error } = await supabase.from('site_texts').upsert({ page: slot.page, slot: slot.slot, label: slot.label, content, updated_at: new Date().toISOString() }, { onConflict: 'page,slot' });
      if (error) throw error;
      setSaved((prev) => {
        const next = prev.filter((s) => !(s.page === slot.page && s.slot === slot.slot));
        return [...next, { id: '', page: slot.page, slot: slot.slot, content }];
      });
      setDrafts((prev) => { const n = { ...prev }; delete n[key]; return n; });
      showStatus('success', `Saved: ${slot.label}`);
    } catch (err: unknown) {
      showStatus('error', err instanceof Error ? err.message : 'Save failed');
    } finally {
      setSaving(null);
    }
  }

  const pageSlots = TEXT_SLOTS.filter((s) => s.page === activePage);

  return (
    <div className="flex flex-1 min-h-0">
      {status && (
        <div className={`fixed top-6 right-6 z-50 flex items-center gap-3 px-5 py-3 rounded-sm shadow-lg font-sans text-sm ${status.type === 'success' ? 'bg-stone-800 text-stone-100' : 'bg-red-800 text-red-100'}`}>
          {status.type === 'success' ? <CheckCircle className="w-4 h-4 flex-shrink-0" /> : <AlertCircle className="w-4 h-4 flex-shrink-0" />}
          {status.message}
        </div>
      )}

      {/* Sidebar */}
      <aside className="w-44 flex-shrink-0 bg-stone-50 border-r border-stone-200 pt-4 overflow-y-auto">
        {TEXT_PAGES.map((page) => {
          const total = TEXT_SLOTS.filter((s) => s.page === page).length;
          const done = saved.filter((s) => s.page === page).length;
          return (
            <button key={page} onClick={() => setActivePage(page)} className={`w-full text-left px-4 py-3 transition-colors ${activePage === page ? 'bg-stone-900 text-stone-100' : 'text-stone-600 hover:bg-stone-100'}`}>
              <p className="font-sans text-xs tracking-wide capitalize font-medium">{page}</p>
              <p className="font-sans text-[10px] mt-0.5 text-stone-400">{done}/{total} edited</p>
            </button>
          );
        })}
      </aside>

      {/* Editor */}
      <main className="flex-1 p-6 overflow-y-auto">
        <h2 className="font-serif text-lg font-light text-stone-900 mb-5 capitalize">{activePage}</h2>
        <div className="space-y-4">
          {pageSlots.map((slot) => {
            const key = `${slot.page}/${slot.slot}`;
            const dirty = isDirty(slot);
            const isSaving = saving === key;
            return (
              <div key={key} className="bg-white border border-stone-200 rounded-sm p-5">
                <div className="flex items-start justify-between mb-2 gap-4">
                  <div>
                    <p className="font-sans text-[10px] text-stone-400 uppercase tracking-wide">{slot.slot}</p>
                    <p className="font-sans text-sm text-stone-600 mt-0.5">{slot.label}</p>
                  </div>
                  <button
                    onClick={() => saveSlot(slot)}
                    disabled={!dirty || isSaving}
                    className={`flex-shrink-0 flex items-center gap-1.5 font-sans text-xs py-1.5 px-3 transition-colors ${
                      dirty
                        ? 'bg-stone-900 text-stone-100 hover:bg-stone-700'
                        : 'bg-stone-100 text-stone-400 cursor-default'
                    }`}
                  >
                    {isSaving ? <Loader className="w-3.5 h-3.5 animate-spin" /> : <Save className="w-3.5 h-3.5" />}
                    {isSaving ? 'Saving…' : dirty ? 'Save' : 'Saved'}
                  </button>
                </div>
                {slot.multiline ? (
                  <textarea
                    value={getDraft(slot)}
                    onChange={(e) => setDraft(slot, e.target.value)}
                    rows={Math.max(2, getDraft(slot).split('\n').length + 1)}
                    className="w-full font-sans text-sm text-stone-800 bg-stone-50 border border-stone-200 focus:border-stone-400 focus:outline-none p-3 resize-y leading-relaxed"
                  />
                ) : (
                  <input
                    type="text"
                    value={getDraft(slot)}
                    onChange={(e) => setDraft(slot, e.target.value)}
                    className="w-full font-sans text-sm text-stone-800 bg-stone-50 border border-stone-200 focus:border-stone-400 focus:outline-none p-3"
                  />
                )}
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}

// ─── Main Admin ───────────────────────────────────────────────────────────────

export default function Admin() {
  const [authed, setAuthed] = useState(false);
  const [tab, setTab] = useState<'images' | 'texts'>('images');

  if (!authed) return <PasswordGate onUnlock={() => setAuthed(true)} />;

  return (
    <div className="min-h-screen bg-stone-100 flex flex-col">
      {/* Header */}
      <div className="bg-stone-900 text-stone-100 px-6 lg:px-10 py-6 flex items-center justify-between flex-shrink-0">
        <div>
          <h1 className="font-serif text-xl font-light">Site Manager</h1>
          <p className="font-sans text-xs text-stone-400 mt-0.5">Changes appear on the website immediately.</p>
        </div>
        <div className="flex gap-1">
          <button
            onClick={() => setTab('images')}
            className={`flex items-center gap-2 font-sans text-xs tracking-wide uppercase px-4 py-2 transition-colors ${tab === 'images' ? 'bg-stone-100 text-stone-900' : 'text-stone-400 hover:text-stone-100'}`}
          >
            <Image className="w-3.5 h-3.5" />
            Images
          </button>
          <button
            onClick={() => setTab('texts')}
            className={`flex items-center gap-2 font-sans text-xs tracking-wide uppercase px-4 py-2 transition-colors ${tab === 'texts' ? 'bg-stone-100 text-stone-900' : 'text-stone-400 hover:text-stone-100'}`}
          >
            <Type className="w-3.5 h-3.5" />
            Texts
          </button>
        </div>
      </div>

      {/* Tab content */}
      <div className="flex flex-1 overflow-hidden" style={{ height: 'calc(100vh - 73px)' }}>
        {tab === 'images' ? <ImagesTab /> : <TextsTab />}
      </div>
    </div>
  );
}
