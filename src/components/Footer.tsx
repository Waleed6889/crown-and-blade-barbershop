import React from 'react';
import { Instagram, Facebook, Twitter, Phone, Mail, MapPin, Calendar, Clock, Shield, ArrowUp } from 'lucide-react';
import { servicesData } from '../data/services';

interface FooterProps {
  onOpenBooking: () => void;
  onOpenLegal: (type: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, onOpenLegal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
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
    <footer className="bg-[#070707] border-t border-white/10 text-neutral-400 text-xs relative">
      {/* Top Banner Callout */}
      <div className="border-b border-white/5 py-8 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <span className="text-[11px] uppercase tracking-widest text-[#D4AF37] font-semibold block">
              Downtown Chicago Grooming Lounge
            </span>
            <h3 className="font-serif-luxury text-xl font-bold text-white mt-0.5">
              Ready for the Crown &amp; Blade Experience?
            </h3>
          </div>
          <button
            onClick={onOpenBooking}
            className="px-6 py-3 text-xs uppercase tracking-widest font-bold text-black bg-[#D4AF37] hover:bg-[#E5C158] transition-colors rounded-sm shadow-lg whitespace-nowrap cursor-pointer"
          >
            Book Appointment Now
          </button>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1 & 2: Brand Story */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-sm border border-[#D4AF37] bg-[#141414] flex items-center justify-center text-[#D4AF37] font-serif-luxury font-bold text-sm">
                CB
              </div>
              <span className="font-serif-luxury font-bold text-lg text-white tracking-wider">
                CROWN &amp; BLADE
              </span>
            </div>
            <p className="text-neutral-400 text-xs leading-relaxed max-w-sm">
              Established in 2012. Chicago&apos;s sanctuary for master scissor cuts, low skin fades, and traditional straight razor shaves. Combining old-world craft with modern luxury hospitality.
            </p>
            <div className="pt-2 flex items-center gap-3 text-neutral-400">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-sm bg-[#141414] border border-white/10 flex items-center justify-center hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-sm bg-[#141414] border border-white/10 flex items-center justify-center hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-sm bg-[#141414] border border-white/10 flex items-center justify-center hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors"
                aria-label="Twitter / X"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 3: Quick Navigation */}
          <div>
            <h4 className="font-serif-luxury font-bold text-white text-xs uppercase tracking-widest mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5">
              {['Home', 'About', 'Services', 'Barbers', 'Gallery', 'Reviews', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={(e) => handleLinkClick(e, `#${item.toLowerCase()}`)}
                    className="hover:text-[#D4AF37] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Signature Services */}
          <div>
            <h4 className="font-serif-luxury font-bold text-white text-xs uppercase tracking-widest mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {servicesData.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <a
                    href="#services"
                    onClick={(e) => handleLinkClick(e, '#services')}
                    className="hover:text-[#D4AF37] transition-colors line-clamp-1"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Salon Hours & Location */}
          <div className="space-y-3">
            <h4 className="font-serif-luxury font-bold text-white text-xs uppercase tracking-widest mb-4">
              Visit Us
            </h4>
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
              <span>428 S Michigan Ave, Suite 100, Chicago, IL 60605</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <a href="tel:3125550198" className="hover:text-white transition-colors tabular-nums">
                (312) 555-0198
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <span>Mon–Fri 9am–8pm · Sat 9am–7pm</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal / AdSense-Friendly Compliance Bar */}
      <div className="border-t border-white/5 py-6 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <div>
            &copy; {new Date().getFullYear()} Crown &amp; Blade Barbershop LLC. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-neutral-300 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => onOpenLegal('terms')}
              className="hover:text-neutral-300 transition-colors cursor-pointer"
            >
              Terms &amp; Conditions
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={scrollToTop}
              className="hover:text-[#D4AF37] transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
