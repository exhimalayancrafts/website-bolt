import { Pencil, X, Save, Loader } from 'lucide-react';
import { useEditMode } from '../context/EditModeContext';

export default function EditModeToggle() {
  const { editMode, toggleEditMode, saveAll, saving, dirty } = useEditMode();

  return (
    <div className="fixed bottom-6 right-6 z-[90] flex flex-col items-end gap-2">
      {editMode && dirty && (
        <button
          onClick={saveAll}
          disabled={saving}
          className="flex items-center gap-2 font-sans text-xs text-white bg-emerald-700 hover:bg-emerald-600 disabled:opacity-60 px-4 py-2.5 rounded-full shadow-lg transition-colors"
          aria-label="Save all changes"
        >
          {saving ? <Loader className="w-3.5 h-3.5 animate-spin" /> : <Save className="w-3.5 h-3.5" />}
          {saving ? 'Saving…' : 'Save Changes'}
        </button>
      )}
      <button
        onClick={toggleEditMode}
        className={`flex items-center gap-2 font-sans text-xs px-4 py-2.5 rounded-full shadow-lg transition-colors ${
          editMode
            ? 'bg-stone-700 text-stone-100 hover:bg-stone-600'
            : 'bg-stone-900 text-stone-100 hover:bg-stone-700'
        }`}
        aria-label={editMode ? 'Exit edit mode' : 'Enter edit mode'}
        aria-pressed={editMode}
      >
        {editMode ? <X className="w-3.5 h-3.5" /> : <Pencil className="w-3.5 h-3.5" />}
        {editMode ? 'Exit Edit' : 'Edit Page'}
      </button>
    </div>
  );
}
