import styled from "styled-components";
import { Link } from "react-router";

export const StyledHeader = styled.header`
  background-color: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(8px);
`;

export const HeaderWrapper = styled.div`
  max-width: 1340px;
  margin: 0 auto;
  padding: 0 16px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  @media screen and (min-width: 768px) {
    height: 72px;
    padding: 0 32px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0 40px;
  }
`;

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
`;

export const LogoImg = styled.img`
  display: inline-block;
  height: 28px;
  width: auto;

  @media screen and (min-width: 768px) {
    height: 36px;
  }
`;

export const LogoText = styled.span`
  font-family: 'Manrope', sans-serif;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-accent);
  line-height: 1.2;
  max-width: 100px;

  @media screen and (min-width: 480px) {
    font-size: 15px;
    max-width: none;
  }

  @media screen and (min-width: 768px) {
    font-size: 17px;
  }
`;
