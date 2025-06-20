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
    <div className="w-screen h-screen overflow-hidden flex justify-center items-center bg-blue-600">
      <div className="w-8/12 bg-white rounded-lg shadow-lg">
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
  );
}
