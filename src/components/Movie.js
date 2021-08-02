import React from "react";
import { useParams } from "react-router-dom";
// Config
import { POSTER_SIZE, IMAGE_BASE_URL } from "../config";
// Components
import Grid from "./Grid/Grid";
import Spinner from "./Spinner/Spinner";
import BreadCrumb from "./BreadCrumb/BreadCrumb";
import MovieInfo from "./MovieInfo/MovieInfo";
import MovieInfoBar from "./MovieInfoBar/MovieInfoBar";
import Actor from "./Actor/Actor";
// Hooks
import { useMovieFetch } from "../hooks/useMovieFetch";

//Image
import noImage from "../images/no_image.jpg";

const Movie = () => {
  // "movieId" comes from Route path for 'Movie' element in App.js
  const { movieId } = useParams();

  const { state: movie, loading, error } = useMovieFetch(movieId);

  console.log(movie);

  if (loading) return <Spinner></Spinner>;
  if (error) return <div>Something went wrong...</div>;

  return (
    <>
      <BreadCrumb movieTitle={movie.original_title}></BreadCrumb>
      <MovieInfo movie={movie}></MovieInfo>
      <MovieInfoBar movie={movie}></MovieInfoBar>
      {/* <Actor
        name={movie.actors[0].name}
        character={movie.actors[0].character}
      ></Actor> */}

      <Grid header="Cast">
        {movie.actors.map((actor) => (
          <Actor
            key={actor.id}
            clickable
            name={actor.name}
            character={actor.character}
            imageUrl={
              actor.profile_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                : noImage
            }
            movieId={actor.id}
          />
        ))}
      </Grid>
    </>
  );
};

export default Movie;
