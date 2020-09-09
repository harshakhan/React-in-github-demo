import React from 'react';

class Clock extends React.Component{
  constructor(props){
    super(props)
    this.state={
      date:'',
      count:0,
      date: new Date()
    }
    //1

    console.log('constructor is called first')
  }

  componentDidMount(){
    //3
    this.timerId=setInterval(()=>{
     this.handleTick()
    },1000)
  }

  componentDidUpdate(){
    //4
    
    console.log('componentDidUpdate called')
  }

  componentWillUnmount(){
      clearInterval(this.timerId)
      console.log('Component is Unmounted')


  }


  handleTick =()=>{
    this.setState({
      date:new Date()
    })
  }

  render(){
    //2

    console.log('render method called')
    return(
      <div>
        {/* {this.state.count} */}
        <h2>It is {this.state.date.toLocaleString()}</h2>
      </div>
    )
  }
}

export default Clock;