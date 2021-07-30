import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0;
  padding: 0 40px;

  h1 {
    max-width: var(--maxWidth);
    margin: 21.5px auto;
    color: var(--medGrey);
    @media screen and (max-width: 720px) {
      font-size: var(--fontBig);
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: var(--maxWidth);
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 2rem;
`;
