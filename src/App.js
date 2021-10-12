import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import Epic from "./pages/epic/epic.component";
import About from "./pages/about/about.component";
import Home from "./pages/home/home.component";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/epic">
          <Epic />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
