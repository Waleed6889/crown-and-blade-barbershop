import React, { useState } from 'react';
import { servicesData, serviceCategories, Service } from '../data/services';
import { Clock, Check, Calendar, ArrowRight } from 'lucide-react';

interface ServicesProps {
  onSelectServiceToBook: (serviceId: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceToBook }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredServices = servicesData.filter((service) => {
    if (activeCategory === 'all') return true;
    return service.category === activeCategory;
  });

  return (
    <section id="services" className="py-20 sm:py-28 bg-[#0B0B0B] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold block mb-2">
              Menu of Services
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Tailored Cuts &amp; Master Shaves
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-md mt-4 md:mt-0 leading-relaxed">
            Every service includes a personalized consultation, hair wash, straight razor neck outline, and our signature hot towel finish.
          </p>
        </div>

        {/* Category Filters (Segmented tabs) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {serviceCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-sm whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#D4AF37] text-black shadow-lg shadow-[#D4AF37]/15'
                  : 'bg-[#171717] text-neutral-300 hover:text-white hover:bg-[#202020] border border-white/5'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className={`group relative bg-[#141414] border rounded-sm p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/60 ${
                service.popular
                  ? 'border-[#D4AF37]/60 shadow-lg shadow-[#D4AF37]/5'
                  : 'border-white/10 hover:border-[#D4AF37]/40'
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3 right-5 bg-[#D4AF37] text-black text-[10px] uppercase tracking-widest font-bold py-0.5 px-2.5 rounded-sm shadow-sm">
                  Most Requested
                </div>
              )}

              <div>
                <div className="flex justify-between items-baseline gap-4 mb-2">
                  <h3 className="font-serif-luxury text-lg font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                    {service.name}
                  </h3>
                  <div className="text-xl font-bold text-[#D4AF37] font-mono tabular-nums shrink-0">
                    ${service.price}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-neutral-400 mb-4">
                  <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span className="tabular-nums font-medium">{service.duration}</span>
                  <span className="text-white/20">·</span>
                  <span className="capitalize">{service.category}</span>
                </div>

                <p className="text-xs text-neutral-300 leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Service inclusions */}
                <ul className="space-y-2 mb-6 pt-4 border-t border-white/5 text-xs text-neutral-400">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => onSelectServiceToBook(service.id)}
                className="w-full py-2.5 px-4 text-xs uppercase tracking-widest font-bold text-neutral-200 group-hover:text-black bg-[#1C1C1C] group-hover:bg-[#D4AF37] border border-white/10 group-hover:border-[#D4AF37] transition-all duration-200 rounded-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Book This Service</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        {/* Pricing Guarantee Strip */}
        <div className="mt-12 p-5 bg-[#121212] border border-[#D4AF37]/20 rounded-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <span className="font-serif-luxury font-bold text-sm text-white">Need a Bespoke Grooming Package?</span>
            <p className="text-xs text-neutral-400 mt-0.5">
              We also cater private wedding parties, executive retreats, and corporate group bookings with custom beverage pairings.
            </p>
          </div>
          <button
            onClick={() => onSelectServiceToBook('vip-full-service')}
            className="px-5 py-2.5 text-xs uppercase tracking-widest font-bold text-black bg-[#D4AF37] hover:bg-[#E5C158] transition-colors rounded-sm shrink-0 whitespace-nowrap cursor-pointer"
          >
            Inquire About Group Bookings
          </button>
        </div>
      </div>
    </section>
  );
};
