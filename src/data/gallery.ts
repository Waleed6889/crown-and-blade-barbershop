export interface GalleryItem {
  id: string;
  title: string;
  category: 'haircuts' | 'beards' | 'interior';
  subtitle: string;
  image: string;
  aspect: 'portrait' | 'landscape' | 'square';
}

export const galleryItems: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'The Master Lounge & Cutting Floor',
    category: 'interior',
    subtitle: 'Dark walnut stations with brass fittings and warm lighting',
    image: '/src/assets/images/salon_interior_1794163608615.jpg',
    aspect: 'landscape',
  },
  {
    id: 'g-2',
    title: 'Artisan Scissor & Shear Precision',
    category: 'haircuts',
    subtitle: 'Millimeter-accurate scissor-over-comb texturing',
    image: '/src/assets/images/about_craft_1794163607731.jpg',
    aspect: 'portrait',
  },
  {
    id: 'g-3',
    title: 'Traditional Royal Hot Towel & Razor Shave',
    category: 'beards',
    subtitle: 'Pre-shave eucalyptus oil, warm lather & straight razor finish',
    image: '/src/assets/images/shave_grooming_1794163608871.jpg',
    aspect: 'landscape',
  },
  {
    id: 'g-4',
    title: 'Vintage Leather Barber Stations',
    category: 'interior',
    subtitle: 'Restored Takara Belmont leather chairs under amber glow',
    image: '/src/assets/images/hero_barbershop_1794163606056.jpg',
    aspect: 'landscape',
  },
  {
    id: 'g-5',
    title: 'Low Drop Fade with Textured Top',
    category: 'haircuts',
    subtitle: 'Blended zero skin transition with matte clay separation',
    image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=800&q=80',
    aspect: 'portrait',
  },
  {
    id: 'g-6',
    title: 'Sculpted Full Beard with Defined Lineage',
    category: 'beards',
    subtitle: 'Sharpened cheek gradient with organic cedarwood balm',
    image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=800&q=80',
    aspect: 'portrait',
  },
  {
    id: 'g-7',
    title: 'Classic Side Part & Executive Taper',
    category: 'haircuts',
    subtitle: 'Boardroom-ready comb line with natural high-sheen pomade',
    image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=800&q=80',
    aspect: 'portrait',
  },
  {
    id: 'g-8',
    title: 'Apothecary & Grooming Products Bar',
    category: 'interior',
    subtitle: 'Curated small-batch clays, tonics, and natural beard elixirs',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80',
    aspect: 'landscape',
  },
];
