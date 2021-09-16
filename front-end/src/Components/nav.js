import React from 'react';
import { NavLink } from 'react-router-dom';


const Navigation = () => {
    return (
        <div className="nav">
            <NavLink exact to="/" className="nav--insc"> Inscription </NavLink>
            <NavLink exact to="/" className="nav--conn"> Connexion </NavLink>
        </div>
    );
}

export default Navigation;