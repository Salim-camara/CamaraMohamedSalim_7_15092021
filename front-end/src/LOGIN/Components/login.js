import React from 'react';


const Login = () => {
    return (
        <div className="login">

            <form className="form">
                <input type="text" placeholder="Email" className="form--input"></input>
                <input type="text" placeholder="Mot de passe" className="form--input"></input>
            </form>

            <div className="connexion--error"></div>

            <button className="button">C'est parti !</button>

        </div>
    )
}

export default Login;