import React from "react"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle"
import { Route, Switch } from "react-router-dom"
import { Home } from "./Home"
import {About} from"./About"
import {Service} from "./Service"
import {Contact} from "./Contact"
import { Navbar } from "../Components/Navbar"

const Routes =() => {
    return (
        <>
        <Navbar/>
            <Switch>
            <Route path="/" exact render={() => <Home />} />
            <Route path="/about" render={() => <About />} />
            <Route path="/service" render={() => <Service />} />
            <Route path="/contact" render={() => <Contact/>} />

            </Switch>
        </>
    )
}

export {Routes}