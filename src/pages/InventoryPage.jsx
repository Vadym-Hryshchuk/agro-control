import { useState, useEffect } from "react";
import { fetchInventory } from "../api";
import InventoryList from "../components/InventoryList/InventoryList";

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
      {isLoading && <b>Loading inventory...</b>}
      <h1>Привіт. Це сторінка, яка показуватиме залишки ЗЗР</h1>
      {inventory.length > 0 ? (
        <InventoryList inventory={inventory} />
      ) : (
        <p>Ще не має введеного жодного засобу захисту рослин</p>
      )}
    </>
  );
}
