import React from "react";
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import {
  getTransactions,
  addTransaction,
  updateTransaction,
  deleteTransaction,
  getCustomers,
  getPackages,
} from "../services/Api";
import TransactionForm from "../pages/TransactionForm";
import TransactionTable from "../pages/TransactionTable";
import Navbar from "../components/Navbar";

export default function LayoutTransaction() {
  const [transactions, setTransactions] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [packages, setPackages] = useState([]);
  const [editing, setEditing] = useState(null);

  const loadData = async () => {
    const [trxRes, custRes, pkgRes] = await Promise.all([
      getTransactions(),
      getCustomers(),
      getPackages(),
    ]);
    setTransactions(trxRes.data);
    setCustomers(custRes.data);
    setPackages(pkgRes.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleSubmit = async (data) => {
    if (editing) {
      await updateTransaction(editing.id, data);
      setEditing(null);
    } else {
      await addTransaction(data);
    }
    loadData();
  };

  const handleDelete = async (id) => {
    await deleteTransaction(id);
    loadData();
  };

  return (
    <>
      <Navbar />
      <div className="w-full flex justify-center items-center">
        <div className="w-full md:w-8/12 md:mt-10 md:mb-10 bg-white md:border-2 md:rounded-lg md:shadow-xl">
          <Box p={4}>
            <Typography variant="h4" gutterBottom>
              Transaksi Pembelian Paket
            </Typography>

            <TransactionForm
              customers={customers}
              packages={packages}
              onSubmit={handleSubmit}
              initialData={editing}
              onCancel={() => setEditing(null)}
            />

            <Box mt={4}>
              <TransactionTable
                transactions={transactions}
                customers={customers}
                onEdit={(trx) => setEditing(trx)}
                onDelete={handleDelete}
              />
            </Box>
          </Box>
        </div>
      </div>
    </>
  );
}
