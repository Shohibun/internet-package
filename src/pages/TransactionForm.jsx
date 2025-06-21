import React from "react";
import {
  TextField,
  Button,
  MenuItem,
  Box,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import { useState, useEffect } from "react";

export default function TransactionForm({
  customers,
  packages,
  onSubmit,
  initialData = {}, //Data diawal jika sedang diedit
  onCancel,
}) {
  const [form, setForm] = useState({
    customerId: "",
    package: "",
    price: 0,
  }); //Menyimpan nilai input dari form || Diset kosong, lalu bisa diubah jika ada data dari initialData

  useEffect(() => {
    if (initialData) setForm(initialData); //Mengedit state form ketika initialData berubah
  }, [initialData]);

  useEffect(() => {
    //Menyesuaikan harga secara otomatis berdasarkan data packages, setiap nama paket berubah
    const selected = packages.find((p) => p.name === form.package);
    setForm((f) => ({ ...f, price: selected?.price || 0 }));
  }, [form.package, packages]);

  const handleChange = (
    e //Mengubah nilai form saat user memilih input
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault(); //Mencegah reload
    onSubmit(form); //Memanggil fungsi onSubmit dari parent
    setForm({ customerId: "", package: "", price: 0 }); //Mengosongkan form
  };

  return (
    <Box component="form" onSubmit={handleSubmit} mt={2}>
      <FormControl fullWidth margin="normal">
        <InputLabel>Customer</InputLabel>
        <Select
          name="customerId"
          value={form.customerId}
          onChange={handleChange}
          label="Customer"
        >
          {customers.map((c) => (
            <MenuItem key={c.id} value={c.id}>
              {c.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl fullWidth margin="normal">
        <InputLabel>Paket</InputLabel>
        <Select
          name="package"
          value={form.package}
          onChange={handleChange}
          label="Paket"
        >
          {packages.map((p, i) => (
            <MenuItem key={i} value={p.name}>
              {p.name} - Rp{p.price}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <TextField
        fullWidth
        label="Harga"
        name="price"
        value={form.price}
        margin="normal"
        InputProps={{ readOnly: true }}
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
