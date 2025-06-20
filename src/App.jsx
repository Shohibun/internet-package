import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import LayoutHome from "./layouts/Home";
import LayoutCustomer from "./layouts/Customer";
import LayoutTransaction from "./layouts/Transaction";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<LayoutHome />} />
        <Route path="/customer" element={<LayoutCustomer />} />
        <Route path="/transaction" element={<LayoutTransaction />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
