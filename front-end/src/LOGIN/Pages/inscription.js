import React, { useEffect, useState } from 'react';
import Navigation from '../Components/nav';
import Login from '../Components/login';
import Axios from 'axios';

const Inscription = () => {

    // Variables des inputs
    const [prenom, setPrenom] = useState('');
    const [nom, setNom] = useState('');
    const [date, setDate] = useState('');
    const [radio, setRadio] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Mise en place d'axios
    const url = 'http://localhost:3001/inscription';

    function handleSubmit(e) {
        // Prenvent pour stoper le rechargement de la page
        e.preventDefault();
        Axios.post(url,{
            name: nom,
            firstname: prenom,
            birth: date,
            sexe: radio,
            email: email,
            password: password
            })
            .then(() => console.log('ça marche'))
            .catch((err) => err + 'ça marche pas');
    }
    
    

    return (
        <div className="inscription">
            
            <Navigation />
            
            <div className="info">
                <p className="info--text">Qui êtes-vous ?</p>

                <form className="form" onSubmit={handleSubmit}>
                    {/* bloc information */}
                    <input type="text" placeholder="Nom" className="form--nom" value={ nom } onChange={ (e) => setNom(e.target.value) }></input>
                    <input type="text" placeholder="Prenom" className="form--nom" value={ prenom } onChange={ (e) => setPrenom(e.target.value) }></input>
                    
                

                    <div className="form__birth">
                            <p className="form__birth--text">Date de naissance :</p>
                            <input type="date" className="form__birth--date" value={ date } onChange={ (e) => setDate(e.target.value) }></input>
                    </div>

                    <div className="sexe">
                        <p className="sexe__left">Sexe :</p>
                        <div className="sexe__right">
                            {/* garçon */}
                            <div className="sexe__m sexe__all">
                                <label value="m" className="sexe--label">M</label>
                                <input type="radio" value="m" className="sexe--input" name="radiovalue" onChange={ (e) => setRadio(e.target.value) }></input>
                            </div>
                                {/* fille */}
                            <div className="sexe__f sexe__all">
                                <label value="f" className="sexe--label">F</label>
                                <input type="radio" value="f" className="sexe--input" name="radiovalue" onChange={ (e) => setRadio(e.target.value) }></input>
                            </div>
                        </div>
                    </div>

                    {/* bloc compte */}
                    <div className="compte">
                        <p className="compte--texte">Votre compte</p>
                    </div>

                    <input type="text" placeholder="Email" className="form--input" value={ email } onChange={ (e) => setEmail(e.target.value) }></input>
                    <input type="text" placeholder="Mot de passe" className="form--input" value={ password } onChange={ (e) => setPassword(e.target.value) }></input>

                    <div className="connexion--error"></div>

                    <button className="button" type="submit">Let's go</button>
                </form>
            </div>
        </div>
    )
}
export default Inscription;