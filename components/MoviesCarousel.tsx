import { Movie } from "@/lib/types";
import MovieCard from "./MovieCard";

type Props = {
  title: string;
  movies: Movie[];
};

function MoviesCarousel({ title, movies }: Props) {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-bold px-5 mb-3">{title}</h2>

      <div className="flex space-x-4 overflow-x-auto px-5 py-3">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
}

export default MoviesCarousel;