import { Movie } from "./types";

async function fetchFromTMDB(url: URL) {
  url.searchParams.set("include_adult", "false");
  url.searchParams.set("language", "en-US");
  url.searchParams.set("page", "1");

  const res = await fetch(url.toString(), {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
    },
    next: { revalidate: 60 * 60 * 24 },
  });

  const data = await res.json();
  return data.results as Movie[];
}

export async function getUpcomingMovies() {
  const url = new URL("https://api.themoviedb.org/3/movie/upcoming");
  return fetchFromTMDB(url);
}


export async function getPopularMovies() {
  const url = new URL("https://api.themoviedb.org/3/movie/popular");
  return fetchFromTMDB(url);
}


export async function getTopRatedMovies() {
  const url = new URL("https://api.themoviedb.org/3/movie/top_rated");
  return fetchFromTMDB(url);
}
