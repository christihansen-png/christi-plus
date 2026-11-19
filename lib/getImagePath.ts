export function getImagePath(path: string | null, size: string = "w500") {
  if (!path) {
    return "/butterfly.svg";
  }
  return `https://image.tmdb.org/t/p/${size}${path}`;
}