import React from "react";
import { Outlet, Link } from 'react-router-dom'

const Navbars = () => {
    return (
        <>
            <nav className="navbar">
                <div>
                    <Link>QCC</Link>
                </div>
                <div className="btngroup">
                    <button><Link to="/">Home</Link></button>
                    <button><Link to="/about">About us</Link></button>
                    <button><Link to="/contact">Contact us</Link></button>
                </div>
            </nav>
        </>
    )
}

export default Navbars