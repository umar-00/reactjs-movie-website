import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  background: var(--darkGrey);
`;

export const Content = styled.div`
  display: flex;
  background: var(--medGrey);
  max-width: var(--maxWidth);
  width: 100%;
  height: 55px;
  margin: 20px 0;
  border-radius: 100px;
  padding: 5px 10px;

  img {
    width: 30px;
    margin: 0 10px;
  }

  input {
    background: none;
    color: white;
    border: none;
    width: 100%;
    font-size: var(--fontBig);
  }

  input:focus {
    outline: none;
  }
`;
