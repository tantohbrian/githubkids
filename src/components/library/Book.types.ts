export interface Book {
  id: string;
  title: string;
  author: string;
  price: string; // Will be in FCAF format
  cover: string;
  type: "comic" | "guide" | "translation" | "activity";
  description?: string;
  ageRange?: string;
  pages?: number;
  format?: string;
  preview?: string[];
  relatedBooks?: string[];
  rating?: number;
  category?: string;
  language?: string;
  formats?: {
    hardcover: string;
    ebook: string;
  };
}
