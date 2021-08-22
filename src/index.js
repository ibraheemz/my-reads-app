import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./Search";

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/">
        <App />
      </Route>

      <Route path="/Search">
        <Search />
      </Route>
    </Switch>
  </Router>,

  document.getElementById("root")
);
