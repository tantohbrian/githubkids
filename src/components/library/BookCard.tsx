import { Star, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import type { Book } from "./Book.types";

interface BookCardProps {
  book: Book;
  onAddToWishlist?: (book: Book) => void;
}

export const BookCard = ({ book, onAddToWishlist }: BookCardProps) => {
  const handleAddToWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onAddToWishlist) {
      onAddToWishlist(book);
    }
  };

  const cardClasses = "w-full";

  return (
    <Link to={`/library/${book.id}`} className={`group block ${cardClasses}`}>
      <div className="transition-colors duration-300 group-hover:bg-gray-50">
        {/* Book Cover */}
        <div className="relative">
          <img
            src={book.cover}
            alt={book.title}
            className="w-full h-64 object-cover"
          />
          {/* Heart Icon for Wishlist */}
          <button
            onClick={handleAddToWishlist}
            className="absolute top-3 right-3 p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
          >
            <Heart className="w-4 h-4 text-gray-600 hover:text-red-500" />
          </button>
        </div>

        {/* Book Info */}
        <div className="p-4">
          <h3 className="text-base font-semibold text-gray-900 mb-1 line-clamp-2">
            {book.title}
          </h3>
          <p className="text-sm text-green-600 mb-2">by {book.author}</p>

          {/* Rating */}
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < (book.rating || 0)
                    ? "text-yellow-400 fill-current"
                    : "text-gray-300"
                }`}
              />
            ))}
            <span className="text-xs text-gray-500 ml-1">
              ({book.rating || 0}.0)
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};
