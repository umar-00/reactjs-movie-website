import React from "react";

// Helper functions
import { calcTime, convertMoney } from "../../helpers";

// Styles
import { Wrapper, ContentPill } from "./MovieInfoBar.styles";
import PropTypes from "prop-types";

const MovieInfoBar = ({ movie }) => {
  return (
    <Wrapper>
      <div className="content-div">
        <ContentPill>
          <span>Runtime: {calcTime(movie.runtime)}</span>
        </ContentPill>
        <ContentPill>
          <span>Budget: {convertMoney(movie.budget)}</span>
        </ContentPill>
        <ContentPill>
          <span>Box Office: {convertMoney(movie.revenue)}</span>
        </ContentPill>
      </div>
    </Wrapper>
  );
};

MovieInfoBar.propTypes = {
  movie: PropTypes.object,
};

export default MovieInfoBar;
