import { Toaster } from "react-hot-toast";
import "./App.css";
import TransactionsPage from "./pages/TransactionsPage";
// import InnventoryPage from "./pages/InventoryPage";

export default function App() {
  return (
    <>
      {/* <InnventoryPage /> */}
      <TransactionsPage />
      <Toaster />
    </>
  );
}
