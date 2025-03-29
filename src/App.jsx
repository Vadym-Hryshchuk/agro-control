import { Toaster } from "react-hot-toast";
import "./App.css";
import TransactionsPage from "./pages/TransactionsPage";
// import ChemicalsPage from "./pages/ChemicalsPage";
// import InventoryPage from "./pages/InventoryPage";

export default function App() {
  return (
    <>
      {/* <InventoryPage /> */}
      <TransactionsPage />
      {/* <ChemicalsPage /> */}
      <Toaster />
    </>
  );
}
