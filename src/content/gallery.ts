export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

export const galleryImages: GalleryImage[] = [
  {
    src: "/images/gallery/install-1.jpg",
    alt: "AWTS installation in progress",
    caption: "New Taylex system installation",
  },
  {
    src: "/images/gallery/install-2.jpg",
    alt: "Completed tank installation",
    caption: "Completed installation - Tamworth region",
  },
  {
    src: "/images/gallery/install-3.jpg",
    alt: "Concrete tank installation",
    caption: "Concrete tank installation",
  },
  {
    src: "/images/gallery/service-1.jpg",
    alt: "Technician servicing AWTS",
    caption: "Regular 90-day service",
  },
];
