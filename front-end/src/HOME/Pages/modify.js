import React, { useState, useEffect } from "react";
import Navigation from "../Components/nav";
import Axios from "axios";
import Pdp from "../../img/lama.png";

const Modify = () => {

    // variable des inputs
    const [prenom, setPrenom] = useState('');
    const [nom, setNom] = useState('');
    const [date, setDate] = useState('');
    const [radio, setRadio] = useState(null);
    const [bio, setBio] = useState('');
    const [pdpUrl, setPdpUrl] = useState('');

    let url = 'http://localhost:3001/profils';

    useEffect(() => {
        Axios.get(url)
            .then((data) => {
                const user = data.data;
                // injection de la data dans les inputs
                setPrenom(user.firstname);
                setNom(user.lastname);
                setDate(user.birth);
                setRadio(user.sexe);
                setBio(user.bio);
                // en attente de l'apprentissage de la manipulation du DOM, impossibilité de mettre la data dans les inputs
                console.log('****************************');
                console.log(radio);
            })
            .catch((err) => console.log('erreur récupération axios' + err));
    }, []);

    

    function post(e) {
        e.preventDefault();

        if(radio == null) {
            console.log('veuillez indiquer votre sexe')
        } else {

            Axios.put(url, {
                bio: bio,
                firstname: prenom,
                lastname: nom,
                sexe: radio,
                birth: date

            })
        }


    }



    return (
        <div className="modif">

            <Navigation />

            <form className="modif__form">

                {/* Nom */}
                <div className="nom">
                    <h2>Nom, Prénom</h2>
                    <input type="text" className="text text--prenom" placeholder="Prénom" value={ prenom } onChange={ (e) => setPrenom(e.target.value) }></input>
                    { prenom }
                    { radio }
                    <input type="text" className="text" placeholder="Nom" value={ nom } onChange={ (e) => setNom(e.target.value) }></input>
                </div>

                {/* Bio */}
                <div className="bio">
                    <h2>Biographie</h2>
                    <textarea className="textarea" value={ bio } onChange={ (e) => setBio(e.target.value) }></textarea>
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
                    
                    <input type="date" className="text" value={ date } onChange={ (e) => setDate(e.target.value) }></input>

                    <div className="sexe__right">
                        <p>Sexe :</p>
                        {/* garçon */}
                        <div className="sexe__m sexe__all">
                            <label value="m" className="sexe--label">M</label>
                            <input type="radio" value="m" className="sexe--input" name="radiovalue" value={ radio } onChange={ (e) => setRadio(e.target.value) }></input>
                        </div>
                            {/* fille */}
                        <div className="sexe__f sexe__all">
                            <label value="f" className="sexe--label">F</label>
                            <input type="radio" value="f" className="sexe--input" name="radiovalue" value={ radio } onChange={ (e) => setRadio(e.target.value) }></input>
                        </div>
                    </div>
                </div>
                
                {/* Bouton de confirmation */}
                <div className="button__container">
                    <button type="submit" className="validation">Valider</button>
                    <button onClick={ post } className="validation">POST tempo</button>
                </div>

            </form>


        </div>
    )
}

export default Modify;