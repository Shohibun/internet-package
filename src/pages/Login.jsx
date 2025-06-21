import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import Logo from "../assets/logo.svg";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (element) => {
    element.preventDefault();

    // Dummy login check
    if (username === "admin" && password === "admin123") {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/home");
    } else {
      alert("Login gagal.");
    }
  };

  return (
    <div className="w-screen h-screen bg-blue-600 flex items-center justify-center">
      <div className="w-4/12 bg-white p-8 rounded-lg shadow-lg">
        <div className="text-center">
          <img
            src={Logo}
            alt="Logo"
            className="w-20 h-20 border-2 mx-auto rounded-lg"
          />

          <h1 className="font-bold text-xl">Package Internet</h1>
        </div>

        <Typography variant="h6">Login</Typography>
        <Box component="form" onSubmit={handleLogin}>
          <TextField
            fullWidth
            label="Username"
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button fullWidth variant="contained" type="submit" className="mt-2">
            Login
          </Button>
        </Box>
      </div>
    </div>
  );
}
