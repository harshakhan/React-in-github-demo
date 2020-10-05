import { ADD_COUNTER, ADD_TODO, REDUCE_COUNTER,DELETE_TODO,TOGGLE_TODO, COMPLETED_TASK} from "./actionTypes";


export const initState ={
    counter: 0,
    todo: []
};

export default (state = initState, {type,payload}) => {
    console.log(type, payload);
    switch(type) {
        case ADD_COUNTER:
            return{
                ...state,
                counter: state.counter + payload
            };
        case REDUCE_COUNTER:
            return {
                ...state,
                counter:state.counter - payload
            }
        case ADD_TODO:
            return {
                ...state,
                todo:[...state.todo, payload]
            };
        case DELETE_TODO:
                return {
                  ...state,
                  todo: state.todo.filter((item) => item.id !== payload)
                };
        case TOGGLE_TODO:
            let newTodo = state.todo.find(item => item.id === payload)
            console.log(newTodo)
            newTodo.status = !newTodo.status
            return {
                ...state,
                todo: [...state.todo]
            };
        // case COMPLETED_TASK:
        //     let newStatus = state.todo.filter(item => item.id === action.payload?item.status=true:item)
        //     return{
        //         ...state,
        //         todo:newStatus
        //     }

            default:
                return state
    }
};