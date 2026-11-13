export interface Barber {
  id: string;
  name: string;
  title: string;
  experience: string;
  bio: string;
  specialties: string[];
  image: string;
  schedule: string;
  instagram: string;
}

export const barbersData: Barber[] = [
  {
    id: 'marcus-vance',
    name: 'Marcus Vance',
    title: 'Founder & Master Barber',
    experience: '14 Years Experience',
    bio: 'Trained under classic Italian and American barbering masters. Marcus founded Crown & Blade to resurrect timeless razor craft with contemporary tailoring.',
    specialties: ['Straight Razor Shaves', 'Executive Scissor Cuts', 'Bespoke Consultations'],
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=80',
    schedule: 'Tue – Sat',
    instagram: '@marcus.vance_cuts',
  },
  {
    id: 'julian-hayes',
    name: 'Julian Hayes',
    title: 'Senior Barber & Fade Artisan',
    experience: '10 Years Experience',
    bio: 'Renowned for razor-sharp skin fades and seamless tapers. Julian blends streetwear aesthetic with boardroom precision.',
    specialties: ['Skin Fades & Tapers', 'Textured Crops', 'Edge-Up Artistry'],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=80',
    schedule: 'Mon – Fri',
    instagram: '@julian_thebarber',
  },
  {
    id: 'leo-martinez',
    name: 'Leo Martinez',
    title: 'Master Shaver & Beard Sculptor',
    experience: '9 Years Experience',
    bio: 'Specializing in dense facial hair sculpting and traditional steam hot towel rituals. Leo treats every beard as an architectural canvas.',
    specialties: ['Beard Architecture', 'Hot Lather Rituals', 'Ingrown Hair Solutions'],
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=80',
    schedule: 'Wed – Sun',
    instagram: '@leo_bladecraft',
  },
  {
    id: 'elena-vance',
    name: 'Elena Vance',
    title: 'Styling Director & Texture Specialist',
    experience: '8 Years Experience',
    bio: 'Former senior educator with international grooming academies. Elena excels at medium-to-long scissor styling, gray blending, and scalp therapies.',
    specialties: ['Scissor-Over-Comb', 'Natural Gray Blending', 'Scalp Treatments'],
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=700&q=80',
    schedule: 'Tue – Sat',
    instagram: '@elena_hairstyling',
  },
];
