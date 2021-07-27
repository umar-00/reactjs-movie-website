import styled from "styled-components";

export const Image = styled.img`
  width: 100%;
  max-width: 720px;
  border-radius: 15px;
  transition: all 0.3s;

  :hover {
    opacity: 0.8;
  }

  animation: animateThumb 0.5s;

  @keyframes animateThumb {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
