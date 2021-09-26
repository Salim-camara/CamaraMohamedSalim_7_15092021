import React, { useEffect, useState } from 'react';
import Login from '../Components/login';
import Navigation from '../Components/nav';
import Axios from 'axios';
import { Link } from 'react-router-dom';


const Connexion = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const url = 'http://localhost:3001/connexion'

    function handleSubmit(e) {
         e.preventDefault();
         console.log(email, password)

         Axios.post(url, {
                email: email,
                password: password
         })
            .then(() => console.log('les données ont été envoyées'))
            .catch((err) => console.log('les données nont pas été envoyées'));

    }



    return (
        <div className="connexion">

            <Navigation />

            <form className="form" onSubmit={ handleSubmit }>
                <input type="text" placeholder="Email" className="form--input" value={ email } onChange={ (e) => setEmail(e.target.value) }></input>
                <input type="text" placeholder="Mot de passe" className="form--input" value={ password } onChange={ (e) => setPassword(e.target.value) }></input>

                <div className="connexion--error"></div>

                {/* Accès à la page HOME */}
                <Link to="/HOME">Accès TEMPORAIRE à la page HOME</Link>

                <button className="button" type="submit">Let's go</button>
            </form>

        </div>
    );

}

export default Connexion;