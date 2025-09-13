import { BookCard } from "@/components/library/BookCard";
import type { Book } from "@/components/library/Book.types";

const previewBooks: Book[] = [
  {
    id: "1",
    title: "Bitcoin Basics for Kids",
    author: "Dr. Sarah Chen",
    price: "150 FCAF",
    cover:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=400&q=80",
    type: "guide",
    ageRange: "8-12",
  },
  {
    id: "2",
    title: "The Bitcoin Adventure Comic",
    author: "Mike Rodriguez",
    price: "120 FCAF",
    cover:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    type: "comic",
    ageRange: "6-10",
  },
  {
    id: "3",
    title: "Bitcoin Activity Workbook",
    author: "Lisa Thompson",
    price: "100 FCAF",
    cover:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=400&q=80",
    type: "activity",
    ageRange: "7-11",
  },
];

export const LibraryPreview = () => (
  <section className="py-10">
    <h2 className="text-2xl font-bold mb-6 text-foreground">
      Featured Library Resources
    </h2>
    <div className="flex gap-6 overflow-x-auto pb-2">
      {previewBooks.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  </section>
);
