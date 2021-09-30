import React from "react";
import Logo from "../../img/icon-left-font-monochrome-black.svg";
import { NavLink } from 'react-router-dom';

const Navigation = () => { 

    return(
        <div className="nav_-_home">
            <img src={ Logo } className="nav_-_home--logo" />
            <div className="nav_-_home__container">
                <i class="fas fa-home nav_-_home__container--icon"></i>
                <i class="fas fa-plus-circle nav_-_home__container--icon"></i>
                <i class="fas fa-search nav_-_home__container--icon"></i>
                <i class="fas fa-user-cog nav_-_home__container--icon"></i>
            </div>
        </div>
        
    )
}

export default Navigation;