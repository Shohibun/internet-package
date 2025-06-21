import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import LayoutHome from "./layouts/Home";
import LayoutCustomer from "./layouts/Customer";
import LayoutTransaction from "./layouts/Transaction";
import Protected from "./components/Protected"; //Berfungsi untuk proteksi halaman [Diharuskan login dulu]
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          element={
            <Protected>
              <LayoutHome />
            </Protected>
          }
        />
        <Route
          path="/customer"
          element={
            <Protected>
              <LayoutCustomer />
            </Protected>
          }
        />
        <Route
          path="/transaction"
          element={
            <Protected>
              <LayoutTransaction />
            </Protected>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
