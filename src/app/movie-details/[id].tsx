import { useRouter } from 'next/router';

const MovieDetails = () => {
  const router = useRouter();
  const { id } = router.query; // Access the dynamic `id` from the URL
  console.log(id);

  return (
    <div>
      <h1>Movie Details</h1>
      <p>Movie ID: {id}</p>
      {/* Fetch and display details for movie ID */}
    </div>
  );
};

export default MovieDetails;