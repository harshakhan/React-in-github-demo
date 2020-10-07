const initState = {
    isAuth: false
  };
  
  export default (state = initState, { type, action }) => {
    switch (type) {
      case "AUTH_SUCCESS":
        return {
          ...state,
          isAuth: true
        };
      case "LOGOUT":
        return {
          ...state,
          isAuth: false
        };
      default:
        return state;
    }
  };
  