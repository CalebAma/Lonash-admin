export type PropertyType = "sale" | "rent" | "land";
export type PropertyCategory = "house" | "apartment" | "commercial" | "land";

export interface AdminProperty {
  id: string;
  title: string;
  type: PropertyType;
  category: PropertyCategory;
  price: number;
  currency: string;
  location: string;
  city: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  description: string;
  images: string[];
  amenities: string[];
  featured: boolean;
  createdAt: string;
}

export interface AdminTestimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
  createdAt: string;
}

export type SubmissionType = "contact" | "newsletter" | "booking";

export interface FormSubmission {
  id: string;
  formType: SubmissionType;
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
  property?: string;
  date?: string;
  createdAt: string;
  read: boolean;
}
