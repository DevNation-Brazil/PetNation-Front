import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./Header.css"
import logo from "../../assets/logoPetNation.png"
import { useContext } from "react";
import { AuthContext } from "../../contexts/Auto/AuthContext";
import AvatarMenu from "../AvatarMenu/AvatarMenu";




function Header() {
    const auth = useContext(AuthContext);

    return (
        <div className="headerWrapper">

            <div className="divTroll"></div>

            <img className="logo" src={logo} alt="Logo PetNation" />

            
            {auth.user ? <AvatarMenu nomeDaClasse="loginHeaderAvatar"/> : <button className="loginHeader">
                                        <Link to='/login'>
                                            <span>Fazer login</span> <AiOutlineUser className='icon' />
                                        </Link>
                                        </button>
            }
            
        </div>
    );
}

export default Header;