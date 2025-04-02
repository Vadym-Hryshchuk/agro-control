import styled from "styled-components";

const StyledSuccessText = styled.p`
  color: rgb(60, 188, 129);
  font-size: 12px;
  margin: 5px 0 0 5px;
  font-weight: bold;
  position: absolute;
  bottom: -16px;
  left: 6px;
`;
export default function SuccessText({ children }) {
  return <StyledSuccessText>{children}</StyledSuccessText>;
}
