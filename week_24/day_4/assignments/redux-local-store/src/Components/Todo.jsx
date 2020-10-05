import React from "react";
import { addTodo, toggleStatus, deleteTodo } from "../Redux/action"
import connect from "../Redux/connect";


class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            value:""
        };

    }
    handleDelete=(e) =>{
        const{name:id} = e.target;
        const{deleteTodo} = this.props;
        deleteTodo(id);
    };

    handleToggle=(e) =>{
        const{name:id} = e.target;
        const{toggleStatus} = this.props;
        toggleStatus(id)
    }




    render(){
        const {todo,addTodo} = this.props;
        return(
            <>
            <h2> Todo List</h2>

            <input 
            placeholder="add your task"
            value={this.state.value}
            onChange={(e) =>this.setState({value:e.target.value})}
            >
            </input>
            <button
                onClick={() =>{
                    addTodo(this.state.value);

                }}
            >ADD</button>
            {todo && todo.map((item) =>(
                <div key={item.title}>
                    {item.title}
                    <button 
                    name={item.id}
                    onClick={this.handleDelete}>
                        Delete Items
                    </button>
                    <button name={item.id}
                    onClick={this.handleToggle}>
                        {item.status? "Completed" : "Incompleted"}
                    </button>
                </div>

            ))}
           
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todo: state.todo
    };
};

const mapDipatchToProps = (dispatch) =>({
    addTodo: (payload) => dispatch(addTodo(payload)),
    deleteTodo: (payload) => dispatch(deleteTodo(payload)),
    toggleStatus: (payload) => dispatch(toggleStatus(payload))

});

export default connect (mapStateToProps,mapDipatchToProps)(Todo);