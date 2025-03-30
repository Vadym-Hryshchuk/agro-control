import { Route, Routes } from "react-router";
import { Toaster } from "react-hot-toast";

import InventoryPage from "../pages/InventoryPage";
import TransactionsPage from "../pages/TransactionsPage";
import ChemicalsPage from "../pages/ChemicalsPage";
import WelcomePage from "../pages/WelcomePage";
import SharedLayout from "./SharedLayout/SharedLayout";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<WelcomePage />} />
          <Route path="a" element={<InventoryPage />} />
          <Route path="b" element={<TransactionsPage />} />
          <Route path="c" element={<ChemicalsPage />} />
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Route>
      </Routes>
      <Toaster />
    </>
  );
}
