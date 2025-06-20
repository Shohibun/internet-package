import { TextField, Button, Box } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function CustomerForm({ onSubmit, initialData = {}, onCancel }) {
  const [form, setForm] = useState({ name: "", phone: "", email: "" });

  useEffect(() => {
    if (initialData) setForm(initialData);
  }, [initialData]);

  const handleChange = (element) => {
    setForm({ ...form, [element.target.name]: element.target.value });
  };

  const handleSubmit = (element) => {
    element.preventDefault();
    onSubmit(form);
    setForm({ name: "", phone: "", email: "" });
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
