import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import NavSite from "./NavSite"
import Home from "../pages/Home"
import Videos from "../pages/Videos"
import About from "../pages/About"

const NavRouter = () => {
    return (
        <Router>
        <NavSite></NavSite>
        <Switch>
        <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/videos">
            <Videos />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
        </Router>
    )
}

export default NavRouter
