import { useParams, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  Star,
  ShoppingCart,
  Heart,
  ArrowLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Book } from "@/components/library/Book.types";

// Sample books data (same as Library page)
const sampleBooks: Book[] = [
  {
    id: "1",
    title: "Bitcoin Basics for Kids",
    author: "Dr. Sarah Chen",
    price: "15,000 FCAF",
    cover:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=400&q=80",
    type: "guide",
    ageRange: "8-12",
    pages: 64,
    format: "PDF + Interactive",
    preview: [
      "Chapter 1: What is Money?",
      "Chapter 2: Digital Money",
      "Chapter 3: Bitcoin Basics",
    ],
    rating: 5,
    category: "Educational",
    language: "English",
    formats: {
      hardcover: "18,000 FCAF",
      ebook: "15,000 FCAF",
    },
  },
  {
    id: "2",
    title: "The Bitcoin Adventure Comic",
    author: "Mike Rodriguez",
    price: "13,000 FCAF",
    cover:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    type: "comic",
    ageRange: "6-10",
    pages: 32,
    format: "PDF + Print",
    preview: [
      "Issue 1: The Digital Treasure",
      "Issue 2: Mining Adventures",
      "Issue 3: The Blockchain Quest",
    ],
    rating: 5,
    category: "Entertainment",
    language: "English",
    formats: {
      hardcover: "16,000 FCAF",
      ebook: "13,000 FCAF",
    },
  },
  {
    id: "3",
    title: "Bitcoin Activity Workbook",
    author: "Lisa Thompson",
    price: "14,000 FCAF",
    cover:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=400&q=80",
    type: "activity",
    ageRange: "7-11",
    pages: 48,
    format: "PDF + Printable",
    preview: [
      "Puzzle: Bitcoin Word Search",
      "Activity: Design Your Own Coin",
      "Quiz: Test Your Knowledge",
    ],
    rating: 4,
    category: "Interactive",
    language: "English",
    formats: {
      hardcover: "17,000 FCAF",
      ebook: "14,000 FCAF",
    },
  },
  {
    id: "4",
    title: "Parent's Guide to Teaching Bitcoin",
    author: "Dr. James Wilson",
    price: "20,000 FCAF",
    cover:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=400&q=80",
    type: "guide",
    ageRange: "Adults",
    pages: 96,
    format: "PDF + Video Lessons",
    preview: [
      "Teaching Strategies",
      "Age-Appropriate Activities",
      "Common Questions & Answers",
    ],
    rating: 5,
    category: "Educational",
    language: "English",
    formats: {
      hardcover: "23,000 FCAF",
      ebook: "20,000 FCAF",
    },
  },
  {
    id: "5",
    title: "Bitcoin Stories Collection",
    author: "Emma Davis",
    price: "16,000 FCAF",
    cover:
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=400&q=80",
    type: "translation",
    ageRange: "8-12",
    pages: 80,
    format: "PDF + Audio",
    preview: [
      "The Digital Gold Rush",
      "Satoshi's Dream",
      "The Blockchain Bridge",
    ],
    rating: 4,
    category: "Cultural",
    language: "Multiple",
    formats: {
      hardcover: "19,000 FCAF",
      ebook: "16,000 FCAF",
    },
  },
  {
    id: "6",
    title: "Crypto Coloring Book",
    author: "Alex Kim",
    price: "13,000 FCAF",
    cover:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=400&q=80",
    type: "activity",
    ageRange: "4-8",
    pages: 24,
    format: "PDF + Print",
    preview: [
      "Bitcoin Logo Designs",
      "Mining Equipment",
      "Digital Wallet Illustrations",
    ],
    rating: 5,
    category: "Creative",
    language: "English",
    formats: {
      hardcover: "16,000 FCAF",
      ebook: "13,000 FCAF",
    },
  },
];

const BookDetailPage = () => {
  const { bookId } = useParams<{ bookId: string }>();
  const navigate = useNavigate();
  const [selectedFormat, setSelectedFormat] = useState<"hardcover" | "ebook">(
    "ebook"
  );
  const book = sampleBooks.find((b) => b.id === bookId);

  if (!book) {
    return (
      <div className="min-h-screen bg-background py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Book Not Found
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            The book you are looking for does not exist.
          </p>
          <Button onClick={() => navigate("/library")}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Library
          </Button>
        </div>
      </div>
    );
  }

  const currentPrice = book.formats?.[selectedFormat] || book.price;

  const handleBuy = () => {
    console.log(
      `Buying ${book.title} in ${selectedFormat} format for ${currentPrice}`
    );
    alert(
      `Proceeding to purchase ${book.title} (${selectedFormat}) for ${currentPrice}`
    );
  };

  const handleAddToWishlist = () => {
    console.log(`Adding ${book.title} to wishlist`);
    alert(`Added ${book.title} to your wishlist!`);
  };

  // Get related books (same category, excluding current book)
  const relatedBooks = sampleBooks
    .filter((b) => b.category === book.category && b.id !== book.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => navigate("/library")}
          className="mb-8 text-gray-600 hover:text-gray-800"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Library
        </Button>

        {/* Main Book Details Section */}
        <div className="bg-white rounded-xl p-8 mb-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left: Book Cover */}
            <div className="flex-shrink-0 lg:w-1/3">
              <div className="relative">
                <img
                  src={book.cover}
                  alt={book.title}
                  className="w-full h-auto rounded-lg"
                />
                {/* Heart Icon for Wishlist */}
                <button
                  onClick={handleAddToWishlist}
                  className="absolute top-3 right-3 p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                >
                  <Heart className="w-5 h-5 text-gray-600 hover:text-red-500" />
                </button>
              </div>
            </div>

            {/* Right: Book Information */}
            <div className="flex-1">
              <h1 className="text-xl-system font-bold text-gray-900 mb-2">
                {book.title}
              </h1>
              <p className="text-base-system text-gray-600 mb-4">
                by {book.author}
              </p>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < (book.rating || 0)
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-base-system text-gray-500">
                  ({book.rating || 0}.0)
                </span>
              </div>

              {/* Format Selection */}
              <div className="mb-6">
                <h3 className="text-base-system font-semibold text-gray-900 mb-3">
                  Choose Format:
                </h3>
                <div className="flex gap-4">
                  <button
                    onClick={() => setSelectedFormat("hardcover")}
                    className={`px-4 py-2 rounded-lg border-2 transition-colors ${
                      selectedFormat === "hardcover"
                        ? "border-green-600 bg-gray-100 text-black"
                        : "border-gray-300 bg-white text-black hover:bg-gray-50"
                    }`}
                  >
                    <div className="text-base-system font-medium">
                      Hardcover
                    </div>
                    <div className="text-sm text-gray-600">
                      {book.formats?.hardcover}
                    </div>
                  </button>
                  <button
                    onClick={() => setSelectedFormat("ebook")}
                    className={`px-4 py-2 rounded-lg border-2 transition-colors ${
                      selectedFormat === "ebook"
                        ? "border-green-600 bg-gray-100 text-black"
                        : "border-gray-300 bg-white text-black hover:bg-gray-50"
                    }`}
                  >
                    <div className="text-base-system font-medium">eBook</div>
                    <div className="text-sm text-gray-600">
                      {book.formats?.ebook}
                    </div>
                  </button>
                </div>
              </div>

              {/* Price and Buy Button */}
              <div className="flex items-center justify-between mb-8">
                <span className="text-3xl font-bold text-primary">
                  {currentPrice}
                </span>
                <Button onClick={handleBuy} variant="primary" size="lg">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Buy & Download
                </Button>
              </div>

              {/* Quick Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-base-system text-gray-700">
                <div>
                  <span className="font-semibold">Age Range:</span>{" "}
                  {book.ageRange}
                </div>
                <div>
                  <span className="font-semibold">Pages:</span> {book.pages}
                </div>
                <div>
                  <span className="font-semibold">Format:</span> {book.format}
                </div>
                <div>
                  <span className="font-semibold">Category:</span>{" "}
                  {book.category}
                </div>
                <div>
                  <span className="font-semibold">Language:</span>{" "}
                  {book.language}
                </div>
                <div>
                  <span className="font-semibold">Type:</span>{" "}
                  {book.type.charAt(0).toUpperCase() + book.type.slice(1)}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Overview/Full Description Section */}
        <div className="bg-white rounded-xl p-8 mb-12">
          <h2 className="text-xl-system font-bold text-gray-900 mb-6">
            Overview
          </h2>

          {/* Notes from Bookseller */}
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
            <p className="text-base-system text-blue-800 italic">
              <strong>Notes from Bitcoin Kids:</strong> This resource has been
              carefully crafted to make complex Bitcoin concepts accessible and
              engaging for young learners. Perfect for parents and educators
              looking to introduce digital currency concepts in a fun,
              educational way.
            </p>
          </div>

          {/* Main Description */}
          <div className="prose prose-lg max-w-none">
            {/* What You'll Learn Section */}
            {book.preview && book.preview.length > 0 && (
              <div className="mt-8">
                <h3 className="text-base-system font-semibold text-gray-900 mb-4">
                  What You'll Learn:
                </h3>
                <ul className="space-y-3">
                  {book.preview.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start text-base-system text-gray-700"
                    >
                      <ChevronRight className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Additional Content */}
            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <h4 className="text-base-system font-semibold text-gray-900 mb-3">
                Why Choose This Resource?
              </h4>
              <p className="text-base-system text-gray-700">
                This {book.type} is designed specifically for {book.ageRange}{" "}
                and provides a comprehensive introduction to Bitcoin concepts.
                With {book.pages} pages of carefully crafted content, it offers
                an engaging way to learn about digital currency, blockchain
                technology, and financial literacy in the modern world.
              </p>
            </div>
          </div>
        </div>

        {/* Related Books Section */}
        {relatedBooks.length > 0 && (
          <div className="bg-white rounded-xl p-8">
            <h2 className="text-xl-system font-bold text-gray-900 mb-8 text-center">
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedBooks.map((relatedBook) => (
                <Link
                  to={`/library/${relatedBook.id}`}
                  key={relatedBook.id}
                  className="group"
                >
                  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:transition-shadow duration-300">
                    <div className="relative">
                      <img
                        src={relatedBook.cover}
                        alt={relatedBook.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-2 right-2 bg-primary text-white px-2 py-1 rounded-full text-xs font-semibold">
                        {relatedBook.price}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2 text-base-system">
                        {relatedBook.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2 text-base-system">
                        by {relatedBook.author}
                      </p>
                      <div className="flex items-center gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < (relatedBook.rating || 0)
                                ? "text-yellow-400 fill-current"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                        <span className="text-xs text-gray-500">
                          ({relatedBook.rating || 0}.0)
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 text-base-system">
                        {relatedBook.ageRange}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookDetailPage;
