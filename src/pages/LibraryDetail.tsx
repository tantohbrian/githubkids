import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
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
      "A comprehensive guide introducing children to Bitcoin concepts through simple explanations and fun activities. Perfect for parents and teachers who want to introduce their children to the world of digital currency in an age-appropriate way.",
    ageRange: "8-12",
    pages: 64,
    format: "PDF + Interactive",
    preview: [
      "Chapter 1: What is Money?",
      "Chapter 2: Digital Money",
      "Chapter 3: Bitcoin Basics",
      "Chapter 4: How Bitcoin Works",
      "Chapter 5: Safety First",
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
      "Join our heroes on an exciting journey through the world of Bitcoin in this action-packed comic series. Follow the adventures as they discover the magic of digital currency and blockchain technology.",
    ageRange: "6-10",
    pages: 32,
    format: "PDF + Print",
    preview: [
      "Issue 1: The Digital Treasure",
      "Issue 2: Mining Adventures",
      "Issue 3: The Blockchain Quest",
      "Issue 4: The Wallet Mystery",
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
      "Interactive puzzles, coloring pages, and hands-on activities to reinforce Bitcoin learning concepts. Perfect for keeping children engaged while they learn about digital currency.",
    ageRange: "7-11",
    pages: 48,
    format: "PDF + Printable",
    preview: [
      "Puzzle: Bitcoin Word Search",
      "Activity: Design Your Own Coin",
      "Quiz: Test Your Knowledge",
      "Coloring: Bitcoin Symbols",
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
      "A comprehensive guide for parents and educators to teach Bitcoin concepts to children effectively. Includes teaching strategies, age-appropriate activities, and answers to common questions.",
    ageRange: "Adults",
    pages: 96,
    format: "PDF + Video Lessons",
    preview: [
      "Teaching Strategies",
      "Age-Appropriate Activities",
      "Common Questions & Answers",
      "Safety Guidelines",
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
      "A collection of translated Bitcoin stories from around the world, adapted for children. These engaging tales make learning about Bitcoin fun and memorable.",
    ageRange: "8-12",
    pages: 80,
    format: "PDF + Audio",
    preview: [
      "The Digital Gold Rush",
      "Satoshi's Dream",
      "The Blockchain Bridge",
      "The Crypto Kingdom",
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
      "Beautiful illustrations of Bitcoin concepts designed for coloring and creative expression. Perfect for younger children to learn while having fun.",
    ageRange: "4-8",
    pages: 24,
    format: "PDF + Print",
    preview: [
      "Bitcoin Logo Designs",
      "Mining Equipment",
      "Digital Wallet Illustrations",
      "Blockchain Patterns",
    ],
  },
];

export default function LibraryDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const book = sampleBooks.find((b) => b.id === id);

  if (!book) {
    return (
      <div className="py-16 px-4 bg-gray-50 min-h-screen">
        <div className="container-custom text-center">
          <h1 className="text-xl-system font-bold text-gray-900 mb-4">
            Resource Not Found
          </h1>
          <p className="text-base-system text-gray-600 mb-8">
            The resource you're looking for doesn't exist.
          </p>
          <Button onClick={() => navigate("/library")} variant="primary">
            Back to Library
          </Button>
        </div>
      </div>
    );
  }

  const relatedBooks = sampleBooks
    .filter((b) => b.id !== book.id && b.type === book.type)
    .slice(0, 3);

  const handleBuyClick = () => {
    // In a real application, this would redirect to a payment provider
    // For now, we'll simulate the flow
    const paymentUrl = `https://payment-provider.example.com/purchase?resource=${book.id}&price=${book.price}`;
    window.open(paymentUrl, "_blank");
  };

  return (
    <section className="py-16 px-4 bg-gray-50 min-h-screen">
      <div className="container-custom max-w-6xl mx-auto">
        <button
          className="mb-6 text-primary hover:text-primary/80 transition-colors flex items-center gap-2"
          onClick={() => navigate(-1)}
        >
          ← Back to Library
        </button>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Book Preview */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-center">
                <img
                  src={book.cover}
                  alt={book.title}
                  className="w-80 h-96 object-cover rounded-lg mx-auto mb-6 shadow-md"
                />
                <div className="absolute top-4 right-4 bg-primary text-white text-sm px-3 py-1 rounded-full font-medium">
                  {book.type.charAt(0).toUpperCase() + book.type.slice(1)}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Book Details */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {book.title}
              </h1>
              <p className="text-gray-600 mb-4">By {book.author}</p>
              <div className="text-3xl font-bold text-primary mb-6">
                {book.price}
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span className="font-medium">Age Range:</span>
                  <span>{book.ageRange}</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span className="font-medium">Pages:</span>
                  <span>{book.pages}</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span className="font-medium">Format:</span>
                  <span>{book.format}</span>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-8">
                {book.description}
              </p>

              <Button
                onClick={handleBuyClick}
                variant="primary"
                size="lg"
                className="w-full text-lg py-6"
              >
                Buy & Download
              </Button>
            </div>
          </div>
        </div>

        {/* Preview Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <h2 className="text-xl-system font-bold text-gray-900 mb-6 text-center">
            Preview Contents
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {book.preview?.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-4 text-center"
              >
                <div className="text-sm text-gray-600 mb-2">
                  Chapter {index + 1}
                </div>
                <div className="font-medium text-gray-900">{item}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Related Resources */}
        {relatedBooks.length > 0 && (
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-xl-system font-bold text-gray-900 mb-6 text-center">
              Related Resources
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedBooks.map((relatedBook) => (
                <BookCard key={relatedBook.id} book={relatedBook} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
