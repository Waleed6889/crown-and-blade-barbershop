import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Check, Navigation, AlertCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('General Inquiry');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!name.trim()) newErrors.name = 'Please provide your full name';
    if (!email.trim() || !email.includes('@')) newErrors.email = 'Please provide a valid email';
    if (!message.trim()) newErrors.message = 'Please provide your message';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#0B0B0B] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold block mb-2">
            Location &amp; Appointments
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            Visit Our Chicago Sanctuary
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 mt-3 leading-relaxed">
            Conveniently situated along Michigan Avenue across from Grant Park. Valet parking assistance available on request.
          </p>
        </div>

        {/* 2-Column Contact & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Salon Details & Operating Hours */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Contact Cards */}
            <div className="bg-[#141414] border border-white/10 rounded-sm p-6 space-y-5">
              <h3 className="font-serif-luxury text-lg font-bold text-white mb-2">Salon Information</h3>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-sm bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-neutral-400 font-medium">Physical Address</div>
                  <div className="text-sm font-semibold text-white mt-0.5">428 S Michigan Ave, Suite 100</div>
                  <div className="text-xs text-neutral-400">Chicago, IL 60605 · Downtown Loop</div>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-sm bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-neutral-400 font-medium">Direct Telephone</div>
                  <a
                    href="tel:3125550198"
                    className="text-sm font-semibold text-white hover:text-[#D4AF37] transition-colors mt-0.5 block tabular-nums"
                  >
                    (312) 555-0198
                  </a>
                  <div className="text-xs text-neutral-400">Front desk concierge available during open hours</div>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-sm bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-neutral-400 font-medium">Electronic Inquiries</div>
                  <a
                    href="mailto:appointments@crownandbladebarber.com"
                    className="text-sm font-semibold text-white hover:text-[#D4AF37] transition-colors mt-0.5 block"
                  >
                    appointments@crownandbladebarber.com
                  </a>
                  <div className="text-xs text-neutral-400">Response within 2 business hours</div>
                </div>
              </div>
            </div>

            {/* Hours Table */}
            <div className="bg-[#141414] border border-white/10 rounded-sm p-6">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-4 h-4 text-[#D4AF37]" />
                <h3 className="font-serif-luxury text-base font-bold text-white">Opening Hours</h3>
              </div>

              <div className="space-y-2.5 text-xs">
                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span className="text-neutral-400">Monday – Friday</span>
                  <span className="text-white font-medium tabular-nums">9:00 AM – 8:00 PM</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span className="text-neutral-400">Saturday</span>
                  <span className="text-white font-medium tabular-nums">9:00 AM – 7:00 PM</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-neutral-400">Sunday</span>
                  <span className="text-white font-medium tabular-nums">10:00 AM – 5:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Styled Map & Contact Form */}
          <div className="lg:col-span-7 space-y-6">
            {/* Interactive Styled Map View */}
            <div className="bg-[#141414] border border-white/10 rounded-sm overflow-hidden relative">
              <div className="h-48 sm:h-56 w-full relative bg-[#1E1E1E]">
                {/* Styled Map Graphic Background */}
                <img
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1000&q=80"
                  alt="Chicago Loop map overview"
                  className="w-full h-full object-cover opacity-35 filter contrast-125"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/40 to-transparent" />

                {/* Map Pin Marker */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex flex-col items-center animate-bounce duration-1000">
                    <div className="bg-[#0B0B0B] border border-[#D4AF37] px-3 py-1 rounded-sm shadow-xl text-center">
                      <span className="text-[11px] font-bold text-[#D4AF37] font-serif-luxury block">
                        CROWN &amp; BLADE
                      </span>
                      <span className="text-[9px] text-neutral-300 block">428 S Michigan Ave</span>
                    </div>
                    <div className="w-3 h-3 bg-[#D4AF37] rotate-45 -mt-1.5 shadow-md" />
                  </div>
                </div>

                {/* Map Directions Button */}
                <div className="absolute bottom-3 right-3">
                  <a
                    href="https://maps.google.com/?q=428+S+Michigan+Ave+Chicago+IL"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-semibold text-black bg-[#D4AF37] hover:bg-[#E5C158] transition-colors rounded-sm shadow-md"
                  >
                    <Navigation className="w-3 h-3" />
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>

            {/* Direct Message Form */}
            <div className="bg-[#141414] border border-white/10 rounded-sm p-6">
              <h3 className="font-serif-luxury text-lg font-bold text-white mb-1">
                Send Us a Message
              </h3>
              <p className="text-xs text-neutral-400 mb-5">
                Have questions regarding services, private groom parties, or customized hair treatments? Send us a note.
              </p>

              {isSent ? (
                <div className="p-4 bg-[#D4AF37]/10 border border-[#D4AF37]/40 rounded-sm text-center">
                  <Check className="w-6 h-6 text-[#D4AF37] mx-auto mb-1.5" />
                  <div className="text-sm font-bold text-white">Message Dispatched</div>
                  <p className="text-xs text-neutral-300 mt-1">
                    Thank you. Our concierge team will reply via email or phone shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-neutral-300 font-medium mb-1">
                        Full Name <span className="text-[#D4AF37]">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className={`w-full bg-[#1A1A1A] border rounded-sm px-3 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none transition-colors ${
                          errors.name ? 'border-red-500' : 'border-white/10 focus:border-[#D4AF37]'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[10px] text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-2.5 h-2.5" /> {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs text-neutral-300 font-medium mb-1">
                        Email Address <span className="text-[#D4AF37]">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={`w-full bg-[#1A1A1A] border rounded-sm px-3 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none transition-colors ${
                          errors.email ? 'border-red-500' : 'border-white/10 focus:border-[#D4AF37]'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[10px] text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-2.5 h-2.5" /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-neutral-300 font-medium mb-1">
                        Phone Number (Optional)
                      </label>
                      <input
                        type="tel"
                        placeholder="(312) 555-0100"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-[#1A1A1A] border border-white/10 focus:border-[#D4AF37] rounded-sm px-3 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs text-neutral-300 font-medium mb-1">
                        Inquiry Topic
                      </label>
                      <select
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full bg-[#1A1A1A] border border-white/10 focus:border-[#D4AF37] rounded-sm px-3 py-2 text-xs text-white focus:outline-none transition-colors"
                      >
                        <option value="General Inquiry">General Service Inquiry</option>
                        <option value="Wedding / Groom Party">Wedding Party / Group Booking</option>
                        <option value="Beard Consultation">Custom Beard Consultation</option>
                        <option value="Media / Partnership">Media or Business Partnership</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-neutral-300 font-medium mb-1">
                      Message <span className="text-[#D4AF37]">*</span>
                    </label>
                    <textarea
                      rows={3}
                      placeholder="How can we assist your grooming experience?"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className={`w-full bg-[#1A1A1A] border rounded-sm px-3 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none transition-colors resize-none ${
                        errors.message ? 'border-red-500' : 'border-white/10 focus:border-[#D4AF37]'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[10px] text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-2.5 h-2.5" /> {errors.message}
                      </p>
                    )}
                  </div>

                  <div className="flex justify-end pt-2">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-6 py-2.5 text-xs uppercase tracking-widest font-bold text-black bg-[#D4AF37] hover:bg-[#E5C158] transition-colors rounded-sm shadow-md cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      Transmit Message
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
