"use client";

import { useState, useEffect } from "react";
import { fetchMovies } from "@/utils/movie";
import Carousel from "@/component/Carousel";
import Navbar from "@/component/Navbar"; // Import the Navbar component

type Movie = {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path?: string; // Optional or string | null based on Fix 1 or 2
};

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);

  // Fetch all movies on initial load
  useEffect(() => {
    const fetchData = async () => {
      const fetchedMovies = await fetchMovies();
      setMovies(fetchedMovies);
      setFilteredMovies(fetchedMovies); // Initially set filteredMovies as all fetched movies
    };

    fetchData();
  }, []);

  // Handle search
  const handleSearch = (query: string) => {
    if (!query) {
      setFilteredMovies(movies); // Show all movies if search query is empty
    } else {
      const filtered = movies.filter((movie) =>
        movie.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredMovies(filtered);
    }
  };

  return (
    <div>
      <Navbar onSearch={handleSearch} /> {/* Navbar with search functionality */}
      <Carousel movies={filteredMovies} /> {/* Carousel displaying filtered movies */}
    </div>
  );
}
