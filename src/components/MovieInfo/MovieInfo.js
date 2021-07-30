import React from "react";

import Thumb from "../Thumb/Thumb";
import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from "../../config";

// Styles
import { Wrapper, Content, Text } from "./MovieInfo.styles";

import noImage from "../../images/no_image.jpg";

const MovieInfo = ({ movie }) => {
  return (
    <Wrapper backdrop={movie.backdrop_path}>
      <Content>
        <div className="thumb-div">
          <Thumb
            className="content-thumb"
            image={
              movie.poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                : noImage
            }
            clickable={false}
          />
        </div>

        <Text>
          <h1>{movie.title}</h1>
          <h3>PLOT</h3>
          <p className="movie-overview">{movie.overview}</p>

          <div className="rating-director">
            <div>
              <h3>RATING</h3>
              <div className="score">{movie.vote_average}</div>
            </div>
            <div className="director">
              <h3>DIRECTOR{movie.directors.length > 1 && "S"}</h3>
              {movie.directors.map((director) => (
                <p key={director.credit_id}>{director.name}</p>
              ))}
            </div>
          </div>
        </Text>
      </Content>
    </Wrapper>
  );
};

export default MovieInfo;
