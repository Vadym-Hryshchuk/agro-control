import { Route, Routes } from "react-router";
import { Toaster } from "react-hot-toast";

import InventoryPage from "../pages/InventoryPage";
import TransactionsPage from "../pages/TransactionsPage";
import ChemicalsPage from "../pages/ChemicalsPage";
import WelcomePage from "../pages/WelcomePage";
import SharedLayout from "./SharedLayout/SharedLayout";
import NotFoundPage from "../pages/NotFoudPage";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<WelcomePage />} />
          <Route path="inventory" element={<InventoryPage />} />
          <Route path="transactions" element={<TransactionsPage />} />
          <Route path="chemicals" element={<ChemicalsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <Toaster />
    </>
  );
}
