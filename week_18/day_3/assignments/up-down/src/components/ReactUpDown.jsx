import React from "react"


class ReactUpDown extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            value: 0
        };
    }

    handleAdd =() =>{
        this.setState({
            value : this.state.value+1
        })

    }

    handleReduce =() => {
        this.setState({
            value: this.state.value-1
        })


    }

    render() {
        return (
        <>
            <div>Counter: {this.state.value}</div>
            <button onClick={this.handleAdd}>ADD</button>
            <button onClick={this.handleReduce}>DECREASE</button>
        </>
        )
    }
}

export default ReactUpDown