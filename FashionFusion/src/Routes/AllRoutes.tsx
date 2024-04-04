import { Route, Routes } from "react-router-dom";
import LoginPage from "../Pages/LoginPage";
import AdminDashboard from "../Pages/AdminDashboard";
import Error from "../Pages/Error";

// import PrivateRoute from "./PrivateRoute";
import Home from "../Pages/Home";
import SingleMen from "../Pages/SingleMen";
import AdminUsers from "../Pages/AdminUsers";
import AdminProducts from "../Pages/AdminProducts";
import Settings from "../Pages/Settings";
import Men from "../Pages/Men";
import SingleWomen from "../Pages/SingleWomen";
import Women from "../Pages/Women";
import AddProducts from "../Pages/AdminAddProduct";
import Kid from "../Pages/Kid";

function AllRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/loginPage" element={<LoginPage />} />

      <Route path="/adminDashboard" element={<AdminDashboard />} />
      <Route path="/adminUsers" element={<AdminUsers />} />
      <Route path="/adminProducts" element={<AdminProducts />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/men" element={<Men/>} />
      <Route path="/women" element={<Women/>} />
      <Route path="/kids" element={<Kid/>} />
      <Route path="/men/:id" element={<SingleMen />} /> 
      <Route path="/women/:id" element={<SingleWomen />} /> 
      <Route path="/addProduct" element={< AddProducts/>} />
      <Route path="/*" element={<Error />} />
      {/* <Route path='/women' element={<Women/>} /> */}
      {/* <Route path='/singleWomen/:id' element={<singleWomen/>} /> */}
      {/* <Route path='/singleMen/:id' element={<singleMen/>} /> */}
      {/* <Route path='/payment' element={<Payment/>} /> */}
      {/* <Route path='/cart' element={<Cart/>} /> */}
      {/* <Route path='/wishlist' element={<WishList/>} /> */}
    </Routes>
  );
}

export default AllRoutes;
