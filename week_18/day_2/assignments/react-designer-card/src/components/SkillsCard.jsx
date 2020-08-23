import React from 'react'
import styles from "./ButtonCard.module.css"

function SkillsCard(props){
    const {size,active} = props;
    return(
        <div 
        className={`${styles.skillsContainer} ${active && styles.active}`} 
        style={{...props.style}}>
            {props.label}
        </div>
    );
}

export default SkillsCard;