import React from "react";
import Logo from "../../img/icon-left-font-monochrome-black.svg";
import { NavLink } from 'react-router-dom';

const Navigation = () => { 

    return(
        <div className="nav_-_home">
            <img src={ Logo } className="nav_-_home--logo"/>
            <div className="nav_-_home__container">
                <NavLink exact to="/accueil" className="navlink_-_home" activeClassname="navlink_-_home--active">
                    <i class="fas fa-home nav_-_home__container--icon"></i>
                </NavLink>
                <NavLink exact to="/new_post" className="navlink_-_home">
                    <i class="fas fa-plus-circle nav_-_home__container--icon"></i>
                </NavLink>
                <NavLink exact to="/" className="navlink_-_home">
                    <i class="fas fa-search nav_-_home__container--icon"></i>
                </NavLink>
                <NavLink exact to="/profils" className="navlink_-_home" activeClassname="navlink_-_home--active">
                    <i class="fas fa-user-cog nav_-_home__container--icon"></i>
                </NavLink>
            </div>
        </div>
        
    )
}

export default Navigation;