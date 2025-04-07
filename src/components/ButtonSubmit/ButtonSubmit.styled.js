import styled from "styled-components";

export const SubButton = styled.button`
  width: 300px;
  height: 36px;
  padding: 8px 10px;
  background-color: rgba(227, 255, 168, 1);
  border: none;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0%;

  &:hover {
    background-color: rgba(227, 255, 168, 0.8);
  }
  @media screen and (min-width: 834px) {
    width: 380px;
  }
  @media screen and (min-width: 1440px) {
    width: 212px;
  }
`;
