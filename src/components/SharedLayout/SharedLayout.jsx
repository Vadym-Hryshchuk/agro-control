import { Outlet } from "react-router";
import Header from "../Header/Header";
import AppWrapper from "../Wrapper/AppWrapper";

export default function SharedLayout() {
  return (
    <>
      <Header />
      <AppWrapper>
        <Outlet />
      </AppWrapper>
    </>
  );
}
