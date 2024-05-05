import logo from "./logo.svg";
import "./App.css";
import AppNavbar from "./components/AppNavbar";
import { Route, Routes } from "react-router-dom";
import Product from "./components/Product";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <Routes>
        <Route path="Product" element={<Product />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
