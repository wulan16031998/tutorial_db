import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";


const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const {warga, setWarga} = useLocalStorage("warga", null);
    const navigate = useNavigate();

    //call this function when you want to athenticate the warga
    const login = async (data) => {
        setWarga(data);
        navigate('/');
    };

    //call this function to sign out logged in user
    const logout = () => {
        setWarga(null);
        navigate("/login", {replace:true});
    };

    const value = useMemo ( () => ({
        warga,
        login,
        logout
    }),
        [warga]
    );
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
};
 const useAuth = () => {
    return useContext(AuthContext);
}
export default useAuth;