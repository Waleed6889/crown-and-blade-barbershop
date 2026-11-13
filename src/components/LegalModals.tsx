import React from 'react';
import { X, Shield, FileText } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
      <div
        className="relative w-full max-w-3xl bg-[#141414] border border-[#D4AF37]/30 rounded-sm shadow-2xl overflow-hidden my-8"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between px-6 py-4 bg-[#0B0B0B] border-b border-white/10">
          <div className="flex items-center gap-2.5">
            {type === 'privacy' ? (
              <Shield className="w-5 h-5 text-[#D4AF37]" />
            ) : (
              <FileText className="w-5 h-5 text-[#D4AF37]" />
            )}
            <h2 className="font-serif-luxury text-lg font-bold text-white tracking-wide">
              {type === 'privacy' ? 'PRIVACY POLICY' : 'TERMS OF SERVICE'}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-white rounded-sm transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 max-h-[70vh] overflow-y-auto text-xs text-neutral-300 space-y-4 leading-relaxed">
          {type === 'privacy' ? (
            <>
              <p className="text-neutral-400">Last Updated: November 2026</p>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider">1. Information We Collect</h3>
              <p>
                Crown &amp; Blade Barbershop (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) values your privacy. When you schedule an appointment or contact us through our website, we may collect your name, phone number, email address, appointment preferences, and service history.
              </p>

              <h3 className="text-sm font-semibold text-white uppercase tracking-wider">2. How We Use Your Information</h3>
              <p>
                We use collected information solely for scheduling, appointment reminders, customer service communications, and providing our grooming services. We do not sell, rent, or trade your personal information to third parties.
              </p>

              <h3 className="text-sm font-semibold text-white uppercase tracking-wider">3. Google AdSense &amp; Analytics Disclosure</h3>
              <p>
                This website may use cookies and web beacons to analyze website traffic and deliver relevant advertising via Google AdSense and third-party advertising networks. Google uses cookies to serve ads based on prior visits to this or other websites. Users may opt out of personalized advertising by visiting Google Ads Settings.
              </p>

              <h3 className="text-sm font-semibold text-white uppercase tracking-wider">4. Data Security</h3>
              <p>
                We implement industry-standard physical, electronic, and procedural safeguards to protect your personal information against unauthorized access and disclosure.
              </p>

              <h3 className="text-sm font-semibold text-white uppercase tracking-wider">5. Contact Us</h3>
              <p>
                For privacy inquiries or to request data removal, please contact our salon director at{' '}
                <span className="text-[#D4AF37]">privacy@crownandbladebarber.com</span> or write to Crown &amp; Blade Barbershop, 428 S Michigan Ave, Suite 100, Chicago, IL 60605.
              </p>
            </>
          ) : (
            <>
              <p className="text-neutral-400">Last Updated: November 2026</p>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider">1. Agreement to Terms</h3>
              <p>
                By visiting our salon website or booking services with Crown &amp; Blade Barbershop, you agree to comply with and be bound by these Terms of Service.
              </p>

              <h3 className="text-sm font-semibold text-white uppercase tracking-wider">2. Appointment &amp; Cancellation Policy</h3>
              <p>
                We respect your time and ask that you respect ours. Please notify us at least 2 hours prior to your scheduled booking if you need to reschedule or cancel. Late arrivals exceeding 15 minutes may require rescheduling to respect subsequent appointments.
              </p>

              <h3 className="text-sm font-semibold text-white uppercase tracking-wider">3. Service Satisfaction Guarantee</h3>
              <p>
                We pride ourselves on millimeter precision and uncompromising hospitality. If you require an adjustment to your cut, taper, or beard shaping, please inform us before leaving or contact us within 48 hours for a complimentary refinement.
              </p>

              <h3 className="text-sm font-semibold text-white uppercase tracking-wider">4. Code of Conduct &amp; Salon Environment</h3>
              <p>
                Crown &amp; Blade provides an inclusive, relaxing, and premium environment for all patrons and staff. We reserve the right to decline service to any guest engaging in disruptive, disrespectful, or unsafe behavior.
              </p>

              <h3 className="text-sm font-semibold text-white uppercase tracking-wider">5. Intellectual Property</h3>
              <p>
                All trademarks, imagery, service names, and content published on this website are the proprietary property of Crown &amp; Blade Barbershop.
              </p>
            </>
          )}
        </div>

        <div className="px-6 py-3.5 bg-[#0B0B0B] border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs uppercase tracking-wider font-bold text-black bg-[#D4AF37] hover:bg-[#E5C158] transition-colors rounded-sm"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};
