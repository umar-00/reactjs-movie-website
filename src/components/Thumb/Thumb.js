import React from "react";
import { Link } from "react-router-dom";

// Styles
import { Image } from "./Thumb.styles";

const Thumb = ({ image, movieId, clickable }) => {
  return (
    <>
      {clickable ? (
        <Link to={`/${movieId}`}>
          <Image src={image} alt="movie-thumb" />
        </Link>
      ) : (
        <Image src={image} alt="movie-thumb" />
      )}
    </>
  );
};

export default Thumb;
