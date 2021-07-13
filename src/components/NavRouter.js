import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import NavSite from "./NavSite"
import Home from "../pages/Home"
import Filmes from "../pages/Filmes"
import About from "../pages/About"
import Details from "../pages/Details"
import AddFilme from "../pages/AddFilme"

const NavRouter = () => {
    return (
        <Router>
        <NavSite></NavSite>
        <Switch>
        <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/filmes">
            <Filmes />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route path="/filmes/details/" component ={(props) => <Details {...props}/>} >
        </Route>
        <Route exact path="/AddFilme">
          <AddFilme></AddFilme>
        </Route>
        </Switch>
        </Router>
    )
}

export default NavRouter
