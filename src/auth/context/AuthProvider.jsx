import { useReducer } from "react";
import { types } from "../types/types";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";

/* const initialState = {
  logged: false,
}; */

const init = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return {
    logged: !!user, //si user existe, será true; si no existe, false
    user: user,
  };
};

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, {}, init); //init se usaría aquí para el localStorage
  // cuando incluimos init, ya no hace falta la constante initialState,
  // la misma función init se encargará de inicializar esas propiedades (logged: false y user: null si no hay nada en el localStorage)

  const login = (name = "") => {
    const user = {
      id: "ABC",
      name,
    };

    const action = {
      type: types.login,
      payload: user,
    };

    localStorage.setItem("user", JSON.stringify(user));

    dispatch(action);
  };

  const logout = () => {
    localStorage.removeItem("user");
    const action = {
      type: types.logout,
    };

    dispatch(action);
  };

  return (
    <AuthContext.Provider value={{ ...authState, login: login, logout }}>
      {/* login es una función; si pongo authState, envío un objeto; con ...authState envío todas las propiedades */}
      {children}
    </AuthContext.Provider>
  );
};
