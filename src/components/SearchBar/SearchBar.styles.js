import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background: var(--darkGrey);
`;

export const Content = styled.div`
  display: flex;
  background: var(--medGrey);
  max-width: var(--maxWidth);
  width: 100%;
  margin: 20px;
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

  textarea:focus,
  input:focus {
    outline: none;
  }
`;
