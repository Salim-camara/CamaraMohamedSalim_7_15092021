import React, { useState } from 'react';
import Navigation from '../Components/nav';
import Login from '../Components/login';
import Axios from 'axios';

const Inscription = () => {

    // Variables des inputs
    const [prenom, setPrenom] = useState('');
    const [nom, setNom] = useState('');
    const [date, setDate] = useState('');
    const [radio, setRadio] = useState('');
    const url = 'http://localhost:3001/inscription'
    

    // Mise en place d'axios
    
    

    return (
        <div className="inscription">
            
            <Navigation />
            
            {/* bloc information */}
            <div className="info">
                <p className="info--text">Qui êtes-vous ?</p>

                <form className="form">
                    <input type="text" placeholder="Nom" className="form--nom" value={ nom } onChange={ (e) => setNom(e.target.value) }></input>
                    <button onClick={ Axios.post(url,{
                        name: nom
                    })
    .then(() => console.log('ça marche'))
    .catch((err) => err + 'ça marche pas')}>Axios</button>
                    <input type="text" placeholder="Prenom" className="form--nom" value={ prenom } onChange={ (e) => setPrenom(e.target.value) }></input>
                </form>

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