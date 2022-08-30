import { useContext } from "react";
import { PaginaLogin } from "../../Paginas/PaginaLogin/PaginaLogin";
import { AuthContext } from "./AuthContext";

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
    const auth = useContext(AuthContext);

    if(!auth.user) {
        return <PaginaLogin />
    }
    
    return children;
}