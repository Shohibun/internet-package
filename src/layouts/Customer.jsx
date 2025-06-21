import React, { useEffect, useState } from "react";
import {
  getCustomers,
  addCustomer,
  updateCustomer,
  deleteCustomer,
} from "../services/Api";
import CustomerForm from "../pages/CustomerForm";
import CustomerTable from "../pages/CustomerTable";
import { Box, Typography } from "@mui/material";
import Navbar from "../components/Navbar";

export default function LayoutCustomer() {
  const [customers, setCustomers] = useState([]);
  const [editing, setEditing] = useState(null);

  const loadData = async () => {
    const res = await getCustomers();
    setCustomers(res.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleSubmit = async (data) => {
    if (editing) {
      await updateCustomer(editing.id, data);
      setEditing(null);
    } else {
      await addCustomer(data);
    }
    loadData();
  };

  const handleDelete = async (id) => {
    await deleteCustomer(id);
    loadData();
  };

  return (
    <>
      <Navbar />
      <div className="w-full flex justify-center items-center">
        <div className="w-full md:w-8/12 md:mt-10 md:mb-10 bg-white md:border-2 md:rounded-lg md:shadow-xl">
          <Box p={4}>
            <Typography variant="h4" gutterBottom>
              Customer Management
            </Typography>

            <CustomerForm
              onSubmit={handleSubmit}
              initialData={editing}
              onCancel={() => setEditing(null)}
            />

            <Box mt={4}>
              <CustomerTable
                customers={customers}
                onEdit={(cust) => setEditing(cust)}
                onDelete={handleDelete}
              />
            </Box>
          </Box>
        </div>
      </div>
    </>
  );
}
