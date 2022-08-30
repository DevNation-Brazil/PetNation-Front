import { AiOutlineHome, AiOutlineForm } from "react-icons/ai";
import { IoImagesOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import logo from "../../assets/logoPetNation.png"
import "./LandingHeader.css"

function LandingHeader() {
    return (
        <div className="landingHeader">
            <img src={logo} alt="Logo PetNation" className="logoLanging"/>

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
        </div>
    );
}

export default LandingHeader;