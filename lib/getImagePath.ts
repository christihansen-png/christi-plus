export function getImagePath(path: string | null) {
  if (!path) {
    return "/butterfly.svg";
  }
  return `https://image.tmdb.org/t/p/w500${path}`;
}