/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Services } from './sections/Services';
import { Barbers } from './sections/Barbers';
import { Gallery } from './sections/Gallery';
import { Testimonials } from './sections/Testimonials';
import { Contact } from './sections/Contact';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { LightboxModal } from './components/LightboxModal';
import { LegalModal } from './components/LegalModals';
import { GalleryItem } from './data/gallery';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [preselectedServiceId, setPreselectedServiceId] = useState<string | null>(null);
  const [preselectedBarberId, setPreselectedBarberId] = useState<string | null>(null);
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  const handleOpenBooking = (serviceId?: string, barberId?: string) => {
    setPreselectedServiceId(serviceId || null);
    setPreselectedBarberId(barberId || null);
    setIsBookingOpen(true);
  };

  const handleSelectServiceToBook = (serviceId: string) => {
    setPreselectedServiceId(serviceId);
    setPreselectedBarberId(null);
    setIsBookingOpen(true);
  };

  const handleSelectBarberToBook = (barberId: string) => {
    setPreselectedBarberId(barberId);
    setPreselectedServiceId(null);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white flex flex-col font-sans selection:bg-[#D4AF37]/30 selection:text-[#F3E5AB]">
      {/* 1. Navbar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* 3. About Our Salon */}
        <About />

        {/* 4. Our Services & Prices */}
        <Services onSelectServiceToBook={handleSelectServiceToBook} />

        {/* 5. Meet Our Barbers */}
        <Barbers onSelectBarberToBook={handleSelectBarberToBook} />

        {/* 6. Gallery */}
        <Gallery onOpenLightbox={(item) => setLightboxItem(item)} />

        {/* 7. Customer Reviews */}
        <Testimonials />

        {/* 8. Contact & Location */}
        <Contact />
      </main>

      {/* 9. Footer */}
      <Footer
        onOpenBooking={() => handleOpenBooking()}
        onOpenLegal={(type) => setLegalModalType(type)}
      />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedServiceId={preselectedServiceId}
        preselectedBarberId={preselectedBarberId}
      />

      {/* Lightbox Modal for Gallery */}
      <LightboxModal
        item={lightboxItem}
        onClose={() => setLightboxItem(null)}
      />

      {/* Privacy Policy & Terms Modal (AdSense Friendly) */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
