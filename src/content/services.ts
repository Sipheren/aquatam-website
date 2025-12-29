export interface Service {
  title: string;
  description: string;
  icon: string;
  link: string;
}

export const services: Service[] = [
  {
    "title": "AWTS Servicing",
    "description": "Regular maintenance services to keep your system running efficiently. 90-day intervals.",
    "icon": "wrench",
    "link": "/services"
  },
  {
    "title": "System Repairs",
    "description": "Expert diagnosis and repair of all AWTS units. Fast response times and quality parts.",
    "icon": "tool",
    "link": "/services"
  },
  {
    "title": "New Installations",
    "description": "Professional installation of new AWTS systems. Full site assessment and council compliance.",
    "icon": "home",
    "link": "/installs"
  },
  {
    "title": "System Inspections",
    "description": "Comprehensive inspections for council compliance, property sales, or peace of mind.",
    "icon": "clipboard",
    "link": "/services"
  }
];

export const serviceFeatures = [
  "Servicing of AWTS units within 300km of Tamworth",
  "All jobs covered by Public Liability and Professional Indemnity",
  "All major brands supported",
  "Locally owned and operated since 1998",
  "Comprehensive inspection reports",
  "Parts supply to suit all installations",
  "Emergency call out available",
];
