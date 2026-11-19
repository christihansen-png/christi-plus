import { getUpcomingMovies } from "@/lib/getMovies";

export default async function Home() {
  const upcomingMovies = await getUpcomingMovies();

  return (
    <main className="pt-24 px-5">
      <h2 className="text-xl font-bold mb-4">Upcoming</h2>

      {upcomingMovies.map((movie) => (
        <p key={movie.id}>{movie.title}</p>
      ))}
    </main>
  );
}