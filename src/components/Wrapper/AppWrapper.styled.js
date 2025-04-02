import styled from "styled-components";

export const StyledAppWrapper = styled.div`
  max-width: 320px;
  margin: 0 auto;

  @media screen and (min-width: 834px) {
    max-width: 834px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1440px;
  }
`;
