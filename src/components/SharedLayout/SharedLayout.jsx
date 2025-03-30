import { Outlet } from "react-router";
import Header from "../Header/Header";

export default function SharedLayout() {
  return (
    <>
      <div>Привіт, я загальний</div>
      <Header />
      <Outlet />
    </>
  );
}
