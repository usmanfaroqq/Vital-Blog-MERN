const initState = {
  loading: false,
  loginErrors: [],
  registerErrors: [],
};

const AuthReducer = (state = initState, action) => {
  if (action.type === "SET_LOADER") { 
    return { ...state, loading: true }; 
  } else if (action.type === "CLOSE_LOADER") {
    return { ...state, loading: false };
  } else if (action.type === "REGISTER_ERRORS"){
      return {...state, registerErrors: action.payload}; // getting errors
  }
  return state;
};

export default AuthReducer;
