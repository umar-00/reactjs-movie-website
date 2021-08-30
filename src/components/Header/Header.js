import React from "react";
import { Link } from "react-router-dom";

// import RMDBLogo from "../../images/react-movie-logo.svg";
// import TMDBLogo from "../../images/tmdb_logo.svg";
import { SiThemoviedatabase } from "react-icons/si";
import { RiMovie2Line } from "react-icons/ri";

import {
  Wrapper,
  Content,
  LogoContainer,
  HeadingText,
  // LogoImg,
  // TMDBLogoImg,
} from "./Header.styles";

const Header = () => {
  return (
    <Wrapper>
      <Content>
        <Link to="/" style={{ textDecoration: "none" }}>
          <LogoContainer>
            <RiMovie2Line size={45} />
            <HeadingText>React Movie</HeadingText>
          </LogoContainer>
        </Link>
        <a
          href="https://developers.themoviedb.org/3"
          rel="noreferrer"
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <LogoContainer>
            <HeadingText>Powered by: </HeadingText>
            <SiThemoviedatabase size={45} />
          </LogoContainer>
        </a>
      </Content>
    </Wrapper>
  );
};

export default Header;
