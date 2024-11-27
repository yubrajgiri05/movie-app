type MovieDetailsProps = {
    title: string;
    overview: string;
    backdrop_path: string;
  };
  
  const MovieDetails: React.FC<MovieDetailsProps> = ({
    title,
    overview,
    backdrop_path,
  }) => {
    return (
      <div className="movie-details">
        <div
          className="movie-banner"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w500${backdrop_path})`,
          }}
        >
          <div className="overlay"></div>
        </div>
        <div className="movie-info">
          <h1 className="movie-title">{title}</h1>
          <p className="movie-overview">{overview}</p>
        </div>
      </div>
    );
  };
  
  export default MovieDetails;
  