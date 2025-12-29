export interface TeamMember {
  name: string;
  role: string;
  phone: string;
  email: string;
  image: string;
  bio: string;
}

export const team: TeamMember[] = [
  {
    "name": "Ben Glover",
    "role": "Service Tech, Repairs, Quotes & Installs",
    "phone": "0438 603 852",
    "email": "ben@aquatam.com.au",
    "image": "/images/ben.jpg",
    "bio": "Expert technician specializing in AWTS servicing, repairs, installations, and quotes."
  }
];
