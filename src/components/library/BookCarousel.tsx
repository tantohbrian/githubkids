import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { BookCard } from "./BookCard";
import type { Book } from "./Book.types";

interface BookCarouselProps {
  books: Book[];
  title?: string;
  onAddToWishlist?: (book: Book) => void;
}

export const BookCarousel = ({
  books,
  title,
  onAddToWishlist,
}: BookCarouselProps) => {
  return (
    <div className="w-full">
      {title && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 text-center">
            {title}
          </h2>
        </div>
      )}

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {books.map((book) => (
            <CarouselItem
              key={book.id}
              className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 2xl:basis-1/6"
            >
              <BookCard book={book} onAddToWishlist={onAddToWishlist} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
