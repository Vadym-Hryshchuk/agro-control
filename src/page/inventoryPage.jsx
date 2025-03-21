import { useState, useEffect } from "react";
import { fetchInventory } from "../api";
import InventoryList from "../components/inventoryList";

export default function InnventoryPage() {
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
      {inventory.length > 0 && <InventoryList inventory={inventory} />}
    </>
  );
}
