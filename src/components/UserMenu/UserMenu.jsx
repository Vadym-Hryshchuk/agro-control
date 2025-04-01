import { NavLink } from "react-router";

export default function UserMenu() {
  return (
    <div>
      <NavLink to="/inventory">Залишки</NavLink>
      <NavLink to="/transactions">Операції</NavLink>
      <NavLink to="/chemicals">ЗЗР</NavLink>
    </div>
  );
}
