import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth'

const RouteGuard = ({ children }) => {
    const { warga} = useAuth();
    if (!warga) {
        //warga is not authenticate
        return <Navigate to="/login" />
    }
    return children;
};

export default RouteGuard;