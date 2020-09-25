import React from "react"
import { Route } from "react-router-dom"
import Home from "./home"
import Tasks from "./task_list"

function Routes(){
    return(
        <>
        <Route path="/" exact render={()=> <Home/>}/>
        <Route path="/tasks" exact render={()=> <Tasks/>}/>
        <Route path="/tasks/:id" render={(props)=> <Tasks {...props}/>}/>
        </>
    )
}
export {Routes}