import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const KEY = 'ec_cookie_consent';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(KEY)) setVisible(true);
  }, []);

  const accept = () => { localStorage.setItem(KEY, '1'); setVisible(false); };
  const decline = () => { localStorage.setItem(KEY, '0'); setVisible(false); };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-[100] bg-stone-900 border-t border-stone-700 px-6 py-5 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8"
    >
      <p className="font-sans text-sm text-stone-300 leading-relaxed flex-1">
        We use cookies to improve your experience.{' '}
        <Link to="/privacy" className="underline hover:text-stone-100 transition-colors">
          Privacy Policy
        </Link>
      </p>
      <div className="flex gap-3 flex-shrink-0">
        <button onClick={decline} className="font-sans text-xs text-stone-400 hover:text-stone-200 border border-stone-600 hover:border-stone-400 px-4 py-2 transition-colors">
          Decline
        </button>
        <button onClick={accept} className="font-sans text-xs text-stone-900 bg-stone-100 hover:bg-white px-5 py-2 transition-colors">
          Accept
        </button>
      </div>
    </div>
  );
}
