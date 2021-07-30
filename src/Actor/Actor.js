import React from "react";
// Styles
import { Wrapper, Image, Content } from "./Actor.styles";
//Components
import Thumb from "../components/Thumb/Thumb";
import Grid from "../components/Grid/Grid";

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

export default Actor;
