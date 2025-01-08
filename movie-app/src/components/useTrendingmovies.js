import { useState, useEffect } from "react";
import axios from "axios";

const useTrendingMovies = (pageNo) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/trending/movie/day?api_key=e8f62da5e2126af5d78d9b0d4bc4d1ce&page=${pageNo}`
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching trending movies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrendingMovies();
  }, [pageNo]);

  return { movies, loading };
};

export default useTrendingMovies;
