import React from 'react';
import { Calendar, ChevronDown, Award, Star, Clock, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const scrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector('#services');
    if (target) {
      const topOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="relative min-h-[92vh] flex flex-col justify-between pt-28 pb-12 sm:pt-36 sm:pb-16 overflow-hidden">
      {/* Background Photography with Scrim Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_barbershop_1794163606056.jpg"
          alt="Crown & Blade luxury barbershop interior with vintage leather chairs"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        {/* Measured dark gradient scrim for WCAG AA readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B]/95 via-[#0B0B0B]/85 to-[#0B0B0B]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-[#0B0B0B]/60" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto w-full">
        <div className="max-w-3xl">
          {/* Subtle text kicker */}
          <div className="inline-flex items-center gap-2 mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
            <span>Established 2012</span>
            <span aria-hidden="true" className="text-white/40">·</span>
            <span>Downtown Chicago</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] mb-6 text-balance">
            Master Barbering. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#B89545]">
              Uncompromising Craft.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed mb-8 max-w-2xl font-light">
            Welcome to Crown &amp; Blade, Chicago&apos;s premier men&apos;s grooming sanctuary. Experience bespoke scissor tailoring, razor-sharp skin fades, and traditional hot towel shaves delivered in an exclusive lounge atmosphere.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs uppercase tracking-widest font-bold text-black bg-[#D4AF37] hover:bg-[#E5C158] transition-all duration-200 rounded-sm shadow-xl shadow-[#D4AF37]/15 active:scale-95 cursor-pointer whitespace-nowrap"
            >
              <Calendar className="w-4 h-4" />
              Book Your Appointment
            </button>
            <a
              href="#services"
              onClick={scrollToServices}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs uppercase tracking-widest font-semibold text-white border border-white/20 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-200 rounded-sm bg-black/40 backdrop-blur-sm whitespace-nowrap"
            >
              Explore Services &amp; Prices
            </a>
          </div>

          {/* Single-line quick trust quote */}
          <div className="flex items-center gap-3 text-xs text-neutral-400">
            <div className="flex text-[#D4AF37]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37]" />
              ))}
            </div>
            <span>Rated <strong className="text-white">4.9 / 5.0</strong> by 850+ discerning gentlemen</span>
          </div>
        </div>
      </div>

      {/* Trust Indicator Strip */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-12 sm:mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t border-white/10 bg-[#0B0B0B]/60 backdrop-blur-sm p-4 rounded-sm">
          <div className="flex items-start gap-3">
            <Award className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
            <div>
              <div className="text-sm font-bold text-white tabular-nums">14+ Years</div>
              <div className="text-[11px] text-neutral-400">Master Barber Pedigree</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Star className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
            <div>
              <div className="text-sm font-bold text-white tabular-nums">4.9 / 5.0 Rating</div>
              <div className="text-[11px] text-neutral-400">850+ Verified Client Reviews</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
            <div>
              <div className="text-sm font-bold text-white tabular-nums">12,000+ Cuts</div>
              <div className="text-[11px] text-neutral-400">Precision Sessions Delivered</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
            <div>
              <div className="text-sm font-bold text-white">Guaranteed Precision</div>
              <div className="text-[11px] text-neutral-400">Complimentary 48h Refinement</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
