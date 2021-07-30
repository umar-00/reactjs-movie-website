import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--darkGrey);
  width: 100%;
  padding: 0 40px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  .content-div {
    display: flex;
    max-width: var(--maxWidth);

    width: 100%;
    background: var(--darkGrey);
    /* padding: 0 40px; */
    /* margin: 0 40px; */
    gap: 30px;
    justify-content: space-between;
    align-items: center;
    /* margin: 0 auto; */

    @media screen and (max-width: 768px) {
      padding: 10px 40px;
      display: block;
    }
  }
`;

export const ContentPill = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--medGrey);
  color: white;
  height: 55px;
  width: 100%;
  margin: 20px 0;
  border-radius: 100px;

  span {
    overflow: hidden;
    font-size: var(--fontMed);
    @media screen and (max-width: 768px) {
      font-size: var(--fontSmall);
    }
  }
`;
