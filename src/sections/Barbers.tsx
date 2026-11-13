import React from 'react';
import { barbersData, Barber } from '../data/barbers';
import { Scissors, Calendar, Instagram, Award } from 'lucide-react';

interface BarbersProps {
  onSelectBarberToBook: (barberId: string) => void;
}

export const Barbers: React.FC<BarbersProps> = ({ onSelectBarberToBook }) => {
  return (
    <section id="barbers" className="py-20 sm:py-28 bg-[#0E0E0E] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold block mb-2">
            The Master Craftsmen
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            Meet the Artisans Behind the Chair
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 mt-3 leading-relaxed">
            Every barber at Crown &amp; Blade holds master accreditation, with decades of collective experience crafting bespoke silhouettes for distinguished clientele.
          </p>
        </div>

        {/* Barbers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {barbersData.map((barber) => (
            <div
              key={barber.id}
              className="group bg-[#141414] border border-white/10 hover:border-[#D4AF37]/50 rounded-sm overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/70"
            >
              {/* Photo with subtle vignette and social badge */}
              <div className="relative aspect-[4/5] overflow-hidden bg-[#1D1D1D]">
                <img
                  src={barber.image}
                  alt={`${barber.name} - ${barber.title} at Crown & Blade`}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent opacity-90" />

                {/* Barber availability pill */}
                <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-sm border border-white/10 text-[10px] text-neutral-300 font-medium py-1 px-2.5 rounded-sm">
                  {barber.schedule}
                </div>
              </div>

              {/* Bio & Details */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-serif-luxury text-lg font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                      {barber.name}
                    </h3>
                  </div>

                  <div className="text-xs text-[#D4AF37] font-medium mb-1">{barber.title}</div>
                  <div className="text-[11px] text-neutral-400 mb-3 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>{barber.experience}</span>
                  </div>

                  <p className="text-xs text-neutral-300 leading-relaxed mb-4">
                    {barber.bio}
                  </p>

                  {/* Specialties */}
                  <div className="mb-4 pt-3 border-t border-white/5">
                    <span className="block text-[10px] uppercase tracking-wider text-neutral-400 mb-2 font-medium">
                      Specialties:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {barber.specialties.map((spec, i) => (
                        <span
                          key={i}
                          className="text-[11px] text-neutral-300 bg-[#1D1D1D] px-2 py-0.5 rounded-sm border border-white/5"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-2 pt-3 border-t border-white/5">
                  <button
                    onClick={() => onSelectBarberToBook(barber.id)}
                    className="w-full py-2.5 px-3 text-xs uppercase tracking-widest font-bold text-black bg-[#D4AF37] hover:bg-[#E5C158] transition-colors rounded-sm flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    Book with {barber.name.split(' ')[0]}
                  </button>

                  <div className="text-center">
                    <span className="inline-flex items-center gap-1 text-[11px] text-neutral-400 hover:text-white transition-colors">
                      <Instagram className="w-3 h-3 text-[#D4AF37]" />
                      {barber.instagram}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
