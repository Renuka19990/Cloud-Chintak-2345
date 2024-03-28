import React, { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const isLoggedIn = useSelector((store: any) => store.auth.isLoggedIn);

  return isLoggedIn ? <>{children}</> : <Navigate to="/loginPage" />;
};

export default PrivateRoute;
