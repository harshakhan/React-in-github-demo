import React from "react"
import { Link } from "react-router-dom"

const link = [
    {
        to: '/',
        title: "Home"
    },
    {
        to: '/contact',
        title: "Contact"
    },
    {
        to: '/about-us',
        title: "About"
    },
    {
        to: '/services',
        title: "Services"
    },
    {
        to: '/login',
        title: "Login"
    }
]


function Navbar() {
    return (
        <>
            <div style={{ display: "flex" }}>
                {link.map(({ to, title }) => {
                    return (
                        <Link key={to} style={{ padding: 10 }} to={to}>
                            {title}
                        </Link>
                    )
                })
                }
            </div>
        </>
    );
}

export default Navbar