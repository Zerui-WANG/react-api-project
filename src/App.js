import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import Epic from "./pages/epic/epic.component";
import VideoImageLibrary from "./pages/videoImagelibrary/videoImageLibrary.component";
import Home from "./pages/home/home.component";
import Navbar from "./components/navbar/navbar.component";
import MarsRover from "./pages/marsRover/marsRover.component"

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/epic">
          <Epic />
        </Route>
        <Route path="/marsRover">
          <MarsRover />
        </Route>
        <Route path="/videoImageLibrary">
          <VideoImageLibrary />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
