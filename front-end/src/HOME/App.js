// importation des indispensables
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Accueil from './Pages/accueil';
import Modify from "./Pages/modify";
import Setting from "./Pages/setting";


const App = () => {
    return (
        <>
        {/* Importation des pages en attendant la gestion des routes */}
        <Modify />
        </>
    );
}

export default App;