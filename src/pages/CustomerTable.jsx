import React from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material"; //Icon edit dan delete

export default function CustomerTable({ customers, onEdit, onDelete }) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Nama</TableCell>
          <TableCell>Telepon</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Aksi</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {/* Melakukan perulangan data customers */}
        {customers.map((c) => (
          <TableRow key={c.id}>
            <TableCell>{c.name}</TableCell>
            <TableCell>{c.phone}</TableCell>
            <TableCell>{c.email}</TableCell>
            <TableCell>
              <IconButton onClick={() => onEdit(c)}>
                <Edit />
              </IconButton>
              <IconButton onClick={() => onDelete(c.id)}>
                <Delete />
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
