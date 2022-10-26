import { authReducer, types } from "../../../auth";

describe("Pruebas en el authReducer.js", () => {
  // LOS TESTS DE FERNANDO
  test("Debe retornar el estado por defecto", () => {
    const state = authReducer({ logged: false }, {});
    expect(state).toEqual({ logged: false });
  });

  test("Debe (login) llamar el login y establecer el user...", () => {
    const action = {
      type: types.login,
      payload: {
        name: "Juan",
        id: "123",
      },
    };
    const state = authReducer({ logged: false }, action);
    expect(state).toEqual({ logged: true, user: action.payload });
  });

  test("Debe (logout) borrar el name del usuario y logged en false", () => {
    const state = {
      logged: true,
      user: {
        name: "Juan",
        id: "123",
      },
    };
    const action = {
      type: types.logout,
    };
    const newState = authReducer(state, action);
    expect(newState).toEqual({ logged: false });
  });

  // MIS TESTS
  test("Debe devolver un objeto vacío si no se le pasa ningún valor", () => {
    const expectedValue = {};
    const returnedValue = authReducer();
    expect(returnedValue).toEqual(expectedValue);
  });

  test("Debe devolver un objeto vacío si solo se le pasa un objeto vacío en el estado", () => {
    const initialState = {};
    const expectedValue = {};
    const returnedValue = authReducer(initialState);
    expect(returnedValue).toEqual(expectedValue);
  });

  test("Debe devolver un objeto vacío si se le pasa un objeto vacío de estado y otro de action", () => {
    const initialState = {};
    const emptyAction = {};
    const expectedValue = {};
    const returnedValue = authReducer(initialState, emptyAction);
    expect(returnedValue).toEqual(expectedValue);
  });

  test("Debe devolver el estado inicial si no hay action", () => {
    const initialState = { logged: true };
    const expectedValue = { logged: true };
    const returnedValue = authReducer(initialState);
    expect(returnedValue).toEqual(expectedValue);
  });

  test("Debe devolver el estado con una propiedad logged a false", () => {
    const user = {
      id: "ABC",
      name: "Fernando",
    };
    const action = {
      type: types.logout,
      payload: user,
    };

    const initialState = { logged: true, user };
    const expectedValue = { logged: false };

    const returnedValue = authReducer(initialState, action);
    expect(returnedValue).toEqual(expectedValue);
  });

  test("Debe devolver el estado con el usuario y la propiedad logged a true", () => {
    const user = {
      id: "ABC",
      name: "Fernando",
    };
    const action = {
      type: types.login,
      payload: user,
    };

    const initialState = { logged: false };
    const expectedValue = {
      logged: true,
      user: { id: "ABC", name: "Fernando" },
    };

    const returnedValue = authReducer(initialState, action);
    expect(returnedValue).toEqual(expectedValue);
  });
});
