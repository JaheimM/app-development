import React, {useState} from "react";
import { Link } from 'react-router-dom' 
import './Navbar.css'

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);
    console.log(click);
  return (
    <>
    <nav className="navbar">
        <div className="navbar-container">
            <Link to='/' className="navbar-logo">
            Ike
            </Link>
            <div className="menu-icon" onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
                    <Link to="/" className="nav-links" onClick={closeMenu}>
                    Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/About" className="nav-links" onClick={closeMenu}>
                    About
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