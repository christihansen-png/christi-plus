import Image from "next/image";
import { Movie } from "@/lib/types";
import { getImagePath } from "@/lib/getImagePath";

function MovieCard({ movie }: { movie: Movie }) {
  return (
    <div className="flex-shrink-0 w-40 hover:scale-105 transition duration-200">
      <Image
        src={getImagePath(movie.poster_path)}
        alt={movie.title}
        width={160}
        height={240}
        className="w-40 h-60 object-cover rounded-lg"
      />
      <p className="mt-2 text-sm truncate">{movie.title}</p>
    </div>
  );
}

export default MovieCard;