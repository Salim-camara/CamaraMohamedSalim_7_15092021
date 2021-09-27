import React from "react";
import Navigation from "../Components/nav";
import Pdp from "../../img/lama.png"

const Modify = () => {

    return (
        <div className="modif">

            <Navigation />

            <form className="modif__form">

                {/* Nom */}
                <div className="nom">
                    <h2>Nom, Prénom</h2>
                    <input type="text" className="text text--prenom" placeholder="Prénom"></input>
                    <input type="text" className="text" placeholder="Nom"></input>
                </div>

                {/* Bio */}
                <div className="bio">
                    <h2>Biographie</h2>
                    <textarea className="textarea"></textarea>
                </div>

                {/* Photo de profil */}
                <div className="pdp">
                    <h2>Photo de profil</h2>
                    <img src={ Pdp } className="pdp--img" />
                    <div className="pdp__container">
                        <button className="pdp--modify">Modifier</button>
                        <button className="pdp--delete">Supprimer</button>
                    </div>
                </div>

                {/* Sexe et date de naissance */}
                <div className="birth">
                    <h2>Date de naissance</h2>
                    
                    <input type="date" className="text"></input>

                    <div className="sexe__right">
                        <p>Sexe :</p>
                        {/* garçon */}
                        <div className="sexe__m sexe__all">
                            <label value="m" className="sexe--label">M</label>
                            <input type="radio" value="m" className="sexe--input" name="radiovalue"></input>
                        </div>
                            {/* fille */}
                        <div className="sexe__f sexe__all">
                            <label value="f" className="sexe--label">F</label>
                            <input type="radio" value="f" className="sexe--input" name="radiovalue"></input>
                        </div>
                    </div>
                </div>
                
                {/* Bouton de confirmation */}
                <div className="button__container">
                    <button type="submit" className="validation">Valider</button>
                </div>

            </form>


        </div>
    )
}

export default Modify;