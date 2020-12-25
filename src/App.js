import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import "./App.css";
import Nav from "./components/Nav";
import FetchPlanets from "./components/FetchPlanets.js";
import Planets from "./components/Planets.js";
import FavPlanets from "./components/FavPlanets";
import { PlanetProvider } from "./components/PlanetContext";

export default function App() {
  const [selection, setSelection] = useState("");

  return (
    <PlanetProvider>
      <Router>

        <div className="App">
          <Nav />
          <FetchPlanets />
          <Switch>
            <Route exact path="/"><Planets /></Route>
            <Route path="/favs"><FavPlanets /></Route>
          </Switch>

        </div>
      </Router>
    </PlanetProvider >
  );
}