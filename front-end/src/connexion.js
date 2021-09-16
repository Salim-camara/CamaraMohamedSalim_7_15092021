import React from 'react';
import Navigation from './Components/nav';

const Connexion = () => {
    return (
        <div className="connexion">

            <Navigation />

            <h1 className="connexion__title">Connectez-vous pour commencer</h1>

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