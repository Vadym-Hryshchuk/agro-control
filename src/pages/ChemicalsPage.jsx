import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import ChemicalsForm from "../components/ChemicalsForm/ChemicalsForm";
import ChemicalsList from "../components/ChemicalsList/ChemicalsList";
import { addChemicals, fetchChemicals } from "../api";

export default function ChemicalsPage() {
  // const [transactions, setTransactions] = useState([]);
  const [chemicals, setChemicals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getChemicals() {
      try {
        setIsLoading(true);
        //   setError(false);
        const chemicalsData = await fetchChemicals();
        // const chemicalsData = await fetchChemicals();
        // setTransactions(data);
        setChemicals(chemicalsData);
      } catch {
        //   setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getChemicals();
  }, []);

  const createChemicals = async (data) => {
    const resp = await addChemicals(data);
    const chemical = await fetchChemicals();
    setChemicals(chemical);
    toast.success(`${resp.message}`);
  };
  const deleteChemicals = async (id) => {
    console.log(id);
  };

  return (
    <>
      {isLoading && <b>Loading Chemicals...</b>}
      <h1>Привіт. Це сторінка введення ЗЗР</h1>
      <ChemicalsForm create={createChemicals} />
      {chemicals.length > 0 ? (
        <ChemicalsList chemicals={chemicals} remove={deleteChemicals} />
      ) : (
        <p>Список ЗЗР порожній</p>
      )}
    </>
  );
}
