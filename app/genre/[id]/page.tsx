import MovieCard from "@/components/MovieCard";
import { getDiscoverMovies } from "@/lib/getMovies";

type Props = {
  params: { id: string };
  searchParams: { name?: string };
};

export default async function GenrePage({ params, searchParams }: Props) {
  const movies = await getDiscoverMovies(params.id);

  return (
    <main className="pt-28 px-5 pb-10">
      <h1 className="text-3xl font-bold mb-6">{searchParams.name ?? "Movies"}</h1>

      <div className="flex flex-wrap gap-6">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </main>
  );
}