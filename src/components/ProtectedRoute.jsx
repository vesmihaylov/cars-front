import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  return (localStorage.getItem("JWT_TOKEN") !== null) ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
