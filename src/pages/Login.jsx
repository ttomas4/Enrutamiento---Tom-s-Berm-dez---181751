import { useLocation, useNavigate } from "react-router-dom";

function Login({ setIsLogged }) {
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const iniciarSesion = () => {
    setIsLogged(true);
    navigate(from, { replace: true });
  };

  return (
    <div className="card">
      <h1>Login</h1>

      <p>Debés iniciar sesión para acceder al perfil.</p>

      <button className="boton" onClick={iniciarSesion}>
        Iniciar sesión
      </button>
    </div>
  );
}

export default Login;