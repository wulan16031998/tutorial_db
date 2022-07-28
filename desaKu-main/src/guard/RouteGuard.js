import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth'
// s

const RouteGuard = ({ children }) => {
    const { warga} = useAuth();
    if (!warga) {
        //warga is not authenticate
        return <Navigate to="/login" />
    }
    // try {
    //     const valid = Jwt.verify(warga.token, jwtConfig.secret);
    //     if (valid) {
    //         return children
    //     }
    // } catch (error) {
    //     return <Navigate to="/login" />
    // }
};

export default RouteGuard;