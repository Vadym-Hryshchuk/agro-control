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
