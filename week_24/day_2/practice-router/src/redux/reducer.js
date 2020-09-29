import {INCREMENT, DECREMENT, MULTIPLY, DIVIDE} from "./actionTypes";

const initState ={
  counter: 0,
  error: ""
}

const reducer = (state = initState,action) => {
  switch(action.type) {
    case INCREMENT:
      console.log("increasing", state.value);
      return {
        ...state,
        counter: Number(state.counter) + Number(action.payload)

      };
      case DECREMENT:
        console.log("decreasing",state.value);
        return {
          ...state,
          counter: Number(state.counter) - Number(action.payload)
        };
      case MULTIPLY:
        console.log("multiplying",state.value);
        return {
          counter: state.counter * Number(action.payload)
        };
      case DIVIDE:
        console.log("dividing",state.value);
        console.log("num",action.payload)
        if(Number(action.payload) !== 0){

          return {
            ...state,
            counter:Math.floor(state.counter/action.payload)
          };
        }
        else{
          alert("ERROR")
          return state;
        }
      default:
        return state;
  }
}

export default reducer;