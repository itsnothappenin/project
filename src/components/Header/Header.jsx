import './Header.css'
import logo from './logo.png'
import user from './user.svg'
import lupa from './lupa.svg'
import heart from './heart.svg'
import cart from './cart.svg'

import { Routes, Route, Link } from "react-router-dom";



function Header() {
    return (
        <>
            {/* <Routes>
                <div className='menu'>
                    <nav>
                        <img src={logo} />
                        <ul className='navbar'>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/users">Users</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </Routes> */}


            <div className='menu'>
                <img src={logo} className="logo" />
                <div className='navbar'>
                    <Link to='/'>HOME</Link>
                    <Link to='/events'>EVENTS</Link>
                    <Link to='/news'>NEWS</Link>
                    <button><img src={lupa} alt="" /></button>
                    <Link to="/favorites"><img src={heart} alt="" /></Link>
                    <Link to="/cart"><img src={cart} alt="" /></Link>
                    <Link to="/login"><img src={user} alt="" /></Link> 
                    {/* burda loginin altinda shey achilmalidi */}


                </div>
            </div>
        </>
    )
}



export default Header;