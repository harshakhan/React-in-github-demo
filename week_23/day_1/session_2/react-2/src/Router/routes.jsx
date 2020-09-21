import React from "react"
import { Route } from "react-router-dom"

function Routes(){
    return(
        <>
        <Route path="/" exact render={()=> <div>Home Page</div>}/>
        <Route path="/contact" render={()=> <div>Contact Page</div>}/>
        <Route path="/about-us" render={()=> <div>About Page</div>}/>
        <Route path="/services" render={()=> <div>Services Page</div>}/>
        <Route path="/login" render={()=> <div>Login Page</div>}/>
        </>
    )
}
export { Routes}