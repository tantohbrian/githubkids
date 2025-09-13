import React from "react";
import { useNavigate } from "react-router-dom";
import type { Book } from "./Book.types";

export const BookCard: React.FC<{ book: Book }> = ({ book }) => {
  const navigate = useNavigate();
  return (
    <div
      className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group overflow-hidden"
      onClick={() => navigate(`/library/${book.id}`)}
    >
      <div className="relative overflow-hidden">
        <img
          src={book.cover}
          alt={book.title}
          className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3 bg-primary text-white text-xs px-2 py-1 rounded-full font-medium">
          {book.type.charAt(0).toUpperCase() + book.type.slice(1)}
        </div>
      </div>

      <div className="p-4 space-y-2">
        <div className="text-xs text-gray-500">By {book.author}</div>
        <div className="font-semibold text-base text-gray-900 leading-tight line-clamp-2">
          {book.title}
        </div>
        <div className="text-primary font-bold text-lg">{book.price}</div>
        {book.ageRange && (
          <div className="text-xs text-gray-500">Ages {book.ageRange}</div>
        )}
      </div>
    </div>
  );
};
