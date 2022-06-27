import React from "react";
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluids">
                    <ul className=" p-3 d-flex gap-5" style={{ listStyle: 'none' }}>
                        <Link to="/" className="nav-link"><li>Menu</li></Link>
                        <Link to="/About" className="nav-link"><li>About</li></Link>
                        <Link to="/Home" className="nav-link"><li>Home</li></Link>
                        <Link to="/Login" className="nav-link"><li>Login</li></Link>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
export default Navbar