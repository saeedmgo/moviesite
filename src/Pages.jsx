import React from "react";
import { Switch, Route } from "react-router-dom";
import Moviess from "./component/allMovies/Moviess";
import Home from "./pages/Home/Home";
import MovieDetails from "./pages/MovieDetails/MovieDetails";
import People from "./pages/People/People";
import "./style.css";
export default function Pages() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/movie/:id">
        <MovieDetails />
      </Route>
      <Route path="/People">
        <People />
      </Route>
    </Switch>
  );
}
