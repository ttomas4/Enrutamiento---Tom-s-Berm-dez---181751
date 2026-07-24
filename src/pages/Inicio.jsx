import { useNavigate } from "react-router-dom";

function Inicio() {

  const navigate = useNavigate();

  return (
    <div className="card">

      <h1>Bienvenido</h1>

      <p>
        Hice este proyecto para practicar React Router DOM.
      </p>

      <button
        className="boton"
        onClick={() => navigate("/contacto")}
      >
        Ir a Contacto
      </button>

    </div>
  );
}

export default Inicio;


