import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--darkGrey);
  padding: 0 20px;
  display: flex;
  justify-content: center;
  /* height: 17vh; */
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--maxWidth);
  width: 100%;
  padding: 20px 20px;
  /* margin: 0 auto; */
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  /* border: 2px solid white; */
`;

export const HeadingText = styled.h1`
  font-size: 1.5rem;
  padding: 0;
  text-decoration: none;
  /* font-size: 20px; */
  margin: 0 10px;
  /* padding: 0 20px; */
`;

export const LogoImg = styled.img`
  width: 200px;

  @media screen and (max-width: 500px) {
    width: 150px;
  }
`;

export const TMDBLogoImg = styled.img`
  width: 150px;

  @media screen and (max-width: 500px) {
    width: 100px;
  }
`;
