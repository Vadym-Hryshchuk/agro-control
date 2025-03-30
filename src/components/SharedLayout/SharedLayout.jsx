import { Outlet } from "react-router";

export default function SharedLayout() {
  return (
    <>
      <div>Привіт, я загальний</div>
      <Outlet />
    </>
  );
}
