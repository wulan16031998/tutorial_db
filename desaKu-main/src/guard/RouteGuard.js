import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useJwt } from "react-jwt";
import jwtConfig from "../config/jwt.config";

const RouteGuard = ({ children }) => {
  const { warga, logout } = useAuth();
  const { decodedToken, isExpired } = useJwt(warga?.token);

  if (!warga) {
    //warga is not authenticate
    return <Navigate to="/login" />;
  }
  
  try {
    if (!isExpired) {
      return children;
    }
  } catch (error) {
    return <Navigate to="/login" />;
  }
};

export default RouteGuard;
