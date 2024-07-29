import React, {useState} from "react";
import { Link } from 'react-router-dom' 
import './Navbar.css'

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(!click);
  return (
    <>
    <nav className="navbar">
        <div className="navbar-container">
            <Link to='/' className="navbar-logo">
            Jahiem Mcleod
            </Link>
            <div className="menu-icon" onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className="nav-item">
                    <Link to="/Home" className="nav-links" onClick={closeMenu}>
                    About Me
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/Works" className="nav-links" onClick={closeMenu}>
                    Works
                    </Link>
                </li>
                    <li className="nav-item">
                        <Link to="/SignUp" className="nav-links" onClick={closeMenu}>
                        Sign-Up
                        </Link>
                    </li>
            </ul>
        </div>
    </nav>
    </>
  )
}

export default Navbar