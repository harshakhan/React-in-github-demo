import { Route } from "react-router-dom"
import React from "react"
import Register from "../Components/Registration"
import Login from "../Components/Login"
import Dashboard from "../Components/Dashboard"
import Profile from "../Components/Profile"
 

function Routes(){
    return(
        <>
        <Route path = '/register' render={(props) => <Register {...props}/> } />
        <Route path = '/login' render={(props) => <Login {...props} />} />
        <Route path = '/dashboard' render={(props) => <Dashboard {...props} />} />
        <Route path = '/profile' render={(props) => <Profile {...props} />} />
        </>
    )
}
export  default Routes

