import { useEffect, useState } from "react";
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
  const [customers, setCustomers] = useState([]); //Menyimpan data customers dari db.json
  const [editing, setEditing] = useState(null); //Menyimpan data customer yang sedang diedit [jika null berarti sedang menambahkan data baru]

  const loadData = async () => {
    const res = await getCustomers(); //Melakukan request ke db.json/customers
    setCustomers(res.data); //Menyimpang hasil request ke state customers
  };

  useEffect(() => {
    loadData(); //Memuat data data dari db.json/customers, ketika pertama kali dirender
  }, []); //Memastikan array [] dijalankan sekali

  const handleSubmit = async (data) => {
    if (editing) {
      //Diproses ketika sedang mengedit
      await updateCustomer(editing.id, data);
      setEditing(null);
    } else {
      //Diproses ketika menambahkan data baru
      await addCustomer(data);
    }
    loadData(); //Setelah selesai, data dimuat ulang dari db.json/customers agar terupdate
  };

  const handleDelete = async (id) => {
    await deleteCustomer(id); //Menghapus data customer berdasrkan id
    loadData(); //Memuat ulang data agar terupdate
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
