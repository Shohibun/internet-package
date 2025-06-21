import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Customer from "../assets/customer.jpg";
import Transaction from "../assets/transaction.jpg";
import { CardActionArea } from "@mui/material";
import axios from "axios";

export default function Home() {
  const [totalCustomers, setTotalCustomers] = useState(0);
  const [totalTransactions, setTotalTransactions] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:3001/customers")
      .then((res) => {
        setTotalCustomers(res.data.length);
      })
      .catch((err) => {
        console.error("Failed get data:", err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3001/transactions")
      .then((res) => {
        setTotalTransactions(res.data.length);
      })
      .catch((err) => {
        console.error("Failed get data:", err);
      });
  }, []);

  return (
    <div className="w-full flex justify-center items-center mt-20">
      <div className="w-8/12 flex justify-center items-center">
        <div className="">
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-1">
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={Customer}
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Customer
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    Customers who have purchased an internet package are
                    customers who have completed the transaction process of
                    purchasing data/internet services from the service provider.
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ color: "text.secondary", fontWeight: "bold" }}
                  >
                    Total Customer: {totalCustomers}
                  </Typography>
                </CardContent>
              </Card>
            </div>

            <div className="col-span-1">
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={Transaction}
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Transaction
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    The transaction of purchasing an internet package by the
                    customer is the process in which the customer makes a
                    payment to obtain internet services from the service
                    provider. Antarctica
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ color: "text.secondary", fontWeight: "bold" }}
                  >
                    Total Transaction: {totalTransactions}
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
