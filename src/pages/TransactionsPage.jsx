import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";

import { addTransactions, fetchTransactions, fetchChemicals } from "../api";
import TransactionsForm from "../components/TransactionForm/TransactionForm";
import TransactionList from "../components/TransactionsList/TransactionsList";

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
    const resp = await addTransactions(data);
    const transaction = await fetchTransactions();
    setTransactions(transaction);
    toast.success(`${resp.message}`);
  };
  const deleteTransaction = async (id) => {
    console.log(id);
  };

  return (
    <>
      {isLoading && <b>Loading transactions...</b>}
      <h1>Привіт. Це сторінка введення операцій по ЗЗР</h1>
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
