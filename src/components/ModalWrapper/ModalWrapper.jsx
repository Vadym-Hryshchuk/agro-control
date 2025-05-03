import Modal from "react-modal";
import { Footer, Header, SModal } from "./ModalWrapper.styled";

Modal.setAppElement("#root");

export default function ModalWrapper({
  isOpen,
  onClose,
  title,
  children,
  footer,
}) {
  return (
    <SModal
      isOpen={isOpen}
      onRequestClose={onClose}
      onAfterOpen={() => (document.body.style.overflow = "hidden")}
      onAfterClose={() => (document.body.style.overflow = "unset")}
      className="content"
      overlayClassName="overlay"
    >
      {title && (
        <Header>
          <span>{title}</span>
          <button onClick={onClose}>×</button>
        </Header>
      )}
      <div>{children}</div>
      {footer && <Footer>{footer}</Footer>}
    </SModal>
  );
}
