import React from 'react';
import Navigation from './Components/nav';
import CompletLogo from './img/icon-above-font.svg';

const Connexion = () => {
    return (
        <div className="connexion">

            <Navigation />


            <form className="connexion__form">
                <input type="text" placeholder="Email" className="connexion__form--email"></input>
                <input type="text" placeholder="Mot de passe" className="connexion__form--mdp"></input>
            </form>

            <div className="connexion--error"></div>

            <button className="connexion--button">C'est parti !</button>

        </div>
    );

}

export default Connexion;