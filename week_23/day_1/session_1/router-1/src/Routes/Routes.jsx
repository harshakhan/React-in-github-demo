import React from "react"
import {Route} from "react-router-dom"

function Routes(){
    return (

    <>
    <Route path = "/" exact render ={() => <div>Home Page</div>}/>
    <Route path = "/contact" exact render ={()=> <div>Contact Page</div>}/>
    <Router path ="/about-us" exact render = {() => <div>About Page</div>}/>
    <Router path ="/services" render ={()=> <div>Service Page</div>}/>
    <Router path = "/login" render={()=> <div>Login Page</div>}/>
    </>

    )
}

export {Routes}