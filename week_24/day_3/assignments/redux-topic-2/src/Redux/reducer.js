import { ADD_COUNTER, ADD_TODO, REDUCE_COUNTER,DELETE_TODO} from "./actionTypes";


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

            default:
                return state
    }
};