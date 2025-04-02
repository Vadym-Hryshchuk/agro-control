import styled from "styled-components";

const StyledErrorText = styled.p`
  color: rgb(231, 74, 59);
  font-size: 12px;
  margin: 5px 0 0 5px;
  font-weight: bold;
  position: absolute;
  top: 100%;
  left: 6px;
  transform: translate(0, -30%);
`;

export default function ErrorText({ children }) {
  return <StyledErrorText>{children}</StyledErrorText>;
}
