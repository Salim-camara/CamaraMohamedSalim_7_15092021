// importation des indispensables
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Accueil from './Pages/accueil';
import Setting from "./Pages/setting";


const App = () => {
    return (
        <>
        {/* Importation des pages en attendant la gestion des routes */}
        <Setting />
        </>
    );
}

export default App;