import styled from "styled-components";
import { Link } from "react-router";

export const StyledHeader = styled.header`
  background-color: #0f0f0f;
  height: 60px;
  padding: 17px 10px;

  @media screen and (min-width: 834px) {
    height: 100px;
    padding: 34px 27px;
  }
  @media screen and (min-width: 1440px) {
    padding: 34px;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
`;

export const LogoImg = styled.img`
  display: inline-block;
  height: 22px;
  margin-right: 4px;
  @media screen and (min-width: 834px) {
    height: 32px;
    margin-right: 8px;
  }
`;
export const LogoText = styled.span`
  font-size: 16px;
  font-weight: 700;
  @media screen and (min-width: 834px) {
    font-size: 22px;
  }
`;
