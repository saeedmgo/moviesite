import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import People from "./pages/People/People";
import "./style.css";
export default function Pages() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/People">
        <People />
      </Route>
    </Switch>
  );
}
