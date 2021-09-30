import React, { useEffect, useState } from 'react';
import Navigation from '../Components/nav';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';


const Inscription = () => {

    // Variables des inputs
    const [prenom, setPrenom] = useState('');
    const [nom, setNom] = useState('');
    const [date, setDate] = useState('');
    const [radio, setRadio] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Mise en place d'axios
    const url = 'http://localhost:3001/inscription';
    const historique = useHistory();


// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ Validation des formulaire avant le POST, impossibilité d'exporté le tableau REGEX$$$$$$$$$$$$$$$$$$$
    // Mise en place react.current
    const refNom = React.useRef(null);
    const refPrenom = React.useRef(null);
    const refDate = React.useRef(null);
    const refSexe = React.useRef(null);
    const refEmail = React.useRef(null);
    const refPassword = React.useRef(null);

    const [test, setTest] = useState('bonjour');

    // test
    const REGEXinput = [
        {
            element: refNom,
            regex: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
            error: 'Veuillez saisir un nom valide'
        },
        {
            element: refPrenom,
            regex: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
            error: 'Veuillez entrer un prénom valide'
        },
        {
            element: refEmail,
            regex: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            error: 'Veuillez saisir une addresse email valide'
        },
        {
            element: refPassword,
            regex: /.{8,}/,
            error: 'Le mot dde passe doit contenir au moins 8 caractères'
        },

    ]

//  $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ Fin $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$


    function handleSubmit(e) {
        // Prenvent pour stoper le rechargement de la page
        e.preventDefault();

        // Vérification de inputs
        let allTest = true;

        for(const rule of REGEXinput) {
            // récupération des valeurs des inputs
            const element = rule.element.current.value;
            
            if(!rule.regex.test(element)) {
                console.log(rule.error);
                // test
                

                allTest = false;

            } else if(date == '' || radio == null) {
                allTest = false;
                console.log('Veuillez saisir une date et un sexe svp');
            }
        }


        // Envoie vers le server
        if (allTest === true) {

            Axios.post(url,{
                name: nom,
                firstname: prenom,
                birth: date,
                sexe: radio,
                email: email,
                password: password
                })
                    .then(() => {
                        console.log('Les données ont bien été envoyéés');
                        historique.push('/profils');
                    })
                    .catch((err) => err + 'Les données ne sont pas envoyés');
        }
    }
    

    return (
        <div className="inscription">
            
            <Navigation />
            
            <div className="info">
                <p className="info--text">Qui êtes-vous ?</p>

                <form className="form" onSubmit={handleSubmit}>
                    {/* bloc information */}
                    <input type="text" placeholder="Nom" className="form--nom" ref={ refNom } value={ nom } onChange={ (e) => setNom(e.target.value) }></input>
                    <p className="error patate">Veuillez entrer un nom valide</p>
                    <input type="text" placeholder="Prenom" className="form--nom" value={ prenom } ref={ refPrenom } onChange={ (e) => setPrenom(e.target.value) }></input> 
                    { test }         
                

                    <div className="form__birth">
                            <p className="form__birth--text">Date de naissance :</p>
                            <input type="date" className="form__birth--date" value={ date } ref={ refDate } onChange={ (e) => setDate(e.target.value) }></input>
                    </div>
                    <p className="error">Entrez votre date de naissance</p>

                    <div className="sexe">
                        <p className="sexe__left">Sexe :</p>
                        <div className="sexe__right">
                            {/* garçon */}
                            <div className="sexe__m sexe__all">
                                <label value="m" className="sexe--label">M</label>
                                <input type="radio" value="m" className="sexe--input" name="radiovalue" ref={ refSexe } onChange={ (e) => setRadio(e.target.value) }></input>
                            </div>
                                {/* fille */}
                            <div className="sexe__f sexe__all">
                                <label value="f" className="sexe--label">F</label>
                                <input type="radio" value="f" className="sexe--input" name="radiovalue" ref={ refSexe } onChange={ (e) => setRadio(e.target.value) }></input>
                            </div>
                        </div>
                    </div>
                    <p className="error">Veuillez renseigner votre sexe</p>

                    {/* bloc compte */}
                    <div className="compte">
                        <p className="compte--texte">Votre compte</p>
                    </div>

                    <input type="text" placeholder="Email" className="form--input" value={ email } ref={ refEmail } onChange={ (e) => setEmail(e.target.value) }></input>
                    <p className="error">Veuillez saisir une addresse mail valide</p>
                    <input type="text" placeholder="Mot de passe" className="form--input" value={ password } ref={ refPassword } onChange={ (e) => setPassword(e.target.value) }></input>
                    <p className="error">Votre mot de passe doit contenir 8 caractères et au moins 1 chriffre</p>

                    <div className="connexion--error"></div>

                    <button className="button" type="submit">Let's go</button>
                </form>
            </div>
        </div>
    )
}
export default Inscription;