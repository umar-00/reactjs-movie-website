import styled from "styled-components";
import { IMAGE_BASE_URL, BACKDROP_SIZE } from "../../config";

// console.log(`${IMAGE_BASE_URL}${BACKDROP_SIZE}${movie.poster_path}`);

export const Wrapper = styled.div`
  background: ${({ backdrop }) =>
    backdrop ? `url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop})` : "#000"};
  /* background: #000; */
  background-size: cover;
  background-position: center;
  padding: 40px 40px;
  margin: 0 auto;
  width: 100%;
  animation: animateMovieInfo 1s;

  @keyframes animateMovieInfo {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  max-width: var(--maxWidth);
  margin: 0 auto;
  background: rgb(0, 0, 0, 0.7);
  border-radius: 20px;

  .thumb-div {
    /* height: 100px; */
    /* margin-top: -5px; */
    margin-bottom: -5px;
    flex-grow: 3;
  }

  .thumb-div img {
    overflow: hidden;
    /* margin: auto; */
    /* flex-grow: 3; */
    /* width: 500px;
    height: 665px; */
  }

  @media screen and (max-width: 768px) {
    display: block;
    max-height: none;
  }
`;

export const Text = styled.div`
  width: 100%;
  padding: 20px;
  color: var(--white);
  overflow: hidden;
  flex-grow: 1;

  .rating-director {
    display: flex;
    justify-content: flex-start;
    /* background: red; */
  }

  .score {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    background: #fff;
    color: #000;
    font-weight: 800;
    border-radius: 50%;
    margin: 0;
  }

  .movie-overview {
    font-size: var(--fontMed);
  }

  .director {
    margin: 0 0 0 40px;

    p {
      font-size: var(--fontMed);
      margin: 0;
      padding-top: 5px;
    }
  }

  h1 {
    @media screen and (max-width: 768px) {
      font-size: var(--fontBig);
    }
  }
`;
