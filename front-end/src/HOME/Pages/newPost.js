import React, { useState } from "react";
import Navigation from "../Components/nav";
import Axios from "axios";


const Newpost = () => {

    const [titre, setTitre] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const url = 'http://localhost:3001/posts';

    const handleSubmit = (e) => {
        e.preventDefault();
        
        Axios.post(url, {
            title: titre,
            description: description,
            imageUrl: image
        })
        .then(() => console.log('les données ont bien été envoyées'))
        .catch((err) => console.log('les données nont pas été envoyées ' + err));
    }

    // base64 convertisseur
    function getBase64(e) {
        let file = e.target.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
          setImage(reader.result);
        };
        reader.onerror = function (error) {
          console.log('Error: ', error);
        };
     }

     const handleImage = () => {
         setImage(null);
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
                        <label for="file_button" className="file_button--style">Ajoutez une image !</label>
                        <input type="file" className="np__form--file--in" id="file_button" accept="image/png, image/jpeg, image/jpg" onChange={getBase64}></input>
                        {image && (
                            <div className="np__form--file--container">
                                <img src={image} className="np__form--file--container--img"/>
                                <button className="delete" onClick={handleImage}>x</button>
                            </div>
                        )}
                    </div>
                    <button type="submit" className="np__form--valid">Valider</button>
                </form>
            </div>
        </div>
    )
}

export default Newpost;