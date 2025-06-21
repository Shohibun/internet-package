import { TextField, Button, Box } from "@mui/material"; //Untuk input layout
import React, { useEffect, useState } from "react";

export default function CustomerForm({ onSubmit, initialData = {}, onCancel }) {
  const [form, setForm] = useState({ name: "", phone: "", email: "" }); //menyimpan nilai input dari form || Diset kosong, lalu bisa diubah jika ada data dari initialData

  useEffect(() => {
    if (initialData) setForm(initialData); //Jika initialData berubah, maka nilai form akan diisi dengan data tersebut
  }, [initialData]);

  const handleChange = (element) => {
    setForm({ ...form, [element.target.name]: element.target.value }); //Akan mengupdate state form berdasarkan nama field
  };

  const handleSubmit = (element) => {
    element.preventDefault(); //Mencegah reload halaman saat form disubmit
    onSubmit(form); //Memanggil fungsi onSubmit dari parent <LayoutCustomer />
    setForm({ name: "", phone: "", email: "" }); //Setelah disubmit, reset form dikosongkan kembali
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      <TextField
        label="Name"
        name="name"
        fullWidth
        margin="normal"
        value={form.name}
        onChange={handleChange}
      />
      <TextField
        label="Telephone"
        name="phone"
        fullWidth
        margin="normal"
        value={form.phone}
        onChange={handleChange}
      />
      <TextField
        label="Email"
        name="email"
        fullWidth
        margin="normal"
        value={form.email}
        onChange={handleChange}
      />
      <Button type="submit" variant="contained" sx={{ mt: 2, mr: 2 }}>
        Simpan
      </Button>
      {onCancel && (
        <Button onClick={onCancel} variant="outlined" sx={{ mt: 2 }}>
          Batal
        </Button>
      )}
    </Box>
  );
}
