import { useState, useEffect } from "react";
import { fetchInventory } from "../api";
import InventoryList from "../components/InventoryList/InventoryList";
import Loader from "../components/Loader/Loader";

export default function InventoryPage() {
  const [inventory, setInventory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getInventory() {
      try {
        setIsLoading(true);
        //   setError(false);
        const data = await fetchInventory();
        setInventory(data);
      } catch {
        //   setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getInventory();
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      <h1> Залишки ЗЗР</h1>
      {inventory.length > 0 ? (
        <InventoryList inventory={inventory} />
      ) : (
        <p>Ще не має введеного жодного засобу захисту рослин</p>
      )}
    </>
  );
}
