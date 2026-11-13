export interface Testimonial {
  id: string;
  name: string;
  location: string;
  service: string;
  rating: number;
  date: string;
  review: string;
  avatar: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: 't-1',
    name: 'David Sterling',
    location: 'Chicago, IL',
    service: 'The Sovereign Cut & Beard Combo',
    rating: 5,
    date: '2 weeks ago',
    review: 'Hands down the most meticulous haircut experience I’ve ever had in the city. Marcus takes his time to examine the grain and shape of your face. The hot towel shave with eucalyptus oil relaxed me completely after a long corporate week.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 't-2',
    name: 'Michael Thorne',
    location: 'Evanston, IL',
    service: 'Executive Skin Fade & Taper',
    rating: 5,
    date: '1 month ago',
    review: 'Finding a barber who understands zero-gap foil fades without leaving irritation is rare. Julian executed a flawless low fade that held its clean edge for two full weeks. The bourbon while waiting was top shelf.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 't-3',
    name: 'Alexander Reed',
    location: 'Loop District, Chicago',
    service: 'Traditional Royal Straight Razor Shave',
    rating: 5,
    date: '3 weeks ago',
    review: 'The traditional straight razor ritual here is pure artistry. Double steamed towels, lavender balm, and zero blade tugging. If you appreciate old-school ritual done with modern hygiene and luxury, this is your sanctuary.',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 't-4',
    name: 'Thomas Vance-Cole',
    location: 'Lincoln Park, IL',
    service: 'Artisan Beard Sculpt & Line-up',
    rating: 5,
    date: 'Last month',
    review: 'Leo transformed an unruly four-month beard into a sharp, sculpted jawline. Gave me tailored maintenance tips and recommended a cedarwood balm that doesn’t feel greasy. Already booked my regular 3-week slot.',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 't-5',
    name: 'Dr. Christopher Wu',
    location: 'West Loop, Chicago',
    service: 'The Grand Gentleman VIP Experience',
    rating: 5,
    date: '3 weeks ago',
    review: 'The VIP experience was a full 90-minute reset. Scalp treatment, haircut, straight razor shave, and charcoal mask. Punctual, spotless environment, and unpretentious high-end hospitality.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
  },
];
