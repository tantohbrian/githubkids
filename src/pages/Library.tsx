import { useState } from "react";
import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookCard } from "@/components/library/BookCard";
import { BookCarousel } from "@/components/library/BookCarousel";
import type { Book } from "@/components/library/Book.types";

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
  {
    id: "7",
    title: "Digital Money Explained",
    author: "Prof. Maria Santos",
    price: "17,000 FCAF",
    cover:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=400&q=80",
    type: "guide",
    ageRange: "9-13",
    pages: 72,
    format: "PDF + Interactive",
    preview: [
      "Understanding Digital Currency",
      "How Bitcoin Works",
      "Blockchain Technology",
    ],
    rating: 5,
    category: "Educational",
    language: "English",
    formats: {
      hardcover: "20,000 FCAF",
      ebook: "17,000 FCAF",
    },
  },
  {
    id: "8",
    title: "Bitcoin Heroes Comic Series",
    author: "David Park",
    price: "14,000 FCAF",
    cover:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=400&q=80",
    type: "comic",
    ageRange: "7-11",
    pages: 40,
    format: "PDF + Print",
    preview: [
      "The Mining Adventure",
      "Satoshi's Secret",
      "The Digital Revolution",
    ],
    rating: 4,
    category: "Entertainment",
    language: "English",
    formats: {
      hardcover: "17,000 FCAF",
      ebook: "14,000 FCAF",
    },
  },
  {
    id: "9",
    title: "Crypto Math Workbook",
    author: "Dr. Jennifer Lee",
    price: "15,000 FCAF",
    cover:
      "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=400&q=80",
    type: "activity",
    ageRange: "8-12",
    pages: 56,
    format: "PDF + Printable",
    preview: [
      "Bitcoin Calculations",
      "Mining Mathematics",
      "Blockchain Puzzles",
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
    id: "10",
    title: "Teacher's Bitcoin Toolkit",
    author: "Robert Chen",
    price: "22,000 FCAF",
    cover:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=400&q=80",
    type: "guide",
    ageRange: "Adults",
    pages: 120,
    format: "PDF + Resources",
    preview: ["Lesson Plans", "Student Activities", "Assessment Tools"],
    rating: 5,
    category: "Educational",
    language: "English",
    formats: {
      hardcover: "25,000 FCAF",
      ebook: "22,000 FCAF",
    },
  },
  {
    id: "11",
    title: "Bitcoin Around the World",
    author: "Ana Rodriguez",
    price: "16,000 FCAF",
    cover:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=400&q=80",
    type: "translation",
    ageRange: "8-14",
    pages: 88,
    format: "PDF + Audio",
    preview: [
      "Global Bitcoin Stories",
      "Cultural Perspectives",
      "Worldwide Adoption",
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
    id: "12",
    title: "Digital Art & Bitcoin",
    author: "Sophie Williams",
    price: "13,000 FCAF",
    cover:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=400&q=80",
    type: "activity",
    ageRange: "6-10",
    pages: 28,
    format: "PDF + Print",
    preview: ["Bitcoin Art Projects", "Digital Design", "Creative Activities"],
    rating: 5,
    category: "Creative",
    language: "English",
    formats: {
      hardcover: "16,000 FCAF",
      ebook: "13,000 FCAF",
    },
  },
  {
    id: "13",
    title: "Blockchain Basics for Teens",
    author: "Dr. Michael Brown",
    price: "18,000 FCAF",
    cover:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=400&q=80",
    type: "guide",
    ageRange: "13-17",
    pages: 96,
    format: "PDF + Interactive",
    preview: [
      "Advanced Blockchain Concepts",
      "Smart Contracts",
      "Cryptocurrency Trading",
    ],
    rating: 4,
    category: "Educational",
    language: "English",
    formats: {
      hardcover: "21,000 FCAF",
      ebook: "18,000 FCAF",
    },
  },
  {
    id: "14",
    title: "Bitcoin Mystery Series",
    author: "Lisa Johnson",
    price: "15,000 FCAF",
    cover:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=400&q=80",
    type: "comic",
    ageRange: "8-12",
    pages: 36,
    format: "PDF + Print",
    preview: [
      "The Missing Bitcoin",
      "The Hacker's Code",
      "The Final Transaction",
    ],
    rating: 5,
    category: "Entertainment",
    language: "English",
    formats: {
      hardcover: "18,000 FCAF",
      ebook: "15,000 FCAF",
    },
  },
  {
    id: "15",
    title: "Crypto Science Experiments",
    author: "Dr. Sarah Kim",
    price: "16,000 FCAF",
    cover:
      "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=400&q=80",
    type: "activity",
    ageRange: "9-13",
    pages: 64,
    format: "PDF + Printable",
    preview: [
      "Hash Function Experiments",
      "Mining Simulations",
      "Blockchain Models",
    ],
    rating: 5,
    category: "Educational",
    language: "English",
    formats: {
      hardcover: "19,000 FCAF",
      ebook: "16,000 FCAF",
    },
  },
  {
    id: "16",
    title: "Parent's Crypto Handbook",
    author: "Mark Thompson",
    price: "21,000 FCAF",
    cover:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=400&q=80",
    type: "guide",
    ageRange: "Adults",
    pages: 108,
    format: "PDF + Resources",
    preview: ["Teaching Strategies", "Safety Guidelines", "Investment Basics"],
    rating: 5,
    category: "Educational",
    language: "English",
    formats: {
      hardcover: "24,000 FCAF",
      ebook: "21,000 FCAF",
    },
  },
  {
    id: "17",
    title: "Bitcoin Folktales",
    author: "Elena Martinez",
    price: "14,000 FCAF",
    cover:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=400&q=80",
    type: "translation",
    ageRange: "7-12",
    pages: 52,
    format: "PDF + Audio",
    preview: [
      "Ancient Digital Wisdom",
      "Modern Crypto Tales",
      "Future Stories",
    ],
    rating: 4,
    category: "Cultural",
    language: "Multiple",
    formats: {
      hardcover: "17,000 FCAF",
      ebook: "14,000 FCAF",
    },
  },
  {
    id: "18",
    title: "Bitcoin Board Game Guide",
    author: "Tom Wilson",
    price: "13,000 FCAF",
    cover:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=400&q=80",
    type: "activity",
    ageRange: "6-12",
    pages: 32,
    format: "PDF + Print",
    preview: ["Game Rules", "Strategy Tips", "Family Activities"],
    rating: 5,
    category: "Interactive",
    language: "English",
    formats: {
      hardcover: "16,000 FCAF",
      ebook: "13,000 FCAF",
    },
  },
  {
    id: "19",
    title: "Advanced Bitcoin Concepts",
    author: "Dr. Rachel Green",
    price: "19,000 FCAF",
    cover:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=400&q=80",
    type: "guide",
    ageRange: "14-18",
    pages: 112,
    format: "PDF + Interactive",
    preview: ["Technical Analysis", "Market Dynamics", "Future Trends"],
    rating: 4,
    category: "Educational",
    language: "English",
    formats: {
      hardcover: "22,000 FCAF",
      ebook: "19,000 FCAF",
    },
  },
  {
    id: "20",
    title: "Bitcoin Superheroes",
    author: "Carlos Mendez",
    price: "15,000 FCAF",
    cover:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=400&q=80",
    type: "comic",
    ageRange: "8-14",
    pages: 44,
    format: "PDF + Print",
    preview: ["Crypto Crusaders", "Blockchain Battles", "Digital Defenders"],
    rating: 5,
    category: "Entertainment",
    language: "English",
    formats: {
      hardcover: "18,000 FCAF",
      ebook: "15,000 FCAF",
    },
  },
  {
    id: "21",
    title: "Bitcoin Coding for Kids",
    author: "Dr. Alex Kumar",
    price: "17,000 FCAF",
    cover:
      "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=400&q=80",
    type: "activity",
    ageRange: "10-16",
    pages: 80,
    format: "PDF + Code Examples",
    preview: ["Basic Programming", "Blockchain Code", "Smart Contracts"],
    rating: 5,
    category: "Educational",
    language: "English",
    formats: {
      hardcover: "20,000 FCAF",
      ebook: "17,000 FCAF",
    },
  },
  {
    id: "22",
    title: "Educator's Bitcoin Course",
    author: "Dr. Patricia White",
    price: "23,000 FCAF",
    cover:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=400&q=80",
    type: "guide",
    ageRange: "Adults",
    pages: 140,
    format: "PDF + Video Course",
    preview: ["Curriculum Design", "Teaching Methods", "Student Assessment"],
    rating: 5,
    category: "Educational",
    language: "English",
    formats: {
      hardcover: "26,000 FCAF",
      ebook: "23,000 FCAF",
    },
  },
  {
    id: "23",
    title: "Bitcoin Poetry Collection",
    author: "Maya Patel",
    price: "13,000 FCAF",
    cover:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=400&q=80",
    type: "translation",
    ageRange: "8-15",
    pages: 40,
    format: "PDF + Audio",
    preview: ["Digital Dreams", "Crypto Verses", "Blockchain Ballads"],
    rating: 4,
    category: "Cultural",
    language: "Multiple",
    formats: {
      hardcover: "16,000 FCAF",
      ebook: "13,000 FCAF",
    },
  },
  {
    id: "24",
    title: "Bitcoin Origami Book",
    author: "Yuki Tanaka",
    price: "14,000 FCAF",
    cover:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=400&q=80",
    type: "activity",
    ageRange: "5-10",
    pages: 24,
    format: "PDF + Print",
    preview: [
      "Bitcoin Symbol Origami",
      "Blockchain Models",
      "Digital Art Projects",
    ],
    rating: 5,
    category: "Creative",
    language: "English",
    formats: {
      hardcover: "17,000 FCAF",
      ebook: "14,000 FCAF",
    },
  },
  {
    id: "25",
    title: "Bitcoin History Timeline",
    author: "Dr. James Anderson",
    price: "16,000 FCAF",
    cover:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=400&q=80",
    type: "guide",
    ageRange: "11-16",
    pages: 72,
    format: "PDF + Interactive",
    preview: ["Bitcoin's Origins", "Key Milestones", "Future Predictions"],
    rating: 4,
    category: "Educational",
    language: "English",
    formats: {
      hardcover: "19,000 FCAF",
      ebook: "16,000 FCAF",
    },
  },
  {
    id: "26",
    title: "Bitcoin Music & Songs",
    author: "Maria Garcia",
    price: "15,000 FCAF",
    cover:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=400&q=80",
    type: "translation",
    ageRange: "6-12",
    pages: 36,
    format: "PDF + Audio",
    preview: ["Crypto Songs", "Blockchain Beats", "Digital Melodies"],
    rating: 5,
    category: "Entertainment",
    language: "Multiple",
    formats: {
      hardcover: "18,000 FCAF",
      ebook: "15,000 FCAF",
    },
  },
];

const typeOptions = ["all", "comic", "guide", "translation", "activity"];
const sortOptions = [
  { value: "newest", label: "Newest First" },
  { value: "oldest", label: "Oldest First" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "rating", label: "Highest Rated" },
  { value: "title", label: "Title A-Z" },
];

export default function Library() {
  const [filter, setFilter] = useState("all");
  const [sortBy, setSortBy] = useState("newest");

  const filteredBooks = sampleBooks.filter(
    (book) => filter === "all" || book.type === filter
  );

  const sortedBooks = [...filteredBooks].sort((a, b) => {
    switch (sortBy) {
      case "newest":
        return parseInt(b.id) - parseInt(a.id);
      case "oldest":
        return parseInt(a.id) - parseInt(b.id);
      case "price-low":
        return (
          parseInt(a.price.replace(",", "").replace(" FCAF", "")) -
          parseInt(b.price.replace(",", "").replace(" FCAF", ""))
        );
      case "price-high":
        return (
          parseInt(b.price.replace(",", "").replace(" FCAF", "")) -
          parseInt(a.price.replace(",", "").replace(" FCAF", ""))
        );
      case "rating":
        return (b.rating || 0) - (a.rating || 0);
      case "title":
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });

  const handleAddToWishlist = (book: Book) => {
    console.log(`Adding ${book.title} to wishlist`);
    alert(`Added ${book.title} to your wishlist!`);
  };

  // Split books into groups for alternating display, ensuring no single books on a row
  const maxColumns = 6;

  // Calculate how many complete rows we can have in the regular grid
  const regularBooks = sortedBooks.filter((_, index) => index % 2 === 0);
  const carouselBooks = sortedBooks.filter((_, index) => index % 2 === 1);

  // Check if regularBooks would have a single book on the last row
  const regularRemaining = regularBooks.length % maxColumns;

  let adjustedRegularBooks: Book[] = [];
  let adjustedCarouselBooks: Book[] = [];

  if (regularRemaining === 1) {
    // Move the last book from regularBooks to carouselBooks
    adjustedRegularBooks = regularBooks.slice(0, -1);
    adjustedCarouselBooks = [
      ...carouselBooks,
      regularBooks[regularBooks.length - 1],
    ];
  } else {
    adjustedRegularBooks = regularBooks;
    adjustedCarouselBooks = carouselBooks;
  }

  return (
    <section className="py-16 px-4 bg-gray-50 min-h-screen">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-xl-system font-bold mb-4 text-gray-900">
            Library
          </h1>
          <p className="text-base-system text-gray-600 max-w-2xl mx-auto">
            Discover our collection of Bitcoin learning resources designed
            specifically for children and educators.
          </p>
        </div>

        {/* Filters and Sort */}
        <div className="mb-8 space-y-4">
          {/* Type Filters */}
          <div className="flex flex-wrap gap-3 justify-center">
            {typeOptions.map((type) => (
              <button
                key={type}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === type
                    ? "bg-gray-800 text-white"
                    : "bg-white text-gray-700 border border-gray-200 hover:border-gray-800 hover:text-gray-800"
                }`}
                onClick={() => setFilter(type)}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>

          {/* Sort Options */}
          <div className="flex items-center justify-center gap-4">
            <Filter className="w-5 h-5 text-gray-500" />
            <span className="text-sm font-medium text-gray-700">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-200 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-800"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Alternating Book Display */}
        <div className="space-y-12">
          {/* Regular Grid Section */}
          {adjustedRegularBooks.length > 0 && (
            <div>
              <h2 className="text-xl-system font-bold text-gray-900 mb-6 text-center">
                Featured Books
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-2">
                {adjustedRegularBooks.map((book) => (
                  <div key={book.id} className="pl-1">
                    <BookCard
                      book={book}
                      onAddToWishlist={handleAddToWishlist}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Carousel Section */}
          {adjustedCarouselBooks.length > 0 && (
            <div>
              <BookCarousel
                books={adjustedCarouselBooks}
                title="More Books"
                onAddToWishlist={handleAddToWishlist}
              />
            </div>
          )}
        </div>

        {/* Empty State */}
        {sortedBooks.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-gray-500 mb-4">
              No books found matching your criteria.
            </p>
            <Button
              onClick={() => setFilter("all")}
              variant="outline"
              className="text-sm-system"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
