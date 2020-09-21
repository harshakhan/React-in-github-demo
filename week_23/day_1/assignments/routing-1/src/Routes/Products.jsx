import React from "react";
 import {Link,Route} from "react-router-dom"



function Product(){
    return (
        <>
        <h1>Products</h1>
       <div style ={{ display: "flex"}}>
           <div style={{ margin: "auto"}}>

              <Link to ="/products/fullstack"> Fullstack Program </Link> <br/>
              <Link to ="/products/android"> Android Program </Link>
           </div>
           <div style={{ margin: "auto"}} >
               <Route path="/products/fullstack">
                   <h3>Fullstack</h3>
               </Route>
               <Route path="/products/android">
                   <h3>Android</h3>
               </Route>
           </div>
       </div> 
       </>
    )
}
export {Product};