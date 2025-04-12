import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";

import {
  addTransactions,
  fetchTransactions,
  fetchChemicals,
  removeTransactions,
} from "../api";
import TransactionsForm from "../components/TransactionForm/TransactionForm";
import TransactionList from "../components/TransactionsList/TransactionsList";
import Loader from "../components/Loader/Loader";

export default function TransactionsPage() {
  const [transactions, setTransactions] = useState([]);
  const [chemicals, setСhemicals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getTransactions() {
      try {
        setIsLoading(true);
        //   setError(false);
        const data = await fetchTransactions();
        const chemicalsData = await fetchChemicals();
        setTransactions(data);
        setСhemicals(chemicalsData);
      } catch {
        //   setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getTransactions();
  }, []);

  const createTransactions = async (data) => {
    try {
      setIsLoading(true);
      const resp = await addTransactions(data);
      console.log(resp);
      const transaction = await fetchTransactions();
      setTransactions(transaction);
      toast.success(`${resp.message}`);
    } catch ({ response }) {
      toast.error(response.data.message);
      throw new Error(response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteTransaction = async (id) => {
    try {
      setIsLoading(true);
      const resp = await removeTransactions(id);
      const transaction = await fetchTransactions();
      setTransactions(transaction);
      toast.success(`${resp.message}`);
    } catch {
      //   setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading && <Loader />}
      <h1>Операцій по ЗЗР</h1>
      <TransactionsForm create={createTransactions} options={chemicals} />
      {transactions.length > 0 ? (
        <TransactionList
          transactions={transactions}
          remove={deleteTransaction}
        />
      ) : (
        <p>Список трансакцій порожній</p>
      )}
    </>
  );
}
