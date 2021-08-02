import React from "react";
import PropTypes from "prop-types";
// Styles
import { Wrapper, Image, Content } from "./Actor.styles";

const Actor = ({ name, character, imageUrl }) => {
  return (
    <Wrapper>
      <Image src={imageUrl} alt="actor-thumbnail-image"></Image>
      <Content>
        <h3>{name}</h3>
        <p>{character}</p>
      </Content>
    </Wrapper>
  );
};

Actor.propTypes = {
  name: PropTypes.string,
  character: PropTypes.string,
  imageUrl: PropTypes.string,
};

export default Actor;
