// importation des indispenssables
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// importation des différentes pages
import Connexion from "./Pages/connexion";
import Inscription from "./Pages/inscription";



function App() {
  return (
    
    <BrowserRouter>
      <Switch>
          <Route path="/" exact component={Connexion} />
          <Route path="/inscription" exact component={Inscription} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
