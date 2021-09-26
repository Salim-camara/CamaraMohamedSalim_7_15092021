import React from "react";
import Navigation from "../Components/nav";
import PdP from "../../img/lama.png"

const Setting = () => {
    
    return(
        <div className="set">

            <Navigation />

            <div className="container">

                {/* partie PdP */}
                <div className="left">
                    <img src={ PdP } className="left--pdp" />
                </div>

                {/* Partie description */}
                <div className="right">

                    <div className="right__title">
                        <h1>Lamasticot</h1>
                    </div>
                    <div className="right__bio">
                        <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h2>
                    </div>
                    <div className="right__age">
                        <p>21 ans</p>
                        <i class="fas fa-mars"></i>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Setting;