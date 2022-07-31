import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Blog from "./pages/Blog";
import ShopingCar from "./pages/ShopingCar";
import Contacts from "./pages/Contacts";
import ProductDetails from "./pages/ProductDetails";
import CheckOut from "./pages/CheckOut";
import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Shop" element={<Shop />}></Route>
        <Route path="/Blog" element={<Blog />}></Route>
        <Route path="/Contacts" element={<Contacts />}></Route>
        <Route path="/Shop/ShopingCar" element={<ShopingCar />}></Route>
        <Route path="/Shop/ProductDetails" element={<ProductDetails />}></Route>
        <Route path="/Shop/CheckOut" element={<CheckOut />}></Route>
      </Routes>
    </div>
  );
}

export default App;
