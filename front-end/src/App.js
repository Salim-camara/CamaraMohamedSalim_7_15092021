// importation des indispensables
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// importation des différentes pages
import Connexion from "./LOGIN/Pages/connexion";
import Inscription from "./LOGIN/Pages/inscription";
import Setting from "./HOME/Pages/setting";
import Modify from "./HOME/Pages/modify";



function App() {
  return (
    
    <BrowserRouter>
      <Switch>
          <Route path="/profils" exat component={Setting} />
          <Route path="/" exact component={Connexion} />
          <Route path="/inscription" exact component={Inscription} />
          <Route path="/modify" exact component={Modify} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
