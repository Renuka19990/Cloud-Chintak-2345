import { useLocation } from "react-router-dom";
import "./App.css";

import Navbar from "./Components/Navbar";
import AllRoutes from "./Routes/AllRoutes";

function App() {
  const location = useLocation();
  console.log(location);
  // const isAdminRoute = location.pathname === '/adminDashboard'
  return (
    <>
      {/* {!isAdminRoute && <Navbar />} */}
      <Navbar />
      <AllRoutes />
    </>
  );
}

export default App;
