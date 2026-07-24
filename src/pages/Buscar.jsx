import { useSearchParams } from "react-router-dom";

function Buscar() {
  const [searchParams] = useSearchParams();

  const nombre = searchParams.get("nombre");

  return (
    <div className="card">
      <h1>Búsqueda</h1>

      {nombre ? (
        <p>
          Estás buscando: <strong>{nombre}</strong>
        </p>
      ) : (
        <p>No ingresaste ningún parámetro de búsqueda.</p>
      )}
    </div>
  );
}

export default Buscar;