import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid var(--lightGrey);
  overflow: hidden;
  box-shadow: 2px 6px 16px -5px rgba(0, 0, 0, 0.46);
  width: 100%;
  border-radius: 15px;
  padding-bottom: 10px;
  background-color: var(--medGrey);
  color: white;
`;

export const Image = styled.img`
  width: 100%;
  transition: all 0.3s;

  :hover {
    opacity: 0.8;
  }

  animation: animateActor 0.5s;

  @keyframes animateActor {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Content = styled.div`
  flex-grow: 1;
  font-weight: bolder;
  margin: 0;

  h3 {
    margin: 15px 10px 0 10px;
    /* margin-top: 10px;
    margin-left: 10px;
    margin-right: 10px; */
  }

  p {
    margin-top: 6px;
    margin-left: 10px;
    margin-right: 10px;
    font-weight: lighter;
    /* color: black; */
  }
`;
