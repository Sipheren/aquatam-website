export interface PricingItem {
  service: string;
  price: string;
}

export const pricing: PricingItem[] = [
  {
    service: "Regular 90-Day Service",
    price: "From $85"
  },
  {
    service: "System Repairs",
    price: "Quote on inspection"
  },
  {
    service: "New Installation Quote",
    price: "Free"
  },
  {
    service: "Compliance Inspection",
    price: "Contact for pricing"
  }
];
