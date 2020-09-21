import React from "react"
import {Route} from "react-router-dom";
import Navbar from "../Components/Navbar"
import {Home } from "./Home";
import { About} from "./About";
import { Contact } from "./Contact"
import { Product } from "./Products";

function Routes(){
    return(
        <>
        <Route path = "/" render={() => <Navbar/>} />
            <Route path ="/" exact render={()=> <Home/>}/>
            <Route path ="/about" render={()=> <About/>}/>
            <Route path ="/contact" render={()=> <Contact/>}/>
            <Route path ="/products" render={()=> <Product/>}/>
        </>
    )
}

export {Routes};