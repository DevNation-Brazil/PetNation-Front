import Header from "../../compoents/Header/Header"
import NavMenu from "../../compoents/NavMenu/NavMenu"
import { useContext } from "react";
import { AuthContext } from "../../contexts/Auto/AuthContext";
import UserPage from "../../compoents/User/UserPage";
import CriarConta from "../../compoents/Login/CriarConta";


export const PaginaCriarConta = () => {
    const auth = useContext(AuthContext);

    return (
        <div>
            <NavMenu />
            <Header />


            <div className="changingArea">
                
                {auth.user ? <UserPage /> : <CriarConta />}
            </div>
        </div>
    )
}