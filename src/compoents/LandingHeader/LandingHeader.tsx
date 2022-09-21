import { AiOutlineHome, AiOutlineForm, AiOutlineUser } from "react-icons/ai";
import { IoImagesOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import logo from "../../assets/logoPetNation.png"
import "./LandingHeader.css"

function LandingHeader() {
    return (
        <div className="landingHeader">


            <Link to='/login'><AiOutlineUser className='iconeListaLandingHeader' />
                <span>Login</span>
            </Link>


            <ul className="listaLandingHeader">


                <li className='itemListaLandingHeader'>

                    <Link to='/home'><AiOutlineHome className='iconeListaLandingHeader' />
                        <span>Início</span>
                    </Link>
                </li>


                <li className='itemListaLandingHeader'>

                    <Link to='/colecao'><IoImagesOutline className='iconeListaLandingHeader' />
                        <span>Coleção</span>
                    </Link>
                </li>



                <li className='itemListaLandingHeader'>

                    <Link to='/cadastro'><AiOutlineForm className='iconeListaLandingHeader' />
                        <span>Cadastro</span>
                    </Link>
                </li>

            </ul>


            <img src={logo} alt="Logo PetNation" className="logoLanging" />
        </div>
    );
}

export default LandingHeader;