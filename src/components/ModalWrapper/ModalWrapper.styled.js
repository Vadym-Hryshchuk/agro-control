import styled from "styled-components";
import Modal from "react-modal";

export const SModal = styled(Modal)`
  &.content {
    width: 300px;
    background: white;
    padding: 16px 12px;
    border-radius: 8px;
  }
`;

export const Header = styled.div`
  font-weight: bold;
  color: black;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1.5rem;
  color: black;
`;
