import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./apps/Home";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/room/:name"></Route>
        <Route path="/login"></Route>
        <Route path="/join"></Route>
      </Switch>
    </div>
  );
}

export default App;
