import React, { useState, useEffect } from "react";
//API
import API from "../API";
// Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";
// Components

// Hook

// Image
import noImage from "../images/no_image.jpg";

const Home = () => {
  const [state, setState] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

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

  useEffect(() => {
    fetchMovies("", 1);
  }, []);

  console.log(state);

  return <div>Home Page</div>;
};

export default Home;
