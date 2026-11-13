export interface Service {
  id: string;
  name: string;
  category: 'haircuts' | 'beards' | 'combos' | 'treatments';
  price: number;
  duration: string;
  description: string;
  popular?: boolean;
  features: string[];
}

export const serviceCategories = [
  { id: 'all', label: 'All Services' },
  { id: 'haircuts', label: 'Precision Haircuts' },
  { id: 'beards', label: 'Beard & Shave' },
  { id: 'combos', label: 'Signature Combos' },
  { id: 'treatments', label: 'Scalp & Facial Care' },
] as const;

export const servicesData: Service[] = [
  {
    id: 'classic-haircut',
    name: 'The Crown Signature Cut',
    category: 'haircuts',
    price: 45,
    duration: '45 min',
    popular: true,
    description: 'Precision shear & clipper haircut tailored to your head shape, finished with straight-razor neck cleanup and hot towel.',
    features: ['In-depth consultation', 'Shampoo & conditioning rinse', 'Straight-razor neck shave', 'Styling with matte paste or pomade'],
  },
  {
    id: 'skin-fade',
    name: 'Executive Skin Fade & Taper',
    category: 'haircuts',
    price: 50,
    duration: '50 min',
    popular: false,
    description: 'Seamless low, mid, or high fade taken down to bare skin with foil shavers, crisp perimeter lining, and weight distribution.',
    features: ['Zero foil blend', 'Razor sharp edge-up', 'Soothing aftershave tonic', 'Matte styling finish'],
  },
  {
    id: 'beard-trim-sculpt',
    name: 'Artisan Beard Sculpt & Line-up',
    category: 'beards',
    price: 30,
    duration: '30 min',
    popular: false,
    description: 'Detailed length reduction, cheekbone and neckline definition with hot lather straight razor, finished with organic beard elixir.',
    features: ['Custom length & silhouette trimming', 'Hot lather cheek & neck razor lining', 'Warm steam towel infusion', 'Beard balm & conditioning oil'],
  },
  {
    id: 'hot-towel-shave',
    name: 'Traditional Royal Straight Razor Shave',
    category: 'beards',
    price: 45,
    duration: '45 min',
    popular: true,
    description: 'The quintessential barbershop luxury. Multi-pass straight razor shave using essential pre-shave oils and double steamed towels.',
    features: ['Eucalyptus pre-shave oil', 'Warm rich brush-applied lather', 'Two-pass traditional razor shave', 'Cold rosewater towel & soothing balm'],
  },
  {
    id: 'haircut-beard-combo',
    name: 'The Sovereign Cut & Beard Combo',
    category: 'combos',
    price: 70,
    duration: '75 min',
    popular: true,
    description: 'Our most requested service. Full signature haircut combined with complete beard sculpting and hot towel neck therapy.',
    features: ['Signature haircut of choice', 'Full beard shaping & hot lather lining', 'Double hot towel treatment', 'Craft beverage service included'],
  },
  {
    id: 'vip-full-service',
    name: 'The Grand Gentleman VIP Experience',
    category: 'combos',
    price: 110,
    duration: '90 min',
    popular: false,
    description: 'The ultimate rejuvenation package. Haircut, hot towel shave, detoxifying charcoal facial masque, and relaxing scalp massage.',
    features: ['Tailored haircut & precision styling', 'Traditional hot towel straight razor shave', 'Exfoliating charcoal face masque', 'Invigorating tea tree scalp therapy'],
  },
  {
    id: 'scalp-revitalizer',
    name: 'Therapeutic Scalp & Follicle Detox',
    category: 'treatments',
    price: 35,
    duration: '30 min',
    popular: false,
    description: 'Deep cleansing exfoliating scrub, peppermint tea tree infusion, and pressure-point scalp massage to stimulate hair health.',
    features: ['Clarifying tea tree scalp cleanse', 'Extended pressure point head massage', 'Infrared steam cap treatment', 'Leave-in botanical tonic'],
  },
  {
    id: 'gray-blending',
    name: 'Natural Gray Camouflage & Beard Tint',
    category: 'treatments',
    price: 45,
    duration: '35 min',
    popular: false,
    description: 'Subtle, semi-permanent demi-color formulation that gently tones down silver hair and beard patches without obvious line of regrowth.',
    features: ['Discreet salon sink processing', 'Ammonia-free demi-permanent formula', 'Fades naturally over 4-6 weeks', 'Deep conditioning finish'],
  },
];
