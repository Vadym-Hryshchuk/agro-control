import styled from "styled-components";

export const StyledLoader = styled.div`
  position: fixed;
  z-index: 2;
  background-color: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  inset: 0;
`;
