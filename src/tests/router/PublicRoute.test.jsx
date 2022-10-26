import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from "../../auth";
import { PublicRoute } from "../../router/PublicRoute";

describe("Pruebas en el <PublicRoute></PublicRoute>", () => {
  test("Debe mostrar el children si no está autenticado", () => {
    const contextValue = {
      logged: false,
    };

    // se pone dentro de un AuthContext porque en PublicRoute uso un useContext(AuthContext)
    // contextValue es el contexto que le proporciono a la prueba
    render(
      <AuthContext.Provider value={contextValue}>
        <PublicRoute>
          <h1>Ruta pública</h1>
        </PublicRoute>
      </AuthContext.Provider>
    );
    //screen.debug();
    expect(screen.getByText("Ruta pública")).toBeTruthy();
  });

  test("Debe navegar si está autenticado", () => {
    const contextValue = {
      logged: true,
      user: { id: "ABC123", name: "Strider" },
    };

    // si estoy en /login y el contexto es un usuario loggeado, irá a marvel
    // tal y como está en PubliRoute.jsx
    // Todo esto se pone porque en el PublicRoute.jsx hay un navigate si está loggeado
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/login"]}>
          <Routes>
            <Route
              path="login"
              element={
                <PublicRoute>
                  <h1>Ruta pública</h1>
                </PublicRoute>
              }
            />
            <Route path="marvel" element={<h1>Página Marvel</h1>} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );
    screen.debug();
    expect(screen.getByText("Página Marvel")).toBeTruthy();
  });
});
