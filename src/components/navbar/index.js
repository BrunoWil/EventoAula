import React from 'react';
import './navbar.css';
import {Link, Redirect} from 'react-router-dom';

function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg ">
            <span className="navbar-brand text-white font-weight-bold">Eventos</span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="btn-menu" >&#7363;&#7363;&#7363;</span>
                </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
            <li className="nav-item "><Link className="nav-link" to="/">Home </Link></li>
            <li className="nav-item "><Link className="nav-link" to="/novousuario">Cadastrar </Link></li>
            <li className="nav-item "><Link className="nav-link" to="/login">Login </Link></li>

        </ul>
        </div>
        </nav>
    )
}

export default Navbar;