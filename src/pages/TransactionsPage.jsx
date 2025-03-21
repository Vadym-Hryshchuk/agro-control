import { useState, useEffect } from "react";
import { fetchTransactions } from "../api";
import TransactionList from "../components/TransactionsList";

export default function TransactionsPage() {
  const [transactions, setTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getTransactions() {
      try {
        setIsLoading(true);
        //   setError(false);
        const data = await fetchTransactions();
        setTransactions(data);
      } catch {
        //   setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getTransactions();
  }, []);

  return (
    <>
      {isLoading && <b>Loading transactions...</b>}
      {transactions.length > 0 && (
        <TransactionList transactions={transactions} />
      )}
    </>
  );
}
