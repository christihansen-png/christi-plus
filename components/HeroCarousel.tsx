"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Movie } from "@/lib/types";
import HeroBanner from "./HeroBanner";

function HeroCarousel({ movies }: { movies: Movie[] }) {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {movies.map((movie) => (
          <div key={movie.id} className="min-w-0 flex-[0_0_100%]">
            <HeroBanner movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HeroCarousel;