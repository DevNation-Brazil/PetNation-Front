import { useContext } from "react";
import { AuthContext } from "../../contexts/Auto/AuthContext";
import TituloPadras from "../TituloPadras/TituloPadras";
import "./UserPage.css"

function UserPage() {
    const auth = useContext(AuthContext);

    const handleSignout = async () => {
        await auth.signout();
        window.location.href = window.location.href;
    }

    return (
        <div className="userPageWrapper">

            <TituloPadras texto={`Seja bem vindo ${auth.user}`} />
            <div className="botaoSairWrapper">
                <button onClick={handleSignout} className="botaoSair">Sair</button>
            </div>
        </div>
    );
}

export default UserPage;