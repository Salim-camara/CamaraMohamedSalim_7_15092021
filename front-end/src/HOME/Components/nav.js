import React from "react";
import Logo from "../../img/icon-left-font-monochrome-black.svg";
import { NavLink } from 'react-router-dom';

const Navigation = () => {

    return(
        <div className="nav">
            <img src={ Logo } className="nav--logo" />
            <div className="nav__container">
                <i class="fas fa-home nav__container--icon"></i>
                <i class="fas fa-plus-circle nav__container--icon"></i>
                <i class="fas fa-search nav__container--icon"></i>
                <i class="fas fa-user-cog nav__container--icon"></i>
            </div>
        </div>
        
    )
}

export default Navigation;