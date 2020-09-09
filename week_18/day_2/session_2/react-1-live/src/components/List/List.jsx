// import React from 'react';
// import styles from "./List.module.css"


// function List(props){
//   console.log(props);
//   const{title,data}=props
//   console.log(styles)
//     return(
//       <>
//           <h3 className={styles.header}>{props.title}</h3>
//             <ul>
//               <li>{data[0]}</li>
//               <li>{data[1]}</li>
//               <li>{data[2]}</li>
//             </ul>
//       </>
//     )
// }
// export default List



// ----------------------------------------------


import React from 'react';
import styles from "./List.module.css"


function List(props){
  const{title,data}=props
 
    return(
      <div className={styles.main}>
          <h3>{title}</h3>
            <ul>
              <li>{data[0]}</li>
              <li>{data[1]}</li>
              <li>{data[2]}</li>
            </ul>
      </div>
    )
}
export default List