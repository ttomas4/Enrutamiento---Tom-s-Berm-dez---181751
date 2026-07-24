import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Inicio from "./pages/Inicio";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";
import Producto from "./pages/Producto";
import Buscar from "./pages/Buscar";
import Login from "./pages/Login";
import Perfil from "./pages/Perfil";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Inicio />} />

        <Route path="nosotros" element={<Nosotros />} />

        <Route path="contacto" element={<Contacto />} />

        <Route path="producto/:id" element={<Producto />} />

        <Route path="buscar" element={<Buscar />} />

        <Route
          path="perfil"
          element={
            <ProtectedRoute isLogged={isLogged}>
              <Perfil />
            </ProtectedRoute>
          }
        />

        <Route
          path="login"
          element={<Login setIsLogged={setIsLogged} />}
        />
      </Route>
    </Routes>
  );
}

export default App;