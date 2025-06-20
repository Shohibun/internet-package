// src/services/api.js
import axios from "axios";

const API_URL = "http://localhost:3001";

// CUSTOMER
export const getCustomers = () => axios.get(`${API_URL}/customers`);
export const addCustomer = (data) => axios.post(`${API_URL}/customers`, data);
export const updateCustomer = (id, data) =>
  axios.put(`${API_URL}/customers/${id}`, data);
export const deleteCustomer = (id) =>
  axios.delete(`${API_URL}/customers/${id}`);

// TRANSACTION
export const getTransactions = () => axios.get(`${API_URL}/transactions`);
export const addTransaction = (data) =>
  axios.post(`${API_URL}/transactions`, data);
export const updateTransaction = (id, data) =>
  axios.put(`${API_URL}/transactions/${id}`, data);
export const deleteTransaction = (id) =>
  axios.delete(`${API_URL}/transactions/${id}`);

// PACKAGE
export const getPackages = () => axios.get(`${API_URL}/packages`);
