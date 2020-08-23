import React from 'react'
import styles from "./ButtonCard.module.css"

function ButtonCard(props){

    const{size,active} =props;
    let style ={

        width: size === "lg" ? 200 : size === "sm" ? 50 : 100
    };
    return(
        <div className={`${styles.buttonContainer} ${active && styles.active}`} style={{...props.style,...style}}>
            {props.label}
        </div>
    );
}

export default ButtonCard