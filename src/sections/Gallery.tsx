import React, { useState } from 'react';
import { galleryItems, GalleryItem } from '../data/gallery';
import { Maximize2 } from 'lucide-react';

interface GalleryProps {
  onOpenLightbox: (item: GalleryItem) => void;
}

export const Gallery: React.FC<GalleryProps> = ({ onOpenLightbox }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'haircuts' | 'beards' | 'interior'>('all');

  const filteredItems = galleryItems.filter((item) => {
    if (activeTab === 'all') return true;
    return item.category === activeTab;
  });

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[#0B0B0B] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold block mb-2">
              Visual Portfolio
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              The Crown &amp; Blade Gallery
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-md mt-4 md:mt-0 leading-relaxed">
            A visual record of signature haircuts, low skin fades, sculpted beards, and the private club atmosphere of our Chicago lounge.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {[
            { id: 'all', label: 'All Portfolio' },
            { id: 'haircuts', label: 'Haircuts & Scissor Work' },
            { id: 'beards', label: 'Beards & Shaves' },
            { id: 'interior', label: 'Salon Lounge' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-sm whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-[#D4AF37] text-black shadow-lg shadow-[#D4AF37]/15'
                  : 'bg-[#171717] text-neutral-300 hover:text-white hover:bg-[#202020] border border-white/5'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onOpenLightbox(item)}
              className="group relative bg-[#141414] border border-white/10 hover:border-[#D4AF37]/60 rounded-sm overflow-hidden aspect-[4/5] cursor-pointer transition-all duration-300 hover:shadow-2xl"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />

              {/* Hover overlay with detail & zoom icon */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 flex flex-col justify-between">
                <div className="self-end">
                  <div className="w-8 h-8 rounded-full bg-black/60 border border-[#D4AF37] flex items-center justify-center text-[#D4AF37]">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#D4AF37] font-semibold block">
                    {item.category}
                  </span>
                  <h3 className="font-serif-luxury text-sm font-bold text-white mt-1">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-neutral-300 mt-1 line-clamp-2">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
