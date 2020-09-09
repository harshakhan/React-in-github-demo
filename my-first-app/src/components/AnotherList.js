import React from 'react';
import ListRow from './ListRow'

class AnotherList extends React.Component{
    render(){
        return(
            <div>
                <h1>Another List</h1>
               <ol>
                   <ListRow/>
                   <ListRow/>
                   <ListRow/>
               </ol>
            </div>
        )
    }
}

export default AnotherList