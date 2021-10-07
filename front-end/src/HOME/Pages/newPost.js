import React, { useState } from "react";
import Navigation from "../Components/nav";
import Axios from "axios";


const Newpost = () => {

    const [titre, setTitre] = useState('');
    const [description, setDescription] = useState('');
    const url = 'http://localhost:3001/posts'

    const handleSubmit = (e) => {
        e.preventDefault();
        
        Axios.post(url, {
            title: titre,
            description: description
        })
        .then(() => console.log('les données ont bien été envoyées'))
        .catch((err) => console.log('les données nont pas été envoyées ' + err));
    }



    return (
        <div className="np">
            <Navigation />
            <div className="np__container">
                <h1 className="np__container--title">Exprimez-vous !</h1>
                <form className="np__form" onSubmit={handleSubmit}>

                    <div className="np__form--title">
                        <p className="np--paragraphe">Titre</p>
                        <input type="text" className="np__form--title--titre" value={titre} onChange={ (e) => setTitre(e.target.value) }></input>
                    </div>

                    <div className="np__form--description">
                        <p className="np--paragraphe">Description</p>
                        <textarea className="np__form--description--ta" value={description} onChange={ (e) => setDescription(e.target.value) }></textarea>
                    </div>

                    <div className="np__form--file">
                        <p className="np--paragraphe">Ajoutez une image !</p>
                        <input type="file" className="np__form--file--in" accept="image/png, image/jpeg, image/jpg"></input>
                    </div>
                    <button type="submit" className="np__form--valid">Valider</button>
                </form>
            </div>
        </div>
    )
}

export default Newpost;