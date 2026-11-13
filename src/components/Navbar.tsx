import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Phone } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: (serviceId?: string, barberId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Barbers', href: '#barbers' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B0B0B]/95 backdrop-blur-md border-b border-white/10 shadow-2xl py-3.5'
          : 'bg-gradient-to-b from-[#0B0B0B]/90 via-[#0B0B0B]/60 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Single text element Brand wordmark */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="group flex items-center gap-2.5 whitespace-nowrap shrink-0 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
          >
            <div className="w-9 h-9 rounded-sm border border-[#D4AF37]/60 bg-[#171717] flex items-center justify-center text-[#D4AF37] font-serif-luxury font-bold text-lg group-hover:border-[#D4AF37] transition-colors">
              CB
            </div>
            <div className="flex flex-col">
              <span className="font-serif-luxury font-bold text-lg sm:text-xl tracking-wider text-white group-hover:text-[#D4AF37] transition-colors">
                CROWN &amp; BLADE
              </span>
              <span className="text-[10px] tracking-[0.25em] text-[#D4AF37] uppercase font-medium">
                Barbershop · Chicago
              </span>
            </div>
          </a>

          {/* Zone 2: Clean single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-neutral-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="whitespace-nowrap shrink-0 hover:text-[#D4AF37] transition-colors py-1 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4AF37] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href="tel:3125550198"
              className="hidden xl:inline-flex items-center gap-1.5 text-xs text-neutral-300 hover:text-white transition-colors px-3 py-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="tabular-nums font-medium">(312) 555-0198</span>
            </a>
            <button
              onClick={() => onOpenBooking()}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs uppercase tracking-widest font-bold text-black bg-[#D4AF37] hover:bg-[#E5C158] transition-all duration-200 rounded-sm shadow-lg shadow-[#D4AF37]/10 active:scale-95 whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              Book Appointment
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => onOpenBooking()}
              className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-black bg-[#D4AF37] rounded-sm"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded-sm"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0F0F0F] border-b border-white/10 px-4 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-base font-medium text-neutral-300 hover:text-[#D4AF37] py-2 border-b border-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 flex flex-col gap-3">
              <a
                href="tel:3125550198"
                className="flex items-center gap-2 text-sm text-neutral-300 py-1"
              >
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                Call (312) 555-0198
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 text-center text-xs uppercase tracking-widest font-bold text-black bg-[#D4AF37] hover:bg-[#E5C158] transition-colors rounded-sm shadow-md"
              >
                Book Appointment Online
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
