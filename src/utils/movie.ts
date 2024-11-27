const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxY2ViYTE1YzhlOTMwNmExNGMxZWQ3ZDUyYTRlNGFhMCIsIm5iZiI6MTczMjYxMjEwNC4xMTAzNDA0LCJzdWIiOiI2NzQ1OGRkMzgwYjQ0YTg5MzdiN2MzNDUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.f5pYhZOw9kt_ZFyPzWay-D1seZ2dOGJ43W7Mb5-a-A0";

async function fetchFromAPI(endpoint: string, params: Record<string, string> = {}) {
  const url = new URL(`${API_BASE_URL}/${endpoint}`);
  url.search = new URLSearchParams({
    ...params,
  }).toString();

  const response = await fetch(url.toString(), {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json;charset=utf-8",
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch data: ${response.status} - ${response.statusText}`);
  }

  return response.json();
}

export async function fetchMovies(query?: string) {
  const endpoint = query ? "search/movie" : "discover/movie";
  const params = query
    ? { query, language: "en-US", page: "1" }
    : { language: "en-US", sort_by: "popularity.desc", page: "1" };

  const data = await fetchFromAPI(endpoint, params);

  return data.results.map((movie: any) => ({
    id: movie.id,
    title: movie.title,
    overview: movie.overview,
    poster_path: movie.poster_path,
    backdrop_path: movie.backdrop_path,
  }));
}

export function getImageUrl(path: string, size: "w200" | "w500" | "original" = "original") {
  return `https://image.tmdb.org/t/p/${size}${path}`;
}
