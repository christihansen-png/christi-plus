import MoviesCarousel from "@/components/MoviesCarousel";
import { getUpcomingMovies, getTopRatedMovies, getPopularMovies } from "@/lib/getMovies";

export default async function Home() {
  const upcomingMovies = await getUpcomingMovies();
  const topRatedMovies = await getTopRatedMovies();
  const popularMovies = await getPopularMovies();

  return (
    <main className="pt-24">
      <MoviesCarousel title="Launching Soon" movies={upcomingMovies} />
      <MoviesCarousel title="Brightest Stars" movies={topRatedMovies} />
      <MoviesCarousel title="Supernova Hits" movies={popularMovies} />
    </main>
  );
}