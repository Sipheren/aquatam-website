export interface Service {
  id: string;
  title: string;
  description: string;
  price?: string;
  icon: string;
}

export const services: Service[] = [
  {
    id: "servicing",
    title: "AWTS Servicing",
    description:
      "Regular maintenance services conducted every 90 days as per council and state water regulations. We ensure your system operates at peak efficiency.",
    price: "From $85",
    icon: "wrench",
  },
  {
    id: "repairs",
    title: "System Repairs",
    description:
      "Expert diagnosis and repair of all AWTS components. We service all major brands and can source replacement parts quickly.",
    icon: "cog",
  },
  {
    id: "installations",
    title: "New Installations",
    description:
      "Free quotes on new tank installations. We use Taylex Plastic tanks and Taylex Concrete tanks depending on your location and requirements.",
    icon: "truck",
  },
  {
    id: "inspections",
    title: "System Inspections",
    description:
      "Comprehensive inspections for property sales, council compliance, or peace of mind. Detailed reports provided.",
    icon: "clipboard",
  },
];

export const serviceFeatures = [
  "Servicing all AWTS units within 300km of Tamworth",
  "90-day service intervals as per regulations",
  "All major brands supported",
  "Locally owned and operated since 1998",
  "Free quotes on new installations",
  "Emergency call-out available",
];
