import { NavLink } from "react-router";
import { StyledIcon } from "./UserMenu.styled";

export default function UserMenu() {
  return (
    <div>
      <NavLink to="/inventory">Залишки</NavLink>
      <NavLink to="/transactions">Операції</NavLink>
      <NavLink to="/chemicals">ЗЗР</NavLink>
      <StyledIcon />
    </div>
  );
}
