import React from "react";

const Button =({onClick, active, label}) => (
    <button onClick ={onClick} style ={{background: active ? "green" :"gray"}}>
    {label}
    </button>
);

export default Button;