import { SubButton } from "./ButtonSubmit.styled";

export default function ButtonSubmit({ type, children }) {
  return <SubButton type={type}>{children}</SubButton>;
}
