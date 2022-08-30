import './Header.css'
import logo from './logo.png'

function Header () {
    return (
    <div className='menu'>
        <img src={logo}/>
        <div className='navbar'>
            <a href='#'>HOME</a>
            <a href='#'>EVENTS</a>
            <a href='#'>SHOP</a>
            <a href='#'>NEWS</a>
            <a href='#'>SHORTCODES</a>
            <a href='#'>HOW IT WORK?</a>
        </div>
    </div>
    )
}

export default Header;