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
            <div className='menu'>
                <div className='nese'>
                    <Link to="/"className="logo"><img src={logo} /></Link>
                    <div className='navbar'>
                        <Link to='/'>HOME</Link>
                        <Link to='/events'>EVENTS</Link>
                        <Link to='/news'>NEWS</Link>
                    </div>
                </div>
                <div className='icons'>
                    <button className='seachButton'><img className='lupa' src={lupa} alt="" /></button>
                    <Link to="/favorites"><img className='heart' src={heart} alt="" /></Link>
                    <Link to="/cart"><img className='cart' src={cart} alt=""  /></Link>
                    <Link to="/login"><img className='user'src={user} alt="" /></Link> 
                    {/* burda loginin altinda shey achilmalidi */}
                </div>
            </div>
        </>
    )
}



export default Header;