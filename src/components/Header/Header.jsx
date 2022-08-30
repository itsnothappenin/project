import './Header.css'
import logo from './logo.png'
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
                <img src={logo} />
                <div className='navbar'>
                    <a href='#'>HOME</a>
                    <a href='#'>EVENTS</a>
                    <a href='#'>SHOP</a>
                    <a href='#'>NEWS</a>
                    <a href='#'>SHORTCODES</a>
                    <a href='#'>HOW IT WORK?</a>
                </div>
            </div>
        </>
    )
}



export default Header;