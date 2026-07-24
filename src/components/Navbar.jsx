import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Mi Sitio</h2>

      <div className="links">
        <Link to="/">Inicio</Link>

        <Link to="/nosotros">
          Nosotros
        </Link>

        <Link to="/contacto">
          Contacto
        </Link>

        <Link to="/producto/25">
          Producto
        </Link>

        <Link to="/buscar?nombre=Agenda">
          Buscar
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;