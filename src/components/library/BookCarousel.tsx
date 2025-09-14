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
          skipSnaps: false,
          dragFree: true,
        }}
        className="w-full overflow-hidden"
      >
        <CarouselContent className="-ml-1 md:-ml-2">
          {books.map((book) => (
            <CarouselItem
              key={book.id}
              className="pl-1 md:pl-2 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6"
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
