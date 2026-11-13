import React from 'react';
import { Scissors, Coffee, Sparkles, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#0E0E0E] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold block mb-2">
            Heritage &amp; Philosophy
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            More Than a Haircut. <br />
            An Indulgence in Ritual.
          </h2>
        </div>

        {/* 2-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with Subtle Gold Frame Accent */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-sm overflow-hidden border border-[#D4AF37]/30 shadow-2xl">
              <img
                src="/src/assets/images/about_craft_1794163607731.jpg"
                alt="Master barber crafting precision hairstyle with stainless steel shears"
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            {/* Floating Architectural Badge */}
            <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-[#171717] border border-[#D4AF37]/40 p-5 rounded-sm shadow-2xl max-w-xs">
              <div className="font-serif-luxury text-xl font-bold text-[#D4AF37]">The Noble Code</div>
              <p className="text-xs text-neutral-300 mt-1 leading-relaxed">
                Every appointment is a dedicated 45-to-90 minute craft block. We never double-book or rush our clients.
              </p>
            </div>
          </div>

          {/* Right Column: Story & Distinctions */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-neutral-300 text-sm sm:text-base leading-relaxed">
              <p>
                Founded in Chicago in 2012 by master barber Marcus Vance, Crown &amp; Blade was born out of a desire to reclaim the dignity of the traditional American barbershop. In an era dominated by rushed franchises and 12-minute quick-clips, we set out to build a genuine haven for the modern gentleman.
              </p>
              <p className="text-neutral-400">
                Here, barbering is revered as a disciplined craft. We study bone structure, hair growth direction, lifestyle demands, and facial hair contours before shears ever touch hair. Every cut is bespoke, executed with hand-forged Japanese steel shears and restored vintage Takara Belmont chairs.
              </p>
            </div>

            {/* Three Core Differentiators */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div className="bg-[#141414] border border-white/5 p-4 rounded-sm hover:border-[#D4AF37]/30 transition-colors">
                <div className="w-8 h-8 rounded-sm bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] mb-3">
                  <Scissors className="w-4 h-4" />
                </div>
                <h3 className="font-serif-luxury text-sm font-bold text-white mb-1">Master Pedigree</h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Every barber has 8+ years of dedicated discipline and ongoing academy training.
                </p>
              </div>

              <div className="bg-[#141414] border border-white/5 p-4 rounded-sm hover:border-[#D4AF37]/30 transition-colors">
                <div className="w-8 h-8 rounded-sm bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] mb-3">
                  <Coffee className="w-4 h-4" />
                </div>
                <h3 className="font-serif-luxury text-sm font-bold text-white mb-1">Club Hospitality</h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Complimentary single-barrel bourbon, local craft brew, or Italian roast espresso upon arrival.
                </p>
              </div>

              <div className="bg-[#141414] border border-white/5 p-4 rounded-sm hover:border-[#D4AF37]/30 transition-colors">
                <div className="w-8 h-8 rounded-sm bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] mb-3">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h3 className="font-serif-luxury text-sm font-bold text-white mb-1">Organic Tonics</h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Small-batch, paraben-free eucalyptus tonics, beard balms, and soothing post-shave elixirs.
                </p>
              </div>
            </div>

            {/* Checklist Highlights */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-neutral-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Single-use straight razor blades for maximum hygiene</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Double steamed eucalyptus hot towel treatments</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Private booth reservations for executive privacy</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Complimentary edge-up touch-up within 10 days</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
