import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080/api";

export const fetchInventory = async () => {
  const resp = await axios.get("/inventory");
  return resp.data;
};

export const fetchTransactions = async () => {
  const resp = await axios.get("/transactions");
  return resp.data;
};

export const addTransactions = async (value) => {
  const resp = await axios.post("/transactions", value);
  return resp.data;
};
export const removeTransactions = async (transactionId) => {
  const resp = await axios.delete(`/transactions/${transactionId}`);
  return resp.data;
};

export const fetchChemicals = async () => {
  const resp = await axios.get("/chemicals");
  return resp.data;
};

export const addChemicals = async (value) => {
  const resp = await axios.post("/chemicals", value);
  return resp.data;
};
