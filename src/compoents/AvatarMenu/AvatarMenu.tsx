import { Avatar } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./AvatarMenu.css"
import { useContext } from "react";
import { AuthContext } from "../../contexts/Auto/AuthContext";
import { deepPurple, indigo } from "@mui/material/colors";

interface Props {
    nomeDaClasse: string;
}

function AvatarMenu({ nomeDaClasse }: Props) {
    const auth = useContext(AuthContext);
    const [isActive, setIsActive] = useState(false)

    const onClick = () => setIsActive(!isActive)

    const handleSignout = async () => {
        await auth.signout();
        window.location.href = window.location.href;
    }

    var userName = auth.user?.name
    var matches: RegExpMatchArray | null = []
    if (userName != undefined) {
        var matches = userName.match(/\b(\w)/g);
    }


    return (
        <div className={nomeDaClasse}>
            <div className='menu-container'>
                <button onClick={onClick}
                    className="menu-button">

                    <Avatar sx={{ bgcolor: indigo[300] }} >
                        {matches}
                    </Avatar>
                </button>

                <nav
                    className={`userMenu ${isActive ? "active" : "inactive"}`}>
                    <ul className='user-buton'>

                        <Avatar sx={{ width: 50, height: 50, bgcolor: indigo[900], marginTop: 1 }}>
                            {matches}
                        </Avatar>

                        <span>{auth.user?.name}</span>

                        <li className='user-buton-item'>
                            <button className="userMenuButton">
                                <Link to="/login">Página do usuário</Link>
                            </button>
                        </li>

                        <button onClick={handleSignout} className="userMenuButton userMenuButtonDown" >Sair</button>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default AvatarMenu;