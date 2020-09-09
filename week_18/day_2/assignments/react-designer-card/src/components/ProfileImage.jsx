import React from 'react'

export default function ProfileImage(props){
    const {src,rounded,alt,outline} =props;
    let style ={margin: 20};
    style = rounded ? {borderRadius:"50%", ...style} :style;
    style = outline ? { border: "1px solid #80DEEA",padding:5,...style} : style;

    return <img src={src} style ={{...props.style,...style}} alt={alt} />

    
}


// export default Image(props)