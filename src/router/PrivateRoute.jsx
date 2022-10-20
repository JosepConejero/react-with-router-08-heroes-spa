import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth";

export const PrivateRoute = ({ children }) => {
  const { logged } = useContext(AuthContext);
  const { pathname, search } = useLocation();
  // const location = useLocation();
  // console.log( location ); // aquí se ve lo que devuelve useLocation

  const lastPath = pathname + search;
  localStorage.setItem("lastPath", lastPath);
  console.log("re-render");

  return logged ? children : <Navigate to="/login" />;
};
