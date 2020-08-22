import React from 'react';
import styles from "./list.module.css"


function List1(p){
    console.log(p)
    const{title,data} =p

    return(
        <>
        <h1>{title}</h1>
            <ul>
                <li className={styles.tag1}>{data[0]}</li>
                <li className = {styles.tag1}>{data[1]}</li>
                <li className ={styles.tag3}>{data[2]}</li>
                <li className = {styles.tag3}>{data[3]}</li>
            </ul>
        </>
    )
}

export default List1