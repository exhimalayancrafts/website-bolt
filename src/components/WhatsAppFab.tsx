import { MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '9779861397161';

export default function WhatsAppFab() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#22C55E] flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 rounded-full"
    >
      <MessageCircle size={26} className="text-white" />
    </a>
  );
}
