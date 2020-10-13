import React from 'react'
import styles from './Button.module.css'

const Button = ({label, onClick}) => {
    return (
        <div data-testid = "button" onClick = {onClick}  style = {{margin: "auto", width: 200}}>
            <div className = {styles.button} >
            {label}
        </div>
        </div>
        
    )
}

export default Button