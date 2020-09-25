import React from "react";
import {NavLink} from "react-router-dom";


const links =[

    {
        to:"/",
        title:"Home",
    },
    {
        to:"/dashboard/products",
        title:"Products",
    },
    {
        to:"/login",
        title:"Login",
    },
    {
        to:"/dashbord",
        title:"Dashboard"
    },
    
];

function Navbar() {
    return (
        <>
        <div style={{display: "flex"}}>
            {links.map(({ to,title}) =>(
                <NavLink
                activeStyle={{ color: "red"}}
                exact
                key={to}
                style={{padding:10}}
                to={to}
                >
                    {title}
                </NavLink>
            ))}

        </div>
        </>
    )
}

export default Navbar;