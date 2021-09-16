import React from 'react';
import { NavLink } from 'react-router-dom';
import CompletLogo from '../img/icon-above-font.svg';


const Navigation = () => {
    return (
        <div className="nav">
            <div className="navbloc">
                <NavLink exact to="/" className="navbloc--insc" activeClassName="nav-active"> Inscription </NavLink>
                <NavLink exact to="/hello" className="navbloc--conn" activeClassName="nav-active"> Connexion </NavLink>
            </div>
            <img src={CompletLogo} className="nav--img"/>
        </div>
    );
}

export default Navigation;