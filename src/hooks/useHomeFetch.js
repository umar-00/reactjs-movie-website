import React, { useState, useEffect } from "react";
//API
import API from "../API";

const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

// Always name custom hooks starting with "use", following with camelCase custom name
export const useHomeFetch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  console.log("Search Term:", searchTerm);

  const fetchMovies = async (searchTerm = "", page) => {
    try {
      setError(false);
      setLoading(true);

      const movies = await API.fetchMovies(searchTerm, page);
      //   console.log(movies);

      setState((prev) => ({
        ...movies,
        results:
          // TRUE condition: appends new movies to existing (prev) movies
          page > 1 ? [...prev.results, ...movies.results] : [...movies.results],
      }));
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  // Initial render and search
  useEffect(() => {
    setState(initialState);
    fetchMovies(searchTerm, 1);
  }, [searchTerm]);

  return { state, loading, error, searchTerm, setSearchTerm };
};
