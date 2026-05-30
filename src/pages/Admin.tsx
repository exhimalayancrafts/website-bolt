import { useEffect, useRef, useState } from 'react';
import { supabase, getPublicUrl, BUCKET } from '../lib/supabase';
import { IMAGE_SLOTS, type ImageSlot } from '../lib/imageSlots';
import { Upload, Trash2, CheckCircle, AlertCircle, Loader, Lock } from 'lucide-react';

interface UploadedImage {
  id: string;
  page: string;
  slot: string;
  label: string;
  storage_path: string;
}

type Status = { type: 'success' | 'error'; message: string } | null;

const PAGES = [...new Set(IMAGE_SLOTS.map((s) => s.page))];
const ADMIN_PASSWORD = 'exclusivecrafts2024';

function PasswordGate({ onUnlock }: { onUnlock: () => void }) {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value === ADMIN_PASSWORD) {
      sessionStorage.setItem('admin_auth', '1');
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

export default function Admin() {
  const [authed, setAuthed] = useState(() => sessionStorage.getItem('admin_auth') === '1');
  const [uploaded, setUploaded] = useState<UploadedImage[]>([]);
  const [activePage, setActivePage] = useState(PAGES[0]);
  const [uploading, setUploading] = useState<string | null>(null);
  const [deleting, setDeleting] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const pendingSlot = useRef<ImageSlot | null>(null);

  useEffect(() => {
    if (authed) fetchImages();
  }, [authed]);

  if (!authed) return <PasswordGate onUnlock={() => setAuthed(true)} />;

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
      // Remove existing file in storage if present
      const existing = uploaded.find((u) => u.page === slot.page && u.slot === slot.slot);
      if (existing) {
        await supabase.storage.from(BUCKET).remove([existing.storage_path]);
        await supabase.from('site_images').delete().eq('id', existing.id);
      }

      const { error: uploadError } = await supabase.storage
        .from(BUCKET)
        .upload(storagePath, file, { upsert: true });

      if (uploadError) throw uploadError;

      const { error: dbError } = await supabase.from('site_images').upsert({
        page: slot.page,
        slot: slot.slot,
        label: slot.label,
        storage_path: storagePath,
      }, { onConflict: 'storage_path' });

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
    <div className="min-h-screen bg-stone-100">
      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/jpeg,image/jpg,image/png,image/webp"
        className="hidden"
        onChange={handleFileChange}
      />

      {/* Header */}
      <div className="bg-stone-900 text-stone-100 px-6 lg:px-12 py-8">
        <h1 className="font-serif text-2xl font-light">Image Manager</h1>
        <p className="font-sans text-xs text-stone-400 mt-1">
          Upload photos for each page section. Changes appear on the website immediately.
        </p>
      </div>

      {/* Status Toast */}
      {status && (
        <div
          className={`fixed top-6 right-6 z-50 flex items-center gap-3 px-5 py-3 rounded-sm shadow-lg font-sans text-sm ${
            status.type === 'success'
              ? 'bg-stone-800 text-stone-100'
              : 'bg-red-800 text-red-100'
          }`}
        >
          {status.type === 'success' ? (
            <CheckCircle className="w-4 h-4 flex-shrink-0" />
          ) : (
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
          )}
          {status.message}
        </div>
      )}

      <div className="flex">
        {/* Sidebar — page navigation */}
        <aside className="w-48 flex-shrink-0 bg-stone-50 border-r border-stone-200 min-h-screen pt-6">
          {PAGES.map((page) => {
            const total = IMAGE_SLOTS.filter((s) => s.page === page).length;
            const done = uploaded.filter((u) => u.page === page).length;
            return (
              <button
                key={page}
                onClick={() => setActivePage(page)}
                className={`w-full text-left px-5 py-3 transition-colors ${
                  activePage === page
                    ? 'bg-stone-900 text-stone-100'
                    : 'text-stone-600 hover:bg-stone-100'
                }`}
              >
                <p className="font-sans text-xs tracking-wide capitalize font-medium">{page}</p>
                <p className={`font-sans text-[10px] mt-0.5 ${activePage === page ? 'text-stone-400' : 'text-stone-400'}`}>
                  {done}/{total} uploaded
                </p>
              </button>
            );
          })}
        </aside>

        {/* Main — slots grid */}
        <main className="flex-1 p-8">
          <h2 className="font-serif text-xl font-light text-stone-900 mb-6 capitalize">{activePage}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {pageSlots.map((slot) => {
              const existing = uploaded.find(
                (u) => u.page === slot.page && u.slot === slot.slot
              );
              const isUploading = uploading === `${slot.page}/${slot.slot}`;
              const isDeleting = deleting === existing?.id;

              return (
                <div key={slot.slot} className="bg-white border border-stone-200 rounded-sm overflow-hidden">
                  {/* Image preview */}
                  <div className="aspect-[4/3] bg-stone-100 relative overflow-hidden">
                    {existing ? (
                      <img
                        src={getPublicUrl(existing.storage_path)}
                        alt={existing.label}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <p className="font-sans text-xs text-stone-400 text-center px-4">
                          No image
                        </p>
                      </div>
                    )}
                    {(isUploading || isDeleting) && (
                      <div className="absolute inset-0 bg-stone-900/60 flex items-center justify-center">
                        <Loader className="w-6 h-6 text-white animate-spin" />
                      </div>
                    )}
                  </div>

                  {/* Slot info + actions */}
                  <div className="p-4">
                    <p className="font-sans text-xs text-stone-500 mb-1 uppercase tracking-wide">{slot.slot}</p>
                    <p className="font-sans text-sm text-stone-700 leading-snug mb-4">{slot.label}</p>

                    <div className="flex gap-2">
                      <button
                        onClick={() => triggerUpload(slot)}
                        disabled={isUploading}
                        className="flex-1 flex items-center justify-center gap-2 font-sans text-xs py-2 px-3 bg-stone-900 text-stone-100 hover:bg-stone-700 transition-colors disabled:opacity-50"
                      >
                        <Upload className="w-3.5 h-3.5" />
                        {existing ? 'Replace' : 'Upload'}
                      </button>
                      {existing && (
                        <button
                          onClick={() => handleDelete(existing)}
                          disabled={isDeleting}
                          className="flex items-center justify-center gap-1 font-sans text-xs py-2 px-3 border border-stone-300 text-stone-500 hover:border-red-400 hover:text-red-600 transition-colors disabled:opacity-50"
                        >
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
    </div>
  );
}
