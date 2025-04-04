import styled from "styled-components";

export const StyledAppWrapper = styled.div`
  max-width: 320px;
  margin: 0 auto;
  padding: 0 10px;

  @media screen and (min-width: 834px) {
    max-width: 780px;
    padding: 0 27px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1372px;
    padding: 0 34px;
  }
`;
