import { useParams } from "react-router-dom";

function Producto() {
  const { id } = useParams();

  return (
    <div className="card">
      <h1>Producto</h1>

      <p>El producto seleccionado tiene el siguiente ID:</p>

      <h2>{id}</h2>
    </div>
  );
}

export default Producto;