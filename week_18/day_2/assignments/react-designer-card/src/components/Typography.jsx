import React from 'react'


function Typography(props){
    const{size,uppercase}=props;
    let style ={
        color: "white", 
        fontSize: size,
        textTransform: uppercase ? "uppercase": null
    };
return ( 
<div style={{...props.style,...style}}>{props.title}
    </div>
    );
}


export default Typography;