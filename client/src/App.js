import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Game from "./apps/Game/Game";
import { Home } from "./apps/Home/Home";
import Join from "./apps/Join/Join";
import Login from "./apps/Login/Login";
import Error404 from "./components/Error404";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/room/:name"></Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/join">
          <Join />
        </Route>
        <Route path="/game">
          <Game />
        </Route>
        <Route>
          <Error404></Error404>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
