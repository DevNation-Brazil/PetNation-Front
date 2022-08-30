import Header from "../../compoents/Header/Header"
import Login from "../../compoents/Login/Login"
import NavMenu from "../../compoents/NavMenu/NavMenu"
import { useContext } from "react";
import { AuthContext } from "../../contexts/Auto/AuthContext";
import UserPage from "../../compoents/User/UserPage";
import "./PaginaLogin.css"
import TituloPadras from "../../compoents/TituloPadras/TituloPadras";

export const PaginaLogin = () => {
    const auth = useContext(AuthContext);

    return (
        <div>
            <NavMenu />
            <Header />


            <div className="changingArea">
                
                {auth.user ? <UserPage /> : <Login />}
            </div>
        </div>
    )
}