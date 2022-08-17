import { useState } from 'react'
import { IoMdClose, IoMdMenu} from 'react-icons/io'
import { AiOutlineForm, AiOutlineHome } from "react-icons/ai";
import { GoMail } from "react-icons/go";
import { Link } from 'react-router-dom'
import './NavMenu.css'

const NavMenu = () => {

    const [active, setActive] = useState(false)

    const activateNav = () => {
        setActive(!active)
    }

    return (
        <div className={active ? 'navMenu' : 'navMenu-mobile'}>

            <div className='menu-icon' onClick={activateNav}>

                {!active ? <IoMdMenu className='menu' /> : <IoMdClose className='menu' />}

            </div>

            <nav>
                <ul className={active ? 'ul-item' : 'ul-item oicon'}>


                    <li>
                        
                        <Link to='/'><AiOutlineHome className='icon' />
                       <span>Início</span>
                       </Link>
                    </li>


                    <li>
                        
                        <Link to='/cadastro'><AiOutlineForm className='icon' />
                        <span>Cadastro</span>
                       </Link>
                    </li>



                    <li>
                        
                        <Link to='/contato'><GoMail className='icon' />
                        <span>Contato</span>
                       </Link>
                    </li>


                </ul>
            </nav>

        </div>
    )
}

export default NavMenu