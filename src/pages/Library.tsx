import { useState } from "react";
import { BookCard } from "@/components/library/BookCard";
import type { Book } from "@/components/library/Book.types";

const sampleBooks: Book[] = [
  {
    id: "1",
    title: "Bitcoin Basics for Kids",
    author: "Dr. Sarah Chen",
    price: "150 FCAF",
    cover:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=400&q=80",
    type: "guide",
    description:
      "A comprehensive guide introducing children to Bitcoin concepts through simple explanations and fun activities.",
    ageRange: "8-12",
    pages: 64,
    format: "PDF + Interactive",
    preview: [
      "Chapter 1: What is Money?",
      "Chapter 2: Digital Money",
      "Chapter 3: Bitcoin Basics",
    ],
  },
  {
    id: "2",
    title: "The Bitcoin Adventure Comic",
    author: "Mike Rodriguez",
    price: "120 FCAF",
    cover:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    type: "comic",
    description:
      "Join our heroes on an exciting journey through the world of Bitcoin in this action-packed comic series.",
    ageRange: "6-10",
    pages: 32,
    format: "PDF + Print",
    preview: [
      "Issue 1: The Digital Treasure",
      "Issue 2: Mining Adventures",
      "Issue 3: The Blockchain Quest",
    ],
  },
  {
    id: "3",
    title: "Bitcoin Activity Workbook",
    author: "Lisa Thompson",
    price: "100 FCAF",
    cover:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=400&q=80",
    type: "activity",
    description:
      "Interactive puzzles, coloring pages, and hands-on activities to reinforce Bitcoin learning concepts.",
    ageRange: "7-11",
    pages: 48,
    format: "PDF + Printable",
    preview: [
      "Puzzle: Bitcoin Word Search",
      "Activity: Design Your Own Coin",
      "Quiz: Test Your Knowledge",
    ],
  },
  {
    id: "4",
    title: "Parent's Guide to Teaching Bitcoin",
    author: "Dr. James Wilson",
    price: "200 FCAF",
    cover:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=400&q=80",
    type: "guide",
    description:
      "A comprehensive guide for parents and educators to teach Bitcoin concepts to children effectively.",
    ageRange: "Adults",
    pages: 96,
    format: "PDF + Video Lessons",
    preview: [
      "Teaching Strategies",
      "Age-Appropriate Activities",
      "Common Questions & Answers",
    ],
  },
  {
    id: "5",
    title: "Bitcoin Stories Collection",
    author: "Emma Davis",
    price: "130 FCAF",
    cover:
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=400&q=80",
    type: "translation",
    description:
      "A collection of translated Bitcoin stories from around the world, adapted for children.",
    ageRange: "8-12",
    pages: 80,
    format: "PDF + Audio",
    preview: [
      "The Digital Gold Rush",
      "Satoshi's Dream",
      "The Blockchain Bridge",
    ],
  },
  {
    id: "6",
    title: "Crypto Coloring Book",
    author: "Alex Kim",
    price: "80 FCAF",
    cover:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=400&q=80",
    type: "activity",
    description:
      "Beautiful illustrations of Bitcoin concepts designed for coloring and creative expression.",
    ageRange: "4-8",
    pages: 24,
    format: "PDF + Print",
    preview: [
      "Bitcoin Logo Designs",
      "Mining Equipment",
      "Digital Wallet Illustrations",
    ],
  },
];

const typeOptions = ["all", "comic", "guide", "translation", "activity"];

export default function Library() {
  const [filter, setFilter] = useState("all");
  const filteredBooks =
    filter === "all"
      ? sampleBooks
      : sampleBooks.filter((b) => b.type === filter);

  return (
    <section className="py-16 px-4 bg-gray-50 min-h-screen">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-xl-system font-bold mb-4 text-gray-900">
            Library
          </h1>
          <p className="text-base-system text-gray-600 max-w-2xl mx-auto">
            Discover our collection of Bitcoin learning resources designed
            specifically for children and educators.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap gap-3 justify-center">
          {typeOptions.map((type) => (
            <button
              key={type}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === type
                  ? "bg-primary text-white shadow-lg"
                  : "bg-white text-gray-700 border border-gray-200 hover:border-primary hover:text-primary"
              }`}
              onClick={() => setFilter(type)}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>

        {filteredBooks.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No resources found for this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
