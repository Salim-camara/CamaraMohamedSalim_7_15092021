import React from "react";
import Navigation from "../Components/nav";


const newPost = () => {

    return (
        <div className="np">
            <Navigation />
            <div className="np__container">
                <h1 className="np__container--title">Exprimez-vous !</h1>
                <form className="np__form">

                    <div className="np__form--title">
                        <p className="np--paragraphe">Titre</p>
                        <input type="text" className="np__form--title--titre"></input>
                    </div>

                    <div className="np__form--description">
                        <p className="np--paragraphe">Description</p>
                        <textarea className="np__form--description--ta"></textarea>
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

export default newPost;