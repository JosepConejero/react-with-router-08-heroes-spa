import { types } from "../types/types";

/* const initialState = {
  logged: false,
  // user: "Fernando" 
};

export const authReducer = (state = initialState, action) => { */
export const authReducer = (state = {}, action = {}) => {
  switch (action.type) {
    case types.login:
      return {
        ...state, // por si algún día añadimos más propiedades
        logged: true,
        user: action.payload,
      };

    case types.logout:
      return {
        logged: false,
        //user: null, (o puedo no poner esta propiedad)
      };

    default:
      return state;
  }
};
