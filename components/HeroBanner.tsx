import Image from "next/image";
import { Movie } from "@/lib/types";
import { getImagePath } from "@/lib/getImagePath";

function HeroBanner({ movie }: { movie: Movie }) {
  return (
    <section className="relative h-[70vh] w-full">
      <Image
        src={getImagePath(movie.backdrop_path, "original")}
        alt={movie.title}
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-glam-space via-glam-space/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-glam-space/90 via-transparent to-transparent" />

      <div className="absolute bottom-16 left-5 max-w-xl">
        <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
        <p className="text-gray-200 line-clamp-3">{movie.overview}</p>
      </div>
    </section>
  );
}

export default HeroBanner;