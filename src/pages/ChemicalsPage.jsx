import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";

import { addChemicals, fetchChemicals, removeChemicals } from "../api";
import ChemicalsForm from "../components/ChemicalsForm/ChemicalsForm";
import ChemicalsList from "../components/ChemicalsList/ChemicalsList";
import Loader from "../components/Loader/Loader";
import PageTitle from "../components/PageTitle/PageTitle";

export default function ChemicalsPage() {
  const [chemicals, setChemicals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getChemicals() {
      try {
        setIsLoading(true);
        const chemicalsData = await fetchChemicals();
        setChemicals(chemicalsData);
      } catch {
        toast.error("Щось пішло не так, спробуйте пізніше");
      } finally {
        setIsLoading(false);
      }
    }

    getChemicals();
  }, []);

  const createChemicals = async (data) => {
    try {
      setIsLoading(true);
      const resp = await addChemicals(data);
      const chemical = await fetchChemicals();
      setChemicals(chemical);
      toast.success(`${resp.message}`);
    } catch ({ response }) {
      toast.error(response.data.message);
      throw new Error(response.data.message);
    } finally {
      setIsLoading(false);
    }
  };
  const deleteChemicals = async (id) => {
    try {
      setIsLoading(true);
      const resp = await removeChemicals(id);
      const chemical = await fetchChemicals();
      setChemicals(chemical);
      toast.success(`${resp.message}`);
    } catch ({ response }) {
      toast.error(response.data.message);
      throw new Error(response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading && <Loader />}
      <PageTitle>Введення ЗЗР</PageTitle>
      <ChemicalsForm create={createChemicals} />
      {chemicals.length > 0 ? (
        <ChemicalsList chemicals={chemicals} remove={deleteChemicals} />
      ) : (
        <p>Список ЗЗР порожній</p>
      )}
    </>
  );
}
