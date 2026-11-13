import React from 'react';
import { X } from 'lucide-react';
import { GalleryItem } from '../data/gallery';

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-[#141414] border border-[#D4AF37]/30 rounded-sm overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black/70 hover:bg-black text-white rounded-full transition-colors border border-white/20"
          aria-label="Close image preview"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative aspect-video sm:aspect-[16/10] bg-black">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-contain"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="p-5 bg-[#0F0F0F] border-t border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-semibold">
              Crown &amp; Blade Craft Showcase · {item.category}
            </span>
            <h3 className="font-serif-luxury text-lg font-bold text-white">{item.title}</h3>
            <p className="text-xs text-neutral-400 mt-0.5">{item.subtitle}</p>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs uppercase tracking-wider font-semibold text-neutral-300 border border-white/20 hover:border-white transition-colors rounded-sm"
          >
            Close View
          </button>
        </div>
      </div>
    </div>
  );
};
