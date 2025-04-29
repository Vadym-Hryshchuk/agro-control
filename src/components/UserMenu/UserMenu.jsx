import { NavLink } from "react-router";
import { StyledIcon, StyledNavLink } from "./UserMenu.styled";

export default function UserMenu() {
  return (
    <div>
      <StyledNavLink to="/inventory">Залишки</StyledNavLink>
      <StyledNavLink to="/transactions">Операції</StyledNavLink>
      <StyledNavLink to="/chemicals">ЗЗР</StyledNavLink>
      {/* <StyledIcon /> */}
    </div>
  );
}
