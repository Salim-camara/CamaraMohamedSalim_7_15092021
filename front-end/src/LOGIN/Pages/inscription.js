import React from 'react';
import Navigation from '../Components/nav';
import Login from '../Components/login';

const Inscription = () => {
    return (
        <div className="inscription">
            
            <Navigation />
            
            {/* bloc information */}
            <div className="info">
                <p className="info--text">Qui êtes-vous ?</p>

                <form className="form">
                    <input type="text" placeholder="Nom" className="form--nom"></input>
                    <input type="text" placeholder="Prenom" className="form--nom"></input>
                </form>

                <div className="form__birth">
                        <p className="form__birth--text">Date de naissance :</p>
                        <input type="date" className="form__birth--date"></input>
                </div>

                <div className="sexe">
                    <p className="sexe__left">Sexe :</p>
                    <div className="sexe__right">
                        {/* garçon */}
                        <div className="sexe__m sexe__all">
                            <label value="m" className="sexe--label">M</label>
                            <input type="radio" value="m" className="sexe--input"></input>
                        </div>
                            {/* fille */}
                        <div className="sexe__f sexe__all">
                            <label value="f" className="sexe--label">F</label>
                            <input type="radio" value="f" className="sexe--input"></input>
                        </div>
                    </div>
                </div>


            </div>

            {/* bloc compte */}
            <div className="compte">
                <p className="compte--texte">Votre compte</p>

                <Login />



            </div>
        </div>
    )
}
export default Inscription;