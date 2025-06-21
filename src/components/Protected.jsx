import { Navigate } from "react-router-dom"; //Digunakan untuk redirect halaman

//Menerima props.children (Komponen yang ingin dilindungi [home, customer, transaction])
export default function Protected({ children }) {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true"; //Mengecek apakah user sudah login
  return isLoggedIn ? children : <Navigate to={"/"} />; //Jika isLoggedIn === true, render children || isloggedIn !== true, redirect ke halaman login
}
