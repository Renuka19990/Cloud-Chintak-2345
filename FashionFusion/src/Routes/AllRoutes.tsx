import { Route, Routes } from "react-router-dom";
import LoginPage from "../Pages/LoginPage";
import Admin from "../Pages/Admin";
import Error from "../Pages/Error";
import PrivateRoute from "./PrivateRoute";
import Home from "../Pages/Home";

function AllRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/loginPage" element={<LoginPage />} />
      <Route path="/admin" element={<PrivateRoute><Admin /></PrivateRoute>} />
      <Route path="/*" element={<Error />} />
      {/* <Route path='/women' element={<Women/>} /> */}
      {/* <Route path='/singleWomen/:id' element={<singleWomen/>} /> */}
      {/* <Route path=/'men' element={<Men/>} /> */}
      {/* <Route path='/singleMen/:id' element={<singleMen/>} /> */}
      {/* <Route path='/payment' element={<Payment/>} /> */}
      {/* <Route path='/cart' element={<Cart/>} /> */}
      {/* <Route path='/wishlist' element={<WishList/>} /> */}
    </Routes>
  );
}

export default AllRoutes;
