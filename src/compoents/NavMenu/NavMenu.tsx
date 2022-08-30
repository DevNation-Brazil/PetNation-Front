import { useState } from 'react'
import { IoMdClose, IoMdMenu } from 'react-icons/io'
import { IoImagesOutline } from "react-icons/io5";
import { AiOutlineForm, AiOutlineHome, AiOutlineUser } from "react-icons/ai";
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
                        
                        <Link to='/home'><AiOutlineHome className='icon' />
                       <span>Início</span>
                       </Link>
                    </li>

                    <li>
                        
                        <Link to='/login'><AiOutlineUser className='icon' />
                        <span>Login</span>
                       </Link>
                    </li>


                    <li>
                        
                        <Link to='/colecao'><IoImagesOutline className='icon' />
                        <span>Coleção</span>
                       </Link>
                    </li>



                    <li>
                        
                        <Link to='/cadastro'><AiOutlineForm className='icon' />
                        <span>Cadastro</span>
                       </Link>
                    </li>



                    


                </ul>
            </nav>

        </div>
    )
}

export default NavMenu