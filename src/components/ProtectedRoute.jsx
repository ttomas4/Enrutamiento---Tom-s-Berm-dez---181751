import { Navigate, useLocation } from "react-router-dom";

function ProtectedRoute({ isLogged, children }) {
  const location = useLocation();

  if (!isLogged) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export default ProtectedRoute;