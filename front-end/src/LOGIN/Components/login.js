import React, { useState } from 'react';


const Login = () => {

    // Ajout des variables des inputs
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="login">

            <form className="form_-_login">
                <input type="text" placeholder="Email" className="form_-_login--input" value={ email } onChange={ (e) => setEmail(e.target.value) }></input>
                <input type="text" placeholder="Mot de passe" className="form_-_login--input" value={ password } onChange={ (e) => setPassword(e.target.value) }></input>
            </form>

            <div className="connexion--error"></div>

            <button className="button">C'est parti !</button>

        </div>
    )
}

export default Login;