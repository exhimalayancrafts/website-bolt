import { useEffect, useRef, useState } from 'react';
import { supabase, getPublicUrl, BUCKET } from '../lib/supabase';
import { IMAGE_SLOTS, type ImageSlot } from '../lib/imageSlots';
import { TEXT_SLOTS, type TextSlot } from '../lib/textSlots';
import { VIDEO_SLOTS, type VideoSlot } from '../lib/videoSlots';
import { LINK_SLOTS, type LinkSlot } from '../lib/linkSlots';
import { Upload, Trash2, CheckCircle, AlertCircle, Loader, Lock, Image, Type, Video, Link2, Save } from 'lucide-react';

interface UploadedImage { id: string; page: string; slot: string; label: string; storage_path: string; }
interface SavedText { id: string; page: string; slot: string; content: string; }
interface SavedVideo { id: string; page: string; slot: string; url: string; }
interface SavedLink { id: string; page: string; slot: string; href: string; link_text: string; opens_new_tab: boolean; }

type Status = { type: 'success' | 'error'; message: string } | null;
type Tab = 'images' | 'texts' | 'videos' | 'links';

const ADMIN_PASSWORD = 'exclusivecrafts2024';
const IMAGE_PAGES = [...new Set(IMAGE_SLOTS.map((s) => s.page))];
const TEXT_PAGES  = [...new Set(TEXT_SLOTS.map((s) => s.page))];
const VIDEO_PAGES = [...new Set(VIDEO_SLOTS.map((s) => s.page))];
const LINK_PAGES  = [...new Set(LINK_SLOTS.map((s) => s.page))];

// ─── Shared helpers ───────────────────────────────────────────────────────────

function Toast({ status }: { status: Status }) {
  if (!status) return null;
  return (
    <div className={`fixed top-6 right-6 z-50 flex items-center gap-3 px-5 py-3 rounded-sm shadow-lg font-sans text-sm ${status.type === 'success' ? 'bg-stone-800 text-stone-100' : 'bg-red-800 text-red-100'}`}>
      {status.type === 'success' ? <CheckCircle className="w-4 h-4 flex-shrink-0" /> : <AlertCircle className="w-4 h-4 flex-shrink-0" />}
      {status.message}
    </div>
  );
}

function Sidebar({ pages, activePage, onSelect, counts }: { pages: string[]; activePage: string; onSelect: (p: string) => void; counts: (page: string) => { done: number; total: number } }) {
  return (
    <aside className="w-44 flex-shrink-0 bg-stone-50 border-r border-stone-200 pt-4 overflow-y-auto">
      {pages.map((page) => {
        const { done, total } = counts(page);
        return (
          <button key={page} onClick={() => onSelect(page)} className={`w-full text-left px-4 py-3 transition-colors ${activePage === page ? 'bg-stone-900 text-stone-100' : 'text-stone-600 hover:bg-stone-100'}`}>
            <p className="font-sans text-xs tracking-wide capitalize font-medium">{page}</p>
            <p className="font-sans text-[10px] mt-0.5 text-stone-400">{done}/{total}</p>
          </button>
        );
      })}
    </aside>
  );
}

// ─── Password gate ────────────────────────────────────────────────────────────

function PasswordGate({ onUnlock }: { onUnlock: () => void }) {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value === ADMIN_PASSWORD) { onUnlock(); }
    else { setError(true); setValue(''); setTimeout(() => setError(false), 2000); }
  };

  return (
    <div className="min-h-screen bg-stone-900 flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <div className="flex justify-center mb-8"><Lock className="w-7 h-7 text-stone-400" /></div>
        <p className="font-serif text-xl font-light text-stone-100 text-center mb-8">Admin Access</p>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input type="password" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Password" autoFocus
            className={`w-full bg-transparent border-b py-3 font-sans text-base text-stone-100 placeholder-stone-600 focus:outline-none transition-colors ${error ? 'border-red-500' : 'border-stone-600 focus:border-stone-300'}`} />
          {error && <p className="font-sans text-sm text-red-400">Incorrect password</p>}
          <button type="submit" className="w-full font-sans text-sm text-stone-400 hover:text-stone-100 border border-stone-700 hover:border-stone-400 py-3 transition-colors">Enter</button>
        </form>
      </div>
    </div>
  );
}

// ─── Images Tab ───────────────────────────────────────────────────────────────

function ImagesTab() {
  const [uploaded, setUploaded] = useState<UploadedImage[]>([]);
  const [activePage, setActivePage] = useState(IMAGE_PAGES[0]);
  const [uploading, setUploading] = useState<string | null>(null);
  const [deleting, setDeleting] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const pendingSlot = useRef<ImageSlot | null>(null);

  useEffect(() => {
    supabase.from('site_images').select('*').then(({ data }) => { if (data) setUploaded(data as UploadedImage[]); });
  }, []);

  function showStatus(type: 'success' | 'error', message: string) { setStatus({ type, message }); setTimeout(() => setStatus(null), 4000); }

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
      const { error: ue } = await supabase.storage.from(BUCKET).upload(storagePath, file, { upsert: true });
      if (ue) throw ue;
      const { error: de } = await supabase.from('site_images').upsert({ page: slot.page, slot: slot.slot, label: slot.label, storage_path: storagePath }, { onConflict: 'storage_path' });
      if (de) throw de;
      showStatus('success', `Uploaded: ${slot.label}`);
      supabase.from('site_images').select('*').then(({ data }) => { if (data) setUploaded(data as UploadedImage[]); });
    } catch (err: unknown) { showStatus('error', err instanceof Error ? err.message : 'Upload failed'); }
    finally { setUploading(null); pendingSlot.current = null; }
  }

  async function handleDelete(img: UploadedImage) {
    setDeleting(img.id);
    try {
      await supabase.storage.from(BUCKET).remove([img.storage_path]);
      await supabase.from('site_images').delete().eq('id', img.id);
      showStatus('success', 'Image removed');
      setUploaded((prev) => prev.filter((u) => u.id !== img.id));
    } catch (err: unknown) { showStatus('error', err instanceof Error ? err.message : 'Delete failed'); }
    finally { setDeleting(null); }
  }

  const pageSlots = IMAGE_SLOTS.filter((s) => s.page === activePage);

  return (
    <div className="flex flex-1 min-h-0">
      <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
      <Toast status={status} />
      <Sidebar pages={IMAGE_PAGES} activePage={activePage} onSelect={setActivePage}
        counts={(page) => ({ total: IMAGE_SLOTS.filter((s) => s.page === page).length, done: uploaded.filter((u) => u.page === page).length })} />
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
                  {existing ? <img src={getPublicUrl(existing.storage_path)} alt={existing.label} className="w-full h-full object-cover" />
                    : <div className="w-full h-full flex items-center justify-center"><p className="font-sans text-xs text-stone-400 text-center px-4">No image</p></div>}
                  {(isUploading || isDeleting) && <div className="absolute inset-0 bg-stone-900/60 flex items-center justify-center"><Loader className="w-6 h-6 text-white animate-spin" /></div>}
                </div>
                <div className="p-4">
                  <p className="font-sans text-[10px] text-stone-400 mb-1 uppercase tracking-wide">{slot.slot}</p>
                  <p className="font-sans text-sm text-stone-700 leading-snug mb-3">{slot.label}</p>
                  <div className="flex gap-2">
                    <button onClick={() => { pendingSlot.current = slot; fileInputRef.current?.click(); }} disabled={isUploading}
                      className="flex-1 flex items-center justify-center gap-2 font-sans text-xs py-2 px-3 bg-stone-900 text-stone-100 hover:bg-stone-700 transition-colors disabled:opacity-50">
                      <Upload className="w-3.5 h-3.5" />{existing ? 'Replace' : 'Upload'}
                    </button>
                    {existing && <button onClick={() => handleDelete(existing)} disabled={isDeleting}
                      className="flex items-center justify-center px-3 border border-stone-300 text-stone-500 hover:border-red-400 hover:text-red-600 transition-colors disabled:opacity-50">
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>}
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

  useEffect(() => { supabase.from('site_texts').select('*').then(({ data }) => { if (data) setSaved(data as SavedText[]); }); }, []);

  function showStatus(type: 'success' | 'error', message: string) { setStatus({ type, message }); setTimeout(() => setStatus(null), 4000); }
  function getDraft(slot: TextSlot): string {
    const key = `${slot.page}/${slot.slot}`;
    if (key in drafts) return drafts[key];
    return saved.find((s) => s.page === slot.page && s.slot === slot.slot)?.content ?? slot.defaultContent;
  }
  function isDirty(slot: TextSlot): boolean {
    const key = `${slot.page}/${slot.slot}`;
    if (!(key in drafts)) return false;
    const original = saved.find((s) => s.page === slot.page && s.slot === slot.slot)?.content ?? slot.defaultContent;
    return drafts[key] !== original;
  }
  async function saveSlot(slot: TextSlot) {
    const key = `${slot.page}/${slot.slot}`;
    setSaving(key);
    try {
      const { error } = await supabase.from('site_texts').upsert({ page: slot.page, slot: slot.slot, label: slot.label, content: getDraft(slot), updated_at: new Date().toISOString() }, { onConflict: 'page,slot' });
      if (error) throw error;
      setSaved((prev) => [...prev.filter((s) => !(s.page === slot.page && s.slot === slot.slot)), { id: '', page: slot.page, slot: slot.slot, content: getDraft(slot) }]);
      setDrafts((prev) => { const n = { ...prev }; delete n[key]; return n; });
      showStatus('success', `Saved: ${slot.label}`);
    } catch (err: unknown) { showStatus('error', err instanceof Error ? err.message : 'Save failed'); }
    finally { setSaving(null); }
  }

  const pageSlots = TEXT_SLOTS.filter((s) => s.page === activePage);

  return (
    <div className="flex flex-1 min-h-0">
      <Toast status={status} />
      <Sidebar pages={TEXT_PAGES} activePage={activePage} onSelect={setActivePage}
        counts={(page) => ({ total: TEXT_SLOTS.filter((s) => s.page === page).length, done: saved.filter((s) => s.page === page).length })} />
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
                  <button onClick={() => saveSlot(slot)} disabled={!dirty || isSaving}
                    className={`flex-shrink-0 flex items-center gap-1.5 font-sans text-xs py-1.5 px-3 transition-colors ${dirty ? 'bg-stone-900 text-stone-100 hover:bg-stone-700' : 'bg-stone-100 text-stone-400 cursor-default'}`}>
                    {isSaving ? <Loader className="w-3.5 h-3.5 animate-spin" /> : <Save className="w-3.5 h-3.5" />}
                    {isSaving ? 'Saving…' : dirty ? 'Save' : 'Saved'}
                  </button>
                </div>
                {slot.multiline
                  ? <textarea value={getDraft(slot)} onChange={(e) => setDrafts((p) => ({ ...p, [key]: e.target.value }))}
                      rows={Math.max(2, getDraft(slot).split('\n').length + 1)}
                      className="w-full font-sans text-sm text-stone-800 bg-stone-50 border border-stone-200 focus:border-stone-400 focus:outline-none p-3 resize-y leading-relaxed" />
                  : <input type="text" value={getDraft(slot)} onChange={(e) => setDrafts((p) => ({ ...p, [key]: e.target.value }))}
                      className="w-full font-sans text-sm text-stone-800 bg-stone-50 border border-stone-200 focus:border-stone-400 focus:outline-none p-3" />}
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}

// ─── Videos Tab ───────────────────────────────────────────────────────────────

function VideosTab() {
  const [saved, setSaved] = useState<SavedVideo[]>([]);
  const [activePage, setActivePage] = useState(VIDEO_PAGES[0]);
  const [drafts, setDrafts] = useState<Record<string, string>>({});
  const [saving, setSaving] = useState<string | null>(null);
  const [deleting, setDeleting] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>(null);

  useEffect(() => { supabase.from('site_videos').select('*').then(({ data }) => { if (data) setSaved(data as SavedVideo[]); }); }, []);

  function showStatus(type: 'success' | 'error', message: string) { setStatus({ type, message }); setTimeout(() => setStatus(null), 4000); }
  function getDraft(slot: VideoSlot): string {
    const key = `${slot.page}/${slot.slot}`;
    if (key in drafts) return drafts[key];
    return saved.find((s) => s.page === slot.page && s.slot === slot.slot)?.url ?? '';
  }
  function isDirty(slot: VideoSlot): boolean {
    const key = `${slot.page}/${slot.slot}`;
    if (!(key in drafts)) return false;
    const original = saved.find((s) => s.page === slot.page && s.slot === slot.slot)?.url ?? '';
    return drafts[key] !== original;
  }

  async function saveSlot(slot: VideoSlot) {
    const key = `${slot.page}/${slot.slot}`;
    const url = getDraft(slot).trim();
    setSaving(key);
    try {
      const { error } = await supabase.from('site_videos').upsert({ page: slot.page, slot: slot.slot, label: slot.label, url, updated_at: new Date().toISOString() }, { onConflict: 'page,slot' });
      if (error) throw error;
      setSaved((prev) => [...prev.filter((s) => !(s.page === slot.page && s.slot === slot.slot)), { id: '', page: slot.page, slot: slot.slot, url }]);
      setDrafts((prev) => { const n = { ...prev }; delete n[key]; return n; });
      showStatus('success', `Saved: ${slot.label}`);
    } catch (err: unknown) { showStatus('error', err instanceof Error ? err.message : 'Save failed'); }
    finally { setSaving(null); }
  }

  async function deleteSlot(slot: VideoSlot) {
    const key = `${slot.page}/${slot.slot}`;
    const record = saved.find((s) => s.page === slot.page && s.slot === slot.slot);
    if (!record?.id) return;
    setDeleting(key);
    try {
      await supabase.from('site_videos').delete().eq('id', record.id);
      setSaved((prev) => prev.filter((s) => !(s.page === slot.page && s.slot === slot.slot)));
      setDrafts((prev) => { const n = { ...prev }; delete n[key]; return n; });
      showStatus('success', 'Video removed');
    } catch (err: unknown) { showStatus('error', err instanceof Error ? err.message : 'Delete failed'); }
    finally { setDeleting(null); }
  }

  const pageSlots = VIDEO_SLOTS.filter((s) => s.page === activePage);

  return (
    <div className="flex flex-1 min-h-0">
      <Toast status={status} />
      <Sidebar pages={VIDEO_PAGES} activePage={activePage} onSelect={setActivePage}
        counts={(page) => ({ total: VIDEO_SLOTS.filter((s) => s.page === page).length, done: saved.filter((s) => s.page === page && s.url).length })} />
      <main className="flex-1 p-6 overflow-y-auto">
        <h2 className="font-serif text-lg font-light text-stone-900 mb-1 capitalize">{activePage}</h2>
        <p className="font-sans text-xs text-stone-400 mb-6">Paste a YouTube URL, Vimeo URL, or direct .mp4 link.</p>
        <div className="space-y-4">
          {pageSlots.map((slot) => {
            const key = `${slot.page}/${slot.slot}`;
            const existing = saved.find((s) => s.page === slot.page && s.slot === slot.slot);
            const dirty = isDirty(slot);
            const isSaving = saving === key;
            const isDeleting = deleting === key;
            return (
              <div key={key} className="bg-white border border-stone-200 rounded-sm p-5">
                <div className="flex items-start justify-between mb-3 gap-4">
                  <div>
                    <p className="font-sans text-[10px] text-stone-400 uppercase tracking-wide">{slot.slot}</p>
                    <p className="font-sans text-sm text-stone-600 mt-0.5">{slot.label}</p>
                  </div>
                  <div className="flex gap-2 flex-shrink-0">
                    {existing?.url && <button onClick={() => deleteSlot(slot)} disabled={isDeleting}
                      className="flex items-center gap-1 font-sans text-xs px-3 py-1.5 border border-stone-300 text-stone-500 hover:border-red-400 hover:text-red-600 transition-colors disabled:opacity-50">
                      {isDeleting ? <Loader className="w-3.5 h-3.5 animate-spin" /> : <Trash2 className="w-3.5 h-3.5" />}
                    </button>}
                    <button onClick={() => saveSlot(slot)} disabled={!dirty || isSaving}
                      className={`flex items-center gap-1.5 font-sans text-xs py-1.5 px-3 transition-colors ${dirty ? 'bg-stone-900 text-stone-100 hover:bg-stone-700' : 'bg-stone-100 text-stone-400 cursor-default'}`}>
                      {isSaving ? <Loader className="w-3.5 h-3.5 animate-spin" /> : <Save className="w-3.5 h-3.5" />}
                      {isSaving ? 'Saving…' : dirty ? 'Save' : existing?.url ? 'Saved' : 'Save'}
                    </button>
                  </div>
                </div>
                <input type="url" value={getDraft(slot)} onChange={(e) => setDrafts((p) => ({ ...p, [key]: e.target.value }))}
                  placeholder="https://youtube.com/watch?v=... or https://vimeo.com/..."
                  className="w-full font-sans text-sm text-stone-800 bg-stone-50 border border-stone-200 focus:border-stone-400 focus:outline-none p-3" />
                {existing?.url && !drafts[key] && (
                  <p className="font-sans text-[11px] text-stone-400 mt-2 truncate">Current: {existing.url}</p>
                )}
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}

// ─── Links Tab ────────────────────────────────────────────────────────────────

function LinksTab() {
  const [saved, setSaved] = useState<SavedLink[]>([]);
  const [activePage, setActivePage] = useState(LINK_PAGES[0]);
  const [drafts, setDrafts] = useState<Record<string, Partial<SavedLink>>>({});
  const [saving, setSaving] = useState<string | null>(null);
  const [deleting, setDeleting] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>(null);

  useEffect(() => { supabase.from('site_links').select('*').then(({ data }) => { if (data) setSaved(data as SavedLink[]); }); }, []);

  function showStatus(type: 'success' | 'error', message: string) { setStatus({ type, message }); setTimeout(() => setStatus(null), 4000); }

  function getField(slot: LinkSlot, field: 'href' | 'link_text' | 'opens_new_tab'): string | boolean {
    const key = `${slot.page}/${slot.slot}`;
    const draft = drafts[key];
    if (draft && field in draft) return draft[field] as string | boolean;
    const record = saved.find((s) => s.page === slot.page && s.slot === slot.slot);
    if (record) return record[field];
    if (field === 'href') return slot.defaultHref;
    if (field === 'link_text') return slot.defaultLinkText;
    return true;
  }

  function setField(slot: LinkSlot, field: 'href' | 'link_text' | 'opens_new_tab', value: string | boolean) {
    const key = `${slot.page}/${slot.slot}`;
    setDrafts((prev) => ({ ...prev, [key]: { ...prev[key], [field]: value } }));
  }

  function isDirty(slot: LinkSlot): boolean {
    const key = `${slot.page}/${slot.slot}`;
    return key in drafts && Object.keys(drafts[key]).length > 0;
  }

  async function saveSlot(slot: LinkSlot) {
    const key = `${slot.page}/${slot.slot}`;
    setSaving(key);
    const payload = {
      page: slot.page, slot: slot.slot, label: slot.label,
      href: getField(slot, 'href') as string,
      link_text: getField(slot, 'link_text') as string,
      opens_new_tab: getField(slot, 'opens_new_tab') as boolean,
      updated_at: new Date().toISOString(),
    };
    try {
      const { error } = await supabase.from('site_links').upsert(payload, { onConflict: 'page,slot' });
      if (error) throw error;
      setSaved((prev) => [...prev.filter((s) => !(s.page === slot.page && s.slot === slot.slot)), { id: '', ...payload }]);
      setDrafts((prev) => { const n = { ...prev }; delete n[key]; return n; });
      showStatus('success', `Saved: ${slot.label}`);
    } catch (err: unknown) { showStatus('error', err instanceof Error ? err.message : 'Save failed'); }
    finally { setSaving(null); }
  }

  async function deleteSlot(slot: LinkSlot) {
    const key = `${slot.page}/${slot.slot}`;
    const record = saved.find((s) => s.page === slot.page && s.slot === slot.slot);
    if (!record?.id) return;
    setDeleting(key);
    try {
      await supabase.from('site_links').delete().eq('id', record.id);
      setSaved((prev) => prev.filter((s) => !(s.page === slot.page && s.slot === slot.slot)));
      setDrafts((prev) => { const n = { ...prev }; delete n[key]; return n; });
      showStatus('success', 'Link removed');
    } catch (err: unknown) { showStatus('error', err instanceof Error ? err.message : 'Delete failed'); }
    finally { setDeleting(null); }
  }

  const pageSlots = LINK_SLOTS.filter((s) => s.page === activePage);

  return (
    <div className="flex flex-1 min-h-0">
      <Toast status={status} />
      <Sidebar pages={LINK_PAGES} activePage={activePage} onSelect={setActivePage}
        counts={(page) => ({ total: LINK_SLOTS.filter((s) => s.page === page).length, done: saved.filter((s) => s.page === page && s.href).length })} />
      <main className="flex-1 p-6 overflow-y-auto">
        <h2 className="font-serif text-lg font-light text-stone-900 mb-1 capitalize">{activePage}</h2>
        <p className="font-sans text-xs text-stone-400 mb-6">Paste internal paths (e.g. /products) or full external URLs. Leave blank to hide the link.</p>
        <div className="space-y-4">
          {pageSlots.map((slot) => {
            const key = `${slot.page}/${slot.slot}`;
            const existing = saved.find((s) => s.page === slot.page && s.slot === slot.slot);
            const dirty = isDirty(slot);
            const isSaving = saving === key;
            const isDeleting = deleting === key;
            return (
              <div key={key} className="bg-white border border-stone-200 rounded-sm p-5">
                <div className="flex items-start justify-between mb-3 gap-4">
                  <div>
                    <p className="font-sans text-[10px] text-stone-400 uppercase tracking-wide">{slot.slot}</p>
                    <p className="font-sans text-sm text-stone-600 mt-0.5">{slot.label}</p>
                  </div>
                  <div className="flex gap-2 flex-shrink-0">
                    {existing?.href && <button onClick={() => deleteSlot(slot)} disabled={isDeleting}
                      className="flex items-center gap-1 font-sans text-xs px-3 py-1.5 border border-stone-300 text-stone-500 hover:border-red-400 hover:text-red-600 transition-colors disabled:opacity-50">
                      {isDeleting ? <Loader className="w-3.5 h-3.5 animate-spin" /> : <Trash2 className="w-3.5 h-3.5" />}
                    </button>}
                    <button onClick={() => saveSlot(slot)} disabled={!dirty || isSaving}
                      className={`flex items-center gap-1.5 font-sans text-xs py-1.5 px-3 transition-colors ${dirty ? 'bg-stone-900 text-stone-100 hover:bg-stone-700' : 'bg-stone-100 text-stone-400 cursor-default'}`}>
                      {isSaving ? <Loader className="w-3.5 h-3.5 animate-spin" /> : <Save className="w-3.5 h-3.5" />}
                      {isSaving ? 'Saving…' : dirty ? 'Save' : existing?.href ? 'Saved' : 'Save'}
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                  <div>
                    <label className="font-sans text-[10px] text-stone-400 uppercase tracking-wide block mb-1">Link URL</label>
                    <input type="text" value={getField(slot, 'href') as string} onChange={(e) => setField(slot, 'href', e.target.value)}
                      placeholder={slot.defaultHref || 'https://... or /page'}
                      className="w-full font-sans text-sm text-stone-800 bg-stone-50 border border-stone-200 focus:border-stone-400 focus:outline-none p-2.5" />
                  </div>
                  <div>
                    <label className="font-sans text-[10px] text-stone-400 uppercase tracking-wide block mb-1">Link Text</label>
                    <input type="text" value={getField(slot, 'link_text') as string} onChange={(e) => setField(slot, 'link_text', e.target.value)}
                      placeholder={slot.defaultLinkText}
                      className="w-full font-sans text-sm text-stone-800 bg-stone-50 border border-stone-200 focus:border-stone-400 focus:outline-none p-2.5" />
                  </div>
                </div>
                <label className="flex items-center gap-2 cursor-pointer w-fit">
                  <input type="checkbox" checked={getField(slot, 'opens_new_tab') as boolean}
                    onChange={(e) => setField(slot, 'opens_new_tab', e.target.checked)}
                    className="w-3.5 h-3.5 accent-stone-800" />
                  <span className="font-sans text-xs text-stone-500">Open in new tab</span>
                </label>
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
  const [tab, setTab] = useState<Tab>('images');

  if (!authed) return <PasswordGate onUnlock={() => setAuthed(true)} />;

  const tabs: { id: Tab; label: string; icon: React.ReactNode }[] = [
    { id: 'images', label: 'Images', icon: <Image className="w-3.5 h-3.5" /> },
    { id: 'texts',  label: 'Texts',  icon: <Type className="w-3.5 h-3.5" /> },
    { id: 'videos', label: 'Videos', icon: <Video className="w-3.5 h-3.5" /> },
    { id: 'links',  label: 'Links',  icon: <Link2 className="w-3.5 h-3.5" /> },
  ];

  return (
    <div className="min-h-screen bg-stone-100 flex flex-col">
      <div className="bg-stone-900 text-stone-100 px-6 lg:px-10 py-5 flex items-center justify-between flex-shrink-0">
        <div>
          <h1 className="font-serif text-xl font-light">Site Manager</h1>
          <p className="font-sans text-xs text-stone-400 mt-0.5">Changes appear on the website immediately.</p>
        </div>
        <div className="flex gap-1">
          {tabs.map((t) => (
            <button key={t.id} onClick={() => setTab(t.id)}
              className={`flex items-center gap-2 font-sans text-xs tracking-wide uppercase px-4 py-2 transition-colors ${tab === t.id ? 'bg-stone-100 text-stone-900' : 'text-stone-400 hover:text-stone-100'}`}>
              {t.icon}{t.label}
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-1 overflow-hidden" style={{ height: 'calc(100vh - 69px)' }}>
        {tab === 'images' && <ImagesTab />}
        {tab === 'texts'  && <TextsTab />}
        {tab === 'videos' && <VideosTab />}
        {tab === 'links'  && <LinksTab />}
      </div>
    </div>
  );
}
