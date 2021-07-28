import styled from "styled-components";

export const Wrapper = styled.button`
  display: block;
  width: 25%;
  min-width: 200px;
  height: 60px;
  margin: 20px auto;
  background: var(--darkGrey);
  font-size: var(--fontBig);
  border-radius: 100px;
  border: none;
  color: white;
  transition: all 0.3s;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }

  animation: animateButton 0.5s;

  @keyframes animateButton {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
