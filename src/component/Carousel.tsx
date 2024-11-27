import React from "react";
import Link from "next/link";

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
          console.log(movie),
          <div key={movie.id} className="col-sm-6 col-md-4 col-lg-3">
            <div className="card h-100 shadow-sm">
              <Link href={`/movie-details/${movie.id}`}>
                <img
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                      : "/default-poster.png"
                  }
                  className="card-img-top"
                  alt={movie.title}
                />
              </Link>
              <div className="card-body text-center">
                <h5 className="card-title">{movie.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviesGrid;
