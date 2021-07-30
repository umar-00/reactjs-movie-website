import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--medGrey);
  display: flex;
  align-items: center;
  padding: 0 20px;
  height: 80px;
`;

export const Content = styled.div`
  display: flex;
  color: white;
  max-width: var(--maxWidth);
  width: 100%;
  padding: 0 20px;
  margin: 0 auto;

  span {
    font-size: var(--fontMed);
    padding-right: 10px;
  }

  a {
    color: white;
    text-decoration: none;
  }

  @media screen and (max-width: 768px) {
    font-size: var(--fontSmall);
  }
`;
