import React, { useState, useEffect } from 'react';
import { X, Check, Calendar as CalendarIcon, Clock, User, Scissors, Sparkles, AlertCircle } from 'lucide-react';
import { servicesData, Service } from '../data/services';
import { barbersData, Barber } from '../data/barbers';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedServiceId?: string | null;
  preselectedBarberId?: string | null;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedServiceId,
  preselectedBarberId,
}) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedBarberId, setSelectedBarberId] = useState<string>('any');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [clientName, setClientName] = useState<string>('');
  const [clientPhone, setClientPhone] = useState<string>('');
  const [clientEmail, setClientEmail] = useState<string>('');
  const [clientNotes, setClientNotes] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
const [apiError, setApiError] = useState<string>('');

  const [confirmationCode, setConfirmationCode] = useState<string>('');
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (preselectedServiceId) {
      const match = servicesData.find((s) => s.id === preselectedServiceId);
      if (match) setSelectedService(match);
    } else if (!selectedService) {
      setSelectedService(servicesData[0]);
    }

    if (preselectedBarberId) {
      setSelectedBarberId(preselectedBarberId);
    }
  }, [preselectedServiceId, preselectedBarberId]);

  // Generate next 6 dates starting tomorrow
  const availableDates = Array.from({ length: 6 }).map((_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i + 1);
    return {
      iso: d.toISOString().split('T')[0],
      dayName: d.toLocaleDateString('en-US', { weekday: 'short' }),
      dateNum: d.getDate(),
      monthName: d.toLocaleDateString('en-US', { month: 'short' }),
    };
  });

  const availableTimeSlots = [
    '09:30 AM',
    '10:15 AM',
    '11:00 AM',
    '11:45 AM',
    '01:15 PM',
    '02:00 PM',
    '03:00 PM',
    '04:15 PM',
    '05:00 PM',
    '06:15 PM',
    '07:00 PM',
  ];

  useEffect(() => {
    if (!selectedDate && availableDates.length > 0) {
      setSelectedDate(availableDates[0].iso);
    }
    if (!selectedTime) {
      setSelectedTime(availableTimeSlots[2]);
    }
  }, []);

  const resetForm = () => {
    setStep(1);
    setIsSubmitted(false);
    setFormErrors({});
  };

  const handleNextStep = () => {
    if (step === 1 && !selectedService) {
      return;
    }
    if (step === 3 && (!selectedDate || !selectedTime)) {
      return;
    }
    setStep((prev) => Math.min(prev + 1, 4) as any);
  };

  const handlePrevStep = () => {
    setStep((prev) => Math.max(prev - 1, 1) as any);
  };

 
const handleSubmitBooking = async (e: React.FormEvent) => {
  e.preventDefault();

  const errors: { [key: string]: string } = {};

  if (!clientName.trim()) {
    errors.name = 'Full name is required';
  }

  if (!clientPhone.trim() || clientPhone.replace(/\D/g, '').length < 10) {
    errors.phone = 'Valid 10-digit US phone number is required';
  }

  if (!clientEmail.trim() || !clientEmail.includes('@') || !clientEmail.includes('.')) {
    errors.email = 'Valid email address is required';
  }

  if (Object.keys(errors).length > 0) {
    setFormErrors(errors);
    return;
  }

  setFormErrors({});
  setApiError('');
  setIsSubmitting(true);

  try {
    const response = await fetch('http://localhost:5000/api/appointments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        serviceId: selectedService?.id,
        barberId: selectedBarberId,
        date: selectedDate,
        time: selectedTime,
        clientName,
        clientPhone,
        clientEmail,
        clientNotes,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Booking failed. Please try again.');
    }

    setConfirmationCode(data.referenceCode);
    setIsSubmitted(true);

  } catch (error) {
    setApiError(
      error instanceof Error ? error.message : 'Something went wrong.'
    );
  } finally {
    setIsSubmitting(false);
  }
};

  if (!isOpen) return null;

  const chosenBarber = barbersData.find((b) => b.id === selectedBarberId);
  const barberDisplay = selectedBarberId === 'any' ? 'First Available Master Barber' : chosenBarber?.name || 'Master Barber';

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4">
      <div
        className="relative w-full max-w-2xl bg-[#141414] border border-[#D4AF37]/30 rounded-sm shadow-2xl overflow-hidden transition-all my-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-title"
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0B0B0B] border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-sm border border-[#D4AF37]/50 flex items-center justify-center text-[#D4AF37] font-serif-luxury font-bold text-xs">
              CB
            </div>
            <div>
              <h2 id="booking-title" className="font-serif-luxury text-base sm:text-lg font-bold text-white tracking-wide">
                RESERVE YOUR APPOINTMENT
              </h2>
              <p className="text-[11px] text-neutral-400">Crown &amp; Blade Barbershop · Chicago, IL</p>
            </div>
          </div>
          <button
            onClick={() => {
              onClose();
              if (isSubmitted) resetForm();
            }}
            className="p-1.5 text-neutral-400 hover:text-white rounded-sm transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#D4AF37]"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Tracker (unless submitted) */}
        {!isSubmitted && (
          <div className="grid grid-cols-4 border-b border-white/5 bg-[#111111] text-[11px] text-neutral-400">
            {[
              { num: 1, label: 'Service' },
              { num: 2, label: 'Barber' },
              { num: 3, label: 'Date & Time' },
              { num: 4, label: 'Details' },
            ].map((s) => (
              <div
                key={s.num}
                className={`py-2.5 text-center font-medium transition-colors border-b-2 ${
                  step === s.num
                    ? 'border-[#D4AF37] text-[#D4AF37] bg-[#D4AF37]/5'
                    : step > s.num
                    ? 'border-neutral-500 text-neutral-200'
                    : 'border-transparent text-neutral-500'
                }`}
              >
                <span className="hidden sm:inline">Step </span>
                {s.num}. {s.label}
              </div>
            ))}
          </div>
        )}

        {/* Content Body */}
        <div className="p-6">
          {isSubmitted ? (
            /* Confirmation Screen */
            <div className="py-4 text-center">
              <div className="w-14 h-14 bg-[#D4AF37]/10 border border-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4 text-[#D4AF37]">
                <Check className="w-7 h-7" />
              </div>
              <span className="text-[11px] uppercase tracking-widest text-[#D4AF37] font-semibold">
                Reservation Confirmed
              </span>
              <h3 className="font-serif-luxury text-2xl font-bold text-white mt-1 mb-2">
                We Look Forward to Welcoming You
              </h3>
              <p className="text-sm text-neutral-300 max-w-md mx-auto mb-6">
  Your appointment has been successfully booked for{' '}
  <strong className="text-white">{clientName}</strong>.
  Your booking details are saved.
</p>

              {/* Booking Summary Ticket */}
              <div className="bg-[#0B0B0B] border border-white/10 rounded-sm p-4 text-left max-w-md mx-auto mb-6 space-y-2.5 text-xs">
                <div className="flex justify-between items-center pb-2 border-b border-white/10">
                  <span className="text-neutral-400">Confirmation Code:</span>
                  <span className="font-mono font-bold text-[#D4AF37] tracking-wider text-sm">{confirmationCode}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-400">Service:</span>
                  <span className="text-white font-medium">{selectedService?.name}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-400">Barber:</span>
                  <span className="text-white font-medium">{barberDisplay}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-400">Scheduled Time:</span>
                  <span className="text-white font-medium">
                    {selectedDate} at {selectedTime} ({selectedService?.duration})
                  </span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-white/10">
                  <span className="text-neutral-400">Total Due at Salon:</span>
                  <span className="text-white font-bold text-sm">${selectedService?.price}.00</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={() => {
                    onClose();
                    resetForm();
                  }}
                  className="px-6 py-2.5 text-xs uppercase tracking-widest font-bold text-black bg-[#D4AF37] hover:bg-[#E5C158] transition-colors rounded-sm"
                >
                  Done
                </button>
                <button
                  onClick={resetForm}
                  className="px-6 py-2.5 text-xs uppercase tracking-wider font-semibold text-neutral-300 border border-white/20 hover:border-white transition-colors rounded-sm"
                >
                  Book Another Service
                </button>
              </div>
            </div>
          ) : (
            <div>
              {/* STEP 1: SELECT SERVICE */}
              {step === 1 && (
                <div>
                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                      Select Your Grooming Service
                    </h3>
                    <p className="text-xs text-neutral-400">
                      Every service includes complimentary consultation, beverage service, and hot towel rinse.
                    </p>
                  </div>
                  <div className="space-y-2.5 max-h-[360px] overflow-y-auto pr-1">
                    {servicesData.map((service) => {
                      const isSelected = selectedService?.id === service.id;
                      return (
                        <div
                          key={service.id}
                          onClick={() => setSelectedService(service)}
                          className={`p-3.5 border rounded-sm cursor-pointer transition-all ${
                            isSelected
                              ? 'border-[#D4AF37] bg-[#D4AF37]/10'
                              : 'border-white/10 bg-[#1A1A1A] hover:border-white/25'
                          }`}
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <span className="font-semibold text-sm text-white">{service.name}</span>
                                {service.popular && (
                                  <span className="text-[10px] text-[#D4AF37] font-medium tracking-wider uppercase">
                                    Popular
                                  </span>
                                )}
                              </div>
                              <p className="text-xs text-neutral-400 mt-1 line-clamp-2">{service.description}</p>
                            </div>
                            <div className="text-right shrink-0">
                              <div className="text-sm font-bold text-[#D4AF37] tabular-nums">${service.price}</div>
                              <div className="text-[11px] text-neutral-400 tabular-nums">{service.duration}</div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* STEP 2: SELECT BARBER */}
              {step === 2 && (
                <div>
                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                      Select Master Barber
                    </h3>
                    <p className="text-xs text-neutral-400">
                      Choose your preferred craftsman, or let us pair you with the earliest open chair.
                    </p>
                  </div>
                  <div className="space-y-3">
                    {/* Any available barber option */}
                    <div
                      onClick={() => setSelectedBarberId('any')}
                      className={`p-3.5 border rounded-sm cursor-pointer transition-all flex items-center justify-between ${
                        selectedBarberId === 'any'
                          ? 'border-[#D4AF37] bg-[#D4AF37]/10'
                          : 'border-white/10 bg-[#1A1A1A] hover:border-white/25'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#262626] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37]">
                          <Scissors className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-white">First Available Master Barber</div>
                          <div className="text-xs text-neutral-400">Recommended for fastest seating &amp; flexible scheduling</div>
                        </div>
                      </div>
                      {selectedBarberId === 'any' && <Check className="w-5 h-5 text-[#D4AF37]" />}
                    </div>

                    {/* Barber list */}
                    {barbersData.map((barber) => {
                      const isSelected = selectedBarberId === barber.id;
                      return (
                        <div
                          key={barber.id}
                          onClick={() => setSelectedBarberId(barber.id)}
                          className={`p-3.5 border rounded-sm cursor-pointer transition-all flex items-center justify-between ${
                            isSelected
                              ? 'border-[#D4AF37] bg-[#D4AF37]/10'
                              : 'border-white/10 bg-[#1A1A1A] hover:border-white/25'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <img
                              src={barber.image}
                              alt={barber.name}
                              className="w-10 h-10 rounded-full object-cover border border-[#D4AF37]/30"
                              referrerPolicy="no-referrer"
                            />
                            <div>
                              <div className="text-sm font-semibold text-white">{barber.name}</div>
                              <div className="text-xs text-[#D4AF37]">{barber.title}</div>
                              <div className="text-[11px] text-neutral-400 mt-0.5">
                                {barber.specialties.join(' · ')}
                              </div>
                            </div>
                          </div>
                          {isSelected && <Check className="w-5 h-5 text-[#D4AF37]" />}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* STEP 3: DATE & TIME */}
              {step === 3 && (
                <div>
                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                      Choose Date &amp; Time Slot
                    </h3>
                    <p className="text-xs text-neutral-400">
                      Standard operating hours are Mon–Fri 9am–8pm, Sat 9am–7pm, Sun 10am–5pm.
                    </p>
                  </div>

                  {/* Date pills */}
                  <div className="mb-5">
                    <span className="block text-xs text-neutral-300 font-medium mb-2">Select Date</span>
                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                      {availableDates.map((d) => {
                        const isSelected = selectedDate === d.iso;
                        return (
                          <button
                            key={d.iso}
                            type="button"
                            onClick={() => setSelectedDate(d.iso)}
                            className={`p-2.5 rounded-sm border text-center transition-all ${
                              isSelected
                                ? 'border-[#D4AF37] bg-[#D4AF37]/15 text-[#D4AF37]'
                                : 'border-white/10 bg-[#1A1A1A] text-neutral-300 hover:border-white/20'
                            }`}
                          >
                            <span className="block text-[10px] uppercase">{d.dayName}</span>
                            <span className="block text-base font-bold tabular-nums text-white">{d.dateNum}</span>
                            <span className="block text-[10px] text-neutral-400">{d.monthName}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Time slots */}
                  <div>
                    <span className="block text-xs text-neutral-300 font-medium mb-2">Available Time Slots</span>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 max-h-[160px] overflow-y-auto pr-1">
                      {availableTimeSlots.map((time) => {
                        const isSelected = selectedTime === time;
                        return (
                          <button
                            key={time}
                            type="button"
                            onClick={() => setSelectedTime(time)}
                            className={`py-2 px-3 text-xs font-medium rounded-sm border transition-all tabular-nums ${
                              isSelected
                                ? 'border-[#D4AF37] bg-[#D4AF37] text-black font-bold'
                                : 'border-white/10 bg-[#1A1A1A] text-neutral-300 hover:border-white/30'
                            }`}
                          >
                            {time}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 4: CONTACT & NOTES */}
              {step === 4 && (
                <form onSubmit={handleSubmitBooking}>
                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                      Guest &amp; Contact Information
                    </h3>
                    <p className="text-xs text-neutral-400">
                      We will send your confirmation and reminder via SMS and email.
                    </p>
                  </div>

                  {/* Quick Order Summary Pill */}
                  <div className="p-3 bg-[#0B0B0B] border border-white/10 rounded-sm mb-4 text-xs flex justify-between items-center">
                    <div>
                      <span className="text-[#D4AF37] font-semibold">{selectedService?.name}</span>
                      <span className="text-neutral-400 block text-[11px]">
                        with {barberDisplay} · {selectedDate} at {selectedTime}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="font-bold text-white text-sm">${selectedService?.price}</span>
                      <span className="text-[10px] text-neutral-500 block">Pay at salon</span>
                    </div>
                  </div>

                  <div className="space-y-3.5">
                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1">
                        Full Name <span className="text-[#D4AF37]">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. David Sterling"
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        className={`w-full bg-[#1A1A1A] border rounded-sm px-3.5 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none transition-colors ${
                          formErrors.name ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-[#D4AF37]'
                        }`}
                      />
                      {formErrors.name && (
                        <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {formErrors.name}
                        </p>
                      )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-medium text-neutral-300 mb-1">
                          Mobile Phone (US) <span className="text-[#D4AF37]">*</span>
                        </label>
                        <input
                          type="tel"
                          placeholder="(312) 555-0198"
                          value={clientPhone}
                          onChange={(e) => setClientPhone(e.target.value)}
                          className={`w-full bg-[#1A1A1A] border rounded-sm px-3.5 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none transition-colors ${
                            formErrors.phone ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-[#D4AF37]'
                          }`}
                        />
                        {formErrors.phone && (
                          <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" /> {formErrors.phone}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-neutral-300 mb-1">
                          Email Address <span className="text-[#D4AF37]">*</span>
                        </label>
                        <input
                          type="email"
                          placeholder="client@domain.com"
                          value={clientEmail}
                          onChange={(e) => setClientEmail(e.target.value)}
                          className={`w-full bg-[#1A1A1A] border rounded-sm px-3.5 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none transition-colors ${
                            formErrors.email ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-[#D4AF37]'
                          }`}
                        />
                        {formErrors.email && (
                          <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" /> {formErrors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1">
                        Hair Notes / Special Requests (Optional)
                      </label>
                      <textarea
                        rows={2}
                        placeholder="e.g. Sensitive skin, skin fade #0.5 on sides, preference for bourbon or sparkling water"
                        value={clientNotes}
                        onChange={(e) => setClientNotes(e.target.value)}
                        className="w-full bg-[#1A1A1A] border border-white/10 rounded-sm px-3.5 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#D4AF37] transition-colors resize-none"
                      />
                    </div>
                  </div>
{apiError && (
  <p className="text-sm text-red-400 mt-3">
    {apiError}
  </p>
)}
                  <div className="mt-5 flex items-center justify-between pt-4 border-t border-white/10">
                    <button
                      type="button"
                      onClick={handlePrevStep}
                      className="px-4 py-2 text-xs text-neutral-400 hover:text-white transition-colors"
                    >
                      ← Back
                    </button>
                    <button
  type="submit"
  disabled={isSubmitting}
  className="px-6 py-2.5 text-xs uppercase tracking-widest font-bold text-black bg-[#D4AF37] hover:bg-[#E5C158] transition-colors rounded-sm shadow-md disabled:opacity-50"
>
  {isSubmitting ? 'Booking...' : 'Confirm Appointment'}
</button>
                  </div>
                </form>
              )}

              {/* Navigation buttons for steps 1-3 */}
              {step < 4 && (
                <div className="mt-6 flex items-center justify-between pt-4 border-t border-white/10">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={handlePrevStep}
                      className="px-4 py-2 text-xs text-neutral-400 hover:text-white transition-colors"
                    >
                      ← Back
                    </button>
                  ) : (
                    <span />
                  )}

                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="px-6 py-2.5 text-xs uppercase tracking-widest font-bold text-black bg-[#D4AF37] hover:bg-[#E5C158] transition-colors rounded-sm shadow-md"
                  >
                    Continue to Step {step + 1} →
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
