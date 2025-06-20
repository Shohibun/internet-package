import React from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";

export default function TransactionTable({
  transactions,
  customers,
  onEdit,
  onDelete,
}) {
  const getCustomerName = (id) =>
    customers.find((c) => c.id === id)?.name || "-";

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Customer</TableCell>
          <TableCell>Paket</TableCell>
          <TableCell>Harga</TableCell>
          <TableCell>Aksi</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {transactions.map((trx) => (
          <TableRow key={trx.id}>
            <TableCell>{getCustomerName(trx.customerId)}</TableCell>
            <TableCell>{trx.package}</TableCell>
            <TableCell>Rp{trx.price}</TableCell>
            <TableCell>
              <IconButton onClick={() => onEdit(trx)}>
                <Edit />
              </IconButton>
              <IconButton onClick={() => onDelete(trx.id)}>
                <Delete />
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
