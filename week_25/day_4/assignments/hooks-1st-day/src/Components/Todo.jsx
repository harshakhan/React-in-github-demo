import React, {useState} from 'react'
import style from "./todo.module.css"


export default function Todo(){
    const [newTodo, setNewTodo] = useState('')
    const [todos, setTodos] = useState([
        {id:1, text: "Buy Milk"},
        {id:2, text: "Buy Bread"}
    ])

    function handleTodoChange(e){
        e.preventDefault()
        setNewTodo(e.target.value)

    }

    function handleNewTodo(e){
        e.preventDefault()
        if(newTodo === '') return
        setTodos([...todos,{id:Date.now(), text: newTodo}])
        e.target.reset()
        console.log(newTodo)
    }

    function removeTodo(id) {
        setTodos(todos.filter((todo) => todo.id != id))
    }

    return(
        <div className={style.card}>

        <h1>Todos</h1>
        <form onSubmit={handleNewTodo}>
            <input placeholder="Your todo.." onChange={handleTodoChange}/>
            <ul className={style.todolist}>
                {todos.map((todo) =>(
                    <li ley={todo.id} className={style.todo}>
                        {todo.text}

                        <a href="#" onClick={() => removeTodo(todo.id)}> X </a>
                    </li>
                ))}
            </ul>
        </form>
        </div>
    )
}