// Routes.js

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home"; // Importa tus componentes
import CrearPost from "./rutaCrearpost"; // Importa la ruta de creación de posts

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/crear-post" component={CrearPost} />{" "}
        {/* Configura la ruta de creación de posts */}
        {/* Otras rutas */}
      </Switch>
    </Router>
  );
};

export default Routes;
