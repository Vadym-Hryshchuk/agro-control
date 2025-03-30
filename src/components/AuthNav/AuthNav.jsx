import { AuthNavLink, AuthWrapper } from "./AuthNav.styled";
import Icons from "../../icons/profile-circle.svg?react";

export default function AuthNav() {
  return (
    <AuthWrapper>
      <AuthNavLink to="/">Увійти</AuthNavLink>
      <span>/</span>
      <AuthNavLink to="/">Зареєструватися</AuthNavLink>
      <Icons width="28px" height="28px" />
    </AuthWrapper>
  );
}
