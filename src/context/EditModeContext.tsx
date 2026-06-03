import { createContext, useContext, useState, useCallback } from 'react';
import { supabase } from '../lib/supabase';

interface PendingChange {
  table: 'site_texts' | 'site_images';
  page: string;
  slot: string;
  content?: string;
  label?: string;
}

interface EditModeContextType {
  editMode: boolean;
  toggleEditMode: () => void;
  pending: Record<string, PendingChange>;
  setPending: (key: string, change: PendingChange) => void;
  saveAll: () => Promise<void>;
  saving: boolean;
  dirty: boolean;
}

const EditModeContext = createContext<EditModeContextType>({
  editMode: false,
  toggleEditMode: () => {},
  pending: {},
  setPending: () => {},
  saveAll: async () => {},
  saving: false,
  dirty: false,
});

export function EditModeProvider({ children }: { children: React.ReactNode }) {
  const [editMode, setEditMode] = useState(false);
  const [pending, setPendingState] = useState<Record<string, PendingChange>>({});
  const [saving, setSaving] = useState(false);

  const toggleEditMode = () => {
    setEditMode((prev) => !prev);
    setPendingState({});
  };

  const setPending = useCallback((key: string, change: PendingChange) => {
    setPendingState((prev) => ({ ...prev, [key]: change }));
  }, []);

  const saveAll = useCallback(async () => {
    if (!Object.keys(pending).length) return;
    setSaving(true);
    try {
      const textChanges = Object.values(pending).filter((c) => c.table === 'site_texts');
      for (const c of textChanges) {
        await supabase.from('site_texts').upsert(
          { page: c.page, slot: c.slot, label: c.label ?? '', content: c.content ?? '', updated_at: new Date().toISOString() },
          { onConflict: 'page,slot' }
        );
      }
      setPendingState({});
    } finally {
      setSaving(false);
    }
  }, [pending]);

  return (
    <EditModeContext.Provider value={{ editMode, toggleEditMode, pending, setPending, saveAll, saving, dirty: Object.keys(pending).length > 0 }}>
      {children}
    </EditModeContext.Provider>
  );
}

export const useEditMode = () => useContext(EditModeContext);
