import React from "react";
import Link from "next/link";
import Image from "next/image";


type Movie = {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string;
};

type MoviesGridProps = {
  movies: Movie[];
};

const MoviesGrid: React.FC<MoviesGridProps> = ({ movies }) => {
  if (!movies || movies.length === 0) {
    return <div>Loading movies...</div>;
  }

  return (
    <div className="container my-4">
      <div className="row gy-4">
        {movies.map((movie) => (
          <div key={movie.id} className="col-sm-6 col-md-4 col-lg-3">
            <Link href={`/movie-details/${movie.id}`} passHref>
              <div className="card h-100 shadow-sm">
                <Image
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                      : "/default-poster.png"
                  }
                  alt={movie.title || "Default Poster"}
                  width={400}
                  height={450} 
                  className="card-img-top"
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{movie.title}</h5>
                  <p className="card-text text-start">
                    {movie.overview?.substring(0, 100)}
                    {movie.overview?.length > 100 ? "..." : ""}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviesGrid;
