"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Movie } from "@/lib/types";
import MovieCard from "./MovieCard";

type Props = {
  title: string;
  movies: Movie[];
};

function MoviesCarousel({ title, movies }: Props) {
  const rowRef = useRef<HTMLDivElement>(null);

  function scroll(direction: "left" | "right") {
    if (!rowRef.current) return;
    const amount = rowRef.current.clientWidth * 0.8;
    rowRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  }

  return (
    <section className="mb-8">
      <h2 className="text-xl font-bold px-5 mb-3">{title}</h2>

      <div className="relative group">
        <button
          onClick={() => scroll("left")}
          aria-label="Scroll left"
          className="absolute left-0 top-0 bottom-0 z-10 w-12 flex items-center justify-center bg-glam-space/70 opacity-0 group-hover:opacity-100 transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-glam-gold focus-visible:ring-offset-4 focus-visible:ring-offset-glam-space focus-visible:opacity-100"
        >
          <ChevronLeft className="w-8 h-8 text-glam-pink" />
        </button>

        <div ref={rowRef} className="flex space-x-4 overflow-x-auto no-scrollbar px-5 py-3 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-glam-gold focus-visible:ring-offset-4 focus-visible:ring-offset-glam-space">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          aria-label="Scroll right"
          className="absolute right-0 top-0 bottom-0 z-10 w-12 flex items-center justify-center bg-glam-space/70 opacity-0 group-hover:opacity-100 transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-glam-gold focus-visible:ring-offset-4 focus-visible:ring-offset-glam-space focus-visible:opacity-100"
        >
          <ChevronRight className="w-8 h-8 text-glam-pink" />
        </button>
      </div>
    </section>
  );
}

export default MoviesCarousel;