import React from "react";
// Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";
// Components
import HeroImage from "./HeroImage/HeroImage";
import Grid from "./Grid/Grid";
import Thumb from "./Thumb/Thumb";
import Spinner from "./Spinner/Spinner";
import SearchBar from "./SearchBar/SearchBar";
// Custom Hook
import { useHomeFetch } from "../hooks/useHomeFetch";
// Image
import noImage from "../images/no_image.jpg";

const Home = () => {
  // Using/loading custom Hook
  const { state, loading, error, setSearchTerm } = useHomeFetch();

  console.log(state);

  return (
    <>
      {state.results[0] && (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          text={state.results[0].overview}
        />
      )}
      <SearchBar setSearchTerm={setSearchTerm} />
      <Grid header="Popular Movies">
        {state.results.map((movie) => (
          <Thumb
            key={movie.id}
            clickable
            image={
              movie.poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                : noImage
            }
            movieId={movie.id}
          />
        ))}
      </Grid>
      <Spinner></Spinner>
    </>
  );
};

export default Home;
