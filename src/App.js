import { Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Blog from "./pages/Blog";
import ShopingCar from "./pages/ShopingCar";
import Contacts from "./pages/Contacts";
import ProductDetails from "./pages/ProductDetails";
import CheckOut from "./pages/CheckOut";
import "./App.css";
import AboutUs from "./pages/AboutUs";
import { Fragment } from "react";

function App() {
  return (
      <Fragment>
        <Routes>
          <Route path="Shoping-React-App" element={<Home />}></Route>
          <Route path="Shop" element={<Shop />}></Route>
          <Route path="Blog" element={<Blog />}></Route>
          <Route path="Contacts" element={<Contacts />}></Route>
          <Route path="Shop/ShopingCar" element={<ShopingCar />}></Route>
          <Route
            path="Shop/ProductDetails"
            element={<ProductDetails />}
          ></Route>
          <Route path="Shop/CheckOut" element={<CheckOut />}></Route>
          <Route path="AboutUs" element={<AboutUs />}></Route>
        </Routes>
      </Fragment>
  );
}

export default App;
