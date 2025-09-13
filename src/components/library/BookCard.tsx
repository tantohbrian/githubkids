import React from "react";
import { useNavigate } from "react-router-dom";
import type { Book } from "./Book.types";

export const BookCard: React.FC<{ book: Book }> = ({ book }) => {
  const navigate = useNavigate();
  return (
    <div
      className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-4 cursor-pointer flex flex-col items-center group"
      onClick={() => navigate(`/library/${book.id}`)}
    >
      <div className="relative overflow-hidden rounded-lg mb-4">
        <img
          src={book.cover}
          alt={book.title}
          className="w-40 h-56 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-2 right-2 bg-primary text-white text-xs px-2 py-1 rounded-full font-medium">
          {book.type.charAt(0).toUpperCase() + book.type.slice(1)}
        </div>
      </div>

      <div className="text-center space-y-2 w-full">
        <div className="text-xs text-gray-500">By {book.author}</div>
        <div className="font-semibold text-lg text-gray-900 leading-tight">
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
